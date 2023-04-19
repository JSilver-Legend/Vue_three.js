<template>
    <staticHtmlTag v-if="element.elementType == 'staticHtmlTag'" @click.stop="onClick(element.value)"
        :element="getFilteredObject(element)" :entityData="entityData" />
    <component v-else-if="element.elementType" :is="element.elementType" @return="onClick"
        :element="getFilteredObject(element)" :entityData="entityData" />
    <container v-else @click.stop="onClick(element.value)" :element="getFilteredContainerObject(element)"
        :entityData="entityData" />
</template>

<script setup>
import _ from "lodash"
import * as XLSX from "xlsx"
import { useRoute } from "vue-router"
import { toRefs, inject, computed } from "vue"

import emitter from "@/services/emitter"

import { usePlatformSysStore } from "@/store/platformSys"
import { useDynamicAppsStore } from "@/store/dynamicApps"

import { useFunction } from '@/composables/appSys/useFunction'
import { useXlsxFormatter } from '@/composables/useXlsxFormatter'

const props = defineProps(["element", "entityData"])

const { element, entityData } = toRefs(props)

const route = useRoute()
const dynamicAppsStore = useDynamicAppsStore()
const platformSysStore = usePlatformSysStore()

const { getInitialObj } = useFunction()
const { convertXlsxArrayToJson } = useXlsxFormatter()

const appTemplate = computed(() => platformSysStore.appTemplate(route.params.URL))
const appData = computed(() => appTemplate.value ? appTemplate.value?.appMarkup.find(item => item.subURL == route.params.subURL) : null)

const selectedDocument = computed(() =>
    appData.value && dynamicAppsStore.apps[appData.value.globalCollection]
        ? dynamicAppsStore.apps[appData.value.globalCollection].selected
        : null
)

const selectedTable = computed(() => platformSysStore.selectedTable)

const onDocumentCreate = async () => {

    let data = await getInitialObj(element.value.functionId, {})

    // set parent id > will get from nested localJson / folder localJson
    if (dynamicAppsStore.apps[appData.value.globalCollection]?.parentAssignment) {
        console.log('dynamicAppsStore.apps[appData.value.globalCollection]?.parentAssignment', dynamicAppsStore.apps[appData.value.globalCollection]?.parentAssignment)
        data = { ...data, ...dynamicAppsStore.apps[appData.value.globalCollection].parentAssignment }
    }

    if (element.value.toggleDialog && element.value.dialogKey) {
        dynamicAppsStore.select({ apiPath: appData.value.globalCollection, data })
        platformSysStore.toggleDialog(element.value.dialogKey)
    } else {
        console.log('onDocumentCreate | data', data)
        const dbItem = await dynamicAppsStore.create({
            apiPath: appData.value.globalCollection,
            data: { ...data, createdAt: Date.now() },
            params: {},
        })
        emitter.emit('agGridTransaction', { type: 'add', data: dbItem })
    }
}

const onDocumentDuplicate = async () => {

    let data = await getInitialObj(element.value.functionId, { ...selectedDocument.value })

    delete data._id
    dynamicAppsStore.create({
        apiPath: appData.value.globalCollection,
        data,
        params: {},
    })

}

const onDocumentDelete = () => {
    if (entityData.value.documentLock !== true || entityData.value.documentLock !== 'true') {
        dynamicAppsStore.delete({
            apiPath: appData.value.globalCollection,
            id: entityData.value._id,
            params: {},
        })
        emitter.emit('agGridTransaction', { type: 'remove', data: { _id: entityData.value._id } })
    } else {
        console.log('document is protected !!!')
    }
}

const onDocumentEdit = async () => {
    console.log('cddpEvent | onDocumentEdit')
    try {
        let list = await dynamicAppsStore.get({
            apiPath: appData.value.globalCollection,
            params: [{ _id: entityData.value._id }],
        })
        if (list && list.length) {
            dynamicAppsStore.select({ apiPath: appData.value.globalCollection, data: list[0] })
        }
    } catch (error) {
        console.log('onDocumentEdit | error ', error)
    }

}

const onDocumentSave = async () => {

    console.log('cddpEvent | onDocumentSave')

    if (entityData.value.identID) {

        // update existing item
        dynamicAppsStore.update({
            apiPath: appData.value.globalCollection,
            data: { ...entityData.value/* , id: entityData.value._id */ },
            params: {},
        })
        // update ag grid
        emitter.emit('agGridTransaction', { type: 'update', data: { ...entityData.value } })

    } else {

        // create new item
        const dbItem = await dynamicAppsStore.create({
            apiPath: appData.value.globalCollection,
            data: { ...entityData.value/* , id: entityData.value._id */ },
            params: {},
        })
        // add ag grid
        emitter.emit('agGridTransaction', { type: 'add', data: dbItem })

    }
}

