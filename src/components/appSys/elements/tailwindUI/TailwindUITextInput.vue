<template>
    <input
        :value="value"
        :class="element.class"
        :disabled="element.disabled == 'true' ? true : false"
        :type="element.textInputType ? element.textInputType : 'text'"
        :placeholder="element.placeholder ? element.placeholder : ''"
        @input="onChange($event, 'input')"
        @change="onChange($event, 'change')"
    />
</template>

<script setup>
import { toRefs, computed } from "vue"

const emit = defineEmits(["return"])
const props = defineProps(["element", "computedValue", "keyModifier"])

const { element, computedValue, keyModifier } = toRefs(props)
const value = computed(() => computedValue.value)

const onChange = (event, type) => {
    if (
        (keyModifier.value == "date" ||
            element.value.updateEvent == "onChange") &&
        type == "input"
    ) {
        return
    }
    emit("return", event.target.value)
}
</script>
