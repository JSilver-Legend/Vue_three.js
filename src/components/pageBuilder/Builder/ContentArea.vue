<template>
    <div class="min-h-screen bg-cover bg">
        <div class="flex justify-between space-x-3">
            <div class="relative w-5/6 z-10 mt-8 mb-8">
                <template v-if="componentContainers && componentContainers.length > 0">
                    <template
                        v-for="(
                            componentContainer, index
                        ) in componentContainers"
                        :key="index"
                    >
                        <div
                            :id="'row' + index"
                            @mouseover.stop="onMouseover('row' + index)"
                            @mouseleave.self.stop="onMouseleave(null)"
                            :class="'relative w-full flex items-center border border-transparent ' + (hoverId == 'row' + index ? 'hover:border-red-600' : '')"
                        >
                            <!-- top add button -->
                            <div
                                v-if="hoverId == 'row' + index"
                                class="z-10 absolute flex justify-center w-full"
                                style="top: -22px"
                                @click="addRow(index)"
                            >
                                <div
                                    class="flex justify-center bg-primary opacity-80 w-14 cursor-pointer"
                                >
                                    <div
                                        class="font-bold text-white px-0 py-0"
                                        style="font-size: 28px; line-height: 1.3rem; padding-top: 1px;"
                                    >+</div>
                                </div>
                            </div>

                            <!-- below add row button -->
                            <div
                                @click="addRow(index + 1)"
                                v-if="hoverId == 'row' + index"
                                class="z-10 absolute flex items-center justify-center w-full add cursor-pointer"
                                style="bottom: -22px"
                            >
                                <div class="flex justify-center bg-primary opacity-80 w-14">
                                    <div
                                        class="font-bold text-white px-0 py-0"
                                        style="font-size: 28px; line-height: 1.3rem; padding-top: 1px;"
                                    >+</div>
                                </div>
                            </div>

                            <!-- delete button -->
                            <div
                                @click="removeRow(index)"
                                class="absolute z-10 right-0 -bottom-7 text-white cursor-pointer"
                                v-if="hoverId == 'row' + index"
                            >
                                <span class="bg-primary text-white text-11 text-center p-1 block">
                                    <svg
                                        style="color:white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="none"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="stroke-current text-primary"
                                    >
                                        <polyline points="3 6 5 6 21 6" />
                                        <path
                                            d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                                        />
                                        <line x1="10" y1="11" x2="10" y2="17" />
                                        <line x1="14" y1="11" x2="14" y2="17" />
                                    </svg>
                                </span>
                            </div>

                            <!-- row handle -->
                            <div class="absolute right-0 flex items-center justify-end">
                                <div
                                    v-if="hoverId == 'row' + index"
                                    class="flex items-center justify-center w-8 h-8 bg-primary pl-1 z-10 enlarge rounded-l-3xl cursor-pointer"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#fff"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="object-contain w-6 h-6 text-white transform rotate-45 stroke-white scale-75"
                                    >
                                        <path
                                            d="M3.8 3.8l16.4 16.4M20.2 3.8L3.8 20.2M15 3h6v6M9 3H3v6M15 21h6v-6M9 21H3v-6"
                                        />
                                    </svg>
                                </div>
                            </div>

                            <div class="ml-10 mr-10 w-full bg-white">
                                <container
                                    :element="componentContainer"
                                    :entityData="entityData"
                                />
                            </div>
                        </div>
                    </template>
                </template>
                <template v-else>
                    <div class="bg-white ml-8 mr-8 flex h-20 items-center">
                        <!-- add row button -->
                        <div class="z-10 absolute flex justify-center w-full" @click="addRow(0)">
                            <div
                                class="flex justify-center bg-primary opacity-80 w-30 cursor-pointer"
                            >
                                <div
                                    class="font-bold text-white px-0 py-0"
                                    style="font-size: 12px;  padding: 5px 10px; "
                                >Add row</div>
                            </div>
                        </div>
                    </div>
                </template>

                <div class="ml-8 mr-8 flex h-20 items-center">
                    <div class="z-10 absolute flex justify-left w-full">
                        <div class="flex bg-primary opacity-80 w-30 cursor-pointer">
                            <div
                                @click="jsonDialog = !jsonDialog"
                                class="font-bold text-white px-0 py-0"
                                style="font-size: 12px; padding: 10px 20px; "
                            >Show JSON</div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                style="margin-left:0 !important;"
                v-if="jsonDialog"
                class="w-screen h-screen overflow-x-hidden overflow-y-auto left-0 top-0 fixed z-50 outline-none focus:outline-none justify-center items-center"
            >
                <div class="flex w-full px-4 py-2 bg-primary text-left sm:px-6 fixed">
                    <div class="flex-grow">
                        <h2
                            class="text-sm leading-6 font-medium uppercase text-white"
                        >Project card form</h2>
                    </div>
                    <div class="flex-none w-3">
                        <span
                            class="material-symbols-outlined align-middle pr-2 text-right text-white cursor-pointer"
                            v-on:click="jsonDialog = !jsonDialog"
                        >close</span>
                    </div>
                </div>
                <div class="bg-white w-full h-full py-12 px-4 overflow-scroll">
                    <pre> {{ componentContainers }} </pre>
                </div>
            </div>

            <div class="bg-gray-50 ml-0" style="width: 385px">
                <RightAreaToolBar @onMouseclick="onMouseclick" :selectedId="selectedId" />
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref, provide, onMounted } from 'vue';


