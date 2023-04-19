<template>
    <div class="w-full flex flex-wrap">
        <div class="w-full flex justify-between p-2">
            <p class="text-gray-600">Content</p>
            <div>
                <span @click="$emit('close')" class="cursor-pointer float-right font-bold mr-2">X</span>
            </div>
        </div>
        <div class="w-full">
            <ul class="flex mb-0 list-none flex-wrap pt-1 pb-4 flex-row">
                <li class="-mb-px ml-2 col-start-1 last:mr-0 flex-auto text-center cursor-pointer">
                    <a
                        class="flex flex-center items-center text-xs font-bold uppercase px-1 py-3 rounded-t leading-normal"
                        @click="toggleTabs(1)"
                        :class="{ 'text-gray-600 border-b-2': openTab !== 1, 'text-gray-600 border-l-2 border-t-2 border-r-2': openTab === 1 }"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-activity mr-2"
                        >
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                            <line x1="8" y1="21" x2="16" y2="21" />
                            <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                        Desktop
                    </a>
                </li>
                <li
                    class="-mb-px col-start-2 col-end-3 last:mr-0 flex-auto text-center cursor-pointer"
                >
                    <a
                        class="flex flex-center items-center text-xs font-bold uppercase px-1 py-3 rounded-t leading-normal"
                        @click="toggleTabs(2)"
                        :class="{ 'text-gray-600 border-b-2': openTab !== 2, 'text-gray-600 border-l-2 border-t-2 border-r-2': openTab === 2 }"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-activity"
                        >
                            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                            <line x1="12" y1="18" x2="12" y2="18" />
                        </svg>
                        Mobile
                    </a>
                </li>
                <li>
                    <a class="m-0 px-10 py-6 block leading-normal border-b-2"></a>
                </li>
            </ul>
            <div class="relative flex flex-col min-w-0 px-2 break-words w-full mb-6">
                <div class="flex-auto">
                    <div class="tab-content tab-space">
                        <div v-bind:class="{ 'hidden': openTab !== 1, 'block': openTab === 1 }">
                            <div v-for="(item, index) in items " :key="index">
                                <DesktopIcon :elements="item" />
                            </div>
                        </div>
                        <div v-bind:class="{ 'hidden': openTab !== 2, 'block': openTab === 2 }">
                            <p>Mobile Icons</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"
import DesktopIcon from "./DesktopIcon.vue";

const openTab = ref(1)
const items = [
    {
        toggleTitle: "TEXT",
        elements: [
            {
                title: "Heading Type",
                heading: true,
                border: true
            },
            {
                title: "Font Family",
                font: true,
                border: true
            },
            {
                title: "Font Size",
                incrementDecrementIcon: true,
                vertical: false,
                border: true
            },
            {
                title: "Color",
                color: true,
                border: true
            },
            {
                title: "Align",
                align: true,
                border: true
            },
            {
                title: "Line Height",
                incrementDecrementIcon: true,
                vertical: false
            }
        ]
    },
    {
        toggleTitle: "LINKS",
        elements: [
            {
                title: "Inherit Body Styles",
                toggleBtn: true
            }
        ]
    },
    {
        toggleTitle: "GENERAL",
        elements: [
            {
                title: "Inherit Body Styles",
                toggleBtn: true
            },
            {
                title: "Line Height",
                incrementDecrementIcon: true,
                vertical: true
            },
            {
                title: "Line Height",
                incrementDecrementIcon: true,
                vertical: true
            },
            {
                title: "Line Height",
                incrementDecrementIcon: true,
                vertical: true
            },
            {
                title: "Line Height",
                incrementDecrementIcon: true,
                vertical: true
            }
        ]
    },
    {
        toggleTitle: "RESPOSIVE DESIGN",
        elements: [
            {
                title: "Inherit Body Styles",
                toggleBtn: true
            }
        ]
    },
    {
        toggleTitle: "CONTENT ADMIN",
        elements: [
            {
                title: "Container Padding",
                input: true,
                vertical: true
            }
        ]
    }
]

const toggleTabs = (tabNumber) => {
    openTab.value = tabNumber;
}

</script>

<style>
</style>
