<template>
  <template v-for="(componentContainer, index) in componentContainers" :key="index">
    <container :element="componentContainer" :entityData="entityData" />
  </template>
</template>

<script setup>
import { Switch } from "@headlessui/vue"
import _ from "lodash"
import { ref, provide, computed } from "vue"
import lodashSet from "lodash/set"
import lodashGet from "lodash/get"
import lodashdDbounce from "lodash/debounce"
import { useDynamicAppsStore } from "@/store/dynamicApps"

const dynamicAppsStore = useDynamicAppsStore()


const enabled = ref(false)

const componentContainers = [
  {
    "description": "Bauteilkontrolle",
    "type": "container",
    "class": "w-full h-screen bg-white pt-4 px-16",
    "children": [
      {
        "type": "element",
        "elementType": "heatMap",
        // "key": "images",
        // "class": "absolute w-full h-[500px]"
      }
    ]
  }
]



/*****    panel     *****/
/*{
  "description": "theme panel",
  "type": "container",
  "containerType": "div",
  "class": "relative inline-block text-left",
  "children": [
  {
    "type": "container",
    "containerType": "div",
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
                "type": "container",
                "containerType": "div",
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
                "elementType": "staticHtmlTag",
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
}*/

/*****    tailwindUI     *****/
/*

{
  "type": "container",
  "containerType": "div",
  "class": "relative w-full md:w-6/12 h-auto bg-gray-100 p-16",
  "children": [
  {
    "description": "radio group horizontal label",
    "type": "element",
    "elementType": "staticHtmlTag",
    "tag": "div",
    "text": "Radio group example (Horizontal)",
    "class": "text-12 py-2"
  },
  {
    "description": "radio group horizontal",
    "type": "container",
    "class": "space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10",
    "children": [
      {
        "type": "element",
        "elementType": "radioGroup",
        "key": "material.radioGroupTest1",
        "value": "value",
        "assignedKey": "name",
        "items": [
          {
            "value": "email",
            "name": "Email"
          },
          {
            "value": "phone",
            "name": "Phone"
          },
          {
            "value": "push",
            "name": "PUsh notifications"
          }
        ],
        "parentClass": "flex items-center",
        "height": "h-4",
        "width": "w-4"
      }
    ]
  },
  {
    "description": "radio group vertical label",
    "type": "element",
    "elementType": "staticHtmlTag",
    "tag": "div",
    "text": "Radio group example (Vertical) + (object)",
    "class": "text-12 pt-4 pb-2"
  },
  {
    "description": "radio group vertical",
    "type": "container",
    "class": "space-y-4",
    "children": [
      {
        "type": "element",
        "elementType": "radioGroup",
        "key": "material.radioGroupTest2",
        "value": "object",
        "assignedKey": "name",
        "items": [
          {
            "value": "email",
            "name": "Email"
          },
          {
            "value": "phone",
            "name": "Phone"
          },
          {
            "value": "push",
            "name": "PUsh notifications"
          }
        ],
        "parentClass": "flex items-center",
        "height": "h-4",
        "width": "w-4"
      }
    ]
  },
  {
    "description": "listbox select label",
    "type": "element",
    "elementType": "staticHtmlTag",
    "tag": "div",
    "text": "switch input",
    "class": "text-12 pt-4"
  },
  {
    "type": "element",
    "elementType": "switchInput",
    "key": "material.switch",
    "activeValue": { "value": "yes", "value2": "value2YES" },
    "inactiveValue": { "value": "no", "value2": "value2NO" },
    "parentClass": "pt-2",
    "height": "h-5",
    "width": "w-9",
    "translateX": "translate-x-4",
    "handleColor": "bg-white",
    "bgActive": "bg-primary",
    "bgInactive": "bg-gray-300"
  },
  {
    "description": "checkbox label",
    "type": "element",
    "elementType": "staticHtmlTag",
    "tag": "div",
    "text": "checkbox input",
    "class": "text-12 pl-2"
  },
  {
    "description": "checkbox",
    "type": "element",
    "elementType": "checkboxInput",
    "key": "checkbox",
    "class": "ml-2 h-5 w-5 rounded border-gray-300 text-yellow-400 focus:ring-indigo-500"
  },
  {
    "description": "listbox select label",
    "type": "element",
    "elementType": "staticHtmlTag",
    "tag": "div",
    "text": "reference select",
    "class": "text-12 pl-2 pt-4"
  },
  {
    "description": "listbox select",
    "type": "container",
    "containerType": "div",
    "class": "w-64",
    "children": [
      {
        "description": "listbox select input",
        "type": "element",
        "elementType": "listboxSelectInput",
        "key": "material.substrate",
        "value": "value",
        "class": "relative",
        "listbox": {
          "listboxButton": {
            "placeholder": "Substrat wählen",
            "class": "relative flex items-center w-full h-selHeight cursor-pointer bg-white border border-gray-300 rounded-ibr p-ipy pl-3 pr-10 text-left  sm:text-sm",
            "children": [
              {
                "type": "container",
                "children": [
                  {
                    "type": "element",
                    "elementType": "staticHtmlTag",
                    "tag": "span",
                    "assignedKey": "name",
                    "class": "block truncate",
                  },
                  {
                    "type": "element",
                    "elementType": "staticHtmlTag",
                    "tag": "span",
                    "text": "unfold_more",
                    "class": "material-symbols-outlined text-iicon text-gray-400 font-normal pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",
                  }
                ]
              }
            ]
          },
          "listboxOptionsContainer": {
            "class": "absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-ibr border-l border-r border-b bg-white py-1 text-base  sm:text-sm",
            "listboxOptions": {
              "classActive": "bg-gray-100 text-black",
              "classInactive": "text-gray-900",
              "class": "relative cursor-default select-none py-1  pl-10 pr-4",
              "children": [
                {
                  "type": "container",
                  "children": [
                    {
                      "type": "element",
                      "elementType": "staticHtmlTag",
                      "tag": "span",
                      "text": "done",
                      "conditionArray": [
                        { "cd": "INI, k, selected, equal, b, true" }
                      ],
                      "class": "absolute material-symbols-outlined inset-y-0 left-0 flex items-center pl-3 text-green-600"
                    },
                    {
                      "type": "element",
                      "elementType": "staticHtmlTag",
                      "tag": "span",
                      "assignedKey": "name",
                      "classActive": "font-medium",
                      "classInactive": "font-normal",
                      "class": "block truncate"
                    }
                  ]
                }
              ]
            },
          }
        },
        "options": [
          {
            "children": [
              {
                "value": "",
                "name": "---"
              },
              {
                "value": "stahl",
                "name": "Stahl"
              },
              {
                "value": "stahl10.9",
                "name": "Stahl 10.9"
              },
              {
                "value": "stahl12.9",
                "name": "Stahl 12.9"
              },
              {
                "value": "edelstahl",
                "name": "Edelstahl"
              },
              {
                "value": "aluminium",
                "name": "Aluminium"
              },
              {
                "value": "druckguss",
                "name": "Druckguss"
              },
              {
                "value": "polymer",
                "name": "Polymer"
              }
            ]
          }
        ]
      }
    ]
  },

  {
    "description": "listbox select label",
    "type": "element",
    "elementType": "staticHtmlTag",
    "tag": "div",
    "text": "conditional select",
    "class": "mt-8 text-12 pl-2"
  },
  {
    "description": "listbox select with expression",
    "type": "container",
    "containerType": "div",
    "class": "w-64",
    "children": [
      {
        "description": "listbox select input",
        "type": "element",
        "elementType": "listboxSelectInput",
        "key": "material.treatment",
        "value": "object",
        "class": "relative",
        "listbox": {
          "listboxButton": {
            "placeholder": "Substrat wählen",
            "class": "relative flex items-center w-full h-selHeight cursor-pointer bg-white border border-gray-300 rounded-ibr p-ipy pl-3 pr-10 text-left  sm:text-sm",
            "children": [
              {
                "type": "container",
                "children": [
                  {
                    "type": "element",
                    "elementType": "staticHtmlTag",
                    "tag": "span",
                    "assignedKey": "name",
                    "class": "block truncate",
                  },
                  {
                    "type": "element",
                    "elementType": "staticHtmlTag",
                    "tag": "span",
                    "text": "unfold_more",
                    "class": "material-symbols-outlined text-iicon text-gray-400 font-normal pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",
                  }
                ]
              }
            ]
          },
          "listboxOptionsContainer": {
            "class": "absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-ibr border-l border-r border-b bg-white py-1 text-base  sm:text-sm",
            "listboxOptions": {
              "classActive": "bg-gray-100 text-black",
              "classInactive": "text-gray-900",
              "class": "relative cursor-default select-none py-1 pl-10 pr-4",
              "children": [
                {
                  "type": "container",
                  "children": [
                    {
                      "type": "element",
                      "elementType": "staticHtmlTag",
                      "tag": "span",
                      "text": "done",
                      "conditionArray": [
                        { "cd": "INI, k, selected, equal, b, true" }
                      ],
                      "class": "absolute material-symbols-outlined inset-y-0 left-0 flex items-center pl-3 text-green-600"
                    },
                    {
                      "type": "element",
                      "elementType": "staticHtmlTag",
                      "tag": "span",
                      "assignedKey": "name",
                      "classActive": "font-medium",
                      "classInactive": "font-normal",
                      "class": "block truncate"
                    }
                  ]
                }
              ]
            },
          }
        },
        "options": [
          {
            "conditionArray": [
              { "cd": "INI, k, material.substrate, equal, s, stahl" }
            ],
            "children": [
              {
                "value": "",
                "name": "---"
              },
              {
                "value": "red",
                "name": "Red"
              },
              {
                "value": "green",
                "name": "Green"
              },
              {
                "value": "blue",
                "name": "Blue"
              }
            ]
          },
          {
            "conditionArray": [
              { "cd": "INI, k, material.substrate, equal, s, stahl10.9" }
            ],
            "children": [
              {
                "value": "",
                "name": "---"
              },
              {
                "value": "lion",
                "name": "lion"
              },
              {
                "value": "turtle",
                "name": "turtle"
              },
              {
                "value": "bird",
                "name": "bird"
              }
            ]
          },
        ]
      }
    ]
  }
  ]
}*/

