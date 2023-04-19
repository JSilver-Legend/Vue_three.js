<template>
    <div v-if="isLoading">loading ...</div>
    <template v-else>
        <template v-for="(row, index) in documentList" :key="index">
            <container :element="element.cells" :entityData="row" @click.stop="onClick(row)" />
        </template>
    </template>
</template>

<script setup>
import { ref, inject, computed, toRefs, watch } from "vue"
import { useEventList } from "@/composables/appSys/useEventList"
import { useDynamicAppsStore } from "@/store/dynamicApps"

const dynamicAppsStore = useDynamicAppsStore()
const { getFilteredList } = useEventList()

const props = defineProps(["element", "entityData"])
const { element } = toRefs(props)

const dialogOptions = inject('dialogOptions', ref(null))
const onUpdateAppTemplateSys01 = inject('onUpdateAppTemplateSys01', null)
const toggleDialogAppTemplateSys01 = inject('toggleDialogAppTemplateSys01', null)

const onClick = (data) => {
    console.log('tableRow | onClick')
    if (dialogOptions.value && dialogOptions.value.write2object) {
        toggleDialogAppTemplateSys01(null)
        onUpdateAppTemplateSys01(dialogOptions.value.write2object, data)
    }
}

// Create app store
if (!dynamicAppsStore.apps[element.value.collection]) {
    // console.log('doregisterApp')
    dynamicAppsStore.registerApp(element.value.collection)
}

// Retrieve documents of app
//if (!dynamicAppsStore.apps[element.value.collection].list && !dynamicAppsStore.apps[element.value.collection].loadingList) {
//console.log('setList')


let formattedQuery = computed(() => element.value.query ? [...element.value.query] : [{}])

dynamicAppsStore.setList({ apiPath: element.value.collection, params: formattedQuery.value })

watch(() => element.value.collection, () => {
    if (!dynamicAppsStore.apps[element.value.collection]) {
        // console.log('doregisterApp')
        dynamicAppsStore.registerApp(element.value.collection)
        dynamicAppsStore.setList({ apiPath: element.value.collection, params: formattedQuery.value })
    }
})

// }

// const selectedTable = computed(() => platformSysStore.selectedTable)
// const isLoading = computed(() => selectedTable.value && selectedTable.value.collection ? dynamicAppsStore.apps[selectedTable.value.collection].loadingList : false)



// filter/sort list
const documentList = computed(() =>
    dynamicAppsStore.apps[element.value.collection]?.list
        ? getFilteredList([element.value.collection])
        : null
)

const isLoading = computed(() => dynamicAppsStore.apps[element.value.collection]?.loadingList)
</script>
