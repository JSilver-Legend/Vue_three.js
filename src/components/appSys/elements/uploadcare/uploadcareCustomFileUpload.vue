<template>
    <div class="pl-3 pt-3" @dragover.prevent @drop="onDrop">
        <label class="flex justify-center w-32 h-32 transition bg-gray-100 border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">

            <!-- progressbar -->
            <span v-if="progress > 0 && progress < 100" class="flex items-center w-full">
                <div class="w-full bg-gray-200">
                    <div class="flex justify-center items-center bg-amber-400 bg-opacity-75 text-center leading-none h-24 rounded-md"
                        :style="{ width: progress + '%' }"
                    >
                        <div class="z-10 text font-bold text-white">{{ progress }}%</div>
                    </div>
                </div>
            </span>

            <!-- dropzone -->
            <span v-if="progress == 0" class="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <span class="font-medium text-gray-400">{{ element.dropZoneText }} </span>
            </span>

            <!-- uploaded success -->
            <!-- <span v-if="progress == 100" class="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <span class="font-medium text-gray-400">top view</span>
            </span> -->
<!--            <span v-if="progress == 100" class="flex items-center">
                <div style="width:50px; height: 50px;" class="relative">
                    <img class="border-1" :src="fileData.cdnUrl + '-/resize/50x50/'" />
                    <div @click.stop="reset"
                        class="absolute z-50 bg-gray-400 hover:bg-gray-200 -left-4 -top-4 material-symbols-outlined text-right h-7 w-7 rounded-full text-cardHeaderTitle border-2 hover:border-white cursor-pointer">
                        close</div>
                </div>
            </span>-->

            <input v-if="enableUploader" type="file" name="file_upload" @change="onChange" class="hidden">
        </label>
    </div>
</template>

<script setup>
import uploadcare from 'uploadcare-widget/uploadcare.lang.en.min.js'
import { ref, toRefs } from "vue"

const emit = defineEmits(['return'])
const props = defineProps(["element", "computedValue", "entityData"])
const { element, computedValue, entityData } = toRefs(props)

const fileData = ref({})
const progress = ref(0)
const enableUploader = ref(true)

const reset = () => {
    fileData.value = {}
    progress.value = 0
    setTimeout(() => {
        enableUploader.value = true
    }, 1000);
}

const onDrop = (e) => {
    e.stopPropagation()
    e.preventDefault()

    var files = e.dataTransfer.files
    uploadcareStandardFileUpload(files[0])
}

const onChange = (e) => {
    let files = e.target.files || e.dataTransfer.files
    if (!files.length) {
        return
    }
    uploadcareStandardFileUpload(files[0])
}

const uploadcareStandardFileUpload = async (file) => {

    // reset progress
    enableUploader.value = false

    await uploadcare.fileFrom('object', file, {
        // publicKey: "c304577ae1bc1f2a79d7", // testaccount
        // publicKey: "e89bdc3fe12505a88878", // HEO COATING
        publicKey: "b4ccf4929cab310dd354", // HEO COATING DWP
        fileName: Date.now() + "-" + file.name,
    }).progress(function (uploadInfo) {
        console.log('file.progress', uploadInfo)
        progress.value = Math.round(uploadInfo.progress * 100)
    }).done(function (fileInfo) {
        console.log('file.done', fileInfo)
        fileData.value = fileInfo
        emit('return', fileInfo)
        reset()
        // Upload has successfully completed and a file is ready.
    }).fail(function (errorType, fileInfo, error) {
        console.log('file upload failed...', errorType, fileInfo, error)
        reset()
    });
}

</script>

<style scoped>

</style>
