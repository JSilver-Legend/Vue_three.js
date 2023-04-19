<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

import { useTransitionComposable } from './composables/transition-composable';
import HeaderComponent from './components/HeaderComponent.vue';

const { toggleTransitionComplete } = useTransitionComposable();

// Transition Hooks
const onEnter = (el, done) => {
  gsap.set(el, { autoAlpha: 0, scale: 1, xPercent: 5 });
  gsap
    .timeline({
      paused: true,
      onComplete() {
        toggleTransitionComplete(true);
        done();
      },
    })
    .to(el, { autoAlpha: 1, xPercent: 0, duration: 0.6 })
    .to(el, { scale: 1, duration: 0.25 })
    .play();
};

const onLeave = (el, done) => {
  toggleTransitionComplete(false);
  gsap
    .timeline({ paused: true, onComplete: done })
    .to(el, { scale: 0.4, autoAlpha: 0, duration: 0.8 })
    .play();
};

onMounted(() => {
  toggleTransitionComplete(true);
});
</script>

<template>
  <div>
    <HeaderComponent />
    <RouterView v-slot="{ Component }">
      <Transition @enter="onEnter" @leave="onLeave" name="routes" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>