/*****    PageBuilder     *****/
/*

{
  "description": "section1 dialog",
  "type": "dialog",
  "key": "section1Dialog",
  "toggleDialog": true,
  "dialogKey": "section1Dialog",
  "class": "inline-block bg-white overflow-hidden transform transition-all w-full h-screen bg-white",
  "children": [
  {
    "description": "dialog card",
    "type": "container",
    "class": "bg-white",
    "children": [
      {
        "description": "dialog card header",
        "type": "container",
        "class": "flex  pl-6 pr-4 py-2 border-b h-10 text-left bg-cardHeaderBg",
        "children": [
          {
            "description": "dialog card header title div",
            "type": "container",
            "class": "item w-full",
            "children": [
              {
                "description": "dialog card header title",
                "type": "element",
                "elementType": "staticHtmlTag",
                "tag": "div",
                "text": "Section1 dialog",
                "class": "text-sm leading-6 font-medium uppercase text-cardHeaderTitle"
              }
            ]
          },
          {
            "description": "dialog card header close div",
            "type": "container",
            "class": "item w-7",
            "children": [
              {
                "description": "dialog card header close",
                "type": "element",
                "elementType": "staticHtmlTag",
                "tag": "div",
                "text": "close",
                "class": "material-symbols-outlined text-right h-7 w-7 rounded-full text-cardHeaderTitle border border-cardHeaderBg border-2 hover:border-white cursor-pointer",
                "toggleDialog": true,
                "dialogKey": "section1Dialog"
              }
            ]
          }
        ]
      },
      {
        "description": "dialog card content",
        "type": "container",
        "class": "mt-4",
        "children": [
          {
            "description": "dialog card content",
            "type": "container",
            "class": "px-6 my-2 w-full",
            "children": [
              {
                "description": "prime vue select input",
                "type": "container",
                "containerType": "div",
                "class": "pt-4 p-input-filled p-inputtext-sm text-left",
                "children": [
                  {
                    "type": "element",
                    "elementType": "staticHtmlTag",
                    "tag": "div",
                    "text": "Werkstoff",
                    "class": "text-gray-800 text-sm font-bold pb-4"
                  },
                  {
                    "type": "element",
                    "elementType": "staticHtmlTag",
                    "tag": "div",
                    "text": "Substrat",
                    "class": "text-gray-800 text-12"
                  },
                  {
                    "description": "prime vue select input",
                    "type": "container",
                    "containerType": "div",
                    "class": "flex",
                    "children": [
                      {
                        "type": "element",
                        "elementType": "primeVueSelectInput",
                        "key": "material.substrate",
                        "class": "pl-0 pr-2 w-6/12 ",
                        "parameters": {
                          "optionLabel": "name",
                          "options": [
                            {
                              "value": "",
                              "name": "---"
                            },
                            {
                              "value": "stahl",
                              "name": "Stahl"
                            },
                            {
                              "value": "stahl10.9",
                              "name": "Stahl 10.9"
                            },
                            {
                              "value": "stahl12.9",
                              "name": "Stahl 12.9"
                            },
                            {
                              "value": "edelstahl",
                              "name": "Edelstahl"
                            },
                            {
                              "value": "aluminium",
                              "name": "Aluminium"
                            },
                            {
                              "value": "druckguss",
                              "name": "Druckguss"
                            },
                            {
                              "value": "polymer",
                              "name": "Polymer"
                            }
                          ],
                          "placeholder": "Substrat wählen",
                          "disabled": false
                        }
                      },
                      {
                        "description": "IF -- 12.9",
                        "conditionArray": [
                          {
                            "cd": "INI, k, material.substrate.value, equal, s, stahl10.9"
                          },
                          {
                            "cd": "OR, k, material.substrate.value, equal, s, stahl12.9"
                          }
                        ],
                        "type": "element",
                        "elementType": "staticHtmlTag",
                        "tag": "div",
                        "text": "gehärtet",
                        "class": "text-gray-800 text pl-4 pt-2"
                      }
                    ]
                  },
                  {
                    "type": "container",
                    "containerType": "div",
                    "class": "pt-12 p-input-filled p-inputtext-sm w-full",
                    "children": [
                      {
                        "type": "element",
                        "elementType": "staticHtmlTag",
                        "tag": "div",
                        "text": "Bauteilgemoetrie",
                        "class": "text-gray-800 text-sm font-bold pb-4"
                      },
                      {
                        "type": "container",
                        "containerType": "div",
                        "class": "pt-4",
                        "children": [
                          {
                            "type": "container",
                            "containerType": "div",
                            "class": "flex field-radiobutton",
                            "children": [
                              {
                                "type": "element",
                                "elementType": "primeVueRadioButton",
                                "key": "material.geometry",
                                "id": "1",
                                "name": "1",
                                "value": "unbekannt",
                                "class": ""
                              },
                              {
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "div",
                                "text": "unbekannt",
                                "class": "text-gray-800 text-12 pt-0 pl-4"
                              }
                            ]
                          },
                          {
                            "type": "container",
                            "containerType": "div",
                            "class": "flex field-radiobutton pt-2",
                            "children": [
                              {
                                "type": "element",
                                "elementType": "primeVueRadioButton",
                                "key": "material.geometry",
                                "id": "2",
                                "name": "1",
                                "value": "gestellware",
                                "class": ""
                              },
                              {
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "div",
                                "text": "Gestellware",
                                "class": "text-gray-800 text-12 pt-0 pl-4"
                              }
                            ]
                          },
                          {
                            "type": "container",
                            "containerType": "div",
                            "class": "flex field-radiobutton pt-2",
                            "children": [
                              {
                                "type": "element",
                                "elementType": "primeVueRadioButton",
                                "key": "material.geometry",
                                "id": "2",
                                "name": "1",
                                "value": "trommelware",
                                "class": ""
                              },
                              {
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "div",
                                "text": "Trommelware",
                                "class": "text-gray-800 text-12 pt-0 pl-4"
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
    ]
  }
]
},
{
  "description": "section2 dialog",
  "type": "dialog",
  "key": "section2Dialog",
  "toggleDialog": true,
  "dialogKey": "section2Dialog",
  "class": "inline-block bg-white overflow-hidden transform transition-all w-full h-screen bg-white",
  "children": [
  {
    "description": "dialog card",
    "type": "container",
    "class": "bg-white",
    "children": [
      {
        "description": "dialog card header",
        "type": "container",
        "class": "flex  pl-6 pr-4 py-2 border-b h-10 text-left bg-cardHeaderBg",
        "children": [
          {
            "description": "dialog card header title div",
            "type": "container",
            "class": "item w-full",
            "children": [
              {
                "description": "dialog card header title",
                "type": "element",
                "elementType": "staticHtmlTag",
                "tag": "div",
                "text": "Section2 dialog",
                "class": "text-sm leading-6 font-medium uppercase text-cardHeaderTitle"
              }
            ]
          },
          {
            "description": "dialog card header close div",
            "type": "container",
            "class": "item w-7",
            "children": [
              {
                "description": "dialog card header close",
                "type": "element",
                "elementType": "staticHtmlTag",
                "tag": "div",
                "text": "close",
                "class": "material-symbols-outlined text-right h-7 w-7 rounded-full text-cardHeaderTitle border border-cardHeaderBg border-2 hover:border-white cursor-pointer",
                "toggleDialog": true,
                "dialogKey": "section2Dialog"
              }
            ]
          }
        ]
      },
      {
        "description": "dialog card content",
        "type": "container",
        "class": "mt-4",
        "children": [
          {
            "description": "dialog card content",
            "type": "container",
            "class": "px-6 my-2 w-full",
            "children": [
              {
                "description": "prime vue select input",
                "type": "container",
                "containerType": "div",
                "class": "pt-4 p-input-filled p-inputtext-sm text-left",
                "children": [
                  {
                    "type": "element",
                    "elementType": "staticHtmlTag",
                    "tag": "div",
                    "text": "Werkstoff",
                    "class": "text-gray-800 text-sm font-bold pb-4"
                  },
                  {
                    "type": "element",
                    "elementType": "staticHtmlTag",
                    "tag": "div",
                    "text": "Substrat",
                    "class": "text-gray-800 text-12"
                  },
                  {
                    "description": "prime vue select input",
                    "type": "container",
                    "containerType": "div",
                    "class": "flex",
                    "children": [
                      {
                        "type": "element",
                        "elementType": "primeVueSelectInput",
                        "key": "material.substrate",
                        "class": "pl-0 pr-2 w-6/12 ",
                        "parameters": {
                          "optionLabel": "name",
                          "options": [
                            {
                              "value": "",
                              "name": "---"
                            },
                            {
                              "value": "stahl",
                              "name": "Stahl"
                            },
                            {
                              "value": "stahl10.9",
                              "name": "Stahl 10.9"
                            },
                            {
                              "value": "stahl12.9",
                              "name": "Stahl 12.9"
                            },
                            {
                              "value": "edelstahl",
                              "name": "Edelstahl"
                            },
                            {
                              "value": "aluminium",
                              "name": "Aluminium"
                            },
                            {
                              "value": "druckguss",
                              "name": "Druckguss"
                            },
                            {
                              "value": "polymer",
                              "name": "Polymer"
                            }
                          ],
                          "placeholder": "Substrat wählen",
                          "disabled": false
                        }
                      },
                      {
                        "description": "IF -- 12.9",
                        "conditionArray": [
                          {
                            "cd": "INI, k, material.substrate.value, equal, s, stahl10.9"
                          },
                          {
                            "cd": "OR, k, material.substrate.value, equal, s, stahl12.9"
                          }
                        ],
                        "type": "element",
                        "elementType": "staticHtmlTag",
                        "tag": "div",
                        "text": "gehärtet",
                        "class": "text-gray-800 text pl-4 pt-2"
                      }
                    ]
                  },
                  {
                    "type": "container",
                    "containerType": "div",
                    "class": "pt-12 p-input-filled p-inputtext-sm w-full",
                    "children": [
                      {
                        "type": "element",
                        "elementType": "staticHtmlTag",
                        "tag": "div",
                        "text": "Bauteilgemoetrie",
                        "class": "text-gray-800 text-sm font-bold pb-4"
                      },
                      {
                        "type": "container",
                        "containerType": "div",
                        "class": "pt-4",
                        "children": [
                          {
                            "type": "container",
                            "containerType": "div",
                            "class": "flex field-radiobutton",
                            "children": [
                              {
                                "type": "element",
                                "elementType": "primeVueRadioButton",
                                "key": "material.geometry",
                                "id": "1",
                                "name": "1",
                                "value": "unbekannt",
                                "class": ""
                              },
                              {
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "div",
                                "text": "unbekannt",
                                "class": "text-gray-800 text-12 pt-0 pl-4"
                              }
                            ]
                          },
                          {
                            "type": "container",
                            "containerType": "div",
                            "class": "flex field-radiobutton pt-2",
                            "children": [
                              {
                                "type": "element",
                                "elementType": "primeVueRadioButton",
                                "key": "material.geometry",
                                "id": "2",
                                "name": "1",
                                "value": "gestellware",
                                "class": ""
                              },
                              {
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "div",
                                "text": "Gestellware",
                                "class": "text-gray-800 text-12 pt-0 pl-4"
                              }
                            ]
                          },
                          {
                            "type": "container",
                            "containerType": "div",
                            "class": "flex field-radiobutton pt-2",
                            "children": [
                              {
                                "type": "element",
                                "elementType": "primeVueRadioButton",
                                "key": "material.geometry",
                                "id": "2",
                                "name": "1",
                                "value": "trommelware",
                                "class": ""
                              },
                              {
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "div",
                                "text": "Trommelware",
                                "class": "text-gray-800 text-12 pt-0 pl-4"
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
    ]
  }
]
},
{
  "description": 'pageBuilder container',
  "type": 'container',
  "class": 'min-h-screen flex flex-row',
  "style": "",
  "children": [
  {
    "description": "sectionPane",
    "type": "element",
    "elementType": "dragSectionPane",
    "key": "dragSectionPane1",
    "tag": "div",
    "class": "w-[80%] h-screen bg-[#f1f4f8]",
    "children": []
  },
  {
    "description": "dragPane",
    "type": "container",
    "containerType": "div",
    "class": "w-[20%] h-screen bg-lightSidebar px-2",
    "children": [
      {
        "description": "tab buttons",
        "type": "container",
        "class": "grid grid-cols-4 gap-2 pt-2",
        "children": [
          {
            "description": "tab 1",
            "type": "container",
            "tabID": "tab001",
            "tabGroupID": "tabGroup001",
            "class": "flex justify-center items-center cursor-pointer px-2 bg-amber-400 hover:bg-gray-400 hover:text-white text-12 font-bold leading-[24px] h-10",
            "activeClass": "text-white bg-red-500 h-full w-full",
            "children": [
              {
                "type": "element",
                "elementType": "staticHtmlTag",
                "tag": "div",
                "text": "tab 1",
                "class": "uppercase"
              }
            ]
          },
          {
            "description": "tab 2",
            "type": "container",
            "tabID": "tab002",
            "tabGroupID": "tabGroup001",
            "class": "flex justify-center items-center cursor-pointer px-2 bg-amber-400 hover:bg-gray-400 hover:text-white text-12 font-bold leading-[24px] h-10",
            "activeClass": "text-white bg-red-500 h-full w-full",
            "children": [
              {
                "type": "element",
                "elementType": "staticHtmlTag",
                "tag": "div",
                "text": "tab 2",
                "class": "uppercase"
              }
            ]
          },
          {
            "description": "tab 3",
            "type": "container",
            "tabID": "tab003",
            "tabGroupID": "tabGroup001",
            "class": "flex justify-center items-center cursor-pointer px-2 bg-amber-400 hover:bg-gray-400 hover:text-white text-12 font-bold leading-[24px] h-10",
            "activeClass": "text-white bg-red-500 h-full w-full",
            "children": [
              {
                "type": "element",
                "elementType": "staticHtmlTag",
                "tag": "div",
                "text": "tab 3",
                "class": "uppercase"
              }
            ]
          },
          {
            "description": "tab 4",
            "type": "container",
            "tabID": "tab004",
            "tabGroupID": "tabGroup001",
            "class": "flex justify-center items-center cursor-pointer px-2 bg-amber-400 hover:bg-gray-400 hover:text-white text-12 font-bold leading-[24px] h-10",
            "activeClass": "text-white bg-red-500 h-full w-full",
            "children": [
              {
                "type": "element",
                "elementType": "staticHtmlTag",
                "tag": "div",
                "text": "tab 4",
                "class": "uppercase"
              }
            ]
          },
        ]
      },
      {
        "description": "tab 1 content",
        "type": "container",
        "tabID": "tab001",
        "tabGroupID": "tabGroup001",
        "tabContent": true,
        "class": "",
        "children": [
          {
            "description": "headline element",
            "type": "element",
            "elementType": "staticHtmlTag",
            "tag": "div",
            "text": "text drag items",
            "class": "text-sm font-bold text-white pt-4"
          },
          {
            "description": "drag items grid container",
            "type": "element",
            "elementType": "dragItems",
            "tag": "div",
            "class": "grid grid-cols-2 gap-2 py-2",
            "children": [
              {
                "description": "dragItem1",
                "type": "container",
                "containerType": "div",
                "class": "cursor-pointer bg-amber-400 hover:bg-gray-400 hover:text-white text-12 font-bold leading-[24px] h-full",
                "children": [
                  {
                    "type": "element",
                    "elementType": "staticHtmlTag",
                    "tag": "img",
                    "src": "/static/img/pageBuilder/demo/section1-thumb02.jpg",
                    "class": ""
                  }
                ],
                "backendJSON": {
                  "description": "section1",
                  "type": "container",
                  "containerType": "div",
                  "class": "w-full h-64 border-b border-gray-300",
                  "children": [
                    {
                      "type": "container",
                      "class": "flex w-full h-full",
                      "children": [
                        {
                          "description": "handle",
                          "type": "container",
                          "containerType": "dragItem",
                          "class": "flex justify-center items-center h-full",
                          "children": [
                            {
                              "type": "element",
                              "elementType": "staticHtmlTag",
                              "tag": "div",
                              "text": "drag_handle",
                              "class": "handle material-symbols-outlined text-3xl text-gray-500 cursor-pointer text-center pt-1 px-4"
                            }
                          ]
                        },
                        {
                          "description": "preview image",
                          "type": "container",
                          "containerType": "dragItem",
                          "class": "flex justify-center items-center h-full",
                          "children": [
                            {
                              "type": "element",
                              "elementType": "staticHtmlTag",
                              "tag": "img",
                              "src": "/static/img/pageBuilder/demo/section1-thumb02.jpg",
                              "class": "w-64"
                            }
                          ]
                        },
                        {
                          "description": "form",
                          "type": "container",
                          "class": "flex flex-col w-full h-full px-8 py-4",
                          "children": [
                            {
                              "description": "headline / dialog button",
                              "type": "container",
                              "class": "flex flex-row justify-between w-full mt-4",
                              "children": [
                                {
                                  "type": "element",
                                  "elementType": "staticHtmlTag",
                                  "tag": "div",
                                  "text": "Section1 demo text/image section",
                                  "class": "text-lg font-bold"
                                },
                                {
                                  "description": "headline / dialog button",
                                  "type": "container",
                                  "toggleDialog": true,
                                  "dialogKey": "section1Dialog",
                                  "class": "cursor-pointer",
                                  "children": [
                                    {
                                      "description": "element icon",
                                      "type": "element",
                                      "elementType": "staticHtmlTag",
                                      "tag": "div",
                                      "text": "open_in_new",
                                      "class": "material-symbols-outlined text-primary text-3xl w-1/8"
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "description": "prime input headline",
                              "type": "container",
                              "containerType": "div",
                              "class": "p-input-filled p-inputtext-sm w-full w-1/2 pt-4",
                              "children": [
                                {
                                  "type": "container",
                                  "containerType": "div",
                                  "class": "w-full",
                                  "children": [
                                    {
                                      "type": "element",
                                      "elementType": "staticHtmlTag",
                                      "tag": "div",
                                      "text": "headline",
                                      "class": "text-gray-800 text-12"
                                    },
                                    {
                                      "type": "element",
                                      "elementType": "textInput",
                                      "key": "headline",
                                      "tag": "div",
                                      "class": "w-full",
                                      "parameters": {
                                        "placeholder": "headline",
                                        "disabled": false,
                                        "size": "sm"
                                      }
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "description": "prime input headline",
                              "type": "container",
                              "containerType": "div",
                              "class": "p-input-filled p-inputtext-sm w-full w-1/2 pt-8",
                              "children": [
                                {
                                  "type": "container",
                                  "containerType": "div",
                                  "class": "w-full",
                                  "children": [
                                    {
                                      "type": "element",
                                      "elementType": "staticHtmlTag",
                                      "tag": "div",
                                      "text": "padding-top",
                                      "class": "text-gray-800 text-12"
                                    },
                                    {
                                      "type": "element",
                                      "elementType": "textInput",
                                      "key": "padding-top",
                                      "tag": "div",
                                      "class": "w-full",
                                      "parameters": {
                                        "placeholder": "padding-top",
                                        "disabled": false,
                                        "size": "sm"
                                      }
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
              },
              {
                "description": "dragItem2",
                "type": "container",
                "containerType": "div",
                "class": "cursor-pointer hover:bg-gray-400 hover:text-white text-12 font-bold leading-[24px] h-full",
                "children": [
                  {
                    "type": "element",
                    "elementType": "staticHtmlTag",
                    "tag": "img",
                    "src": "/static/img/pageBuilder/demo/section2-thumb02.jpg",
                    "class": ""
                  }
                ],
                "backendJSON": {
                  "description": "section2",
                  "type": "container",
                  "containerType": "div",
                  "class": "w-full h-64 border-b border-gray-300",
                  "children": [
                    {
                      "type": "container",
                      "class": "flex w-full h-full",
                      "children": [
                        {
                          "description": "handle",
                          "type": "container",
                          "containerType": "dragItem",
                          "class": "flex justify-center items-center h-full",
                          "children": [
                            {
                              "type": "element",
                              "elementType": "staticHtmlTag",
                              "tag": "div",
                              "text": "drag_handle",
                              "class": "handle material-symbols-outlined text-3xl text-gray-500 cursor-pointer text-center pt-1 px-4"
                            }
                          ]
                        },
                        {
                          "description": "preview image",
                          "type": "container",
                          "containerType": "dragItem",
                          "class": "flex justify-center items-center h-full",
                          "children": [
                            {
                              "type": "element",
                              "elementType": "staticHtmlTag",
                              "tag": "img",
                              "src": "/static/img/pageBuilder/demo/section2-thumb02.jpg",
                              "class": "w-64"
                            }
                          ]
                        },
                        {
                          "description": "form",
                          "type": "container",
                          "class": "flex flex-col w-full h-full px-8 py-4",
                          "children": [
                            {
                              "description": "headline / dialog button",
                              "type": "container",
                              "class": "flex flex-row justify-between w-full mt-4",
                              "children": [
                                {
                                  "type": "element",
                                  "elementType": "staticHtmlTag",
                                  "tag": "div",
                                  "text": "Section2 demo image only section",
                                  "class": "text-lg font-bold"
                                },
                                {
                                  "description": "headline / dialog button",
                                  "type": "container",
                                  "toggleDialog": true,
                                  "dialogKey": "section2Dialog",
                                  "class": "cursor-pointer",
                                  "children": [
                                    {
                                      "description": "element icon",
                                      "type": "element",
                                      "elementType": "staticHtmlTag",
                                      "tag": "div",
                                      "text": "open_in_new",
                                      "class": "material-symbols-outlined text-primary text-3xl w-1/8"
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "description": "prime input",
                              "type": "container",
                              "containerType": "div",
                              "class": "p-input-filled p-inputtext-sm w-full w-1/2 pt-4",
                              "children": [
                                {
                                  "type": "container",
                                  "containerType": "div",
                                  "class": "w-full",
                                  "children": [
                                    {
                                      "type": "element",
                                      "elementType": "staticHtmlTag",
                                      "tag": "div",
                                      "text": "headline",
                                      "class": "text-gray-800 text-12"
                                    },
                                    {
                                      "type": "element",
                                      "elementType": "textInput",
                                      "key": "headline",
                                      "tag": "div",
                                      "class": "w-full",
                                      "parameters": {
                                        "placeholder": "headline",
                                        "disabled": false,
                                        "size": "sm"
                                      }
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "description": "prime input",
                              "type": "container",
                              "containerType": "div",
                              "class": "p-input-filled p-inputtext-sm w-full w-1/2 pt-8",
                              "children": [
                                {
                                  "type": "container",
                                  "containerType": "div",
                                  "class": "w-full",
                                  "children": [
                                    {
                                      "type": "element",
                                      "elementType": "staticHtmlTag",
                                      "tag": "div",
                                      "text": "padding-top",
                                      "class": "text-gray-800 text-12"
                                    },
                                    {
                                      "type": "element",
                                      "elementType": "textInput",
                                      "key": "padding-top",
                                      "tag": "div",
                                      "class": "w-full",
                                      "parameters": {
                                        "placeholder": "padding-top",
                                        "disabled": false,
                                        "size": "sm"
                                      }
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
              },

            ]
          }
        ]
      },
      {
        "description": "tab 2 content",
        "type": "container",
        "tabID": "tab002",
        "tabGroupID": "tabGroup001",
        "tabContent": true,
        "class": "",
        "children": [
          {
            "description": "headline element",
            "type": "element",
            "elementType": "staticHtmlTag",
            "tag": "div",
            "text": "image drag items",
            "class": "text-sm font-bold text-white pt-4"
          },
          {
            "description": "drag items grid container",
            "type": "element",
            "elementType": "dragItems",
            "tag": "div",
            "class": "grid grid-cols-2 gap-2 py-2",
            "children": [
              {
                "description": "dragItem1",
                "type": "container",
                "containerType": "div",
                "backendJSON": {
                  "description": "section1",
                  "type": "container",
                  "containerType": "div",
                  "class": "w-full h-64 border-b border-gray-300",
                  "children": [
                    {
                      "type": "container",
                      "class": "flex w-full h-full",
                      "children": [
                        {
                          "description": "preview image",
                          "type": "container",
                          "containerType": "dragItem",
                          "class": "flex justify-center items-center h-full",
                          "children": [
                            {
                              "type": "element",
                              "elementType": "staticHtmlTag",
                              "tag": "div",
                              "text": "drag_handle",
                              "class": "handle material-symbols-outlined text-3xl text-gray-500 cursor-pointer text-center pt-1 px-4"
                            }
                          ]
                        },
                        {
                          "description": "preview image",
                          "type": "container",
                          "containerType": "dragItem",
                          "class": "flex justify-center items-center h-full",
                          "children": [
                            {
                              "type": "element",
                              "elementType": "staticHtmlTag",
                              "tag": "img",
                              "src": "/static/img/pageBuilder/demo/section1-thumb01.png",
                              "class": "w-64"
                            }
                          ]
                        },
                        {
                          "description": "form",
                          "type": "container",
                          "class": "flex flex-col w-full h-full px-8 py-4",
                          "children": [
                            {
                              "description": "headline / dialog button",
                              "type": "container",
                              "class": "flex flex-row justify-between w-full mt-4",
                              "children": [
                                {
                                  "type": "element",
                                  "elementType": "staticHtmlTag",
                                  "tag": "div",
                                  "text": "Section1 demo text/image section",
                                  "class": "text-lg font-bold"
                                },
                                {
                                  "description": "headline / dialog button",
                                  "type": "container",
                                  "toggleDialog": true,
                                  "dialogKey": "section1Dialog",
                                  "class": "cursor-pointer",
                                  "children": [
                                    {
                                      "description": "element icon",
                                      "type": "element",
                                      "elementType": "staticHtmlTag",
                                      "tag": "div",
                                      "text": "open_in_new",
                                      "class": "material-symbols-outlined text-primary text-3xl w-1/8"
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "description": "prime input headline",
                              "type": "container",
                              "containerType": "div",
                              "class": "p-input-filled p-inputtext-sm w-full w-1/2 pt-4",
                              "children": [
                                {
                                  "type": "container",
                                  "containerType": "div",
                                  "class": "w-full",
                                  "children": [
                                    {
                                      "type": "element",
                                      "elementType": "staticHtmlTag",
                                      "tag": "div",
                                      "text": "headline",
                                      "class": "text-gray-800 text-12"
                                    },
                                    {
                                      "type": "element",
                                      "elementType": "textInput",
                                      "key": "headline",
                                      "tag": "div",
                                      "class": "w-full",
                                      "parameters": {
                                        "placeholder": "headline",
                                        "disabled": false,
                                        "size": "sm"
                                      }
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "description": "prime input headline",
                              "type": "container",
                              "containerType": "div",
                              "class": "p-input-filled p-inputtext-sm w-full w-1/2 pt-8",
                              "children": [
                                {
                                  "type": "container",
                                  "containerType": "div",
                                  "class": "w-full",
                                  "children": [
                                    {
                                      "type": "element",
                                      "elementType": "staticHtmlTag",
                                      "tag": "div",
                                      "text": "padding-top",
                                      "class": "text-gray-800 text-12"
                                    },
                                    {
                                      "type": "element",
                                      "elementType": "textInput",
                                      "key": "padding-top",
                                      "tag": "div",
                                      "class": "w-full",
                                      "parameters": {
                                        "placeholder": "padding-top",
                                        "disabled": false,
                                        "size": "sm"
                                      }
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
                "class": "cursor-pointer bg-amber-400 hover:bg-gray-400 hover:text-white text-12 font-bold leading-[24px] h-full",
                "children": [
                  {
                    "type": "element",
                    "elementType": "staticHtmlTag",
                    "tag": "img",
                    "src": "/static/img/pageBuilder/demo/textImage.png",
                    "class": ""
                  }
                ]
              },
              {
                "description": "dragItem2",
                "type": "container",
                "containerType": "div",
                "class": "cursor-pointer bg-amber-400 hover:bg-gray-400 hover:text-white text-12 font-bold leading-[24px] h-full",
                "backendJSON": {
                  "description": "section2",
                  "type": "container",
                  "containerType": "div",
                  "class": "w-full h-64 border-b border-gray-300",
                  "children": [
                    {
                      "type": "container",
                      "class": "flex w-full h-full",
                      "children": [
                        {
                          "description": "preview image",
                          "type": "container",
                          "containerType": "dragItem",
                          "class": "flex justify-center items-center h-full",
                          "children": [
                            {
                              "type": "element",
                              "elementType": "staticHtmlTag",
                              "tag": "div",
                              "text": "drag_handle",
                              "class": "handle material-symbols-outlined text-3xl text-gray-500 cursor-pointer text-center pt-1 px-4"
                            }
                          ]
                        },
                        {
                          "description": "preview image",
                          "type": "container",
                          "containerType": "dragItem",
                          "class": "flex justify-center items-center h-full",
                          "children": [
                            {
                              "type": "element",
                              "elementType": "staticHtmlTag",
                              "tag": "img",
                              "src": "/static/img/pageBuilder/demo/section2-thumb01.png",
                              "class": "w-64"
                            }
                          ]
                        },
                        {
                          "description": "form",
                          "type": "container",
                          "class": "flex flex-col w-full h-full px-8 py-4",
                          "children": [
                            {
                              "description": "headline / dialog button",
                              "type": "container",
                              "class": "flex flex-row justify-between w-full mt-4",
                              "children": [
                                {
                                  "type": "element",
                                  "elementType": "staticHtmlTag",
                                  "tag": "div",
                                  "text": "Section2 demo image only section",
                                  "class": "text-lg font-bold"
                                },
                                {
                                  "description": "headline / dialog button",
                                  "type": "container",
                                  "toggleDialog": true,
                                  "dialogKey": "section2Dialog",
                                  "class": "cursor-pointer",
                                  "children": [
                                    {
                                      "description": "element icon",
                                      "type": "element",
                                      "elementType": "staticHtmlTag",
                                      "tag": "div",
                                      "text": "open_in_new",
                                      "class": "material-symbols-outlined text-primary text-3xl w-1/8"
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "description": "prime input headline",
                              "type": "container",
                              "containerType": "div",
                              "class": "p-input-filled p-inputtext-sm w-full w-1/2 pt-4",
                              "children": [
                                {
                                  "type": "container",
                                  "containerType": "div",
                                  "class": "w-full",
                                  "children": [
                                    {
                                      "type": "element",
                                      "elementType": "staticHtmlTag",
                                      "tag": "div",
                                      "text": "headline",
                                      "class": "text-gray-800 text-12"
                                    },
                                    {
                                      "type": "element",
                                      "elementType": "textInput",
                                      "key": "headline",
                                      "tag": "div",
                                      "class": "w-full",
                                      "parameters": {
                                        "placeholder": "headline",
                                        "disabled": false,
                                        "size": "sm"
                                      }
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "description": "prime input headline",
                              "type": "container",
                              "containerType": "div",
                              "class": "p-input-filled p-inputtext-sm w-full w-1/2 pt-8",
                              "children": [
                                {
                                  "type": "container",
                                  "containerType": "div",
                                  "class": "w-full",
                                  "children": [
                                    {
                                      "type": "element",
                                      "elementType": "staticHtmlTag",
                                      "tag": "div",
                                      "text": "padding-top",
                                      "class": "text-gray-800 text-12"
                                    },
                                    {
                                      "type": "element",
                                      "elementType": "textInput",
                                      "key": "padding-top",
                                      "tag": "div",
                                      "class": "w-full",
                                      "parameters": {
                                        "placeholder": "padding-top",
                                        "disabled": false,
                                        "size": "sm"
                                      }
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
                "children": [
                  {
                    "type": "element",
                    "elementType": "staticHtmlTag",
                    "tag": "img",
                    "src": "/static/img/pageBuilder/demo/textImage.png",
                    "class": ""
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
*/

