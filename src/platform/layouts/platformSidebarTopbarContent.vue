<template>
    <div class="font-serif h-screen flex">
        <!-- sidebar -->
        <div v-show="!appTemplateInitial && showSidebar"
            class="min-w-full md:min-w-[225px] h-full max-h-screen overflow-y-auto flex flex-col flex-grow" v-motion
            :initial="{ opacity: 0, x: -20 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: 0, duration: 500, type: 'keyframes', ease: 'easeIn', }, }">
            <platformNavigation></platformNavigation>
        </div>
        <main class="relative bg-mainWrapper w-full max-h-screen overflow-y-auto" v-motion :initial="{ opacity: 0, x: 30 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: 0, duration: 500, type: 'keyframes', ease: 'easeIn', }, }">
            <platformTopbar v-if="!appTemplateInitial && showTopBar"></platformTopbar>
            <div class="dark:bg-gray-800">
                <router-view></router-view>
            </div>
        </main>
    </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router"

import { useAuthStore } from "@/store/auth"
import { usePlatformSysStore } from "@/store/platformSys"

import platformNavigation from "@/platform/navigation/platformNavigation.vue";
import platformTopbar from "../platformComponents/platformTopbar.vue";

const platformSysStore = usePlatformSysStore()
const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()

onMounted(() => { loadInitialAppTemplate() })

const appTemplateInitial = computed(() => authStore.appTemplateInitial)
const routePath = computed(() => route.path)

const loadInitialAppTemplate = () => {
    if (appTemplateInitial.value && ("/" + appTemplateInitial.value !== routePath.value)) {
        router.push('/' + appTemplateInitial.value)
    }
}

const showSidebar = computed(() => platformSysStore.showSidebar)
const showTopBar = computed(() => platformSysStore.showTopBar)
</script>
