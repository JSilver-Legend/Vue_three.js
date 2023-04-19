<template>
    <div>
        <li class="text-sm list-none block">
            <div
                class="text-sm flex items-center justify-between mb-2 cursor-pointer bg-gray-200 py-2 px-2"
                @click="toggleShow"
            >
                {{ elements.toggleTitle }}
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
                <div class="w-full px-2 pt-2">
                    <div height="h-100">
                        <div class="mb-4" v-for="(item, index) in elements.elements" :key="index">
                            <CommonItems
                                :title="item.title"
                                :heading="item.heading"
                                :border="item.border"
                                :font="item.font"
                                :align="item.align"
                                :color="item.color"
                                :toggleBtn="item.toggleBtn"
                                :input="item.input"
                                :incrementDecrementIcon="item.incrementDecrementIcon"
                                :vertical="item.vertical"
                                :class="[
                                    item.vertical ? 'inline' : 'flex justify-between',
                                ]"
                            />
                            <div class="border mt-3" v-if="item.border">
                                <span class="border border-r-0 border-l-0 border-t-0 border-b-4"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </ul>
        </li>
    </div>
</template>

<script>
import CommonItems from "./CommonItems.vue";
export default {
    components: {
        CommonItems
    },
    data() {
        return {
            showPlatformNavigation: true,
            border: {
                type: Boolean,
                default: false
            }
        };
    },
    props: {
        elements: {
            type: Object
        }
    },
    methods: {
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
.dropdown-menu {
    transition: 300ms;
}
svg.rotate-90 {
    transform: rotate(90deg);
}
</style>