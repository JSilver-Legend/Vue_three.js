<template>
  <div class="flex flex-wrap space-x-3 space-y-6 mt-4">
    <div
      ref="labelRef"
      data-type="staticHtmlTag"
      data-tag="label"
      class="item activated w-20 h-20 ml-3 mt-6 text-center cursor-pointer z-10"
    >
      <div class="">
        <div class="mb-0 pt-2 text-3xl font-bold">A</div>
        <div class="text-12 font-normal">Text</div>
      </div>
    </div>
    <div 
      ref="h1Ref"
      data-type="staticHtmlTag"
      data-tag="h1"
        class="item activated w-20 h-20 text-center z-10">
      <div class>
        <div class="pt-2 pl-5">
          <svg
            fill="#aaaaaa"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 36 36"
            width="36px"
            height="36px"
          >
            <path
              d="M1,7v24h5.5v-9.8h8.7V31h5.5V7h-5.5v9.8H6.4V7H1z M31.9,7l-0.1,0.5c0,0.2-0.4,1.3-1.3,2.2c-0.8,0.9-2.1,1.7-3.9,1.7h-0.5
	v3.3H31V31h4.4V7H31.9z M2.1,8.1h3.3v9.8h10.9V8.1h3.3v21.8h-3.3v-9.8H5.3v9.8H2.1V8.1z M32.7,8.1h1.5v21.8h-2.2V13.5h-4.9v-1.2
	c1.9-0.2,3.3-1,4.2-2C32.1,9.5,32.5,8.7,32.7,8.1z M8.6,22.8c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5
	C9.2,23.1,8.9,22.8,8.6,22.8z M10.8,22.8c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5
	C11.3,23.1,11.1,22.8,10.8,22.8z M13,22.8c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5
	C13.5,23.1,13.3,22.8,13,22.8z"
            />
          </svg>
        </div>
        <div class="text-12 font-normal">Heading</div>
      </div>
    </div>
    <div class="item no-activated w-20 h-20 text-center bg-white rounded-lg shadow-md">
      <div class>
        <div class="mb-0 pt-2 text-3xl font-bold">C</div>
        <div class="text-12 font-normal">tool</div>
      </div>
    </div>
    <div class="item no-activated w-20 h-20 text-center bg-white rounded-lg shadow-md">
      <div class>
        <div class="mb-0 pt-2 text-3xl font-bold">D</div>
        <div class="text-12 font-normal">tool</div>
      </div>
    </div>
    <div class="item no-activated w-20 h-20 text-center bg-white rounded-lg shadow-md">
      <div class>
        <div class="mb-0 pt-2 text-3xl font-bold">E</div>
        <div class="text-12 font-normal">tool</div>
      </div>
    </div>
    <div class="item no-activated w-20 h-20 text-center bg-white rounded-lg shadow-md">
      <div class>
        <div class="mb-0 pt-2 text-3xl font-bold">F</div>
        <div class="text-12 font-normal">tool</div>
      </div>
    </div>
    <div class="item no-activated w-20 h-20 text-center bg-white rounded-lg shadow-md">
      <div class>
        <div class="mb-0 pt-2 text-3xl font-bold">G</div>
        <div class="text-12 font-normal">tool</div>
      </div>
    </div>
    <div class="item no-activated w-20 h-20 text-center bg-white rounded-lg shadow-md">
      <div class>
        <div class="mb-0 pt-2 text-3xl font-bold">H</div>
        <div class="text-12 font-normal">tool</div>
      </div>
    </div>
    <div class="item no-activated w-20 h-20 text-center bg-white rounded-lg shadow-md">
      <div class>
        <div class="mb-0 pt-2 text-3xl font-bold">I</div>
        <div class="text-12 font-normal">tool</div>
      </div>
    </div>
    <div class="item no-activated w-20 h-20 text-center bg-white rounded-lg shadow-md">
      <div class>
        <div class="mb-0 pt-2 text-3xl font-bold">J</div>
        <div class="text-12 font-normal">tool</div>
      </div>
    </div>
    <div class="item no-activated w-20 h-20 text-center bg-white rounded-lg shadow-md">
      <div class>
        <div class="mb-0 pt-2 text-3xl font-bold">K</div>
        <div class="text-12 font-normal">tool</div>
      </div>
    </div>
    <div class="item no-activated w-20 h-20 text-center bg-white rounded-lg shadow-md">
      <div class>
        <div class="mb-0 pt-2 text-3xl font-bold">L</div>
        <div class="text-12 font-normal">tool</div>
      </div>
    </div>
    <div class="item no-activated w-20 h-20 text-center bg-white rounded-lg shadow-md">
      <div class>
        <div class="mb-0 pt-2 text-3xl font-bold">M</div>
        <div class="text-12 font-normal">tool</div>
      </div>
    </div>
  </div>
</template>

<script>
import interact from "interactjs";

export default {
  data () {
    return {
        moveCounter : 1,
        startX: 0,
        startY: 0,
        screenX: 0,
        screenY: 0
    }
  },
  mounted () {
    let contentElementsRefs = ['labelRef', 'h1Ref'];
    contentElementsRefs.forEach(element => {
        this.initInteract(this.$refs[element]);
    });
  },
  methods : {
    initInteract(selector) {
      interact(selector).draggable({
        // enable inertial throwing
        inertia: true,
        // keep the element within the area of it's parent
        restrict: {
          // restriction: "parent",
          rendOnly: true,
          elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        },
        // enable autoScroll
        autoScroll: true,

        onstart: this.dragStartListener,


        // call this function on every dragmove event
        onmove: this.dragMoveListener,
        // call this function on every dragend event
        onend: this.onDragEnd
      });
    },
    dragStartListener (event) {

          // console.log('event', this.moveCounter++);

          var target = event.target;
          // keep the dragged position in the data-x/data-y attributes
          this.startX =
            (parseFloat(target.getAttribute("data-x")) || this.screenX) +
            event.dx,
          this.startY =
            (parseFloat(target.getAttribute("data-y")) || this.screenY) +
            event.dy;

          // console.log('startX', this.startX);
          // console.log('startY', this.startY);
        },
    dragMoveListener(event) {

      // console.log('event', this.moveCounter++);

      var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x =
          (parseFloat(target.getAttribute("data-x")) || this.screenX) +
          event.dx,
        y =
          (parseFloat(target.getAttribute("data-y")) || this.screenY) +
          event.dy;

      // translate the element
      target.style.webkitTransform = target.style.transform =
        "translate(" + x + "px, " + y + "px)";

      // update the posiion attributes
      target.setAttribute("data-x", x);
      target.setAttribute("data-y", y);
    },
    onDragEnd(event) {

      var target = event.target;
      // console.log('onDragEnd', target);
      // update the state
      // translate the element

      target.style.webkitTransform = /* target.style.transform = */
        "translate(" + this.startX + "px, " + this.startY + "px)";


      // update the posiion attributes
      target.setAttribute("data-x", this.startX);
      target.setAttribute("data-y", this.startY);
      /*
      this.screenX = target.getBoundingClientRect().left;
      this.screenY = target.getBoundingClientRect().top;
      */
    }
  }
};
</script>

<style scoped>
.activated {
  @apply bg-white text-gray-600
  border border-gray-300
  hover:shadow-lg
  text-xl font-bold
  content-center justify-center

  rounded;
}
.no-activated {
  @apply bg-white text-gray-300
  border border-gray-200
  hover:shadow-lg
  text-xl font-bold
  content-center justify-center
  shadow-none
  rounded;
}
</style>
