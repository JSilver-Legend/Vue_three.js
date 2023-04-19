<template>
  <section>
    <sequential-entrance delay=80 class="grid grid-cols-3 gap-4 p-8">
      <div class=""  v-for="(_, index) in Array(9)" :key="index" >

        <div class="bg-white p-2 pt-3 shadow-sm">
          <section class="text-center">
            <h3 class="font-semibold">former</h3>
            <p class="text-gray-500 text-xs">1 board, 1 card</p>
          </section>
          <section class="mt-3 p-5 text-sm border space-y-2">
            <h3 class="font-semibold">VA220802-1</h3>
            <p>10.08.2022</p>
            <br>
            <br>
            <br>
            <br>
            <br>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam nobis quia, voluptate cupiditate quasi
              sint laborum neque ut nemo modi.
            </p>
          </section>
          <section class="mt-2 px-5 py-2 bg-gray-100 flex items-center space-x-2 cursor-pointer">
            <div class="bg-red-400 rounded-lg p-2.5 grid place-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
                <path d="M19.5 6h-15v9h15V6z" />
                <path fill-rule="evenodd"
                      d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 006 21h12a.75.75 0 000-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375zm0 13.5h17.25a.375.375 0 00.375-.375V4.875a.375.375 0 00-.375-.375H3.375A.375.375 0 003 4.875v11.25c0 .207.168.375.375.375z"
                      clip-rule="evenodd" />
              </svg>

            </div>
            <div>
              <p class="text-sm font-semibold">Loremipsumdolor</p>
              <p class="text-gray-500 text-xs">1 board, 1 card</p>
            </div>
          </section>
        </div>

      </div>
    </sequential-entrance>
  </section>
</template>

<style>
.entranceFromRight {
  animation-name: entranceFromRight;
  animation-duration: 0.5s;
}

@keyframes entranceFromRight {
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

</style>

