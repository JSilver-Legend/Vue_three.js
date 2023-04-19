<template>
    <div class="h-screen" style="margin-right: 64px;">
        <div class="content">
            <ToolAreaContent
                v-if="active === 'Content'"
                @show-text-menu="$emit('showEditTextMenu')"
            />
            <ToolAreaBlock v-if="active === 'Blocks'" />
            <ToolAreaBody v-if="active === 'Body'" />
            <ToolAreaImages v-if="active === 'Image'" />
            <ToolAreaUploads v-if="active === 'Uploads'" />
        </div>
    </div>
</template>

<script setup>
import { toRefs } from "vue"
import ToolAreaContent from "./ToolAreaElements/ToolAreaContent.vue";
import ToolAreaBlock from "./ToolAreaElements/ToolAreaBlock.vue";
import ToolAreaBody from "./ToolAreaElements/ToolAreaBody.vue";
import ToolAreaImages from "./ToolAreaElements/ToolAreaImages.vue";
import ToolAreaUploads from "./ToolAreaElements/ToolAreaUploads.vue";

const props = defineProps({
    active: {
        type: String,
        default: "Content"
    }
})
const { active } = toRefs(props)
</script>

<style></style>