const onDocumentCancel = async () => {

    console.log('cddpEvent | onDocumentCancel')

    if (entityData.value?._id) {
        try {
            let list = await dynamicAppsStore.get({
                apiPath: appData.value.globalCollection,
                params: [{ _id: entityData.value._id }],
            })
            if (list && list.length) {
                dynamicAppsStore.select({ apiPath: appData.value.globalCollection, data: list[0] })
            }
        } catch (error) {
            console.log(error)
        }
    } else {
        dynamicAppsStore.select({
            apiPath: selectedTable.value.collection,
            data: null
        })
    }
}

const onDocumentProtect = () => {
}

const onScanDocument = async (scannedData) => {
    if (_.get(scannedData, element.value.searchKey)) {

        let mainDoc = scannedData

        let tempReslist = await dynamicAppsStore.get({
            apiPath: appData.value.globalCollection,
            params: [{ [element.value.searchKey]: mainDoc[element.value.searchKey] }],
        })

        if (tempReslist && tempReslist.length) {
            console.log('onScanDocument  -> DOCUMENT FOUND!')
            mainDoc = tempReslist[0]
            dynamicAppsStore.select({ apiPath: appData.value.globalCollection, data: mainDoc })
        } else {
            console.log('onScanDocument  -> DOCUMENT NOT FOUND!')
            mainDoc = await dynamicAppsStore.create({
                apiPath: appData.value.globalCollection,
                data: { ...scannedData, createdAt: Date.now() },
                params: {},
            })
            console.log('Created document: ', mainDoc)
            dynamicAppsStore.select({ apiPath: appData.value.globalCollection, data: mainDoc })
        }

        if (_.isArray(element.value.getDocuments2Store)) {
            for (let index = 0; index < element.value.getDocuments2Store.length; index++) {
                tempReslist = await dynamicAppsStore.get({
                    apiPath: _.get(element.value.getDocuments2Store, `[${index}].collection`),
                    params: [{ [_.get(element.value.getDocuments2Store, `[${index}].searchKey`)]: mainDoc[_.get(element.value.getDocuments2Store, `[${index}].searchValue`)] }],
                })

                if (tempReslist && tempReslist.length) {
                    console.log('onScanDocument  -> SECOND DOCUMENT FOUND!', tempReslist[0])
                    _.set(platformSysStore.volatileObjects, `${appData.value.globalCollection}.${_.get(element.value.getDocuments2Store, `[${index}].store`)}`, tempReslist[0])
                }
            }
        }

        if (element.value.jump2TabID && element.value.tabGroupID) {
            platformSysStore.selectTab(element.value.tabGroupID, element.value.jump2TabID)
        }

    }
}

const onImportXlsx = async (uploadedFile) => {
    if (uploadedFile) {
        const reader = new FileReader();

        reader.onload = async (e) => {
            /* Parse data */
            const bstr = e.target.result;
            const wb = XLSX.read(bstr, { type: 'binary' });
            /* Get first worksheet */
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            /* Convert array of arrays */
            const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
            console.log('Imported data: ', data)
            const jsonData = convertXlsxArrayToJson(data, element.value.importRules)
            console.log('Json data: ', jsonData)
            const importRes = await platformSysStore.appSysFunctionActions('importData', { collection: element.value.collection, data: jsonData })
            console.log('Response: ', importRes)
        }
        reader.readAsBinaryString(uploadedFile);
    }
}

const onClick = async (value) => {
    console.log('onClick | cddpEvent', JSON.parse(JSON.stringify(element.value)), element.value.eventType)
    // if (appData.value)
    switch (element.value.eventType) {
        case "create":
            onDocumentCreate()
            break
        case "delete":
            onDocumentDelete()
            platformSysStore.toggleDialog(null)
            break
        case "duplicate":
            onDocumentDuplicate()
            platformSysStore.toggleDialog(null)
            break
        case "protect":
            onDocumentProtect()
            platformSysStore.toggleDialog(null)
            break
        case "edit":
            await onDocumentEdit()
            platformSysStore.toggleDialog(element.value.dialogKey)
            break
        case "save":
            onDocumentSave()
            if (element.value.toggleDialog) {
                platformSysStore.toggleDialog(element.value.dialogKey)
            }
            break
        case "cancel":
            onDocumentCancel()
            platformSysStore.toggleDialog(element.value.dialogKey)
            break
        case "scanDocument":
            console.log('Scaned value: ', value)
            onScanDocument(JSON.parse(value))
            break

        case "importXlsx":
            console.log('Imported file: ', value)
            onImportXlsx(value)
            break
    }
}

const getFilteredObject = (element) => {
    return {
        ..._.omit(element, ['elementType', 'eventType', 'toggleDialog', 'dialogKey']), 'elementType': 'staticHtmlType'
    }
}

const getFilteredContainerObject = (element) => {
    return {
        ..._.omit(element, ['elementType', 'eventType', 'toggleDialog', 'dialogKey']), 'type': 'container'
    }
}
</script>
