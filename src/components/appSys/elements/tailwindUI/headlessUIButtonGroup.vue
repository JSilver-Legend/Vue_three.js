<template>
  <RadioGroup :id="element.buttonGroupId" v-model="modelValue" @click="onChange" :class="element.class">
    <RadioGroupOption v-for="(value, index) in element.values" v-slot="{ checked }" :value="JSON.stringify(value)">
      <container :buttonGroupchecked="checked" :element="element.children[index]" :entityData="entityData" />
    </RadioGroupOption>
  </RadioGroup>
</template>

<script setup>
import _ from "lodash"
import { RadioGroup, RadioGroupOption } from '@headlessui/vue'
import { toRefs, watch, ref } from 'vue'

const emit = defineEmits(['return'])
const props = defineProps(["element", "entityData", "computedValue"])
const { element, entityData, computedValue } = toRefs(props)

const modelValue = ref(null)

const setModelValue = () => {
  if (computedValue.value) {
    element.value.values.filter((item) => {
      if ((element.value.value !== "object" && _.get(item, element.value.value) == computedValue.value)
        || (JSON.stringify(item) == JSON.stringify(computedValue.value))) {
        modelValue.value = JSON.stringify(item)
      }
    })
  }
}

setModelValue()

watch(() => computedValue.value, () => {
  if (computedValue.value !== modelValue.value)
    setModelValue()
})

const onChange = () => {
  console.log('button gorup | ', modelValue.value)
  let value = null
  try {
    value = JSON.parse(modelValue.value)
  } catch {
    value = _.trim(modelValue.value, `"'`)
  }

  if (element.value.value !== "object") {
    emit('return', _.get(value, element.value.value))
  } else {
    emit('return', value)
  }
}
</script>
