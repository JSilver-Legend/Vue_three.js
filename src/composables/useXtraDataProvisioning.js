import { useElementCondition } from "@/composables/appSys/useElementCondition"

export function useXtraDataProvisioning() {

    const { isConditionQualified } = useElementCondition()

    const mergeArrays = (unsortedData) => {

        let sortedData = []

        unsortedData.forEach(element => {
            sortedData = [...sortedData, ...element.measures]
        })

        return sortedData
    }

    const filterObjectsArray = (data, filterOptions) => {

        return data.filter(item => isConditionQualified(filterOptions, item))
    }


    return {
        mergeArrays,
        filterObjectsArray
    }
}
