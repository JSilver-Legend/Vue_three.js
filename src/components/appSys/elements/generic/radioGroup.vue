<template>
  <div v-for="(item, index) in element.items" :key="index" :class="element.parentClass">
    <input type="radio" @change="onChange"
      :value="element.value == 'object' ? JSON.stringify(item) : JSON.stringify(item[element.value])"
      :checked="JSON.stringify(computedValue) == (element.value == 'object' ? JSON.stringify(item) : JSON.stringify(item[element.value]))"
      :class="[`${element.height} ${element.width} border-gray-300 ${element.radioColor} focus:ring-indigo-500`]" />
    <label :for="index" :class="[`ml-3 block text-sm font-medium text-gray-700`]">{{
        item[element.assignedKey]
    }}</label>
  </div>
</template>

<script setup>
import { toRefs } from 'vue'

const emit = defineEmits(['return'])
const props = defineProps(["element", "computedValue"])

const { element, computedValue } = toRefs(props)

const onChange = (event) => {
  emit('return', JSON.parse(event.target.value))
}

</script>

