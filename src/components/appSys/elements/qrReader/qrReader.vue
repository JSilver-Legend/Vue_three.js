<template>
    <!--    Result is: {{ result }} <br />
    Error: {{ error }} -->
    <div :class="element.class">
        <!-- <container v-if="element?.children?.length" :element="getFilteredContainerObject(element)"
            :entityData="entityData" />
        <staticHtmlTag v-else :element="getFilteredObject(element)" :entityData="entityData" /> -->
        <qrcode-stream @decode="onDecode" @init="onInit"></qrcode-stream> 
        <!-- <qrcode-capture @decode="onDecode" @init="onInit"></qrcode-capture> -->
    </div>
</template>


<script setup>
import _ from "lodash"
import { ref, toRefs } from "vue"
import { QrcodeStream, QrcodeCapture } from 'qrcode-reader-vue3'

const emit = defineEmits(['return'])
const props = defineProps(["element", "entityData"])
const { element, entityData } = toRefs(props)

// const result = ref('')
// const error = ref('')

const onDecode = (res) => {
    // result.value = res
    emit('return', res)
}

const onInit = async (promise) => {
    try {
        await promise
    } catch (err) {
        if (err.name === 'NotAllowedError') {
            error.value = "ERROR: you need to grant camera access permission"
        } else if (err.name === 'NotFoundError') {
            error.value = "ERROR: no camera on this device"
        } else if (err.name === 'NotSupportedError') {
            error.value = "ERROR: secure context required (HTTPS, localhost)"
        } else if (err.name === 'NotReadableError') {
            error.value = "ERROR: is the camera already in use?"
        } else if (err.name === 'OverconstrainedError') {
            error.value = "ERROR: installed cameras are not suitable"
        } else if (err.name === 'StreamApiNotSupportedError') {
            error.value = "ERROR: Stream API is not supported in this browser"
        } else if (err.name === 'InsecureContextError') {
            error.value = 'ERROR: Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.';
        } else {
            error.value = `ERROR: Camera error (${err.name})`;
        }
        console.log('error: ', error.value)
        emit('return', error.value)
    }
}

const getFilteredContainerObject = (element) => {
    return {
        ..._.omit(element, ['elementType']), 'type': 'container'
    }
}

const getFilteredObject = (element) => {
    return {
        ...element, 'elementType': 'staticHtmlTag'
    }
}
</script>
