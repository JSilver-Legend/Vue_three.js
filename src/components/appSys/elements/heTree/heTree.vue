<template>
    <BaseTree v-model="treeData" ref="tree" :statHandler="statHandler" @check:node="onCheckNode">
        <template #default="{ node, stat }">
            <div class="h-6 flex">
                <!-- <input class="ml-4 h-3 w-3 overflow-hidden" type="checkbox" v-model="stat.checked" /> -->
                <input class="ml-4 h-3 w-3" type="checkbox" v-model="stat.checked" />
                <!--  {{  stat.checked == true || stat.checked == null ? ' true ' : ' false '  }}  -->
                <div @click="stat.open = !stat.open" class="text-2xl p-0 m-0 flex items-center h-3 pl-4 text-gray-500">
                    {{ stat.open ? '-' : '+' }}
                </div>
                <span class="pl-2 text-11">{{ node.text }}</span>
                <span class="pl-4 text-11 text-red-400">{{ node.permission }}</span>
                {{ stat.checked }}
            </div>
        </template>
    </BaseTree>
    Checked: {{ checked }}
</template>
 
<script setup>

import _ from "lodash"
import { ref, toRefs } from "vue"
import { BaseTree } from '@he-tree/vue'
import '@he-tree/vue/style/default.css'

const props = defineProps(["element", "entityData"])
const { element, entityData } = toRefs(props);

const treeData = ref([])
if (element.value.inputPath) {
    treeData.value = element.value.inputPath
} else if (element.value.inputPathKey) {
    treeData.value = _.get(entityData.value, element.value.inputPathKey)
}

const tree = ref(null)
const checked = ref([])

const onCheckNode = () => {
    // checked.value = tree.value.getChecked().map((node) => node.data.permission)
    checked.value = []
    tree.value.getChecked().map((node) => {
        //if (!checked.value.includes(node.data.permission)) {
        checked.value.push(node.data.permission)
        // }
        for (const parentStat of tree.value.iterateParent(node, { withSelf: false })) {
            console.log('parentStat', parentStat.data.permission)
            if (!checked.value.includes(parentStat.data.permission)) {
                checked.value.push(parentStat.data.permission)
            }
        }
    })
    tree.value.updateCheck()
}

const statHandler = (stat) => {
    console.log('statHandler', stat)
    stat.checked = stat.data.checked
    return stat
}
</script> 