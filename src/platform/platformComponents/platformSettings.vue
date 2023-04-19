<template>
    <!-- contend head -->
    <div class="flex items-center justify-between px-9 bg-contentHead">
        <div class>
            <h4 class="mt-2 text-lg font-bold">
                <span class="text-3xl text-primary">PL</span>PLATFORM SETTINGS
            </h4>
            <h6 class="mb-2 text-md text-gray-500">SETTINGS</h6>
        </div>
    </div>

    <div class="border-0 shadow-lg relative flex flex-col w-full h-full bg-white outline-none focus:outline-none">
        <div class="space-y-6 pb-6 sm:px-6 lg:px-0 md:col-span-12 lg:col-span-6">
            <section>
                <form>
                    <div class="sm:overflow-hidden">
                        <div class="bg-white py-6 px-4 sm:p-6">
                            <div class="mt-6 grid grid-cols-12 gap-6">
                                <div class="col-span-12 md:col-span-6">
                                    <label for="c" class="block text-sm font-bold text-gray-700">Platform ID</label>
                                    <label for="c" class="block text-sm">{{ entityData.platformId }}</label>
                                </div>
                                <div class="col-span-12 md:col-span-6">
                                    <label for="c" class="block text-sm font-bold text-gray-700">Platform Userpool ID</label>
                                    <label for="c" class="block text-sm">{{ entityData.userPoolId }}</label>
                                </div>
                                <div class="col-span-12 md:col-span-6">
                                    <label for="c" class="block text-sm font-bold text-gray-700">additional Userpool IDs</label>
                                    <label for="c" class="block text-sm"></label>
                                </div>
                                <div class="col-span-12 md:col-span-6">
                                    <label for="c" class="block text-sm font-bold text-gray-700">Realm application ID</label>
                                    <label for="c" class="block text-sm">{{ entityData.realmClientAppId }}</label>
                                </div>
                                <div class="col-span-12 md:col-span-6">
                                    <label for="c" class="block text-sm font-bold text-gray-700">Realm service ID</label>
                                    <label for="c" class="block text-sm">{{ entityData.realmServiceId }}</label>
                                </div>
                                <div class="col-span-12 md:col-span-6">
                                    <label for="c" class="block text-sm font-bold text-gray-700" >subdomain</label>
                                    <label for="c" class="block text-sm">{{ host }}</label>
                                </div>
                                <div class="col-span-6 md:col-span-6">
                                    <label for="c" class="block text-sm text-gray-700 font-bold">Apps installed</label>
                                    <template v-if="entityData && entityData.apps && entityData.apps.length > 0">
                                        <label
                                            v-for="element in entityData.apps"
                                            :key="element.appId"
                                            for="c"
                                            class="block text-sm"
                                        >{{ element.appId }}</label>
                                    </template>
                                </div>
                                <div class="col-span-12">
                                    <label for="c" class="block text-11 font-normal text-gray-700 pl-0">colorScheme</label>
                                    <input
                                        type="text"
                                        placeholder="colorScheme"
                                        v-model="entityData.colorScheme"
                                        autocomplete="cc-given-name"
                                        class="mt-0 block w-2/12 border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-13"
                                    />
                                </div>
                                <div class="col-span-12">
                                    <label for="c" class="block text-11 font-normal text-gray-700 pl-0">config 2</label>
                                    <input
                                        type="text"
                                        placeholder="config2"
                                        v-model="entityData.config2"
                                        autocomplete="cc-given-name"
                                        class="mt-0 block w-2/12 border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-13"
                                    />
                                </div>
                                <div class="col-span-12 sm:col-span-12">
                                    <a @click="onDocumentUpdate" class="cursor-pointer bg-gray-400 hover:bg-gray-500 font-semibold rounded-lg py-3 px-3 mt-6 text-white inline-block">Update</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, computed, onBeforeMount } from "vue"

import { usePlatformSysStore } from "@/store/platformSys"

const platformSysStore = usePlatformSysStore()

const entityData = ref({})

const platformConfig = computed(() => platformSysStore.platformConfig)
entityData.value = { ...platformConfig.value }

watch(platformConfig, (value) => {
    entityData.value = { ...value }
})
//
onBeforeMount(async () => {
    // Retrieve documents of app
    if (!platformSysStore.platformConfig) {
        platformConfig.value = await platformSysStore.platformConfigGet({})
    }
})

const onDocumentUpdate = () => {
    console.log('onDocumentUpdate')
    platformSysStore.platformConfigUpdate({ ...entityData.value })
}
</script>
