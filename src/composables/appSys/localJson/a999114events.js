import { ref } from 'vue'

export function useJsonLocal() {
  const jsonStructure = ref({
    "_id": {
      "$oid": "62c1e0d7833c9548e050c7d9"
    },
    "type": "appTemplate",
    "folderNavigationLink": "a999114events",
    "showHideSidebar": true,
    "showHideTopbar": true,
    "URL": "a999114events",
    "functions": [
      {
        "Id": "createExhibitor",
        "type": "write",
        "expressionId": "",
        "writeArray": [
          {
            "key": "eventType",
            "value": "parentFolderListSelection:a999114events.eventType"
          },
          {
            "key": "eventId",
            "value": "parentFolderListSelection:a999114events.eventId"
          },
          {
            "key": "eventName",
            "value": "parentFolderListSelection:a999114events.eventName"
          },
          {
            "key": "dataType",
            "value": "exhibitor"
          },
          {
            "key": "createdByFamilyName",
            "value": "user:family_name"
          },
          {
            "key": "createdByGivenName",
            "value": "user:given_name"
          },
          {
            "key": "createdByIdentId",
            "value": "user:identID"
          }
        ]
      },
      {
        "Id": "createReport",
        "type": "write",
        "expressionId": "",
        "writeArray": [
          {
            "key": "eventType",
            "value": "parentFolderListSelection:a999114events.eventType"
          },
          {
            "key": "eventId",
            "value": "parentFolderListSelection:a999114events.eventId"
          },
          {
            "key": "eventName",
            "value": "parentFolderListSelection:a999114events.eventName"
          },
          {
            "key": "dataType",
            "value": "report"
          },
          {
            "key": "createdByName",
            "value": "user:family_name"
          }
        ]
      }
    ],
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
                                "description": "select input container",
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
                                        "type": "radio button",
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
                                        "type": "navEvent",
                                        "elementType": "staticHtmlTag",
                                        "eventType": "dragSectionPaneDele teItem",
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
                                        "type": "navEvent",
                                        "eventType": "dragSectionPaneDeleteItem",
                                        "elementType": "staticHtmlTag",
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
                                        "type": "radio button",
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
                                    "type": "navEvent",
                                    "eventType": "dragSectionPaneDeleteItem",
                                    "elementType": "staticHtmlTag",
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
              }
            ]
          }
        ]
      }
    ],
    "appMarkup": [
      {
        "description": "a999114events",
        "appNavigationLink": "a999114events",
        "globalCollection": "a999114events",
        "subURL": "home",
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
                                    "elementType": "textInput",
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
                                    "elementType": "textInput",
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
                                    "elementType": "textInput",
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
                                    "elementType": "textInput",
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
                                "assignedKey": "eventId",
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
                        "text": "a999114events",
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
                                "text": "Job Offer",
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
                                "text": "Messeprojekt",
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
                                "assignedKey": "eventName",
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
                                    "text": "Event Location: ",
                                    "class": "text text-black w-5/6 pl-8"
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
                                    "assignedKey": "eventLocation",
                                    "class": "text text-black w-5/6 pl-8"
                                  }
                                ]
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
                                    "text": "Datum: ",
                                    "class": "text text-black w-5/6 pl-8"
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
                                        "assignedKey": "startDate",
                                        "class": "text text-black w-5/6 pl-8"
                                      }
                                    ]
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
                            "backendJSONKey": "webpage.localJson",
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
      },
      {
        "description": "a999114exhibitor",
        "appNavigationLink": "a999114events",
        "subURL": "exhibitor",
        "category": "table",
        "globalCollection": "a999114exhibitor",
        "markup": [
          {
            "description": "cddp create Dialog",
            "type": "dialog",
            "key": "tableCreateDialog",
            "saveType": "update",
            "class": "inline-block align-bottom bg-white rounded-lg text-left shadow-xl transform transition-all sm:align-middle w-1/2 h-[70vH]",
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
                                        "class": "flex space-x-2 w-auto",
                                        "children": [
                                          {
                                            "description": "tab 1 Exhibitor button",
                                            "type": "container",
                                            "tabID": "tab001",
                                            "tabGroupID": "tabGroup001",
                                            "class": "flex justify-center items-center cursor-pointer px-6 bg-[#3b4650] hover:bg-gray-400 hover:text-white text-12 font-bold leading-[24px]",
                                            "activeClass": "text-white bg-[#9ca3af] h-full w-full",
                                            "children": [
                                              {
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "div",
                                                "text": "Exhibitor",
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
                                    "class": "flex items-center h-full",
                                    "children": [
                                      {
                                        "description": "save/close container",
                                        "type": "container",
                                        "class": "flex items-center space-x-2 h-full text-[#b6c2cd] hover:text-white mr-4 px-2 font-bold text-11",
                                        "children": [
                                          {
                                            "description": "save button",
                                            "type": "cddpEvent",
                                            "eventType": "save",
                                            "class": "flex items-center h-full bg-[#3b4650] hover:bg-gray-400  px-3 cursor-pointer",
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
                                            "type": "cddpEvent",
                                            "eventType": "save",
                                            "toggleDialog": true,
                                            "dialogKey": "tableCreateDialog",
                                            "class": "flex items-center h-full bg-[#3b4650] hover:bg-gray-400 px-3 cursor-pointer",
                                            "children": [
                                              {
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "div",
                                                "text": "save + close",
                                                "class": "uppercase"
                                              }
                                            ]
                                          },
                                          {
                                            "description": "cancel button",
                                            "type": "cddpEvent",
                                            "eventType": "cancel",
                                            "toggleDialog": true,
                                            "dialogKey": "tableCreateDialog",
                                            "class": "flex items-center w-auto h-full bg-[#3b4650] hover:bg-gray-400 px-3 cursor-pointer",
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
                                      },
                                      {
                                        "description": "dialog card header close",
                                        "type": "cddpEvent",
                                        "eventType": "cancel",
                                        "elementType": "staticHtmlTag",
                                        "tag": "div",
                                        "text": "close",
                                        "class": "material-symbols-outlined text-right  rounded-full text-cardHeaderTitle border border-cardHeaderBg border-2 hover:border-white cursor-pointer",
                                        "toggleDialog": true,
                                        "dialogKey": "tableCreateDialog"
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "description": "tab 1 Exhibitor",
                                "type": "container",
                                "tabID": "tab001",
                                "tabGroupID": "tabGroup001",
                                "tabContent": true,
                                "class": "sm:px-6 bg-white w-full pt-4",
                                "children": [
                                  {
                                    "description": "CARD 1",
                                    "type": "container",
                                    "class": "flex flex-col md:flex-row md:space-x-4 w-full",
                                    "children": [
                                      {
                                        "description": "card 1 container",
                                        "type": "container",
                                        "class": "w-full",
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
                                                    "text": "Exhibitor",
                                                    "class": "text-sm font-bold"
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            "description": "card 1 content",
                                            "type": "container",
                                            "class": "bg-white dark:bg-gray-800 flex-col pl-3 border text-left",
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
                                                    "class": "material-symbols-outlined text-primary align-middle w-1/8"
                                                  },
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "text": "",
                                                    "assignedKey": "exhibitor",
                                                    "class": "text text-black dark:text-white font-bold pl-2"
                                                  }
                                                ]
                                              },
                                              {
                                                "description": "card1 row 1",
                                                "type": "container",
                                                "class": "flex w-full",
                                                "children": [
                                                  {
                                                    "description": "card1 row 1",
                                                    "type": "container",
                                                    "class": "flex w-full mt-0 px-4 pb-4",
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
                                                            "text": "Messe: ",
                                                            "class": "text text-black dark:text-white w-full pl-8"
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
                                                            "assignedKey": "eventName",
                                                            "class": "text text-black dark:text-white w-full pl-8"
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              },
                                              {
                                                "description": "card1 row 1",
                                                "type": "container",
                                                "class": "flex w-full",
                                                "children": [
                                                  {
                                                    "description": "card1 row 1",
                                                    "type": "container",
                                                    "class": "flex w-full mt-0 px-4 pb-4",
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
                                                            "text": "Halle: ",
                                                            "class": "text text-black dark:text-white w-full pl-8"
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
                                                            "assignedKey": "hall",
                                                            "class": "text text-black dark:text-white w-full pl-8"
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  },
                                                  {
                                                    "description": "card1 row 1",
                                                    "type": "container",
                                                    "class": "flex w-full mt-0 px-4 pb-4",
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
                                                            "text": "Standnummer: ",
                                                            "class": "text text-black dark:text-white w-full pl-8"
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
                                                            "assignedKey": "standNo",
                                                            "class": "text text-black dark:text-white w-full pl-8"
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              },
                                              {
                                                "description": "divider",
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
                                                "description": "Exhibitor",
                                                "type": "container",
                                                "class": "w-full",
                                                "children": [
                                                  {
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "div",
                                                    "text": "Exhibitor",
                                                    "class": "block text-11 font-normal text-gray-700"
                                                  },
                                                  {
                                                    "type": "element",
                                                    "elementType": "textInput",
                                                    "key": "exhibitor",
                                                    "class": "mt-0 block w-full border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-13"
                                                  }
                                                ]
                                              },
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
                                    "type": "cddpEvent",
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
                                        "activeValue": true,
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
                                    "type": "cddpEvent",
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
            "description": "import data Dialog",
            "type": "dialog",
            "key": "importDataDialog01",
            "toggleDialog": true,
            "saveType": "update",
            "dialogKey": "importDataDialog01",
            "class": "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle w-1/2 h-[800px]",
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
                        "class": "flex justify-between px-4 py-2 bg-gray-400 text-left sm:px-6",
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
                                "text": "Import Data dialog",
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
                            "class": "mt-6 grid grid-cols-12 gap-6",
                            "children": [
                              {
                                "type": "container",
                                "class": "col-span-3",
                                "children": [
                                  {
                                    "type": "cddpEvent",
                                    "eventType": "importXlsx",
                                    "collection": "a999112anlageNasslack",
                                    "elementType": "fileInput",
                                    // "text": "import xlsx",
                                    // "tag": "div",
                                    // needs file input or and drag-area
                                    "class": "",
                                    "importRules": [
                                      {
                                        "id": 1,
                                        "sourceFieldName": "Athlete",
                                        "targetKeyName": "athlete",
                                        "dataType": "string"
                                      },
                                      {
                                        "id": 2,
                                        "sourceFieldName": "Country",
                                        "targetKeyName": "country",
                                        "dataType": "string",
                                        "optimize": "space"
                                      },
                                      {
                                        "id": 3,
                                        "sourceFieldName": "Age",
                                        "targetKeyName": "age",
                                        "dataType": "number"
                                      },
                                      {
                                        "id": 4,
                                        "sourceFieldName": "Sport",
                                        "targetKeyName": "sports",
                                        "dataType": "string",
                                        "optimize": "space"
                                      },
                                      {
                                        "id": 5,
                                        "sourceFieldName": "Year",
                                        "targetKeyName": "yearOfEvent",
                                        "dataType": "number"
                                      },
                                      {
                                        "id": 6,
                                        "sourceFieldName": "Date",
                                        "targetKeyName": "yearOfEvent",
                                        "convert": "dd.mm.yy",
                                        "dataType": "date"
                                      },
                                      {
                                        "id": 7,
                                        "sourceFieldName": "Time",
                                        "targetKeyName": "time",
                                        "convert": "hh:mm",
                                        "dataType": "time"
                                      },
                                      {
                                        "id": 8,
                                        "sourceFieldName": "Start time",
                                        "targetKeyName": "starttime",
                                        "convert": "dd.mm.yy hh:mm", //18.07.17 03:56
                                        "targetType": "timestamp"
                                      },
                                      {
                                        "id": 9,
                                        "sourceFieldName": "Bronze",
                                        "targetKeyName": "bronzeMedal",
                                        "dataType": "number"
                                      },
                                      {
                                        "id": 10,
                                        "sourceFieldName": "Silver",
                                        "targetKeyName": "silverMedal",
                                        "dataType": "number"
                                      },
                                      {
                                        "id": 11,
                                        "sourceFieldName": "Gold",
                                        "targetKeyName": "goldMedal",
                                        "dataType": "number"
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
            "class": "flex flex-col items-center justify-between bg-[#f5f7f7] w-full",
            "children": [
              {
                "description": "header container",
                "type": "container",
                "class": "flex justify-between w-full  py-1 px-8 w-full",
                "children": [
                  {
                    "description": "content header col 1",
                    "type": "container",
                    "class": "w-full sm:w-[80%] flex flex-col",
                    "children": [
                      {
                        "description": "content header col 1",
                        "type": "container",
                        "class": "",
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
                                "tag": "div",
                                "text": "AUSSTELLER SCREENING",
                                "class": "text-xl sm:text-3xl uppercase font-bold text-primary w-auto"
                              },
                              {
                                "description": "FU headline",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "div",
                                "text": "The Battery Show Europe 2023",
                                "class": "text sm:text-lg uppercase font-bold  text w-auto"
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
            "class": "flex flex-col pattern-dots pattern-gray-300 pattern-bg-gray-200 pattern-size-2 pattern-opacity-100 px-0 sm:px-6 pt-6",
            "children": [
              {
                "description": "ag grid",
                "type": "element",
                "elementType": "agGrid",
                "collection": "a999114exhibitor",
                "query": [
                  {
                    "eventType": "parentFolderListSelection:a999114events.eventType",
                    "eventName": "parentFolderListSelection:a999114events.eventName",
                    "dataType": "exhibitor"
                  },
                  {
                    "_id": 1,
                    "eventType": 1,
                    "eventName": 1,
                    "exhibitor": 1,
                    "shortDescription": 1,
                    "location": 1,
                    "hall": 1,
                    "standNo": 1,
                    "aisle": 1,
                    "aisleNo": 1,
                    "researcher": 1,
                    "previewRating": 1,
                    "previewComment": 1,
                    "screened": 1,
                    "relevanceCheck": 1,
                    "url": 1,
                    "urlDetail": 1,
                    "assignment": 1,
                    "ratingMustVisit": 1,
                    "documentLock": 1
                  }
                ],
                "sourceDateFormats": ["DD.MM.YY hh:mm", "YYYY-MM-DD"],
                "rowGroupPanelShow": "always",
                "columnDefs": [
                  {
                    "headerName": "",
                    "field": "screened",
                    "cellRenderer": "screenedRenderer",
                    "filter": false,
                    "floatingFilter": false,
                    "width": 40
                  },
                  {
                    "headerName": "Web",
                    "field": "url",
                    "cellRenderer": "urlRenderer",
                    "filter": false,
                    "floatingFilter": false,
                    "width": 70
                  },
                  {
                    "headerName": "Detail",
                    "field": "url",
                    "cellRenderer": "urlDetailRenderer",
                    "filter": false,
                    "floatingFilter": false,
                    "width": 75
                  },
                  {
                    "field": "exhibitor",
                    "headerName": "Aussteller",
                    "enableRowGroup": true,
                    "enablePivot": true,
                    "resizable": true,
                    "filter": "agTextColumnFilter",
                    "cellStyle": { 'text-overflow': 'ellipsis', 'white-space': 'nowrap', 'overflow': 'hidden', 'padding-right': 10, 'display': 'block' },
                    "width": 350
                  },
                  {
                    "headerName": "Relevanz",
                    "field": "previewRating",
                    "cellRenderer": "PreviewRatingGeneral",
                    "filter": false,
                    "floatingFilter": false,
                    "enableRowGroup": true,
                    "width": 130
                  },
                  {
                    "headerName": "must",
                    "field": "ratingMustVisit",
                    "cellRenderer": "PreviewRatingMustVisit",
                    "filter": false,
                    "floatingFilter": false,
                    "enableRowGroup": true,
                    "width": 70
                  },
                  {
                    "field": "shortDescription",
                    "headerName": "Kurzbeschreibung",
                    "enableRowGroup": true,
                    "enablePivot": true,
                    "maxWidth": 350,
                    "minWidth": 350,
                    "cellStyle": { 'text-overflow': 'ellipsis', 'white-space': 'nowrap', 'overflow': 'hidden', 'padding-right': 10, 'display': 'block' }
                  },
                  {
                    "field": "researcher",
                    "headerName": "Bearbeiter",
                    "filter": "agTextColumnFilter",
                    "enableRowGroup": true,
                    "enablePivot": true
                  },
                  {
                    "field": "location",
                    "headerName": "Standposition",
                    "filter": "agTextColumnFilter",
                    "enableRowGroup": true,
                    "enablePivot": true
                  },
                  {
                    "field": "previewComment",
                    "headerName": "Kommentar",
                    "enableRowGroup": true,
                    "enablePivot": true,
                    "maxWidth": 450,
                    "minWidth": 450,
                    "cellStyle": { 'text-overflow': 'ellipsis', 'white-space': 'nowrap', 'overflow': 'hidden', 'padding-right': 10, 'display': 'block' }
                  },
                  {
                    "field": "hall",
                    "headerName": "Halle",
                    "enableRowGroup": true,
                    "enablePivot": true
                  },
                  {
                    "field": "standNo",
                    "headerName": "Stand Nr.",
                    "enableRowGroup": true,
                    "enablePivot": true
                  },
                  {
                    "field": "aisle",
                    "headerName": "Gang",
                    "enableRowGroup": true,
                    "enablePivot": true
                  },
                  {
                    "field": "aisleNo",
                    "headerName": "Gang Nr.",
                    "enableRowGroup": true,
                    "enablePivot": true
                  },
                  {
                    "headerName": "Edit",
                    "pinned": "right",
                    "cellRenderer": "ActionsCellRenderer",
                    "filter": false,
                    "floatingFilter": false,
                    "width": 100
                  }
                ],
                "defaultColDef": {
                  "sortable": true,
                  "filter": true,
                  "flex": 0,

                  "floatingFilter": true,
                  "cellStyle": {
                    "height": "100%",
                    "display": "flex ",
                    "justify-content": "start",
                    "align-items": "center ",
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
                    "id": "screenedRenderer",
                    "type": "container",
                    "children": [
                      {
                        "conditionArray": [
                          { "cd": "INI, k, screened.value, unequal, b, true" }
                        ],
                        "type": "element",
                        "elementType": "staticHtmlTag",
                        "tag": "rectColor",
                        "width": 20,
                        "height": 10,
                        "text": "#bbbbbb"
                      },
                      {
                        "conditionArray": [
                          { "cd": "INI, k, screened.value, equal, b,true" },
                          { "cd": "AND, k, relevanceCheck.value, unequal, b,true" }
                        ],
                        "type": "element",
                        "elementType": "staticHtmlTag",
                        "tag": "rectColor",
                        "width": 20,
                        "height": 10,
                        "text": "#58D250"
                      },
                      {
                        "conditionArray": [
                          { "cd": "INI, k, screened.value, equal, b,true" },
                          { "cd": "AND, k, relevanceCheck.value, equal, b,true" }
                        ],
                        "type": "element",
                        "elementType": "staticHtmlTag",
                        "tag": "rectColor",
                        "width": 20,
                        "height": 10,
                        "text": "#771d1d"
                      }
                    ]
                  },
                  {
                    "id": "PreviewRatingMustVisit",
                    "type": "container",
                    "class":"pt-2.5 pl-2",
                    "children": [
                      {
                        "conditionArray": [
                          { "cd": "INI, k, ratingMustVisit.value, equal, b,true" }
                        ],
                        "type": "element",
                        "elementType": "staticHtmlTag",
                        "text": "check_circle",
                        "class": "material-symbols-outlined text-amber-500",
                      }
                    ]
                  },
                  {
                    "id": "urlRenderer",
                    "type": "container",
                    "children": [
                      {
                        "type": "element",
                        "elementType": "staticHtmlTag",
                        "tag": "a",
                        "url": "key:url",
                        "text": "link",
                        "parameters": {
                          "target": "_blank"
                        },
                        "class": "material-symbols-outlined text-xl text-gray-400 hover:text-amber-400 cursor-pointer pt-2 pl-3"
                      }
                    ]
                  },
                  {
                    "id": "urlDetailRenderer",
                    "type": "container",
                    "children": [
                      {
                        "type": "element",
                        "elementType": "staticHtmlTag",
                        "tag": "a",
                        "url": "key:urlDetail",
                        "text": "link",
                        "parameters": {
                          "target": "_blank"
                        },
                        "class": "material-symbols-outlined text-xl text-blue-300 hover:text-amber-400 cursor-pointer pt-2 pl-3"
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
                        "type": "cddpEvent",
                        "eventType": "edit",
                        "elementType": "staticHtmlTag",
                        "tag": "span",
                        "text": "explicit",
                        "class": "material-symbols-outlined text-xl text-primary hover:text-amber-400 cursor-pointer",
                        "toggleDialog": true,
                        "dialogKey": "tableEventEditDialog"
                      }
                    ]
                  },
                  {
                    "id": "PreviewRatingGeneral",
                    "type": "container",
                    "class": "flex whitespace-nowrap space-x-1 text-xl",
                    "children": [

                      {
                        "type": "element",
                        "elementType": "svgRating",
                        "key": "previewRating",
                        "amount": 5,
                        "tag": "svg",
                        "parentClass": "flex space-x-0",
                        "text": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path  d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z\"/></svg>",
                        "class": "fill-gray-400",
                        "activeClass": "fill-amber-400"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "table edit",
            "type": "dialog",
            "key": "tableEventEditDialog",
            "toggleDialog": true,
            "autoSave": true,
            "class": "inline-block align-bottom bg-white h-auto rounded text-left shadow-xl transform transition-all sm:align-middle w-full sm:w-1/2",
            "children": [
              {
                "type": "container",
                "class": "relative my-0  w-full h-screen pattern-dots pattern-gray-300 pattern-bg-gray-200 pattern-size-2 pattern-opacity-100",
                "children": [
                  {
                    "type": "container",
                    "class": "border-0 shadow-lg relative flex flex-col outline-none focus:outline-none w-full h-screen",
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
                                "class": "w-full flex justify-between items-center h-20 sm:h-16 sm:px-8 mb-0 sm:mb-0",
                                "children": [
                                  {
                                    "type": "container",
                                    "class": "w-full h-full flex justify-between items-center",
                                    "children": [
                                      {
                                        "description": "tabs container",
                                        "type": "container",
                                        "class": "flex justify-between items-center space-x-4 w-full h-full",
                                        "children": [
                                          {
                                            "description": "tab 1",
                                            "type": "container",
                                            "tabID": "tab001",
                                            "tabGroupID": "tabGroup001",
                                            "class": "hidden sm:block flex justify-center items-center text-cardHeaderBg  h-10 pt-2  px-4 text-12 font-bold",
                                            "activeClass": "bg-[#e14b1d] text-white",
                                            "children": [
                                              {
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "div",
                                                "text": "Preview",
                                                "class": "uppercase"
                                              }
                                            ]
                                          },
                                          {
                                            "type": "container",
                                            "class": "visible sm:invisible flex space-x-4",
                                            "children": [
                                              {
                                                "type": "container",
                                                "class": "flex flex-col items-center",
                                                "children": [
                                                  {
                                                    "description": "checkbox label",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "div",
                                                    "text": "irrelevant",
                                                    "class": "text-12"
                                                  },
                                                  {
                                                    "description": "checkbox",
                                                    "type": "element",
                                                    "elementType": "checkboxInput",
                                                    "key": "relevanceCheck",
                                                    "activeValue": {
                                                      "value": true
                                                    },
                                                    "inactiveValue": {
                                                      "value": false
                                                    },
                                                    "class": "h-8 w-8 rounded border-gray-300 bg-gray-400 text-red-400 focus:ring-indigo-500 focus:border-transparent focus:ring-0"
                                                  }
                                                ]
                                              },
                                              {
                                                "type": "container",
                                                "class": "flex flex-col items-center",
                                                "children": [
                                                  {
                                                    "description": "checkbox label",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "div",
                                                    "text": "erledigt",
                                                    "class": "text-12 pl-2"
                                                  },
                                                  {
                                                    "description": "checkbox",
                                                    "type": "element",
                                                    "elementType": "checkboxInput",
                                                    "key": "screened",
                                                    "activeValue": {
                                                      "value": true
                                                    },
                                                    "inactiveValue": {
                                                      "value": false
                                                    },
                                                    "class": "ml-1 h-8 w-8 rounded border-gray-300 bg-gray-400 text-green-400 focus:ring-indigo-500"
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
                                        "class": "flex items-center justify-center h-full pr-4",
                                        "children": [
                                          {
                                            "description": "dialog card header close",
                                            "type": "cddpEvent",
                                            "eventType": "cancel",
                                            "elementType": "staticHtmlTag",
                                            "tag": "div",
                                            "text": "close",
                                            "class": "material-symbols-outlined text-right rounded text-cardHeaderBg hover:text-primary border border-cardHeaderBg hover:border-primary border-1 cursor-pointer",
                                            "toggleDialog": true,
                                            "dialogKey": "tableEventEditDialog"
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "description": "tab 1",
                                "type": "container",
                                "tabID": "tab001",
                                "tabGroupID": "tabGroup001",
                                "tabContent": true,
                                "class": "w-full h-screen px-0 sm:px-8 overflow-y-auto overflow-x-hidden pb-32",
                                "children": [
                                  {
                                    "description": "TAB1 CONTENT",
                                    "type": "container",
                                    "class": "grid md:grid-cols-2 lg:grid-cols-1 gap-8 lg:gap-10 ",
                                    "children": [
                                      {
                                        "type": "container",
                                        "class": " w-full flex flex-col bg-white shadow-sm",
                                        "children": [
                                          {
                                            "description": "c1 header",
                                            "type": "container",
                                            "class": "w-full text-left bg-white px-4 break-word",
                                            "children": [
                                              {
                                                "type": "container",
                                                "class": " w-full flex justify-between",
                                                "children": [
                                                  {
                                                    "type": "container",
                                                    "class": "w-auto pt-6 sm:pt-10",
                                                    "children": [
                                                      {
                                                        "type": "element",
                                                        "elementType": "staticHtmlTag",
                                                        "tag": "span",
                                                        "assignedKey": "exhibitor",
                                                        "class": "font-semibold text-xl"
                                                      }
                                                    ]
                                                  },
                                                  {
                                                    "type": "container",
                                                    "class": "hidden sm:flex w-auto space-x-4",
                                                    "children": [
                                                      {
                                                        "type": "container",
                                                        "class": "flex flex-col items-center",
                                                        "children": [
                                                          {
                                                            "description": "checkbox label",
                                                            "type": "element",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "text": "irrelevant",
                                                            "class": "text-12 pl-2 pt-4"
                                                          },
                                                          {
                                                            "description": "checkbox",
                                                            "type": "element",
                                                            "elementType": "checkboxInput",
                                                            "key": "relevanceCheck",
                                                            "activeValue": {
                                                              "value": true
                                                            },
                                                            "inactiveValue": {
                                                              "value": false
                                                            },
                                                            "class": "ml-1 h-8 w-8 rounded border-gray-300 bg-gray-200 text-red-400 focus:ring-indigo-500 mt-1 focus:border-transparent focus:ring-0"
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "type": "container",
                                                        "class": "flex flex-col items-center",
                                                        "children": [
                                                          {
                                                            "description": "checkbox label",
                                                            "type": "element",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "text": "erledigt",
                                                            "class": "text-12 pl-2 pt-4"
                                                          },
                                                          {
                                                            "description": "checkbox",
                                                            "type": "element",
                                                            "elementType": "checkboxInput",
                                                            "key": "screened",
                                                            "activeValue": {
                                                              "value": true
                                                            },
                                                            "inactiveValue": {
                                                              "value": false
                                                            },
                                                            "class": "ml-1 h-8 w-8 rounded border-gray-300 bg-gray-200 text-green-400 focus:ring-indigo-500 mt-1"
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              },
                                              {
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "div",
                                                "assignedKey": "shortDescription",
                                                "class": "w-full text-left pt-6"
                                              },
                                              {
                                                "type": "container",
                                                "class": "flex text-left bg-white pt-4",
                                                "children": [
                                                  {
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "text": "Halle:",
                                                    "class": "text-gray-700 text font-bold text-left w.auto"
                                                  },
                                                  {
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "assignedKey": "hall",
                                                    "class": "text-gray-700 text font-bold text-left w.auto pl-2"
                                                  },
                                                  {
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "text": "Stand:",
                                                    "class": "text-gray-700 text font-bold text-left w.auto pl-4"
                                                  },
                                                  {
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "assignedKey": "standNo",
                                                    "class": "text-gray-700 text font-bold text-left w.auto pl-2"
                                                  }
                                                ]
                                              },
                                              {
                                                "type": "container",
                                                "class": "w-full text-left pt-4",
                                                "children": [
                                                  {
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "div",
                                                    "text": "web:",
                                                    "class": "text-sm border-transparent focus:border-transparent focus:ring-0"
                                                  },
                                                    {
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "a",
                                                    "url": "key:url",
                                                    "text": "key:url",
                                                    "parameters": {
                                                        "target": "_blank"
                                                      },
                                                    "class": "text-sm text-blue-400 border-transparent focus:border-transparent focus:ring-0 break-all"
                                                  }
                                                ]
                                              },
                                              {
                                                "type": "container",
                                                "class": "w-full text-left pt-2",
                                                "children": [
                                                  {
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "div",
                                                    "text": "detail exhibitor list:",
                                                    "class": "text-sm"
                                                  },
                                                    {
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                      "tag": "a",
                                                      "url": "key:urlDetail",
                                                      "text": "key:urlDetail",
                                                      "parameters": {
                                                        "target": "_blank"
                                                      },
                                                    "class": "text-sm text-blue-400 border-transparent focus:border-transparent focus:ring-0 break-all"
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            "description": "c1 content",
                                            "type": "container",
                                            "class": "bg-white rounded-sm border flex-1 mt-8",
                                            "children": [
                                              {
                                                "type": "container",
                                                "class": "text-left w-full px-4 pb-8",
                                                "children": [
                                                  {
                                                    "type": "container",
                                                    "containerType": "div",
                                                    "class": "flex-row space-y-3 w-full pt-4",
                                                    "children": [
                                                      {
                                                        "description": "bewertung",
                                                        "type": "container",
                                                        "class": "",
                                                        "children": [
                                                          {
                                                            "description": "text bewertung",
                                                            "type": "container",
                                                            "class": "pt-2",
                                                            "children": [
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "span",
                                                                "text": "Bewertung",
                                                                "class": "font-semibold text-lg"
                                                              },
                                                            ]
                                                          },
                                                          {
                                                            "description": "bewertung checkbox | rating",
                                                            "type": "container",
                                                            "containerType": "div",
                                                            "class": "w-full flex pt-2",
                                                            "children": [
                                                              {
                                                                "description": "rating",
                                                                "type": "container",
                                                                "class": "w-auto flex justify-between items-center rounded-b-xl",
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
                                                                        "text": "Einschätzung",
                                                                        "class": "block text-11 font-normal text-gray-700"
                                                                      },
                                                                      {
                                                                        "type": "element",
                                                                        "elementType": "svgRating",
                                                                        "key": "previewRating",
                                                                        "amount": 5,
                                                                        "tag": "svg",
                                                                        "parentClass": "flex space-x-4 pt-0.5",
                                                                        "text": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 24 24\"><path  d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z\"/></svg>",
                                                                        "class": "fill-gray-400",
                                                                        "activeClass": "fill-amber-400"
                                                                      }
                                                                    ]
                                                                  }
                                                                ]
                                                              },
                                                              {
                                                                "type": "container",
                                                                "class": "flex flex-col items-center pl-4",
                                                                "children": [
                                                                  {
                                                                    "description": "checkbox label",
                                                                    "type": "element",
                                                                    "elementType": "staticHtmlTag",
                                                                    "tag": "div",
                                                                    "text": "must visit !",
                                                                    "class": "text-11 pl-2"
                                                                  },
                                                                  {
                                                                    "description": "checkbox",
                                                                    "type": "element",
                                                                    "elementType": "checkboxInput",
                                                                    "key": "ratingMustVisit",
                                                                    "activeValue": {
                                                                      "value": true
                                                                    },
                                                                    "inactiveValue": {
                                                                      "value": false
                                                                    },
                                                                    "class": "ml-1 h-6 w-6 rounded border-gray-300 bg-gray-400 text-amber-400 focus:ring-indigo-500 mt-2"
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "description": "zuordnung",
                                                        "type": "container",
                                                        "class": "pt-2",
                                                        "children": [
                                                          {
                                                            "type": "element",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "span",
                                                            "text": "Zuordnung",
                                                            "class": "font-semibold text-lg"
                                                          },
                                                          {
                                                            "type": "element",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "text": "Platform",
                                                            "class": "block text-11 font-normal text-gray-700 pt-3"
                                                          },
                                                          {
                                                            "description": "OEM",
                                                            "type": "container",
                                                            "containerType": "div",
                                                            "class": "w-full grid grid-cols-2 sm:grid-cols-4 gap-2 lg:gap-10 pt-2",
                                                            "children": [
                                                              {
                                                                "description": "toggle button OEM",
                                                                "elementType": "toggleButton",
                                                                "type": "element",
                                                                "key": "assignment.platformArchitectureAUTO",
                                                                "parentClass": "w-full h-16 bg-amber-200 text-sm",
                                                                "children": [
                                                                  {
                                                                    "description": "stage1",
                                                                    "value": true,
                                                                    "tag": "div",
                                                                    "class": "w-full h-full flex justify-center items-center bg-gray-400 rounded-lg cursor-pointer ",
                                                                    "children": [
                                                                      {
                                                                        "type": "element",
                                                                        "elementType": "staticHtmlTag",
                                                                        "tag": "div",
                                                                        "text": "EV Platform-Architektur<br>Automobil",
                                                                        "class": "text-12 text-white text-center"
                                                                      }
                                                                    ]
                                                                  },
                                                                  {
                                                                    "description": "stage2",
                                                                    "value": false,
                                                                    "tag": "div",
                                                                    "class": "w-full h-full flex justify-center items-center bg-green-500 rounded-lg cursor-pointer ",
                                                                    "children": [
                                                                      {
                                                                        "type": "element",
                                                                        "elementType": "staticHtmlTag",
                                                                        "tag": "div",
                                                                        "text": "EV Platform-Architektur<br>Automobil",
                                                                        "class": "text-12 text-white text-center"
                                                                      }
                                                                    ]
                                                                  }
                                                                ]
                                                              },
                                                              {
                                                                "description": "toggle button other",
                                                                "elementType": "toggleButton",
                                                                "type": "element",
                                                                "key": "assignment.platformArchitectureOTHER",
                                                                "parentClass": "w-full h-16 bg-amber-200 text-sm",
                                                                "children": [
                                                                  {
                                                                    "description": "stage1",
                                                                    "value": true,
                                                                    "tag": "div",
                                                                    "class": "w-full h-full flex justify-center items-center bg-gray-400 rounded-lg cursor-pointer ",
                                                                    "children": [
                                                                      {
                                                                        "type": "element",
                                                                        "elementType": "staticHtmlTag",
                                                                        "tag": "div",
                                                                        "text": "EV Platform-Architektur<br>Andere",
                                                                        "class": "text-12 text-white text-center"
                                                                      }
                                                                    ]
                                                                  },
                                                                  {
                                                                    "description": "stage2",
                                                                    "value": false,
                                                                    "tag": "div",
                                                                    "class": "w-full h-full flex justify-center items-center bg-green-500 rounded-lg cursor-pointer ",
                                                                    "children": [
                                                                      {
                                                                        "type": "element",
                                                                        "elementType": "staticHtmlTag",
                                                                        "tag": "div",
                                                                        "text": "EV Platform-Architektur<br>Andere",
                                                                        "class": "text-12 text-white text-center"
                                                                      }
                                                                    ]
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          },
                                                          {
                                                            "type": "element",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "text": "Technische Zuordnung",
                                                            "class": "block text-11 font-normal text-gray-700 pt-3"
                                                          },
                                                          {
                                                            "description": "technical parts",
                                                            "type": "container",
                                                            "containerType": "div",
                                                            "class": "w-full grid grid-cols-2 sm:grid-cols-4 gap-2 lg:gap-10 pt-2",
                                                            "children": [
                                                              {
                                                                "description": "toggle button Gehäuse",
                                                                "elementType": "toggleButton",
                                                                "type": "element",
                                                                "key": "assignment.enclosures",
                                                                "parentClass": "w-full h-16 bg-amber-200 text-sm",
                                                                "children": [
                                                                  {
                                                                    "description": "stage1",
                                                                    "value": true,
                                                                    "tag": "div",
                                                                    "class": "w-full h-full flex justify-center items-center bg-gray-400 rounded-lg cursor-pointer ",
                                                                    "children": [
                                                                      {
                                                                        "type": "element",
                                                                        "elementType": "staticHtmlTag",
                                                                        "tag": "div",
                                                                        "text": "Gehäuse<br>Einhausungen",
                                                                        "class": "text-12 text-white text-center"
                                                                      }
                                                                    ]
                                                                  },
                                                                  {
                                                                    "description": "stage2",
                                                                    "value": false,
                                                                    "tag": "div",
                                                                    "class": "w-full h-full flex justify-center items-center bg-green-500 rounded-lg cursor-pointer ",
                                                                    "children": [
                                                                      {
                                                                        "type": "element",
                                                                        "elementType": "staticHtmlTag",
                                                                        "tag": "div",
                                                                        "text": "Gehäuse<br>Einhausungen",
                                                                        "class": "text-12 text-white text-center"
                                                                      }
                                                                    ]
                                                                  }
                                                                ]
                                                              },
                                                              {
                                                                "description": "toggle button Kühlkörper",
                                                                "elementType": "toggleButton",
                                                                "type": "element",
                                                                "key": "assignment.heatsink",
                                                                "parentClass": "w-full h-16 bg-amber-200 text-sm",
                                                                "children": [
                                                                  {
                                                                    "description": "stage1",
                                                                    "value": true,
                                                                    "tag": "div",
                                                                    "class": "w-full h-full flex justify-center items-center bg-gray-400 rounded-lg cursor-pointer ",
                                                                    "children": [
                                                                      {
                                                                        "type": "element",
                                                                        "elementType": "staticHtmlTag",
                                                                        "tag": "div",
                                                                        "text": "Kühlkörper<br>Wärmetauscher",
                                                                        "class": "text-12 text-white text-center"
                                                                      }
                                                                    ]
                                                                  },
                                                                  {
                                                                    "description": "stage2",
                                                                    "value": false,
                                                                    "tag": "div",
                                                                    "class": "w-full h-full flex justify-center items-center bg-green-500 rounded-lg cursor-pointer ",
                                                                    "children": [
                                                                      {
                                                                        "type": "element",
                                                                        "elementType": "staticHtmlTag",
                                                                        "tag": "div",
                                                                        "text": "Kühlkörper<br>Wärmetauscher",
                                                                        "class": "text-12 text-white text-center"
                                                                      }
                                                                    ]
                                                                  }
                                                                ]
                                                              },
                                                              {
                                                                "description": "toggle button Motoren",
                                                                "elementType": "toggleButton",
                                                                "type": "element",
                                                                "key": "assignment.engines",
                                                                "parentClass": "w-full h-16 bg-amber-200 text-sm",
                                                                "children": [
                                                                  {
                                                                    "description": "stage1",
                                                                    "value": true,
                                                                    "tag": "div",
                                                                    "class": "w-full h-full flex justify-center items-center bg-gray-400 rounded-lg cursor-pointer ",
                                                                    "children": [
                                                                      {
                                                                        "type": "element",
                                                                        "elementType": "staticHtmlTag",
                                                                        "tag": "div",
                                                                        "text": "Motoren",
                                                                        "class": "text-12 text-white text-center"
                                                                      }
                                                                    ]
                                                                  },
                                                                  {
                                                                    "description": "stage2",
                                                                    "value": false,
                                                                    "tag": "div",
                                                                    "class": "w-full h-full flex justify-center items-center bg-green-500 rounded-lg cursor-pointer ",
                                                                    "children": [
                                                                      {
                                                                        "type": "element",
                                                                        "elementType": "staticHtmlTag",
                                                                        "tag": "div",
                                                                        "text": "Motoren",
                                                                        "class": "text-12 text-white text-center"
                                                                      }
                                                                    ]
                                                                  }
                                                                ]
                                                              },
                                                              {
                                                                "description": "toggle button other",
                                                                "elementType": "toggleButton",
                                                                "type": "element",
                                                                "key": "assignment.electricalConnections",
                                                                "parentClass": "w-full h-16 bg-amber-200 text-sm",
                                                                "children": [
                                                                  {
                                                                    "description": "stage1",
                                                                    "value": "red",
                                                                    "tag": "div",
                                                                    "class": "w-full h-full flex justify-center items-center bg-gray-400 rounded-lg cursor-pointer ",
                                                                    "children": [
                                                                      {
                                                                        "type": "element",
                                                                        "elementType": "staticHtmlTag",
                                                                        "tag": "div",
                                                                        "text": "Elektrische<br>Verbindungen",
                                                                        "class": "text-12 text-white text-center"
                                                                      }
                                                                    ]
                                                                  },
                                                                  {
                                                                    "description": "stage2",
                                                                    "value": "green",
                                                                    "tag": "div",
                                                                    "class": "w-full h-full flex justify-center items-center bg-green-500 rounded-lg cursor-pointer ",
                                                                    "children": [
                                                                      {
                                                                        "type": "element",
                                                                        "elementType": "staticHtmlTag",
                                                                        "tag": "div",
                                                                        "text": "Elektrische<br>Verbindungen",
                                                                        "class": "text-12 text-white text-center"
                                                                      }
                                                                    ]
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          },
                                                          {
                                                            "type": "element",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "text": "Lieferanten",
                                                            "class": "block text-11 font-normal text-gray-700 pt-3"
                                                          },
                                                          {
                                                            "description": "supplier",
                                                            "type": "container",
                                                            "containerType": "div",
                                                            "class": "w-full grid grid-cols-2 sm:grid-cols-4 gap-2 lg:gap-10 pt-2",
                                                            "children": [
                                                              {
                                                                "description": "toggle button OEM",
                                                                "elementType": "toggleButton",
                                                                "type": "element",
                                                                "key": "assignment.supplierCoatingMaterial",
                                                                "parentClass": "w-full h-16 bg-amber-200 text-sm",
                                                                "children": [
                                                                  {
                                                                    "description": "stage1",
                                                                    "value": "red",
                                                                    "tag": "div",
                                                                    "class": "w-full h-full flex justify-center items-center bg-gray-400 rounded-lg cursor-pointer ",
                                                                    "children": [
                                                                      {
                                                                        "type": "element",
                                                                        "elementType": "staticHtmlTag",
                                                                        "tag": "div",
                                                                        "text": "Lieferant<br>Beschichtungsmaterial",
                                                                        "class": "text-12 text-white text-center"
                                                                      }
                                                                    ]
                                                                  },
                                                                  {
                                                                    "description": "stage2",
                                                                    "value": "green",
                                                                    "tag": "div",
                                                                    "class": "w-full h-full flex justify-center items-center bg-green-500 rounded-lg cursor-pointer ",
                                                                    "children": [
                                                                      {
                                                                        "type": "element",
                                                                        "elementType": "staticHtmlTag",
                                                                        "tag": "div",
                                                                        "text": "Lieferant<br>Beschichtungsmaterial",
                                                                        "class": "text-12 text-white text-center"
                                                                      }
                                                                    ]
                                                                  }
                                                                ]
                                                              },
                                                              {
                                                                "description": "toggle button other",
                                                                "elementType": "toggleButton",
                                                                "type": "element",
                                                                "key": "assignment.supplierEquipment",
                                                                "parentClass": "w-full h-16 bg-amber-200 text-sm",
                                                                "children": [
                                                                  {
                                                                    "description": "stage1",
                                                                    "value": "red",
                                                                    "tag": "div",
                                                                    "class": "w-full h-full flex justify-center items-center bg-gray-400 rounded-lg cursor-pointer ",
                                                                    "children": [
                                                                      {
                                                                        "type": "element",
                                                                        "elementType": "staticHtmlTag",
                                                                        "tag": "div",
                                                                        "text": "Lieferant<br>Anlagentechnologie",
                                                                        "class": "text-12 text-white text-center"
                                                                      }
                                                                    ]
                                                                  },
                                                                  {
                                                                    "description": "stage2",
                                                                    "value": "green",
                                                                    "tag": "div",
                                                                    "class": "w-full h-full flex justify-center items-center bg-green-500 rounded-lg cursor-pointer ",
                                                                    "children": [
                                                                      {
                                                                        "type": "element",
                                                                        "elementType": "staticHtmlTag",
                                                                        "tag": "div",
                                                                        "text": "Lieferant<br>Anlagentechnologie",
                                                                        "class": "text-12 text-white text-center"
                                                                      }
                                                                    ]
                                                                  }
                                                                ]
                                                              },
                                                              {
                                                                "description": "toggle button other",
                                                                "elementType": "toggleButton",
                                                                "type": "element",
                                                                "key": "assignment.supplierTesting",
                                                                "parentClass": "w-full h-16 bg-amber-200 text-sm",
                                                                "children": [
                                                                  {
                                                                    "description": "stage1",
                                                                    "value": "red",
                                                                    "tag": "div",
                                                                    "class": "w-full h-full flex justify-center items-center bg-gray-400 rounded-lg cursor-pointer ",
                                                                    "children": [
                                                                      {
                                                                        "type": "element",
                                                                        "elementType": "staticHtmlTag",
                                                                        "tag": "div",
                                                                        "text": "Lieferant<br>Messtechnik",
                                                                        "class": "text-12 text-white text-center"
                                                                      }
                                                                    ]
                                                                  },
                                                                  {
                                                                    "description": "stage2",
                                                                    "value": "green",
                                                                    "tag": "div",
                                                                    "class": "w-full h-full flex justify-center items-center bg-green-500 rounded-lg cursor-pointer ",
                                                                    "children": [
                                                                      {
                                                                        "type": "element",
                                                                        "elementType": "staticHtmlTag",
                                                                        "tag": "div",
                                                                        "text": "Lieferant<br>Messtechnik",
                                                                        "class": "text-12 text-white text-center"
                                                                      }
                                                                    ]
                                                                  }
                                                                ]
                                                              },
                                                              {
                                                                "description": "toggle button other",
                                                                "elementType": "toggleButton",
                                                                "type": "element",
                                                                "key": "assignment.supplierCompetitor",
                                                                "parentClass": "w-full h-16 bg-amber-200 text-sm",
                                                                "children": [
                                                                  {
                                                                    "description": "stage1",
                                                                    "value": "red",
                                                                    "tag": "div",
                                                                    "class": "w-full h-full flex justify-center items-center bg-gray-400 rounded-lg cursor-pointer ",
                                                                    "children": [
                                                                      {
                                                                        "type": "element",
                                                                        "elementType": "staticHtmlTag",
                                                                        "tag": "div",
                                                                        "text": "Lieferant<br>Wettbewerber",
                                                                        "class": "text-12 text-white text-center"
                                                                      }
                                                                    ]
                                                                  },
                                                                  {
                                                                    "description": "stage2",
                                                                    "value": "green",
                                                                    "tag": "div",
                                                                    "class": "w-full h-full flex justify-center items-center bg-green-500 rounded-lg cursor-pointer ",
                                                                    "children": [
                                                                      {
                                                                        "type": "element",
                                                                        "elementType": "staticHtmlTag",
                                                                        "tag": "div",
                                                                        "text": "Lieferant<br>Wettbewerber",
                                                                        "class": "text-12 text-white text-center"
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
                                                        "description": "preview comment",
                                                        "type": "container",
                                                        "class": "w-full pt-8",
                                                        "children": [
                                                          {
                                                            "type": "element",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "text": "Preview Kommentar",
                                                            "class": "block text-11 font-normal text-gray-700"
                                                          },
                                                          {
                                                            "type": "element",
                                                            "elementType": "textareaInput",
                                                            "rows": 7,
                                                            "key": "previewComment",
                                                            "class": "mt-0 block w-full border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-13"
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "description": "researcher",
                                                        "type": "container",
                                                        "class": "w-full sm:w-1/2 pb-4 pt-3",
                                                        "children": [
                                                          {
                                                            "type": "element",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "text": "Preview Bearbeiter",
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
                                                                "key": "researcher",
                                                                "class": "relative",
                                                                "listbox": {
                                                                  "listboxButton": {
                                                                    "placeholder": "Bearbeiter wählen",
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
                                                                        "value": "SusanneMeyerZuNatrup",
                                                                        "name": "Susanne Meyer zu Natrup"
                                                                      },
                                                                      {
                                                                        "value": "AchimSchroeer",
                                                                        "name": "Dr. Achim Schröer"
                                                                      },
                                                                      {
                                                                        "value": "DominikStork",
                                                                        "name": "Dominik Stork"
                                                                      },
                                                                      {
                                                                        "value": "StephanSchulz",
                                                                        "name": "Stephan Schulz"
                                                                      },
                                                                      {
                                                                        "value": "MaxKaul",
                                                                        "name": "Max Kaul"
                                                                      },
                                                                      {
                                                                        "value": "MargareteHillebrandKoenigkamp",
                                                                        "name": "Margarete Hillebrand-Königkamp"
                                                                      },
                                                                      {
                                                                        "value": "Bernd Hillebrand",
                                                                        "name": "Bernd Hillebrand"
                                                                      },
                                                                      {
                                                                        "value": "WernerHillebrnad",
                                                                        "name": "Werner Hillebrand"
                                                                      },
                                                                      {
                                                                        "value": "DominikStahlschmidt",
                                                                        "name": "Dominik Stahlschmidt"
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
