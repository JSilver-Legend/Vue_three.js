<template>
  <div :class="element.parentClass">
    <template v-for="index in arrayLength" :key="index">
        <template v-for="childrenItem in element.children">
            <container :element="childrenItem" :entityData="entityData" :loopIndex="index - 1" />
        </template>
    </template>
  </div>
</template>

<script setup>
import _ from "lodash"
import { computed, toRefs } from "vue"
const props = defineProps(["element", "entityData", "computedValue"])
const { element, entityData, computedValue } = toRefs(props)

const arrayLength = computed(() => _.isArray(computedValue.value) ? computedValue.value.length : 0)
</script>
