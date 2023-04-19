import { defineStore } from "pinia"
import { useAuthStore } from "@/store/auth"

export const useDynamicAppsStore = defineStore("dynamicApps", {
    state: () => ({
        apps: {}
    }),
    getters: {},
    actions: {
        registerApp(appID) {
            this.apps[appID] = {
                list: null,

                filter: {},
                searchKey: '',
                sort: {},

                selected: null,
                query: null,
                status: '',
                message: '',
                loadingList: false,
                parentAssignment: null
            }
        },

        async setList({ apiPath, params }) {
            this.apps[apiPath].loadingList = true
            try {
                let list = await this.get({ apiPath, params })
                console.log(`${apiPath}Get` + ' | Response', list)
                this.apps[apiPath] = {
                    ...this.apps[apiPath], ...{
                        status: "success",
                        list,
                        query: params,
                        loadingList: false
                    }
                }
                return list;
            } catch (error) {
                this.apps[apiPath] = {
                    ...this.apps[apiPath], ...{
                        status: "error",
                        list: [],
                        loadingList: false
                    }
                }
            }
        },

        get({ apiPath, params }) {
            const authStore = useAuthStore()
            return authStore.realmApp.currentUser
                .callFunction(`${apiPath}Get`, params)
                .then((response) => {
                    return response.data
                })
                .catch((err) => {
                    throw err
                })
        },

        create({ data, apiPath }) {

            const authStore = useAuthStore()

            return authStore.realmApp.currentUser
                .callFunction(`${apiPath}Create`, { data })
                .then((response) => {
                    this.apps[apiPath] = {
                        ...this.apps[apiPath], ...{
                            status: "success",
                            selected: response.data,
                            loadingList: false
                        }
                    }
                    if (!this.apps[apiPath].list) this.apps[apiPath].list = []
                    this.apps[apiPath].list.push(response.data)
                    this.select({ apiPath, data: response.data })
                    return response.data
                })
                .catch((err) => {
                    this.apps[apiPath] = {
                        ...this.apps[apiPath], ...{
                            status: "error",
                            loadingList: false
                        }
                    }
                    throw err
                })
        },

        update({ data, apiPath }) {

            const authStore = useAuthStore()

            authStore.realmApp.currentUser
                .callFunction(`${apiPath}Update`, { data })
                .then((response) => {
                    this.apps[apiPath] = {
                        ...this.apps[apiPath], ...{
                            status: "success",
                            // selected: response.data
                        }
                    }
                    for (let index in this.apps[apiPath].list) {
                        if (JSON.stringify(this.apps[apiPath].list[index]._id) == JSON.stringify(response.data._id)) {
                            this.apps[apiPath].list[index] = response.data
                            break
                        }
                    }
                })
                .catch((err) => {
                    this.apps[apiPath] = {
                        ...this.apps[apiPath], ...{
                            status: "error"
                        }
                    }
                    throw err
                })
        },

        delete({ id, apiPath }) {
            const authStore = useAuthStore()

            authStore.realmApp.currentUser
                .callFunction(`${apiPath}Delete`, { id })
                .then((response) => {
                    this.apps[apiPath] = {
                        ...this.apps[apiPath], ...{
                            status: "success",
                            message: response.message,
                            selected: null
                        }
                    }
                    for (let index in this.apps[apiPath].list) {
                        if (JSON.stringify(this.apps[apiPath].list[index]._id) == JSON.stringify(id)) {
                            this.apps[apiPath].list.splice(index, 1)
                        }
                    }
                })
                .catch((err) => {
                    this.apps[apiPath] = {
                        ...this.apps[apiPath], ...{
                            status: "error"
                        }
                    }
                    throw err
                })
        },

        select({ apiPath, data }) {
            this.apps[apiPath] = {
                ...this.apps[apiPath], ...{
                    selected: data
                }
            }
        }
    }
})
