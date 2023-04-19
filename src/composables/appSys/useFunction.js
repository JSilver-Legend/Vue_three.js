import _ from 'lodash'

import { usePlatformSysStore } from '@/store/platformSys'

import { usePlatformSys } from '@/composables/usePlatformSys'
import { useHelperFunctions } from '@/composables/useHelperFunctions'

export function useFunction() {

    const platformSysStore = usePlatformSysStore()

    const { appTemplate, selectedDocument } = usePlatformSys()
    const { resolveExpression, resolveStaticValueExpression } = useHelperFunctions()

    const getInitialObj = async (functionId, entityData) => {

        if (functionId) {
            const appSysFunction = _.find(appTemplate.value.functions, { Id: functionId })

            // console.log('functionId', functionId)
            // console.log('localJson.appSysFunctions', localJson.value.appSysFunctions)
            // console.log('appSysFunction', appSysFunction)

            // create store object
            let store = {}
            let deleteKeys = [] // storing delete keys to an array
            for (let index = 0; index < appSysFunction.writeArray.length; index++) {
                if (appSysFunction.writeArray[index].action) {
                    let value = null
                    switch (appSysFunction.writeArray[index].action) {
                        case 'getPassword':
                            value = await platformSysStore.appSysFunctionActions('generatePassword', appSysFunction.writeArray[index].parameter)
                            break;
                        case 'autoNumbering':
                            value = await platformSysStore.appSysFunctionActions('autoNumbering', appSysFunction.writeArray[index].parameter)
                            break;
                        case 'expression':
                            // console.log('resolveExpression | value', value)
                            value = resolveExpression(_.find(appTemplate.value.expressions, { "expressionID": appSysFunction.writeArray[index].Id }), selectedDocument.value, store)
                            break;
                        /* default:
                            value = appSysFunction.writeArray[index].value */
                    }
                    _.set(store, appSysFunction.writeArray[index].store, value)
                } else if (appSysFunction.writeArray[index].key) {

                    const element = appSysFunction.writeArray[index]

                    // resolve value expressions
                    let value = resolveStaticValueExpression(element.value, entityData, store)

                    // set key value to entity data
                    _.set(entityData, element.key, value)
                } else if (appSysFunction.writeArray[index].deleteKey) {
                    deleteKeys.push(appSysFunction.writeArray[index].deleteKey)
                } else {
                    // will be extended
                }
            }
            entityData = _.omit(entityData, deleteKeys)
        }

        return entityData
    }

    return {
        getInitialObj
    }
}
