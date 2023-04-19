<template>
    <div>
        <div
            class="relative flex flex-col bg-gray-50 h-screen"
            :class="selectedId ? 'hidden' : 'flex'"
        >
            <ToolAreaWrapper
                @showEditTextMenu="showEditTextMenuA"
                @close-right-bar="closeRightBar()"
                :active="active"
                v-show="active !== ''"
            />
            <ul class="absolute w-16 right-0 top-auto bg-gray-200 h-screen">
                <li
                    :class="[
                        active === 'Content' ? 'bg-gray-50' : 'bg-gray-200',
                        'p-3 pt-5 cursor-pointer text-12 flex flex-col items-center justify-center text-gray-500'
                    ]"
                    @click="setActive('Content')"
                >
                    <img
                        src="@/assets/img/shape.svg"
                        alt="Shape"
                        class="w-5 h-5 mb-1 fill-current opacity-70"
                    />
                    Content
                </li>
                <li
                    :class="[
                        active === 'Blocks' ? 'bg-gray-50' : 'bg-gray-200',
                        'p-3 cursor-pointer text-12 flex flex-col items-center justify-center opacity-80 text-gray-500'
                    ]"
                    @click="setActive('Blocks')"
                >
                    <svg
                        class="object-contain w-6 h-6 fill-none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M21 12H3M12 3v18" />
                    </svg>
                    Blocks
                </li>

                <li
                    :class="[
                        active === 'Body' ? 'bg-gray-50' : 'bg-gray-200',
                        'p-3 cursor-pointer text-12 flex flex-col items-center justify-center opacity-80 text-gray-500'
                    ]"
                    @click="setActive('Body')"
                >
                    <img
                        src="@/assets/img/body.svg"
                        alt="Shape"
                        class="object-contain w-6 h-6 mb-1 fill-current"
                    />
                    Body
                </li>

                <li
                    :class="[
                        active === 'Image' ? 'bg-gray-50' : 'bg-gray-200',
                        'p-3 cursor-pointer text-12 flex flex-col items-center justify-center opacity-80 text-gray-500'
                    ]"
                    @click="setActive('Image')"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="w-6 h-6 object-fit"
                    >
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="M20.4 14.5L16 10 4 20" />
                    </svg>
                    Image
                </li>
                <li
                    :class="[
                        active === 'Uploads' ? 'bg-gray-50' : 'bg-gray-200',
                        'p-3 cursor-pointer text-12 flex flex-col items-center justify-center opacity-80 text-gray-500'
                    ]"
                    @click="setActive('Uploads')"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="object-contain w-6 h-6"
                    >
                        <path
                            d="M21.2 15c.7-1.2 1-2.5.7-3.9-.6-2-2.4-3.5-4.4-3.5h-1.2c-.7-3-3.2-5.2-6.2-5.6-3-.3-5.9 1.3-7.3 4-1.2 2.5-1 6.5.5 8.8m8.7-1.6V21"
                        />
                        <path d="M16 16l-4-4-4 4" />
                    </svg>
                    Uploads
                </li>
            </ul>
        </div>
        <div v-if="selectedId">
            <Tabs @close="close" />
        </div>
    </div>
</template>

<script setup>
import { ref, toRefs } from "vue"
import ToolAreaWrapper from "./ToolAreaWrapper.vue";
import Tabs from "./Tabs.vue";

const props = defineProps(["selectedId"])
const { selectedId } = toRefs(props)

const active = ref("")
const isEditTextMenuOpen = ref(false)

const setActive = (toolbar) => {
    active.value = toolbar;
}

const closeRightBar = () => {
    active.value = "";
}

const showEditTextMenuA = () => {
    if (isEditTextMenuOpen.value) {
        isEditTextMenuOpen.value = false;
    } else {
        isEditTextMenuOpen.value = true;
    }
}

const close = () => {
    console.log('close tab')
    this.$emit('onMouseclick', null);
}

</script>

<style></style>
