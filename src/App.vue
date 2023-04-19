<template>
    <spinner v-if="pageLoading"></spinner>
    <router-view v-else></router-view>
    <!-- HUD window -->
    <div class="absolute bottom-0 text-[11px] min-w-full md:min-w-[225px] bg-green-500 px-2 flex">
        <div class="min-w-[75px]">
            x:{{ x }} y:{{ y }}
        </div>
        <div class="min-w-[88px]">
            w:{{ width }} h:{{ height }}
        </div>
        <div>
            <span class="font-bold">{{ $mq.current }}</span>
        </div>
    </div>
</template>

<script setup>
import spinner from "@/platform/platformComponents/spinner.vue"
import { useMq } from "vue3-mq"
import { useMouse, useWindowSize } from "@vueuse/core"
import { usePlatformSysStore } from "@/store/platformSys"
import { watch, computed } from "vue";

const platformSysStore = usePlatformSysStore()
const pageLoading = computed(() => platformSysStore.pageLoading)

const $mq = useMq();

document.body.classList.add(`colorTheme-${platformSysStore.theme.colorTheme}`, `formTheme-${platformSysStore.theme.formTheme}`)
watch(platformSysStore.theme, () => {
    // console.log('platformSysStore.theme', platformSysStore.theme)

    // remove existing theme
    document.body.classList.remove(`dark`)
    document.body.classList.remove(`colorTheme-default`, `colorTheme-yellow`)
    document.body.classList.remove(`formTheme-default`, `formTheme-yellow`)

    // add new themes
    if (platformSysStore.theme.themeClassExchange == 'dark') {
        document.body.classList.add('dark')
    }
    document.body.classList.add(`colorTheme-${platformSysStore.theme.colorTheme}`, `formTheme-${platformSysStore.theme.formTheme}`)



})

const { x, y } = useMouse()
const { width, height } = useWindowSize()
</script>



<style>
html,
body {
    background-color: #151620;
}
</style>

