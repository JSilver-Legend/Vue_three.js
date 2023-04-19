<template>
    <template v-if="formattedAppNavigationTree">

        <component v-bind:is="formattedAppNavigationTree.tag ? formattedAppNavigationTree.tag : 'div'"
            :style="formattedAppNavigationTree.style" :class="formattedAppNavigationTree.class">

            <!-- FIXED TOP NAVIGATION -->
            <template v-for="(navigationView, index) in formattedAppNavigationTree.view" :key="index">
                <template v-if="navigationView.behaviour == 'fixTop'">
                    <template v-if="navigationView.type == 'container'">
                        <container :element="navigationView" :entityData="{}" />
                    </template>
                    <template v-else-if="navigationView.type == 'htmlSnippet'">
                        <container v-for="(item, itemIndex) in navigationView.children" :key="itemIndex" :element="item"
                            :entityData="{}" />
                    </template>
                </template>
            </template>

            <!-- NAVIGATION VIEWS -->
            <template v-for="(navigationView, index) in formattedAppNavigationTree.view" :key="index">
                <template v-if="navigationView.behaviour !== 'fixTop' && navigationView.behaviour !== 'fixBottom'">
                    <!-- <template v-if="navigationView.type == 'tableGroup'">
                        <tableGroup :element="navigationView"></tableGroup>
                    </template> -->
                    <template v-if="navigationView.type == 'container'">
                        <container :element="navigationView" :entityData="{}" />
                    </template>
                    <template v-else-if="navigationView.listType == 'folderList' || navigationView.listType == 'documentList'">
                        <agGrid :element="navigationView" :entityData="{}" />
                    </template>
                    <template v-else>
                        <container @click="forwardAppNavigation(navigationView)"
                            v-for="(item, itemIndex) in getNavigationCell(navigationView)/* navigationView[navigationView.url ? getCellKey(navigationView.url) : 'folderCell'] */  "
                            :key="itemIndex" :element="item" :entityData="navigationView" />
                    </template>
                </template>
            </template>

            <!-- FIXED FOOTER NAVIGATION -->
            <template v-for="(navigationView, index) in formattedAppNavigationTree.view" :key="index">
                <template v-if="navigationView.behaviour == 'fixBottom'">
                    <template v-if="navigationView.type">
                        <container :element="navigationView" :entityData="{}" />
                    </template>
                    <template v-else-if="navigationView.type == 'htmlSnippet'">
                        <container v-for="(item, itemIndex) in navigationView.children" :key="itemIndex" :element="item"
                            :entityData="{}" />
                    </template>
                </template>
            </template>

        </component>

    </template>
</template>

<script setup>
import { watch } from "vue"
import { useRoute } from "vue-router"

import { useAppNavigation } from "@/composables/navigation/useAppNavigation"

// import tableGroup from "@/platform/navigation/appNavigation/tableGroup.vue"

const { formattedAppNavigationTree, forwardAppNavigation } = useAppNavigation()

const forwardNavigationIfNeeded = () => {
    let noOfAppLevel = 0
    let lastAppView = null;
    let firstAppView = null;
    let firstViewFlag = false;
    formattedAppNavigationTree.value?.view?.forEach(element => {
        if (element.appViewLevel == "parent") {
            noOfAppLevel++;
            lastAppView = element
            if (!firstViewFlag) {
                firstAppView = element
                firstViewFlag = true
            }
        }
    })
    // if there is only 1 item in the localJson
    // it will be selected automatically and
    // will go 1 state deeper
    if (noOfAppLevel == 1) forwardAppNavigation(lastAppView)
    else if (formattedAppNavigationTree.value?.selectFirst) {
        console.log('appNavigation | forward navigation... ')
        forwardAppNavigation(firstAppView)
    }
}
forwardNavigationIfNeeded()
watch(() => formattedAppNavigationTree.value, () => forwardNavigationIfNeeded())

const route = useRoute()
// const getCellKey = (url) => { return url == route.fullPath ? 'folderCellSelected' : 'folderCell' }

const getNavigationCell = (navigationView) => {
    // navigationView[navigationView.url ? getCellKey(navigationView.url) : 'folderCell']
    if (!navigationView.url) {
        return navigationView['folderCell']
    } else {
        if (navigationView.url == route.fullPath && navigationView['folderCellSelected']) return navigationView['folderCellSelected']
        else return navigationView['folderCell']
    }
}
</script>
