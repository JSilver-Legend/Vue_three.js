import { defineStore } from "pinia"
import { useAuthStore } from "@/store/auth"

export const usePlatformNavigationStore = defineStore("platformNavigation", {
    state: () => ({

        platformNavigation: null,
        showPlatformNavigation: true,

        // status of current localJson
        // will be use to switch between localJson
        // Ex. Folder localJson, app Navigation
        navigationStack: [
            /* Example:
            {
                type: "appNavigation",
                appPathAssignementID: "a534325"
            }
            */
        ],

        // Folder localJson
        selectedFolderNavigationViewID: null,
        initialFolderNavigationTree: null,
        currentFolderNavigationTreeNode: null,
        currentFolderNavigationTreeChildren: null,
        selectedDropdownPanel: null,

        /*
        // APP NAVIGATION
        formattedAppNavigationTree: null,
        initialAppNavigationTree: null,
        appNavigationViewLevel: null, // child | parent
        */

        appNavigationStack: [],

    }),
    getters: {
        // key: (state) => state.key
    },
    actions: {

        resetNav() {
            this.navigationStack = [] // reset localJson stack

            this.selectedFolderNavigationViewID = null
            this.currentFolderNavigationTreeNode = null
            this.currentFolderNavigationTreeChildren = this.initialFolderNavigationTree
        },

        loadPlatformNavigation(params) {
            const authStore = useAuthStore()
            return authStore.realmApp.currentUser
                .callFunction("platformSysGet", { type: authStore.navigation, ...params })
                .then(async response => {
                    console.log('MONGO ATLAS AS PLATFORM NAVIGATION', authStore.navigation, response.data)
                    this.platformNavigation = response.data;
                    return
                })
                .catch(err => {
                    console.log("error get platform:", err)
                })
        }
    }
})
