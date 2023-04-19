import _ from "lodash"

import { defineStore } from "pinia"
import { useAuthStore } from "@/store/auth"

export const usePlatformSysStore = defineStore("platformSys", {
    state: () => ({
        appTemplates: [],
        platformConfig: null,
        platformUsers: [],

        pageLoading: true,
        showSidebar: true,
        showTopBar: true,

        dialogsHelper: {},
        tabsHelper: {},
        uploadcareProgressHelper: {},
        overlayHelper: {},
        annotatorExportImageHelper: {},

        // will be use to store volatile objects
        volatileObjects: {

        },

        // theme default at start
        theme: {
            colorTheme: "light-yellow",
            formTheme: "default"
        },

        selectedTable: null,
    }),
    getters: {
        appTemplate: (state) => {
            return (URL) => {
                if (URL) {
                    return state?.appTemplates.find((item) => item?.URL == URL)
                } else {
                    return null
                }
            }
        },
        activeTabs: (state) => state.tabsHelper
    },
    actions: {

        appSysFunctionActions(functionName, payload) {
            const authStore = useAuthStore()
            return authStore.realmApp.currentUser
                .callFunction(functionName, payload)
                .then((response) => {
                    if (response.success) {
                        return response.data
                    } else {
                        console.log("error", response.message)
                    }
                })
                .catch((err) => {
                    throw err
                })
        },

        appTemplateGet(payload) {
            const authStore = useAuthStore()
            return authStore.realmApp.currentUser
                .callFunction("appTemplateGet", payload)
                .then((response) => {
                    this.appTemplates.push(response.data)
                    return response.data
                })
                .catch((err) => {
                    throw err
                })
        },

        platformConfigGet() {
            const authStore = useAuthStore()
            return authStore.realmApp.currentUser
                .callFunction("platformSysGet", { type: "platformConfig" })
                .then((response) => {
                    this.platformConfig = response.data
                })
                .catch((err) => {
                    console.log("error get platform:", err)
                })
        },

        platformConfigUpdate(data) {
            const authStore = useAuthStore()
            return authStore.realmApp.currentUser
                .callFunction("platformSysUpdate", { type: "platformConfig", data })
                .then((response) => {
                    console.log(response)
                    this.platformConfigGet()
                })
                .catch((err) => {
                    console.log("error get platform:", err)
                })
        },

        selectTable({ data }) {
            console.log("selectTable", JSON.parse(JSON.stringify(data)))
            this.selectedTable = data
        },

        getGlobalCollectionByURL(URL, subURL) {
            return this.appTemplate(URL)?.appMarkup.find(
                (item) => item.subURL == subURL
            )?.globalCollection
        },

        toggleDialog(dialogKey) {
            if (dialogKey) {
                _.set(this.dialogsHelper, dialogKey, !_.get(this.dialogsHelper, dialogKey, false))
            } else {
                this.dialogsHelper = {}
            }
        },

        selectTab(tabGroupID, tabID) {
            console.log("selectTab", tabGroupID, tabID)
            _.set(this.tabsHelper, tabGroupID, tabID)
        }
    },
})
