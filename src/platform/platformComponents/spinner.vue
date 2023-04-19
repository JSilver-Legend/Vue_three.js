<template>
  <div class="flex justify-center items-center h-screen w-screen bg-[#151620]">
    <Vue3Lottie :animationData="AstronautJSON" :height="200" :width="200" />
  </div>
</template>

<script>
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'

import AstronautJSON from '@/assets/animation/intro1.json'

export default {
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      AstronautJSON,
    }
  },
}
</script>
