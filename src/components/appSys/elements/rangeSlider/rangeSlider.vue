<template>
  <div :class="element.parentClass">
    <slider
      v-model="value"
      :orientation="element.orientation"
      :circleOffset="element.circleOffset"
      :min="element.min"
      :max="element.max"
      :height="element.height"
      :step="element.step"
      :tooltip= "element.tooltip"
      tooltipText="%v"
      :color="element.color"
      :track-color="element.trackcolor"
      :class="element.class"
    />
  </div>
</template>

<script setup>
import slider from "vue3-slider"

import { toRefs, computed } from "vue"

const emit = defineEmits(["return"])
const props = defineProps(["element", "computedValue", "keyModifier"])

const { element, computedValue } = toRefs(props)

const value = computed({
    // getter
    get() {
        return computedValue.value || 0
    },
    // setter
    set(newValue) {
        emit("return", newValue)
    }
})

</script>
