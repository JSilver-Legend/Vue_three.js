<template>
  <draggable :tag="element.tag ? element.tag : 'div'" :list="dragList" :group="{ /* name: element.group, */ put: true }"
    :class="element.class" :item-key="key => key" @change="onChange">
    <template #item="{ element, index }">
      <div>
        <template v-for="markup in getPageBuilderSection(element)['markup']">
          <template v-if="markup.type == 'dialog'">
            <container
              :element="{ ...markup, key: `${element.pageBuilderID}-${element.sectionId}-${markup.key}-${index}`, dialogKey: `${element.pageBuilderID}-${element.sectionId}-${markup.key}-${index}` }"
              :entityData="entityData" :loopIndex="index" :dragSectionDetail="{ ...dragSectionDetail, ...element }" />
          </template>
          <template v-else>
            <container :element="markup" :entityData="entityData" :loopIndex="index"
              :dragSectionDetail="{ ...dragSectionDetail, ...element }" />
          </template>
        </template>
      </div>
    </template>
  </draggable>
</template>

<script setup>
import draggable from 'vuedraggable'
import { toRefs, inject, computed } from 'vue'
import lodashGet from 'lodash/get'
import { useHelperFunctions } from "@/composables/useHelperFunctions"

const props = defineProps(['element', 'entityData'])
const { element, entityData } = toRefs(props)

const { getPageBuilderSection } = useHelperFunctions()


const dragList = computed(() => lodashGet(entityData.value, element.value.backendJSONKey, []))

const dragSectionDetail = computed(() => { return { backendJSONKey: element.value.backendJSONKey, key: element.value.key } })

const onUpdate = inject('onUpdate', () => null)

const array_move = (arr, old_index, new_index) => {
  if (new_index >= arr.length) {
    var k = new_index - arr.length + 1;
    while (k--) {
      arr.push(undefined);
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr;
};

const onChange = (event) => {
  console.log('dragSectionPane | onChange | event', event)
  if (event.added) {
    let initialArray = lodashGet(entityData.value, element.value.key, [])
    console.log('dragSectionPane | onChange | event.added', element.value.key, initialArray)
    if (!initialArray.length) {
      initialArray.push({
        ...event.added.element,
        contents: {}
      })

    } else {
      initialArray = [
        ...lodashGet(entityData.value, element.value.key, []).slice(0, event.added.newIndex),
        {
          ...event.added.element, contents: {}
        },
        ...lodashGet(entityData.value, element.value.key, []).slice(event.added.newIndex)]
    }
    onUpdate({ key: element.value.key, value: initialArray, volatileObject: element.value.volatileObject })
    /* onUpdate(
      element.value.key,
      initialArray,
      element.value.volatileObject
    ) */

  }
  if (event.moved) {
    onUpdate({ key: element.value.key, value: array_move(lodashGet(entityData.value, element.value.key, []), event.moved.oldIndex, event.moved.newIndex), volatileObject: element.value.volatileObject })
    /*  onUpdate(
       element.value.key,
       array_move(lodashGet(entityData.value, element.value.key, []), event.moved.oldIndex, event.moved.newIndex),
       element.value.volatileObject
     ) */
  }
  onUpdate({
    key: element.value.backendJSONKey,
    value: dragList.value,
    volatileObject: element.value.volatileObject
  })
}

</script>


<!--
:handle="'.' + (element.handle ? element.handle : 'handle')"
-->
