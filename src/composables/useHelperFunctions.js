import _ from "lodash"
import { useNow, useDateFormat } from "@vueuse/core"
import { inject, computed } from "vue"
import { useAuthStore } from "@/store/auth"
import { usePlatformSysStore } from "@/store/platformSys"
import { usePlatformSys } from "@/composables/usePlatformSys"
import { useDynamicAppsStore } from "@/store/dynamicApps"

export function useHelperFunctions() {

    const authStore = useAuthStore()
    const platformSysStore = usePlatformSysStore()
    const dynamicAppsStore = useDynamicAppsStore()
    const { appData, appTemplate } = usePlatformSys()
    const authUser = computed(() => authStore.user)

    const getComputedKey = (key, annotatorMeasurements = false, loopIndexProp) => {

        if (!key) return key

        if (annotatorMeasurements) {
            if (annotatorMeasurements.measureTool == "scale") {
                return `${getComputedKey(annotatorMeasurements.assignedKey)}.${annotatorMeasurements.activeView}.scale.${key}`
            } else {
                if (_.startsWith(key, "noIndex:")) {
                    return getComputedKey(_.split(key, ":")[1])
                }
                else {
                    // console.log("key", key)
                    return `${getComputedKey(annotatorMeasurements.assignedKey)}.${annotatorMeasurements.activeView}.measures[${annotatorMeasurements.loopIndex}].${_.split(key, ":")[1]}`
                }
            }
        } else {

            const dragSectionDetail = inject("dragSectionDetail", null)
            const loopIndex = loopIndexProp !== undefined ? loopIndexProp : inject("loopIndex", null)

            if (key.includes("[index]")) {
                // console.log("loopIndexProp key loopIndex: ", loopIndexProp, key, loopIndex)
                return _.replace(key, "[index]", `[${loopIndex}]`)
            } else if (dragSectionDetail?.key) {
                // const loopIndex = inject("loopIndex")
                return `${dragSectionDetail?.key} [${loopIndex}]["contents"].${key} `
            }
            return key
        }
    }

    function countNoOfItem(obj, key, value, calc = 1) {
        let count = 0;
      
        if (Array.isArray(obj)) {
          obj.forEach(item => {
            count += countNoOfItem(item, key, value, calc);
          });
        } else if (typeof obj === "object" && obj !== null) {
          if (obj.hasOwnProperty(key)) {
            if (value === undefined || obj[key] === value) {
              count += calc;
            }
          }
      
          for (const prop in obj) {
            count += countNoOfItem(obj[prop], key, value, calc);
          }
        }
      
        return count;
      }
      

    /* function countNoOfItem(obj, key, value, calc) {
        let count = 0
        for (let prop in obj) {
            if (obj[prop] === value) {
                count += calc
            }
            if (typeof obj[prop] === "object" && obj[prop] !== null) {
                if (Array.isArray(obj[prop])) {
                    obj[prop].forEach(item => {
                        count += countNoOfItem(item, key, value, calc)
                    })
                } else {
                    count += countNoOfItem(obj[prop], key, value, calc)
                }
            }
        }
        return count
    } */

    const getPageBuilderSection = ({ pageBuilderID, sectionId }) => {
        // console.log("userHelperFunctions | getPageBuilderSection", pageBuilderID, sectionId)
        let pageBuilderSection = null
        appTemplate.value?.pageBuilder?.forEach(pageBuilder => {
            if (pageBuilder?.pageBuilderID == pageBuilderID) {
                pageBuilder?.dragItems?.forEach(dragItem => {
                    if (dragItem?.sectionId == sectionId)
                        pageBuilderSection = dragItem
                })
            }
        })
        return pageBuilderSection
    }

    const getAnnotatorSection = ({ annotatorID, sectionID }) => {
        // console.log("userHelperFunctions | getAnnotatorSection", annotatorID, sectionID)
        let annotatorSection = null
        appTemplate.value?.annotator?.forEach(annotator => {
            if (annotator?.annotatorID == annotatorID) {
                annotator?.sections?.forEach(section => {
                    if (section?.sectionID == sectionID)
                        annotatorSection = section
                })
            }
        })
        return annotatorSection
    }

    const isDragSectionDialog = (dragSectionDetail, dialogKey) => {
        let found = false
        const dragSection = getPageBuilderSection(dragSectionDetail)
        dragSection?.markup?.forEach(element => {
            if (element.dialogKey == dialogKey) {
                found = true
            }
        })
        return found
    }

    const resolveDate = (format) => {
        if (format == "timestamp") {
            return Date.now()
        } else {
            const formatted = useDateFormat(useNow(), format)
            return formatted.value
        }
    }

    const resolveMathExpression = (key, entityData = {}, store = {}) => {
        // key = step,1,generalProjectNumberSub
        // console.log("resolveMathExpression | key, entityData, store", key, entityData, store)
        const tokens = _.split(key, ",")
        let value = null
        switch (tokens[0].toString()) {
            case "step":
                value = Number(tokens[1]) + Number(resolveStaticValueExpression(tokens[2], entityData, store))
                break
        }
        return value
    }

    const resolveKeyValue = ({ key, entityData, store, annotatorMeasurements, loopIndex }) => {

        let value = null

        if (_.startsWith(key, "key:")) {
            value = _.get(entityData, getComputedKey(_.split(key, ":")[1], annotatorMeasurements, loopIndex), "")
        } else if (_.startsWith(key, "user:")) {
            value = _.get(authUser.value, getComputedKey(_.split(key, ":")[1], annotatorMeasurements, loopIndex), "")
        } else if (_.startsWith(key, "custom:") && entityData.custom) {
            value = entityData.custom[_.split(key, ":")[1]]
        } else if (_.startsWith(key, "store:")) {
            value = _.get(store, getComputedKey(_.split(key, ":")[1], annotatorMeasurements, loopIndex), "")
        } else if (_.startsWith(key, "date:")) {
            value = resolveDate(_.split(key, ":")[1])
        } else if (_.startsWith(key, "calc:")) {
            value = resolveMathExpression(_.split(key, ":")[1], entityData, store)
        } else if (_.startsWith(key, "volatile:")) {
            value = _.get(platformSysStore.volatileObjects, `${appData.value.globalCollection}.${_.split(key, ":")[1]}`)
            // console.log(`${appData.value.globalCollection}.${_.split(key, ":")[1]} `, value)
        } else if (_.startsWith(key, "uploadcareProgress:")) {
            value = _.get(platformSysStore.uploadcareProgressHelper, getComputedKey(_.split(key, ":")[1], annotatorMeasurements, loopIndex), -1)
        } else {
            value = _.get(entityData, getComputedKey(key, annotatorMeasurements, loopIndex), "")
        }

        return value
    }

    const resolveStaticValueExpression = (key, entityData = {}, store = {}) => {

        let value = _.get(entityData, key, key)

        if (_.startsWith(key, "key:")) {
            value = _.get(entityData, getComputedKey(_.split(key, ":")[1]), "")
        } else if (_.startsWith(key, "user:")) {
            value = _.get(authUser.value, getComputedKey(_.split(key, ":")[1]), "")
        } else if (_.startsWith(key, "custom:") && entityData.custom) {
            value = entityData.custom[_.split(key, ":")[1]]
        } else if (_.startsWith(key, "store:")) {
            value = _.get(store, getComputedKey(_.split(key, ":")[1]), "")
        } else if (_.startsWith(key, "date:")) {
            value = resolveDate(_.split(key, ":")[1])
        } else if (_.startsWith(key, "calc:")) {
            // key = "calc:step,1,generalProjectNumberSub"
            value = resolveMathExpression(_.split(key, ":")[1], entityData, store)
        } else if (_.startsWith(key, "formatedNumber:")) {
            // key = "formatedNumber:00000, digits:-2, store:autoProjectSequentialNumber"
            const tokens = _.split(key, ",")
            value = (
                _.split(_.trim(tokens[0]), ":")[1]
                +
                resolveStaticValueExpression(_.trim(tokens[2]), entityData, store)
            ).slice(_.split(_.trim(tokens[1]), ":")[1])
        } else if (_.startsWith(key, "volatile:")) {
            console.log("volatile:", _.split(key, ":")[1])
            value = _.get(platformSysStore.volatileObjects, `${appData.value.globalCollection}.${_.split(key, ":")[1]}`)
        } else if (_.startsWith(key, "ex:")) {
            // console.log("ex:", key.substring(3))
            value = resolveStringChain(key.substring(3), entityData, store)
            // console.log(value)
        } else if (_.startsWith(key, "uploadcareProgress:")) {
            // console.log("uploadcareProgress:", _.split(key, ":")[1])
            value = _.get(platformSysStore.uploadcareProgressHelper, getComputedKey(_.split(key, ":")[1]), -1)
        } else if (_.startsWith(key, "parentFolderListSelection:")) {
            let keyString = _.split(key, ":")[1]
            const firstDotIndex = keyString.indexOf(".")
            const firstPart = keyString.slice(0, firstDotIndex)
            const secondPart = keyString.slice(firstDotIndex + 1)
            keyString = `${firstPart}.selected.${secondPart}`
            value = _.get(dynamicAppsStore.apps, keyString, null)
        }

        return value
    }

    const resolveExpression = (expressionObj, entityData = {}, store = {}) => {
        // console.log("useHelperFunctions | resolveExpression", expressionObj)
        switch (expressionObj?.type) {
            case "stringchain": {
                return resolveStringChain(expressionObj.expressionArray[0].ex, entityData, store)
            }
        }
    }

    const resolveStringChain = (expressionStr, entityData = {}, store = {}) => {
        let i, j
        let finalString = ""
        for (i = 0; i < expressionStr.length; i++) {
            if (expressionStr.charAt(i) == " ") continue
            if (expressionStr.charAt(i) == "'" || expressionStr.charAt(i) == '"') {
                const enclosedChar = expressionStr.charAt(i)
                let staticPart = ""
                for (j = i + 1; j < expressionStr.length && expressionStr.charAt(j) !== enclosedChar; j++) {
                    staticPart += expressionStr.charAt(j)
                }
                finalString += resolveStaticValueExpression(staticPart, entityData, store)
                i = j
            } else {
                let keyPart = ""
                for (j = i; j < expressionStr.length && expressionStr.charAt(j) !== "+" && expressionStr.charAt(j) !== "'" && expressionStr.charAt(j) !== '"'; j++) {
                    keyPart += expressionStr.charAt(j)
                }
                keyPart = _.trim(keyPart, " +")
                // "text":"user: key"
                if (keyPart) {
                    finalString += resolveStaticValueExpression(keyPart, entityData, store)
                    /* if (_.startsWith(keyPart, "user:")) {
                        finalString += _.get(authUser.value, _.split(keyPart, ":")[1], "")
                    } else {
                        finalString += _.get(entityData, keyPart, "")
                    } */
                }
                i = j
            }
        }
        return finalString
    }

    const getExpressionByID = (expressions, expressionID) => {
        let expression = ""
        try {
            if (expressions && expressions.value?.length) {
                for (const expressionObj of expressions) {
                    if (expressionID == expressionObj.expressionID) {
                        expression = expressionObj
                    }
                }
            }
        } catch (error) {
            expression = ""
        }
        return expression
    }

    const getTempPassword = (length) => {
        let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        let retVal = ""
        for (let i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n))
        }
        return retVal
    }

    const interpretQuery = (query) => {
        console.log('interpretQuery', query)
        let interpretedQuery = {}
        _.forEach(query, function (value, key) {
            interpretedQuery[key] = resolveStaticValueExpression(value)
        })
        return interpretedQuery
    }

    return {
        getComputedKey,
        resolveKeyValue,
        resolveDate,
        resolveExpression,
        resolveStaticValueExpression,
        resolveStringChain,
        getPageBuilderSection,
        getAnnotatorSection,
        isDragSectionDialog,
        countNoOfItem,
        getExpressionByID,
        getTempPassword,
        interpretQuery
    }
}