/*****    sampleProject new card layout    *****/
/*{
  "type": "container",
  "class": "inline-block align-bottom w-1/2 h-auto rounded-xl text-left overflow-hidden shadow-xl transform transition-all sm:align-middle w-1/2 p-16",
  "children": [
  {
    "description": "dialog container",
    "type": "container",
    "class": "rounded-xl border border-gray-300",
    "children": [
      {
        "description": "content",
        "type": "container",
        "class": "w-full flex flex-col justify-start space-x-8 w-full pt-6 px-16",
        "children": [
          {
            "description": "card1 row 1",
            "type": "container",
            "class": "text-cardHeaderTitle flex w-full",
            "children": [
              {
                "description": "element icon",
                "type": "element",
                "elementType": "staticHtmlTag",
                "tag": "div",
                "text": "explicit",
                "class": "material-symbols-outlined text-primary align-middle pr-2 w-1/8"
              },
              {
                "description": "element project number",
                "type": "element",
                "elementType": "staticHtmlTag",
                "tag": "div",
                "text": "VA220822-1",
                "assignedKey": "generalProjectNumber",
                "class": "text text-black font-bold w-5/6"
              },
              {
                "description": "element date",
                "type": "element",
                "elementType": "staticHtmlTag",
                "tag": "div",
                "text": "16.08.2022",
                "assignedKey": "date",
                "class": "text-12 text-right text-black  w-1/6 pr-2"
              }
            ]
          },
          {
            "description": "card4 row 2",
            "type": "container",
            "class": "text-cardHeaderTitle flex w-full pb-4",
            "children": [
              {
                "description": "IF -- VA",

                "type": "element",
                "elementType": "staticHtmlTag",
                "tag": "div",
                "text": "Versuchsaufbau",
                "class": "text text-black w-5/6"
              }
            ]
          },
          {
            "description": "card4 row 3 divider",
            "type": "container",
            "class": "text-cardHeaderTitle flex",
            "children": [
              {
                "description": "element project number",
                "type": "element",
                "elementType": "staticHtmlTag",
                "tag": "div",
                "text": " ",
                "class": "w-full border border-gray-100 ml-4 mr-8 h-1"
              }
            ]
          },
          {
            "description": "card4 row 3",
            "type": "container",
            "class": "text flex w-full",
            "children": [
              {
                "description": "element project number",
                "type": "element",
                "elementType": "staticHtmlTag",
                "tag": "div",
                "text": "Projekttitel",
                "class": "text-12 w-full font-bold"
              }
            ]
          },
          {
            "description": "card4 row 4",
            "type": "container",
            "class": "text-cardHeaderTitle flex w-full pb-4",
            "children": [
              {
                "description": "element project number",
                "type": "element",
                "elementType": "staticHtmlTag",
                "tag": "div",
                "text": "Partielle Beschichtung Bremsbereich Knorr ",
                "assignedKey": "generalProjectFocus",
                "class": "text-sm text-black w-5/6"
              }
            ]
          },
          {
            "description": "card1 row 5",
            "type": "container",
            "class": "text flex w-full mt-0",
            "children": [
              {
                "description": "element project number",
                "type": "element",
                "elementType": "staticHtmlTag",
                "tag": "div",
                "text": "Projektbeschreibung",
                "class": "text-12 w-full font-bold"
              }
            ]
          },
          {
            "description": "card1 row 6",
            "type": "container",
            "class": "text-cardHeaderTitle w-full pr-4",
            "children": [
              {
                "description": "element project number",
                "type": "element",
                "elementType": "staticHtmlTag",
                "tag": "div",
                "text": "Trockenschmierung verleiht Kunststoffgleitlagern, Dichtungen und anderen Maschinenelementen verbesserte Gleiteigenschaften. Ziel von gut ausgelegten Polymergleitlagern ist die Wartungs­freiheit und das Vermeiden von schmutzbindender Fett- oder Ölschmierung.",
                "assignedKey": "generalProjectDescription",
                "class": "text-12 text-black"
              }
            ]
          },
        ]
      },
      {
        "description": "footer",
        "type": "container",
        "class": "w-full flex justify-between items-center rounded-b-xl mt-8 bg-[#e3e8ee] h-16 px-16",
        "children": [
          {
            "type": "container",
            "class": "flex flex-col pl-8",
            "children": [
              {
                "type": "element",
                "elementType": "staticHtmlTag",
                "tag": "span",
                "text": "Projektnummer",
                "class": "uppercase text-12 text-[#6d767e]",
              },
              {
                "type": "element",
                "elementType": "staticHtmlTag",
                "tag": "span",
                "text": "VA220822-1",
                "class": "uppercase text-2xl text-[#6d767e]",
              }
            ]
          }
        ]
      }
    ]
  }
]
}*/

/*****    Prime vue samples    *****/
/*
{
  "type": "container",
  "containerType": "div",
  "class": "relative w-full md:w-3/12 h-auto sm:min-h-full bg-white pt-4 pl-4 pr-4 pb-16 md:pl-6",
  "children": [
  {
    "description": "prime vue checkbox",
    "type": "container",
    "containerType": "div",
    "class": "flex items-center pt-16",
    "children": [
      {
        "type": "element",
        "elementType": "primeVueCheckboxInput",
        "key": "1st_level",
        "parameters": {
          "disabled": false
        }
      },
      {
        "description": "object 1 MAIN NAVIGATION text",
        "type": "container",
        "containerType": "div",
        "class": "pl-2",
        "children": [
          {
            "type": "element",
            "elementType": "staticHtmlTag",
            "tag": "div",
            "text": "1st level",
            "class": "text-gray-800 text-13"
          }
        ]
      },
    ]
  },
  {
    "description": "prime vue checkbox",
    "type": "container",
    "containerType": "div",
    "class": "flex items-center pt-2",
    "children": [
      {
        "type": "element",
        "elementType": "primeVueCheckboxInput",
        "key": "2nd_level",
        "class": "",
        "parameters": {
          "disabled": false
        }
      },
      {
        "description": "object 1 MAIN NAVIGATION text",
        "type": "container",
        "containerType": "div",
        "class": "pl-2",
        "children": [
          {
            "type": "element",
            "elementType": "staticHtmlTag",
            "tag": "div",
            "text": "2nd level",
            "class": "text-gray-800 text-13"
          }
        ]
      },
    ]
  },
  {
    "description": "prime vue switch input",
    "type": "container",
    "containerType": "div",
    "class": "flex items-center pt-16",
    "children": [
      {
        "type": "element",
        "elementType": "primeVueSwitchInput",
        "key": "1st_level",
        "trueValue":"on",
        "falseValue":"off",
        "class":"",
        "parameters": {

        }
      },
      {
        "description": "object 1 MAIN NAVIGATION text",
        "type": "container",
        "containerType": "div",
        "class": "pl-2",
        "children": [
          {
            "type": "element",
            "elementType": "staticHtmlTag",
            "tag": "div",
            "text": "1st level",
            "class": "text-gray-800 text-13"
          }
        ]
      },
    ]
  },
  {
    "description": "prime vue text input",
    "type": "container",
    "containerType": "div",
    "class": "pt-8 p-input-filled p-inputtext-sm w-full",
    "style":"",
    "children": [
      {
        "type": "element",
        "elementType": "staticHtmlTag",
        "tag": "div",
        "text": "Vorname",
        "class": "text-gray-800 text-12"
      },
      {
        "type": "element",
        "elementType": "textInput",
        "key": "first_name",
        "class": "w-full",

        "parameters": {
          "placeholder": "Vorname",
          "disabled": false,
          "size": "sm"
        }
      }
    ]
  },
  {
    "description": "prime vue text input",
    "type": "container",
    "containerType": "div",
    "class": "pt-4 p-input-filled p-inputtext-sm w-full",
    "children": [
      {
        "type": "element",
        "elementType": "staticHtmlTag",
        "tag": "div",
        "text": "Nachname",
        "class": "text-gray-800 text-12"
      },
      {
        "type": "element",
        "elementType": "textInput",
        "key": "last_name",
        "class": "w-full",
        "parameters": {
          "placeholder": "Nachname",
          "disabled": false,
          "size": "sm"
        }
      }
    ]
  },
  {
    "description": "prime vue text area",
    "type": "container",
    "containerType": "div",
    "class": "pt-4 p-input-filled p-inputtext-sm w-full",
    "children": [
      {
        "type": "element",
        "elementType": "staticHtmlTag",
        "tag": "div",
        "text": "text area",
        "class": "text-gray-800 text-12"
      },
      {
        "type": "element",
        "elementType": "primeVueTextArea",
        "key": "last_are",
        "rows":"6",
        "cols":"",
        "class": "w-full",
        "parameters": {
          "placeholder": "Nachname",
          "disabled": false,
          "autoResize": false,
          "size": "sm"
        }
      }
    ]
  },
  {
    "description": "prime vue input number",
    "type": "container",
    "containerType": "div",
    "class": "pt-8 p-input-filled p-inputtext-sm w-full",
    "style":"",
    "children": [
      {
        "type": "element",
        "elementType": "staticHtmlTag",
        "tag": "div",
        "text": "Number",
        "class": "text-gray-800 text-12"
      },
      {
        "type": "element",
        "elementType": "primeVueInputNumber",
        "id": "locale-german",
        "mode": "decimal",
        "key": "number",
        "class": "w-full",
        "parameters": {
          "minFractionDigits":"2",
          "locale":"de-DE",
          "placeholder": "number",
          "disabled": false,
          "useGrouping": true
        }
      }
    ]
  },
  {
    "description": "prime vue input number currency",
    "type": "container",
    "containerType": "div",
    "class": "pt-8 p-input-filled p-inputtext-sm w-full",
    "style":"",
    "children": [
      {
        "type": "element",
        "elementType": "staticHtmlTag",
        "tag": "div",
        "text": "currency",
        "class": "text-gray-800 text-12"
      },
      {
        "type": "element",
        "elementType": "primeVueInputNumber",
        "id": "currency-germany",
        "mode": "currency",
        "key": "number",
        "class": "w-full",
        "parameters": {
          "minFractionDigits":"2",
          "locale":"de-DE",
          "currency":"EUR",
          "placeholder": "currency in Euro",
          "disabled": false,
          "useGrouping": true
        }
      }
    ]
  },
  {
    "description": "prime vue calendar",
    "type": "container",
    "containerType": "div",
    "class": "pt-4 p-input-filled p-inputtext-sm w-full",
    "children": [
      {
        "type": "element",
        "elementType": "staticHtmlTag",
        "tag": "div",
        "text": "calendar",
        "class": "text-gray-800 text-12"
      },
      {
        "type": "element",
        "elementType": "primeVueCalendar",
        "key": "city",
        "id":"dateformat",
        "dateFormat":"dd.mm.yy",
        "class": "pl-0 pr-2 w-full",
        "parameters": {
          "autocomplete": "on",
          "showButtonBar": false,
          "view": "date",
          "placeholder": "Bitte Startdatum wählen",
          "disabled": false
        }
      }
    ]
  },
  {
    "description": "prime vue select input",
    "type": "container",
    "containerType": "div",
    "class": "pt-4 p-input-filled p-inputtext-sm w-full",
    "children": [
      {
        "type": "element",
        "elementType": "staticHtmlTag",
        "tag": "div",
        "text": "Stadt",
        "class": "text-gray-800 text-12"
      },
      {
        "type": "element",
        "elementType": "primeVueSelectInput",
        "key": "city",
        "class": "pl-0 pr-2 w-full ",
        "parameters": {
          "optionLabel": "name",
          "options": [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Berlin', code: 'BER' },
            { name: 'Frankfurt', code: 'FRA' },
            { name: 'München', code: 'MUC' },
            { name: 'Heidelberg', code: 'HEI' },
            { name: 'Madrid', code: 'PRS' },
            { name: 'Oslo', code: 'PRS' }
          ],
          "placeholder": "Select a city",
          "disabled": false
        }
      }
    ]
  },
  {
    "description": "prime vue multi select",
    "type": "container",
    "containerType": "div",
    "class": "pt-4 p-input-filled p-inputtext-sm w-full",
    "children": [
      {
        "type": "element",
        "elementType": "staticHtmlTag",
        "tag": "div",
        "text": "Multiselect Stadt",
        "class": "text-gray-800 text-12"
      },
      {
        "type": "element",
        "elementType": "primeVueMultiSelect",
        "key": "city",
        "class": "pl-0 pr-2 w-full ",
        "parameters": {
          "optionLabel": "name",
          "options": [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Berlin', code: 'BER' },
            { name: 'Frankfurt', code: 'FRA' },
            { name: 'München', code: 'MUC' },
            { name: 'Heidelberg', code: 'HEI' },
            { name: 'Madrid', code: 'PRS' },
            { name: 'Oslo', code: 'PRS' }
          ],
          "placeholder": "Select a city",
          "display":"chip",
          "disabled": false
        }
      }
    ]
  }
]
},
{
  "type": "container",
  "containerType": "div",
  "class": "relative w-full  h-auto sm:min-h-full bg-white pt-4 pl-4 pr-4 pb-16 md:pl-6",
  "children": [
  {
    "description": "prime vue cascade select input",
    "type": "container",
    "containerType": "div",
    "class": "pt-4 p-input-filled p-inputtext-sm w-full",
    "children": [
      {
        "type": "element",
        "elementType": "staticHtmlTag",
        "tag": "div",
        "text": "Land",
        "class": "text-gray-800 text-12"
      },
      {
        "type": "element",
        "elementType": "primeVueCascadeSelect",
        "key": "pcity",
        "class": "pl-0 pr-2 h-full",
        "parameters": {
          "options": [
            {
              name: 'Australia',
              code: 'AU',
              states: [
                {
                  name: 'New South Wales',
                  cities: [
                    {cname: 'Sydney', code: 'A-SY'},
                    {cname: 'Newcastle', code: 'A-NE'},
                    {cname: 'Wollongong', code: 'A-WO'}
                  ]
                },
                {
                  name: 'Queensland',
                  cities: [
                    {cname: 'Brisbane', code: 'A-BR'},
                    {cname: 'Townsville', code: 'A-TO'}
                  ]
                },

              ]
            },
            {
              name: 'Canada',
              code: 'CA',
              states: [
                {
                  name: 'Quebec',
                  cities: [
                    {cname: 'Montreal', code: 'C-MO'},
                    {cname: 'Quebec City', code: 'C-QU'}
                  ]
                },
                {
                  name: 'Ontario',
                  cities: [
                    {cname: 'Ottawa', code: 'C-OT'},
                    {cname: 'Toronto', code: 'C-TO'}
                  ]
                },

              ]
            },
            {
              name: 'United States',
              code: 'US',
              states: [
                {
                  name: 'California',
                  cities: [
                    {cname: 'Los Angeles', code: 'US-LA'},
                    {cname: 'San Diego', code: 'US-SD'},
                    {cname: 'San Francisco', code: 'US-SF'}
                  ]
                },
                {
                  name: 'Florida',
                  cities: [
                    {cname: 'Jacksonville', code: 'US-JA'},
                    {cname: 'Miami', code: 'US-MI'},
                    {cname: 'Tampa', code: 'US-TA'},
                    {cname: 'Orlando', code: 'US-OR'}
                  ]
                },
                {
                  name: 'Texas',
                  cities: [
                    {cname: 'Austin', code: 'US-AU'},
                    {cname: 'Dallas', code: 'US-DA'},
                    {cname: 'Houston', code: 'US-HO'}
                  ]
                }
              ]
            }
          ],
          "optionLabel": "cname",
          "optionGroupLabel": "name",
          "optionGroupChildren": ["states", "cities"],
          "placeholder": "Select a city"
        }
      }
    ]
  }
]
}*/

