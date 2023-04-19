import { Amplify } from "aws-amplify"
import { Auth } from "aws-amplify"
import { awsRouteGuard } from '@/lib/awsAuth'
import { useAuthStore } from "@/store/auth"
import { usePlatformSysStore } from "@/store/platformSys"

export const routeGuard = (to, from, next) => {

    // console.log('to', to.matched[0]?.path)
    const platformSysStore = usePlatformSysStore()

    if (Auth.userPool) {
        if (to.path == '/login'
            || to.path == '/signup'
            || to.path == '/password-reset'
            || to.matched[0]?.path == "/sign-in/:challenge"
        ) {
            platformSysStore.pageLoading = false
            return next()
        }

        return awsRouteGuard(to, from, next)

    } else {

        const authStore = useAuthStore()

        authStore.loadTenantIds().then(async (response) => {

            let _urlPoolData = response

            console.log('TENANT DATA AWS', _urlPoolData)
            //console.log("_urlPoolData.mandatorySignIn", _urlPoolData.mandatorySignIn)

            Amplify.configure({
                Auth: {
                    mandatorySignIn: _urlPoolData.mandatorySignIn == undefined ? "true" : _urlPoolData.mandatorySignIn,
                    region: _urlPoolData.region,
                    userPoolId: _urlPoolData.userPoolId,
                    userPoolWebClientId: _urlPoolData.userPoolWebClientId,
                    authenticationFlowType: _urlPoolData.authenticationFlowType
                }
            })

            if (to.path == '/login'
                || to.path == '/signup'
                || to.path == '/password-reset'
                || to.matched[0]?.path == "/sign-in/:challenge"
            ) {
                // console.log('routeGuard - next()')
                platformSysStore.pageLoading = false
                return next()
            }

            return awsRouteGuard(to, from, next)
        })
    }
}
