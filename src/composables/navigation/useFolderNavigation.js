import { ref, computed } from "vue"
import { useRouter } from "vue-router"
import { usePlatformNavigationStore } from "@/store/platformNavigation"
import { usePlatformNavigation } from "@/composables/navigation/usePlatformNavigation"

export function useFolderNavigation({ deviceID }) {

    const router = useRouter()
    const platformNavigationStore = usePlatformNavigationStore()
    const { platformNavigation, getHtmlSnippet, getNavigationPath, getNavigationCell, generatePath, getParentNode, getAppView } = usePlatformNavigation()

    const formattedFolderNavigationTree = ref([])
    const formattedFolderNavigationCells = ref({})

    const currentFolderNavigationTreeNode = computed(() => platformNavigationStore.currentFolderNavigationTreeNode)
    const currentFolderNavigationTreeChildren = computed(() => platformNavigationStore.currentFolderNavigationTreeChildren)

    const forwardFolderNavigation = (node) => {
        //console.log('forwardFolderNavigation', node)
        if (node.children) {
            platformNavigationStore.currentFolderNavigationTreeNode = node
            platformNavigationStore.currentFolderNavigationTreeChildren = node.children
        } else if (node.url) {
            router.push(node.url)
        } else if (node.appPathAssignementID) {
            // switch to app localJson
            /*  platformNavigationStore.navigationStack.push({
                 type: "appNavigation",
                 appPathAssignementID: node.appPathAssignementID
             }) */

            // switch to app folder localJson
            platformNavigationStore.navigationStack.push({
                type: "appNavigation",
                appPathAssignementID: node.appPathAssignementID
            })

            platformNavigationStore.appNavigationStack.push(getAppView({ appPathAssignementID: node.appPathAssignementID, deviceID }))
        }
    }

    const backFolderNavigation = (node) => {
        if (node.path.length == 1) {
            platformNavigationStore.currentFolderNavigationTreeNode = null
            platformNavigationStore.currentFolderNavigationTreeChildren = platformNavigationStore.initialFolderNavigationTree
        } else {
            const parentNode = getParentNode(node)
            platformNavigationStore.currentFolderNavigationTreeNode = parentNode
            platformNavigationStore.currentFolderNavigationTreeChildren = parentNode.children
        }
        router.push("/")
    }

    const formatFolderNavigationCells = (node) => {
        formattedFolderNavigationCells.value[node.cellSetID.mainLevel] = getNavigationCell({ cellSetID: node.cellSetID.mainLevel })
        formattedFolderNavigationCells.value[node.cellSetID.backButton] = getNavigationCell({ cellSetID: node.cellSetID.backButton })
        node?.children?.forEach(element => {
            formatFolderNavigationCells(element)
        })
    }

    const initFolderNavigation = (navigationViewID) => {

        //console.log('useFolderNavigation | initFolderNavigation', navigationViewID)

        // get the appropiate navAssignment for the device
        // device could be mobile, desktop or others
        // src\composables\localJson\localJson\platformNavigation.js [line 165]
        // navigationAssignment is an array object and has a key name deviceID to detect it
        const navigationAssignment = ref(null)
        platformNavigation.value?.navigationAssignment?.forEach(element => {
            if (element.deviceID == deviceID) {
                navigationAssignment.value = element
            }
        })

        // navassignment has navigationViews key
        // src\composables\localJson\localJson\platformNavigation.js [line 168]
        // navigationViews is an array of different veiws will be identified by navigationViewID
        // there will be displayed one view at a time.
        // if navigationViewID is not provided or selected first view will be considered to show/display
        const navigationView = ref(null)
        if (navigationViewID) {
            navigationAssignment.value?.navigationViews?.forEach(element => {
                if (navigationViewID == element?.navigationViewID) {
                    navigationView.value = element
                }
            })
        }
        if (!navigationView.value && navigationAssignment.value?.navigationViews[0]) {
            navigationView.value = navigationAssignment.value.navigationViews[0]
        }

        // view contains different types of sections
        // static parts | and localJson parts
        // navigationView have refrences of them by type and id
        // Example type = "htmlSnippet" & snippetID = "header-full" (src\composables\localJson\localJson\platformNavigation.js line 175)
        // Is the refence code snippet of (src\composables\localJson\localJson\platformNavigation.js line 484) in in htmlSnippets array
        // this code section will combine all together
        // formattedFolderNavigationTree.value = navigationView.value -> this will combine static parts
        // navPathTree -> will combine localJson or dynamic foldernaivation parts
        let navPathTree = []
        navigationView.value?.view?.forEach(element => {
            if (element.type == 'htmlSnippet') {
                element.children = getHtmlSnippet({ snippetID: element.snippetID })
            } else if (element.type == 'navigationPath') {
                navPathTree = [...navPathTree, ...getNavigationPath({ navigationPathID: element.navigationPathID, cellSetID: element.cellSetID })]
            }
        })

        formattedFolderNavigationTree.value = navigationView.value

        // format folder localJson cells navPathTree arrry
        navPathTree.forEach(element => {
            formatFolderNavigationCells(element)
        })

        // update store
        if (!platformNavigationStore.initialFolderNavigationTree) {
            // initially parent of the current visited node will be empty or null
            platformNavigationStore.currentFolderNavigationTreeNode = null
            // will be use to visit root or reset localJson
            platformNavigationStore.initialFolderNavigationTree = platformNavigationStore.currentFolderNavigationTreeChildren = generatePath(navPathTree)
        }
    }

    return {
        formattedFolderNavigationTree,
        formattedFolderNavigationCells,
        currentFolderNavigationTreeNode,
        currentFolderNavigationTreeChildren,
        initFolderNavigation,
        forwardFolderNavigation,
        backFolderNavigation
    }
}
