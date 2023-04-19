<template>
    <container v-if="element?.children?.length" :element="getFilteredContainerObject(element)" :entityData="entityData"
        @click.stop="onClick" />
    <staticHtmlTag
        v-else
        @click.stop="onClick(element.eventType)"
        :element="{ ...element }"
        :entityData="entityData"
    />
</template>

<script setup>
import _ from "lodash"
import { toRefs } from "vue"

import emitter from "@/services/emitter"

const props = defineProps(["element", "entityData"])
const { element, entityData } = toRefs(props)

const onClick = (eventType) => {
    emitter.emit(eventType);
}

const getFilteredContainerObject = (element) => {
    return {
        ..._.omit(element, ['elementType', 'eventType']), 'type': 'container'
    }
}
</script>
