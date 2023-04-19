import _ from "lodash"
import { computed } from "vue"
import { useRouter, useRoute } from "vue-router"
import { usePlatformNavigationStore } from "@/store/platformNavigation"
import { usePlatformNavigation } from "@/composables/navigation/usePlatformNavigation"

export function useAppNavigation() {

    const router = useRouter()
    const route = useRoute()
    const platformNavigationStore = usePlatformNavigationStore()
    const { getHtmlSnippet } = usePlatformNavigation()

    // It will count the no of level in the current
    // app localJson
    // Use case: if there is only on item in the
    // localJson it will move / push further
    const countNoOfAppLevel = (node) => {
        let noOfAppLevel = 0
        node?.view?.forEach(element => {
            if (element.appViewLevel == "parent") {
                noOfAppLevel++;
            }
        })
        return noOfAppLevel
    }

    // the app localJson handled using stack
    // for each localJson it stored each state in the stack (platformNavigationStore.appNavigationStack)
    // top stack object will be considered to display
    const formattedAppNavigationTree = computed(() => {
        let node = platformNavigationStore.appNavigationStack.length ? platformNavigationStore.appNavigationStack[platformNavigationStore.appNavigationStack.length - 1][0] : null
        let navTree = []

        node?.view?.forEach(element => {
            if (element.type == 'htmlSnippet') {
                navTree.push({
                    ...element, children: getHtmlSnippet({ snippetID: element.snippetID })
                })
            } else {
                navTree.push(element)
            }
        })
        return { ...node, view: navTree }
    })

    // will change the app localJson state
    // it will push the children of the selected node
    // to platformNavigationStore.appNavigationStack
    const forwardAppNavigation = (node) => {
        //console.log('forwardAppNavigation', node)
        if (node.children?.length) {
            platformNavigationStore.appNavigationStack.push(node.children)
        }
        if (node.url) {
            router.push(node.url)
        }
    }

    // will go back to prev state
    // it will drop top object from platformNavigationStore.appNavigationStack
    const backAppNavigation = () => {
        platformNavigationStore.appNavigationStack = _.dropRight(platformNavigationStore.appNavigationStack);
        if (!platformNavigationStore.appNavigationStack.length) {
            platformNavigationStore.navigationStack = _.dropRight(platformNavigationStore.navigationStack);
        } else if (
            countNoOfAppLevel(platformNavigationStore.appNavigationStack[platformNavigationStore.appNavigationStack.length - 1][0]) == 1) {
            backAppNavigation()
        }
        if (route.path !== "/") {
            router.push("/")
        }
    }

    return {
        formattedAppNavigationTree,
        forwardAppNavigation,
        backAppNavigation
    }
}