/*****    SampleProject forward window    *****/
/*{
  "screenType": "forward",
  "description": "forward full screen dialog",
  "type": "container",
  "class": "w-full h-screen bg-white",
  "children": [
  {
    "description": "topBar",
    "type": "container",
    "class": "relative flex items-center w-full h-12 bg-[#6d7781]",
    "children": [
      {
        "description": "logo image div",
        "type": "container",
        "class": "flex pl-4",
        "children": [
          {
            "description": "display hint",
            "elementType": "staticHtmlTag",
            "tag": "div",
            "text": "Kommunikation: Project Forward",
            "type": "element",
            "class": "text-white text-12 pl-4 pt-0.5"
          }
        ]
      }
    ]
  },
  {
    "description": "header",
    "type": "container",
    "class": "relative flex items-start w-full h-16 bg-[#eeeeee]",
    "children": [
      {
        "description": "flex",
        "type": "container",
        "class": "flex flex-col mx-4 md:mx-8 pt-3",
        "children": [
          {
            "description": "headline1",
            "elementType": "staticHtmlTag",
            "tag": "div",
            "text": "UTOM.berlin",
            "type": "element",
            "class": "font-bold text-13"
          },
          {
            "description": "subline",
            "elementType": "staticHtmlTag",
            "tag": "div",
            "text": "Dominik Stahlschmidt",
            "type": "element",
            "class": "font-bold text-gray-500 text-13"
          }
        ]
      }
    ]
  },
  {
    "description": "content",
    "type": "container",
    "class": "flex flex-col md:flex-row bg-white",
    "children": [
      {
        "description": "1 col",
        "type": "container",
        "class": "w-full md:w-3/12 h-screen  md:mx-4",
        "children": [
          {
            "description": "Projekte container",
            "type": "container",
            "class": "",
            "children": [
              {
                "description": "flex",
                "type": "container",
                "class": "relative flex items-start w-full",
                "children": [
                  {
                    "description": "sum",
                    "type": "container",
                    "class": "flex pl-4 pt-3",
                    "children": [
                      {
                        "elementType": "staticHtmlTag",
                        "tag": "span",
                        "text": "Projekte",
                        "type": "element",
                        "class": "font-bold text-12 pt-1.5"
                      },
                      {
                        "elementType": "staticHtmlTag",
                        "tag": "div",
                        "text": "+",
                        "type": "element",
                        "class": "font-bold text-xl text-primary pl-3"
                      }
                    ]
                  }
                ]
              },
              {
                "description": "flex",
                "type": "container",
                "class": "relative flex items-start w-full",
                "children": [
                  {
                    "description": "sum",
                    "type": "container",
                    "class": "flex pl-4",
                    "children": [
                      {
                        "elementType": "staticHtmlTag",
                        "tag": "span",
                        "text": "BE2202-001 Partielle Beschichtung Bremsbereich Knorr",
                        "type": "element",
                        "class": "font-bold text-12 text-primary"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Ansprache container",
            "type": "container",
            "class": "pt-4",
            "children": [
              {
                "description": "flex",
                "type": "container",
                "class": "relative flex items-start w-full",
                "children": [
                  {
                    "description": "sum",
                    "type": "container",
                    "class": "flex pl-4 pt-3",
                    "children": [
                      {
                        "elementType": "staticHtmlTag",
                        "tag": "span",
                        "text": "Ansprache",
                        "type": "element",
                        "class": "font-bold text-12 pt-1.5"
                      },
                      {
                        "elementType": "staticHtmlTag",
                        "tag": "div",
                        "text": "+",
                        "type": "element",
                        "class": "font-bold text-xl text-primary pl-3"
                      }
                    ]
                  }
                ]
              },
              {
                "description": "flex",
                "type": "container",
                "class": "relative flex items-start w-full",
                "children": [
                  {
                    "description": "sum",
                    "type": "container",
                    "class": "flex pl-4",
                    "children": [
                      {
                        "elementType": "staticHtmlTag",
                        "tag": "span",
                        "text": "Hallo Dominik",
                        "type": "element",
                        "class": "font-bold text-12 text-primary"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Textaustausch container",
            "type": "container",
            "class": "pt-4",
            "children": [
              {
                "description": "flex headline",
                "type": "container",
                "class": "relative w-full",
                "children": [
                  {
                    "description": "sum",
                    "type": "container",
                    "class": "flex pl-4 pt-3",
                    "children": [
                      {
                        "elementType": "staticHtmlTag",
                        "tag": "span",
                        "text": "Textaustausch",
                        "type": "element",
                        "class": "font-bold text-12 pt-1.5"
                      }
                    ]
                  }
                ]
              },
              {
                "description": "flex subline Bezug nehmen",
                "type": "container",
                "class": "relative w-full",
                "children": [
                  {
                    "description": "sum",
                    "type": "container",
                    "class": "pl-4",
                    "children": [
                      {
                        "elementType": "staticHtmlTag",
                        "tag": "span",
                        "text": "Bezug nehmen",
                        "type": "element",
                        "class": "font-bold text-9 text-gray-500"
                      }
                    ]
                  }
                ]
              },
              {
                "description": "flex 2 button",
                "type": "container",
                "class": "flex w-full h-10 px-4 space-x-2 pt-1.5",
                "children": [
                  {
                    "elementType": "staticHtmlTag",
                    "tag": "span",
                    "text": "wie besprochen",
                    "type": "element",
                    "class": "w-full bg-[#80898f] uppercase text-12 font-bold text-white text-center py-2",
                  },
                  {
                    "elementType": "staticHtmlTag",
                    "tag": "span",
                    "text": "telf. besprochen",
                    "type": "element",
                    "class": "w-full bg-[#80898f] uppercase text-12 font-bold text-white text-center py-2",
                  }
                ]
              },
              {
                "description": "flex subline Musterversand",
                "type": "container",
                "class": "relative w-full",
                "children": [
                  {
                    "description": "sum",
                    "type": "container",
                    "class": "pl-4 pt-4",
                    "children": [
                      {
                        "elementType": "staticHtmlTag",
                        "tag": "span",
                        "text": "Musterversand",
                        "type": "element",
                        "class": "font-bold text-9 text-gray-500"
                      }
                    ]
                  }
                ]
              },
              {
                "description": "flex 3 button",
                "type": "container",
                "class": "flex w-full h-10 px-4 space-x-2 pt-1.5",
                "children": [
                  {
                    "elementType": "staticHtmlTag",
                    "tag": "span",
                    "text": "keine",
                    "type": "element",
                    "class": "w-full bg-[#80898f] uppercase text-12 font-bold text-white text-center py-2",
                  },
                  {
                    "elementType": "staticHtmlTag",
                    "tag": "span",
                    "text": "heute",
                    "type": "element",
                    "class": "w-full bg-[#80898f] uppercase text-12 font-bold text-white text-center py-2",
                  },
                  {
                    "elementType": "staticHtmlTag",
                    "tag": "span",
                    "text": "morgen",
                    "type": "element",
                    "class": "w-full bg-[#80898f] uppercase text-12 font-bold text-white text-center py-2",
                  }
                ]
              },
              {
                "description": "flex 2 button",
                "type": "container",
                "class": "flex w-full h-10 px-4 space-x-2 pt-1.5",
                "children": [
                  {
                    "elementType": "staticHtmlTag",
                    "tag": "span",
                    "text": "übermorgen",
                    "type": "element",
                    "class": "w-full bg-[#80898f] uppercase text-12 font-bold text-white text-center py-2",
                  },
                  {
                    "elementType": "staticHtmlTag",
                    "tag": "span",
                    "text": "nächsten tage",
                    "type": "element",
                    "class": "w-full bg-[#80898f] uppercase text-12 font-bold text-white text-center py-2",
                  }
                ]
              },
              {
                "description": "flex 2 button",
                "type": "container",
                "class": "flex w-full h-10 px-4 space-x-2 pt-1.5",
                "children": [
                  {
                    "elementType": "staticHtmlTag",
                    "tag": "span",
                    "text": "gestern",
                    "type": "element",
                    "class": "w-full bg-[#80898f] uppercase text-12 font-bold text-white text-center py-2",
                  },
                  {
                    "elementType": "staticHtmlTag",
                    "tag": "span",
                    "text": "vorgestern",
                    "type": "element",
                    "class": "w-full bg-[#80898f] uppercase text-12 font-bold text-white text-center py-2",
                  }
                ]
              },
              {
                "description": "flex send button",
                "type": "container",
                "class": "flex w-full h-10 px-4 space-x-2 pt-1.5 mt-16",
                "children": [
                  {
                    "elementType": "staticHtmlTag",
                    "tag": "span",
                    "text": "email senden",
                    "type": "element",
                    "class": "w-full bg-primary uppercase text-12 font-bold text-white text-center py-2",
                  },
                  {
                    "elementType": "staticHtmlTag",
                    "tag": "span",
                    "text": "sms senden",
                    "type": "element",
                    "class": "w-full bg-primary uppercase text-12 font-bold text-white text-center py-2",
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "description": "2 col",
        "type": "container",
        "class": "w-full md:w-3/12 h-screen  md:mx-4",
        "children": [
          {
            "description": "Email Text headline",
            "type": "container",
            "class": "",
            "children": [
              {
                "description": "flex",
                "type": "container",
                "class": "relative flex items-start w-full",
                "children": [
                  {
                    "description": "sum",
                    "type": "container",
                    "class": "flex pl-4 pt-3",
                    "children": [
                      {
                        "elementType": "staticHtmlTag",
                        "tag": "span",
                        "text": "Email Text",
                        "type": "element",
                        "class": "font-bold text-12 pt-1.5"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Anrede textarea",
            "type": "container",
            "class": "pl-4 pt-4",
            "children": [
              {
                "elementType": "staticHtmlTag",
                "tag": "span",
                "text": "Anrede",
                "type": "element",
                "class": "font-bold text-9 text-gray-500"
              },
              {
                "type": "element",
                "elementType": "textareaInput",
                "key": "anrede1",
                "class": "mt-1 h-24 block w-full bg-gray-100 text-black border-gray-200 py-2 px-3  sm:text-sm"
              }
            ]
          },
          {
            "description": "Ankündigung textarea",
            "type": "container",
            "class": "pl-4 pt-4",
            "children": [
              {
                "elementType": "staticHtmlTag",
                "tag": "span",
                "text": "Ankündigung",
                "type": "element",
                "class": "font-bold text-9 text-gray-500"
              },
              {
                "type": "element",
                "elementType": "textareaInput",
                "key": "ankuendigung1",
                "class": "mt-1 h-24 block w-full bg-gray-100 text-black border-gray-200 py-2 px-3  sm:text-sm"
              }
            ]
          },
          {
            "description": "Email Text textarea",
            "type": "container",
            "class": "pl-4 pt-4",
            "children": [
              {
                "elementType": "staticHtmlTag",
                "tag": "span",
                "text": "Email Text",
                "type": "element",
                "class": "font-bold text-9 text-gray-500"
              },
              {
                "type": "element",
                "elementType": "textareaInput",
                "key": "emailtext1",
                "class": "mt-1 h-36 block w-full bg-gray-100 text-black border-gray-200 py-2 px-3  sm:text-sm"
              }
            ]
          },
          {
            "description": "SMS Text headline",
            "type": "container",
            "class": "pt-8",
            "children": [
              {
                "description": "flex",
                "type": "container",
                "class": "relative flex items-start w-full",
                "children": [
                  {
                    "description": "sum",
                    "type": "container",
                    "class": "flex pl-4 pt-3",
                    "children": [
                      {
                        "elementType": "staticHtmlTag",
                        "tag": "span",
                        "text": "SMS Text",
                        "type": "element",
                        "class": "font-bold text-12 pt-1.5"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "SMS Text textarea",
            "type": "container",
            "class": "pl-4 pt-4",
            "children": [
              {
                "elementType": "staticHtmlTag",
                "tag": "span",
                "text": "SMS Text",
                "type": "element",
                "class": "font-bold text-9 text-gray-500"
              },
              {
                "type": "element",
                "elementType": "textareaInput",
                "key": "smstext1",
                "class": "mt-1 h-24 block w-full bg-gray-100 text-black border-gray-200 py-2 px-3  sm:text-sm"
              }
            ]
          }
        ]
      },
      {
        "description": "3 col",
        "type": "container",
        "class": "w-full md:w-3/12 h-screen  md:mx-4",
        "children": [
          {
            "description": "Protokoll Text headline",
            "type": "container",
            "class": "",
            "children": [
              {
                "description": "flex",
                "type": "container",
                "class": "relative flex items-start w-full",
                "children": [
                  {
                    "description": "sum",
                    "type": "container",
                    "class": "flex pl-4 pt-3",
                    "children": [
                      {
                        "elementType": "staticHtmlTag",
                        "tag": "span",
                        "text": "Protokoll",
                        "type": "element",
                        "class": "font-bold text-12 pt-1.5"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Protokoll item",
            "type": "container",
            "class": "relative flex items-start w-full",
            "children": [
              {
                "description": "protokoll flex",
                "type": "container",
                "class": "flex pl-4 border-b border-gray-200 w-full text-11",
                "children": [
                  {
                    "elementType": "staticHtmlTag",
                    "tag": "div",
                    "text": "20.05.2022<br>09.07 Uhr",
                    "type": "element",
                    "class": "w-3/12 md:w-2/12 pt-2"
                  },
                  {
                    "elementType": "staticHtmlTag",
                    "tag": "div",
                    "text": "SMS erfolgreich versendet<br>Empfänger: Dominik Stahlschmidt<br>+4915114966080",
                    "type": "element",
                    "class": "w-9/12 md:w-10/12 pt-2 pb-4"
                  }
                ]
              }
            ]
          },
          {
            "description": "Protokoll item",
            "type": "container",
            "class": "relative flex items-start w-full",
            "children": [
              {
                "description": "protokoll flex",
                "type": "container",
                "class": "flex pl-4 border-b border-gray-200 w-full text-11",
                "children": [
                  {
                    "elementType": "staticHtmlTag",
                    "tag": "div",
                    "text": "20.05.2022<br>09.07 Uhr",
                    "type": "element",
                    "class": "w-3/12 md:w-2/12 pt-2"
                  },
                  {
                    "elementType": "staticHtmlTag",
                    "tag": "div",
                    "text": "SMS erfolgreich versendet<br>Empfänger: Dominik Stahlschmidt<br>+4915114966080",
                    "type": "element",
                    "class": "w-9/12 md:w-10/12 pt-2 pb-4"
                  }
                ]
              }
            ]
          },
          {
            "description": "Protokoll item",
            "type": "container",
            "class": "relative flex items-start w-full",
            "children": [
              {
                "description": "protokoll flex",
                "type": "container",
                "class": "flex pl-4 border-b border-gray-200 w-full text-11",
                "children": [
                  {
                    "elementType": "staticHtmlTag",
                    "tag": "div",
                    "text": "20.05.2022<br>09.07 Uhr",
                    "type": "element",
                    "class": "w-3/12 md:w-2/12 pt-2"
                  },
                  {
                    "elementType": "staticHtmlTag",
                    "tag": "div",
                    "text": "SMS erfolgreich versendet<br>Empfänger: Dominik Stahlschmidt<br>+4915114966080",
                    "type": "element",
                    "class": "w-9/12 md:w-10/12 pt-2 pb-4"
                  }
                ]
              }
            ]
          },
          {
            "description": "Protokoll item",
            "type": "container",
            "class": "relative flex items-start w-full",
            "children": [
              {
                "description": "protokoll flex",
                "type": "container",
                "class": "flex pl-4 border-b border-gray-200 w-full text-11",
                "children": [
                  {
                    "elementType": "staticHtmlTag",
                    "tag": "div",
                    "text": "20.05.2022<br>09.07 Uhr",
                    "type": "element",
                    "class": "w-3/12 md:w-2/12 pt-2"
                  },
                  {
                    "elementType": "staticHtmlTag",
                    "tag": "div",
                    "text": "SMS erfolgreich versendet<br>Empfänger: Dominik Stahlschmidt<br>+4915114966080",
                    "type": "element",
                    "class": "w-9/12 md:w-10/12 pt-2 pb-4"
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
}*/

