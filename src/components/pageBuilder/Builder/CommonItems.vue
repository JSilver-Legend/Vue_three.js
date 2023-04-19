<template>
  <div :class="{ 'flex items-center': !vertical }">
    <p class="text-gray-500 text-xs">{{ title }}</p>
    <div>
      <!-- Heading Type -->
      <div class="flex">
        <div class="headings" v-if="heading">
          <span class="p-1 mr-1 border border-rounded border-gray-200 text-gray-600 text-xs">H1</span>
          <span class="p-1 mr-1 border border-rounded border-gray-200 text-gray-600 text-xs">H2</span>
          <span class="p-1 mr-1 border border-rounded border-gray-200 text-gray-600 text-xs">H3</span>
          <span class="p-1 mr-1 border border-rounded border-gray-200 text-gray-600 text-xs">H4</span>
        </div>
      </div>

      <!-- Font Family -->
      <div class="dropdown" v-if="font">
        <li class="font-semibold text-sm list-none block">
          <div
            class="flex items-center justify-between cursor-pointer border border-rounded border-gray-200 py-1 px-1 text-gray-600 text-xs"
            @click="toggleShow"
          >
            Roboto
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              :class="{ 'rotate-90': showPlatformNavigation }"
              class="dropdown-menu"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            </svg>
          </div>
          <ul class="overflow-hidden dropdown-menu font-normal" :class="this.class">
            <div class="w-full pl-1 bg-white rounded-lg shadow-md">
              <div height="h-100">
                <li class="text-gray-600 text-xs pt-1">Roboto</li>
                <li class="text-gray-600 text-xs pt-1">Arial</li>
              </div>
            </div>
          </ul>
        </li>
      </div>

      <!-- increment Decrement Icon -->
      <div
        class="increment-decrement"
        :class="{ 'grid grid-cols-2 gap-4': vertical }"
        v-if="incrementDecrementIcon"
      >
        <div :class="vertical ? 'mt-1 col-span-2 ' : ''">
          <button class="decrement border border-gray-300 px-2" @click.prevent="decrement()">-</button>
          <input
            class="border border-gray-300 w-6 bg-gray-200 text-center text-12"
            :min="min"
            :max="max"
            :step="step"
            v-model.number="numberVal"
          />
          <button class="increment border border-gray-300 px-2" @click.prevent="increment()">+</button>
        </div>
      </div>

      <!-- Color Palette -->
      <div v-if="color">
        <span class="py-1 px-1 cursor-pointer border border-gray-200">
          <span class="py-0 px-2 bg-black"></span>
        </span>
      </div>

      <!-- Text Align -->
      <div v-if="align" class="flex">
        <div class="py-1 px-1 h-7 mr-1 cursor-pointer border border-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-activity"
          >
            <line x1="18" y1="10" x2="6" y2="10" />
            <line x1="21" y1="6" x2="3" y2="6" />
            <line x1="21" y1="14" x2="3" y2="14" />
            <line x1="18" y1="18" x2="6" y2="18" />
          </svg>
        </div>
        <div class="p-1 mr-1 h-7 cursor-pointer border border-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-activity"
          >
            <line x1="21" y1="10" x2="3" y2="10" />
            <line x1="21" y1="6" x2="3" y2="6" />
            <line x1="21" y1="14" x2="3" y2="14" />
            <line x1="21" y1="18" x2="3" y2="18" />
          </svg>
        </div>
        <div class="p-1 h-7 cursor-pointer border border-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-activity"
          >
            <line x1="17" y1="10" x2="3" y2="10" />
            <line x1="21" y1="6" x2="3" y2="6" />
            <line x1="21" y1="14" x2="3" y2="14" />
            <line x1="17" y1="18" x2="3" y2="18" />
          </svg>
        </div>
      </div>

      <!-- Toggle -->
      <div v-if="toggleBtn">
        <div
          class="flex cursor-pointer justify-between items-center"
          @click="toggleActive = !toggleActive"
        >
          <div
            class="w-9 h-4 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out"
            :class="{ 'bg-green-400': toggleActive }"
          >
            <div
              class="bg-white w-3 h-3 rounded-full shadow-md transform duration-200 ease-in-out"
              :class="{ 'translate-x-4': toggleActive, }"
            ></div>
          </div>
        </div>
      </div>

      <!-- Text Input -->
      <div v-if="input" class="w-full">
        <input
          :class="vertical ? 'w-full mt-1' : ''"
          type="text"
          placeholder="u_content_header_1"
          class="flex items-center text-12 border border-grey round-lg p-1"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    vertical: {
      type: Boolean
    },
    heading: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    font: {
      type: Boolean
    },
    align: {
      type: Boolean
    },
    color: {
      type: Boolean
    },
    toggleBtn: {
      type: Boolean
    },
    input: {
      type: Boolean
    },
    incrementDecrementIcon: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showPlatformNavigation: false,
      min: 0,
      max: 50,
      numberVal: 4,
      step: 1,
      toggleActive: true
    };
  },
  methods: {
    decrement() {
      if (this.numberVal - this.step >= this.min) {
        this.numberVal = this.numberVal - this.step;
      }
      return false;
    },
    increment() {
      if (this.numberVal + this.step <= this.max) {
        this.numberVal = this.numberVal + this.step;
      }
      return false;
    },
    toggleShow() {
      this.showPlatformNavigation = !this.showPlatformNavigation;
    }
  },
  computed: {
    class() {
      return this.showPlatformNavigation ? this.height : "h-0";
    }
  }
};
</script>

<style>
</style>
