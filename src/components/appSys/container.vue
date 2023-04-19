<template>
  <component v-if="!tabHide && element.type !== 'dialog' && isVisible(element) && overlayEnabled"
    :is="element.containerType ? element.containerType : 'div'" :id="element.id" :class="computedClass"
    :style="element.style" @mouseover.stop="onMouseover(element.id)" @mouseleave.stop="onMouseleave(element.id)"
    @click.capture="onClick" @dragleave.prevent="handleDragLeave">

    <template v-for="(childItem, index) in element.children" :key="index">

      <container v-if="childItem.type == 'container'" :element="childItem" :entityData="entityData"
        :annotatorMeasurements="annotatorMeasurements" :dragSectionDetail="dragSectionDetail" :loopIndex="loopIndex"
        :buttonGroupchecked="buttonGroupchecked" />

      <staticHtmlTag
        v-else-if="childItem.type == 'element' && childItem.elementType == 'staticHtmlTag' && isVisible(childItem)"
        :class="isBuilder ? 'dropzone border border-transparent hover:border-red-500 hover:border-solid' : ''"
        :element="childItem" :entityData="entityData" :annotatorMeasurements="annotatorMeasurements" />

      <component :is="childItem.type" v-else-if="isVisible(childItem)"
        :class="isBuilder ? 'dropzone border border-transparent hover:border-red-500 hover:border-solid' : ''"
        :element="childItem" :entityData="entityData" :annotatorMeasurements="annotatorMeasurements"
        :dragSectionDetail="dragSectionDetail" :loopIndex="loopIndex" :buttonGroupchecked="buttonGroupchecked" />

    </template>
  </component>


  <TransitionRoot v-else-if="element.type == 'dialog' && isVisible(element)" as="template"
    :show="platformSysStore.dialogsHelper[element.key] ? true : false" :appear="true">
    <Dialog as="div" class="fixed z-10 inset-0" @close="onClick">
      <div class="flex items-end justify-center min-h-screen text-center sm:block sm:p-0 overflow-y-auto">

        <TransitionChild v-if="element.type.showBG !== 'false'" as="template" enter="duration-100" enter-from="opacity-0"
          enter-to="opacity-100" leave="ease-in duration-100" leave-from="opacity-100" leave-to="opacity-0"
          :appear="true">
          <DialogOverlay class="fixed inset-0 bg-black bg-opacity-70 transition-opacity" />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <TransitionChild as="template" enter="ease-in duration-200" enter-from="opacity-0 translate-y-4 scale-90"
          enter-to="opacity-100 translate-y-0 scale-100" leave="ease-in duration-100"
          leave-from="opacity-100 translate-y-0 sm:scale-100"
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" :appear="true">
          <div :id="element.id" :class="computedClass">
            <template v-for="(childItem, index) in element.children" :key="index">
              <container v-if="childItem.type == 'container'" :element="childItem" :entityData="entityData"
                :annotatorMeasurements="annotatorMeasurements" :dragSectionDetail="dragSectionDetail"
                :loopIndex="loopIndex" :buttonGroupchecked="buttonGroupchecked" />

              <staticHtmlTag
                v-else-if="childItem.type == 'element' && childItem.elementType == 'staticHtmlTag' && isVisible(childItem)"
                :annotatorMeasurements="annotatorMeasurements"
                :class="isBuilder ? 'dropzone border border-transparent hover:border-red-500 hover:border-solid' : ''"
                :element="childItem" :entityData="entityData" />

              <component :is="childItem.type" v-else-if="isVisible(childItem)"
                :annotatorMeasurements="annotatorMeasurements"
                :class="isBuilder ? 'dropzone border border-transparent hover:border-red-500 hover:border-solid' : ''"
                :element="childItem" :entityData="entityData" :dragSectionDetail="dragSectionDetail"
                :loopIndex="loopIndex" :buttonGroupchecked="buttonGroupchecked" />

            </template>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import {
  toRefs,
  computed,
  inject,
  provide,
  onBeforeMount
} from 'vue'

import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'

import _ from "lodash"
import { useHelperFunctions } from '@/composables/useHelperFunctions'
import { useElementCondition } from '@/composables/appSys/useElementCondition'
import { usePlatformSysStore } from '@/store/platformSys'

