<template>
    <template v-if="formMarkup">
        <template v-for="(componentContainer, index) in formMarkup" :key="index">
            <container :element="componentContainer" :entityData="entityData" />
        </template>
    </template>
    <template v-if="listMarkup">
        <template v-for="(componentContainer, index) in listMarkup" :key="index">
            <container :element="componentContainer"
                :entityData="{ ...selectedTable.table, list: selectedTableList }" />
        </template>
    </template>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, toRefs, provide, computed, watchEffect, watch } from "vue"

import lodashSet from "lodash/set"
import lodashGet from "lodash/get"
import lodashdDbounce from "lodash/debounce"

import { useDynamicAppsStore } from "@/store/dynamicApps"
import { usePlatformSysStore } from "@/store/platformSys"

import { usePlatformSys } from "@/composables/usePlatformSys"
import { useEventList } from "@/composables/appSys/useEventList"

provide('currentEventState', 'appTemplateSys01Lists')

const route = useRoute()
const platformSysStore = usePlatformSysStore()
const dynamicAppsStore = useDynamicAppsStore()

const { getFilteredList } = useEventList()

const { appTemplate, init } = usePlatformSys()
init()

watch(() => route.params.appLink, (newValue, oldValue) => {
    if (newValue !== oldValue && newValue) {
        init()
    }
})

const listMarkup = ref(null)
const formMarkup = ref(null)

const props = defineProps(['dialogOptions'])
const { dialogOptions } = toRefs(props)

watchEffect(() => {
    if (dialogOptions.value && dialogOptions.value.write2object) {
        provide('dialogOptions', dialogOptions)
        platformSysStore.selectTable({ data: { collection: dialogOptions.value.collectionName } })
    }
})

// expressions
const expressions = computed(() => appTemplate.value?.expressions ? appTemplate.value.expressions : null)
provide('expressions', expressions)

// Set selected table
const selectedTable = computed(() => platformSysStore.selectedTable)
// const selectedTableList = computed(() => selectedTable.value && dynamicAppsStore.apps[selectedTable.value.collection] ? dynamicAppsStore.apps[selectedTable.value.collection].list : [])
const selectedTableList = computed(() => selectedTable.value && dynamicAppsStore.apps[selectedTable.value.collection] ? getFilteredList(selectedTable.value.collection) : [])

const configStores = () => {
    if (selectedTable.value) {

        // Create app store
        if (!dynamicAppsStore.apps[selectedTable.value.collection]) {
            dynamicAppsStore.registerApp(selectedTable.value.collection)
        }

        if (!selectedTableList.value?.length) {
            console.log('documents: retrieving from online')
            dynamicAppsStore.setList({ apiPath: selectedTable.value.collection, params: selectedTable.value.query ? selectedTable.value.query : [{}] }).then((response => {
                // selectedTableList.value = response
            }))
        }
    }
}

const setMarkup = () => {
    if (selectedTable.value) {
        if (dialogOptions.value) {
            // SET MARKUP
            appTemplate.value?.tables.forEach(element => {
                if (element.id == dialogOptions.value?.tableListName) {
                    listMarkup.value = element.table.markup
                    formMarkup.value = element.table.tableFormMarkup
                }
            })
        } else {
            appTemplate.value?.tables.forEach(element => {
                if (element.id == selectedTable.value?.collection) {
                    listMarkup.value = element.table.markup
                    formMarkup.value = element.table.tableFormMarkup
                }
            })
        }
    }
}

configStores()
setMarkup()

watch(() => selectedTable.value?.collection, () => {
    configStores()
    setMarkup()
})

watch(() => appTemplate.value?._id, () => {
    setMarkup()
})

// Set selected document
const selectedDocument = computed(() => selectedTable.value?.collection && dynamicAppsStore.apps[selectedTable.value.collection] ? dynamicAppsStore.apps[selectedTable.value.collection].selected : null)
const entityData = ref({})
watch(() => selectedDocument.value?._id, () => {
    console.log('watch | selectedDocument')
    entityData.value = selectedDocument.value ? { ...selectedDocument.value } : {}
})

/* watchEffect(() => {
    entityData.value = selectedDocument.value ? { ...selectedDocument.value } : {}
}) */

// update
const onUpdate = lodashdDbounce((key, value) => {
    console.log('appTemplateSys01Lists | onUpdate | key, value - ', key, value)
    // entityData.value[key] = value
    lodashSet(entityData.value, key, value)
    if (selectedTable.value.updateEventType && selectedTable.value.updateEventType !== 'onSave') {
        let data = { ...entityData.value/* , id: entityData.value._id */ }
        dynamicAppsStore.update({ apiPath: selectedTable.value.collection, data, params: {} })
    }
}, 250)
provide('onUpdate', onUpdate)

// draggable array
const onAddArrayItem = (key, value) => {
    console.log('appTemplateSys01Lists | onAddArrayItem | key, value - ', key, value)
    let tempArray = [{}]
    if (Array.isArray(lodashGet(entityData.value, key))) {
        tempArray = lodashGet(entityData.value, key)
        tempArray.push(value)
    }
    onUpdate(key, tempArray)
}
provide('onAddArrayItem', onAddArrayItem)

const onDeleteArrayItem = (key, index) => {
    console.log('appTemplateSys01Lists | onDeleteArrayItem | key, index - ', key, index)
    if (Array.isArray(lodashGet(entityData.value, key))) {
        let tempArray = lodashGet(entityData.value, key)
        tempArray.splice(index, 1)
        onUpdate(key, tempArray)
    }
}
provide('onDeleteArrayItem', onDeleteArrayItem)

// Dialogs
const dialogs = ref({})
provide('dialogs', dialogs)

const toggleDialog = (dialogKey) => {
    console.log('appTemplateSys01Lists | toggleDialog | dialogKey -> ', dialogKey)
    if (dialogKey) {
        dialogs.value[dialogKey] = dialogs.value[dialogKey] ? false : true
    } else {
        dialogs.value = {}
    }
}
provide('toggleDialog', toggleDialog)

</script>
