<template>
    <staticHtmlTag v-if="element.elementType == 'staticHtmlTag'" @click.stop="onClick(element.value)"
        :element="getFilteredObject(element)" :entityData="entityData" />
    <component v-else-if="element.elementType" :is="element.elementType" @return="onClick"
        :element="getFilteredObject(element)" :entityData="entityData" />
    <container v-else @click.stop="onClick(element.value)" :element="getFilteredContainerObject(element)"
        :entityData="entityData" />
</template>

<script setup>

import _ from "lodash"
import { useRoute } from "vue-router"
import { toRefs, computed } from "vue"

import emitter from "@/services/emitter"

import { usePlatformSysStore } from "@/store/platformSys"
import { useDynamicAppsStore } from "@/store/dynamicApps"
import { usePlatformNavigationStore } from "@/store/platformNavigation"
import { usePlatformUserManagement } from '@/composables/usePlatformUserManagement'
import { useFunction } from '@/composables/appSys/useFunction'

const props = defineProps(["element", "entityData"])

const { element, entityData } = toRefs(props)

const route = useRoute()
const platformNavigationStore = usePlatformNavigationStore()
const dynamicAppsStore = useDynamicAppsStore()
const platformSysStore = usePlatformSysStore()

const platformUserManagement = usePlatformUserManagement()
const { getInitialObj } = useFunction()

const appTemplate = computed(() => platformSysStore.appTemplate(route.params.URL))
const appData = computed(() => appTemplate.value ? appTemplate.value?.appMarkup.find(item => item.subURL == route.params.subURL) : null)

const onDocumentCreate = async () => {

    let data = await getInitialObj(element.value.functionId, /* default values */{
        confirmed: false,
        supress: false,
        mfa: 'mfa-software',
        config: {}
    })

    if (element.value.toggleDialog && element.value.dialogKey) {
        dynamicAppsStore.select({ apiPath: appData.value.globalCollection, data })
        platformSysStore.toggleDialog(element.value.dialogKey)
    }
}

const onDocumentDelete = () => {
    platformUserManagement.platformUserDelete({ ...entityData.value }).then(
        () => {
            emitter.emit('agGridTransaction', { type: 'remove', data: { email: entityData.value.email } })
            platformSysStore.toggleDialog(null)
        }, (error) => {
            console.log('onDocumentDelete', error)
            platformSysStore.toggleDialog(null)
        }
    )
}

const onDocumentEdit = async () => {
    console.log('puEvent | onDocumentEdit')
    if (entityData.value["custom:identID"] == "noID") {
        dynamicAppsStore.select({
            apiPath: appData.value.globalCollection,
            data: {
                ...entityData.value,
                platformNavigationTree: platformNavigationStore.platformNavigation?.navigationPaths[0]?.path || []
            }
        })
        platformSysStore.toggleDialog(element.value.dialogKey)
    } else {
        platformUserManagement.platformUserEdit({ ...entityData.value }).then(
            (selectedUser) => {
                dynamicAppsStore.select({
                    apiPath: appData.value.globalCollection,
                    data: {
                        ...selectedUser,
                        platformNavigationTree: platformNavigationStore.platformNavigation?.navigationPaths[0]?.path || []
                    }
                })
                platformSysStore.toggleDialog(element.value.dialogKey)
            }, (error) => {
                console.log('onDocumentDelete', error)
            }
        )
    }
}

const onDocumentSave = async () => {

    console.log('puEvent | onDocumentSave')

    if (entityData.value.identID) {

        // update platform user
        // update ag grid
        // emitter.emit('agGridTransaction', { type: 'update', data: { ...entityData.value } })
        await platformUserManagement.platformUserUpdate({ ...entityData.value })

    } else {
        // create new item
        const createdUser = await platformUserManagement.platformUserCreate({ ...entityData.value })
        // add ag grid
        emitter.emit('agGridTransaction', { type: 'add', data: createdUser })
    }
}

const onClick = async () => {
    console.log('onClick | puEvent | eventType -> ', element.value.eventType)
    switch (element.value.eventType) {
        case "create":
            onDocumentCreate()
            break
        case "delete":
            onDocumentDelete()
            break
        case "edit":
            onDocumentEdit()
            break
        case "save":
            onDocumentSave()
            if (element.value.toggleDialog) {
                platformSysStore.toggleDialog(element.value.dialogKey)
            }
            break
        case "cancel":
            platformSysStore.toggleDialog(element.value.dialogKey)
            break
    }
}

const getFilteredObject = (element) => {
    return {
        ..._.omit(element, ['elementType', 'eventType', 'toggleDialog', 'dialogKey']), 'elementType': 'staticHtmlType'
    }
}

const getFilteredContainerObject = (element) => {
    return {
        ..._.omit(element, ['elementType', 'eventType', 'toggleDialog', 'dialogKey']), 'type': 'container'
    }
}
</script>
