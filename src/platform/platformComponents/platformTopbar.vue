<template>
  <template v-for="(componentContainer, index) in componentContainers" :key="index">
    <container :element="componentContainer" :entityData="entityData" />
  </template>
</template>

<script setup>
import { ref, provide } from "vue"

import { useDynamicAppsStore } from "@/store/dynamicApps"

const dynamicAppsStore = useDynamicAppsStore()

const componentContainers = ref([
  {
    "type": "container",
    "containerType": "div",
    "class": "w-full h-12 flex bg-white dark:bg-gray-700 justify-between items-center border-b border-gray-300 shadow",
    "children": [
      {
        "type": "container",
        "class": "h-full flex items-center",
        "children": [
          {
            "description": "dialog card header title",
            "type": "navEvent",
            "eventType": "showHideSidebar",
            "elementType": "staticHtmlTag",
            "tag": "div",
            "text": "menu",
            "class": "material-symbols-outlined text-gray-400 dark:text-gray-200 pl-6"
          }
        ]
      },
      {
        "type": "container",
        "class": "h-full flex items-center pr-6",
        "children": [
          {
            "description": "toggle button light/dark",
            "type": "navEvent",
            "eventType": "themeSwitch",
            "theme": "themeClassExchange",
            "elementType": "toggleButton",
            "parentClass": "pt-3",
            "children": [
              {
                "description": "stage1",
                "value": "light",
                "class": "",
                "children": [
                  {
                    "type": "element",
                    "elementType": "staticHtmlTag",
                    "text": "clear_day",
                    "class": "material-symbols-outlined text-[24px] text-gray-500 dark:text-gray-200 mr-2 cursor-pointer"
                  }
                ]
              },
              {
                "description": "stage2",
                "value": "dark",
                "class": "",
                "children": [
                  {
                    "type": "element",
                    "elementType": "staticHtmlTag",
                    "text": "mode_night",
                    "class": "material-symbols-outlined text-[24px] text-gray-500 dark:text-gray-200 mr-2 cursor-pointer"
                  }
                ]
              }
            ]
          },
          {
            "description": "theme panel trigger arrow",
            "type": "container",
            "containerType": "a",
            "class": "",
            "children": [
              {
                "type": "navEvent",
                "elementType": "staticHtmlTag",
                "eventType": "dropdownPanelTrigger",
                "target": "themeTrigger",
                "key": "themeTrigger",
                "text": "expand_more",
                "class": "material-symbols-outlined text-[18px] text-gray-500 dark:text-gray-200 mr-3 pt-4 cursor-pointer"
              }
            ]
          },
          {
            "description": "theme panel",
            "type": "container",
            "containerType": "div",
            "class": "relative inline-block text-left",
            "children": [
              {
                "type": "dropdownPanel",
                "key": "themeTrigger",
                "id": "themeTrigger",
                "tag": "div",
                "class": "origin-top-right absolute right-0 mt-7 w-24 h-auto rounded-sm shadow bg-gray-100 dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none",
                "children": [
                  {
                    "type": "container",
                    "containerType": "div",
                    "class": "",
                    "children": [
                      {
                        "description": "panel container menu items",
                        "type": "container",
                        "containerType": "div",
                        "class": "py-1",
                        "children": [
                          {
                            "description": "color theme label",
                            "type": "container",
                            "containerType": "div",
                            "class": "flex justify-start items-center text-black dark:text-gray-100 border-b border-grey-500",
                            "children": [
                              {
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "color theme",
                                "class": "block pl-1 py-2 text-12 font-bold"
                              }
                            ]
                          },
                          {
                            "description": "colorTheme default",
                            "type": "navEvent",
                            "eventType": "themeSwitch",
                            // "elementType": "staticHtmlTag",
                            "theme": "colorTheme",
                            "value": "default",
                            "class": "flex flex-row w-full h-6 justify-start text-black border-b border-grey-500 cursor-pointer hover:ring-4 hover:ring-yellow-400",
                            "children": [
                              {
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "",
                                "class": "w-1/4 h-6 bg-red-300",

                              },
                              {
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "",
                                "class": "w-1/4 h-6 bg-red-600",

                              },
                              {
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "",
                                "class": "w-1/4 h-6 bg-yellow-600",

                              },
                              {
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "",
                                "class": "w-1/4 h-6 bg-gray-600",

                              }
                            ]
                          },
                          {
                            "description": "colorTheme yellow",
                            "type": "navEvent",
                            "eventType": "themeSwitch",
                            // "elementType": "staticHtmlTag",
                            "theme": "colorTheme",
                            "value": "yellow",
                            "class": "flex flex-row justify-start text-black border-b border-grey-500 cursor-pointer mt-2 hover:ring-4 hover:ring-yellow-400",
                            "children": [
                              {
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "",
                                "class": "w-1/4 h-6 bg-blue-300",
                              },
                              {
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "",
                                "class": "w-1/4 h-6 bg-blue-600",
                              },
                              {
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "",
                                "class": "w-1/4 h-6 bg-green-600",
                              },
                              {
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "",
                                "class": "w-1/4 h-6 bg-gray-300",

                              }
                            ]
                          },

                          {
                            "description": "form theme label",
                            "type": "container",
                            "containerType": "div",
                            "class": "flex justify-start items-center text-black border-b border-grey-500 ",
                            "children": [
                              {
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "form theme",
                                "class": "block pl-1 py-2 text-12 font-bold"
                              }
                            ]
                          },
                          {
                            "description": "formTheme default",
                            "type": "container",
                            "containerType": "a",
                            "class": "flex flex-row justify-start items-center text-black border-b border-grey-500 cursor-pointer hover:ring-4 hover:ring-yellow-400",
                            "children": [
                              {
                                "type": "navEvent",
                                "eventType": "themeSwitch",
                                "elementType": "staticHtmlTag",
                                "theme": "formTheme",
                                "value": "default",
                                "tag": "span",
                                "text": "default",
                                "class": "w-full h-6 text-gray-700 text-13 pl-1 py-1",
                              }
                            ]
                          },
                          {
                            "description": "formTheme yellow",
                            "type": "container",
                            "containerType": "a",
                            "class": "flex flex-row justify-start items-center text-black border-b border-grey-500 cursor-pointer hover:ring-4 hover:ring-yellow-400",
                            "children": [
                              {
                                "type": "navEvent",
                                "eventType": "themeSwitch",
                                "elementType": "staticHtmlTag",
                                "theme": "formTheme",
                                "value": "yellow",
                                "tag": "span",
                                "text": "yellow",
                                "class": "w-full h-6 text-gray-700 text-13 pl-1 py-1"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "notifications trigger",
            "type": "navEvent",
            "eventType": "dropdownPanelTrigger",
            "elementType": "staticHtmlTag",
            "target": "notificationTrigger",
            "key": "notificationTrigger",
            "text": "notifications",
            "class": "material-symbols-outlined text-[22px] text-gray-500 dark:text-gray-100 mr-6 cursor-pointer"
          },
          {
            "description": "notification panel",
            "type": "container",
            "containerType": "div",
            "class": "relative inline-block text-left",
            "children": [
              {
                "type": "dropdownPanel",
                "key": "notificationTrigger",
                "id": "notificationTrigger",
                "tag": "div",
                "class": "origin-top-right absolute right-0 mt-7 w-72 rounded-sm shadow bg-gray-100 ring-1 ring-black ring-opacity-5 focus:outline-none",
                "children": [
                  {
                    "description": "panel container menu items",
                    "type": "container",
                    "containerType": "div",
                    "class": "py-4",
                    "children": [
                      {
                        "description": "menu item 1",
                        "type": "container",
                        "containerType": "div",
                        "class": "flex justify-start items-center text-black border-b border-grey-500 bg-white",
                        "children": [
                          {
                            "type": "element",
                            "elementType": "staticHtmlTag",
                            "tag": "div",
                            "text": "@dom added content to panel",
                            "class": "block pl-4 py-6 text-13"
                          },
                          {
                            "type": "element",
                            "elementType": "staticHtmlTag",
                            "tag": "div",
                            "text": "user:last_name",
                            "class": "block pl-2 py-6 text-13"
                          }
                        ]
                      },
                      {
                        "description": "menu item 2",
                        "type": "container",
                        "containerType": "div",
                        "class": "flex justify-start items-center text-black border-b border-grey-500 bg-white",
                        "children": [
                          {
                            "type": "element",
                            "elementType": "staticHtmlTag",
                            "tag": "div",
                            "text": "@dom added content to panel",
                            "class": "block pl-4 py-6 text-13"
                          },
                          {
                            "type": "element",
                            "elementType": "staticHtmlTag",
                            "tag": "div",
                            "text": "user:last_name",
                            "class": "block pl-2 py-6 text-13"
                          }
                        ]
                      },
                      {
                        "description": "menu item 3",
                        "type": "container",
                        "containerType": "div",
                        "class": "flex justify-start items-center text-black border-b border-grey-500 bg-white",
                        "children": [
                          {
                            "type": "element",
                            "elementType": "staticHtmlTag",
                            "tag": "div",
                            "text": "@dom added content to panel",
                            "class": "block pl-4 py-6 text-13"
                          },
                          {
                            "type": "element",
                            "elementType": "staticHtmlTag",
                            "tag": "div",
                            "text": "user:last_name",
                            "class": "block pl-2 py-6 text-13"
                          }
                        ]
                      },
                      {
                        "description": "menu item 4",
                        "type": "container",
                        "containerType": "div",
                        "class": "flex justify-start items-center text-black border-b border-grey-500 bg-white",
                        "children": [
                          {
                            "type": "element",
                            "elementType": "staticHtmlTag",
                            "tag": "div",
                            "text": "@dom added content to panel",
                            "class": "block pl-4 py-6 text-13"
                          },
                          {
                            "type": "element",
                            "elementType": "staticHtmlTag",
                            "tag": "div",
                            "text": "user:last_name",
                            "class": "block pl-2 py-6 text-13"
                          }
                        ]
                      },
                      {
                        "description": "menu item 5",
                        "type": "container",
                        "containerType": "div",
                        "class": "flex justify-start items-center text-black border-b border-grey-500 bg-white",
                        "children": [
                          {
                            "type": "element",
                            "elementType": "staticHtmlTag",
                            "tag": "div",
                            "text": "@dom added content to panel",
                            "class": "block pl-4 py-6 text-13"
                          },
                          {
                            "type": "element",
                            "elementType": "staticHtmlTag",
                            "tag": "div",
                            "text": "user:last_name",
                            "class": "block pl-2 py-6 text-13"
                          }
                        ]
                      },
                      {
                        "description": "menu item 6",
                        "type": "container",
                        "containerType": "div",
                        "class": "flex justify-start items-center text-black border-b border-grey-500 bg-white",
                        "children": [
                          {
                            "type": "element",
                            "elementType": "staticHtmlTag",
                            "tag": "div",
                            "text": "@dom added content to panel",
                            "class": "block pl-4 py-6 text-13"
                          },
                          {
                            "type": "element",
                            "elementType": "staticHtmlTag",
                            "tag": "div",
                            "text": "user:last_name",
                            "class": "block pl-2 py-6 text-13"
                          }
                        ]
                      },
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "profile panel trigger img",
            "type": "container",
            "containerType": "a",
            "class": "",
            "children": [
              {
                "type": "navEvent",
                "eventType": "dropdownPanelTrigger",
                "elementType": "staticHtmlTag",
                "target": "profileTrigger",
                "key": "profileTrigger",
                "tag": "img",
                "src": "/static/img/avatar_dom_01.jpg",
                "class": "h-9 w-9 rounded-full cursor-pointer"
              }
            ]
          },
          {
            "description": "profile panel",
            "type": "container",
            "containerType": "div",
            "class": "relative inline-block text-left z-50",
            "children": [
              {
                "type": "dropdownPanel",
                "key": "profileTrigger",
                "id": "profileTrigger",
                "tag": "div",
                "class": "origin-top-right absolute right-0 mt-7 w-48 rounded-sm shadow bg-gray-100 ring-1 ring-black ring-opacity-5 focus:outline-none",
                "children": [
                  {
                    "description": "panel container menu items",
                    "type": "container",
                    "containerType": "div",
                    "class": "py-1",
                    "children": [
                      {
                        "description": "menu item 1",
                        "type": "container",
                        "containerType": "div",
                        "class": "flex justify-start items-center text-black border-b border-grey-500",
                        "children": [
                          {
                            "type": "element",
                            "elementType": "staticHtmlTag",
                            "tag": "div",
                            "text": "login:",
                            "class": "block pl-4 py-2 text-13"
                          },
                          {
                            "type": "element",
                            "elementType": "staticHtmlTag",
                            "tag": "div",
                            "text": "user:last_name",
                            "class": "block pl-2 py-2 text-13"
                          }
                        ]
                      },
                      {
                        "description": "menu item 2",
                        "type": "container",
                        "containerType": "div",
                        "class": "flex justify-start items-center text-black border-b border-grey-500",
                        "children": [
                          {
                            "type": "element",
                            "elementType": "staticHtmlTag",
                            "tag": "div",
                            "text": "last login:",
                            "class": "block pl-4 py-2 text-11"
                          },
                          {
                            "type": "element",
                            "elementType": "staticHtmlTag",
                            "tag": "div",
                            "text": "26.09.2022 16:55",
                            "class": "block pl-2 py-2 text-11"
                          }
                        ]
                      },
                      {
                        "description": "menu item 5",
                        "type": "container",
                        "containerType": "div",
                        "class": "flex justify-start items-center hover:bg-amber-300 text-black cursor-pointer border-b border-grey-500",
                        "children": [
                          {
                            "type": "element",
                            "elementType": "staticHtmlTag",
                            "tag": "img",
                            "src": "/static/img/avatar_dom_01.jpg",
                            "class": "h-6 w-6 rounded-full cursor-pointer ml-1.5"
                          },
                          {
                            "type": "element",
                            "elementType": "staticHtmlTag",
                            "tag": "div",
                            "text": "profile",
                            "class": "block px-4 py-2 text-13"
                          }
                        ]
                      },
                      {
                        "description": "menu item 6",
                        "type": "navEvent",
                        "eventType": "logout",
                        "containerType": "div",
                        "class": "flex justify-start items-center hover:bg-amber-300 text-black cursor-pointer",
                        "children": [
                          {
                            "type": "element",
                            "elementType": "staticHtmlTag",
                            "tag": "div",
                            "text": "logout",
                            "class": "material-symbols-outlined text-xl w-6 pl-2"
                          },
                          {
                            "type": "element",
                            "elementType": "staticHtmlTag",
                            "tag": "div",
                            "text": "logout",
                            "class": "block px-4 py-2 text-13"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
])

const appID = "topBar"

/* const dynamicAppsStore = useDynamicAppsStore() */

const entityData = ref({})

const onUpdate = (key, value) => {
  entityData.value[key] = value
}
provide("onUpdate", onUpdate)
</script>
