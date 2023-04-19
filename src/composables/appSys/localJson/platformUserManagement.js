import { ref } from "vue"

export function useJsonLocal() {
  const jsonStructure = ref({
    "_id": {
      "$oid": "6353008707591a12e3f5e105"
    },
    "type": "appTemplate",
    "folderNavigationLink": "puManagement",
    "showHideSidebar": true,
    "showHideTopbar": true,
    "URL": "puManagement",
    "expressions": [
      {
        "expressionID": "uploadcare_preview1",
        "type": "stringchain",
        "unit": "markup",
        "expressionArray": [
          {
            "ex": "testImage1.cdnUrl + '/-/resize/600x/-/format/auto/-/quality/smart/'"
          }
        ]
      },
      {
        "expressionID": "uploadcare_preview2",
        "type": "stringchain",
        "unit": "markup",
        "expressionArray": [
          {
            "ex": "testImage2.cdnUrl + '/-/resize/600x/-/format/auto/-/quality/smart/'"
          }
        ]
      }
    ],
    "appMarkup": [
      {
        "description": "platformUser management ag-grid",
        "appNavigationLink": "platformUserManagement",
        "subURL": "home",
        "category": "table",
        "globalCollection": "_platformUserManagement_",
        "markup": [
          {
            "description": "cddp create Dialog",
            "type": "dialog",
            "key": "cddpCreateDialog01",
            "saveType": "update",
            "class": "inline-block align-bottom bg-white rounded text-left overflow-hidden shadow-xl transform transition-all sm:align-middle w-[80%] h-[80%]",
            "children": [
              {
                "type": "container",
                "class": "relative my-0  w-full h-full",
                "children": [
                  {
                    "type": "container",
                    "class": "border-0 shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none w-full h-full",
                    "children": [
                      {
                        "type": "container",
                        "class": "space-y-0 w-full h-full ",
                        "children": [
                          {
                            "type": "container",
                            "class": "shadow sm:overflow-hidden h-full pb-16",
                            "children": [
                              {
                                "description": "topbar",
                                "type": "container",
                                "class": "w-full flex justify-between items-center w-full bg-[#4e5962] h-12 pl-8 pr-4 ",
                                "children": [
                                  {
                                    "description": "fullscreen dialog header left",
                                    "type": "container",
                                    "class": "flex xl:justify-start w-auto space-x-16 text-[#b6c2cd] h-full",
                                    "children": [
                                      {
                                        "description": "tabs container",
                                        "type": "container",
                                        "class": "flex space-x-2 text-center text-12 font-normal text-white leading-[14px] pl-4",
                                        "children": []
                                      }
                                    ]
                                  },
                                  {
                                    "description": "fullscreen dialog header right",
                                    "type": "container",
                                    "class": "space flex space-x-2 text-center text-12 font-medium text-gray-200 leading-[14px] tracking-widest",
                                    "children": [
                                      {
                                        "description": "save/close container",
                                        "type": "container",
                                        "class": "flex items-center space-x-2 h-full text-[#b6c2cd] hover:text-white mr-4 px-2 font-bold text-11",
                                        "children": [
                                          {
                                            "description": "save + close button",
                                            "type": "puEvent",
                                            "eventType": "save",
                                            "toggleDialog": true,
                                            "class": "w-32 h-full bg-primary hover:bg-gray-400 py-4",
                                            "children": [
                                              {
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "div",
                                                "text": "Create user",
                                                "class": "uppercase text-white"
                                              }
                                            ]
                                          },
                                          {
                                            "description": "cancel button",
                                            "type": "puEvent",
                                            "eventType": "cancel",
                                            "toggleDialog": true,
                                            "class": "w-32 h-full bg-[#3b4650] hover:bg-gray-400 py-4",
                                            "children": [
                                              {
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "div",
                                                "text": "cancel",
                                                "class": "uppercase"
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
                                "description": "headline",
                                "type": "container",
                                "class": "flex justify-start pb-2 border-b border-gray-400 mx-10 mt-6",
                                "children": [
                                  {
                                    "description": "element project number",
                                    "type": "element",
                                    "elementType": "staticHtmlTag",
                                    "tag": "span",
                                    "text": "explicit",
                                    "class": "text-primary hover:text-primaryHover pb-0 material-symbols-outlined align-middle pr-2"
                                  },
                                  {
                                    "description": "element project number",
                                    "type": "element",
                                    "elementType": "staticHtmlTag",
                                    "tag": "span",
                                    "text": "CREATE USER",
                                    "class": "text-lg leading-6 font-medium text-gray-900 pt-0"
                                  }
                                ]
                              },
                              {
                                "description": "tab 1 PROFIL",
                                "type": "container",
                                "tabID": "tab001",
                                "tabGroupID": "tabGroup001",
                                "tabContent": true,
                                "class": "px-10 bg-white w-full pt-4 ",
                                "children": [
                                  {
                                    "description": "personal data block",
                                    "type": "container",
                                    "class": "flex flex-col space-y-4 border-b border-gray-200 pb-8",
                                    "children": [
                                      {
                                        "description": "subline personal data",
                                        "type": "container",
                                        "class": "flex justify-start",
                                        "children": [
                                          {
                                            "description": "element project number",
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "tag": "span",
                                            "text": "personal data",
                                            "class": "text font-medium text-gray-900 pt-0"
                                          }
                                        ]
                                      },
                                      {
                                        "description": "gender",
                                        "type": "container",
                                        "class": "flex w-full space-x-4 text-left",
                                        "children": [
                                          {
                                            "type": "container",
                                            "class": "w-1/5",
                                            "children": [
                                              {
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "span",
                                                "text": "gender",
                                                "class": "block text-11 font-normal text-gray-700"
                                              },
                                              {
                                                "description": "listbox select",
                                                "type": "container",
                                                "containerType": "div",
                                                "class": "w-full",
                                                "children": [
                                                  {
                                                    "description": "listbox select input",
                                                    "type": "element",
                                                    "elementType": "listboxSelectInput",
                                                    "value": "value",
                                                    "key": "gender",
                                                    "class": "relative",
                                                    "listbox": {
                                                      "listboxButton": {
                                                        "placeholder": "",
                                                        "class": "relative flex items-center w-full h-selHeight cursor-pointer bg-white border border-gray-300 rounded-ibr p-ipy pl-3 pr-10 text-left  sm:text-sm",
                                                        "assignedKey": "material.substrate",
                                                        "children": [
                                                          {
                                                            "type": "container",
                                                            "children": [
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "span",
                                                                "assignedKey": "name",
                                                                "class": "block truncate"
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "span",
                                                                "text": "unfold_more",
                                                                "class": "material-symbols-outlined text-iicon text-gray-400 font-normal pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
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
                                                                    {
                                                                      "cd": "INI, k, selected, equal, b, true"
                                                                    }
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
                                                        }
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
                                                            "value": "male",
                                                            "name": "male"
                                                          },
                                                          {
                                                            "value": "female",
                                                            "name": "female"
                                                          },
                                                          {
                                                            "value": "diverse",
                                                            "name": "diverse"
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
                                            "description": "select",
                                            "type": "container",
                                            "class": "w-1/5",
                                            "children": [
                                              {
                                                "description": "element project number",
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "span",
                                                "text": "salutation",
                                                "class": "block text-11 font-normal text-gray-700"
                                              },
                                              {
                                                "description": "listbox select",
                                                "type": "container",
                                                "containerType": "div",
                                                "class": "w-full",
                                                "children": [
                                                  {
                                                    "description": "listbox select input",
                                                    "type": "element",
                                                    "elementType": "listboxSelectInput",
                                                    "value": "value",
                                                    "key": "salutation",
                                                    "class": "relative",
                                                    "listbox": {
                                                      "listboxButton": {
                                                        "placeholder": "",
                                                        "class": "relative flex items-center w-full h-selHeight cursor-pointer bg-white border border-gray-300 rounded-ibr p-ipy pl-3 pr-10 text-left  sm:text-sm",
                                                        "assignedKey": "material.substrate",
                                                        "children": [
                                                          {
                                                            "type": "container",
                                                            "children": [
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "span",
                                                                "assignedKey": "name",
                                                                "class": "block truncate"
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "span",
                                                                "text": "unfold_more",
                                                                "class": "material-symbols-outlined text-iicon text-gray-400 font-normal pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
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
                                                                    {
                                                                      "cd": "INI, k, selected, equal, b, true"
                                                                    }
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
                                                        }
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
                                                            "value": "casual1",
                                                            "name": "casual1"
                                                          },
                                                          {
                                                            "value": "casual2",
                                                            "name": "casual2"
                                                          },
                                                          {
                                                            "value": "formal1",
                                                            "name": "formal1"
                                                          },
                                                          {
                                                            "value": "formal2",
                                                            "name": "formal2"
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
                                        "description": "name",
                                        "type": "container",
                                        "class": "flex w-full space-x-4 text-left",
                                        "children": [
                                          {
                                            "description": "select",
                                            "type": "container",
                                            "class": "w-1/5",
                                            "children": [
                                              {
                                                "description": "element project number",
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "span",
                                                "text": "title",
                                                "class": "block text-11 font-normal text-gray-700"
                                              },
                                              {
                                                "description": "listbox select",
                                                "type": "container",
                                                "containerType": "div",
                                                "class": "w-full",
                                                "children": [
                                                  {
                                                    "description": "listbox select input",
                                                    "type": "element",
                                                    "elementType": "listboxSelectInput",
                                                    "value": "value",
                                                    "key": "title",
                                                    "class": "relative",
                                                    "listbox": {
                                                      "listboxButton": {
                                                        "placeholder": "",
                                                        "class": "relative flex items-center w-full h-selHeight cursor-pointer bg-white border border-gray-300 rounded-ibr p-ipy pl-3 pr-10 text-left  sm:text-sm",
                                                        "assignedKey": "material.substrate",
                                                        "children": [
                                                          {
                                                            "type": "container",
                                                            "children": [
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "span",
                                                                "assignedKey": "name",
                                                                "class": "block truncate"
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "span",
                                                                "text": "unfold_more",
                                                                "class": "material-symbols-outlined text-iicon text-gray-400 font-normal pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
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
                                                                    {
                                                                      "cd": "INI, k, selected, equal, b, true"
                                                                    }
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
                                                        }
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
                                                            "value": "Dr.",
                                                            "name": "Dr."
                                                          },
                                                          {
                                                            "value": "Dr. Dr.",
                                                            "name": "Dr. Dr."
                                                          },
                                                          {
                                                            "value": "Prof. Dr.",
                                                            "name": "Prof. Dr."
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
                                            "description": "given name",
                                            "type": "container",
                                            "class": "w-1/5",
                                            "children": [
                                              {
                                                "description": "element project number",
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "span",
                                                "text": "given name",
                                                "class": "block text-11 font-normal text-gray-700"
                                              },
                                              {
                                                "type": "element",
                                                "elementType": "textInput",
                                                "key": "given_name",
                                                "class": "mt-0 block w-full border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-13"
                                              }
                                            ]
                                          },
                                          {
                                            "description": "middle name",
                                            "type": "container",
                                            "class": "w-1/5",
                                            "children": [
                                              {
                                                "description": "element project number",
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "span",
                                                "text": "middle name",
                                                "class": "block text-11 font-normal text-gray-700"
                                              },
                                              {
                                                "type": "element",
                                                "elementType": "textInput",
                                                "key": "middle_name",
                                                "class": "mt-0 block w-full border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-13"
                                              }
                                            ]
                                          },
                                          {
                                            "description": "family name",
                                            "type": "container",
                                            "class": "w-1/5",
                                            "children": [
                                              {
                                                "description": "element project number",
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "span",
                                                "text": "family name",
                                                "class": "block text-11 font-normal text-gray-700"
                                              },
                                              {
                                                "type": "element",
                                                "elementType": "textInput",
                                                "key": "family_name",
                                                "class": "mt-0 block w-full border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-13"
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      {
                                        "description": "country company",
                                        "type": "container",
                                        "class": "flex w-full space-x-4 text-left",
                                        "children": [
                                          {
                                            "description": "country",
                                            "type": "container",
                                            "class": "w-1/5",
                                            "children": [
                                              {
                                                "description": "element project number",
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "span",
                                                "text": "country",
                                                "class": "block text-11 font-normal text-gray-700"
                                              },
                                              {
                                                "description": "listbox select",
                                                "type": "container",
                                                "containerType": "div",
                                                "class": "w-full",
                                                "children": [
                                                  {
                                                    "description": "listbox select input",
                                                    "type": "element",
                                                    "elementType": "listboxSelectInput",
                                                    "value": "value",
                                                    "key": "country",
                                                    "class": "relative",
                                                    "listbox": {
                                                      "listboxButton": {
                                                        "placeholder": "",
                                                        "class": "relative flex items-center w-full h-selHeight cursor-pointer bg-white border border-gray-300 rounded-ibr p-ipy pl-3 pr-10 text-left  sm:text-sm",
                                                        "assignedKey": "material.substrate",
                                                        "children": [
                                                          {
                                                            "type": "container",
                                                            "children": [
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "span",
                                                                "assignedKey": "name",
                                                                "class": "block truncate"
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "span",
                                                                "text": "unfold_more",
                                                                "class": "material-symbols-outlined text-iicon text-gray-400 font-normal pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
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
                                                                    {
                                                                      "cd": "INI, k, selected, equal, b, true"
                                                                    }
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
                                                        }
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
                                                            "value": "Bangladesh",
                                                            "name": "Bangladesh"
                                                          },
                                                          {
                                                            "value": "Germany",
                                                            "name": "Germany"
                                                          },
                                                          {
                                                            "value": "Moldavia",
                                                            "name": "Moldavia"
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
                                            "description": "company",
                                            "type": "container",
                                            "class": "w-1/5",
                                            "children": [
                                              {
                                                "description": "company",
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "div",
                                                "text": "company",
                                                "class": "block text-11 font-normal text-gray-700"
                                              },
                                              {
                                                "description": "listbox select",
                                                "type": "container",
                                                "containerType": "div",
                                                "class": "w-full",
                                                "children": [
                                                  {
                                                    "description": "listbox select input",
                                                    "type": "element",
                                                    "elementType": "listboxSelectInput",
                                                    "value": "value",
                                                    "key": "company",
                                                    "class": "relative",
                                                    "listbox": {
                                                      "listboxButton": {
                                                        "placeholder": "",
                                                        "class": "relative flex items-center w-full h-selHeight cursor-pointer bg-white border border-gray-300 rounded-ibr p-ipy pl-3 pr-10 text-left  sm:text-sm",
                                                        "assignedKey": "material.substrate",
                                                        "children": [
                                                          {
                                                            "type": "container",
                                                            "children": [
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "span",
                                                                "assignedKey": "company",
                                                                "class": "block truncate"
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "span",
                                                                "text": "unfold_more",
                                                                "class": "material-symbols-outlined text-iicon text-gray-400 font-normal pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
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
                                                                    {
                                                                      "cd": "INI, k, selected, equal, b, true"
                                                                    }
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
                                                        }
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
                                                            "value": "dxpberlin",
                                                            "name": "dxpberlin"
                                                          },
                                                          {
                                                            "value": "dxpbaerlin",
                                                            "name": "dxpbaerlin"
                                                          },
                                                          {
                                                            "value": "utomberlin",
                                                            "name": "UTOMberlin"
                                                          },
                                                          {
                                                            "value": "hauptstadtliebe",
                                                            "name": "Hauptstadtliebe"
                                                          },
                                                          {
                                                            "value": "hillebrand-coating",
                                                            "name": "Hillebrand-Coating"
                                                          },
                                                          {
                                                            "value": "heo-coating",
                                                            "name": "HEO Coating"
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
                                    "description": "login data block",
                                    "type": "container",
                                    "class": "flex flex-col space-y-4 mt-10 border-b border-gray-200 pb-8",
                                    "children": [
                                      {
                                        "description": "subline login data",
                                        "type": "container",
                                        "class": "flex justify-start",
                                        "children": [
                                          {
                                            "description": "element project number",
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "tag": "span",
                                            "text": "login data",
                                            "class": "text font-medium text-gray-900 pt-0"
                                          }
                                        ]
                                      },
                                      {
                                        "description": "email phone",
                                        "type": "container",
                                        "class": "flex w-full space-x-4 text-left",
                                        "children": [
                                          {
                                            "description": "email",
                                            "type": "container",
                                            "class": "w-1/5",
                                            "children": [
                                              {
                                                "description": "element project number",
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "span",
                                                "text": "Email address",
                                                "class": "block text-11 font-normal text-gray-700"
                                              },
                                              {
                                                "type": "element",
                                                "elementType": "textInput",
                                                "key": "email",
                                                "class": "mt-0 block w-full border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-13"
                                              }
                                            ]
                                          },
                                          {
                                            "description": "phone",
                                            "type": "container",
                                            "class": "w-1/5",
                                            "children": [
                                              {
                                                "description": "element project number",
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "span",
                                                "text": "Phone number",
                                                "class": "block text-11 font-normal text-gray-700"
                                              },
                                              {
                                                "type": "element",
                                                "elementType": "textInput",
                                                "key": "phone_number",
                                                "class": "mt-0 block w-full border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-13"
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      {
                                        "description": "role access level",
                                        "type": "container",
                                        "class": "flex w-full space-x-4 text-left",
                                        "children": [
                                          {
                                            "description": "role select",
                                            "type": "container",
                                            "class": "w-1/5",
                                            "children": [
                                              {
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "span",
                                                "text": "role",
                                                "class": "block text-11 font-normal text-gray-700"
                                              },
                                              {
                                                "description": "role listbox select",
                                                "type": "container",
                                                "containerType": "div",
                                                "class": "w-full",
                                                "children": [
                                                  {
                                                    "description": "listbox select input",
                                                    "type": "element",
                                                    "elementType": "listboxSelectInput",
                                                    "value": "value",
                                                    "key": "accessRole",
                                                    "class": "relative",
                                                    "listbox": {
                                                      "listboxButton": {
                                                        "placeholder": "",
                                                        "class": "relative flex items-center w-full h-selHeight cursor-pointer bg-white border border-gray-300 rounded-ibr p-ipy pl-3 pr-10 text-left  sm:text-sm",
                                                        "assignedKey": "material.substrate",
                                                        "children": [
                                                          {
                                                            "type": "container",
                                                            "children": [
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "span",
                                                                "assignedKey": "name",
                                                                "class": "block truncate"
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "span",
                                                                "text": "unfold_more",
                                                                "class": "material-symbols-outlined text-iicon text-gray-400 font-normal pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
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
                                                                    {
                                                                      "cd": "INI, k, selected, equal, b, true"
                                                                    }
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
                                                        }
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
                                                            "value": "user",
                                                            "name": "user"
                                                          },
                                                          {
                                                            "value": "superuser",
                                                            "name": "superuser"
                                                          },
                                                          {
                                                            "value": "admin",
                                                            "name": "admin"
                                                          },
                                                          {
                                                            "value": "superadmin",
                                                            "name": "superadmin"
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
                                            "description": "access level select",
                                            "type": "container",
                                            "class": "w-1/5",
                                            "children": [
                                              {
                                                "description": "element project number",
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "span",
                                                "text": "access level",
                                                "class": "block text-11 font-normal text-gray-700"
                                              },
                                              {
                                                "description": "listbox select",
                                                "type": "container",
                                                "containerType": "div",
                                                "class": "w-full",
                                                "children": [
                                                  {
                                                    "description": "listbox select input",
                                                    "type": "element",
                                                    "elementType": "listboxSelectInput",
                                                    "value": "value",
                                                    "key": "accessLevel",
                                                    "class": "relative",
                                                    "listbox": {
                                                      "listboxButton": {
                                                        "placeholder": "",
                                                        "class": "relative flex items-center w-full h-selHeight cursor-pointer bg-white border border-gray-300 rounded-ibr p-ipy pl-3 pr-10 text-left  sm:text-sm",
                                                        "assignedKey": "material.substrate",
                                                        "children": [
                                                          {
                                                            "type": "container",
                                                            "children": [
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "span",
                                                                "assignedKey": "name",
                                                                "class": "block truncate"
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "span",
                                                                "text": "unfold_more",
                                                                "class": "material-symbols-outlined text-iicon text-gray-400 font-normal pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
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
                                                                    {
                                                                      "cd": "INI, k, selected, equal, b, true"
                                                                    }
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
                                                        }
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
                                                            "value": "levelOne",
                                                            "name": "levelOne"
                                                          },
                                                          {
                                                            "value": "levelTwo",
                                                            "name": "levelTwo"
                                                          },
                                                          {
                                                            "value": "levelThree",
                                                            "name": "levelThree"
                                                          },
                                                          {
                                                            "value": "levelFour",
                                                            "name": "levelFour"
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
                                    "description": "navigation data block",
                                    "type": "container",
                                    "class": "flex flex-col space-y-4 mt-10 border-b border-gray-200 pb-8",
                                    "children": [
                                      {
                                        "description": "subline login data",
                                        "type": "container",
                                        "class": "flex justify-start",
                                        "children": [
                                          {
                                            "description": "element project number",
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "tag": "span",
                                            "text": "navigation data",
                                            "class": "text font-medium text-gray-900 pt-0"
                                          }
                                        ]
                                      },
                                      {
                                        "description": "navigation type",
                                        "type": "container",
                                        "class": "flex w-full space-x-4 text-left",
                                        "children": [
                                          {
                                            "description": "navigation type select",
                                            "type": "container",
                                            "class": "w-1/5",
                                            "children": [
                                              {
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "span",
                                                "text": "navigation type",
                                                "class": "block text-11 font-normal text-gray-700"
                                              },
                                              {
                                                "description": "role listbox select",
                                                "type": "container",
                                                "containerType": "div",
                                                "class": "w-full",
                                                "children": [
                                                  {
                                                    "description": "listbox select input",
                                                    "type": "element",
                                                    "elementType": "listboxSelectInput",
                                                    "value": "value",
                                                    "key": "navigation",
                                                    "class": "relative",
                                                    "listbox": {
                                                      "listboxButton": {
                                                        "placeholder": "",
                                                        "class": "relative flex items-center w-full h-selHeight cursor-pointer bg-white border border-gray-300 rounded-ibr p-ipy pl-3 pr-10 text-left  sm:text-sm",
                                                        "assignedKey": "material.substrate",
                                                        "children": [
                                                          {
                                                            "type": "container",
                                                            "children": [
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "span",
                                                                "assignedKey": "name",
                                                                "class": "block truncate"
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "span",
                                                                "text": "unfold_more",
                                                                "class": "material-symbols-outlined text-iicon text-gray-400 font-normal pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
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
                                                                    {
                                                                      "cd": "INI, k, selected, equal, b, true"
                                                                    }
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
                                                        }
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
                                                            "value": "platformNavigation",
                                                            "name": "platformNavigation"
                                                          },
                                                          {
                                                            "value": "customNavigation",
                                                            "name": "customNavigation"
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
                                    "description": "AWS user parameter confirm messaging",
                                    "type": "container",
                                    "class": "flex flex-col space-y-4 mt-10 border-b border-gray-200 pb-4",
                                    "children": [
                                      {
                                        "description": "subline login data",
                                        "type": "container",
                                        "class": "flex justify-start",
                                        "children": [
                                          {
                                            "description": "element project number",
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "tag": "span",
                                            "text": "AWS user parameter",
                                            "class": "text font-medium text-gray-900 pt-0"
                                          }
                                        ]
                                      },
                                      {
                                        "description": "aws confirm user",
                                        "type": "container",
                                        "class": "flex w-full space-x-4 text-left",
                                        "children": [
                                          {
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "tag": "span",
                                            "text": "confirm user",
                                            "class": "block text-11 font-normal text-gray-700"
                                          },
                                          {
                                            "description": "checkbox confirmUser",
                                            "type": "element",
                                            "elementType": "checkboxInput",
                                            "key": "confirmed",
                                            "activeValue": {
                                              "value": false
                                            },
                                            "inactiveValue": {
                                              "value": true
                                            },
                                            "class": "ml-2 h-5 w-5 rounded border-gray-300 bg-gray-200 text-primary focus:ring-indigo-500"
                                          },
                                          {
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "tag": "span",
                                            "text": "confirm user by admin",
                                            "class": "block text-13 font-normal text"
                                          }
                                        ]
                                      },
                                      {
                                        "description": "aws messaging",
                                        "type": "container",
                                        "class": "flex w-full space-x-4 text-left",
                                        "children": [
                                          {
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "tag": "span",
                                            "text": "messaging",
                                            "class": "block text-11 font-normal text-gray-700"
                                          },
                                          {
                                            "description": "radio group horizontal",
                                            "type": "container",
                                            "class": "pl-2 space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10",
                                            "children": [
                                              {
                                                "type": "element",
                                                "elementType": "radioGroup",
                                                "key": "messageAction",
                                                "value": "value",
                                                "assignedKey": "name",
                                                "parentClass": "flex items-center",
                                                "height": "h-4",
                                                "width": "w-4",
                                                "radioColor": "text-primary",
                                                "items": [
                                                  {
                                                    "value": "phone",
                                                    "name": "no email"
                                                  },
                                                  {
                                                    "value": "push",
                                                    "name": "resend email"
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
                                    "description": "AWS user parameter block",
                                    "type": "container",
                                    "class": "flex flex-col space-y-4 mt-4 border-b border-gray-200",
                                    "children": [
                                      {
                                        "description": "aws MFA",
                                        "type": "container",
                                        "class": "flex w-full space-x-4 text-left",
                                        "children": [
                                          {
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "tag": "span",
                                            "text": "MFA settings",
                                            "class": "block text-11 font-normal text-gray-700"
                                          },
                                          {
                                            "description": "radio group horizontal",
                                            "type": "container",
                                            "class": "pl-2 space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10",
                                            "children": [
                                              {
                                                "type": "element",
                                                "elementType": "radioGroup",
                                                "key": "mfa",
                                                "value": "value",
                                                "assignedKey": "name",
                                                "parentClass": "flex items-center",
                                                "height": "h-4",
                                                "width": "w-4",
                                                "radioColor": "text-primary",
                                                "items": [
                                                  {
                                                    "value": "no",
                                                    "name": "NO MFA"
                                                  },
                                                  {
                                                    "value": "mfa-software",
                                                    "name": "MFA Authenticator"
                                                  },
                                                  {
                                                    "value": "mfa-sms",
                                                    "name": "MFA SMS"
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
                                    "description": "AWS user parameter permanent passowrd",
                                    "type": "container",
                                    "class": "flex flex-col space-y-4 mt-10 border-b border-gray-200 pb-4",
                                    "children": [
                                      {
                                        "description": "aws permanent password",
                                        "type": "container",
                                        "class": "flex w-full space-x-4 text-left",
                                        "children": [
                                          {
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "tag": "span",
                                            "text": "permanent password",
                                            "class": "block text-11 font-normal text-gray-700"
                                          },
                                          {
                                            "description": "checkbox confirmUser",
                                            "type": "element",
                                            "elementType": "checkboxInput",
                                            "key": "permanentPasswordFlag",
                                            "activeValue": true,
                                            "inactiveValue": false,
                                            "class": "ml-2 h-5 w-5 rounded border-gray-300 bg-gray-200 text-primary focus:ring-indigo-500"
                                          },
                                          {
                                            "type": "element",
                                            "elementType": "textInput",
                                            "key": "permanentPassword",
                                            "conditionArray": [
                                              { "cd": "INI, k, permanentPasswordFlag, equal, b, true" }
                                            ],
                                            "class": "mt-0 block w-full border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-13"
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
            "description": "cddp delete Dialog",
            "type": "dialog",
            "key": "cddpDeleteDialog01",
            "toggleDialog": true,
            "dialogKey": "cddpDeleteDialog01",
            "class": "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle w-1/4",
            "children": [
              {
                "description": "dialog card",
                "type": "container",
                "class": "bg-white",
                "children": [
                  {
                    "type": "container",
                    "class": "shadow sm:rounded-md sm:overflow-hidden",
                    "children": [
                      {
                        "description": "dialog card header",
                        "type": "container",
                        "class": "flex justify-between px-4 py-2 bg-orangeColor text-left sm:px-6",
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
                                "text": "Delete Dialog",
                                "class": "text-sm leading-6 font-medium uppercase text-white"
                              }
                            ]
                          },
                          {
                            "description": "dialog card header close div",
                            "type": "container",
                            "class": "item w-2",
                            "children": [
                              {
                                "description": "dialog card header close",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "div",
                                "text": "close",
                                "class": "material-symbols-outlined align-middle pr-2 text-right text-white cursor-pointer",
                                "toggleDialog": true,
                                "dialogKey": "cddpDeleteDialog01"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "conditionArray": [
                          {
                            "cd": "INI, k, documentLock, unequal, s, true"
                          }
                        ],
                        "type": "container",
                        "class": "bg-white py-6 px-4 sm:p-6",
                        "children": [
                          {
                            "type": "container",
                            "class": "col-span-12 sm:col-span-12",
                            "children": [
                              {
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "div",
                                "text": "If you click the button the document will be deleted",
                                "class": "mt-1 text-sm text-gray-500"
                              }
                            ]
                          },
                          {
                            "type": "container",
                            "class": "mt-6 grid grid-cols-12 gap-6",
                            "children": [
                              {
                                "type": "container",
                                "class": "col-span-12 sm:col-span-12",
                                "children": [
                                  {
                                    "type": "puEvent",
                                    "eventType": "delete",
                                    "elementType": "staticHtmlTag",
                                    "text": "DELETE",
                                    "tag": "div",
                                    "class": "block text-red-500 bg-transparent border border-solid border-red-500 hover:bg-primary hover:text-white active:bg-red-600 text-center font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 cursor-pointer"
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "conditionArray": [
                          {
                            "cd": "INI, k, documentLock, equal, s, true"
                          }
                        ],
                        "type": "container",
                        "class": "bg-white py-6 px-4 sm:p-6",
                        "children": [
                          {
                            "type": "container",
                            "class": "col-span-12 sm:col-span-12",
                            "children": [
                              {
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "div",
                                "text": "bla bla bla",
                                "class": "mt-1 text-sm text-gray-500"
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
            "description": "cddp protect Dialog",
            "type": "dialog",
            "key": "cddpProtectDialog01",
            "toggleDialog": true,
            "saveType": "update",
            "dialogKey": "cddpProtectDialog01",
            "class": "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle w-1/4",
            "children": [
              {
                "description": "dialog card",
                "type": "container",
                "class": "bg-white",
                "children": [
                  {
                    "type": "container",
                    "class": "shadow sm:rounded-md sm:overflow-hidden",
                    "children": [
                      {
                        "description": "dialog card header",
                        "type": "container",
                        "class": "flex justify-between px-4 py-2 bg-orangeColor text-left sm:px-6",
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
                                "text": "Protect document Dialog",
                                "class": "text-sm leading-6 font-medium uppercase text-white"
                              }
                            ]
                          },
                          {
                            "description": "dialog card header close div",
                            "type": "container",
                            "class": "item w-2",
                            "children": [
                              {
                                "description": "dialog card header close",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "div",
                                "text": "close",
                                "class": "material-symbols-outlined align-middle pr-2 text-right text-white cursor-pointer",
                                "toggleDialog": true,
                                "dialogKey": "cddpProtectDialog01"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "container",
                        "class": "bg-white py-6 px-4 sm:p-6",
                        "children": [
                          {
                            "type": "container",
                            "class": "col-span-12 sm:col-span-12",
                            "children": [
                              {
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "div",
                                "text": "If you click the button the document will be deleted",
                                "class": "mt-1 text-sm text-gray-500"
                              }
                            ]
                          },
                          {
                            "type": "container",
                            "class": "mt-6 grid grid-cols-12 gap-6",
                            "children": [
                              {
                                "type": "container",
                                "class": "col-span-12 sm:col-span-12",
                                "children": [
                                  {
                                    "description": "switch",
                                    "type": "container",
                                    "class": "pl-2 pt-1",
                                    "children": [
                                      {
                                        "type": "element",
                                        "elementType": "switchInput",
                                        "key": "documentLock",
                                        "activeValue": "true",
                                        "inactiveValue": false,
                                        "parentClass": "pt-2",
                                        "height": "h-5",
                                        "width": "w-9",
                                        "translateX": "translate-x-4",
                                        "handleColor": "bg-white",
                                        "bgActive": "bg-primary focus:outline-none",
                                        "bgInactive": "bg-gray-300 focus:outline-none"
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
            "description": "cddp duplicate Dialog",
            "type": "dialog",
            "key": "cddpDuplicateDialog01",
            "toggleDialog": true,
            "saveType": "update",
            "dialogKey": "cddpDuplicateDialog01",
            "class": "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle w-1/4",
            "children": [
              {
                "description": "dialog card",
                "type": "container",
                "class": "bg-white",
                "children": [
                  {
                    "type": "container",
                    "class": "shadow sm:rounded-md sm:overflow-hidden",
                    "children": [
                      {
                        "description": "dialog card header",
                        "type": "container",
                        "class": "flex justify-between px-4 py-2 bg-orangeColor text-left sm:px-6",
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
                                "text": "Duplicate document Dialog",
                                "class": "text-sm leading-6 font-medium uppercase text-white"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "container",
                        "class": "bg-white py-6 px-4 sm:p-6",
                        "children": [
                          {
                            "type": "container",
                            "class": "col-span-12 sm:col-span-12",
                            "children": [
                              {
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "div",
                                "text": "If you click the button the document will be deleted",
                                "class": "mt-1 text-sm text-gray-500"
                              }
                            ]
                          },
                          {
                            "type": "container",
                            "class": "mt-6 grid grid-cols-12 gap-6",
                            "children": [
                              {
                                "type": "container",
                                "class": "col-span-12 sm:col-span-12",
                                "children": [
                                  {
                                    "type": "puEvent",
                                    "eventType": "delete",
                                    "elementType": "staticHtmlTag",
                                    "text": "DUPLICATE",
                                    "tag": "div",
                                    "class": "block text-red-500 bg-transparent border border-solid border-red-500 hover:bg-primary hover:text-white active:bg-red-600 text-center font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 cursor-pointer"
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
            "description": "cddp edit Dialog",
            "type": "dialog",
            "key": "table1EditDialog",
            "saveType": "update",
            "class": "fixed w-full h-screen top-0 left-0 flex inset-0 z-50",
            "children": [
              {
                "type": "container",
                "class": "relative my-0  w-full h-screen",
                "children": [
                  {
                    "type": "container",
                    "class": "border-0 shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none w-full h-screen",
                    "children": [
                      {
                        "type": "container",
                        "class": "space-y-0 w-full h-full ",
                        "children": [
                          {
                            "type": "container",
                            "class": "shadow sm:overflow-hidden h-screen",
                            "children": [
                              {
                                "description": "topbar",
                                "type": "container",
                                "class": "w-full flex justify-between items-center w-full bg-[#4e5962] h-12 pl-8 pr-4 ",
                                "children": [
                                  {
                                    "description": "fullscreen dialog header left",
                                    "type": "container",
                                    "class": "flex xl:justify-start w-auto space-x-16 text-[#b6c2cd] h-full",
                                    "children": [
                                      {
                                        "description": "tabs container",
                                        "type": "container",
                                        "class": "flex space-x-2 text-center text-12 font-normal text-white leading-[14px] pl-4",
                                        "children": [
                                          {
                                            "description": "tab 1 PROFIL button",
                                            "type": "container",
                                            "tabID": "tab001",
                                            "tabGroupID": "tabGroup001",
                                            "class": "flex justify-center items-center cursor-pointer px-6 bg-[#3b4650] hover:bg-gray-400 hover:text-white",
                                            "activeClass": "text-white bg-[#9ca3af] h-full w-full",
                                            "children": [
                                              {
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "div",
                                                "text": "PROFILE",
                                                "class": "uppercase"
                                              }
                                            ]
                                          },
                                          {
                                            "description": "tab 2 SIGNATURE button",
                                            "type": "container",
                                            "tabID": "tab002",
                                            "tabGroupID": "tabGroup001",
                                            "class": "flex justify-center items-center cursor-pointer px-6 bg-[#3b4650] hover:bg-gray-400 hover:text-white",
                                            "activeClass": "text-white bg-[#9ca3af] h-full w-full",
                                            "children": [
                                              {
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "div",
                                                "text": "SIGNATURE",
                                                "class": "uppercase"
                                              }
                                            ]
                                          },
                                          {
                                            "description": "tab 1 PERMISSIONS button",
                                            "type": "container",
                                            "tabID": "tab003",
                                            "tabGroupID": "tabGroup001",
                                            "class": "flex justify-center items-center cursor-pointer px-6 bg-[#3b4650] hover:bg-gray-400 hover:text-white",
                                            "activeClass": "text-white bg-[#9ca3af] h-full w-full",
                                            "children": [
                                              {
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "div",
                                                "text": "PERMISSIONS",
                                                "class": "uppercase"
                                              }
                                            ]
                                          },
                                          {
                                            "description": "tab 1 TEXT button",
                                            "type": "container",
                                            "tabID": "tab004",
                                            "tabGroupID": "tabGroup001",
                                            "class": "flex justify-center items-center cursor-pointer px-6 bg-[#3b4650] hover:bg-gray-400 hover:text-white",
                                            "activeClass": "text-white bg-[#9ca3af] h-full w-full",
                                            "children": [
                                              {
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "div",
                                                "text": "TEXT",
                                                "class": "uppercase"
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "description": "fullscreen dialog header right",
                                    "type": "container",
                                    "class": "space flex space-x-2 text-center text-12 font-medium text-gray-200 leading-[14px] tracking-widest",
                                    "children": [
                                      {
                                        "description": "save/close container",
                                        "type": "container",
                                        "class": "flex items-center space-x-2 h-full text-[#b6c2cd] hover:text-white mr-4 px-2 font-bold text-11",
                                        "children": [
                                          {
                                            "description": "save button",
                                            "type": "puEvent",
                                            "eventType": "save",
                                            "class": "w-32 h-full bg-[#3b4650] hover:bg-gray-400 py-4",
                                            "children": [
                                              {
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "div",
                                                "text": "save",
                                                "class": "uppercase"
                                              }
                                            ]
                                          },
                                          {
                                            "description": "save + close button",
                                            "type": "puEvent",
                                            "eventType": "save",
                                            "toggleDialog": true,
                                            "class": "w-32 h-full bg-primary hover:bg-gray-400 py-4",
                                            "children": [
                                              {
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "div",
                                                "text": "save +close",
                                                "class": "uppercase"
                                              }
                                            ]
                                          },
                                          {
                                            "description": "cancel button",
                                            "type": "puEvent",
                                            "eventType": "cancel",
                                            "toggleDialog": true,
                                            "class": "w-32 h-full bg-[#3b4650] hover:bg-gray-400 py-4",
                                            "children": [
                                              {
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "div",
                                                "text": "Cancel",
                                                "class": "uppercase"
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
                                "description": "headline",
                                "type": "container",
                                "class": "flex justify-start pb-2 border-b border-gray-400 mx-10 mt-6",
                                "children": [
                                  {
                                    "description": "element project number",
                                    "type": "element",
                                    "elementType": "staticHtmlTag",
                                    "tag": "span",
                                    "text": "explicit",
                                    "class": "text-primary hover:text-primaryHover pb-0 material-symbols-outlined align-middle pr-2"
                                  },
                                  {
                                    "description": "element project number",
                                    "type": "element",
                                    "elementType": "staticHtmlTag",
                                    "tag": "span",
                                    "text": "EDIT USER",
                                    "class": "text-lg leading-6 font-medium text-gray-900 pt-0"
                                  }
                                ]
                              },
                              {
                                "description": "tab 1 PROFIL",
                                "type": "container",
                                "tabID": "tab001",
                                "tabGroupID": "tabGroup001",
                                "tabContent": true,
                                "class": "px-10 bg-white w-full pt-4 ",
                                "children": [
                                  {
                                    "description": "personal data block",
                                    "type": "container",
                                    "class": "flex flex-col space-y-4 border-b border-gray-200 pb-8",
                                    "children": [
                                      {
                                        "description": "subline personal data",
                                        "type": "container",
                                        "class": "flex justify-start",
                                        "children": [
                                          {
                                            "description": "element project number",
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "tag": "span",
                                            "text": "personal data",
                                            "class": "text font-medium text-gray-900 pt-0"
                                          }
                                        ]
                                      },
                                      {
                                        "description": "gender",
                                        "type": "container",
                                        "class": "flex w-full space-x-4 text-left",
                                        "children": [
                                          {
                                            "type": "container",
                                            "class": "w-1/5",
                                            "children": [
                                              {
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "span",
                                                "text": "gender",
                                                "class": "block text-11 font-normal text-gray-700"
                                              },
                                              {
                                                "description": "listbox select",
                                                "type": "container",
                                                "containerType": "div",
                                                "class": "w-full",
                                                "children": [
                                                  {
                                                    "description": "listbox select input",
                                                    "type": "element",
                                                    "elementType": "listboxSelectInput",
                                                    "value": "value",
                                                    "key": "gender",
                                                    "class": "relative",
                                                    "listbox": {
                                                      "listboxButton": {
                                                        "placeholder": "",
                                                        "class": "relative flex items-center w-full h-selHeight cursor-pointer bg-white border border-gray-300 rounded-ibr p-ipy pl-3 pr-10 text-left  sm:text-sm",
                                                        "assignedKey": "material.substrate",
                                                        "children": [
                                                          {
                                                            "type": "container",
                                                            "children": [
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "span",
                                                                "assignedKey": "name",
                                                                "class": "block truncate"
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "span",
                                                                "text": "unfold_more",
                                                                "class": "material-symbols-outlined text-iicon text-gray-400 font-normal pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
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
                                                                    {
                                                                      "cd": "INI, k, selected, equal, b, true"
                                                                    }
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
                                                        }
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
                                                            "value": "male",
                                                            "name": "male"
                                                          },
                                                          {
                                                            "value": "female",
                                                            "name": "female"
                                                          },
                                                          {
                                                            "value": "diverse",
                                                            "name": "diverse"
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
                                            "description": "select",
                                            "type": "container",
                                            "class": "w-1/5",
                                            "children": [
                                              {
                                                "description": "element project number",
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "span",
                                                "text": "salutation",
                                                "class": "block text-11 font-normal text-gray-700"
                                              },
                                              {
                                                "description": "listbox select",
                                                "type": "container",
                                                "containerType": "div",
                                                "class": "w-full",
                                                "children": [
                                                  {
                                                    "description": "listbox select input",
                                                    "type": "element",
                                                    "elementType": "listboxSelectInput",
                                                    "value": "value",
                                                    "key": "salutation",
                                                    "class": "relative",
                                                    "listbox": {
                                                      "listboxButton": {
                                                        "placeholder": "",
                                                        "class": "relative flex items-center w-full h-selHeight cursor-pointer bg-white border border-gray-300 rounded-ibr p-ipy pl-3 pr-10 text-left  sm:text-sm",
                                                        "assignedKey": "material.substrate",
                                                        "children": [
                                                          {
                                                            "type": "container",
                                                            "children": [
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "span",
                                                                "assignedKey": "name",
                                                                "class": "block truncate"
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "span",
                                                                "text": "unfold_more",
                                                                "class": "material-symbols-outlined text-iicon text-gray-400 font-normal pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
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
                                                                    {
                                                                      "cd": "INI, k, selected, equal, b, true"
                                                                    }
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
                                                        }
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
                                                            "value": "casual1",
                                                            "name": "casual1"
                                                          },
                                                          {
                                                            "value": "casual2",
                                                            "name": "casual2"
                                                          },
                                                          {
                                                            "value": "formal1",
                                                            "name": "formal1"
                                                          },
                                                          {
                                                            "value": "formal2",
                                                            "name": "formal2"
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
                                        "description": "name",
                                        "type": "container",
                                        "class": "flex w-full space-x-4 text-left",
                                        "children": [
                                          {
                                            "description": "select",
                                            "type": "container",
                                            "class": "w-1/5",
                                            "children": [
                                              {
                                                "description": "element project number",
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "span",
                                                "text": "title",
                                                "class": "block text-11 font-normal text-gray-700"
                                              },
                                              {
                                                "description": "listbox select",
                                                "type": "container",
                                                "containerType": "div",
                                                "class": "w-full",
                                                "children": [
                                                  {
                                                    "description": "listbox select input",
                                                    "type": "element",
                                                    "elementType": "listboxSelectInput",
                                                    "value": "value",
                                                    "key": "title",
                                                    "class": "relative",
                                                    "listbox": {
                                                      "listboxButton": {
                                                        "placeholder": "",
                                                        "class": "relative flex items-center w-full h-selHeight cursor-pointer bg-white border border-gray-300 rounded-ibr p-ipy pl-3 pr-10 text-left  sm:text-sm",
                                                        "assignedKey": "material.substrate",
                                                        "children": [
                                                          {
                                                            "type": "container",
                                                            "children": [
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "span",
                                                                "assignedKey": "name",
                                                                "class": "block truncate"
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "span",
                                                                "text": "unfold_more",
                                                                "class": "material-symbols-outlined text-iicon text-gray-400 font-normal pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
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
                                                                    {
                                                                      "cd": "INI, k, selected, equal, b, true"
                                                                    }
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
                                                        }
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
                                                            "value": "Dr.",
                                                            "name": "Dr."
                                                          },
                                                          {
                                                            "value": "Dr. Dr.",
                                                            "name": "Dr. Dr."
                                                          },
                                                          {
                                                            "value": "Prof. Dr.",
                                                            "name": "Prof. Dr."
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
                                            "description": "given name",
                                            "type": "container",
                                            "class": "w-1/5",
                                            "children": [
                                              {
                                                "description": "element project number",
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "span",
                                                "text": "given name",
                                                "class": "block text-11 font-normal text-gray-700"
                                              },
                                              {
                                                "type": "element",
                                                "elementType": "textInput",
                                                "key": "given_name",
                                                "class": "mt-0 block w-full border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-13"
                                              }
                                            ]
                                          },
                                          {
                                            "description": "middle name",
                                            "type": "container",
                                            "class": "w-1/5",
                                            "children": [
                                              {
                                                "description": "element project number",
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "span",
                                                "text": "middle name",
                                                "class": "block text-11 font-normal text-gray-700"
                                              },
                                              {
                                                "type": "element",
                                                "elementType": "textInput",
                                                "key": "middle_name",
                                                "class": "mt-0 block w-full border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-13"
                                              }
                                            ]
                                          },
                                          {
                                            "description": "family name",
                                            "type": "container",
                                            "class": "w-1/5",
                                            "children": [
                                              {
                                                "description": "element project number",
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "span",
                                                "text": "family name",
                                                "class": "block text-11 font-normal text-gray-700"
                                              },
                                              {
                                                "type": "element",
                                                "elementType": "textInput",
                                                "key": "family_name",
                                                "class": "mt-0 block w-full border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-13"
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      {
                                        "description": "country company",
                                        "type": "container",
                                        "class": "flex w-full space-x-4 text-left",
                                        "children": [
                                          {
                                            "description": "country",
                                            "type": "container",
                                            "class": "w-1/5",
                                            "children": [
                                              {
                                                "description": "element project number",
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "span",
                                                "text": "country",
                                                "class": "block text-11 font-normal text-gray-700"
                                              },
                                              {
                                                "description": "listbox select",
                                                "type": "container",
                                                "containerType": "div",
                                                "class": "w-full",
                                                "children": [
                                                  {
                                                    "description": "listbox select input",
                                                    "type": "element",
                                                    "elementType": "listboxSelectInput",
                                                    "value": "value",
                                                    "key": "country",
                                                    "class": "relative",
                                                    "listbox": {
                                                      "listboxButton": {
                                                        "placeholder": "",
                                                        "class": "relative flex items-center w-full h-selHeight cursor-pointer bg-white border border-gray-300 rounded-ibr p-ipy pl-3 pr-10 text-left  sm:text-sm",
                                                        "assignedKey": "material.substrate",
                                                        "children": [
                                                          {
                                                            "type": "container",
                                                            "children": [
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "span",
                                                                "assignedKey": "name",
                                                                "class": "block truncate"
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "span",
                                                                "text": "unfold_more",
                                                                "class": "material-symbols-outlined text-iicon text-gray-400 font-normal pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
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
                                                                    {
                                                                      "cd": "INI, k, selected, equal, b, true"
                                                                    }
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
                                                        }
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
                                                            "value": "Bangladesh",
                                                            "name": "Bangladesh"
                                                          },
                                                          {
                                                            "value": "Germany",
                                                            "name": "Germany"
                                                          },
                                                          {
                                                            "value": "Moldavia",
                                                            "name": "Moldavia"
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
                                            "description": "company",
                                            "type": "container",
                                            "class": "w-1/5",
                                            "children": [
                                              {
                                                "description": "company",
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "div",
                                                "text": "company",
                                                "class": "block text-11 font-normal text-gray-700"
                                              },
                                              {
                                                "description": "listbox select",
                                                "type": "container",
                                                "containerType": "div",
                                                "class": "w-full",
                                                "children": [
                                                  {
                                                    "description": "listbox select input",
                                                    "type": "element",
                                                    "elementType": "listboxSelectInput",
                                                    "value": "value",
                                                    "key": "company",
                                                    "class": "relative",
                                                    "listbox": {
                                                      "listboxButton": {
                                                        "placeholder": "",
                                                        "class": "relative flex items-center w-full h-selHeight cursor-pointer bg-white border border-gray-300 rounded-ibr p-ipy pl-3 pr-10 text-left  sm:text-sm",
                                                        "assignedKey": "material.substrate",
                                                        "children": [
                                                          {
                                                            "type": "container",
                                                            "children": [
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "span",
                                                                "assignedKey": "company",
                                                                "class": "block truncate"
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "span",
                                                                "text": "unfold_more",
                                                                "class": "material-symbols-outlined text-iicon text-gray-400 font-normal pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
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
                                                                    {
                                                                      "cd": "INI, k, selected, equal, b, true"
                                                                    }
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
                                                        }
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
                                                            "value": "dxpberlin",
                                                            "name": "dxpberlin"
                                                          },
                                                          {
                                                            "value": "dxpbaerlin",
                                                            "name": "dxpbaerlin"
                                                          },
                                                          {
                                                            "value": "utomberlin",
                                                            "name": "UTOMberlin"
                                                          },
                                                          {
                                                            "value": "hauptstadtliebe",
                                                            "name": "Hauptstadtliebe"
                                                          },
                                                          {
                                                            "value": "hillebrand-coating",
                                                            "name": "Hillebrand-Coating"
                                                          },
                                                          {
                                                            "value": "heo-coating",
                                                            "name": "HEO Coating"
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
                                    "description": "login data block",
                                    "type": "container",
                                    "class": "flex flex-col space-y-4 mt-10 border-b border-gray-200 pb-8",
                                    "children": [
                                      {
                                        "description": "subline login data",
                                        "type": "container",
                                        "class": "flex justify-start",
                                        "children": [
                                          {
                                            "description": "element project number",
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "tag": "span",
                                            "text": "login data",
                                            "class": "text font-medium text-gray-900 pt-0"
                                          }
                                        ]
                                      },
                                      {
                                        "description": "email phone",
                                        "type": "container",
                                        "class": "flex w-full space-x-4 text-left",
                                        "children": [
                                          {
                                            "description": "email",
                                            "type": "container",
                                            "class": "w-1/5",
                                            "children": [
                                              {
                                                "description": "element project number",
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "span",
                                                "text": "Email address",
                                                "class": "block text-11 font-normal text-gray-700"
                                              },
                                              {
                                                "type": "element",
                                                "elementType": "textInput",
                                                "key": "email",
                                                "class": "mt-0 block w-full border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-13"
                                              }
                                            ]
                                          },
                                          {
                                            "description": "phone",
                                            "type": "container",
                                            "class": "w-1/5",
                                            "children": [
                                              {
                                                "description": "element project number",
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "span",
                                                "text": "Phone number",
                                                "class": "block text-11 font-normal text-gray-700"
                                              },
                                              {
                                                "type": "element",
                                                "elementType": "textInput",
                                                "key": "phone_number",
                                                "class": "mt-0 block w-full border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-13"
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      {
                                        "description": "role access level",
                                        "type": "container",
                                        "class": "flex w-full space-x-4 text-left",
                                        "children": [
                                          {
                                            "description": "role select",
                                            "type": "container",
                                            "class": "w-1/5",
                                            "children": [
                                              {
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "span",
                                                "text": "role",
                                                "class": "block text-11 font-normal text-gray-700"
                                              },
                                              {
                                                "description": "role listbox select",
                                                "type": "container",
                                                "containerType": "div",
                                                "class": "w-full",
                                                "children": [
                                                  {
                                                    "description": "listbox select input",
                                                    "type": "element",
                                                    "elementType": "listboxSelectInput",
                                                    "value": "value",
                                                    "key": "accessRole",
                                                    "class": "relative",
                                                    "listbox": {
                                                      "listboxButton": {
                                                        "placeholder": "",
                                                        "class": "relative flex items-center w-full h-selHeight cursor-pointer bg-white border border-gray-300 rounded-ibr p-ipy pl-3 pr-10 text-left  sm:text-sm",
                                                        "assignedKey": "material.substrate",
                                                        "children": [
                                                          {
                                                            "type": "container",
                                                            "children": [
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "span",
                                                                "assignedKey": "name",
                                                                "class": "block truncate"
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "span",
                                                                "text": "unfold_more",
                                                                "class": "material-symbols-outlined text-iicon text-gray-400 font-normal pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
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
                                                                    {
                                                                      "cd": "INI, k, selected, equal, b, true"
                                                                    }
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
                                                        }
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
                                                            "value": "user",
                                                            "name": "user"
                                                          },
                                                          {
                                                            "value": "superuser",
                                                            "name": "superuser"
                                                          },
                                                          {
                                                            "value": "admin",
                                                            "name": "admin"
                                                          },
                                                          {
                                                            "value": "superadmin",
                                                            "name": "superadmin"
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
                                            "description": "access level select",
                                            "type": "container",
                                            "class": "w-1/5",
                                            "children": [
                                              {
                                                "description": "element project number",
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "span",
                                                "text": "access level",
                                                "class": "block text-11 font-normal text-gray-700"
                                              },
                                              {
                                                "description": "listbox select",
                                                "type": "container",
                                                "containerType": "div",
                                                "class": "w-full",
                                                "children": [
                                                  {
                                                    "description": "listbox select input",
                                                    "type": "element",
                                                    "elementType": "listboxSelectInput",
                                                    "value": "value",
                                                    "key": "accessLevel",
                                                    "class": "relative",
                                                    "listbox": {
                                                      "listboxButton": {
                                                        "placeholder": "",
                                                        "class": "relative flex items-center w-full h-selHeight cursor-pointer bg-white border border-gray-300 rounded-ibr p-ipy pl-3 pr-10 text-left  sm:text-sm",
                                                        "assignedKey": "material.substrate",
                                                        "children": [
                                                          {
                                                            "type": "container",
                                                            "children": [
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "span",
                                                                "assignedKey": "name",
                                                                "class": "block truncate"
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "span",
                                                                "text": "unfold_more",
                                                                "class": "material-symbols-outlined text-iicon text-gray-400 font-normal pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
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
                                                                    {
                                                                      "cd": "INI, k, selected, equal, b, true"
                                                                    }
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
                                                        }
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
                                                            "value": "levelOne",
                                                            "name": "levelOne"
                                                          },
                                                          {
                                                            "value": "levelTwo",
                                                            "name": "levelTwo"
                                                          },
                                                          {
                                                            "value": "levelThree",
                                                            "name": "levelThree"
                                                          },
                                                          {
                                                            "value": "levelFour",
                                                            "name": "levelFour"
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
                                    "description": "navigation data block",
                                    "type": "container",
                                    "class": "flex flex-col space-y-4 mt-10 border-b border-gray-200 pb-8",
                                    "children": [
                                      {
                                        "description": "subline login data",
                                        "type": "container",
                                        "class": "flex justify-start",
                                        "children": [
                                          {
                                            "description": "element project number",
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "tag": "span",
                                            "text": "navigation data",
                                            "class": "text font-medium text-gray-900 pt-0"
                                          }
                                        ]
                                      },
                                      {
                                        "description": "navigation type",
                                        "type": "container",
                                        "class": "flex w-full space-x-4 text-left",
                                        "children": [
                                          {
                                            "description": "navigation type select",
                                            "type": "container",
                                            "class": "w-1/5",
                                            "children": [
                                              {
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "span",
                                                "text": "navigation type",
                                                "class": "block text-11 font-normal text-gray-700"
                                              },
                                              {
                                                "description": "role listbox select",
                                                "type": "container",
                                                "containerType": "div",
                                                "class": "w-full",
                                                "children": [
                                                  {
                                                    "description": "listbox select input",
                                                    "type": "element",
                                                    "elementType": "listboxSelectInput",
                                                    "value": "value",
                                                    "key": "navigation",
                                                    "class": "relative",
                                                    "listbox": {
                                                      "listboxButton": {
                                                        "placeholder": "",
                                                        "class": "relative flex items-center w-full h-selHeight cursor-pointer bg-white border border-gray-300 rounded-ibr p-ipy pl-3 pr-10 text-left  sm:text-sm",
                                                        "assignedKey": "material.substrate",
                                                        "children": [
                                                          {
                                                            "type": "container",
                                                            "children": [
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "span",
                                                                "assignedKey": "name",
                                                                "class": "block truncate"
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "span",
                                                                "text": "unfold_more",
                                                                "class": "material-symbols-outlined text-iicon text-gray-400 font-normal pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
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
                                                                    {
                                                                      "cd": "INI, k, selected, equal, b, true"
                                                                    }
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
                                                        }
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
                                                            "value": "platformNavigation",
                                                            "name": "platformNavigation"
                                                          },
                                                          {
                                                            "value": "customNavigation",
                                                            "name": "customNavigation"
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
                                    "description": "AWS user parameter block",
                                    "type": "container",
                                    "class": "flex flex-col space-y-4 mt-10 border-b border-gray-200 pb-4",
                                    "children": [
                                      {
                                        "description": "subline login data",
                                        "type": "container",
                                        "class": "flex justify-start",
                                        "children": [
                                          {
                                            "description": "element project number",
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "tag": "span",
                                            "text": "AWS user parameter",
                                            "class": "text font-medium text-gray-900 pt-0"
                                          }
                                        ]
                                      },
                                      {
                                        "description": "aws confirm user",
                                        "type": "container",
                                        "class": "flex w-full space-x-4 text-left",
                                        "children": [
                                          {
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "tag": "span",
                                            "text": "confirm user",
                                            "class": "block text-11 font-normal text-gray-700"
                                          },
                                          {
                                            "description": "checkbox confirmUser",
                                            "type": "element",
                                            "elementType": "checkboxInput",
                                            "key": "confirmed",
                                            "activeValue": {
                                              "value": false
                                            },
                                            "inactiveValue": {
                                              "value": true
                                            },
                                            "class": "ml-2 h-5 w-5 rounded border-gray-300 bg-gray-200 text-primary focus:ring-indigo-500"
                                          },
                                        ]
                                      },
                                      {
                                        "description": "aws messaging",
                                        "type": "container",
                                        "class": "flex w-full space-x-4 text-left",
                                        "children": [
                                          {
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "tag": "span",
                                            "text": "messaging",
                                            "class": "block text-11 font-normal text-gray-700"
                                          },
                                          {
                                            "description": "radio group horizontal",
                                            "type": "container",
                                            "class": "pl-2 space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10",
                                            "children": [
                                              {
                                                "type": "element",
                                                "elementType": "radioGroup",
                                                "key": "messageAction",
                                                "value": "value",
                                                "assignedKey": "name",
                                                "parentClass": "flex items-center",
                                                "height": "h-4",
                                                "width": "w-4",
                                                "radioColor": "text-primary",
                                                "items": [
                                                  {
                                                    "value": "phone",
                                                    "name": "no email"
                                                  },
                                                  {
                                                    "value": "push",
                                                    "name": "resend email"
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
                                    "description": "AWS user parameter block",
                                    "type": "container",
                                    "class": "flex flex-col space-y-4 mt-10 border-b border-gray-200 pb-4",
                                    "children": [
                                      {
                                        "description": "aws MFA",
                                        "type": "container",
                                        "class": "flex w-full space-x-4 text-left",
                                        "children": [
                                          {
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "tag": "span",
                                            "text": "MFA settings",
                                            "class": "block text-11 font-normal text-gray-700"
                                          },
                                          {
                                            "description": "radio group horizontal",
                                            "type": "container",
                                            "class": "pl-2 space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10",
                                            "children": [
                                              {
                                                "type": "element",
                                                "elementType": "radioGroup",
                                                "key": "mfa",
                                                "value": "value",
                                                "assignedKey": "name",
                                                "parentClass": "flex items-center",
                                                "height": "h-4",
                                                "width": "w-4",
                                                "radioColor": "text-primary",
                                                "items": [
                                                  {
                                                    "value": "no",
                                                    "name": "NO MFA"
                                                  },
                                                  {
                                                    "value": "mfa-software",
                                                    "name": "MFA Authenticator"
                                                  },
                                                  {
                                                    "value": "mfa-sms",
                                                    "name": "MFA SMS"
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
                                "description": "tab 1 PROFIL",
                                "type": "container",
                                "tabID": "tab003",
                                "tabGroupID": "tabGroup001",
                                "tabContent": true,
                                "class": "px-10 bg-white w-full pt-4 ",
                                "children": [
                                  {
                                    "description": "personal data block",
                                    "type": "container",
                                    "class": "flex flex-col space-y-4 border-b border-gray-200 pb-8",
                                    "children": [
                                      {
                                        "description": "subline personal data",
                                        "type": "container",
                                        "class": "flex justify-start",
                                        "children": [
                                          {
                                            "description": "element project number",
                                            "type": "element",
                                            "elementType": "heTree",
                                            "inputPathKey": "platformNavigationTree",
                                            "class": "text font-medium text-gray-900 pt-0"
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
            "description": "header",
            "type": "container",
            "class": "flex flex-col items-center justify-between bg-contentHead w-full",
            "children": [
              {
                "description": "header container",
                "type": "container",
                "class": "flex justify-between w-full  py-1 px-12 w-full",
                "children": [
                  {
                    "description": "content header col 1",
                    "type": "container",
                    "class": "w-[80%] flex flex-col",
                    "children": [
                      {
                        "description": "content header col 1",
                        "type": "container",
                        "class": "",
                        "children": [
                          {
                            "description": "content header col 1",
                            "type": "container",
                            "class": "flex",
                            "children": [
                              {
                                "description": "FU headline",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "PL",
                                "class": "text-4xl uppercase font-bold text-primary py-2 w-auto"
                              },
                              {
                                "description": "FU headline",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "USER MANAGEMENT",
                                "class": "text-xl uppercase font-bold text pt-[19px] pl-0.5 py-2 w-auto"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "description": "cddp col 2 right",
                    "type": "container",
                    "class": "flex xl:justify-end w-full space-x-2 text-[#b6c2cd] ",
                    "children": [
                      {
                        "description": "settings | PLUS container",
                        "type": "container",
                        "class": "flex items-center space-x-1",
                        "children": [
                          {
                            "description": "settings",
                            "type": "element",
                            "elementType": "staticHtmlTag",
                            "tag": "div",
                            "text": "settings",
                            "class": "xl:hidden border border-1 border-[#b6c2cd] hover:border-white text-11 text-[#b6c2cd] hover:text-white rounded-sm px-2 py-[0.5px] cursor-pointer"
                          },
                          {
                            "description": "+ container",
                            "type": "container",
                            "class": "flex items-center space-x-1",
                            "children": [
                              {
                                "description": "trigger dropdown panel",
                                "type": "container",
                                "containerType": "a",
                                "class": "",
                                "children": [
                                  {
                                    "type": "navEvent",
                                    "eventType": "dropdownPanelTrigger",
                                    "elementType": "staticHtmlTag",
                                    "target": "test-123",
                                    "key": "cddp",
                                    "tag": "label",
                                    "text": "add",
                                    "class": "material-symbols-outlined text-3xl pl-4 xl:pl-12 text-[#b6c2cd] hover:text-amber-400 cursor-pointer"
                                  }
                                ]
                              },
                              {
                                "description": "dropdown panel",
                                "type": "container",
                                "containerType": "div",
                                "class": "relative inline-block text-left",
                                "children": [
                                  {
                                    "type": "dropdownPanel",
                                    "key": "cddp",
                                    "id": "test-123",
                                    "tag": "div",
                                    "class": "origin-top-right absolute right-0 mt-5 w-40 rounded-sm shadow bg-gray-100 ring-1 ring-black ring-opacity-5 focus:outline-none",
                                    "children": [
                                      {
                                        "description": "panel container menu items",
                                        "type": "container",
                                        "containerType": "div",
                                        "class": "py-1",
                                        "children": [
                                          {
                                            "description": "menu item 1",
                                            "type": "puEvent",
                                            "eventType": "create",
                                            "toggleDialog": true,
                                            "dialogKey": "cddpCreateDialog01",
                                            "containerType": "div",
                                            "class": "flex justify-start items-center hover:bg-amber-300 text-black cursor-pointer",
                                            "children": [
                                              {
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "div",
                                                "text": "add_box",
                                                "class": "material-symbols-outlined text-xl w-6 pl-2"
                                              },
                                              {
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "div",
                                                "text": "create",
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
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "table",
            "type": "container",
            "class": "flex flex-col m-10",
            "children": [
              {
                "description": "ag grid",
                "type": "element",
                "elementType": "agGrid",
                "platformUsers": true,
                "rowGroupPanelShow": "always",
                "columnDefs": [
                  {
                    "field": "Username",
                    "headerName": "User ID",
                    "enableRowGroup": true,
                    "enablePivot": true,
                    "cellRenderer": "userStatusCellRenderer",
                    "cellStyle": {
                      "font-size": "10px",
                      "letter-spacing": "-0.05em"
                    },
                    "width": "240px"
                  },
                  {
                    "field": "family_name",
                    "headerName": "Last name",
                    "enableRowGroup": true,
                    "enablePivot": true
                  },
                  {
                    "field": "given_name",
                    "headerName": "First name",
                    "enableRowGroup": true,
                    "enablePivot": true
                  },
                  {
                    "field": "email",
                    "headerName": "Email",
                    "enableRowGroup": true,
                    "enablePivot": true
                  },
                  {
                    "field": "phone_number",
                    "headerName": "Phone",
                    "enableRowGroup": true,
                    "enablePivot": true
                  },
                  {
                    "field": "custom:userType",
                    "headerName": "Usertype",
                    "enableRowGroup": true,
                    "enablePivot": true
                  },
                  {
                    "field": "custom:lastLogin",
                    "headerName": "Last Login",
                    "enableRowGroup": true,
                    "enablePivot": true,
                    "valueFormatter": "formatDate",
                    "displayDateFormat": "DD.MM.YYYY mm:hh"
                  },
                  {
                    "headerName": "Actions",
                    "pinned": "right",
                    "cellRenderer": "ActionsCellRenderer",
                    "filter": false,
                    "floatingFilter": false,
                    "width": 120
                  }
                ],
                "defaultColDef": {
                  "sortable": true,
                  "filter": true,
                  "flex": 0,
                  "floatingFilter": true,
                  "cellStyle": {
                    "height": "100%",
                    "display": "flex",
                    "justify-content": "start",
                    "align-items": "center",
                    "text-align": "left"
                  }
                },
                "detailCellRendererParams": null,
                "sideBarDefs": {
                  "position": "right",
                  "defaultToolPanel": "false",
                  "toolPanels": [
                    {
                      "id": "columns",
                      "labelDefault": "Columns",
                      "labelKey": "columns",
                      "iconKey": "columns",
                      "toolPanel": "agColumnsToolPanel",
                      "minWidth": 225,
                      "maxWidth": 225,
                      "width": 225
                    },
                    {
                      "id": "filters",
                      "labelDefault": "Filters",
                      "labelKey": "filters",
                      "iconKey": "filter",
                      "toolPanel": "agFiltersToolPanel",
                      "minWidth": 180,
                      "maxWidth": 400,
                      "width": 250
                    }
                  ]
                },
                "class": "ag-theme-balham h-screen w-full pt-0",
                "cellRenderer": [
                  {
                    "id": "userStatusCellRenderer",
                    "type": "container",
                    "class": "flex",
                    "children": [
                      {
                        "description": "svg status loggedIn",
                        "type": "element",
                        "conditionArray": [
                          { "cd": "INI, k, custom:firstLogin, notEmpty" }
                        ],
                        "elementType": "staticHtmlTag",
                        "tag": "rectColor",
                        "width": 10,
                        "height": 26,
                        "text": "#5ad25a"
                      },
                      {
                        "description": "svg status loggedIn",
                        "type": "element",
                        "conditionArray": [
                          { "cd": "INI, k, custom:firstLogin, empty" }
                        ],
                        "elementType": "staticHtmlTag",
                        "tag": "rectColor",
                        "width": 10,
                        "height": 26,
                        "text": "#d2b6a7"
                      },
                      {
                        "type": "element",
                        "elementType": "staticHtmlTag",
                        "tag": "span",
                        "assignedKey": "Username",
                        "class": "pl-2"
                      }
                    ]
                  },
                  {
                    "id": "ActionsCellRenderer",
                    "type": "container",
                    "class": "flex whitespace-nowrap space-x-1 text-xl",
                    "children": [
                      {
                        "description": "cell 5 element",
                        "type": "puEvent",
                        "eventType": "edit",
                        "elementType": "staticHtmlTag",
                        "tag": "span",
                        "text": "explicit",
                        "class": "material-symbols-outlined text-xl text-primary hover:text-amber-400 cursor-pointer",
                        "toggleDialog": true,
                        "dialogKey": "table1EditDialog"
                      },
                      {
                        "conditionArray": [
                          {
                            "cd": "INI, k, documentLock, unequal, s, true"
                          }
                        ],
                        "type": "cddpEvent",
                        "eventType": "edit",
                        "elementType": "staticHtmlTag",
                        "tag": "span",
                        "text": "lock_open",
                        "class": "material-symbols-outlined text-xl text-gray-600 hover:text-amber-400 cursor-pointer",
                        "toggleDialog": true,
                        "dialogKey": "cddpProtectDialog01"
                      },
                      {
                        "conditionArray": [
                          {
                            "cd": "INI, k, documentLock, equal, s, true"
                          }
                        ],
                        "type": "cddpEvent",
                        "eventType": "edit",
                        "elementType": "staticHtmlTag",
                        "tag": "span",
                        "text": "lock",
                        "class": "material-symbols-outlined text-xl text-amber-400 hover:text-amber-400 cursor-pointer",
                        "toggleDialog": true,
                        "dialogKey": "cddpProtectDialog01"
                      },
                      {
                        "description": "cell 1 element",
                        "type": "puEvent",
                        "eventType": "edit",
                        "elementType": "staticHtmlTag",
                        "tag": "span",
                        "text": "delete",
                        "class": "material-symbols-outlined text-xl text-gray-600 hover:text-amber-400 cursor-pointer",
                        "toggleDialog": true,
                        "dialogKey": "cddpDeleteDialog01"
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
  })

  return { jsonLocal: jsonStructure.value }
}
