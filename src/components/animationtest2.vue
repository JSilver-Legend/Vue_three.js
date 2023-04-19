<script>
import gsap from 'gsap';

export default {
  data() {
    return {
      tl: null,
      ctx: null
    };
  },

  methods: {
    toggleAnimation1() {
      this.tl1.reversed(!this.tl1.reversed());
    },
    toggleAnimation2() {
      this.tl2.reversed(!this.tl2.reversed());
    }
  },
  mounted() {
    this.ctx = gsap.context(() => {
      const q = gsap.utils.selector(this.$el);
      const card1 = q('.card1')
      const card2 = q('.card2')
      const bgImage = q('.bg-image-gsap')
      const button1 = q('.button1')
      const button2 = q('.button2')
      const pageBounds = document.body.getBoundingClientRect()

      gsap.set(".bg-image-gsap", {opacity: 1, scale: 0.75, x: 100, y: -150});
      gsap.set(".card1", { opacity: 0, x: 100, y: -70});
      gsap.set(".card2", { opacity: 0, x: -800, y: -70});
      gsap.set(".button1", { opacity: 1, x: 1110, y: 450});
      gsap.set(".button2", { opacity: 1, x: 530, y: 330});

      this.tl1 = gsap
        .timeline()
        .to(bgImage[0], { opacity: 0.6, x: -pageBounds.width / 5, scale: 0.5, duration: 0.5})
        //.to(button1[0], { opacity: 0, duration: 0.1},0)
        .to(card1[0], { opacity: 1, x: 40, scaleX: 1}, 0.1)
        .reverse()

      this.tl2 = gsap
        .timeline()
        .to(bgImage[0], { opacity: 0.6, x: pageBounds.width / 5, scale: 0.5, duration: 0.5})
        .to(card2[0], { opacity: 1, x: -800, scaleX: 1}, 0.1)
        .reverse()
    })
  },
  onUnmounted() {
    this.ctx.revert()
  }
};
</script>

<template>
  <div class="relative w-full h-screen pattern-dots pattern-gray-300 pattern-bg-gray-200 pattern-size-2 pattern-opacity-100">

    <!-- card 1 -->
    <div class="absolute top-60 right-40 bg-white shadow-lg w-5/12 h-[70%] scale-x-0 card1">
      <!-- header -->
      <div class="text-center py-2">
        <div class="font-semibold">Nassanlage</div>
        <div class="text-gray-500 text-xs">1 board, 1 card</div>
      </div>
      <!-- topBar -->
      <div class="bg-gray-100 px-0 py-4 grid grid-cols-5">
        <div class="flex flex-col items-center cursor-pointer">
          <div class="bg-red-400 hover:bg-red-500 hover:text-white rounded-lg p-2.5 grid place-items-center w-12 ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
              <path d="M19.5 6h-15v9h15V6z" />
              <path fill-rule="evenodd"
                    d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 006 21h12a.75.75 0 000-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375zm0 13.5h17.25a.375.375 0 00.375-.375V4.875a.375.375 0 00-.375-.375H3.375A.375.375 0 003 4.875v11.25c0 .207.168.375.375.375z"
                    clip-rule="evenodd" />
            </svg>
          </div>
          <div class="w-full">
            <div class="text-sm font-semibold text-center">Dashboard</div>
            <div class="text-gray-500 text-xs text-center">1 board, 1 card</div>
          </div>
        </div>
        <div class="flex flex-col items-center cursor-pointer">
          <div class="bg-blue-300 hover:bg-blue-400 hover:text-white rounded-lg p-2.5 grid place-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
              <path d="M19.5 6h-15v9h15V6z" />
              <path fill-rule="evenodd"
                    d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 006 21h12a.75.75 0 000-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375zm0 13.5h17.25a.375.375 0 00.375-.375V4.875a.375.375 0 00-.375-.375H3.375A.375.375 0 003 4.875v11.25c0 .207.168.375.375.375z"
                    clip-rule="evenodd" />
            </svg>
          </div>
          <div class="">
            <div class="text-sm font-semibold text-center">Warenträger</div>
            <div class="text-gray-500 text-xs text-center">1 board, 1 card</div>
          </div>
        </div>
        <div class="flex flex-col items-center cursor-pointer">
          <div class="bg-blue-300 hover:bg-blue-400 hover:text-white rounded-lg p-2.5 grid place-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
              <path d="M19.5 6h-15v9h15V6z" />
              <path fill-rule="evenodd"
                    d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 006 21h12a.75.75 0 000-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375zm0 13.5h17.25a.375.375 0 00.375-.375V4.875a.375.375 0 00-.375-.375H3.375A.375.375 0 003 4.875v11.25c0 .207.168.375.375.375z"
                    clip-rule="evenodd" />
            </svg>
          </div>
          <div class="">
            <div class="text-sm font-semibold text-center">Lösemittelverbrauch</div>
            <div class="text-gray-500 text-xs text-center">1 board, 1 card</div>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-between h-full">
        <!-- content -->
        <div class="flex-1">
          <div class="mt-8 px-12 text-sm h-full">
            <div class="font-semibold">VA220802-1</div>
            <div>10.08.2022</div>
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam nobis quia, voluptate cupiditate quasi
              sint laborum neque ut nemo modi.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- card 2 -->
    <div class="absolute top-60 right-40 bg-white shadow-sm w-5/12 h-3/4 scale-x-0 card2">
      <!-- header -->
      <div class="text-center">
        <div class="font-semibold">KTL-Anlage</div>
        <div class="text-gray-500 text-xs">1 board, 1 card</div>
      </div>
      <!-- content -->
      <div class="">
        <div class="mt-3 p-5 text-sm border space-y-2">
          <div class="font-semibold">VA220802-1</div>
          <div>10.08.2022</div>
          <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam nobis quia, voluptate cupiditate quasi
            sint laborum neque ut nemo modi.
          </div>
        </div>
      </div>
      <!-- footer -->
      <div class="mt-2 px-5 py-2 bg-gray-100 flex items-center space-x-2 cursor-pointer">
        <div class="bg-amber-400 rounded-lg p-2.5 grid place-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
            <path d="M19.5 6h-15v9h15V6z" />
            <path fill-rule="evenodd"
                  d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 006 21h12a.75.75 0 000-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375zm0 13.5h17.25a.375.375 0 00.375-.375V4.875a.375.375 0 00-.375-.375H3.375A.375.375 0 003 4.875v11.25c0 .207.168.375.375.375z"
                  clip-rule="evenodd" />
          </svg>
        </div>
        <div>
          <div class="text-sm font-semibold">Loremipsumdolor</div>
          <div class="text-gray-500 text-xs">1 board, 1 card</div>
        </div>
      </div>
    </div>

    <div class="absolute right-5 top-5 w-[7%]">
      <img class="" src="/static/img/logo_black.png">

    </div>

    <!-- building image -->
    <div class="absolute top-[200px] left-[200px] bg-image-gsap">
      <div class="absolute hover:text-amber-200 cursor-pointer p-4 rounded font-bold text-white button1 w-64 h-64 z-20 text-center pt-20" @click="toggleAnimation1">Nassanlage</div>
      <div class="absolute hover:text-amber-200 cursor-pointer p-4 rounded font-bold text-white button2 w-96 z-20" @click="toggleAnimation2">KTL-Anlage</div>
      <img class="w-10/12" src="https://ucarecdn.com/158a76fd-a1d6-4672-b157-8c01d585be81/-/preview/-/quality/smart/-/format/auto/">

    </div>

  </div>
</template>
