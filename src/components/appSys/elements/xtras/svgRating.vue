<template>
    <div :class=element.parentClass>
        <button type="button" v-for="i in element.amount" :key="i"
            :class="[computedValue >= i ? element.activeClass : element.class]" @click="$emit('return', computedValue == i ? 0 : i)">
            <staticHtmlTag :element="{ tag: 'svg', text: element.text }"></staticHtmlTag>
        </button>
    </div>
</template>

<script setup>
import _ from "lodash"
import { toRefs } from "vue"

const props = defineProps(["element", "entityData", "computedValue"])
const { element, entityData, computedValue } = toRefs(props)
</script>
