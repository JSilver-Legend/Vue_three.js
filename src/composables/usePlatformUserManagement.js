
import { Auth } from "aws-amplify"
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";
import {
    CognitoIdentityProviderClient,
    AdminCreateUserCommand,
    ListUsersCommand,
    AdminSetUserPasswordCommand,
    AdminSetUserMFAPreferenceCommand,
    AdminDeleteUserCommand
} from "@aws-sdk/client-cognito-identity-provider";
import { DynamoDBClient, PutItemCommand, DeleteItemCommand, GetItemCommand } from "@aws-sdk/client-dynamodb"
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb"

import { useAuthStore } from "@/store/auth"
import { usePlatformSysStore } from "@/store/platformSys"
import { useHelperFunctions } from "@/composables/useHelperFunctions";

export function usePlatformUserManagement() {

    const getAWSCconfig = async () => {
        const authStore = useAuthStore()
        const user = await Auth.currentAuthenticatedUser()
        const config = {
            region: authStore.tenantIds.region,
            credentials: fromCognitoIdentityPool({
                identityPoolId: user.attributes["custom:identityPoolID"],
                logins: {
                    [`cognito-idp.eu-west-1.amazonaws.com/${user.pool.userPoolId}`]: user.signInUserSession.idToken.jwtToken
                },
                clientConfig: { region: authStore.tenantIds.region },
            })
        }
        return config
    }

    const setAwsUserPassword = async (username, password) => {
        try {
            const awsUser = await Auth.currentAuthenticatedUser()
            const adminUpdateUserAttributesParams = {
                UserPoolId: awsUser.pool.userPoolId,
                Username: username,
                Password: password, // 'Abcd1234!',
                Permanent: true
            }
            const cognitoIdentityProviderClient = new CognitoIdentityProviderClient(await getAWSCconfig())
            const adminSetUserPasswordCommand = new AdminSetUserPasswordCommand(adminUpdateUserAttributesParams)
            const adminSetUserPasswordResponse = await cognitoIdentityProviderClient.send(adminSetUserPasswordCommand)
            console.log('attribute set passworde response:', adminSetUserPasswordResponse)
        } catch (error) {
            console.log('attribute set passworde error:', error)
        }
    }

    const platformUserGet = async () => {

        return new Promise(async (resolve, reject) => {
            try {
                const user = await Auth.currentAuthenticatedUser()
                const client = new CognitoIdentityProviderClient(await getAWSCconfig())
                const command = new ListUsersCommand({ UserPoolId: user.pool.userPoolId, })
                const response = await client.send(command)
                let platformUsers = response.Users
                // Deconstruct attributes and put in root
                platformUsers.forEach(elementUser => {
                    elementUser.Attributes.forEach(elementAttr => {
                        elementUser[elementAttr.Name] = elementAttr.Value
                    })
                })
                resolve(platformUsers)
            } catch (error) {
                console.log("DYNAMODB GET USER LIST ERROR", error)
                reject(error)
            }
        })
    }

    // EDIT dynamoUser
    const platformUserEdit = async (payload) => {
        console.log('playformSysStore | platformUserEdit | payload ->', payload)
        return new Promise(async (resolve, reject) => {
            try {
                const identID = payload['custom:identID']
                let getItemCommandInput = null
                if (identID) {
                    getItemCommandInput = {
                        Key: marshall({
                            identID: payload['custom:identID'],
                            SK: payload.Username,
                        }),
                        TableName: payload["custom:platformId"]
                    }
                } else {
                    getItemCommandInput = {
                        Key: marshall({
                            PK: payload.Username
                        }),
                        TableName: payload["custom:platformId"] + "-xtra"
                    }
                }

                const dynamoDBClient = new DynamoDBClient(await getAWSCconfig())
                const getItemCommand = new GetItemCommand(getItemCommandInput)
                const getItemResponse = await dynamoDBClient.send(getItemCommand)

                // assingn item to store
                let selectedUser = unmarshall(getItemResponse.Item)
                selectedUser.config = selectedUser.config ? selectedUser.config : {}
                selectedUser.permittedPlatformNavigationPath = selectedUser.permittedPlatformNavigationPath ? selectedUser.permittedPlatformNavigationPath : []

                // updateTreeCheckStatus(platformNavigationPathTree.value[0].path, selectedPlatformUser.value.permittedPlatformNavigationPath)

                console.log('READ USER FROM DYNAMODB', unmarshall(getItemResponse.Item))

                resolve(selectedUser)

            } catch (error) {
                console.log('DYNAMODB GET ITEM ERROR', error)
                reject(error)
            }
        })
    }

    // UPDATE dynamoUser
    const platformUserUpdate = async (payload) => {

        return new Promise(async (resolve, reject) => {
            try {
                const user = await Auth.currentAuthenticatedUser()
                const dynamoDBClient = new DynamoDBClient(await getAWSCconfig());
                const putItemCommand = new PutItemCommand({
                    Item: marshall(payload),
                    TableName: user.attributes["custom:platformId"] + (payload.PK ? '-xtra' : '')
                })
                const putItemResponse = await dynamoDBClient.send(putItemCommand)
                console.log('putItemResponse', putItemResponse)
                resolve(putItemResponse)
            } catch (error) {
                console.log('DYNAMODB UPDATE ITEM ERROR', error)
                reject(error)
            }
        })
    }

    // DELETE AWSuser + dynamoUser
    const platformUserDelete = async (payload) => {
        return new Promise(async (resolve, reject) => {
            try {

                const user = await Auth.currentAuthenticatedUser()
                const client = new CognitoIdentityProviderClient(await getAWSCconfig());
                const command = new AdminDeleteUserCommand({
                    "UserPoolId": user.pool.userPoolId,
                    "Username": payload.email
                });
                const response = await client.send(command);
                console.log('response', response)

                // delete dynamodb item
                const identID = payload['custom:identID']

                if (identID) {
                    const dynamoDBClient = new DynamoDBClient(await getAWSCconfig())
                    const deleteItemCommand = new DeleteItemCommand({
                        Key: marshall({
                            identID: identID,
                            SK: payload.Username,
                        }),
                        TableName: payload["custom:platformId"]
                    })
                    const deleteItemResponse = await dynamoDBClient.send(deleteItemCommand)
                    console.log('dynamodb item delete response', deleteItemResponse)
                } else {
                    const dynamoDBClient = new DynamoDBClient(await getAWSCconfig())
                    const deleteItemCommand = new DeleteItemCommand({
                        Key: marshall({
                            PK: payload.Username
                        }),
                        TableName: payload["custom:platformId"] + "-xtra"
                    })
                    const deleteItemResponse = await dynamoDBClient.send(deleteItemCommand)
                    console.log('dynamodb helper item delete response', deleteItemResponse)
                }

                resolve()

            } catch (error) {
                console.log('error', error)
                reject(error)
            }
        })
    }

    // CREATE AWSuser + dynamoUser
    const platformUserCreate = async (payload) => {

        const { platformConfig } = usePlatformSysStore()

        return new Promise(async (resolve, reject) => {

            try {
                const { getTempPassword } = useHelperFunctions()
                const user = await Auth.currentAuthenticatedUser()
                let TemporaryPassword = getTempPassword(8)

                // create cognito user
                const cognitoIdentityProviderClient = new CognitoIdentityProviderClient(await getAWSCconfig());

                if (payload.permanentPasswordFlag) {
                    if (payload.permanentPassword) {
                        TemporaryPassword = payload.permanentPassword
                    }
                }

                let adminCreateUserCommandInput = {
                    "UserPoolId": user.pool.userPoolId,
                    "Username": payload.email,
                    "TemporaryPassword": TemporaryPassword,
                    "DesiredDeliveryMediums": ["EMAIL"],
                    //"MessageAction": "SUPPRESS",
                    "UserAttributes": [
                        {
                            "Name": "custom:accessRole",
                            "Value": payload.accessRole ? payload.accessRole : "user"
                        },
                        {
                            "Name": "custom:accessLevel",
                            "Value": payload.accessLevel ? payload.accessLevel : "levelOne"
                        },
                        {
                            "Name": "custom:identID",
                            "Value": "noID"
                        },
                        {
                            "Name": "custom:realm-app-id",
                            "Value": user.attributes['custom:realm-app-id']
                        },
                        {
                            "Name": "custom:identityPoolID",
                            "Value": user.attributes["custom:identityPoolID"]
                        },
                        {
                            "Name": "custom:platformId",
                            "Value": platformConfig.platformId
                        },
                        {
                            "Name": "custom:MFA",
                            "Value": payload.mfa
                        },
                        {
                            "Name": "custom:userType",
                            "Value": 'platform-user'
                        },
                        {
                            "Name": "custom:subdomain",
                            "Value": window.location.host
                        },
                        {
                            "Name": "phone_number",
                            "Value": payload.phone_number ? payload.phone_number : ""
                        },
                        {
                            "Name": "email",
                            "Value": payload.email
                        },
                        {
                            "Name": "given_name",
                            "Value": payload.given_name ? payload.given_name : ""
                        },
                        {
                            "Name": "family_name",
                            "Value": payload.family_name ? payload.family_name : ""
                        },
                        {
                            "Name": "gender",
                            "Value": payload.gender ? payload.gender : ""
                        },
                        {
                            "Name": "custom:salutation",
                            "Value": payload.salutation ? payload.salutation : ""
                        },
                        {
                            "Name": "email_verified",
                            "Value": "true"
                        }
                    ]
                }

                // set Message action
                if (payload.supress) {
                    adminCreateUserCommandInput.MessageAction = "SUPPRESS"
                }

                const adminCreateUserCommand = new AdminCreateUserCommand(adminCreateUserCommandInput)
                const adminCreateUserResponse = await cognitoIdentityProviderClient.send(adminCreateUserCommand);
                console.log('create user response', adminCreateUserResponse)

                // set password
                if (payload.permanentPasswordFlag) {
                    await setAwsUserPassword(adminCreateUserResponse.User.Username, TemporaryPassword)
                }

                // set mfa settings
                let params = { "UserPoolId": user.pool.userPoolId, "Username": payload.email }
                if (payload.mfa == 'mfa-sms') { params.SMSMfaSettings = { "Enabled": true, "PreferredMfa": true } }
                else { params.SMSMfaSettings = { "Enabled": false, "PreferredMfa": false } }
                const mfaCommand = new AdminSetUserMFAPreferenceCommand(params);
                const mfaResponse = await cognitoIdentityProviderClient.send(mfaCommand);
                console.log('mfaResponse', mfaResponse)

                // write helper item to dynamodb
                const dynamoDBClient = new DynamoDBClient(await getAWSCconfig());
                const putItemCommand = new PutItemCommand({
                    Item: {
                        PK: { S: adminCreateUserResponse.User.Username },
                        email: { S: payload.email || "" },
                        phone_number: { S: payload.phone_number || "" },
                        given_name: { S: payload.given_name || "" },
                        middle_name: { S: payload.middle_name || "" },
                        family_name: { S: payload.family_name || "" },
                        gender: { S: payload.gender || "" },
                        salutation: { S: payload.salutation || "" },
                        title: { S: payload.title || "" },
                        country: { S: payload.country || "" },
                        company: { S: payload.company || "" },
                        config: { M: payload.config || "" },
                    },
                    TableName: user.attributes["custom:platformId"] + "-xtra"
                })
                const putItemResponse = await dynamoDBClient.send(putItemCommand)
                console.log('write helper item to dynamodb response', putItemResponse)

                let createdUser = adminCreateUserResponse.User
                createdUser.Attributes.forEach(elementAttr => {
                    createdUser[elementAttr.Name] = elementAttr.Value
                })
                resolve(createdUser)

            } catch (error) {
                console.log('error', error)
                reject(error)
            }
        })
    }

    return {
        getAWSCconfig,
        platformUserGet,
        platformUserCreate,
        platformUserEdit,
        platformUserUpdate,
        platformUserDelete
    }
}
