<template>
  <div class="mt-10 mx-5">
    <div class="flex flex-wrap space-y-2">
      <div  ref="column1" data-type="grid" data-columns="1" class="grid grid-cols-1 z-10 cursor-pointer w-full">
        <div class="item"></div>
      </div>
      <div  ref="column2" data-type="grid" data-columns="2" class="grid grid-cols-2 z-10 cursor-pointer w-full">
        <div class="item"></div>
        <div class="item"></div>
      </div>
      <div  ref="column3" data-type="grid" data-columns="3" class="grid grid-cols-3 z-10 cursor-pointer w-full">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
      <div  ref="column4" data-type="grid" data-columns="4" class="grid grid-cols-4 z-10 cursor-pointer w-full">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>


      <!--
      <div class="z-10 item w-1/3 cursor-pointer"></div>
      <div class="z-10 item w-1/3 cursor-pointer"></div>
      <div class="z-10 item w-1/3 cursor-pointer"></div>
      <div class="z-10 item w-1/4 cursor-pointer"></div>
      <div class="z-10 item w-1/4 cursor-pointer"></div>
      <div class="z-10 item w-1/4 cursor-pointer"></div>
      <div class="z-10 item w-1/4 cursor-pointer"></div>
      <div class="z-10 item w-1/5 cursor-pointer"></div>
      <div class="z-10 item w-1/5 cursor-pointer"></div>
      <div class="z-10 item w-1/5 cursor-pointer"></div>
      <div class="z-10 item w-1/5 cursor-pointer"></div>
      <div class="z-10 item w-1/5 cursor-pointer"></div>
      <div class="z-10 item w-1/6 cursor-pointer"></div>
      <div class="z-10 item w-1/6 cursor-pointer"></div>
      <div class="z-10 item w-1/6 cursor-pointer"></div>
      <div class="z-10 item w-1/6 cursor-pointer"></div>
      <div class="z-10 item w-1/6 cursor-pointer"></div>
      <div class="z-10 item w-1/6 cursor-pointer"></div>
      -->
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
    for(let i = 1; i<=4; i++) {
        this.initInteract(this.$refs['column' + i]);
    }   
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
.item {
  @apply
  h-8
  bg-gray-200 text-gray-100
  border border-gray-400
  text-xl font-bold
  flex items-center content-center justify-center

}
</style>
