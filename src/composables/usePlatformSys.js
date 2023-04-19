import _ from 'lodash'
import { computed } from 'vue'
import { useMq } from "vue3-mq"
import { useRoute } from 'vue-router'

import config from '@/config.json'

import { useEventList } from '@/composables/appSys/useEventList'
import { usePlatformSysStore } from '@/store/platformSys'
import { useDynamicAppsStore } from '@/store/dynamicApps'

// import { useJsonLocal } from '@/composables/appSys/localJson/a534325'
// import { useJsonLocal } from '@/composables/appSys/localJson/abCompany'
// import { useJsonLocal } from '@/composables/appSys/localJson/a777444blog'
// import { useJsonLocal } from '@/composables/appSys/localJson/a666333jobOffers'
 import { useJsonLocal } from '@/composables/appSys/localJson/a999114events'

// import { useJsonLocal } from '@/composables/appSys/localJson/a888222heoParts'
// import { useJsonLocal } from '@/composables/appSys/localJson/a999111dwpKontrolle'
// import { useJsonLocal } from '@/composables/appSys/localJson/a999112anlageNasslack'
// import { useJsonLocal } from '@/composables/appSys/localJson/a999113kontrolle'

// import { useJsonLocal } from '@/composables/appSys/localJson/platformUserManagement'

export function usePlatformSys() {

    const route = useRoute()
    const $mq = useMq()

    const platformSysStore = usePlatformSysStore()
    const dynamicAppsStore = useDynamicAppsStore()

    const { getFilteredList } = useEventList()

    const { jsonLocal } = useJsonLocal()

    const appTemplate = computed(() =>
        platformSysStore.appTemplate(route.params.URL)
    )

    const appData = computed(() =>
        appTemplate.value
            ? appTemplate.value?.appMarkup.find((item) => item.subURL == route.params.subURL)
            : null
    )

    const selectedDocument = computed(() =>
        appData.value?.globalCollection && dynamicAppsStore.apps[appData.value.globalCollection]?.selected
            ? dynamicAppsStore.apps[appData.value.globalCollection].selected
            : null
    )

    const documentList = computed(() =>
        appData.value?.globalCollection && dynamicAppsStore.apps[appData.value.globalCollection]?.list
            ? getFilteredList(appData.value.globalCollection)
            : null
    )

    // get appTemplate and get sowSidebar showTopbar parameter
    const init = async () => {

        if (!appTemplate.value) {
            if (config.appTemplateLocal) {
                if (route.params.URL == jsonLocal.URL) {
                    // Get localJson data local
                    console.log('GET appTemplateLocal')
                    platformSysStore.appTemplates.push(jsonLocal)
                } else {
                    // Get localJson data online
                    console.log('GET appTemplateOnline')
                    await platformSysStore.appTemplateGet({
                        query: { URL: route.params.URL }
                    })
                }
            } else {
                // Get localJson data online
                console.log('GET appTemplateOnline')
                await platformSysStore.appTemplateGet({
                    query: { URL: route.params.URL }
                })
            }
        } else {
            if (config.appTemplateLocal) {
                if (route.params.URL == jsonLocal.URL) {
                    const index = _.indexOf(
                        platformSysStore.appTemplates,
                        _.find(platformSysStore.appTemplates, {
                            URL: route.params.URL,
                        })
                    )
                    platformSysStore.appTemplates.splice(index, 1, jsonLocal)
                }
            }
        }

        // configure show/hide sidebar and topbar from app template configuration
        if (appTemplate.value?.showHideSidebar === false) {
            platformSysStore.showSidebar = false
        }

        if (appTemplate.value?.showHideTopbar === false) {
            platformSysStore.showTopBar = false
        }

        // hide side on mobile view
        // if a page is visited
        if (appData.value
            && appData.value.markup
            && (
                appData.value.category == 'table' ||
                appData.value.category == 'noDocument' ||
                selectedDocument.value
            )
            && ($mq.current == 'xs' || $mq.current == 'small')
        ) {
            platformSysStore.showSidebar = false
        }

    }

    return {
        appTemplate,
        appData,
        selectedDocument,
        documentList,
        init
    }
}
