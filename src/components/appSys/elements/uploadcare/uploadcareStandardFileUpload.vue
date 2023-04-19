<template>
    <lr-file-uploader-minimal ref="uploadcareStandardFileUploader" :ctx-name="ctxName" use-event use-console
        class="uploader-cfg  lr-wgt-common w-1/4">
    </lr-file-uploader-minimal>
    <lr-data-output :ctx-name="ctxName" @lr-data-output="handleUploaderEvent" use-event use-console
        class="uploader-cfg lr-wgt-common"></lr-data-output>
</template>

<script setup>
import '@/assets/css/file-uploader-minimal1.css'
import * as LR from "@uploadcare/blocks";
import { toRefs, computed, watch, ref } from "vue";

const emit = defineEmits(['return'])
const props = defineProps(["element", "computedValue", "entityData"])
const { element, computedValue, entityData } = toRefs(props)

LR.registerBlocks(LR);

const uploadcareStandardFileUploader = ref("")

// let files = ref([])
const handleUploaderEvent = (e) => {
    const { data } = e.detail;
    emit('return', data[0])
}

const ctxName = computed(() => 'ctx-' + element.value.key /* + "-" + entityData.value._id */);

watch(ctxName, () => {
    console.log('uploadcareStandardFileUpload | reset')
    // ADD CODE TO RESET UPLOADER
})

</script>

<style scoped>
lr-file-uploader-minimal {
    --cfg-pubkey: 'c304577ae1bc1f2a79d7';
    /* --ctx-name: 'uploader-ctx'; */
    --h-accent: 231;
    --s-accent: 100%;
    --l-accent: calc(50% - 5% * var(--darkmode));
    --border-radius-frame: 0px;
    /* other Setting */
    /* --cfg-multiple: 1;
    --cfg-confirm-upload: 1;
    --cfg-img-only: 0;
    --cfg-accept: "";
    --cfg-store: 1;
    --cfg-camera-mirror: 0;
    --cfg-source-list: "local, url, camera, dropbox, gdrive";
    --cfg-max-files: 10; */
}

.lr-drop-area {
    background-color: #eaeeee !important;
    padding: 0;
    color: #fff !important;
    line-height: 140%;
    text-align: center;
    border: 2px dashed #aaaaaa;
    border-radius: 4px;
    cursor: pointer;
}
</style>
