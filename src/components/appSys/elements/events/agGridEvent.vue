<template>
  <staticHtmlTag v-if="element.elementType == 'staticHtmlTag'" @click.stop="onClick(element.sortObj)"
    :element="getFilteredObject(element)" :entityData="entityData" />
  <component v-else-if="element.elementType" :is="element.elementType" @return="onClick"
    :element="getFilteredObject(element)" :entityData="entityData" />
  <container v-else @click.stop="onClick(element.value)" :element="getFilteredContainerObject(element)"
    :entityData="entityData" />
</template>

<script setup>

import _ from "lodash"
import { toRefs } from "vue"

import emitter from "@/services/emitter"

const props = defineProps(["element", "entityData"])

const { element, entityData } = toRefs(props)

const onClick = async (value) => {
  console.log('onClick | agGridEvent | eventType -> ', element.value.eventType)
  switch (element.value.eventType) {
    case "agGridClearSort":
      emitter.emit('agGridEvent', { type: 'agGridClearSort' })
      break
    case "agGridSort":
      emitter.emit('agGridEvent', { type: 'agGridSort', data: value })
      break
    case "agGridFilter":
      emitter.emit('agGridEvent', { type: 'agGridFilter', data: value })
      break
    case "agGridWrite":
      emitter.emit(element.value.agGridId + 'agGridWrite', { writeType: element.value.writeType })
      break

  }
}

const getFilteredObject = (element) => {
  return {
    ..._.omit(element, ['elementType', 'eventType', 'toggleDialog', 'dialogKey']), 'elementType': 'staticHtmlType'
  }
}

const getFilteredContainerObject = (element) => {
  return {
    ..._.omit(element, ['elementType', 'eventType', 'toggleDialog', 'dialogKey']), 'type': 'container'
  }
}
</script>
