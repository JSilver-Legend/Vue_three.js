import { Auth } from "aws-amplify"
import axios from 'axios'
import qs from 'qs'
import { useAuthStore } from "@/store/auth"
import { usePlatformSysStore } from "@/store/platformSys"
import { usePlatformNavigationStore } from "@/store/platformNavigation"
import config from "@/config.json"
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers"
import { CognitoIdentityClient, GetIdCommand } from "@aws-sdk/client-cognito-identity"
import { DynamoDBClient, PutItemCommand, DeleteItemCommand, GetItemCommand } from "@aws-sdk/client-dynamodb"
import { CognitoIdentityProviderClient, AdminUpdateUserAttributesCommand } from "@aws-sdk/client-cognito-identity-provider"
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb"
import * as _ from "lodash"

export const awsRouteGuard = async (to, from, next) => {

    const authStore = useAuthStore()
    const platformSysStore = usePlatformSysStore()
    const platformNavigationStore = usePlatformNavigationStore()
    
    try {

        // Store aws auth user
        authStore.awsAuthUser = await Auth.currentAuthenticatedUser()
        console.log('AWS AUTH USER', authStore.awsAuthUser)

        // write custom:identID to store
        if (authStore.awsAuthUser.attributes['custom:identID']) {
            authStore.identID = authStore.awsAuthUser.attributes['custom:identID']
        }

        // routing to authScreens for signIn
        const preferredMFA = await Auth.getPreferredMFA(authStore.awsAuthUser)
        if ((authStore.awsAuthUser.attributes['custom:MFA'] == 'mfa-software' || authStore.awsAuthUser.attributes['custom:MFA'] == 'mfa-sms')
            && preferredMFA == 'NOMFA' && authStore.tenantIds.authenticationFlowType != 'CUSTOM_AUTH') {
            return next("/login")
        }

        // assigns mongo atlas app service app
        const appAssignment = await authStore.getRealmApp({ REALM_APP_ID: authStore.awsAuthUser.signInUserSession.idToken.payload['custom:realm-app-id'] })
        console.log('MONGO ATLAS AS ASSIGNMENT', appAssignment)

        const isRealmAuthenticated = authStore.isRealmAuthenticated

        // mongo atlas app service app is NOT authenticated
        if (!isRealmAuthenticated) {

            // mongo atlas app service app assignment
            const appAssignment = await authStore.assignRealmApp({ REALM_APP_ID: authStore.awsAuthUser.signInUserSession.idToken.payload['custom:realm-app-id'] })
            console.log('MONGO ATLAS AS ASSIGNMENT', appAssignment)


            // get apiToken AWS apiGateway+lambda
            //console.log('getting apiToken')
            const data = qs.stringify({
                id_token: authStore.awsAuthUser.signInUserSession.idToken.jwtToken
            })

            let apiToken = null
            if (config.authVerfication !== "userToken") {
                const apiTokenResponse = await axios.post(`https://cwilj9h2ig.execute-api.eu-west-1.amazonaws.com/dev/v1/auth/${authStore.awsAuthUser.pool.userPoolId}/token`,
                    data,
                    {
                        headers: { 'content-type': 'application/x-www-form-urlencoded' },
                    }
                )
                console.log('AWS API TOKEN', apiTokenResponse)
                apiToken = apiTokenResponse.data.apiToken
            }

            // sending appToken for realm app access
            //console.log('sending apiToken to realm app')
            await authStore.realmCustomLogin({
                apiToken: apiToken,
                id_token: authStore.awsAuthUser.signInUserSession.idToken.jwtToken,
                userPoolId: authStore.awsAuthUser.pool.userPoolId,
                verification: "userToken"
            }, authStore.awsAuthUser)
        }

        // get platform config + localJson
        if (authStore.navigation == 'platformNavigation') {
            // get get platform config
            await platformSysStore.platformConfigGet()
            console.log('MONGO ATLAS AS PLATFORM CONFIG', JSON.parse(JSON.stringify(platformSysStore.platformConfig)))
        }

        // aws cognito identity pool configuration
        const awsConfig = {
            region: authStore.tenantIds.region,
            credentials: fromCognitoIdentityPool({
                identityPoolId: authStore.awsAuthUser.attributes["custom:identityPoolID"],
                logins: {
                    [`cognito-idp.eu-west-1.amazonaws.com/${authStore.awsAuthUser.pool.userPoolId}`]: authStore.awsAuthUser.signInUserSession.idToken.jwtToken
                },
                clientConfig: { region: authStore.tenantIds.region },
            })
        }

        // check if identID is "noID"" in AWSuser
        if (authStore.awsAuthUser.attributes['custom:identID'] == "noID") {
            console.log('condition identID NOT set')

            // Get IdentID
            const cognitoIdentityClient = new CognitoIdentityClient(awsConfig)
            const getIdCommand = new GetIdCommand({
                IdentityPoolId: authStore.awsAuthUser.attributes["custom:identityPoolID"],
                Logins: {
                    [`cognito-idp.eu-west-1.amazonaws.com/${authStore.awsAuthUser.pool.userPoolId}`]: authStore.awsAuthUser.signInUserSession.idToken.jwtToken
                },
                AccountId: "815556349914"
            })
            const getIdResponse = await cognitoIdentityClient.send(getIdCommand)
            console.log('identtID response:', getIdResponse)

            // write getIdResponse to store
            authStore.identID = getIdResponse.IdentityId

            // get predefined item
            const dynamoDBClient = new DynamoDBClient(awsConfig)
            const getItemCommandInput = {
                Key: marshall({
                    PK: authStore.awsAuthUser.attributes["sub"]
                }),
                TableName: authStore.awsAuthUser.attributes["custom:platformId"] + "-xtra"
            }
            const getItemCommand = new GetItemCommand(getItemCommandInput)
            const getItemResponse = await dynamoDBClient.send(getItemCommand)
            console.log('helper item response', getItemResponse.Item)

            // write to dynamoDB customUser
            if (getItemResponse.Item) {

                // write identityID to user attribute
                const adminUpdateUserAttributesParams = {
                    UserPoolId: authStore.awsAuthUser.pool.userPoolId,
                    Username: authStore.awsAuthUser.username,
                    UserAttributes: [
                        { Name: 'custom:identID', Value: authStore.identID },
                        { Name: 'custom:firstLogin', Value: Date.now().toString() }
                    ]
                }
                const cognitoIdentityProviderClient = new CognitoIdentityProviderClient(awsConfig)
                const adminUpdateUserAttributesCommand = new AdminUpdateUserAttributesCommand(adminUpdateUserAttributesParams)
                const adminUpdateUserAttributesResponse = await cognitoIdentityProviderClient.send(adminUpdateUserAttributesCommand)
                console.log('attribute write response:', adminUpdateUserAttributesResponse)

                const itemParams = {
                    identID: authStore.identID,
                    SK: authStore.awsAuthUser.attributes["sub"],
                    ..._.omit(unmarshall(getItemResponse.Item), ["PK"])
                }
                const putItemCommand = new PutItemCommand({
                    Item: marshall(itemParams),
                    TableName: authStore.awsAuthUser.attributes["custom:platformId"]
                })
                const putItemResponse = await dynamoDBClient.send(putItemCommand)
                console.log('WRITE DYNAMO USER', putItemResponse)
                // assign item to store
                authStore.user = itemParams

                // delete helper item
                const deleteItemCommand = new DeleteItemCommand({
                    Key: marshall({
                        PK: authStore.awsAuthUser.attributes["sub"]
                    }),
                    TableName: authStore.awsAuthUser.attributes["custom:platformId"] + "-xtra"
                })
                const deleteItemResponse = await dynamoDBClient.send(deleteItemCommand)
                console.log('helper item delete response', deleteItemResponse)
            }

        }
        else {
            // assign identID from store
            const dynamoDBClient = new DynamoDBClient(awsConfig)
            const getItemCommandInput = {
                Key: marshall({
                    identID: authStore.identID,
                    SK: authStore.awsAuthUser.attributes["sub"],
                }),
                TableName: authStore.awsAuthUser.attributes["custom:platformId"]
            }
            const getItemCommand = new GetItemCommand(getItemCommandInput)
            const getItemResponse = await dynamoDBClient.send(getItemCommand)

            // assingn item to store
            authStore.user = unmarshall(getItemResponse.Item)
            console.log('GET DYNAMO USER', unmarshall(getItemResponse.Item))

        }


        // get get platform localJson
        await platformNavigationStore.loadPlatformNavigation({
            accessRole: authStore.user.accessRole,
            permittedPlatformNavigationPath: authStore.user.permittedPlatformNavigationPath
        })
        platformSysStore.pageLoading = false

        return next()

    } catch (err) {
        console.log('aws login redirect', err)
        platformSysStore.pageLoading = false
        return next("/login")
    }
}
