<template>
    <div class="fullWrapper font-serif relative h-full flex flex-col md:flex-row">
        <!-- sidebar -->
        <div v-if="!appTemplateInitial && showSidebar" class="sidebar w-full md:w-56">
            <platformNavigation></platformNavigation>
        </div>
        <main class="mainWrapper bg-mainWrapper w-full h-screen">
            <router-view></router-view>
        </main>
    </div>
</template>

<script setup>
import platformNavigation from "@/platform/navigation/platformNavigation.vue";
import { useAuthStore } from "@/store/auth"
import { useRouter, useRoute } from "vue-router"
import { onMounted, computed } from "vue"

const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()

onMounted(() => {
    loadInitialAppTemplate()
})

const showSidebar = computed(() => platformSysStore.showSidebar)
const appTemplateInitial = computed(() => authStore.appTemplateInitial)
const routePath = computed(() => route.path)

const loadInitialAppTemplate = () => {
    if (appTemplateInitial.value && ("/" + appTemplateInitial.value !== routePath.value)) {
        router.push('/' + appTemplateInitial.value)
    }
}
</script>