/*****    SampleProject APP    *****/
/*[

{
    description: "cddp Dialog",
    type: "dialog",
    key: "cddpDialog",
    toggleDialog: true,
    dialogKey: "cddpDialog",
    class: "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle w-1/4",
    children: [
        {
            description: "dialog card",
            type: "container",
            class: "bg-white",
            children: [
                {
                    type: "container",
                    class: "shadow sm:rounded-md sm:overflow-hidden",
                    children: [
                        {
                            description: "dialog card header",
                            type: "container",
                            class: "flex justify-between px-4 py-2 bg-orangeColor text-left sm:px-6",
                            children: [
                                {
                                    description:
                                        "dialog card header title div",
                                    type: "container",
                                    class: "item w-full",
                                    children: [
                                        {
                                            description:
                                                "dialog card header title",
                                            type: "element",
                                            elementType: "staticHtmlTag",
                                            tag: "label",
                                            text: "CDDP Dialog",
                                            class: "text-sm leading-6 font-medium uppercase text-white",
                                        },
                                    ],
                                },
                                {
                                    description:
                                        "dialog card header close div",
                                    type: "container",
                                    class: "item w-2",
                                    children: [
                                        {
                                            description:
                                                "dialog card header close",
                                            type: "element",
                                            elementType: "staticHtmlTag",
                                            tag: "label",
                                            text: "close",
                                            class: "material-symbols-outlined align-middle pr-2 text-right text-white cursor-pointer",
                                            toggleDialog: true,
                                            dialogKey: "cddpDialog",
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            type: "container",
                            class: "bg-white py-6 px-4 sm:p-6",
                            children: [
                                {
                                    type: "container",
                                    class: "col-span-12 sm:col-span-12",
                                    children: [
                                        {
                                            type: "element",
                                            elementType: "staticHtmlTag",
                                            tag: "label",
                                            text: "Update your billing information. Please note that updating your location could affect your tax rates.",
                                            class: "mt-1 text-sm text-gray-500",
                                        },
                                    ],
                                },
                                {
                                    type: "container",
                                    class: "mt-6 grid grid-cols-12 gap-6",
                                    children: [
                                        {
                                            type: "container",
                                            class: "col-span-12 sm:col-span-12",
                                            children: [
                                                {
                                                    type: "element",
                                                    elementType:
                                                        "cddpEvent",
                                                    eventType: "create",
                                                    text: "CREATE",
                                                    tag: "label",
                                                    class: "block text-red-500 bg-transparent border border-solid border-red-500 hover:bg-primary hover:text-white active:bg-red-600 text-center font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 cursor-pointer",
                                                },
                                                {
                                                    type: "element",
                                                    elementType:
                                                        "cddpEvent",
                                                    eventType: "duplicate",
                                                    tag: "label",
                                                    text: "DUPLICATE",
                                                    class: "block text-red-500 bg-transparent border border-solid border-red-500 hover:bg-primary hover:text-white active:bg-red-600 text-center font-bold uppercase text-sm mt-6 px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 cursor-pointer",
                                                },
                                                {
                                                    type: "element",
                                                    elementType:
                                                        "cddpEvent",
                                                    eventType: "delete",
                                                    tag: "label",
                                                    text: "DELETE",
                                                    class: "block text-red-500 bg-transparent border border-solid border-red-500 hover:bg-primary hover:text-white active:bg-red-600 text-center font-bold uppercase text-sm mt-6 px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 cursor-pointer",
                                                },
                                                {
                                                    type: "element",
                                                    elementType:
                                                        "cddpEvent",
                                                    eventType: "protect",
                                                    tag: "label",
                                                    text: "PROTECT",
                                                    class: "block text-red-500 bg-transparent border border-solid border-red-500 hover:bg-primary hover:text-white active:bg-red-600 text-center font-bold uppercase text-sm mt-6 px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 cursor-pointer",
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
},
{
    description: "CARD1 dialog",
    type: "dialog",
    key: "projectCard1",
    toggleDialog: true,
    dialogKey: "projectCard1",
    class: "inline-block align-bottom bg-white rounded-md text-left overflow-hidden shadow-xl transform transition-all sm:align-middle w-1/2 h-96vH",
    children: [
        {
            description: "dialog card",
            type: "container",
            class: "bg-white",
            children: [
                {
                    description: "dialog card header",
                    type: "container",
                    class: "flex justify-between px-4 py-2 border-b  h-10 text-left sm:px-6",
                    children: [
                        {
                            description: "dialog card header title div",
                            type: "container",
                            class: "item w-full",
                            children: [
                                {
                                    description: "dialog card header title",
                                    type: "element",
                                    elementType: "staticHtmlTag",
                                    tag: "label",
                                    text: "Card 1 form",
                                    class: "text-sm leading-6 font-medium uppercase text-cardHeaderTitle",
                                },
                            ],
                        },
                        {
                            description: "dialog card header close div",
                            type: "container",
                            class: "item w-2",
                            children: [
                                {
                                    description: "dialog card header close",
                                    type: "element",
                                    elementType: "staticHtmlTag",
                                    tag: "label",
                                    text: "close",
                                    class: "material-symbols-outlined align-middle pr-2 text-right text-cardHeaderTitle cursor-pointer",
                                    toggleDialog: true,
                                    dialogKey: "projectCard1",
                                },
                            ],
                        },
                    ],
                },
                {
                    description: "dialog card content",
                    type: "container",
                    class: "mt-4",
                    children: [
                        {
                            description: "dialog card content",
                            type: "container",
                            class: "relative mx-6 my-2 w-full",
                            children: [
                                {
                                    description: "div row label",
                                    type: "container",
                                    class: "mt-4",
                                    children: [
                                        {
                                            description:
                                                "label Projektdaten",
                                            type: "element",
                                            elementType: "staticHtmlTag",
                                            tag: "div",
                                            text: "Projektdaten",
                                            class: "block font-medium text-sm text-gray-400",
                                        },
                                    ],
                                },
                                {
                                    description: "div row flex",
                                    type: "container",
                                    class: "flex justify-left text-gray-300 leading-3",
                                    children: [
                                        {
                                            description: "col1",
                                            type: "container",
                                            class: "w-1/3",
                                            children: [
                                                {
                                                    description: "label #",
                                                    type: "element",
                                                    elementType:
                                                        "staticHtmlTag",
                                                    tag: "div",
                                                    text: "#",
                                                    class: "block font-medium text-11",
                                                },
                                                {
                                                    description: "value #",
                                                    type: "element",
                                                    elementType:
                                                        "staticHtmlTag",
                                                    tag: "div",
                                                    text: "BE-20220129-001",
                                                    class: "block text-md leading-6 border-b-2 border-dotted mr-12",
                                                },
                                            ],
                                        },
                                        {
                                            description: "col2",
                                            type: "container",
                                            class: "w-1/3",
                                            children: [
                                                {
                                                    description: "label #",
                                                    type: "element",
                                                    elementType:
                                                        "staticHtmlTag",
                                                    tag: "div",
                                                    text: "sub",
                                                    class: "block font-medium text-11",
                                                },
                                                {
                                                    description: "value #",
                                                    type: "element",
                                                    elementType:
                                                        "staticHtmlTag",
                                                    tag: "div",
                                                    text: "001",
                                                    class: "block text-md leading-6 border-b-2 border-dotted mr-12",
                                                },
                                            ],
                                        },
                                        {
                                            description: "col3",
                                            type: "container",
                                            class: "w-1/3",
                                            children: [
                                                {
                                                    description: "label #",
                                                    type: "element",
                                                    elementType:
                                                        "staticHtmlTag",
                                                    tag: "div",
                                                    text: "date",
                                                    class: "block font-medium text-11",
                                                },
                                                {
                                                    description: "value #",
                                                    type: "element",
                                                    elementType:
                                                        "staticHtmlTag",
                                                    tag: "div",
                                                    text: "26.01.2022 14:55",
                                                    class: "block text-md leading-6 border-b-2 border-dotted mr-12",
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    description: "div row label",
                                    type: "container",
                                    class: "mt-8",
                                    children: [
                                        {
                                            description:
                                                "label Projektdaten",
                                            type: "element",
                                            elementType: "staticHtmlTag",
                                            tag: "div",
                                            text: "Projekttyp",
                                            class: "block font-medium text-sm text-gray-400",
                                        },
                                    ],
                                },
                                {
                                    description: "div row flex",
                                    type: "container",
                                    class: "flex justify-left text-gray-600 leading-3",
                                    children: [
                                        {
                                            description: "col1",
                                            type: "container",
                                            class: "mr-12 w-64",
                                            children: [
                                                {
                                                    description: "label #",
                                                    type: "element",
                                                    elementType:
                                                        "staticHtmlTag",
                                                    tag: "div",
                                                    text: "",
                                                    class: "block font-medium text-11",
                                                },
                                                {
                                                    type: "element",
                                                    elementType:
                                                        "selectExtendedInput",
                                                    key: "generalProjectCategory",
                                                    title: "Projekttyp",
                                                    items: [
                                                        {
                                                            id: "VA",
                                                            name: "VA - Versuchsauftrag",
                                                        },
                                                        {
                                                            id: "FM",
                                                            name: "FM - Farbmuster",
                                                        },
                                                        {
                                                            id: "BE",
                                                            name: "BE - Beschichtungsempfehlung",
                                                        },
                                                    ],
                                                    class: "mt-1 block w-1/2 text-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm",
                                                    style: "",
                                                    optionClass: "",
                                                    optionStyle: "",
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    description: "div row label",
                                    type: "container",
                                    class: "mt-8",
                                    children: [
                                        {
                                            description:
                                                "label Projektdaten",
                                            type: "element",
                                            elementType: "staticHtmlTag",
                                            tag: "div",
                                            text: "Projektfokus",
                                            class: "block font-medium text-sm text-gray-400",
                                        },
                                    ],
                                },
                                {
                                    description: "div row flex",
                                    type: "container",
                                    class: "flex justify-left text-gray-600 leading-3",
                                    children: [
                                        {
                                            description: "col1",
                                            type: "container",
                                            class: "mr-12 w-1/2",
                                            children: [
                                                {
                                                    description: "label #",
                                                    type: "element",
                                                    elementType:
                                                        "staticHtmlTag",
                                                    tag: "div",
                                                    text: "",
                                                    class: "block font-medium text-11",
                                                },
                                                {
                                                    type: "element",
                                                    elementType:
                                                        "textInput",
                                                    key: "generalProjectFocus",
                                                    class: "mt-1 block w-full border rounded border-gray-300 focus:outline-none focus:ring-gray-900 focus:border-gray-900 py-2 px-3  sm:text-sm",
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    description: "div row label",
                                    type: "container",
                                    class: "mt-8",
                                    children: [
                                        {
                                            description:
                                                "label Projektdaten",
                                            type: "element",
                                            elementType: "staticHtmlTag",
                                            tag: "div",
                                            text: "Projektbeschreibung",
                                            class: "block font-medium text-sm text-gray-400",
                                        },
                                    ],
                                },
                                {
                                    description: "div row flex",
                                    type: "container",
                                    class: "flex justify-left text-gray-600 leading-3",
                                    children: [
                                        {
                                            description: "col1",
                                            type: "container",
                                            class: "mr-12 w-full",
                                            children: [
                                                {
                                                    description: "label #",
                                                    type: "element",
                                                    elementType:
                                                        "staticHtmlTag",
                                                    tag: "div",
                                                    text: "",
                                                    class: "block font-medium text-11",
                                                },
                                                {
                                                    type: "element",
                                                    elementType:
                                                        "textInput",
                                                    key: "generalProjectDescription",
                                                    class: "mt-1 block w-full rounded border border-gray-300 focus:outline-none focus:ring-gray-900 focus:border-gray-900 py-2 px-3  sm:text-sm",
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    description: "div row label",
                                    type: "container",
                                    class: "mt-8",
                                    children: [
                                        {
                                            description:
                                                "label Projektdaten",
                                            type: "element",
                                            elementType: "staticHtmlTag",
                                            tag: "div",
                                            text: "Projektperformance",
                                            class: "block font-medium text-sm text-gray-400",
                                        },
                                    ],
                                },
                                {
                                    description: "div row flex",
                                    type: "container",
                                    class: "flex justify-left text-gray-600 leading-3",
                                    children: [
                                        {
                                            description: "col1",
                                            type: "container",
                                            class: "mr-12 w-full",
                                            children: [
                                                {
                                                    description: "label #",
                                                    type: "element",
                                                    elementType:
                                                        "staticHtmlTag",
                                                    tag: "div",
                                                    text: "",
                                                    class: "block font-medium text-11",
                                                },
                                                {
                                                    type: "element",
                                                    elementType:
                                                        "textInput",
                                                    key: "generalProjectPerformance",
                                                    class: "mt-1 block w-full rounded border border-gray-300 focus:outline-none focus:ring-gray-900 focus:border-gray-900 py-2 px-3  sm:text-sm",
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    description: "div row label",
                                    type: "container",
                                    class: "mt-8",
                                    children: [
                                        {
                                            description:
                                                "label Projektdaten",
                                            type: "element",
                                            elementType: "staticHtmlTag",
                                            tag: "div",
                                            text: "Text area example",
                                            class: "block font-medium text-sm text-gray-400",
                                        },
                                    ],
                                },
                                {
                                    description: "div row flex",
                                    type: "container",
                                    class: "flex justify-left text-gray-600 leading-3",
                                    children: [
                                        {
                                            description: "col1",
                                            type: "container",
                                            class: "mr-12 w-full",
                                            children: [
                                                {
                                                    description: "label #",
                                                    type: "element",
                                                    elementType:
                                                        "staticHtmlTag",
                                                    tag: "div",
                                                    text: "",
                                                    class: "block font-medium text-11",
                                                },
                                                {
                                                    type: "element",
                                                    elementType:
                                                        "textareaInput",
                                                    key: "textareaInputExample",
                                                    class: "mt-1 h-64 block w-full rounded border text-black border-gray-300 focus:outline-none focus:ring-gray-900 focus:border-gray-900 py-2 px-3  sm:text-sm",
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
},
{
    description: "CARD2 dialog Full screen",
    type: "dialog",
    key: "projectCard2FS",
    class: "fixed w-full h-screen top-0 left-0 flex inset-0 z-50",
    children: [
        {
            type: "container",
            class: "relative my-0  w-full h-screen",
            children: [
                {
                    type: "container",
                    class: "border-0 shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none w-full h-screen",
                    children: [
                        {
                            type: "container",
                            class: "space-y-0 w-full h-full",
                            children: [
                                {
                                    type: "container",
                                    class: "shadow sm:overflow-hidden",
                                    children: [
                                        {
                                            type: "container",
                                            class: "flex justify-between px-4 py-2 bg-cardHeaderBg h-10 text-left sm:px-6",
                                            children: [
                                                {
                                                    type: "container",
                                                    class: "item w-full",
                                                    children: [
                                                        {
                                                            type: "element",
                                                            elementType:
                                                                "staticHtmlTag",
                                                            tag: "label",
                                                            text: "Project card form",
                                                            class: "text-sm leading-6 font-medium uppercase text-cardHeaderTitle",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "container",
                                                    class: "item w-2",
                                                    children: [
                                                        {
                                                            type: "element",
                                                            elementType:
                                                                "staticHtmlTag",
                                                            tag: "label",
                                                            text: "close",
                                                            class: "material-symbols-outlined align-middle pr-2 text-right text-cardHeaderTitle cursor-pointer",
                                                            toggleDialog: true,
                                                            dialogKey:
                                                                "projectCard2FS",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            type: "container",
                                            class: "bg-white py-6 px-4 sm:p-6",
                                            children: [
                                                {
                                                    type: "container",
                                                    class: "col-span-12 sm:col-span-12",
                                                    children: [
                                                        {
                                                            type: "element",
                                                            elementType:
                                                                "staticHtmlTag",
                                                            tag: "label",
                                                            text: "Update your billing information. Please note that updating your location could affect your tax rates.",
                                                            class: "mt-1 text-sm text-gray-500",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "container",
                                                    class: "mt-6 grid grid-cols-12 gap-6",
                                                    children: [
                                                        {
                                                            type: "container",
                                                            class: "col-span-12 sm:col-span-12",
                                                            children: [
                                                                {
                                                                    type: "element",
                                                                    elementType:
                                                                        "staticHtmlTag",
                                                                    tag: "label",
                                                                    text: "Name",
                                                                    class: "block text-sm font-medium text-gray-700",
                                                                },
                                                                {
                                                                    type: "element",
                                                                    elementType:
                                                                        "textInput",
                                                                    key: "first_name",
                                                                    class: "mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm",
                                                                },
                                                            ],
                                                        },
                                                        {
                                                            type: "container",
                                                            class: "col-span-12 sm:col-span-12",
                                                            children: [
                                                                {
                                                                    type: "element",
                                                                    elementType:
                                                                        "staticHtmlTag",
                                                                    tag: "label",
                                                                    text: "Email",
                                                                    class: "block text-sm font-medium text-gray-700",
                                                                },
                                                                {
                                                                    type: "element",
                                                                    elementType:
                                                                        "textInput",
                                                                    key: "email",
                                                                    class: "mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm",
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            type: "container",
                            class: "flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b",
                            children: [
                                {
                                    type: "element",
                                    elementType: "staticHtmlTag",
                                    tag: "label",
                                    text: "submit",
                                    class: "text-red-500 bg-transparent border border-solid border-red-500 hover:bg-primary hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 cursor-pointer",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
},
{
    description: "content head",
    type: "container",
    class: "bg-contentHead p-6 w-full",
    children: [
        {
            description: "text container",
            type: "container",
            class: "",
            children: [
                {
                    description: "FU headline",
                    type: "element",
                    elementType: "staticHtmlTag",
                    tag: "label",
                    text: "FU",
                    class: "text-4xl uppercase font-bold text-orangeColor py-2",
                },
                {
                    description: "flex div row",
                    type: "container",
                    class: "flex flex-wrap items-center justify-between",
                    children: [
                        {
                            description: "content header col 1",
                            type: "container",
                            class: "inline-flex flex-col leading-6",
                            children: [
                                {
                                    description: "element headings",
                                    type: "element",
                                    elementType: "staticHtmlTag",
                                    tag: "label",
                                    text: "BESCHICHTUNGSPROJEKT #VA2102-006",
                                    class: "text-xl font-bold",
                                },
                                {
                                    description: "element headings",
                                    type: "element",
                                    elementType: "staticHtmlTag",
                                    tag: "label",
                                    text: "Sperrklinke VW Polo",
                                    class: "text-sm font-bold",
                                },
                                {
                                    description: "element headings",
                                    type: "element",
                                    elementType: "staticHtmlTag",
                                    tag: "label",
                                    text: "UTOM.berlin",
                                    class: "text-gray-400",
                                },
                                {
                                    description: "element headings",
                                    type: "element",
                                    elementType: "staticHtmlTag",
                                    tag: "label",
                                    text: "Dominik Stahlschmidt",
                                    class: "text-gray-400",
                                },
                            ],
                        },
                        {
                            description: "content header col 2",
                            type: "container",
                            class: "inline-flex flex-col leading-6",
                            children: [
                                {
                                    description: "element headings",
                                    type: "element",
                                    elementType: "staticHtmlTag",
                                    tag: "label",
                                    text: "Zink-Nickel + Passivierung transparent Trommel",
                                    class: "text-gray-400",
                                },
                                {
                                    description: "element headings",
                                    type: "element",
                                    elementType: "staticHtmlTag",
                                    tag: "label",
                                    text: "TC 1000",
                                    class: "text-gray-400",
                                },
                            ],
                        },
                        {
                            description: "content header col 3",
                            type: "container",
                            class: "inline-flex flex-row pr-4",
                            children: [
                                {
                                    type: "element",
                                    elementType: "staticHtmlTag",
                                    tag: "label",
                                    text: "vpn_key",
                                    toggleDialog: true,
                                    dialogKey: "cddpDialog",
                                    class: "material-symbols-outlined text-20 pt-0 text-gray-400 hover:text-primary cursor-pointer",
                                },
                                {
                                    type: "element",
                                    elementType: "staticHtmlTag",
                                    tag: "label",
                                    text: "library_add",
                                    toggleDialog: true,
                                    dialogKey: "cddpDialog",
                                    class: "material-symbols-outlined text-20 pl-2 text-gray-400 hover:text-primary cursor-pointer",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
},
{
    description: "boxes",
    type: "container",
    class: "flex flex-wrap bg-contentButton px-6 py-4 text-white",
    children: [
        {
            description: "boxes container",
            type: "container",
            class: "w-full  p-1 flex flex-row ",
            children: [
                {
                    description: "box 1",
                    type: "container",
                    class: "relative bg-orangeColor w-1/6 h-24 p-3 mt-4 mr-4",
                    children: [
                        {
                            type: "element",
                            elementType: "staticHtmlTag",
                            tag: "div",
                            text: "1",
                            class: "absolute top-4 left-4",
                        },
                    ],
                },
                {
                    description: "box 2",
                    type: "container",
                    class: "bg-gray-800 w-1/6 h-24 p-3 m-4",
                    children: [
                        {
                            description: "text container",
                            type: "container",
                            class: "items-center",
                            children: [
                                {
                                    description: "text container",
                                    type: "container",
                                    class: "font-bold text-sm",
                                    children: [
                                        {
                                            type: "element",
                                            elementType: "staticHtmlTag",
                                            tag: "span",
                                            text: "2",
                                            class: "",
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    description: "box 3",
                    type: "container",
                    class: "bg-gray-800 w-1/6 h-24 p-3 m-4",
                    children: [
                        {
                            description: "text container",
                            type: "container",
                            class: "items-center",
                            children: [
                                {
                                    description: "text container",
                                    type: "container",
                                    class: "font-bold text-sm",
                                    children: [
                                        {
                                            type: "element",
                                            elementType: "staticHtmlTag",
                                            tag: "span",
                                            text: "3",
                                            class: "",
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    description: "box 4",
                    type: "container",
                    class: "bg-gray-800 w-1/6 h-24 p-3 m-4",
                    children: [
                        {
                            description: "text container",
                            type: "container",
                            class: "items-center",
                            children: [
                                {
                                    description: "text container",
                                    type: "container",
                                    class: "font-bold text-sm",
                                    children: [
                                        {
                                            type: "element",
                                            elementType: "staticHtmlTag",
                                            tag: "span",
                                            text: "4",
                                            class: "",
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    description: "box 5",
                    type: "container",
                    class: "bg-gray-800 w-1/6 h-24 p-3 m-4",
                    children: [
                        {
                            description: "text container",
                            type: "container",
                            class: "items-center",
                            children: [
                                {
                                    description: "text container",
                                    type: "container",
                                    class: "font-bold text-sm",
                                    children: [
                                        {
                                            type: "element",
                                            elementType: "staticHtmlTag",
                                            tag: "span",
                                            text: "5",
                                            class: "",
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
},
{
    description: "cards container",
    type: "container",
    class: "px-6 py-4 bg-white w-full h-full",
    children: [
        {
            description: "CONTENT row 1",
            type: "container",
            class: "flex flex-col md:flex-row md:space-x-4",
            children: [
                {
                    description: "card 1 container",
                    type: "container",
                    class: "w-full md:w-1/2 mt-6",
                    children: [
                        {
                            description: "card 1 off header",
                            type: "container",
                            class: " flex-inline pl-3",
                            children: [
                                {
                                    description:
                                        "card1 above card headline",
                                    type: "container",
                                    class: "text-gray-400 leading-none",
                                    children: [
                                        {
                                            description: "FU headline",
                                            type: "element",
                                            elementType: "staticHtmlTag",
                                            tag: "label",
                                            text: "card",
                                            class: "",
                                        },
                                        {
                                            type: "element",
                                            elementType: "staticHtmlTag",
                                            tag: "span",
                                            text: "1",
                                            class: "text-gray-500 font-bold",
                                        },
                                    ],
                                },
                                {
                                    description: "card1 headline subtext",
                                    type: "container",
                                    class: "",
                                    children: [
                                        {
                                            description: "FU headline",
                                            type: "element",
                                            elementType: "staticHtmlTag",
                                            tag: "label",
                                            text: "Individual from contorls automatically recieve some globle styling",
                                            class: "text-xs",
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            description: "card 1 header",
                            type: "container",
                            class: "bg-cardHeaderBg h-10 pl-3 mt-6",
                            children: [
                                {
                                    description:
                                        "card1 above card headline",
                                    type: "container",
                                    toggleDialog: true,
                                    dialogKey: "projectCard1",
                                    class: "text-cardHeaderTitle py-2",
                                    children: [
                                        {
                                            description: "FU headline",
                                            type: "element",
                                            elementType: "staticHtmlTag",
                                            tag: "label",
                                            text: "PROJEKTDATEN",
                                            class: "text-sm ",
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            description: "card 1 content",
                            type: "container",
                            class: "bg-white flex-col pl-3 border",
                            children: [
                                {
                                    description: "card1 row 1",
                                    type: "container",
                                    class: "text-cardHeaderTitle flex w-full mt-4 px-4 pb-0",
                                    children: [
                                        {
                                            description: "element icon",
                                            type: "element",
                                            elementType: "staticHtmlTag",
                                            tag: "div",
                                            text: "explicit",
                                            class: "material-symbols-outlined text-primary align-middle pr-2 w-1/8",
                                        },
                                        {
                                            description:
                                                "element project number",
                                            type: "element",
                                            elementType: "staticHtmlTag",
                                            tag: "div",
                                            text: "",
                                            assignedKey:
                                                "generalProjectNumber",
                                            class: "text text-black font-bold  w-5/6",
                                        },
                                        {
                                            description: "element date",
                                            type: "element",
                                            elementType: "staticHtmlTag",
                                            tag: "div",
                                            text: "",
                                            assignedKey: "date",
                                            class: "text-12 text-right text-cardHeaderTitle  w-1/6 pr-2",
                                        },
                                    ],
                                },
                                {
                                    description: "card4 row 2",
                                    type: "container",
                                    class: "text-cardHeaderTitle flex w-full mt-0 px-4 pb-4",
                                    children: [
                                        {
                                            description:
                                                "element project number",
                                            type: "element",
                                            elementType: "staticHtmlTag",
                                            tag: "div",
                                            text: "Versuchsauftrag",
                                            class: "text text-black w-5/6 pl-8",
                                        },
                                    ],
                                },
                                {
                                    description: "card4 row 3 divider",
                                    type: "container",
                                    class: "text-cardHeaderTitle flex mt-0  pb-4",
                                    children: [
                                        {
                                            description:
                                                "element project number",
                                            type: "element",
                                            elementType: "staticHtmlTag",
                                            tag: "div",
                                            text: " ",
                                            class: "w-full border border-gray-100 ml-4 mr-8",
                                        },
                                    ],
                                },
                                {
                                    description: "card4 row 3",
                                    type: "container",
                                    class: "text-cardHeaderTitle flex w-full mt-0 px-4",
                                    children: [
                                        {
                                            description:
                                                "element project number",
                                            type: "element",
                                            elementType: "staticHtmlTag",
                                            tag: "div",
                                            text: "Projekttitel",
                                            class: "text-12 w-full font-bold pl-8",
                                        },
                                    ],
                                },
                                {
                                    description: "card4 row 4",
                                    type: "container",
                                    class: "text-cardHeaderTitle flex w-full mt-0 px-4 pb-4",
                                    children: [
                                        {
                                            description:
                                                "element project number",
                                            type: "element",
                                            elementType: "staticHtmlTag",
                                            tag: "div",
                                            text: "",
                                            assignedKey:
                                                "generalProjectTitle",
                                            class: "text-sm text-black w-5/6 pl-8",
                                        },
                                    ],
                                },
                                {
                                    description: "card1 row 5",
                                    type: "container",
                                    class: "text-cardHeaderTitle flex w-full mt-0 px-4",
                                    children: [
                                        {
                                            description:
                                                "element project number",
                                            type: "element",
                                            elementType: "staticHtmlTag",
                                            tag: "div",
                                            text: "Projektbeschreibung",
                                            class: "text-12 w-full font-bold pl-8",
                                        },
                                    ],
                                },
                                {
                                    description: "card1 row 6",
                                    type: "container",
                                    class: "text-cardHeaderTitle flex w-full mt-0 px-4 pb-24",
                                    children: [
                                        {
                                            description:
                                                "element project number",
                                            type: "element",
                                            elementType: "staticHtmlTag",
                                            tag: "div",
                                            text: "",
                                            assignedKey:
                                                "generalProjectDescription",
                                            class: "text-12 text-black w-5/6 pl-8",
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    description: "card 2 container",
                    type: "container",
                    class: "w-full md:w-1/2 mt-6",
                    children: [
                        {
                            description: "card 2 off header",
                            type: "container",
                            class: " flex-inline pl-3",
                            children: [
                                {
                                    description:
                                        "card1 above card headline",
                                    type: "container",
                                    class: "text-gray-400 leading-none",
                                    children: [
                                        {
                                            description: "FU headline",
                                            type: "element",
                                            elementType: "staticHtmlTag",
                                            tag: "label",
                                            text: "card",
                                            class: "",
                                        },
                                        {
                                            type: "element",
                                            elementType: "staticHtmlTag",
                                            tag: "span",
                                            text: "2",
                                            class: "text-gray-500 font-bold",
                                        },
                                    ],
                                },
                                {
                                    description: "card2 headline subtext",
                                    type: "container",
                                    class: "",
                                    children: [
                                        {
                                            description: "FU headline",
                                            type: "element",
                                            elementType: "staticHtmlTag",
                                            tag: "label",
                                            text: "Individual from contorls automatically recieve some globle styling",
                                            class: "text-xs",
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            description: "card 2 header",
                            type: "container",
                            class: "bg-cardHeaderBg h-10 pl-3 mt-6",
                            toggleDialog: true,
                            dialogKey: "projectCard2FS",
                            children: [
                                {
                                    description:
                                        "card1 above card headline",
                                    type: "container",
                                    class: "text-cardHeaderTitle py-2",
                                    children: [
                                        {
                                            description: "FU headline",
                                            type: "element",
                                            elementType: "staticHtmlTag",
                                            tag: "label",
                                            text: "UNTERNEHMEN",
                                            class: "text-sm ",
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            description: "card 2 content",
                            type: "container",
                            class: "bg-white flex-col pl-3 border",
                            children: [
                                {
                                    description: "card1 row 1",
                                    type: "container",
                                    class: "text-cardHeaderTitle flex w-full mt-4 px-4 pb-0",
                                    children: [
                                        {
                                            description: "element icon",
                                            type: "element",
                                            elementType: "staticHtmlTag",
                                            tag: "div",
                                            text: "explicit",
                                            class: "material-symbols-outlined text-primary align-middle pr-2 w-1/8",
                                        },
                                        {
                                            description: "element company",
                                            type: "element",
                                            elementType: "staticHtmlTag",
                                            tag: "div",
                                            text: "UTOMberlin",
                                            class: "text text-black font-bold  w-5/6",
                                        },
                                    ],
                                },
                                {
                                    description: "card1 row 2",
                                    type: "container",
                                    class: "text-cardHeaderTitle flex w-full mt-0 px-4 pb-4",
                                    children: [
                                        {
                                            description:
                                                "element project number",
                                            type: "element",
                                            elementType: "staticHtmlTag",
                                            tag: "div",
                                            text: "Berlin",
                                            class: "text-12 text-black w-5/6 pl-8",
                                        },
                                    ],
                                },
                                {
                                    description: "card1 row 3 divider",
                                    type: "container",
                                    class: "text-cardHeaderTitle flex mt-0  pb-4",
                                    children: [
                                        {
                                            description:
                                                "element project number",
                                            type: "element",
                                            elementType: "staticHtmlTag",
                                            tag: "div",
                                            text: " ",
                                            class: "w-full border border-gray-100 ml-4 mr-8",
                                        },
                                    ],
                                },
                                {
                                    description: "card1 row 3",
                                    type: "container",
                                    class: "text-cardHeaderTitle flex w-full mt-0 px-4",
                                    children: [
                                        {
                                            description:
                                                "element project number",
                                            type: "element",
                                            elementType: "staticHtmlTag",
                                            tag: "div",
                                            text: "Projekttitel",
                                            class: "text-12 w-full font-bold pl-8",
                                        },
                                    ],
                                },
                                {
                                    description: "card1 row 4",
                                    type: "container",
                                    class: "text-cardHeaderTitle flex w-full mt-0 px-4 pb-4",
                                    children: [
                                        {
                                            description:
                                                "element project number",
                                            type: "element",
                                            elementType: "staticHtmlTag",
                                            tag: "div",
                                            text: "Sperrklinke",
                                            class: "text-sm text-black w-5/6 pl-8",
                                        },
                                    ],
                                },
                                {
                                    description: "card1 row 5",
                                    type: "container",
                                    class: "text-cardHeaderTitle flex w-full mt-0 px-4",
                                    children: [
                                        {
                                            description:
                                                "element project number",
                                            type: "element",
                                            elementType: "staticHtmlTag",
                                            tag: "div",
                                            text: "Projektbeschreibung",
                                            class: "text-12 w-full font-bold pl-8",
                                        },
                                    ],
                                },
                                {
                                    description: "card1 row 6",
                                    type: "container",
                                    class: "text-cardHeaderTitle flex w-full mt-0 px-4 pb-24",
                                    children: [
                                        {
                                            description:
                                                "element project number",
                                            type: "element",
                                            elementType: "staticHtmlTag",
                                            tag: "div",
                                            text: "Fliesstext in diesem Bereich",
                                            class: "text-12 text-black w-5/6 pl-8",
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
},
];*/

