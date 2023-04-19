<template>
    <container @dragenter.prevent="toggle_active(true)" @dragleave.prevent @dragover.prevent @dragmove.prevent
        @drop.prevent="onDrop" :element="getFilteredContainerObject()" :entityData="entityData" />
</template>

<script setup>
import _ from "lodash"
import { toRefs, inject } from "vue"
import { useUploadcare } from "@/composables/useUploadcare"
import { usePlatformSysStore } from '@/store/platformSys'

const emit = defineEmits(['return'])
const props = defineProps(["element", "computedKey", "entityData"])
const { element, computedKey, entityData } = toRefs(props)

const onUpdate = inject('onUpdate')

const platformSysStore = usePlatformSysStore()

const { uploadcareStandardFileUpload } = useUploadcare()

const toggle_active = (value) => {
    _.set(platformSysStore.overlayHelper, element.value.uploaderId, value)
}

const onSingleFileUploadCallback = (data) => {
    // data = { key: "keyName", value: "value" }
    console.log('onSingleFileUploadCallback', data)
    onUpdate({ ...data })
}

const onDrop = async (e) => {
    toggle_active(false)

    e.stopPropagation()
    e.preventDefault()

    const files = e.dataTransfer.files
    uploadcareStandardFileUpload({ files: files, key: computedKey.value, uploaderResponseKey: element.value.uploaderResponseKey, onSingleFileUploadCallback }).then((response) => {
        console.log('uploadcareStandardFileUpload -> response', JSON.parse(JSON.stringify(response)))
        // emit('return', response)
        if (element.value.key2write && element.value.value2write) {
            onUpdate({ key: element.value.key2write, value: _.get(entityData.value, element.value.value2write), volatileObject: element.value.volatileObject, autoSave: element.value.autoSave })
        }
    })
}

const getFilteredContainerObject = () => {
    return {
        ..._.omit(element.value, ["elementType"]),
        type: "container"
    }
}

</script>