import interact from "interactjs";
import RightAreaToolBar from "./RightToolAreaBar.vue";


provide('isBuilder', true);

const entityData = ref({})

const hoverId = ref(null)
provide('hoverId', hoverId)

const selectedId = ref(null)
provide('selectedId', selectedId)

const componentContainers = ref([])
const selectedElement = ref(null)

const jsonDialog = ref(false)

const onMouseclick = (id) => {
    console.log('onMouseclick', id);
    selectedId.value = id ? id : null;
    if (id) {
        setSelectedElement(componentContainers.value, id);
    }
}
provide('onMouseclick', onMouseclick)

const onMouseover = (id) => {
    hoverId.value = id;
}
provide('onMouseover', onMouseover)

const onMouseleave = () => {
    hoverId.value = null;
}
provide('onMouseleave', onMouseleave)

const getUniqueId = () => {
    return 'id' + (new Date()).getTime() + Math.random();
}

const setSelectedElement = (node, id) => {
    node.forEach((nodeItem, index) => {
        console.log('addElement | nodeItem.id == containerId', nodeItem.id, id);
        if (nodeItem.id == id) {
            selectedElement.value = node[index];
        } else {
            if (node[index].children && node[index].children.length > 0) {
                setSelectedElement(node[index].children, id);
            }
        }
    });
}

const addRow = (index) => {
    componentContainers.value.splice(index, 0, getElementJSON('container'));
}

const removeRow = (index) => {
    componentContainers.value.splice(index, 1);
}

const getElementJSON = (type, element) => {
    console.log('getElementJSON | type, element', type, element);
    if (type == 'container') {
        return {
            id: getUniqueId(),
            description: "mwContentHead",
            type: "container",
            class: "bg-white h-20",
            children: [
            ]
        }
    } else if (type == 'staticHtmlTag') {
        return {
            id: this.getUniqueId(),
            type: "element",
            elementType: "staticHtmlTag",
            tag: element.getAttribute('data-tag'),
            text: element.getAttribute('data-tag'),
            class: ""
        }
    } else if (type == 'grid') {
        let columns = element.getAttribute('data-columns');
        let jsonStruc = {
            id: this.getUniqueId(),
            description: "grid container",
            type: "container",
            class: `grid grid-cols-${columns}`,
            children: [
            ]
        };
        while (columns--) {
            jsonStruc.children.push({
                id: this.getUniqueId(),
                description: "columns",
                type: "container",
                class: `h-20`,
                children: [
                ]
            });
        }
        return jsonStruc;
    }
}