/*****    SINGLE APP RED SCREEN    *****/
/*{
  "description": "app start window",
    "type": "container",
    "class": "bg-red-500 w-screen h-screen flex flex-col justify-center ",
    "children": [
  {
    "description": "signIn email/password step 1",
    "type": "container",
    "class": "sm:mx-auto w-full",
    "children": [
      {
        "description": "sign window card bg",
        "type": "container",
        "class": "bg-authBg",
        "children": [
          {
            "description": "logo image div row 1",
            "type": "container",
            "class": "py-8 px-0 h-1/3 sm:px-10 text-center",
            "children": [
              {
                "description": "logo image",
                "type": "element",
                "elementType": "staticHtmlTag",
                "tag": "span",
                "text": "singleApp01_template",
                "class": "text-xl font-bold"
              }
            ]
          }
        ]
      }

    ]
  }
]
}*/

/*****    dark LOGIN SCREEN    *****/
/*{
  "description": "login screen container",
    "type": "container",
    "class": "min-h-screen bg-authFullBg flex flex-col justify-center ",
    "children": [
  {
    "description": "signIn email/password step 1",
    "type": "container",
    "class": "mt-8 sm:mx-auto w-full sm:w-72",
    "children": [
      {
        "description": "sign window card bg",
        "type": "container",
        "class": "bg-transparent border rounded-md border-dashed",
        "children": [
          {
            "description": "logo image div row 1",
            "type": "container",
            "class": "pt-8 px-0 h-1/3 sm:px-10",
            "children": [
              {
                "description": "logo image",
                "type": "element",
                "elementType": "navEvent",
                "eventType": "resetNav",
                "tag": "img",
                "src": "static/img/logo_utom_berlin_01.png",
                "class": "cursor-pointer mx-auto pt-0 w-48 hidden md:block"
              }
            ]
          },
          {
            "description": "willkommen row 2",
            "type": "container",
            "class": "pt-4 px-4  sm:px-4",
            "children": [
              {
                "description": "logo image div",
                "type": "container",
                "class": "w-full text-center leading-4",
                "children": [
                  {
                    "description": "logo image",
                    "type": "element",
                    "elementType": "staticHtmlTag",
                    "tag": "span",
                    "text": "WILLKOMMEN ZUR EINRICHTUNG<br>DER AUTHORISATION",
                    "class": "text-white text-12 font-bold"
                  }
                ]
              }
            ]
          },
          {
            "description": "type in description row 3",
            "type": "container",
            "class": "pt-20 px-4  sm:px-6",
            "children": [
              {
                "description": "logo image div",
                "type": "container",
                "class": "w-full text-12 text-center",
                "children": [
                  {
                    "description": "logo image",
                    "type": "element",
                    "elementType": "staticHtmlTag",
                    "tag": "span",
                    "text": "1. Bitte geben Sie Ihre Email und<br>das temporäre Passwort ein",
                    "class": "text-white"
                  }
                ]
              }
            ]
          },
          {
            "description": "type in description row 3",
            "type": "container",
            "class": "pt-6 px-4  sm:px-6",
            "children": [
              {
                "description": "logo image div",
                "type": "container",
                "class": "w-full text-11 text-center",
                "children": [
                  {
                    "description": "logo image",
                    "type": "element",
                    "elementType": "staticHtmlTag",
                    "tag": "span",
                    "text": "email",
                    "class": "text-white"
                  }
                ]
              }
            ]
          },
          {
            "description": "email input in row 4",
            "type": "container",
            "class": "px-4 sm:pt-1",
            "children": [
              {
                "description": "logo image div",
                "type": "container",
                "class": "w-full text-12 text-center",
                "children": [
                  {
                    "type": "element",
                    "elementType": "textInput",
                    "key": "email",
                    "class": "appearance-none block w-full px-3 rounded-md py-2 border border-gray-300  placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  }
                ]
              }
            ]
          },
          {
            "description": "type in description row 3",
            "type": "container",
            "class": "pt-6 px-4  sm:px-6",
            "children": [
              {
                "description": "logo image div",
                "type": "container",
                "class": "w-full text-11 text-center",
                "children": [
                  {
                    "description": "logo image",
                    "type": "element",
                    "elementType": "staticHtmlTag",
                    "tag": "span",
                    "text": "temporary password",
                    "class": "text-white"
                  }
                ]
              }
            ]
          },
          {
            "description": "password input in row 5",
            "type": "container",
            "class": "px-4 sm:pt-1",
            "children": [
              {
                "description": "logo image div",
                "type": "container",
                "class": "w-full text-12 text-center",
                "children": [
                  {
                    "type": "element",
                    "elementType": "textInput",
                    "key": "password",
                    "class": "appearance-none block w-full rounded-md px-3 py-2 border border-gray-300  placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  }
                ]
              }
            ]
          },
          {
            "description": "sign In button in row 6",
            "type": "container",
            "class": "pt-8 pb-8 px-4  sm:px-8",
            "children": [
              {
                "description": "logo image div",
                "type": "container",
                "class": "mt-0 w-full text-12 text-center",
                "children": [
                  {
                    "type": "element",
                    "elementType": "cddpEvent",
                    "eventType": "duplicate",
                    "tag": "label",
                    "text": "SIGN IN",
                    "class": "block text-white bg-red-500  hover:bg-primary hover:text-white active:bg-red-600 text-center font-bold uppercase text-sm mt-6 px-6 py-3 rounded-md outline-none focus:outline-none mr-1 mb-1 cursor-pointer"
                  }
                ]
              }
            ]
          },
          {
            "description": "SignUP in description row 7",
            "type": "container",
            "class": "py-4 px-4  sm:px-6",
            "children": [
              {
                "description": "logo image div",
                "type": "container",
                "class": "w-full text-12 text-center",
                "children": [
                  {
                    "description": "logo image",
                    "type": "element",
                    "elementType": "staticHtmlTag",
                    "tag": "span",
                    "text": "New to dnamy?",
                    "class": "text-white"
                  },
                  {
                    "description": "logo image",
                    "type": "element",
                    "elementType": "staticHtmlTag",
                    "tag": "span",
                    "text": "Sign Up",
                    "class": "pl-2 text-primary"
                  }
                ]
              }
            ]
          },
          {
            "description": "password reset in description row 8",
            "type": "container",
            "class": "py-1 px-4  sm:px-6",
            "children": [
              {
                "description": "logo image div",
                "type": "container",
                "class": "w-full text-11 text-center",
                "children": [

                  {
                    "description": "logo image",
                    "type": "element",
                    "elementType": "staticHtmlTag",
                    "tag": "span",
                    "text": "Password reset?",
                    "class": "pl-2 text-white"
                  }
                ]
              }
            ]
          },
        ]
      }

    ]
  }
]
}*/

