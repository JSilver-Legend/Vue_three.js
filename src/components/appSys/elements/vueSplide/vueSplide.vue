<template>
    <Splide :options="element.options">
        <template v-if="element.loop">
            <SplideSlide v-for="index in arrayLength">
                <template v-for="clildElement in element.children">
                    <component :is="clildElement.type" :element="clildElement" :entityData="entityData"
                        :loopIndex="index - 1" />
                </template>
            </SplideSlide>
        </template>
        <template v-else>
            <SplideSlide v-for="clildElement in element.children">
                <component :is="clildElement.type" :element="clildElement" :entityData="entityData" />
            </SplideSlide>
        </template>
    </Splide>
</template>

<script setup>
import { toRefs, computed } from 'vue'
import _ from "lodash"
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import { useHelperFunctions } from "@/composables/useHelperFunctions"

import '@splidejs/vue-splide/css'

const props = defineProps(['element', 'entityData'])
const { element, entityData } = toRefs(props)

const { getComputedKey } = useHelperFunctions()
const arrayLength = computed(() => _.get(entityData.value, getComputedKey(element.value.subDocument), []).length)
</script>