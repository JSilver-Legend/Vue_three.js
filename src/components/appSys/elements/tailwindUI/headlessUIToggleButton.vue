<template>
  <component :is="element.tag ? element.tag : 'div'" :class="element.parentClass" @click="onClick">
    <container :element="element.children[currntIndex]" :entityData="entityData" />
  </component>
</template>

<script setup>
import { ref, computed } from "@vue/reactivity";
import { toRefs } from 'vue'

const emit = defineEmits(['return'])
const props = defineProps(["element", "entityData", "computedValue"])

const { element, entityData, computedValue } = toRefs(props)

const localValue = ref(null)

const currntIndex = computed(() => {
  let index = 0
  element.value.children.forEach((item, idx) => {
    if (JSON.stringify(item.value) == JSON.stringify(computedValue.value) || JSON.stringify(item.value) == JSON.stringify(localValue.value))
      index = idx
  });
  return index
})

const onClick = () => {
  if (!element.value.children[currntIndex.value].fixStatus) {
    localValue.value = element.value.children[(currntIndex.value + 1) % element.value.children.length].value
    emit('return', localValue.value)
  }
}


</script>
