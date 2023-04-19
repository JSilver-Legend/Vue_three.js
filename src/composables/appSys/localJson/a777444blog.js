import { ref } from 'vue'

export function useJsonLocal() {
  const jsonStructure = ref({
    "type": "appTemplate",
    "folderNavigationLink": "a888222heoparts",
    "showHideSidebar": true,
    "showHideTopbar": true,
    "URL": "a777444blog",
    "expressions": [
      {
        "conditionID": "if_colorRed",
        "unit": "markup",
        "conditionArray": [
          {
            "cd": "INI, k, generalProjectCategory, equal, s, VA"
          }
        ]
      },
      {
        "expressionID": "url11",
        "type": "stringchain",
        "unit": "markup",
        "expressionArray": [
          {
            "ex": "'https://dnamy.com/' + link + '/' + language"
          }
        ]
      },
      {
        "expressionID": "cop-linkword-local",
        "type": "stringchain",
        "unit": "markup",
        "expressionArray": [
          {
            "ex": "'localhost:8081/1/' + link"
          }
        ]
      },
      {
        "expressionID": "cop-linkword-external",
        "type": "stringchain",
        "unit": "markup",
        "expressionArray": [
          {
            "ex": "'https://dnamy.com/1/' + link"
          }
        ]
      }
    ],
    "pageBuilder": [
      {
        "pageBuilderID": "jobOffer",
        "dragItems": [
          {
            "sectionId": "textSection1",
            "markup": [
              {
                "description": "dragItem1 dialog",
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
                                "description": "prime select input container",
                                "type": "container",
                                "containerType": "div",
                                "class": "pt-4 p-input-filled p-inputtext-sm text-left",
                                "children": [
                                  {
                                    "description": "text",
                                    "type": "element",
                                    "elementType": "staticHtmlTag",
                                    "tag": "div",
                                    "text": "Werkstoff",
                                    "class": "text-gray-800 text-sm font-bold pb-4"
                                  },
                                  {
                                    "description": "select input",
                                    "type": "container",
                                    "containerType": "div",
                                    "class": "flex",
                                    "children": [
                                      {
                                        "type": "element",
                                        "elementType": "primeVueSelectInput",
                                        "key": "substrate",
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
                                    "description": "prime radio button container",
                                    "type": "container",
                                    "containerType": "div",
                                    "class": "pt-12 p-input-filled p-inputtext-sm w-full",
                                    "children": [
                                      {
                                        "description": "text",
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
                "description": "dragItem1",
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
                                "description": "headline",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "div",
                                "text": "Section1 demo text/image section",
                                "class": "text-lg font-bold"
                              },
                              {
                                "description": "dd buttons",
                                "type": "container",
                                "containerType": "div",
                                "class": "flex",
                                "children": [
                                  {
                                    "description": "dialog button",
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
                                        "class": "material-symbols-outlined text-gray-400 hover:text-black text w-1/8 p-3 cursor-pointer"
                                      }
                                    ]
                                  },
                                  {
                                    "description": "delete button",
                                    "type": "container",
                                    "class": "cursor-pointer",
                                    "children": [
                                      {
                                        "type": "element",
                                        "elementType": "navEvent",
                                        "eventType": "dragSectionPaneDeleteItem",
                                        "tag": "span",
                                        "text": "delete",
                                        "class": "material-symbols-outlined text-gray-400 hover:text-black text w-1/8 p-3 cursor-pointer"
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "description": "input headline",
                            "type": "container",
                            "containerType": "div",
                            "class": "w-full w-1/2 pt-4",
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
                                    "class": "mt-0 block w-1/2 border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-13"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "description": "input padding-top",
                            "type": "container",
                            "containerType": "div",
                            "class": "w-full w-1/2 pt-8",
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
                                    "class": "mt-0 block w-1/2 border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-13"
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
            "sectionId": "imageSection1",
            "markup": [
              {
                "description": "dragItem2 dialog",
                "type": "dialog",
                "key": "imageSection1Dialog",
                "toggleDialog": true,
                "dialogKey": "imageSection1Dialog",
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
                                "dialogKey": "imageSection1Dialog"
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
                "description": "dragItem2",
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
                                "description": "dd buttons",
                                "type": "container",
                                "containerType": "div",
                                "class": "flex",
                                "children": [
                                  {
                                    "description": "dialog button",
                                    "type": "container",
                                    "toggleDialog": true,
                                    "dialogKey": "imageSection1Dialog",
                                    "class": "",
                                    "children": [
                                      {
                                        "description": "element icon",
                                        "type": "element",
                                        "elementType": "staticHtmlTag",
                                        "tag": "div",
                                        "text": "open_in_new",
                                        "class": "material-symbols-outlined text-gray-400 hover:text-black text w-1/8 p-3 cursor-pointer"
                                      }
                                    ]
                                  },
                                  {
                                    "description": "delete button",
                                    "type": "container",
                                    "class": "cursor-pointer",
                                    "children": [
                                      {
                                        "type": "element",
                                        "elementType": "navEvent",
                                        "eventType": "dragSectionPaneDeleteItem",
                                        "tag": "span",
                                        "text": "delete",
                                        "class": "material-symbols-outlined text-gray-400 hover:text-black text w-1/8 p-3 cursor-pointer"
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "description": "input headline",
                            "type": "container",
                            "containerType": "div",
                            "class": "w-full w-1/2 pt-4",
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
                                    "class": "mt-0 block w-1/2 border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-13"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "description": "input padding-top",
                            "type": "container",
                            "containerType": "div",
                            "class": "w-full w-1/2 pt-8",
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
                                    "class": "mt-0 block w-1/2 border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-13"
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
        "pageBuilderID": "pageBuilder2",
        "dragItems": [
          {
            "sectionId": "textSection2",
            "markup": [
              {
                "description": "section1 dialog",
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
                                "description": "prime select input container",
                                "type": "container",
                                "containerType": "div",
                                "class": "pt-4 p-input-filled p-inputtext-sm text-left",
                                "children": [
                                  {
                                    "description": "text",
                                    "type": "element",
                                    "elementType": "staticHtmlTag",
                                    "tag": "div",
                                    "text": "Werkstoff",
                                    "class": "text-gray-800 text-sm font-bold pb-4"
                                  },
                                  {
                                    "description": "select input",
                                    "type": "container",
                                    "containerType": "div",
                                    "class": "flex",
                                    "children": [
                                      {
                                        "type": "element",
                                        "elementType": "primeVueSelectInput",
                                        "key": "substrate",
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
                                    "description": "prime radio button container",
                                    "type": "container",
                                    "containerType": "div",
                                    "class": "pt-12 p-input-filled p-inputtext-sm w-full",
                                    "children": [
                                      {
                                        "description": "text",
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
                                "containerType": "div",
                                "class": "flex",
                                "children": [
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
                                  },
                                  {
                                    "type": "element",
                                    "elementType": "navEvent",
                                    "eventType": "dragSectionPaneDeleteItem",
                                    "text": "delete",
                                    "tag": "span",
                                    "class": "material-symbols-outlined text-primary text-3xl w-1/8 cursor-pointer"
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
                                    "elementType": "primeVueTextInput",
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
                                    "elementType": "primeVueTextInput",
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
              }]
          }
        ]
      }
    ],
    "appMarkup": [
      {
        "appID": "a777444blog",
        "subURL": "home",
        "globalCollection": "a777444blog",
        "markup": [
          {
            "description": "cddp Dialog",
            "type": "dialog",
            "key": "cddpDialogAppSys01",
            "toggleDialog": true,
            "dialogKey": "cddpDialogAppSys01",
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
                                "text": "CDDP Dialog",
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
                                "class": "material-icons align-middle pr-2 text-right text-white cursor-pointer",
                                "toggleDialog": true,
                                "dialogKey": "cddpDialogAppSys01"
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
                                "text": "Update your billing information. Please note that updating your location could affect your tax rates.",
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
                                    "type": "element",
                                    "elementType": "cddpEvent",
                                    "eventType": "create",
                                    "text": "CREATE",
                                    "tag": "div",
                                    "class": "block text-red-500 bg-transparent border border-solid border-red-500 hover:bg-primary hover:text-white active:bg-red-600 text-center font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 cursor-pointer"
                                  },
                                  {
                                    "type": "element",
                                    "elementType": "cddpEvent",
                                    "eventType": "duplicate",
                                    "tag": "div",
                                    "text": "DUPLICATE",
                                    "class": "block text-red-500 bg-transparent border border-solid border-red-500 hover:bg-primary hover:text-white active:bg-red-600 text-center font-bold uppercase text-sm mt-6 px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 cursor-pointer"
                                  },
                                  {
                                    "type": "element",
                                    "elementType": "cddpEvent",
                                    "eventType": "delete",
                                    "tag": "div",
                                    "text": "DELETE",
                                    "class": "block text-red-500 bg-transparent border border-solid border-red-500 hover:bg-primary hover:text-white active:bg-red-600 text-center font-bold uppercase text-sm mt-6 px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 cursor-pointer"
                                  },
                                  {
                                    "type": "element",
                                    "elementType": "cddpEvent",
                                    "eventType": "protect",
                                    "tag": "div",
                                    "text": "PROTECT",
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
            ]
          },
          {
            "description": "card1 dialog project ",
            "type": "dialog",
            "key": "projectCard1",
            "toggleDialog": true,
            "dialogKey": "projectCard1",
            "class": "inline-block align-bottom bg-white rounded-sm text-left shadow-xl transform transition-all sm:align-middle w-1/2 h-[70vH]",
            "children": [
              {
                "description": "dialog card",
                "type": "container",
                "class": "bg-white",
                "children": [
                  {
                    "description": "dialog card header",
                    "type": "container",
                    "class": "flex justify-between pl-6 pr-4 py-2 border-b h-10 text-left bg-cardHeaderBg",
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
                            "text": "Projektbeschreibung",
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
                            "dialogKey": "projectCard1"
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
                        "class": "relative px-6 my-2 w-full",
                        "children": [
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
                                "text": "Projektdaten",
                                "class": "text-gray-800 text-12"
                              }
                            ]
                          },
                          {
                            "description": "div row flex",
                            "type": "container",
                            "class": "flex justify-left text-gray-700 leading-3",
                            "children": [
                              {
                                "description": "prime vue text input",
                                "type": "container",
                                "containerType": "div",
                                "class": "p-input-filled p-inputtext-sm w-1/3 pr-0 sm:pr-4",
                                "children": [
                                  {
                                    "type": "element",
                                    "elementType": "staticHtmlTag",
                                    "tag": "div",
                                    "text": "#",
                                    "class": "text-gray-800 text-12"
                                  },
                                  {
                                    "type": "element",
                                    "elementType": "primeVueTextInput",
                                    "key": "generalProjectNumber",
                                    "class": "w-full",
                                    "parameters": {
                                      "placeholder": "#",
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
                                "class": "p-input-filled p-inputtext-sm w-1/3 pr-0 sm:pr-4",
                                "children": [
                                  {
                                    "type": "element",
                                    "elementType": "staticHtmlTag",
                                    "tag": "div",
                                    "text": "sub",
                                    "class": "text-gray-800 text-12"
                                  },
                                  {
                                    "type": "element",
                                    "elementType": "primeVueTextInput",
                                    "key": "generalProjectNumberSub",
                                    "class": "w-full",
                                    "parameters": {
                                      "placeholder": "#",
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
                                "class": "p-input-filled p-inputtext-sm w-1/3 pr-0 sm:pr-4",
                                "children": [
                                  {
                                    "type": "element",
                                    "elementType": "staticHtmlTag",
                                    "tag": "div",
                                    "text": "date",
                                    "class": "text-gray-800 text-12"
                                  },
                                  {
                                    "type": "element",
                                    "elementType": "primeVueTextInput",
                                    "key": "date",
                                    "class": "w-full",
                                    "parameters": {
                                      "placeholder": "date",
                                      "disabled": false,
                                      "size": "sm"
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "description": "IF -- div row label",
                            "conditionArray": [
                              {
                                "cd": "INI, k, generalProjectCategory.id, equal, s, VA"
                              }
                            ],
                            "type": "container",
                            "class": "mt-8",
                            "children": [
                              {
                                "description": "label Projektdaten",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "div",
                                "text": "Projekttyp VA",
                                "class": "block font-medium text-sm text-green-400"
                              }
                            ]
                          },
                          {
                            "description": "ELSEIF -- div row label",
                            "conditionArray": [
                              {
                                "cd": "INI, k, generalProjectCategory.id, equal, s, FM"
                              }
                            ],
                            "type": "container",
                            "class": "mt-8",
                            "children": [
                              {
                                "description": "label Projektdaten",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "div",
                                "text": "Projekttyp FM",
                                "class": "block font-medium text-sm text-red-400"
                              }
                            ]
                          },
                          {
                            "description": "prime vue select input",
                            "type": "container",
                            "containerType": "div",
                            "class": "pt-8 p-input-filled p-inputtext-sm w-full",
                            "children": [
                              {
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "div",
                                "text": "Projekttyp",
                                "class": "text-gray-800 text-12"
                              },
                              {
                                "type": "element",
                                "elementType": "primeVueSelectInput",
                                "key": "generalProjectCategory",
                                "class": "pl-0 pr-2 w-4/12 ",
                                "parameters": {
                                  "optionLabel": "name",
                                  "options": [
                                    {
                                      "id": "VA",
                                      "name": "VA - Versuchsauftrag"
                                    },
                                    {
                                      "id": "FM",
                                      "name": "FM - Farbmuster"
                                    },
                                    {
                                      "id": "BE",
                                      "name": "BE - Beschichtungsempfehlung"
                                    }
                                  ],
                                  "placeholder": "Wählen Sie ihren Projekttyp",
                                  "disabled": false
                                }
                              }
                            ]
                          },
                          {
                            "description": "prime vue text input",
                            "type": "container",
                            "containerType": "div",
                            "class": "pt-8 p-input-filled p-inputtext-sm w-full flex",
                            "children": [
                              {
                                "description": "prime vue text input",
                                "type": "container",
                                "containerType": "div",
                                "class": "w-8/12",
                                "children": [
                                  {
                                    "type": "element",
                                    "elementType": "staticHtmlTag",
                                    "tag": "div",
                                    "text": "Projektfokus",
                                    "class": "text-gray-800 text-12"
                                  },
                                  {
                                    "type": "element",
                                    "elementType": "primeVueTextInput",
                                    "key": "teaserTitle",
                                    "tag": "span",
                                    "class": "w-full",
                                    "parameters": {
                                      "placeholder": "Projektfokus",
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
                                "class": "flex items-end",
                                "children": [
                                  {
                                    "type": "element",
                                    "elementType": "staticHtmlTag",
                                    "tag": "div",
                                    "text": "80",
                                    "class": "item text-gray-800 text-12 pl-2"
                                  },
                                  {
                                    "type": "element",
                                    "elementType": "staticHtmlTag",
                                    "tag": "div",
                                    "text": "Zeichen max.",
                                    "class": "text-gray-800 text-12 pl-1"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "description": "prime vue text area",
                            "type": "container",
                            "containerType": "div",
                            "class": "pt-8 p-input-filled p-inputtext-sm w-full",
                            "children": [
                              {
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "div",
                                "text": "Projektbeschreibung",
                                "class": "text-gray-800 text-12"
                              },
                              {
                                "type": "element",
                                "elementType": "primeVueTextArea",
                                "key": "generalProjectDescription",
                                "rows": "6",
                                "cols": "",
                                "class": "w-full",
                                "parameters": {
                                  "placeholder": "Projektbeschreibung",
                                  "disabled": false,
                                  "autoResize": false,
                                  "size": "sm"
                                }
                              }
                            ]
                          },
                          {
                            "description": "prime vue text area",
                            "type": "container",
                            "containerType": "div",
                            "class": "pt-8 p-input-filled p-inputtext-sm w-full",
                            "children": [
                              {
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "div",
                                "text": "Projektperformance",
                                "class": "text-gray-800 text-12"
                              },
                              {
                                "type": "element",
                                "elementType": "primeVueTextArea",
                                "key": "generalProjectPerformance",
                                "rows": "6",
                                "cols": "",
                                "class": "w-full",
                                "parameters": {
                                  "placeholder": "Projektperformance",
                                  "disabled": false,
                                  "autoResize": false,
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

          {
            "description": "content head",
            "type": "container",
            "class": "bg-gradient-to-b from-[#fefeff] to-[#e9eef2] py-3 px-8 w-full",
            "children": [
              {
                "description": "text container",
                "type": "container",
                "class": "",
                "children": [
                  {
                    "description": "flex div row",
                    "type": "container",
                    "class": "flex justify-start w-full",
                    "children": [
                      {
                        "description": "content header col 1",
                        "type": "container",
                        "class": "w-[30%] flex flex-col",
                        "children": [
                          {
                            "description": "content header col 1",
                            "type": "container",
                            "class": "",
                            "children": [
                              {
                                "description": "FU headline",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "label",
                                "assignedKey": "jobId",
                                "class": "text-2xl uppercase font-bold text-primary py-2"
                              },
                              {
                                "description": "content header col 1",
                                "type": "container",
                                "class": "w-full",
                                "children": [
                                  {
                                    "description": "element project number",
                                    "type": "element",
                                    "elementType": "staticHtmlTag",
                                    "tag": "div",
                                    "assignedKey": "title",
                                    "class": "text-xl font-bold"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "description": "element headings",
                            "type": "element",
                            "elementType": "staticHtmlTag",
                            "tag": "label",
                            "assignedKey": "company",
                            "class": "text-xl font-bold"
                          }
                        ]
                      },
                      {
                        "description": "content header col 2",
                        "type": "container",
                        "class": "w-[55%]",
                        "children": [
                          {
                            "type": "element",
                            "elementType": "staticHtmlTag",
                            "tag": "img",
                            "src": "/static/svg/chart.svg",
                            "class": "w-full"
                          }
                        ]
                      },
                      {
                        "description": "content header col 3",
                        "type": "container",
                        "class": "w-[15%] flex items-center",
                        "children": [
                          {
                            "type": "element",
                            "elementType": "staticHtmlTag",
                            "tag": "img",
                            "src": "/static/img/dottedcirc02.png",
                            "class": "w-[70%] ml-8"
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
            "description": "navbar",
            "type": "container",
            "class": "",
            "children": [
              {
                "description": "navbar container",
                "type": "container",
                "class": "w-full flex justify-between w-full bg-[#34495e] h-12 px-8",
                "children": [
                  {
                    "description": "navbar left",
                    "type": "container",
                    "class": "hidden xl:flex w-full  items-center text-white",
                    "children": [
                      {
                        "type": "element",
                        "elementType": "staticHtmlTag",
                        "tag": "div",
                        "text": "666777 BLOG",
                        "class": "font-bold text-sm"
                      },
                      {
                        "type": "element",
                        "elementType": "staticHtmlTag",
                        "tag": "div",
                        "text": "settings",
                        "class": "border border-1 border-[#b6c2cd] hover:border-white text-11 text-[#b6c2cd] hover:text-white rounded-xl px-2 py-[0.5px] ml-6 cursor-pointer"
                      }
                    ]
                  },
                  {
                    "description": "navbar right",
                    "type": "container",
                    "class": "flex xl:justify-end w-full space-x-2 text-[#b6c2cd] ",
                    "children": [
                      {
                        "description": "tabs container",
                        "type": "container",
                        "class": "flex space-x-1 w-auto",
                        "children": [
                          {
                            "description": "tab 1",
                            "type": "container",
                            "tabID": "tab001",
                            "tabGroupID": "tabGroup001",
                            "class": "flex justify-center items-center cursor-pointer px-6 hover:bg-white hover:text-black hover:mt-1",
                            "activeClass": "bg-white mt-1 text-black",
                            "children": [
                              {
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "div",
                                "text": "Blog",
                                "class": "font-bold text-sm"
                              }
                            ]
                          },
                          {
                            "description": "tab 5",
                            "type": "container",
                            "tabID": "tab002",
                            "tabGroupID": "tabGroup001",
                            "class": "flex justify-center items-center cursor-pointer px-6 hover:bg-white hover:text-black hover:mt-1",
                            "activeClass": "bg-white mt-1 text-black",
                            "children": [
                              {
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "div",
                                "text": "Page Builder",
                                "class": "font-bold text-sm"
                              }
                            ]
                          }
                        ]
                      },
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
                                    "type": "element",
                                    "elementType": "navEvent",
                                    "eventType": "dropdownPanelTrigger",
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
                                    "type": "element",
                                    "elementType": "dropdownPanel",
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
                                            "type": "container",
                                            "toggleDialog": true,
                                            "dialogKey": "cddpDialogAppSys01",
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
                                          },
                                          {
                                            "description": "menu item 2",
                                            "type": "container",
                                            "containerType": "div",
                                            "class": "flex justify-start items-center hover:bg-amber-300 text-black cursor-pointer",
                                            "children": [
                                              {
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "div",
                                                "text": "content_copy",
                                                "class": "material-symbols-outlined text-xl w-6 pl-2"
                                              },
                                              {
                                                "type": "element",
                                                "elementType": "cddpEvent",
                                                "eventType": "duplicate",
                                                "tag": "div",
                                                "text": "duplicate",
                                                "class": "block px-4 py-2 text-13"
                                              }
                                            ]
                                          },
                                          {
                                            "description": "menu item 3",
                                            "type": "container",
                                            "containerType": "div",
                                            "class": "flex justify-start items-center hover:bg-amber-300 text-black border-b border-gray-300 cursor-pointer",
                                            "children": [
                                              {
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "div",
                                                "text": "verified_user",
                                                "class": "material-symbols-outlined text-xl w-6 pl-2"
                                              },
                                              {
                                                "type": "element",
                                                "elementType": "cddpEvent",
                                                "eventType": "protect",
                                                "tag": "div",
                                                "text": "protect",
                                                "class": "block px-4 py-2 text-13"
                                              }
                                            ]
                                          },
                                          {
                                            "description": "menu item 4",
                                            "type": "container",
                                            "containerType": "div",
                                            "class": "flex justify-start items-center hover:bg-amber-300 text-black cursor-pointer pt-2",
                                            "children": [
                                              {
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "div",
                                                "text": "delete",
                                                "class": "material-symbols-outlined text-xl w-6 pl-2"
                                              },
                                              {
                                                "type": "element",
                                                "elementType": "cddpEvent",
                                                "eventType": "delete",
                                                "tag": "div",
                                                "text": "delete",
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
            "description": "cards project  tab 1",
            "type": "container",
            "tabID": "tab001",
            "tabGroupID": "tabGroup001",
            "tabContent": true,
            "class": "px-6 bg-white w-full h-screen",
            "children": [
              {
                "description": "CARD CONTENT row 1",
                "type": "container",
                "class": "flex flex-col md:flex-row md:space-x-4",
                "children": [
                  {
                    "description": "card 1 container",
                    "type": "container",
                    "class": "w-full md:w-1/2 mt-6",
                    "children": [
                      {
                        "description": "card 1 header",
                        "type": "container",
                        "class": "bg-cardHeaderBg h-10 pl-3 mt-6 cursor-pointer",
                        "children": [
                          {
                            "description": "card1 above card headline",
                            "type": "container",
                            "toggleDialog": true,
                            "dialogKey": "projectCard1",
                            "class": "flex justify-start items-center text-cardHeaderTitle py-2.5",
                            "children": [
                              {
                                "description": "FU headline",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "div",
                                "text": "menu",
                                "class": "material-symbols-outlined font-bold text-sm pr-2"
                              },
                              {
                                "description": "FU headline",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "div",
                                "text": "BLOG",
                                "class": "text-sm font-bold"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "description": "card 1 content",
                        "type": "container",
                        "class": "bg-white flex-col pl-3 border",
                        "children": [
                          {
                            "description": "card1 row 1",
                            "type": "container",
                            "class": "text-cardHeaderTitle flex w-full mt-4 px-4 pb-0",
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
                                "text": "",
                                "assignedKey": "teaserTitle",
                                "class": "text text-black font-bold  w-5/6"
                              },
                              {
                                "description": "element date",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "div",
                                "text": "",
                                "assignedKey": "date",
                                "class": "text-12 text-right text-cardHeaderTitle  w-1/6 pr-2"
                              }
                            ]
                          },
                          {
                            "description": "card1 row 1",
                            "type": "container",
                            "class": "flex justify-start w-full mt-0 px-4 pb-4",
                            "children": [
                              {
                                "description": "card4 row 2",
                                "type": "container",
                                "class": "text-cardHeaderTitle",
                                "children": [
                                  {
                                    "description": "element project number",
                                    "type": "element",
                                    "elementType": "staticHtmlTag",
                                    "tag": "div",
                                    "text": "URL de: ",
                                    "class": "text text-black w-full pl-8"
                                  }
                                ]
                              },
                              {
                                "description": "card4 row 2",
                                "type": "container",
                                "class": "text-cardHeaderTitle",
                                "children": [
                                  {
                                    "description": "element project number",
                                    "type": "element",
                                    "elementType": "staticHtmlTag",
                                    "tag": "div",
                                    "assignedKey": "urlDe",
                                    "class": "text text-black w-5/6 pl-8"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "description": "card4 row 3 divider",
                            "type": "container",
                            "class": "text-cardHeaderTitle flex mt-0 pb-4",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "div",
                                "text": " ",
                                "class": "w-full border border-gray-100 ml-4 mr-8"
                              }
                            ]
                          },
                          {
                            "description": "card4 row 3",
                            "type": "container",
                            "class": "text flex w-full mt-0 px-4",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "div",
                                "text": "Datum",
                                "class": "text-12 w-full font-bold pl-8"
                              }
                            ]
                          },
                          {
                            "description": "card4 row 4",
                            "type": "container",
                            "class": "text-cardHeaderTitle flex w-full mt-0 px-4 pb-4",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "div",
                                "text": "",
                                "assignedKey": "date",
                                "class": "text-sm text-black w-5/6 pl-8"
                              }
                            ]
                          },
                          {
                            "description": "card1 row 5",
                            "type": "container",
                            "class": "text flex w-full mt-0 px-4",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "div",
                                "text": "URL de",
                                "class": "text-12 w-full font-bold pl-8"
                              }
                            ]
                          },
                          {
                            "description": "card1 row 6",
                            "type": "container",
                            "class": "text-cardHeaderTitle flex w-full mt-0 px-4 pb-24",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "div",
                                "text": "",
                                "assignedKey": "urlDe",
                                "class": "text-12 text-black w-5/6 pl-8"
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
            "description": "cards protocol tab 2",
            "type": "container",
            "tabID": "tab002",
            "tabGroupID": "tabGroup001",
            "tabContent": true,
            "class": "px-6 py-4 bg-white w-full h-screen",
            "children": [
              {
                "description": "CARD CONTENT row 1",
                "type": "container",
                "class": "flex flex-col md:flex-row md:space-x-4",
                "children": [
                  {
                    "description": "card 1 container",
                    "type": "container",
                    "class": "w-full mt-6",
                    "children": [
                      {
                        "description": "pageBuilder container",
                        "type": "container",
                        "class": "min-h-screen flex flex-row",
                        "style": "",
                        "children": [


                          {
                            "description": "sectionPane",
                            "type": "element",
                            "elementType": "dragSectionPane",
                            "backendJSONKey": "webpage.json",
                            "key": "webpage.data",
                            "tag": "div",
                            "class": "w-[80%] h-screen bg-[#f1f4f8]",
                            "children": []
                          },


                          {
                            "description": "dragPane",
                            "type": "container",
                            "containerType": "div",
                            "class": "w-[20%] h-screen bg-gray-300 px-2 border-l-8 border-white",
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
                                    "tabGroupID": "pageBuilderJob1",
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
                                    "tabGroupID": "pageBuilderJob1",
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
                                    "tabGroupID": "pageBuilderJob1",
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
                                    "tabGroupID": "pageBuilderJob1",
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
                                  }
                                ]
                              },
                              {
                                "description": "tab 1 content",
                                "type": "container",
                                "tabID": "tab001",
                                "tabGroupID": "pageBuilderJob1",
                                "tabContent": true,
                                "class": "",
                                "children": [
                                  {
                                    "description": "headline element",
                                    "type": "element",
                                    "elementType": "staticHtmlTag",
                                    "tag": "div",
                                    "text": "text drag items",
                                    "class": "text-sm text-gray-700 pt-4"
                                  },
                                  {
                                    "description": "drag items grid container",
                                    "type": "element",
                                    "elementType": "dragItems",
                                    "pageBuilderID": "jobOffer",
                                    "tag": "div",
                                    "class": "grid grid-cols-2 gap-2 py-2",
                                    "children": [
                                      {
                                        "description": "dragItem1",
                                        "sectionId": "textSection1",
                                        "type": "container",
                                        "containerType": "div",
                                        "class": "cursor-pointer bg-white-400 h-full",
                                        "children": [
                                          {
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "tag": "img",
                                            "src": "/static/img/pageBuilder/demo/section1-thumb02.jpg",
                                            "class": "hover:opacity-75"
                                          }
                                        ]
                                      },
                                      {
                                        "description": "dragItem2",
                                        "sectionId": "imageSection1",
                                        "type": "container",
                                        "containerType": "div",
                                        "class": "cursor-pointer bg-white-400 h-full",
                                        "children": [
                                          {
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "tag": "img",
                                            "src": "/static/img/pageBuilder/demo/section2-thumb02.jpg",
                                            "class": "hover:opacity-75"
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "description": "tab 2 content",
                                "type": "container",
                                "tabID": "tab002",
                                "tabGroupID": "pageBuilderJob1",
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
                                    "pageBuilderID": "pageBuilder2",
                                    "tag": "div",
                                    "class": "grid grid-cols-2 gap-2 py-2",
                                    "children": [
                                      {
                                        "sectionId": "textSection2",
                                        "description": "dragItem1",
                                        "type": "container",
                                        "containerType": "div",
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
                                        "sectionId": "imageSection2",
                                        "description": "dragItem2",
                                        "type": "container",
                                        "containerType": "div",
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
  })

  return { jsonLocal: jsonStructure.value }
}