const platformSysStore = usePlatformSysStore()
const { isDragSectionDialog, getComputedKey } = useHelperFunctions()
const { isConditionQualified } = useElementCondition()

const props = defineProps(['element', 'entityData', 'loopIndex', 'buttonGroupchecked', 'dragSectionDetail', 'annotatorMeasurements'])

const { element, entityData, loopIndex, buttonGroupchecked, dragSectionDetail, annotatorMeasurements } = toRefs(props)

provide('loopIndex', loopIndex.value)
provide('dragSectionDetail', dragSectionDetail.value)
provide('buttonGroupchecked', buttonGroupchecked.value)

const isBuilder = inject('isBuilder', false)
const hoverId = inject('hoverId', null)
const selectedId = inject('selectedId', null)
const selected = inject('selected', false)

const onMouseover = inject('onMouseover', () => null)
const onMouseleave = inject('onMouseleave', () => null)

onBeforeMount(() => {
  if (
    element.value?.tabGroupID &&
    element.value?.tabID &&
    !platformSysStore.activeTabs[element.value.tabGroupID]
  ) {
    platformSysStore.selectTab(
      element.value.tabGroupID,
      element.value.tabID
    )
  }
})

const onClick = () => {

  if (element.value.tabGroupID && element.value.tabID) {
    platformSysStore.selectTab(
      element.value.tabGroupID,
      element.value.tabID
    )
  }

  if (element.value.toggleDialog) {
    let dialogKey = element.value.dialogKey
    if (dragSectionDetail?.value?.key && isDragSectionDialog(dragSectionDetail.value, element.value.dialogKey)) {
      dialogKey = `${dragSectionDetail.value.pageBuilderID}-${dragSectionDetail.value.sectionId}-${element.value.dialogKey}-${loopIndex.value}`
    }
    platformSysStore.toggleDialog(
      dialogKey,
      element.value.dialogOptions
    )
  }

  return

}

const handleDragLeave = () => {
  if (element.value.type == 'overlay') {
    _.set(platformSysStore.overlayHelper, element.value.uploaderId, false)
    console.log('handleDragLeave', false, platformSysStore.overlayHelper)
  }
}
const overlayEnabled = computed(() => {
  let flag = true
  if (element.value.type == 'overlay') {
    flag = _.get(platformSysStore.overlayHelper, element.value.uploaderId, false)
  }
  return flag
})

const isVisible = (element) => {
  return isConditionQualified(element.conditionArray, entityData.value, annotatorMeasurements.value, loopIndex.value)
}

const class2add = computed(() => {
  let class2add = ''
  if (element.value.class2add) {
    class2add =
      entityData.value.class2add &&
        Array.isArray(entityData.value.class2add) &&
        entityData.value.class2add.length
        ? entityData.value.class2add.filter(
          (obj) => obj.id == element.value.class2add
        )
        : ''
  }
  return (
    class2add && Array.isArray(class2add) && class2add.length
      ? class2add[0].value
      : '')
})

const tabHide = computed(() => {
  return element.value?.tabGroupID &&
    element.value?.tabID &&
    element.value?.tabContent &&
    platformSysStore.activeTabs[element.value.tabGroupID] !== element.value.tabID
    ? true
    : false
})

const computedClass = computed(() => {
  return (
    (selected.value ? element.value.selectedClass || element.value.class : element.value.class) +
    ' ' +
    class2add.value +
    ' ' +
    (buttonGroupchecked.value ? element.value.checkedClass : '') + ' ' +
    (element.value.tabGroupID &&
      element.value.tabID &&
      !element.value.tabContent &&
      platformSysStore.activeTabs[element.value.tabGroupID] ==
      element.value.tabID
      ? element.value.activeClass
      : '') +
    ' ' +
    /* (element.value.tabGroupID &&
      element.value.tabID &&
      element.value.tabContent &&
      platformSysStore.activeTabs[element.value.tabGroupID] !==
      element.value.tabID
      ? 'hidden'
      : '') +
    ' ' + */
    (isBuilder ? ' dropzone' : '') +
    (isBuilder &&
      element.value.id !== hoverId.value &&
      element.value.id !== selectedId.value
      ? ' border border-dotted border-gray-300'
      : '') +
    (isBuilder &&
      (element.value.id == hoverId.value ||
        element.value.id == selectedId.value)
      ? ' border border-solid border-red-500'
      : '')
  )
})
</script>
