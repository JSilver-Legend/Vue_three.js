<template>
    <select
        :style="element.style"
        :name="elementKey"
        :class="element.class"
        @change="onChange($event)"
        :focus="element.focus ? element.focus:'off'"

    >
        <option
            :style="element.optionStyle"
            :class="element.optionClass"
            value
        >{{ element.title ? element.title : '-- Select an item --' }}</option>
        <option
            :style="element.optionStyle"
            :class="element.optionClass"
            v-for="item in element.items"
            :key="item.id"
            :value="item.id"
            :selected="entityData[elementKey] == item.id ? true : false"
        >{{ item.name }}</option>
    </select>
</template>

<script setup>
import { toRefs } from 'vue'

const emit = defineEmits(['return'])
const props = defineProps(["element", "computedValue"])

const { element } = toRefs(props)

const onChange = (event) => {
    emit('return', event.target.value)
}
</script>

<style>
select {
    all: unset;
    padding-right: 15px;
    border-bottom: 1px solid;
    background: url("https://www.charbase.com/images/glyph/9662") no-repeat
        right;
    background-size: 16px;
}
</style>
