<template>
    <component :is="element.elementType" @return="onReturn" :element="element" :computedKey="computedKey"
        :keyModifier="getKeyModifier()" :computedValue="computedValue" :entityData="entityData"
        :loopIndex="loopIndex" />
</template>

<script setup>

import _ from "lodash"

import { toRefs, inject, provide, computed, watch } from "vue"
import { useHelperFunctions } from "@/composables/useHelperFunctions"

import emitter from "@/services/emitter"

const props = defineProps(["element", "entityData", "annotatorMeasurements", "loopIndex"])
const { element, entityData, annotatorMeasurements, loopIndex } = toRefs(props)


provide('loopIndex', loopIndex)

const { getComputedKey } = useHelperFunctions()

const getKeyModifier = () => {
    let tokens = _.split(element.value.key, ":")
    if (tokens.length == 1) return null
    return tokens[0]
}

const removeKeyModifier = (key) => {

    switch (getKeyModifier()) {
        case 'number':
        case 'date':
            let tokens = _.split(key, ":")
            if (tokens.length == 1) return key
            return tokens[1]
        default:
            return key
    }
}


const getFormattedValue = (value) => {
    switch (getKeyModifier()) {
        case 'number':
            return _.toNumber(value)
        case 'date':
            return new Date(value)
        default:
            return value
    }
}

const computedKey = getComputedKey(removeKeyModifier(element.value.key), annotatorMeasurements.value)
// const computedKey = getComputedKey(element.value.key, annotatorMeasurements.value)
const computedValue = computed(() => _.get(entityData.value, computedKey))

const onUpdate = inject('onUpdate')


const onReturn = (value) => {
    onUpdate({ key: computedKey, value: getFormattedValue(value), volatileObject: element.value.volatileObject, autoSave: element.value.autoSave })
    if (element.value.writeValueAsKey && value) {
        let value4Key = getComputedKey(element.value.value4Key, annotatorMeasurements.value)
        onUpdate({ key: value, value: _.get(entityData.value, value4Key), volatileObject: element.value.volatileObject, autoSave: element.value.autoSave })
    }

    if (element.value.key2write && element.value.value2write) {
        onUpdate({ key: getComputedKey(element.value.key2write, annotatorMeasurements.value), value: _.get(entityData.value, getComputedKey(element.value.value2write, annotatorMeasurements.value)), volatileObject: element.value.volatileObject, autoSave: element.value.autoSave })
    }

    // update ag grid row
    if (element.value.autoSave !== false && entityData.value._id) {
        console.log('')
        emitter.emit('agGridTransaction', { type: 'update', data: entityData.value })
    }
}

if (element.value.writeValueAsKey) {
    const _value4Key = computed(() => _.get(entityData.value, getComputedKey(element.value.value4Key, annotatorMeasurements.value)))
    watch(() => _value4Key.value, () => {
        if (computedValue.value) {
            onUpdate({ key: computedValue.value, value: _value4Key.value, volatileObject: element.value.volatileObject, autoSave: element.value.autoSave })
        }
    })
}

</script>
