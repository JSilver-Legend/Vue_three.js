<template>
  <video-player :class="element.class" :options="options" />
</template>

<script setup>
import { toRefs, computed } from 'vue'
import { VideoPlayer } from '@videojs-player/vue'

import { useHelperFunctions } from '@/composables/useHelperFunctions'

import 'video.js/dist/video-js.css'

const { resolveStaticValueExpression } = useHelperFunctions()

const props = defineProps(['element', 'entityData'])
const { element, entityData } = toRefs(props)

const options = computed(() => {
  return {
    ...element.value.options,
    src: resolveStaticValueExpression(element.value.options.src),
    poster: resolveStaticValueExpression(element.value.options.poster)
  }
})

</script>
