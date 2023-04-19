<template>
    <staticHtmlTag v-if="element.elementType == 'staticHtmlTag'" @click.stop="onClick(element.value)"
        :element="getFilteredObject(element)" :entityData="entityData" />
    <component v-else-if="element.elementType" :is="element.elementType" @return="onClick"
        :computedValue="computedValue" :element="getFilteredObject(element)" :entityData="entityData" />
    <container v-else @click.stop="onClick(element.value)" :element="getFilteredContainerObject(element)"
        :entityData="entityData" />
</template>

<script setup>
import _ from "lodash"
import { toRefs, computed } from "vue"
import { useDynamicAppsStore } from "@/store/dynamicApps"

const props = defineProps(["element", "entityData"])
const { element, entityData } = toRefs(props)

const dynamicAppsStore = useDynamicAppsStore()

const computedValue = computed(() => {
    let value = ''
    if (element.value.eventType == 'sort' && dynamicAppsStore.apps[element.value.storeArray]?.sort.order)
        value = dynamicAppsStore.apps[element.value.storeArray]?.sort.order
    return value
})

const onClick = (value) => {
    console.log('onClick | listEvent ->', element.value.eventType, element.value.criteria, value)
    // if (appData.value)
    switch (element.value.eventType) {
        case 'filter':
            if (value == '' || value == 'all') {
                _.unset(dynamicAppsStore.apps[element.value.storeArray].filter, element.value.criteria)
                // dynamicAppsStore.apps[element.value.storeArray].filter = []
            } else {
                dynamicAppsStore.apps[element.value.storeArray].filter[element.value.criteria] = value
            }
            break
        case 'sort':
            if (value == '' || value == 'all') {
                dynamicAppsStore.apps[element.value.storeArray].sort = {}
            } else {
                dynamicAppsStore.apps[element.value.storeArray].sort = {
                    key: element.value.criteria,
                    order: value// dynamicAppsStore.apps[element.value.storeArray].sort.key == element.value.criteria && dynamicAppsStore.apps[element.value.storeArray].sort.order == 'asc' ? 'desc' : 'asc'
                }
            }
            break
        case 'search':
            dynamicAppsStore.apps[element.value.storeArray].searchKey = value
            break
    }
}

const getFilteredObject = (element) => {
    return {
        ..._.omit(element, ['eventType', 'storeArray', 'criteria']), 'type': 'element'
    }
}

const getFilteredContainerObject = (element) => {
    return {
        ..._.omit(element, ['eventType', 'storeArray', 'criteria']), 'type': 'container'
    }
}
</script>
