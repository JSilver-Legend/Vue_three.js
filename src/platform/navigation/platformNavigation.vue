<template>
    <folderNavigation v-if="!currentNavigation"></folderNavigation>
    <appNavigation v-else-if="currentNavigation.type == 'appNavigation'"></appNavigation>
</template>

<script setup>
import { computed, provide } from "vue"

// store used to manage platform localJson
import { usePlatformNavigationStore } from "@/store/platformNavigation"

import folderNavigation from "@/platform/navigation/folderNavigation.vue";
import appNavigation from "@/platform/navigation/appNavigation.vue";

const platformNavigationStore = usePlatformNavigationStore()

// platform localJson is deivided into two parts:
// a) folderNavigation
// b) appNavigation

// localJson will switch from one type to another type
// it's managed through navigationStack state variable
// navigationStack -> stack array type variable

// initially navigationStack array will be empty
// currentNavigation computed value will pull the top stack object
// each stack object will hold the localJson information
// if the currentNavigation value is empty it will be considered as folderNavigation
const currentNavigation = computed(() => platformNavigationStore.navigationStack.length ? platformNavigationStore.navigationStack[platformNavigationStore.navigationStack.length - 1] : null)

const expressions = computed(() => platformNavigationStore.platformNavigation?.expressions ? platformNavigationStore.platformNavigation.expressions : [])
provide('expressions', expressions)
</script>
