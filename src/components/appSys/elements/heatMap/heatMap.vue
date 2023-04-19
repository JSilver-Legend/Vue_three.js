<template>
    <div ref="heatmapContainer" :class="element.class" :style="element.style"></div>
</template>

<script setup>
import { onMounted, ref, toRefs, watchEffect, computed } from "vue";
import Heatmap from "@/assets/heatmap/heatmap.js"
import { useHelperFunctions } from '@/composables/useHelperFunctions'

const props = defineProps(["element", "computedValue"])
const { element, computedValue } = toRefs(props)

const heatmapContainer = ref(null);
const heatmapInstance = ref(null);

const { resolveStaticValueExpression } = useHelperFunctions()
// if getFromStore is give pulling image size from volatile which is store from image 
// value format { x: 400, y: 300}
const imageSize = computed(() => element.value.getFromStore ? resolveStaticValueExpression(element.value.getFromStore) : null)
const scaleValue = computed(() => resolveStaticValueExpression(element.value.scaleValue) ? Number(resolveStaticValueExpression(element.value.scaleValue)) : 0.1)


const createHeatmapImage = (size, data) => {
    const heatmapDiv = document.createElement('div')
    heatmapDiv.style.width = `${size[0]}px`
    heatmapDiv.style.height = `${size[1]}px`
    console.log(heatmapDiv)

    const heatmapInstance = Heatmap.create({
        container: heatmapDiv,
        width: size[0],
        height: size[1],
    })
    heatmapInstance.removeData()
    heatmapInstance.setData(data)
    const image = new Image()
    image.src = heatmapInstance.getDataURL()
    image.style.width = '100%'
    image.style.height = 'auto'
    image.style.position = 'absolute'
    image.style.left = '0'
    image.style.top = '0'
    return image
}

onMounted(() => {
    const heatmapContainerBounds = heatmapContainer.value.getBoundingClientRect()

    watchEffect(() => {

        heatmapInstance.value = Heatmap.create({
            container: heatmapContainer.value
        })

        // reset heatMap
        try {
            let data = { max: computedValue && computedValue.value && computedValue.value.length, data: [] }
            if (computedValue && computedValue.value) {
                computedValue.value.forEach(element => {

                    // referecnes could be accessed using the varaible element.references 

                    element.measures.forEach(measure => {
                        console.log(Math.floor(heatmapContainerBounds.width / 2))
                        data.data.push({
                            x: Math.floor(heatmapContainerBounds.width / 2) + Math.floor(measure.centerDot.x/*  * heatmapContainerBounds.width */),
                            y: Math.floor(heatmapContainerBounds.height / 2) + Math.floor(measure.centerDot.y/*  * heatmapContainerBounds.height */),
                            value: computedValue.value.length * scaleValue.value,
                        })
                    });
                })
                const img = createHeatmapImage([heatmapContainerBounds.width, heatmapContainerBounds.height], data)
                heatmapContainer.value.appendChild(img)
            }
        } catch (err) {
            console.log('heatMap', err)
            // reset heatMap
            // heatmapInstance.value.removeData()
            // heatmapInstance.value.setData({ data: [] })
        }
    })

    /* for (let i = 0; i < 40; i++) {
        heatmapInstance.value.addData({
            x: Math.floor(Math.random() * heatmapContainerBounds.width),
            y: Math.floor(Math.random() * heatmapContainerBounds.height),
            value: 1,
        })
    } */

})
</script>

<style scoped>
.heatmap-container {
    width: 800px;
    height: 600px;
}
</style>
