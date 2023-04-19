<template>
    <input :class="element.class" :style="element.style" type="file" @change="onChange" />
</template>

<script setup>
import { ref, toRefs } from "vue"

const emit = defineEmits(["return"])

const props = defineProps(["element"])
const { element } = toRefs(props);

const file = ref(null)
const onChange = (event) => {
    file.value = event.target.files ? event.target.files[0] : null
    if (file.value) {
        emit("return", file.value)
    }
}
</script>
