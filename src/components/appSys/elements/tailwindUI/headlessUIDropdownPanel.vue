<template>
  <Menu as="div">
    <MenuButton ref="menuButton" class="sr-only" />

    <transition enter-active-class="transition ease-out duration-75" enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-75" leave-to-class="transform opacity-0 scale-95">
      <MenuItems :class="element.class">
        <template v-for="(componentContainer, componentContainerIndex) in element.children"
          :key="componentContainerIndex">
          <MenuItem>
          <container :element="componentContainer" :entityData="entityData" :loopIndex="index" />
          </MenuItem>
        </template>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { toRefs, ref, computed, watch } from 'vue'
import { usePlatformNavigationStore } from '@/store/platformNavigation'
const platformNavigationStore = usePlatformNavigationStore()

const props = defineProps(['element', 'entityData'])
const { element, entityData } = toRefs(props)
const menuButton = ref(null)

const selectedDropdownPanel = computed(
  () => platformNavigationStore.selectedDropdownPanel
)
watch(selectedDropdownPanel, () => {
  if (
    selectedDropdownPanel.value &&
    selectedDropdownPanel.value.includes('?')
  ) {
    const targetId = selectedDropdownPanel.value.split('?')[0]
    if (targetId && targetId == element.value.id) menuButton.value.$el.click()
  }
})
</script>
