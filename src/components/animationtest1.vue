<script>
import gsap from 'gsap';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

let scene;
let layer1Object = null;
let layer2Object = null;

export default {
  data() {
    return {
      container: null,
      camera: null,
      controls: null,
      renderer: null,
      rightText: null,
      leftText: null,
      overheadText: null,
      leftPosition: {x: -20, y: 5, z: 23},
      rightPosition: {x: 5, y: 5, z: -15},
      overheadPosition: {x: -15, y: 5, z: -30},
      tl: null,
      ctx: null,

    };
  },
  methods: {
    init() {
      this.rightText = document.getElementById( 'Nassanlage' );
      this.leftText = document.getElementById( 'KTL-Anlage' );
      this.overheadText = document.getElementById( 'Overhead' );

      this.container = document.getElementById('canvas')
      scene = new THREE.Scene();

      const camera = new THREE.PerspectiveCamera(
        45,
        this.container.clientWidth / this.container.clientHeight,
        0.1,
        1000
      );
      this.camera = camera;
      scene.add(this.camera);

      const mainLight = new THREE.DirectionalLight(0xffffff, 4.0);
      mainLight.position.set(100, 100, 100);
      scene.add(mainLight);

      this.controls = new OrbitControls(this.camera, this.container);
      this.controls.minAzimuthAngle = Math.PI*41/80;
      this.controls.maxAzimuthAngle = Math.PI*41/80;
      this.controls.maxPolarAngle = Math.PI*26/80;
      this.controls.minPolarAngle = Math.PI*26/80;
      this.controls.minDistance = 140;
      this.controls.maxDistance = 140;

      this.renderer = new THREE.WebGLRenderer({ antialias: true })
      this.renderer.setClearColor(0xffffff, 0);
      this.renderer.setSize(this.container.clientWidth, this.container.clientHeight)
      this.renderer.setPixelRatio(window.devicePixelRatio)
      this.renderer.gammaFactor = 2.2
      this.renderer.outputEncoding = THREE.sRGBEncoding
      this.renderer.physicallyCorrectLights = true
      this.container.appendChild(this.renderer.domElement);

      this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);

      const loader = new GLTFLoader();
      // load building
      loader.load(
        "models/building_rev01.glb",
        gltf => {
          layer1Object = gltf.scene;
          scene.add(layer1Object);
          layer1Object.position.z = 12;
          layer1Object.position.x = -9;
          if (layer2Object) {
            this.animation();
          }
        },
        undefined,
        undefined
      )

      // load 2nd level
      loader.load(
        "models/2nd_level_2children_01.gltf",
        gltf => {
          layer2Object = gltf.scene;
          layer2Object.traverse((item) => {
            if (item.isMesh) {
              console.log('item.isMesh: ', item);

              item.material.transparent = true;
              item.material.opacity = 0.6;
            }
            if (layer1Object) {
              this.animation();
            }
          })
          scene.add(layer2Object);
          layer2Object.position.z = 12;
          layer2Object.position.x = -9;
        },
        undefined,
        undefined
      )

      this.renderer.setAnimationLoop(() => {
        this.render()
        this.updateScreenPosition()
      })
    },
    updateScreenPosition() {
      const vectorLeft = new THREE.Vector3(this.leftPosition.x, this.leftPosition.y, this.leftPosition.z);
      const vectorRight = new THREE.Vector3(this.rightPosition.x, this.rightPosition.y, this.rightPosition.z);
      const vectorOverhead = new THREE.Vector3(this.overheadPosition.x, this.overheadPosition.y, this.overheadPosition.z);
      const canvas = this.renderer.domElement;

      vectorRight.project(this.camera);
      vectorLeft.project(this.camera);
      vectorOverhead.project(this.camera);

      vectorRight.x = Math.round((0.5 + vectorRight.x / 2) * (canvas.width / window.devicePixelRatio));
      vectorRight.y = Math.round((0.5 - vectorRight.y / 2) * (canvas.height / window.devicePixelRatio));
      vectorLeft.x = Math.round((0.5 + vectorLeft.x / 2) * (canvas.width / window.devicePixelRatio));
      vectorLeft.y = Math.round((0.5 - vectorLeft.y / 2) * (canvas.height / window.devicePixelRatio));
      vectorOverhead.x = Math.round((0.5 + vectorOverhead.x / 2) * (canvas.width / window.devicePixelRatio));
      vectorOverhead.y = Math.round((0.5 - vectorOverhead.y / 2) * (canvas.height / window.devicePixelRatio));

      this.rightText.style.top = `${vectorRight.y}px`;
      this.rightText.style.left = `${vectorRight.x}px`;
      this.leftText.style.top = `${vectorLeft.y}px`;
      this.leftText.style.left = `${vectorLeft.x}px`;
      this.overheadText.style.top = `${vectorOverhead.y}px`;
      this.overheadText.style.left = `${vectorOverhead.x}px`;
    },
    toggleAnimation1() {
      console.log('this.camera: ', this.camera);
      this.tl1.reversed(!this.tl1.reversed());
      if (this.tl1.reversed()) {
        this.leftText.disabled = false;
        this.overheadText.disabled = false;
      } else {
        this.leftText.disabled = true;
        this.overheadText.disabled = true;
      }
      console.log('this.camera: ', this.camera);
    },
    toggleAnimation2() {
      this.tl2.reversed(!this.tl2.reversed());
      if (this.tl2.reversed()) {
        this.rightText.disabled = false;
        this.overheadText.disabled = false;
      } else {
        this.rightText.disabled = true;
        this.overheadText.disabled = true;
      }
    },
    toggleAnimation3() {
      this.tl3.reversed(!this.tl3.reversed());
      if (this.tl3.reversed()) {
        this.rightText.disabled = false;
        this.leftText.disabled = false;
      } else {
        this.rightText.disabled = true;
        this.leftText.disabled = true;
      }
    },
    render () {
      this.renderer.render(scene, this.camera);
      this.controls.update();
    },
    animation() {
      this.ctx = gsap.context(() => {
        const q = gsap.utils.selector(this.$el);
        const card1 = q('.card1')
        const card2 = q('.card2')

        // nassanlage
        this.tl1 = gsap
          .timeline()
          .to(this.controls, {  
            maxDistance: 210, 
            minDistance: 210, 
            maxPolarAngle: Math.PI*26/80,
            minPolarAngle: Math.PI*26/80,
            maxAzimuthAngle: Math.PI*21/40,
            minAzimuthAngle: Math.PI*21/40,
            delay: 0, 
            duration: 0.5, 
            ease: 'none',
          }, 0.0)
          .to(this.controls.target, { z: -60, x: -10, delay: 0, duration: 0.5, ease: 'none'}, 0.0)
          .to(layer2Object.position, {y: 25, duration: 0.5})
          .to(card1[0], { opacity: 1, x: 40, scaleX: 1}, 0.5)
          .reverse()
          
        // ktl
        this.tl2 = gsap
          .timeline()
          .to(this.controls, {  
            maxDistance: 210, 
            minDistance: 210, 
            maxPolarAngle: Math.PI*27/80,
            minPolarAngle: Math.PI*27/80,
            maxAzimuthAngle: Math.PI*19/40,
            minAzimuthAngle: Math.PI*19/40,
            delay: 0, 
            duration: 0.5, 
            ease: 'none',
          }, 0.0)
          .to(this.controls.target, { x: -15, z: 70, delay: 0, duration: 0.5, ease: 'none'}, 0.0)
          .to(layer2Object.position, {y: 25, duration: 0.5})
          .to(card2[0], { opacity: 1, x: -40, scaleX: 1}, 0.5)
          .reverse()

        // overhead
        this.tl3 = gsap
          .timeline()
          .to(this.controls, {  
            maxDistance: 210, 
            minDistance: 210, 
            minPolarAngle: -Math.PI/4, 
            maxPolarAngle: -Math.PI/4, 
            maxAzimuthAngle: Math.PI*355/1000,
            minAzimuthAngle: Math.PI*355/1000,
            delay: 0, 
            duration: 0.5, 
            ease: 'none',
          }, 0.0)
          .to(this.controls.target, { x: -55, z: 70}, 0.5)
          .to(card2[0], { opacity: 1, x: -40, scaleX: 1}, 0.5)
          .reverse()
      })
    }
  },
  mounted() {
    this.init();
  },
  onUnmounted() {
    this.ctx.revert()
  }
};
</script>

