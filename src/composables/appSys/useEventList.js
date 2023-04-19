import _ from "lodash"
import { useDynamicAppsStore } from "@/store/dynamicApps"

export function useEventList() {

    const dynamicAppsStore = useDynamicAppsStore()

    const filter = (list, query) => {
        return _.filter(list, (listItem) => {
            let flag = true
            _.forIn(query, function (value, key) {
                flag = flag && _.get(listItem, key) == value
            })
            return flag
        })
        // return _.filter(list, query)
    }

    const sort = (list, key, order) => {
        return _.orderBy(list, [key], [order])
    }

    const getFilteredList = (collection) => {

        let list = dynamicAppsStore.apps[collection].list
        // Filter
        if (_.keys(dynamicAppsStore.apps[collection]?.filter).length) {
            list = filter(list, dynamicAppsStore.apps[collection].filter)
        }
        // Sort
        if (dynamicAppsStore.apps[collection]?.sort?.key) {
            list = sort(list, dynamicAppsStore.apps[collection].sort.key, dynamicAppsStore.apps[collection].sort.order)
        }

        return list
    }

    return {
        getFilteredList
    }
}
