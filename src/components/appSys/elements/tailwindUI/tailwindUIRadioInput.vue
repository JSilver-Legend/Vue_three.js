<template>
    <input type="radio" :class="element.class" v-model.lazy="value" @change="onChange" />
</template>

<script setup>
import { toRefs, ref } from 'vue'

const emit = defineEmits(['return'])
const props = defineProps(["element", "computedValue"])

const { element, computedValue } = toRefs(props)
const value = ref(computedValue.value)

const onChange = (event) => {
    emit('return', event.target.value)
}
</script>

