<template>
    <staticHtmlTag v-if="element.elementType == 'staticHtmlTag'" @click.stop="onClick(element.value)"
        :element="getFilteredObject(element)" :entityData="entityData" />
    <component v-else-if="element.elementType" :is="element.elementType" @return="onClick" :computedValue="computedValue"
        :element="getFilteredObject(element)" :entityData="entityData" />
    <container v-else @click.stop="onClick(element.value)" :element="getFilteredContainerObject(element)"
        :entityData="entityData" />
</template>

<script setup>
import _ from "lodash"
import emitter from "@/services/emitter"
import { toRefs, inject, computed } from "vue"
import { usePlatformSysStore } from '@/store/platformSys'
import { useHelperFunctions } from "@/composables/useHelperFunctions"

const props = defineProps(["element", "entityData", "annotatorMeasurements"])
const { element, entityData, annotatorMeasurements } = toRefs(props)

const onAddArrayItem = inject('onAddArrayItem', () => null)
const loopIndex = inject('loopIndex', null)

const platformSysStore = usePlatformSysStore()

const { getComputedKey } = useHelperFunctions()

const getEventKey = (eventType) => {
    switch (eventType) {
        case 'activateTool':
            return '.activeTool'
        case 'undo':
            return '.undo'
        case 'redo':
            return '.redo'
        case 'fitToScreen':
            return '.fitToScreen'
        case 'setView':
            return '.activeView'
        case 'deleteMeasurement':
            return '.deleteMeasure'
        case 'lockMeasurement':
            return '.lockMeasure'
        case 'setMaxResolution':
            return '.maxResolution'
        case 'toggleVisibilityBGimage':
            return '.visibilityBGimage'
        case 'exportImage':
            return '._EXPORT_IMAGE_'
        case 'setBackground':
            return '._SET_BACKGROUND_EVENT_FLAG_'
        case 'clearCanvas':
            return '._CLEAR_CANVAS_'
        default:
            return ''
    }
}

const computedKey = getComputedKey(element.value.criteria ? element.value.criteria : element.value.key)
const computedValue = computed(() => {
    if (element.value.eventType == 'activateTool'
        || element.value.eventType == 'setView'
        || element.value.eventType == 'setMaxResolution'
        || element.value.eventType == 'toggleVisibilityBGimage'
    ) {
        return _.get(entityData.value, computedKey + getEventKey(element.value.eventType))
    }
    else if (element.value.eventType == 'lockMeasurement') {
        if (element.value.measureType == 'scale') {
            return _.get(entityData.value, getComputedKey('measure.locked', annotatorMeasurements.value))
        }
        return _.get(entityData.value, getComputedKey('index:locked', annotatorMeasurements.value))
    }
    else {
        return _.get(entityData.value, computedKey)
    }
})

const onUpdate = inject('onUpdate')

const getModifiedValueObject = (value) => {
    if (_.isObject(value)) {
        return _.mapValues(value, function (item) { return getComputedKey(item.toString(), null, loopIndex) });
    } else return {}
}
const onStoreMeasures = () => {
    const activeView = _.get(entityData.value, `${computedKey}.activeView.value`, false)
    if (activeView) {
        let measures = _.get(
            entityData.value, // data
            `${computedKey}.${activeView}.measures`, // key,
            false // dafault false
        )
        if (measures && Array.isArray(measures) && measures.length) {

            // if key2write found write calculated centerDot
            // measures -> is array, could have multiple elements
            // each array element has segments key
            // to access the segments of first measures -> measures[0].segments[0][0]
            if (element.value.centerDot == true) {
                for (let index = 0; index < measures.length; index++) {
                    // let extremePoints = [element.segments[0][0], element.segments[1][0], element.segments[2][0], element.segments[3][0]]
                    let extremePoints = [measures[index].segments[0][0], measures[index].segments[1][0], measures[index].segments[2][0], measures[index].segments[3][0]]
                    let n = extremePoints.length
                    let d = extremePoints[0].length
                    let min = extremePoints[0].slice()
                    let max = extremePoints[0].slice()
                    for (let i = 1; i < n; ++i) {
                        let p = extremePoints[i]
                        for (let j = 0; j < d; ++j) {
                            let x = p[j]
                            min[j] = Math.min(min[j], x)
                            max[j] = Math.max(max[j], x)
                        }
                    }

                    const centerDot = { x: min[0] + (max[0] - min[0]) / 2, y: min[1] + (max[1] - min[1]) / 2 }
                    console.log(element.value.key2write, centerDot)
                    measures[index]['centerDot'] = centerDot
                }
                // onUpdate({ key: element.value.key2write, value: centerDot, volatileObject: element.value.volatileObject, autoSave: element.value.autoSave })
            }

            let references = _.get(
                entityData.value, // data
                `${computedKey}.${activeView}.references`, // key,
                {} // dafault false
            )

            onAddArrayItem(getComputedKey(element.value.storeLocation), { measureStart: Date.now(), measures, references })
            if (element.value.clearCanvas === true) {
                onUpdate({ key: computedKey + getEventKey('clearCanvas'), value: !_.get(entityData.value, computedKey + getEventKey('clearCanvas')), volatileObject: element.value.volatileObject, autoSave: false })
            }
        }
    }
}


const onClick = (value) => {
    console.log('onClick | annotatorEvent ->', element.value.eventType, computedKey + getEventKey(element.value.eventType), value)

    switch (element.value.eventType) {


        case 'setView':
        case 'activateTool':
        case 'setBackground':
            onUpdate({ key: computedKey + getEventKey(element.value.eventType), value: getModifiedValueObject(value), volatileObject: element.value.volatileObject, autoSave: false })
            break;

        case 'deleteMeasurement':
        case 'lockMeasurement':
            onUpdate({ key: computedKey + getEventKey(element.value.eventType), value: element.value.measureType == "scale" ? "scale" : annotatorMeasurements.value.loopIndex, volatileObject: element.value.volatileObject, autoSave: false })
            break;

        case 'undo':
        case 'redo':
        case 'fitToScreen':
        case 'setMaxResolution':
        case 'toggleVisibilityBGimage':
        case 'exportImage':
        case 'clearCanvas':
            onUpdate({ key: computedKey + getEventKey(element.value.eventType), value: !_.get(entityData.value, computedKey + getEventKey(element.value.eventType)), volatileObject: element.value.volatileObject, autoSave: false })
            break;

        case 'storeMeasures':
            onStoreMeasures()
            break;

        case 'exchangeTool':
            onUpdate({ key: computedKey + getEventKey('activateTool'), value: getModifiedValueObject(value), volatileObject: element.value.volatileObject, autoSave: false })
            emitter.emit('annotatorEvent', { type: 'exchangeTool', value })
            break;

        case 'filterObjectsArray':
            emitter.emit('annotatorEvent', { type: 'filterObjectsArray', value })
    }

    if (element.value.eventType == 'exportImage') {
        _.set(platformSysStore.annotatorExportImageHelper, computedKey, { ..._.pick(element.value, ["exportKey", "key2write", "value2write"]) })
    }
}

const getFilteredObject = (element) => {
    let resultantElement = { ..._.omit(element, ['eventType']), 'type': 'element' }
    return resultantElement
}

const getFilteredContainerObject = (element) => {
    return {
        ..._.omit(element, ['eventType', 'storeArray', 'criteria']), 'type': 'container'
    }
}
</script>
