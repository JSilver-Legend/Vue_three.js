<template>
    <component v-bind:is="element.tag ? element.tag : 'div'" :style="element.style"
        :class="element.class">
        <template v-for="(document, index) in element.tablesGroup[0].tables" :key="index">
            <container @click="onSelectDocument(document)"
                :element="document.collection == selectedTable?.collection ? activeCell : normalCell"
                :entityData="document" />
        </template>
    </component>
</template>

<script setup>
import { toRefs, computed } from "vue"

import { usePlatformSysStore } from "@/store/platformSys"

import { useDocumentList } from "@/composables/navigation/useDocumentList"

const props = defineProps(["element"])
const { element } = toRefs(props)

const platformSysStore = usePlatformSysStore()

const { normalCell, activeCell } = useDocumentList({ element: element.value })

const onSelectDocument = (data) => {
    platformSysStore.selectTable({ data })
}

if (element.value?.selectFirst) {
    platformSysStore.selectTable({ data: element.value.tablesGroup[0].tables[0] })
} else {
    platformSysStore.selectTable({ data: null })
}



const selectedTable = computed(() => platformSysStore.selectedTable)

</script>

<style lang="scss" scoped>

</style>
