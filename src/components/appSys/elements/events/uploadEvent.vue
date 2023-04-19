<template>
    <staticHtmlTag v-if="computedElement.elementType == 'staticHtmlTag'" @click.stop="onClick"
        :element="getFilteredObject(computedElement)" :entityData="entityData" />
    <container v-else @click.stop="onClick" :element="getFilteredContainerObject(computedElement)"
        :entityData="entityData" />
</template>

<script setup>
import _ from "lodash"
import { toRefs, inject, ref, computed } from "vue"

import { usePlatformSysStore } from '@/store/platformSys'
import { useHelperFunctions } from "@/composables/useHelperFunctions"

const props = defineProps(["element", "entityData"])
const { element, entityData } = toRefs(props)

const platformSysStore = usePlatformSysStore()
const { getComputedKey } = useHelperFunctions()

const onUpdate = inject('onUpdate')
const loopIndex = inject('loopIndex')

const onDeleteArrayItem = inject('onDeleteArrayItem', () => null)

const progress = ref(false)
const computedKey = getComputedKey(element.value.criteria)
const computedKeyWithIndex = computedKey + (loopIndex !== undefined && _.get(element.value, 'uploaderResponseKey', '') ? `[${loopIndex}].${element.value.uploaderResponseKey}` : '')

const computedElement = computed(() => {
    if (progress.value && element.value.progressIndicator) {
        // if delete is in progress return progress markup
        return element.value.progressIndicator
    }
    else {
        // otherwise return regular markup
        return element.value
    }
})


const onClick = async () => {

    console.log('onClick | uploadEvent ->', element.value.eventType, element.value.criteria)

    switch (element.value.eventType) {
        case 'delete':
            progress.value = true
            let deleteResponse = await platformSysStore.appSysFunctionActions('deleteFileStorageUploadcare', { uuid: _.get(entityData.value, computedKeyWithIndex).uuid })
            console.log(deleteResponse)
            onUpdate({ key: computedKeyWithIndex, value: null, volatileObject: element.value.volatileObject })
            if (loopIndex !== undefined) {
                onDeleteArrayItem(computedKey, loopIndex)
            }
            progress.value = false
            break;
    }

}

const getFilteredObject = (element) => {
    return {
        ..._.omit(element, ['eventType']), 'type': 'element'
    }
}

const getFilteredContainerObject = (element) => {
    return {
        ..._.omit(element, ['eventType']), 'type': 'container'
    }
}
</script>
