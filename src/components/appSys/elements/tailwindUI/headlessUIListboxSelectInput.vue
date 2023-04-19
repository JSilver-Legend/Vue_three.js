<template>
  <div :class="element.class">
    <Listbox as="div" v-model="selected">
      <div class="relative">
        <ListboxButton :class="element.listbox.listboxButton.class">
          <container v-for="(item, itemIndex) in element.listbox.listboxButton.children" :key="itemIndex"
            :element="item" :entityData="{ ...selected, ...entityData }" />
        </ListboxButton>


        <transition leave-active-class="transition duration-200 ease-in" leave-from-class="opacity-100"
          leave-to-class="opacity-0">
          <ListboxOptions :class="element.listbox.listboxOptionsContainer.class">
            <ListboxOption as="template" v-for="item in listOptions" :key="item.value" :value="item"
              v-slot="{ active, selected }">
              <li :class="[
                active
                  ? element.listbox.listboxOptionsContainer.listboxOptions.classActive
                  : element.listbox.listboxOptionsContainer.listboxOptions.classInactive,
                element.listbox.listboxOptionsContainer.listboxOptions.class,
              ]">
                <container v-for="(cItem, itemIndex) in element.listbox.listboxOptionsContainer.listboxOptions.children"
                  :key="itemIndex" :element="cItem"
                  :entityData="{ active: active.toString(), selected: selected.toString(), ...item }" />
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>

<script setup>
import { ref, toRefs, watch, inject, computed } from 'vue'
import _ from 'lodash'
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/vue'

import { useElementCondition } from '@/composables/appSys/useElementCondition'

const emit = defineEmits(['return'])
const props = defineProps(['element', 'computedValue', 'entityData'])
const { element, computedValue, entityData } = toRefs(props)

const { isConditionQualified } = useElementCondition()

const listOptions = computed(() => {
  for (let index = 0; index < element.value.options.length; index++) {
    const item = element.value.options[index];
    if (!item.conditionArray || isConditionQualified(item.conditionArray, entityData.value))
      return item.children
  }
  return []
})

const selected = ref({
  value: '',
  name: element.value.listbox.listboxButton.placeholder ? element.value.listbox.listboxButton.placeholder : '',
})

if (computedValue.value) {
  listOptions.value.filter((item) => {
    if (element.value.value == "object" && JSON.stringify(item) == JSON.stringify(computedValue.value)) {
      selected.value = item
    } else if (_.get(item, element.value.value) == computedValue.value) {
      selected.value = item
    }
  })
}

watch(listOptions, () => {
  selected.value = {
    value: '',
    name: element.value.listbox.listboxButton.placeholder ? element.value.listbox.listboxButton.placeholder : 'Select an item',
  }
})

watch(selected, (currentValue) => {
  if (element.value.value == "object") {
    emit('return', currentValue)
  } else {
    emit('return', _.get(currentValue, element.value.value))
  }
})
</script>
