import { computed } from "vue"

import { usePlatformNavigationStore } from "@/store/platformNavigation"
//import { useJsonLocal } from "@/composables/localJson/localJson/platformNavigationDefault"
import { useJsonLocal } from "@/composables/navigation/localJson/platformNavigation"
//import { useJsonLocal } from "@/composables/localJson/localJson/candidatesNavigation"

export function usePlatformNavigation() {

    const platformNavigationStore = usePlatformNavigationStore()

    // platformNavigation will be used from pinia store
    // either the platform localJson retrived from online
    // or configed to use local
    // it will be stored in pinia store
    const platformNavigation = computed(() => platformNavigationStore.platformNavigation)

    // this function will set location platformnavigation
    // to use in the system
    const configurePlatformNavigationLocal = () => {
        console.log("PLATFORM NAVIGATION LOCAL")
        const { jsonLocal } = useJsonLocal()
        const platformNavigationLocal = jsonLocal
        platformNavigationStore.platformNavigation = platformNavigationLocal
    }

    // will return html snippet from htmlSnippets array
    // by snippetID
    // src\composables\localJson\localJson\platformNavigation.js line 482
    const getHtmlSnippet = ({ snippetID }) => {
        let children = []
        platformNavigation.value?.htmlSnippets?.forEach(element => {
            if (element.snippetID == snippetID) {
                children = element.snippet
            }
        })
        return children
    }

    // will return appView  by appPathAssignementID, deviceID
    // from appNavigation array
    // src\composables\localJson\localJson\platformNavigation.js line 1188
    const getAppView = ({ appPathAssignementID, deviceID }) => {
        let appNavigation = null
        platformNavigation.value?.appNavigation?.forEach(element => {
            if (element.appPathAssignementID == appPathAssignementID) {
                appNavigation = element
            }
        })

        // get device specific views
        let appView = null
        appNavigation?.device?.forEach(element => {
            if (deviceID == element?.deviceID) {
                appView = element
            }
        })

        return appView?.appViews;
    }

    // set / put cellSetID to all nested children
    // to use in the code
    const configureCellSetID = (node, cellSetID) => {
        if (!node.cellSetID) {
            node.cellSetID = {
                mainLevel: cellSetID,
                backButton: cellSetID
            }
        } else {
            const navigationCell = getNavigationCell({ cellSetID: node.cellSetID })
            node.cellSetID = {
                mainLevel: navigationCell.mainLevel ? node.cellSetID : cellSetID,
                backButton: navigationCell.backButton ? node.cellSetID : cellSetID
            }
        }
        // node.cellSetID = node.cellSetID ? node.cellSetID : cellSetID
        node?.children?.forEach(element => {
            configureCellSetID(element, cellSetID)
        })
    }

    // return localJson path tree by navigationPathID
    // from navigationPaths array
    // src\composables\localJson\localJson\platformNavigation.js line 10
    // cellSetID will be use to put in the all nested children
    const getNavigationPath = ({ navigationPathID, cellSetID }) => {
        let children = []
        const platformNavigationTreeUnrefed = JSON.parse(JSON.stringify(platformNavigation.value))
        platformNavigationTreeUnrefed?.navigationPaths?.forEach(element => {
            if (element.navigationPathID == navigationPathID) {
                element.path.forEach(obj => {
                    if (obj.beforeHtmlSnippet) {
                        children.push({ type: "staticHtml", children: getHtmlSnippet({ snippetID: obj.beforeHtmlSnippet }) })
                    }
                    children.push(obj)
                    if (obj.afterHtmlSnippet) {
                        children.push({ type: "staticHtml", children: getHtmlSnippet({ snippetID: obj.afterHtmlSnippet }) })
                    }
                })
                // children = element.path
            }
        })
        children.forEach(element => {
            configureCellSetID(element, cellSetID)
        })
        return children
    }

    // return cells by cellSetID
    // from navigationCells array line 238
    const getNavigationCell = ({ cellSetID }) => {
        let navigationCell = null
        const platformNavigationTreeUnref = JSON.parse(JSON.stringify(platformNavigation.value))
        platformNavigationTreeUnref?.navigationCells?.forEach(element => {
            if (element.cellSetID == cellSetID) {
                navigationCell = element.cells
            }
        })

        if (!navigationCell) navigationCell = platformNavigationTreeUnref?.navigationCells[0].cells
        let formattedNavigationCell = {}
        navigationCell.forEach(element => {
            formattedNavigationCell[element.cellID] = element
        })
        return formattedNavigationCell
    }

    // generate and puth path to all node
    // will use to traverse tree
    const configureTreePath = (node) => {
        node?.children?.forEach((element, index) => {
            element.path = [...node.path, index]
            configureTreePath(element)
        })
    }

    const generatePath = (node) => {
        node.forEach((element, index) => {
            element.path = [index]
            configureTreePath(element)
        })
        return node
    }

    // will return parent node of a
    // child node
    const getParentNode = (node) => {
        let rootNode = [...platformNavigationStore.initialFolderNavigationTree]
        for (let i = 0; i < node.path.length - 1; i++) {
            if (!i) {
                rootNode = rootNode[node.path[i]]
            } else {
                rootNode = rootNode.children[node.path[i]]
            }
        }
        return rootNode
    }

    return {
        platformNavigation,
        getHtmlSnippet,
        getNavigationPath,
        getNavigationCell,
        configurePlatformNavigationLocal,
        generatePath,
        getParentNode,
        getAppView
    }
}
