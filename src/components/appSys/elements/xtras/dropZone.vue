<template>
    <container
        @dragenter.prevent="toggle_active(true)"
        @dragleave.prevent="toggle_active(false)"
        @dragover.prevent
        @drop.prevent="drop"
        :element="getFilteredContainerObject()"
        :entityData="entityData"
    />
</template>

<script setup>
import _ from "lodash";
import { ref, toRefs } from "vue";

const emit = defineEmits(["return"]);
const props = defineProps(["element", "computedValue", "entityData"]);
const { element, computedValue, entityData } = toRefs(props);

const dragActive = ref(false);
const droppedFile = ref(null);

const toggle_active = (flag) => {
    dragActive.value = flag;
};

const drop = (event) => {
    droppedFile.value = event.dataTransfer.files[0];
    toggle_active(false)
    emit("return", droppedFile.value);
    // event will be called from here
};

const getFilteredContainerObject = () => {
    return {
        ..._.omit(element.value, ["elementType"]),
        type: "container",
        children: dragActive.value
            ? element.value.dropoverZone
            : element.value.children,
    };
};
</script>

<style scoped></style>
