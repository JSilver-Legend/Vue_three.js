<template>
    <textarea
        :value="value"
        :class="element.class"
        :rows="element.rows"
        :disabled="element.disabled == 'true' ? true : false"
        :placeholder="element.placeholder ? element.placeholder : ''"
        @input="onChange($event, 'input')"
        @change="onChange($event, 'change')"
    ></textarea>
</template>

<script setup>
import { toRefs, computed } from "vue"

const emit = defineEmits(["return"])
const props = defineProps(["element", "computedValue"])

const { element, computedValue } = toRefs(props)
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
