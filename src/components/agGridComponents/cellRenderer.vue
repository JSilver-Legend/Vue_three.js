<template>
    <container :element="props.params.markup" :entityData="props.params.data" />
</template>

<script>
import { computed, provide } from "vue"
import _ from "lodash"
import { useDynamicAppsStore } from "@/store/dynamicApps"

export default {
    setup(props) {
        const dynamicAppsStore = useDynamicAppsStore()
        const selectedDocument = computed(() => _.get(dynamicAppsStore, `apps.${props.params.collection}.selected`), {})
        const selected = computed(() => selectedDocument.value?._id && selectedDocument.value._id.toString() == props.params.data?._id.toString())
        provide('selected', selected)
        return { props }
    },
}
</script>>
