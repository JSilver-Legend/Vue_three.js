<template>
    <input type="checkbox" :class="element.class" v-model.lazy="checked" @change="onChange" />
</template>

<script setup>
import { ref, toRefs } from "vue"

const emit = defineEmits(['return'])
const props = defineProps(["element", "computedValue"])

const { element, computedValue } = toRefs(props)

const checked = ref(JSON.stringify(computedValue.value) == JSON.stringify(element.value.activeValue) ? true : false)

const onChange = (event) => {
    emit('return', event.target.checked ? element.value.activeValue : element.value.inactiveValue)
}
</script>

