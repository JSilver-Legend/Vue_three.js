<template>
    <template v-if="formattedFolderNavigationTree">
        <component v-bind:is="formattedFolderNavigationTree.tag ? formattedFolderNavigationTree.tag : 'div'"
            :style="formattedFolderNavigationTree.style" :class="formattedFolderNavigationTree.class">

            <!-- FIXED TOP NAVIGATION -->
            <template v-for="(navigationView, index) in formattedFolderNavigationTree.view" :key="index">
                <template v-if="navigationView.behaviour == 'fixTop'">
                    <container v-for="(item, itemIndex) in navigationView.children" :key="itemIndex"
                        :element="item" :entityData="{}" />
                </template>
            </template>

            <!-- FOLDER NAVIGATION CELL BACK BUTTON -->
            <template v-if="currentFolderNavigationTreeNode">
                <component
                    v-bind:is="formattedFolderNavigationCells[currentFolderNavigationTreeNode.cellSetID.backButton]?.backButton?.tag ? formattedFolderNavigationCells[currentFolderNavigationTreeNode.cellSetID.backButton].backButton.tag : 'div'"
                    :style="formattedFolderNavigationCells[currentFolderNavigationTreeNode.cellSetID.backButton]?.backButton?.style"
                    :class="formattedFolderNavigationCells[currentFolderNavigationTreeNode.cellSetID.backButton]?.backButton?.class"
                    @click="backFolderNavigation(currentFolderNavigationTreeNode)">
                    <template
                        v-for="backLevelCell in formattedFolderNavigationCells[currentFolderNavigationTreeNode.cellSetID.backButton]?.backButton.cell">
                        <container :element="backLevelCell" :entityData="currentFolderNavigationTreeNode" />
                    </template>
                </component>
            </template>

            <!-- FOLDER NAVIGATION CELL -->
            <template v-for="(navigationCell, index) in currentFolderNavigationTreeChildren" :key="index">
                <template v-if="navigationCell.type == 'staticHtml'">
                    <container v-for="(item, itemIndex) in navigationCell.children" :key="itemIndex"
                        :element="item" :entityData="{}" />
                </template>
                <component v-else
                    v-bind:is="formattedFolderNavigationCells[navigationCell.cellSetID.mainLevel]?.mainLevel?.tag ? formattedFolderNavigationCells[navigationCell.cellSetID.mainLevel].mainLevel.tag : 'div'"
                    :style="formattedFolderNavigationCells[navigationCell.cellSetID.mainLevel]?.mainLevel?.style"
                    :class="formattedFolderNavigationCells[navigationCell.cellSetID.mainLevel]?.mainLevel?.class"
                    @click="forwardFolderNavigation(navigationCell)">
                    <template
                        v-for="mainLevelCell in formattedFolderNavigationCells[navigationCell.cellSetID.mainLevel]?.mainLevel.cell">
                        <container :element="mainLevelCell" :entityData="navigationCell" />
                    </template>
                </component>

            </template>

            <!-- FIXED FOOTER NAVIGATION -->
            <template v-for="(navigationView, index) in formattedFolderNavigationTree.view" :key="index">
                <template v-if="navigationView.behaviour == 'fixBottom'">
                    <container v-for="(item, itemIndex) in navigationView.children" :key="itemIndex"
                        :element="item" :entityData="{}" />
                </template>
            </template>
        </component>
    </template>
</template>

<script setup>
import { watch, computed } from "vue"

import config from "@/config.json"

import { usePlatformNavigationStore } from "@/store/platformNavigation"

import { usePlatformNavigation } from "@/composables/navigation/usePlatformNavigation"
import { useFolderNavigation } from "@/composables/navigation/useFolderNavigation"

const { configurePlatformNavigationLocal } = usePlatformNavigation()
const { initFolderNavigation, formattedFolderNavigationTree, formattedFolderNavigationCells, currentFolderNavigationTreeNode, currentFolderNavigationTreeChildren, forwardFolderNavigation, backFolderNavigation } = useFolderNavigation({ deviceID: 'desktop' })

/* CONFIGURE LOCAL NAVIGATION */
if (config.platformNavigationLocal) {
    configurePlatformNavigationLocal()
}

const platformNavigationStore = usePlatformNavigationStore()

const navigationViewID = computed(() => platformNavigationStore.selectedFolderNavigationViewID)
watch(navigationViewID, () => {
    console.log('navigationViewID Changed -> ', navigationViewID.value)
    initFolderNavigation(navigationViewID.value)
})

/* INITIALIZE FOLDER NAVIGATION */
initFolderNavigation()
</script>
