<template>
  <draggable :tag="element.tag ? element.tag : 'div'" :list="element.children"
    :group="{ /* name: element.group, */ pull: 'clone', put: false }" :class="element.class" :clone="clone"
    :item-key="key => key">
    <template #item="{ element }">
      <container :element="element" :entityData="entityData" />
    </template>
  </draggable>
</template>

<script setup>
import draggable from 'vuedraggable'
import { toRefs } from 'vue'

const props = defineProps(['element', 'entityData'])
const { element, entityData } = toRefs(props)

const clone = (event) => {
  console.log('dragItems | clone ', element.value.pageBuilderID, event.sectionId)
  return { pageBuilderID: element.value.pageBuilderID, sectionId: event.sectionId }
}
</script>
