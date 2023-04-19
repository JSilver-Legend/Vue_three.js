<template>
  <div class="headline text-3xl p-16 font-bold">
    Test custom properties
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, reactive } from "vue"

export default defineComponent({
  name: '',
  setup() {
    const state = reactive({
      color: '#345674',
    });
    onMounted(() => {
      setTimeout(() => {
        state.color = '#ff8476'
      }, 2000);
    });
    return {
      state,
    };
  },
});
</script>

<style lang='scss'>
.headline {
  color: v-bind("state.color");
}
</style>
