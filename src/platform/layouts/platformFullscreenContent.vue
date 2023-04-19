<template>
    <div class="font-serif h-screen flex">
        <!-- sidebar -->
        <!--        <div v-if="!appTemplateInitial" class="min-w-full md:min-w-[225px] h-full max-h-screen overflow-y-auto flex flex-col flex-grow" v-motion :initial="{ opacity: 0, x: -20 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: 0, duration: 500, type: 'keyframes', ease: 'easeIn', }, }">
            <platformNavigation  ></platformNavigation>
        </div>-->
        <main class="relative bg-mainWrapper w-full max-h-screen overflow-y-auto">

            <!--            <platformTopbar v-if="!appTemplateInitial"></platformTopbar>-->
            <div class="dark:bg-gray-800">
                <router-view></router-view>
            </div>
        </main>
    </div>
</template>

<script setup>
import { onMounted, computed, watch } from "vue";
import { usePlatformSysStore } from "@/store/platformSys"
import { useAuthStore } from "@/store/auth"
import { useRouter, useRoute } from "vue-router"

import platformNavigation from "@/platform/navigation/platformNavigation.vue";
import platformTopbar from "../platformComponents/platformTopbar.vue";

const platformSysStore = usePlatformSysStore()
const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()

onMounted(() => { loadInitialAppTemplate() })

// const authUser = computed(() => authStore.user)
const appTemplateInitial = computed(() => authStore.appTemplateInitial)
const routePath = computed(() => route.path)

/* watch(authUser, () => {
    loadInitialAppTemplate()
}) */

const loadInitialAppTemplate = () => {
    if (appTemplateInitial.value && ("/" + appTemplateInitial.value !== routePath.value)) {
        router.push('/' + appTemplateInitial.value)
    }
}

/* const loadInitialAppTemplate = () => {
    if (authUser.value
        && authUser.value.config
        && authUser.value.config.appTemplateInitial
        && ("/" + authUser.value.config.appTemplateInitial !== routePath.value)
    ) {
        router.push('/' + authUser.value.config.appTemplateInitial);
    }
} */
</script>
