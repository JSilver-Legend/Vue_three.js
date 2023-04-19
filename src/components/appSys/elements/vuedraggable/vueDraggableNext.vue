<template>
  <draggable
    :tag="element.tag ? element.tag : 'div'"
    :list="lodashGet(entityData, element.key, [])"
    :class="element.class"
    :handle="'.' + (element.handle ? element.handle : 'handle')"
    :item-key="key => key"
    @change="onDragged"
  >
    <template #item="{ index }">
      <div>
        <template
          v-for="(componentContainer, componentContainerIndex) in element.children"
          :key="componentContainerIndex"
        >
          <container
            :element="componentContainer"
            :entityData="entityData"
            :loopIndex="index"
          />
        </template>
      </div>
    </template>
  </draggable>
</template>

<script setup>
import draggable from 'vuedraggable'
import { toRefs, inject, ref } from 'vue'
import lodashGet from 'lodash/get'

const props = defineProps(['element', 'entityData'])
const { element, entityData } = toRefs(props)

const onUpdate = inject('onUpdate', () => null)

const onDragged = () => {
  /* onUpdate(
    element.value.key,
    lodashGet(entityData.value, element.value.key, []), 
    element.value.volatileObject
  ) */
  onUpdate({key:element.value.key, value: lodashGet(entityData.value, element.value.key, []), volatileObject:element.value.volatileObject})
}
</script>
