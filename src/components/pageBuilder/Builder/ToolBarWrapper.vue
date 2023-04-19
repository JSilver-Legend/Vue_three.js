<template>
    <div class="absolute top-auto w-10/12 min-h-screen px-2 py-2 bg-light-gray right-20">
        <div class="flex justify-end">
            <!-- <div class="close" @click="$emit('close-right-bar')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="37"
          height="37"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
            </div>-->
        </div>

        <div class="content">
            <ToolBarContent v-if="active === 'Content'" />
            <ToolBarBlock v-if="active === 'Blocks'" />
            <ToolBarBody v-if="active === 'Body'" />
            <ToolBarImages v-if="active === 'Image'" />
            <ToolBarUploads v-if="active === 'Uploads'" />
        </div>
    </div>
</template>

<script setup>
import ToolBarContent from "./ToolBarContent.vue";
import ToolBarBlock from "./ToolBarBlock.vue";
import ToolBarBody from "./ToolBarBody.vue";
import ToolBarImages from "./ToolBarImages.vue";
import ToolBarUploads from "./ToolBarUploads.vue";

const { active } = defineProps({
    active: {
        type: String,
        default: "Content"
    }
})
</script>

<style></style>
