<template>
  <div :class="element.parentClass">
    <Switch v-model="enabled"
      :class="[enabled ? element.bgActive : element.bgInactive, `relative inline-flex ${element.height} ${element.width} flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out`]">
      <span aria-hidden="true"
        :class="[enabled ? element.translateX : 'translate-x-0', `pointer-events-none inline-block h-4 w-4 transform rounded-full ${element.handleColor} shadow ring-0 transition duration-200 ease-in-out`]" />
    </Switch>
  </div>
</template>

<script setup>
import { Switch } from '@headlessui/vue'
import { toRefs, watch, ref } from 'vue'

const emit = defineEmits(['return'])
const props = defineProps(["element", "computedValue"])

const { element, computedValue } = toRefs(props)
const enabled = ref(JSON.stringify(computedValue.value) == JSON.stringify(element.value.activeValue) ? true : false)

watch(enabled, () => {
  emit('return', enabled.value ? element.value.activeValue : element.value.inactiveValue)
})
</script>

