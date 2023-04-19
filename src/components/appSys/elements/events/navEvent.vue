<template>

  <staticHtmlTag v-if="element.elementType == 'staticHtmlTag'" @click.stop="onClick(element.value)" :element="{
    ...element, class: (selectedFolderNavigationViewID !== element.viewID ? element.class : (element.class + ' ' + element.selected))
  }" :entityData="entityData" />
  <component v-else-if="element.elementType && element.elementType !== 'navEvent'" :is="element.elementType" @return="onClick" :computedValue="computedValue"
    :element="{
      ...element, class: (selectedFolderNavigationViewID !== element.viewID ? element.class : (element.class + ' ' + element.selected))
    }" :entityData="entityData" />
  <container v-else-if="element.elementType !== 'navEvent'" @click.stop="onClick(element.value)"
    :element="{ ...element, class: (selectedFolderNavigationViewID !== element.viewID ? element.class : (element.class + ' ' + element.selected)) }"
    :entityData="entityData" />

</template>

<script setup>
import { computed, toRefs, inject } from 'vue'
import { useAuthStore } from '@/store/auth'
import { usePlatformSysStore } from "@/store/platformSys"
import { usePlatformNavigationStore } from '@/store/platformNavigation'
import { useRouter } from 'vue-router'

import staticHtmlTag from '@/components/appSys/elements/system/staticHtmlTag.vue'
import { useAppNavigation } from '@/composables/navigation/useAppNavigation'

const { backAppNavigation } = useAppNavigation()

const props = defineProps(['element', 'entityData'])
const { element, entityData } = toRefs(props)

const authStore = useAuthStore()
const platformSysStore = usePlatformSysStore()
const platformNavigationStore = usePlatformNavigationStore()
const onAddArrayItem = inject('onAddArrayItem', () => null)
const onDeleteArrayItem = inject('onDeleteArrayItem', () => null)

const loopIndex = inject('loopIndex', null)
const dragSectionDetail = inject('dragSectionDetail', null)

const router = useRouter()

const computedValue = computed(() => {
  let value = ''
  if (element.value.eventType == 'themeSwitch') {
    value = platformSysStore.theme[element.value.theme]
  }
  return value
})

const currentNavigation = computed(() =>
  platformNavigationStore.navigationStack.length
    ? platformNavigationStore.navigationStack[
    platformNavigationStore.navigationStack.length - 1
    ]
    : null
)
const selectedFolderNavigationViewID = computed(
  () => platformNavigationStore.selectedFolderNavigationViewID
)

const onToggleView = () => {
  platformNavigationStore.selectedFolderNavigationViewID = element.value.viewID
}

const onToggleNavigation = () => {
  platformNavigationStore.platformNavigation = {
    ...platformNavigationStore.platformNavigation,
    showPlatformNavigation: !platformNavigationStore.showPlatformNavigation,
  }
}

const onLogout = async () => {
  authStore.logout()
}

const onResetNav = () => {
  platformNavigationStore.resetNav()
  router.push('/')
}

const onNavigationBackButton = () => {
  if (
    currentNavigation.value &&
    currentNavigation.value.type == 'appNavigation'
  ) {
    backAppNavigation()
  }
}

const onDraggableAddItem = () => {
  onAddArrayItem(element.value.key, {})
}

const onDraggableDeleteItem = () => {
  onDeleteArrayItem(element.value.key, loopIndex)
}

const onDragSectionPaneDeleteItem = () => {
  console.log('navEvent | onDragSectionPaneDeleteItem', dragSectionDetail.key, loopIndex)
  onDeleteArrayItem(dragSectionDetail.key, loopIndex)
  console.log('navEvent | onDragSectionPaneDeleteItem', dragSectionDetail.backendJSONKey, loopIndex)
  onDeleteArrayItem(dragSectionDetail.backendJSONKey, loopIndex)
}

const openDropdownMenu = () => {
  const date = new Date()
  platformNavigationStore.selectedDropdownPanel = element.value.target + '?' + date.getTime()
}

const onThemeSwitch = (value) => {
  platformSysStore.theme[element.value.theme] = value
}

const onClick = (value) => {
  console.log('onClick | type, eventType -> ', element.value.type, element.value.eventType)
  switch (element.value.eventType) {
    case 'toggleView':
      onToggleView()
      break
    case 'logout':
      onLogout()
      break
    case 'resetNav':
      onResetNav()
      break
    case 'toggleNavigation':
      onToggleNavigation()
      break
    case 'navigationBackButton':
      console.log('case:navigationBackButton')
      onNavigationBackButton()
      break
    case 'draggableAddItem':
      onDraggableAddItem()
      break
    case 'draggableDeleteItem':
      onDraggableDeleteItem()
      break
    case 'dragSectionPaneDeleteItem':
      onDragSectionPaneDeleteItem()
      break
    case 'dropdownPanelTrigger':
      // run dropdownPanel openMenu method
      openDropdownMenu()
      break
    case 'themeSwitch':
      onThemeSwitch(value)
      break
    case 'showHideSidebar':
      platformSysStore.showSidebar = !platformSysStore.showSidebar
      break;
    case 'showHideTopbar':
      platformSysStore.showTopBar = !platformSysStore.showTopBar
      break;

  }
}
</script>