const onDrop = (event) => {
    // console.log(event)
    let draggableElement = event.relatedTarget;
    // console.log('event.relatedTarget', event.relatedTarget);
    // console.log('event.relatedTarget.data-type', event.relatedTarget.getAttribute('data-type'));
    draggableElement.classList.add('hidden');
    // console.log("Dropped " + event.relatedTarget.id + " in " + event.target.id);
    console.log("Dropped in " + event.target.id);
    addElement(componentContainers.value, event.target.id, event.relatedTarget);
    draggableElement.classList.remove('hidden');
}

const addElement = (node, containerId, element) => {
    node.forEach((nodeItem, index) => {
        console.log('addElement | nodeItem.id == containerId', nodeItem.id, containerId);
        if (nodeItem.id == containerId) {
            if (element.getAttribute('data-type') == 'grid') {
                node[index] = getElementJSON(element.getAttribute('data-type'), element);
            } else {
                node[index].children.push(getElementJSON(element.getAttribute('data-type'), element));
            }
        } else {
            if (node[index].children && node[index].children.length > 0) {
                addElement(node[index].children, containerId, element);
            }
        }
    });

    /*
    console.log('addElement | node', node);
    if(node[0].id == containerId) {
        // console.log(node[0]);
        // console.log(this.getElementJSON(element.getAttribute('data-type'), element));
        node[0].children.push(this.getElementJSON(element.getAttribute('data-type'), element));
    }
    */
}

onMounted(() => initInteract())
const initInteract = () => {
    interact(".dropzone").dropzone({
        // only accept elements matching this CSS selector
        // accept: '#yes-drop',
        // Require a 75% element overlap for a drop to be possible
        // overlap: 0.75,

        // listen for drop related events:

        /*
        ondropactivate: function (event) {
            // add active dropzone feedback
            event.target.classList.add("drop-active");
        },
        ondragenter: function (event) {
            var draggableElement = event.relatedTarget
            var dropzoneElement = event.target

            // feedback the possibility of a drop
            dropzoneElement.classList.add('drop-target')
            draggableElement.classList.add('can-drop')
            // draggableElement.textContent = 'Dragged in'
        },
        ondragleave: function (event) {
            // remove the drop feedback style
            event.target.classList.remove('drop-target')
            event.relatedTarget.classList.remove('can-drop')
            // event.relatedTarget.textContent = 'Dragged out'
        },
        */
        ondrop: onDrop, /* function (event) {
                    // event.relatedTarget.textContent = 'Dropped'
                    // console.log(event.relatedTarget);
                    // var dropzoneElement = event.target
                    // console.log('dropzoneElement', dropzoneElement);
                         // console.log(event.relatedTarget.id);
                }, */
        /*
        ondropdeactivate: function (event) {
            // remove active dropzone feedback
            event.target.classList.remove("drop-active");
            event.target.classList.remove("drop-target");
        },
        */
    });

    /*
    interact('.drag-drop')
    .draggable({
        inertia: true,
        modifiers: [
            interact.modifiers.restrictRect({
                restriction: 'parent',
                endOnly: true
            })
        ],
        autoScroll: true,
        // dragMoveListener from the dragging demo above
        // listeners: { move: dragMoveListener }
    });
    */
}
</script>

<style scoped>
.bg {
    background: url(../../../assets/img/transparent.png);
}
</style>

<style scoped>
.drop-active {
    border-color: #aaa;
}

.drop-target {
    background-color: #29e;
    border-color: #fff;
    border-style: solid;
}

.drag-drop {
    display: inline-block;
    min-width: 40px;
    padding: 2em 0.5em;
    margin: 1rem 0 0 1rem;

    color: #fff;
    background-color: #29e;
    border: solid 2px #fff;

    touch-action: none;
    transform: translate(0px, 0px);

    transition: background-color 0.3s;
}

.drag-drop.can-drop {
    color: #000;
    background-color: #4e4;
}
</style>
