import { defineStore } from "pinia"
import axios from "axios"
import { Auth } from "aws-amplify"
import * as Realm from "../assets/realm-web"
import { usePlatformSysStore } from "@/store/platformSys"
import { usePlatformNavigationStore } from "@/store/platformNavigation"
import { useDynamicAppsStore } from "@/store/dynamicApps"
import _ from "lodash"

export const useAuthStore = defineStore("auth", {
    state: () => ({
        awsAuthUser: {},
        user: {},
        identID: null,
        realmApp: null,
        tenantIds: {}
    }),
    getters: {
        appTemplateInitial: (state) => {
            return _.get(state.awsAuthUser, "attributes['custom:appTemplateInitial']", null)  //'aRedScreen/home' // null
            /* return state.user && state.user.config && state.user.config.appTemplateInitial
                ? state.user.config.appTemplateInitial
                : null */
        },
        navigation: (state) => {
            return _.get(state.awsAuthUser, "attributes['custom:localJson']", "platformNavigation")
            /* return state.user && state.user.config && state.user.config.localJson
                ? state.user.config.localJson
                : "platformNavigation" */
        },
        isRealmAuthenticated: (state) => {
            return state.realmApp && state.realmApp.currentUser ? true : false
        }
    },
    actions: {

        async loadTenantIds() {
            return await axios.get(
                `https://fngk594tj3.execute-api.eu-west-1.amazonaws.com/dev/v1/tenants/${window.location.host}`
            ).then(response => {
                this.tenantIds = response.data
                //console.log("TENANT response", this.tenantIds);
                return response.data
            }).catch(err => {
                throw err
            })
        },
        getRealmApp({ REALM_APP_ID }) {
            return new Promise((resolve) => {
                this.realmApp = Realm.App.getApp(REALM_APP_ID);
                //console.log("getRealmApp | this.realmApp", this.realmApp)
                resolve(true)
            })
        },
        assignRealmApp({ REALM_APP_ID }) {
            return new Promise((resolve) => {
                this.realmApp = new Realm.App({ id: REALM_APP_ID })
                resolve(true)
            })
        },
        realmCustomLogin(payload, user) {

            const credentials = Realm.Credentials.function(payload);

            return this.realmApp
                .logIn(credentials)
                .then(async (response) => {

                    let data = JSON.parse(JSON.stringify(response));
                    console.log("MONGO ATLAS AS AUTHENTICATION SUCCESS", data);
                    return data;
                })
                .catch((err) => {
                    console.log("MONGO ATLAS AS AUTHENTICATION FAILED", err);
                    throw err;
                })
        },

        async logout() {


            await this.realmApp.currentUser.logOut()
            await Auth.signOut({ global: true })

            // reset auth store
            this.user = {}
            this.realmApp = null;

            // reset platform store
            const platformSysStore = usePlatformSysStore()
            platformSysStore.$reset()

            // reset platform localJson store
            const platformNavigationStore = usePlatformNavigationStore()
            platformNavigationStore.$reset()

            // reset dynamic app store
            const dynamicAppsStore = useDynamicAppsStore()
            dynamicAppsStore.$reset()

            this.$router.push("/login")
        }
    }
})
