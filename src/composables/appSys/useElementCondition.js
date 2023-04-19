import _ from "lodash"
import { computed } from "vue"

import { useAuthStore } from "@/store/auth"
import { usePlatformSysStore } from "@/store/platformSys"

import { usePlatformSys } from "@/composables/usePlatformSys"
import { useHelperFunctions } from "@/composables/useHelperFunctions"

export function useElementCondition() {

    const platformSysStore = usePlatformSysStore()

    const { appData } = usePlatformSys()

    const { resolveKeyValue } = useHelperFunctions()

    const isConditionQualified = (conditionArray, entityData, annotatorMeasurements = false, loopIndex) => {
        let flag = true

        if (conditionArray && Array.isArray(conditionArray)) {
            for (const conditionObj of conditionArray) {
                let conditionTokens = conditionObj.cd.split(',').map((obj) => obj.trim())

                let value1 = null
                if (conditionTokens[1] === 'k') {
                    value1 = _.toString(resolveKeyValue({ key: conditionTokens[2], entityData, annotatorMeasurements, loopIndex }))
                } else if (conditionTokens[1] === 'tabGroupID') {
                    value1 = _.get(platformSysStore.tabsHelper, `${appData.value.globalCollection}.${conditionTokens[2]}`)
                } else if (conditionTokens[1] === 'n') {
                    value1 = _.toNumber(conditionTokens[2])
                } else {
                    value1 = _.toString(conditionTokens[2])
                }

                let value2 = null
                if (conditionTokens.length > 4) {
                    if (conditionTokens[4] === 'k') {
                        value2 = _.toString(resolveKeyValue({ key: conditionTokens[5], entityData, annotatorMeasurements, loopIndex }))
                    } else if (conditionTokens[4] === 'tabGroupID') {
                        value2 = _.get(platformSysStore.tabsHelper, `${appData.value.globalCollection}.${conditionTokens[5]}`)
                    } else if (conditionTokens[4] === 'n') {
                        value2 = _.toNumber(conditionTokens[5])
                    } else {
                        value2 = _.toString(conditionTokens[5])
                    }
                }

                let flagCon = true
                switch (conditionTokens[3]) {
                    case 'notEmpty':
                        flagCon = value1 ? true : false;
                        break;
                    case 'empty':
                        flagCon = value1 ? false : true;
                        break;
                    case 'equal':
                        flagCon = value1 == value2
                        break
                    case 'unequal':
                        flagCon = value1 != value2
                        break
                    case 'gt': // greater than
                        flagCon = value1 > value2
                        break
                    case 'gte': // greater than or equel
                        flagCon = value1 >= value2
                        break
                    case 'lt': // less than
                        flagCon = value1 < value2
                        break
                    case 'lte': // less than or equel
                        flagCon = value1 <= value2
                        break
                    default:
                        break
                }
                // console.log('flagCon', flagCon)



                const conditioniCombiner = conditionTokens[0] === 'OR' ? 'OR' : 'AND'
                flag = conditioniCombiner === 'OR' ? flag || flagCon : flag && flagCon

                /* if(conditionTokens[2] == 'documentLock') {
                    console.log('conditionTokens, value1, value2, flag', conditionTokens, value1, value2, flag)
                } */
            }
        }
        return flag
    }

    return {
        isConditionQualified
    }
}