/*****    LOGIN SCREEN new gray    *****/
/*[
  {
    "screenType": "signIn",
    "description": "login screen container",
    "type": "container",
    "class": "flex justify-center items-center h-screen bg-authBeige",
    "children": [
      {
        "description": "display block desktop shadow / mobile full",
        "type": "container",
        "class": "relative bg-white shadow-2xl border-gray-300 h-screen w-screen text-12 md:h-authModal md:w-72 md:border",
        "children": [
          {
            "description": "display header",
            "type": "container",
            "class": "relative h-36 bg-authGrey mx-2 mt-2",
            "children": [
              {
                "description": "display absolute center center",
                "type": "container",
                "class": "absolute bottom-14 w-full text-center text-xl",
                "children": [
                  {
                    "description": "display _slut",
                    "elementType": "staticHtmlTag",
                    "tag": "span",
                    "text": "dxp",
                    "type": "element",
                    "class": "text-red-600 font-bold"
                  },
                  {
                    "description": "display .dnamy.com",
                    "elementType": "staticHtmlTag",
                    "tag": "span",
                    "text": ".dnamy.com",
                    "type": "element",
                    "class": "font-bold text-white"
                  }
                ]
              }
            ]
          },
          {
            "description": "input form",
            "type": "container",
            "class": "flex flex-col items-center w-full text-12",
            "children": [
              {
                "description": "display hint",
                "elementType": "staticHtmlTag",
                "tag": "div",
                "text": "Log in to your account",
                "type": "element",
                "class": "mt-8"
              },
              {
                "description": "input email ",
                "textInputType": "email",
                "elementType": "textInput",
                "placeholder": "Email address",
                "type": "element",
                "autofocus": "true",
                "class": "item appearance-none border border-gray-300 rounded mt-16 w-11/12 py-3 md:py-2 px-3 md:text-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                "key": "email"
              },
              {
                "description": "input password ",
                "elementType": "textInput",
                "placeholder": "Password",
                "type": "element",
                "class": "item appearance-none border border-gray-300 rounded mt-6 w-11/12 py-3 md:py-2 md:text-12 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                "key": "password",
                "textInputType": "password"
              },
              {
                "description": "button signIn",
                "type": "container",
                "class": "mt-12 w-11/12 px-3 ",
                "children": [
                  {
                    "elementType": "authEvent",
                    "eventType": "signIn",
                    "tag": "div",
                    "text": "SIGN IN",
                    "type": "element",
                    "class": "appearance-none item w-full py-4 md:py-2 md:text-12 border border-red-600 rounded leading-tight focus:outline-none focus:shadow-outline text-center font-bold text-red-600 hover:bg-red-600 hover:text-white"
                  }
                ]
              },
              {
                "description": "button-text forgot password",
                "type": "container",
                "class": "absolute bottom-4 w-full text-center cursor-pointer hover:text-red-600",
                "children": [
                  {
                    "description": "logo image",
                    "elementType": "staticHtmlTag",
                    "tag": "a",
                    "text": "Password reset?",
                    "type": "element",
                    "class": "",
                    "url": "/password-reset"
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
    "screenType": "changePassword",
    "description": "change password screen",
    "type": "container",
    "class": "min-h-screen bg-authFullBg flex flex-col justify-center ",
    "children": [
      {
        "description": "password change dimension",
        "type": "container",
        "class": "mt-8 sm:mx-auto w-full sm:w-96",
        "children": [
          {
            "description": "password change window card bg",
            "type": "container",
            "class": "bg-authBg",
            "children": [
              {
                "description": "display logo",
                "type": "container",
                "class": "py-8 px-0 h-1/3 sm:px-10",
                "children": [
                  {
                    "src": "https://dnamy-assets.s3.eu-west-1.amazonaws.com/system/email/logo_email_noti_dnamy_01.png",
                    "description": "logo image",
                    "elementType": "navEvent",
                    "eventType": "resetNav",
                    "tag": "img",
                    "type": "element",
                    "class": "cursor-pointer mx-auto pt-2 w-32 hidden md:block"
                  }
                ]
              },
              {
                "description": "display hint",
                "type": "container",
                "class": "bg-authBg py-4 px-4  sm:px-6",
                "children": [
                  {
                    "description": "logo image div",
                    "type": "container",
                    "class": "w-full text-12 text-center",
                    "children": [
                      {
                        "description": "logo image",
                        "elementType": "staticHtmlTag",
                        "tag": "span",
                        "text": "Bitte neues Passwort für die zukünftigen Anmeldungen eingeben",
                        "type": "element",
                        "class": ""
                      }
                    ]
                  }
                ]
              },
              {
                "description": "input new password",
                "type": "container",
                "class": "bg-authBg mt-4  px-4  sm:px-4",
                "children": [
                  {
                    "description": "logo image div",
                    "type": "container",
                    "class": "mt-0 w-full text-12 text-left",
                    "children": [
                      {
                        "elementType": "staticHtmlTag",
                        "tag": "label",
                        "text": "New password",
                        "type": "element",
                        "class": "appearance-none block w-full py-2 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      },
                      {
                        "textInputType": "password",
                        "elementType": "textInput",
                        "placeholder": "Password",
                        "triggerEventType": "keyup",
                        "type": "element",
                        "class": "appearance-none block w-full px-3 py-2 border border-gray-300  placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                        "key": "password"
                      }
                    ]
                  }
                ]
              },
              {
                "description": "input confirm new password",
                "type": "container",
                "class": "bg-authBg mt-4  px-4  sm:px-4",
                "children": [
                  {
                    "description": "logo image div",
                    "type": "container",
                    "class": "mt-0 w-full text-12 text-left",
                    "children": [
                      {
                        "elementType": "staticHtmlTag",
                        "tag": "label",
                        "text": "Enter new password again",
                        "type": "element",
                        "class": "appearance-none block w-full py-2 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      },
                      {
                        "textInputType": "password",
                        "elementType": "textInput",
                        "placeholder": "Confirm password",
                        "triggerEventType": "keyup",
                        "type": "element",
                        "autofocus": "false",
                        "class": "appearance-none block w-full px-3 py-2 border border-gray-300  placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                        "key": "confirmPassword"
                      }
                    ]
                  }
                ]
              },
              {
                "description": "display lowerCaseLetterPasswordHint",
                "type": "container",
                "class": "bg-authBg mt-4  px-4  sm:px-4",
                "children": [
                  {
                    "description": "logo image div",
                    "type": "container",
                    "class": "mt-0 w-full text-12 text-left",
                    "children": [
                      {
                        "elementType": "staticHtmlTag",
                        "assignedKey": "lowerCaseLetterPasswordHint",
                        "tag": "label",
                        "text": "",
                        "type": "element",
                        "class": "block w-full placeholder-red-400"
                      }
                    ]
                  }
                ]
              },
              {
                "description": "display upperCaseLetterPasswordHint",
                "type": "container",
                "class": "bg-authBg px-4  sm:px-4",
                "children": [
                  {
                    "description": "logo image div",
                    "type": "container",
                    "class": "mt-0 w-full text-12 text-left",
                    "children": [
                      {
                        "elementType": "staticHtmlTag",
                        "assignedKey": "upperCaseLetterPasswordHint",
                        "tag": "label",
                        "text": "",
                        "type": "element",
                        "class": "block w-full placeholder-gray-400"
                      }
                    ]
                  }
                ]
              },
              {
                "description": "display minLengthPasswordHint",
                "type": "container",
                "class": "bg-authBg px-4  sm:px-4",
                "children": [
                  {
                    "description": "logo image div",
                    "type": "container",
                    "class": "mt-0 w-full text-12 text-left",
                    "children": [
                      {
                        "elementType": "staticHtmlTag",
                        "assignedKey": "minLengthPasswordHint",
                        "tag": "label",
                        "text": "",
                        "type": "element",
                        "class": "block w-full placeholder-gray-400"
                      }
                    ]
                  }
                ]
              },
              {
                "description": "change password button",
                "type": "container",
                "class": "bg-authBg mt-4 pb-8 px-4  sm:px-4",
                "children": [
                  {
                    "description": "logo image div",
                    "type": "container",
                    "class": "mt-0 w-full text-12 text-center",
                    "children": [
                      {
                        "elementType": "authEvent",
                        "eventType": "changePassword",
                        "tag": "span",
                        "text": "NEXT",
                        "type": "element",
                        "class": "block text-red-500 bg-transparent border border-solid border-red-500 hover:bg-primary hover:text-white active:bg-red-600 text-center font-bold uppercase text-sm mt-6 px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 cursor-pointer"
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
]*/

