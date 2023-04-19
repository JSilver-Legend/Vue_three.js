<template>
    <qrcode-vue
        v-if="value"
        :value="value"
        :size="element.size ? parseInt(element.size) : 100"
        level="H"
        :class="computedClass"
    />
</template>

<script setup>
import _ from "lodash"
import { inject, toRefs, computed } from "vue"
import QrcodeVue from 'qrcode.vue'
import { useHelperFunctions } from '@/composables/useHelperFunctions'

const { resolveExpression, getExpressionByID } = useHelperFunctions()

const props = defineProps(["element", "entityData"])
const { element, entityData } = toRefs(props)

const expressions = inject('expressions', null)

const isBuilder = inject('isBuilder', false)
const hoverId = inject('hoverId', null)
const selectedId = inject('selectedId', null)

/* eslint-disable no-useless-escape */
const resolvePath = (object, path, defaultValue) => {
    return path.split(/[\.\[\]\'\"]/).filter(p => p).reduce((o, p) => o ? o[p] : defaultValue, object) || ''
}

const class2add = computed(() => {
    let class2add = ''
    if (element.value.class2add) {
        class2add = entityData.value.class2add && Array.isArray(entityData.value.class2add) && entityData.value.class2add.length
            ? entityData.value.class2add.filter(obj => obj.id == element.value.class2add) : ''
    }
    return class2add = class2add && Array.isArray(class2add) && class2add.length ? class2add[0].value : ''
})

const computedClass = computed(() => {
    return element.value.class + ' ' + class2add.value + ' ' +
        (element.value.tabGroupID && element.value.tabID && !element.value.tabContent && platformSysStore.activeTabs[element.value.tabGroupID] == element.value.tabID ? element.value.activeClass : '') + ' ' +
        (element.value.tabGroupID && element.value.tabID && element.value.tabContent && platformSysStore.activeTabs[element.value.tabGroupID] !== element.value.tabID ? 'hidden' : '') + ' ' +
        (isBuilder ? ' dropzone' : '') +
        ((isBuilder && element.value.id !== hoverId.value && element.value.id !== selectedId.value) ? ' border border-dotted border-gray-300' : '') +
        ((isBuilder && (element.value.id == hoverId.value || element.value.id == selectedId.value)) ? ' border border-solid border-red-500' : '');
})

const value = computed(() => {
    let computedText = ''
    if (element.value.link) {
        if (_.startsWith(element.value.link, 'expression:')) {
            computedText = resolveExpression(getExpressionByID(expressions, _.split(element.value.link, ":")[1]))
        } else {
            computedText = element.value.link
        }
    } else if (element.value.assignedKey && entityData.value) {
        computedText = resolvePath(entityData.value, element.value.assignedKey, '')
    }

    return computedText
})
</script>