<template>
  <div class='relative w-full h-screen pattern-dots pattern-gray-300 pattern-bg-gray-200 pattern-size-2 pattern-opacity-100'>
    <div ref="canvas" id="canvas" class='fixed top-0 left-0 w-full h-full bg-opacity-0'></div>

    <!-- card 1 -->
    <div class="absolute top-60 right-40 bg-white shadow-lg w-5/12 h-[70%] scale-x-0 card1">
      <!-- header -->
      <div class="py-2 text-center">
        <div class="font-semibold">Nassanlage</div>
        <div class="text-xs text-gray-500">1 board, 1 card</div>
      </div>
      <!-- topBar -->
      <div class="grid grid-cols-5 px-0 py-4 bg-gray-100">
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
            <div class="text-xs text-center text-gray-500">1 board, 1 card</div>
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
            <div class="text-xs text-center text-gray-500">1 board, 1 card</div>
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
            <div class="text-xs text-center text-gray-500">1 board, 1 card</div>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-between">
        <!-- content -->
        <div class="flex-1">
          <div class="px-12 mt-8 text-sm">
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
    <div class="absolute w-5/12 scale-x-0 bg-white shadow-sm top-60 left-40 h-[70%] card2">
      <!-- header -->
      <div class="text-center">
        <div class="font-semibold">KTL-Anlage</div>
        <div class="text-xs text-gray-500">1 board, 1 card</div>
      </div>
      <!-- content -->
      <div class="">
        <div class="p-5 mt-3 space-y-2 text-sm border">
          <div class="font-semibold">VA220802-1</div>
          <div>10.08.2022</div>
          <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam nobis quia, voluptate cupiditate quasi
            sint laborum neque ut nemo modi.
          </div>
        </div>
      </div>
      <!-- footer -->
      <div class="flex items-center px-5 py-2 mt-2 space-x-2 bg-gray-100 cursor-pointer">
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
          <div class="text-xs text-gray-500">1 board, 1 card</div>
        </div>
      </div>
    </div>

    <div class="absolute right-5 top-5 w-[7%]">
      <img class="" src="/static/img/logo_black.png">

    </div>

    <!-- text -->
    <button id="Nassanlage" class="absolute top-0 left-0 z-10 text-white text-lg font-bold cursor-pointer hover:text-amber-200 disabled:text-white disabled:text-opacity-50 disabled:cursor-default" @click="toggleAnimation1">Nassanlage</button>
    <button id="KTL-Anlage" class="absolute top-0 left-0 z-10 text-white text-lg font-bold cursor-pointer hover:text-amber-200 disabled:text-white disabled:text-opacity-50 disabled:cursor-default" @click="toggleAnimation2">KTL-Anlage</button>
    <button id="Overhead" class="absolute top-0 left-0 z-10 text-white text-lg font-bold cursor-pointer hover:text-amber-200 disabled:text-white disabled:text-opacity-50 disabled:cursor-default" @click="toggleAnimation3">Overhead</button>
  </div>
</template>