/*****    LOGIN SCREENS old gray   *****/
/*{
  "description": "login screen container",
  "type": "container",
  "class": "min-h-screen bg-authFullBg flex flex-col justify-center ",
  "children": [
  {
    "description": "signIn email/password step 1",
    "type": "container",
    "class": "mt-8 sm:mx-auto w-full sm:w-72",
    "children": [
      {
        "description": "sign window card bg",
        "type": "container",
        "class": "bg-authBg",
        "children": [
          {
            "description": "logo image div row 1",
            "type": "container",
            "class": "py-8 px-0 h-1/3 sm:px-10",
            "children": [
              {
                "description": "logo image",
                "type": "element",
                "elementType": "navEvent",
                "eventType": "resetNav",
                "tag": "img",
                "src": "static/img/logo_black.png",
                "class": "cursor-pointer mx-auto pt-2 w-32 hidden md:block"
              }
            ]
          },
          {
            "description": "willkommen row 2",
            "type": "container",
            "class": "bg-authBg py-8 px-4  sm:px-4",
            "children": [
              {
                "description": "logo image div",
                "type": "container",
                "class": "mt-6 w-full text-center",
                "children": [
                  {
                    "description": "logo image",
                    "type": "element",
                    "elementType": "staticHtmlTag",
                    "tag": "span",
                    "text": "Willkommen",
                    "class": ""
                  }
                ]
              }
            ]
          },
          {
            "description": "type in description row 3",
            "type": "container",
            "class": "bg-authBg py-4 px-4  sm:px-6",
            "children": [
              {
                "description": "logo image div",
                "type": "container",
                "class": "w-full text-12 text-center",
                "children": [
                  {
                    "description": "logo image",
                    "type": "element",
                    "elementType": "staticHtmlTag",
                    "tag": "span",
                    "text": "Bitte melden Sie sich mit Ihren Zugangsdaten an",
                    "class": ""
                  }
                ]
              }
            ]
          },
          {
            "description": "email input in row 4",
            "type": "container",
            "class": "bg-authBg pt-8 px-4  sm:pt-4",
            "children": [
              {
                "description": "logo image div",
                "type": "container",
                "class": "mt-0 w-full text-12 text-center",
                "children": [
                  {
                    "type": "element",
                    "elementType": "textInput",
                    "key": "email",
                    "class": "appearance-none block w-full px-3 py-2 border border-gray-300  placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  }
                ]
              }
            ]
          },
          {
            "description": "password input in row 5",
            "type": "container",
            "class": "bg-authBg mt-4  px-4  sm:px-4",
            "children": [
              {
                "description": "logo image div",
                "type": "container",
                "class": "mt-0 w-full text-12 text-center",
                "children": [
                  {
                    "type": "element",
                    "elementType": "textInput",
                    "key": "password",
                    "class": "appearance-none block w-full px-3 py-2 border border-gray-300  placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  }
                ]
              }
            ]
          },
          {
            "description": "sign In button in row 6",
            "type": "container",
            "class": "bg-authBg mt-4 pb-8 px-4  sm:px-4",
            "children": [
              {
                "description": "logo image div",
                "type": "container",
                "class": "mt-0 w-full text-12 text-center",
                "children": [
                  {
                    "type": "element",
                    "elementType": "cddpEvent",
                    "eventType": "duplicate",
                    "tag": "label",
                    "text": "SIGN IN",
                    "class": "block text-red-500 bg-transparent border border-solid border-red-500 hover:bg-primary hover:text-white active:bg-red-600 text-center font-bold uppercase text-sm mt-6 px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 cursor-pointer"
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
    "description": "password change step 2 first time only",
    "type": "container",
    "class": "mt-8 sm:mx-auto w-full sm:w-72",
    "children": [
      {
        "description": "sign window card bg",
        "type": "container",
        "class": "bg-authBg",
        "children": [
          {
            "description": "logo image div row 1",
            "type": "container",
            "class": "py-8 px-0 h-1/3 sm:px-10",
            "children": [
              {
                "description": "logo image",
                "type": "element",
                "elementType": "navEvent",
                "eventType": "resetNav",
                "tag": "img",
                "src": "static/img/logo_black.png",
                "class": "cursor-pointer mx-auto pt-2 w-32 hidden md:block"
              }
            ]
          },
          {
            "description": "type in description row 3",
            "type": "container",
            "class": "bg-authBg py-4 px-4  sm:px-6",
            "children": [
              {
                "description": "logo image div",
                "type": "container",
                "class": "w-full text-12 text-center",
                "children": [
                  {
                    "description": "logo image",
                    "type": "element",
                    "elementType": "staticHtmlTag",
                    "tag": "span",
                    "text": "Bitte neues Passwort für die zukünftigen Anmeldungen eingeben",
                    "class": ""
                  }
                ]
              }
            ]
          },
          {
            "description": "new password input in row 4",
            "type": "container",
            "class": "bg-authBg mt-4  px-4  sm:px-4",
            "children": [
              {
                "description": "logo image div",
                "type": "container",
                "class": "mt-0 w-full text-12 text-center",
                "children": [
                  {
                    "type": "element",
                    "elementType": "textInput",
                    "key": "password",
                    "class": "appearance-none block w-full px-3 py-2 border border-gray-300  placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  }
                ]
              }
            ]
          },
          {
            "description": "sign In button in row 5",
            "type": "container",
            "class": "bg-authBg mt-4 pb-8 px-4  sm:px-4",
            "children": [
              {
                "description": "logo image div",
                "type": "container",
                "class": "mt-0 w-full text-12 text-center",
                "children": [
                  {
                    "type": "element",
                    "elementType": "cddpEvent",
                    "eventType": "duplicate",
                    "tag": "label",
                    "text": "NEXT",
                    "class": "block text-red-500 bg-transparent border border-solid border-red-500 hover:bg-primary hover:text-white active:bg-red-600 text-center font-bold uppercase text-sm mt-6 px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 cursor-pointer"
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
    "description": "signIn QR code step 3 first time only",
    "type": "container",
    "class": "mt-8 sm:mx-auto w-full sm:w-72",
    "children": [
      {
        "description": "sign window card bg",
        "type": "container",
        "class": "bg-authBg",
        "children": [
          {
            "description": "logo image div row 1",
            "type": "container",
            "class": "py-8 px-0 h-1/3 sm:px-10",
            "children": [
              {
                "description": "logo image",
                "type": "element",
                "elementType": "navEvent",
                "eventType": "resetNav",
                "tag": "img",
                "src": "static/img/logo_black.png",
                "class": "cursor-pointer mx-auto pt-2 w-32 hidden md:block"
              }
            ]
          },
          {
            "description": "type in description row 2",
            "type": "container",
            "class": "bg-authBg py-4 px-4  sm:px-6",
            "children": [
              {
                "description": "logo image div",
                "type": "container",
                "class": "w-full text-12 text-center",
                "children": [
                  {
                    "description": "logo image",
                    "type": "element",
                    "elementType": "staticHtmlTag",
                    "tag": "span",
                    "text": "Scan QR-code then enter verfication code",
                    "class": ""
                  }
                ]
              }
            ]
          },
          {
            "description": "qr image div row 3",
            "type": "container",
            "class": "relative h-40 w-full bg-white",
            "children": [
              {
                "description": "logo image div row 1",
                "type": "container",
                "class": "absolute flex items-center w-full justify-center h-40",
                "children": [
                  {
                    "description": "logo image",
                    "type": "element",
                    "elementType": "navEvent",
                    "eventType": "resetNav",
                    "tag": "img",
                    "src": "static/img/demo_qr_code.png",
                    "class": "w-32 h-32"
                  }
                ]
              }
            ]
          },
          {
            "description": "type in description row 4",
            "type": "container",
            "class": "bg-authBg py-4 px-4  sm:px-6",
            "children": [
              {
                "description": "logo image div",
                "type": "container",
                "class": "w-full text-12 text-center",
                "children": [
                  {
                    "description": "logo image",
                    "type": "element",
                    "elementType": "staticHtmlTag",
                    "tag": "span",
                    "text": "enter verfication code",
                    "class": ""
                  }
                ]
              }
            ]
          },
          {
            "description": "password input in row 5",
            "type": "container",
            "class": "bg-authBg mt-4  px-4  sm:px-4",
            "children": [
              {
                "description": "logo image div",
                "type": "container",
                "class": "mt-0 w-full text-12 text-center",
                "children": [
                  {
                    "type": "element",
                    "elementType": "textInput",
                    "key": "password",
                    "class": "appearance-none block w-full px-3 py-2 border border-gray-300  placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  }
                ]
              }
            ]
          },
          {
            "description": "NEXT button in row 6",
            "type": "container",
            "class": "bg-authBg mt-4 pb-8 px-4  sm:px-4",
            "children": [
              {
                "description": "logo image div",
                "type": "container",
                "class": "mt-0 w-full text-12 text-center",
                "children": [
                  {
                    "type": "element",
                    "elementType": "cddpEvent",
                    "eventType": "duplicate",
                    "tag": "label",
                    "text": "NEXT",
                    "class": "block text-red-500 bg-transparent border border-solid border-red-500 hover:bg-primary hover:text-white active:bg-red-600 text-center font-bold uppercase text-sm mt-6 px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 cursor-pointer"
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
    "description": "signIn TOTP step 3",
    "type": "container",
    "class": "mt-8 sm:mx-auto w-full sm:w-72",
    "children": [
      {
        "description": "sign window card bg",
        "type": "container",
        "class": "bg-authBg",
        "children": [
          {
            "description": "logo image div row 1",
            "type": "container",
            "class": "py-8 px-0 h-1/3 sm:px-10",
            "children": [
              {
                "description": "logo image",
                "type": "element",
                "elementType": "navEvent",
                "eventType": "resetNav",
                "tag": "img",
                "src": "static/img/logo_black.png",
                "class": "cursor-pointer mx-auto pt-2 w-32 hidden md:block"
              }
            ]
          },
          {
            "description": "type in description row 3",
            "type": "container",
            "class": "bg-authBg py-4 px-4  sm:px-6",
            "children": [
              {
                "description": "logo image div",
                "type": "container",
                "class": "w-full text-12 text-center",
                "children": [
                  {
                    "description": "logo image",
                    "type": "element",
                    "elementType": "staticHtmlTag",
                    "tag": "span",
                    "text": "Confirm TOTP Code",
                    "class": ""
                  }
                ]
              }
            ]
          },
          {
            "description": "TOTP input in row 4",
            "type": "container",
            "class": "bg-authBg mt-4  px-4  sm:px-4",
            "children": [
              {
                "description": "logo image div",
                "type": "container",
                "class": "mt-0 w-full text-12 text-center",
                "children": [
                  {
                    "type": "element",
                    "elementType": "textInput",
                    "key": "password",
                    "class": "appearance-none block w-full px-3 py-2 border border-gray-300  placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  }
                ]
              }
            ]
          },
          {
            "description": "sign In button in row 6",
            "type": "container",
            "class": "bg-authBg mt-4 pb-8 px-4  sm:px-4",
            "children": [
              {
                "description": "logo image div",
                "type": "container",
                "class": "mt-0 w-full text-12 text-center",
                "children": [
                  {
                    "type": "element",
                    "elementType": "cddpEvent",
                    "eventType": "duplicate",
                    "tag": "label",
                    "text": "SIGN IN",
                    "class": "block text-red-500 bg-transparent border border-solid border-red-500 hover:bg-primary hover:text-white active:bg-red-600 text-center font-bold uppercase text-sm mt-6 px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 cursor-pointer"
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
}*/

const appID = "authScreens"
/* const entityData = ref({
  specifications: [
    { name: "Alpha", text: "", id: 0 },
    { name: "Beta", text: "", id: 1 },
    { name: "Gamma", text: "", id: 2 }
  ]
})
 */

const entityData = ref({
  oem: "Jaguar",
  model: "F-Type Coupé",
  navisionDescription: "X152 Cou. FSL Außenspiegel re. - Glanz",
  articleNumber: "HEX53 21446LACK",
  material: "Alu",
  client: "Hahnerberg",
  heoProduct: "ceramHEO",
  application: "KTL + Nasslack",
  partsCategory: "Fensterschachtleiste",
  sop: "01.03.14",
  eop: "01.03.26",
  carrierId: "WKW-EA, 10, X152 Coupe, FSL R",
  ppc: "70",
  carrier: "Warenträger",
  carrierAmount: "1",
  carrierAmountDescription: "1 Warenträger mit FSL L und R",
  retrievalPerDay: "20",
  retrievalPerWeek: "100",
  retrievalPerMonth: "200",
  id: {},
  images: {
    "topView": {
      "uuid": "da3eb5b6-61dc-49a5-9295-c60534c245a8",
      "name": "top.png",
      "size": 370379,
      "isStored": true,
      "isImage": true,
      "originalImageInfo": {
        "dpi": null,
        "width": 1500,
        "format": "PNG",
        "height": 785,
        "sequence": false,
        "color_mode": "RGBA",
        "orientation": null,
        "geo_location": null,
        "datetime_original": null
      },
      "originalVideoInfo": null,
      "originalContentInfo": {
        "mime":
        {
          "mime": "image/png", "type": "image", "subtype": "png"
        },
        "image":
        {
          "dpi": null, "width": 1500, "format": "PNG", "height": 785, "sequence": false, "color_mode": "RGBA", "orientation": null, "geo_location": null, "datetime_original": null
        }
      },
      "mimeType": "image/png", "originalUrl": "https://ucarecdn.com/da3eb5b6-61dc-49a5-9295-c60534c245a8/",
      "cdnUrl": "https://ucarecdn.com/da3eb5b6-61dc-49a5-9295-c60534c245a8/",
      "cdnUrlModifiers": null,
      "sourceInfo":
      {
        "source": "local", "file":
        {
          "name": "top.png", "lastModified": 1669811304165, "lastModifiedDate": "[native Date Wed Nov 30 2022 18:28:24 GMT+0600 (Bangladesh Standard Time)]", "webkitRelativePath": "", "size": 370379, "type": "image/png"
        }
      },
      "metadata": {}
    },
    "frontView": { "uuid": "2a1f0eee-84f2-4e8d-9989-3051d5ee72b8", "name": "front.png", "size": 386413, "isStored": true, "isImage": true, "originalImageInfo": { "dpi": null, "width": 1500, "format": "PNG", "height": 785, "sequence": false, "color_mode": "RGBA", "orientation": null, "geo_location": null, "datetime_original": null }, "originalVideoInfo": null, "originalContentInfo": { "mime": { "mime": "image/png", "type": "image", "subtype": "png" }, "image": { "dpi": null, "width": 1500, "format": "PNG", "height": 785, "sequence": false, "color_mode": "RGBA", "orientation": null, "geo_location": null, "datetime_original": null } }, "mimeType": "image/png", "originalUrl": "https://ucarecdn.com/2a1f0eee-84f2-4e8d-9989-3051d5ee72b8/", "cdnUrl": "https://ucarecdn.com/2a1f0eee-84f2-4e8d-9989-3051d5ee72b8/", "cdnUrlModifiers": null, "sourceInfo": { "source": "local", "file": { "name": "front.png", "lastModified": 1669811419197, "lastModifiedDate": "[native Date Wed Nov 30 2022 18:30:19 GMT+0600 (Bangladesh Standard Time)]", "webkitRelativePath": "", "size": 386413, "type": "image/png" } }, "metadata": {} }
  }
})

/* onBeforeMount(async () => {
  // Create app store
  if (!dynamicAppsStore.apps[appID]) {
    dynamicAppsStore.registerApp(appID)
  }

  // Retrieve documents via universalCrud
  if (!dynamicAppsStore.apps[appID].list.length) {
    console.log("get request ...")
    await dynamicAppsStore.setList({
      apiPath: appID,
      params: [{}],
    })
  }
}) */
/* // Set selected document
const selectedDocument = computed(() =>
  dynamicAppsStore.apps[appID] && dynamicAppsStore.apps[appID]["list"].length
    ? dynamicAppsStore.apps[appID]["list"][0]
    : null
)
entityData.value = selectedDocument.value ? selectedDocument.value : {}
watch(selectedDocument, (value) => {
  entityData.value = { ...value }
}) */

// expressions
const expressions = computed(() =>
  appTemplate.value?.expressions ? appTemplate.value.expressions : null
)
provide("expressions", expressions)

// update
const onUpdate = lodashdDbounce((key, value, volatileObject) => {
  console.log(
    "appTemplateSys01 | onUpdate | key, value - ",
    key,
    value,
    volatileObject
  )
  if (volatileObject) {
  } else {
    lodashSet(entityData.value, key, value)
  }
}, 250)

provide("onUpdate", onUpdate)
provide("onUpdateAppTemplateSys01", onUpdate)

// draggable array
const onAddArrayItem = (key, value) => {
  console.log("appTemplateSys01 | onAddArrayItem | key, value - ", key, value)
  let tempArray = [{}]
  if (Array.isArray(lodashGet(entityData.value, key))) {
    tempArray = lodashGet(entityData.value, key)
    tempArray.push(value)
  }
  onUpdate({ key: key, value: tempArray })
}
provide("onAddArrayItem", onAddArrayItem)

const onDeleteArrayItem = (key, index) => {
  console.log(
    "appTemplateSys01 | onDeleteArrayItem | key, index - ",
    key,
    index
  )
  if (Array.isArray(lodashGet(entityData.value, key))) {
    let tempArray = lodashGet(entityData.value, key)
    tempArray.splice(index, 1)
    onUpdate({ key: key, value: tempArray })
  }
}
provide("onDeleteArrayItem", onDeleteArrayItem)
</script>
