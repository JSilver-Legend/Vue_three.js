<template>
    <template v-if="activeView">

        <template v-if="computedScaleValue?.measure">
            <container :annotatorMeasurements="{ assignedKey: element.assignedKey, measureTool: 'scale', activeView }"
                :element="{ ...getFilteredContainerObject(element), children: element.measureTool.scale }"
                :entityData="entityData" />
        </template>

        <template v-for="(measure, index) in computedValue">
            <container
                :annotatorMeasurements="{ assignedKey: element.assignedKey, measureTool: element.measureTool, loopIndex: index, activeView }"
                :element="{ ...getFilteredContainerObject(element), children: element.measureTool[measure.tool] }"
                :entityData="entityData" />
        </template>
    </template>

</template>

<script setup>
import _ from "lodash"
import { toRefs, computed } from "vue"
import { useHelperFunctions } from "@/composables/useHelperFunctions"

const props = defineProps(["element", "entityData"])
const { element, entityData } = toRefs(props)


const { getComputedKey } = useHelperFunctions()

const computedKey = getComputedKey(element.value.assignedKey)
const activeView = computed(() => _.get(entityData.value, `${computedKey}.activeView.value`, false))
const computedValue = computed(() => _.get(entityData.value, `${computedKey}.${activeView.value}.measures`, []))
const computedScaleValue = computed(() => _.get(entityData.value, `${computedKey}.${activeView.value}.scale`, {}))

const getFilteredContainerObject = (element) => {
    return {
        ..._.omit(element, ['measureTool', 'assignedKey']), 'type': 'container'
    }
}
</script>


