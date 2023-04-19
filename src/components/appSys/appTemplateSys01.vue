<template>
    <template v-if="showAppTemplate">
        <template v-for="(componentContainer, index) in appData.markup" :key="appData.subURL + index">
            <container :element="componentContainer" :entityData="entityData" />
        </template>
    </template>
</template>

<script setup>
import _ from "lodash"
import { onBeforeRouteLeave, useRoute } from "vue-router"

import { computed, provide, ref, unref, watch } from "vue"

import { useAuthStore } from "@/store/auth"
import { usePlatformSysStore } from "@/store/platformSys"
import { useDynamicAppsStore } from "@/store/dynamicApps"

import { usePlatformSys } from "@/composables/usePlatformSys"

const route = useRoute()
const authStore = useAuthStore()
const platformSysStore = usePlatformSysStore()
const dynamicAppsStore = useDynamicAppsStore()

const appTemplateInitial = computed(() => authStore.appTemplateInitial)

const { appData, selectedDocument, init } = usePlatformSys()
init()
watch(() => [route.params.URL, route.params.subURL], () => init())

const entityData = ref(unref(selectedDocument.value))
watch(() => selectedDocument.value, () => {
    entityData.value = unref(selectedDocument.value)
})

// expressions
const expressions = computed(() => appTemplate.value?.expressions ? appTemplate.value.expressions : null)
provide('expressions', expressions)

/* const debounceDbUpdate = _.debounce((data) => {
    dynamicAppsStore.update({ apiPath: appData.value.globalCollection, data, params: {} })
}, 1000);
 */
const onUpdate = ({ key, value, volatileObject, autoSave }) => {
    console.log(`appTemplateSys01 | onUpdate | key - ${key} | value - ${value} | autoSave - ${autoSave} | volatileObject - ${volatileObject}`)
    if (volatileObject) {
        _.set(platformSysStore.volatileObjects, `${appData.value.globalCollection}.${volatileObject}.${key}`, value)
    } else {
        _.set(entityData.value, key, value)
        const data = { _id: entityData.value._id, [key]: value }
        if (autoSave !== false && data._id) {
            dynamicAppsStore.update({ apiPath: appData.value.globalCollection, data, params: {} })
            // debounceDbUpdate(data)
        }
    }
}
provide('onUpdate', onUpdate)

// draggable array
const onAddArrayItem = (key, value) => {
    console.log(`appTemplateSys01 | onAddArrayItem | key - ${key} | value - ${value}`)
    let tempArray = []
    if (Array.isArray(_.get(entityData.value, key))) {
        tempArray = _.get(entityData.value, key)
        tempArray.push(_.isObject(value) && !_.isArray(value) ? { ...value, createdAt: Date.now() } : value)
    } else {
        tempArray.push(_.isObject(value) && !_.isArray(value) ? { ...value, createdAt: Date.now() } : value)
    }
    onUpdate({ key: key, value: tempArray })
}
provide('onAddArrayItem', onAddArrayItem)

const onDeleteArrayItem = (key, index) => {
    console.log(`appTemplateSys01 | onDeleteArrayItem | key - ${key} | index - ${index}`)
    if (Array.isArray(_.get(entityData.value, key))) {
        let tempArray = _.get(entityData.value, key)
        tempArray.splice(index, 1)
        onUpdate({ key: key, value: tempArray })
    }
}
provide('onDeleteArrayItem', onDeleteArrayItem)

onBeforeRouteLeave((to, from) => {
    // unselect selected document when leave
    if (from.params.URL && from.params.subURL) {
        console.log('getGlobalCollectionByURL', platformSysStore.getGlobalCollectionByURL(from.params.URL, from.params.subURL))
        dynamicAppsStore.select({ apiPath: platformSysStore.getGlobalCollectionByURL(from.params.URL, from.params.subURL), data: null })
    }
})

const showAppTemplate = computed(() => {
    return appData.value
        && appData.value.markup
        && (
            appData.value.category == 'table' ||
            appData.value.category == 'noDocument' ||
            selectedDocument.value ||
            appTemplateInitial.value
        )

})
</script>
