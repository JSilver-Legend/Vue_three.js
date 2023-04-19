<template>
    <span v-if="element.tag == 'svg'" v-html="computedText" />

    <svg v-else-if="element.tag == 'rectColor'" :width="element.width" :height="element.height">
        <rect :width="element.width" :height="element.height" style="stroke-width:0;stroke:rgb(0,0,0)"
            v-bind:style="{ fill: computedText ? computedText : 'transparent' }" />
    </svg>

    <img ref="image" @load="onImageLoad" v-else-if="element.tag == 'img'" :class="computedClass" :src="computedText" />

    <a v-else-if="element.tag == 'a'" :class="computedClass" href="javascript:void(0)" @click.stop="redirectToUrl()"
        v-html="computedText" />

    <component v-else v-bind:is="`${$props.element.tag}`" :style="`${computedStyle}`" :class="computedClass"
        v-html="computedText" @mouseover.stop="onMouseover(element.id)" @mouseleave.stop="onMouseleave(element.id)"
        @click.self="onClick" />
</template>

<script setup>
import _ from "lodash"
import { useRouter } from "vue-router";
import { inject, toRefs, computed, onBeforeMount, ref } from "vue"

import { usePlatformSysStore } from '@/store/platformSys'
import { useHelperFunctions } from '@/composables/useHelperFunctions'

const platformSysStore = usePlatformSysStore()
const { resolveExpression, resolveStaticValueExpression, isDragSectionDialog, getComputedKey, countNoOfItem, getExpressionByID } = useHelperFunctions()

const props = defineProps(["element", "entityData", "annotatorMeasurements", "loopIndex"])

const { element, entityData, annotatorMeasurements, loopIndex: loopIndexProp } = toRefs(props)
const router = useRouter()

const expressions = inject('expressions', [])

const onUpdate = inject('onUpdate', () => { })
const isBuilder = inject('isBuilder', false)
const hoverId = inject('hoverId', null)
const selectedId = inject('selectedId', null)
const selected = inject('selected', false)
const buttonGroupchecked = inject('buttonGroupchecked', null)

const onMouseover = inject('onMouseover', () => null)
const onMouseleave = inject('onMouseleave', () => null)
const onMouseclick = inject('onMouseclick', () => null)
const loopIndex = inject('loopIndex')
const dragSectionDetail = inject('dragSectionDetail', null)

onBeforeMount(() => {
    if (element.value.tabGroupID && element.value.tabID && !platformSysStore.activeTabs[element.value.tabGroupID]) {
        platformSysStore.selectTab(element.value.tabGroupID, element.value.tabID)
    }
})

const image = ref(null)
const onImageLoad = () => {
    if (image.value && element.value.volatileObject && element.value.key) {
        const width = image.value.clientWidth
        const height = image.value.clientHeight
        onUpdate({ key: element.value.key, value: { w: image.value.clientWidth, h: image.value.clientHeight }, volatileObject: element.value.volatileObject, autoSave: element.value.autoSave })
        console.log(`Image dimensions: ${width}x${height}`)
    }
}

const onClick = () => {
    //console.log('onClick | staticHtmlTag', JSON.parse(JSON.stringify(element.value)))
    if (isBuilder) {
        onMouseclick(element.value.id)
    }
    if (element.value.tabGroupID && element.value.tabID) {
        platformSysStore.selectTab(element.value.tabGroupID, element.value.tabID)
    }
    if (element.value.toggleDialog) {
        let dialogKey = element.value.dialogKey

        if (dragSectionDetail?.key && isDragSectionDialog(dragSectionDetail, element.value.dialogKey)) {
            dialogKey = `${dragSectionDetail.pageBuilderID}-${dragSectionDetail.sectionId}-${element.value.dialogKey}-${loopIndex}`
        }

        platformSysStore.toggleDialog(
            dialogKey,
            element.value.dialogOptions
        )
    }
}

const class2add = computed(() => {
    let class2add = ''
    if (element.value.class2add) {
        class2add = entityData.value.class2add && Array.isArray(entityData.value.class2add) && entityData.value.class2add.length
            ? entityData.value.class2add.filter(obj => obj.id == element.value.class2add) : ''
    }
    return class2add = class2add && Array.isArray(class2add) && class2add.length ? class2add[0].value : ''
})

const computedStyle = computed(() => resolveStaticValueExpression(element.value.style))

const computedClass = computed(() => {
    return (selected.value ? element.value.selectedClass || element.value.class : element.value.class) +
        ' ' +
        class2add.value + ' ' +
        (buttonGroupchecked ? element.value.checkedClass || '' : '') + ' ' +
        (element.value.tabGroupID && element.value.tabID && !element.value.tabContent && platformSysStore.activeTabs[element.value.tabGroupID] == element.value.tabID ? element.value.activeClass : '') + ' ' +
        (element.value.tabGroupID && element.value.tabID && element.value.tabContent && platformSysStore.activeTabs[element.value.tabGroupID] !== element.value.tabID ? 'hidden' : '') + ' ' +
        (isBuilder ? ' dropzone' : '') +
        ((isBuilder && element.value.id !== hoverId.value && element.value.id !== selectedId.value) ? ' border border-dotted border-gray-300' : '') +
        ((isBuilder && (element.value.id == hoverId.value || element.value.id == selectedId.value)) ? ' border border-solid border-red-500' : '');
})

const computedUrl = computed(() => {
    let computedUrl = '';
    if (element.value.url) {
        if (_.startsWith(element.value.url, 'expression:')) {
            computedUrl = resolveExpression(getExpressionByID(expressions, _.split(element.value.url, ":")[1]), entityData.value)
        } else {
            computedUrl = resolveStaticValueExpression(element.value.url, entityData.value)
        }
    }
    return computedUrl
})

const computedText = computed(() => {
    let computedText = '';

    let elementText = element.value.text
    if (element.value.tag == 'img') {
        elementText = element.value.src
    }

    if (elementText) {
        if (_.startsWith(elementText, 'action:')) {
            // console.log(elementText, element.value)
            if (_.split(elementText, ":")[1] == 'count') {
                computedText = countNoOfItem(
                    _.get(entityData.value, getComputedKey(element.value?.parameters?.location)), // value
                    element.value.parameters?.key,
                    element.value.parameters?.value,
                    element.value.parameters?.calc
                )
            }

        } else if (_.startsWith(elementText, 'expression:')) {
            computedText = resolveExpression(getExpressionByID(expressions, _.split(elementText, ":")[1]), entityData.value)
        } else {
            computedText = resolveStaticValueExpression(elementText, /* getComputedKey(elementText, annotatorMeasurements.value, loopIndexProp.value) */ entityData.value)
        }
    } else if (element.value.assignedKey && entityData.value) {
        computedText = _.get(entityData.value, getComputedKey(element.value.assignedKey, annotatorMeasurements.value), '')
    }

    return computedText
})

const redirectToUrl = () => {
    console.log('redirectToUrl');
    console.log('parameters', element.value.parameters);
    if (element.value.parameters && element.value.parameters.target == "_blank") {
        window.open(computedUrl.value, '_blank')
    } else {
        router.push(computedUrl.value)
    }
}
</script>
