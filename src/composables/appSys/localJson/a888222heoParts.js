import { ref } from "vue"

export function useJsonLocal() {
  const jsonStructure = ref({
    "_id": {
      "$oid": "6353008707591a12e3f5e105"
    },
    "type": "appTemplate",
    "folderNavigationLink": "a888222heoparts",
    "showHideSidebar": true,
    "showHideTopbar": true,
    "URL": "a888222heoparts",
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
        "description": "a888222heoparts ag-grid",
        "appNavigationLink": "a888222heoparts",
        "subURL": "table",
        "category": "table",
        "globalCollection": "a888222heoparts",
        "markup": [
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
            "description": "annotator fs-dialog",
            "type": "dialog",
            "key": "annotatorDialogFS",
            "animate": "false",
            "showBG": "false",
            "toggleDialog": true,
            "dialogKey": "annotatorDialogFS",
            "class": "inline-block bg-white overflow-hidden transform transition-all w-full h-screen bg-white",
            "children": [
              {
                "type": "container",
                "class": "bg-white dark:bg-gray-800 w-full h-screen",
                "children": [
                  {
                    "description": "toolsPane",
                    "type": "container",
                    "tag": "div",
                    "class": "w-full h-12 bg-[#4e5962] flex justify-between",
                    "children": [
                      {
                        "description": "toolsPane left",
                        "type": "container",
                        "class": "flex h-full pl-8",
                        "children": [
                          {
                            "description": "annotator tools",
                            "type": "annotatorEvent",
                            "eventType": "activateTool",
                            "elementType": "buttonGroup",
                            "buttonGroupId": "imagesActiveTools",
                            "key": "images",
                            "value": "object",
                            "values": [
                              {
                                "name": "selection",
                                "value": "selectionTool"
                              },
                              {
                                "name": "measure",
                                "value": "measureTool",
                                "opacity": 1,
                                "strokeColor": "#0ec271",
                                "strokeWidth": 1
                              },
                              {
                                "name": "line",
                                "value": "lineTool",
                                "opacity": 1,
                                "strokeColor": "#ee00ff",
                                "strokeWidth": 1
                              },
                              {
                                "name": "angle",
                                "value": "angleTool",
                                "opacity": 1,
                                "strokeColor": "#ff0000",
                                "strokeWidth": 1
                              },
                              {
                                "name": "freehand",
                                "value": "freehandTool",
                                "opacity": 1,
                                "strokeColor": "#ff0000",
                                "strokeWidth": 2
                              },
                              {
                                "name": "measurePolygon",
                                "value": "measurePolygonTool",
                                "fillColor": "#0000ff",
                                "opacity": 0.4,
                                "strokeColor": "#ff0000",
                                "strokeWidth": 2
                              }
                            ],
                            "class": "flex h-full",
                            "children": [
                              {
                                "description": "selection tool",
                                "type": "container",
                                "class": "h-full w-[50px] border-r border-l border-gray-500",
                                "children": [
                                  {
                                    "description": "toggle button selection",
                                    "type": "container",
                                    "class": "flex justify-center items-center pt-1",
                                    "children": [
                                      {
                                        "type": "container",
                                        "class": "text-white hover:text-amber-400 cursor-pointer w-full h-full",
                                        "checkedClass": "text-amber-400",
                                        "children": [
                                          {
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "text": "back_hand",
                                            "class": "material-symbols-outlined text-[18px] cursor-pointer pt-1"
                                          },
                                          {
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "tag": "div",
                                            "text": "selection",
                                            "class": "text-10 -m-1 text-center"
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "description": "scale tool",
                                "type": "container",
                                "class": "h-full w-[50px] border-r border-l border-gray-500",
                                "children": [
                                  {
                                    "description": "toggle button selection",
                                    "type": "container",
                                    "class": "flex justify-center pt-1",
                                    "children": [
                                      {
                                        "type": "container",
                                        "class": "text-white hover:text-amber-400 cursor-pointer",
                                        "checkedClass": "text-amber-400",
                                        "children": [
                                          {
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "text": "straighten",
                                            "class": "material-symbols-outlined text-[20px] cursor-pointer mt-1"
                                          },
                                          {
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "tag": "div",
                                            "text": "scale",
                                            "class": "text-10 -m-2 text-center"
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "description": "line tool",
                                "type": "container",
                                "class": "h-full w-[50px] border-r border-l border-gray-500",
                                "children": [
                                  {
                                    "description": "toggle button selection",
                                    "type": "container",
                                    "class": "flex justify-center pt-1",
                                    "children": [
                                      {
                                        "type": "container",
                                        "class": "text-white hover:text-amber-400 cursor-pointer",
                                        "checkedClass": "text-amber-400",
                                        "children": [
                                          {
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "text": "drive_file_rename_outline",
                                            "class": "material-symbols-outlined text-[20px]  cursor-pointer pt-1.5"
                                          },
                                          {
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "tag": "div",
                                            "text": "line",
                                            "class": "text-10 -m-2 text-center"
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "description": "angle tool",
                                "type": "container",
                                "class": "h-full w-[50px] border-r border-l border-gray-500",
                                "children": [
                                  {
                                    "description": "toggle button selection",
                                    "type": "container",
                                    "class": "flex justify-center pt-1",
                                    "children": [
                                      {
                                        "type": "container",
                                        "class": "text-white hover:text-amber-400 cursor-pointer",
                                        "checkedClass": "text-amber-400",
                                        "children": [
                                          {
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "text": "device_hub",
                                            "class": "material-symbols-outlined text-[20px]  cursor-pointer pt-1.5"
                                          },
                                          {
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "tag": "div",
                                            "text": "angle",
                                            "class": "text-10 -m-2 text-center"
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "description": "freehand tool",
                                "type": "container",
                                "class": "h-full w-[70px] border-r border-l border-gray-500",
                                "children": [
                                  {
                                    "description": "toggle button selection",
                                    "type": "container",
                                    "class": "flex justify-center pt-1",
                                    "children": [
                                      {
                                        "type": "container",
                                        "class": "text-white hover:text-amber-400 cursor-pointer",
                                        "checkedClass": "text-amber-400",
                                        "children": [
                                          {
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "text": "draw",
                                            "class": "material-symbols-outlined text-[19px]  cursor-pointer pt-1"
                                          },
                                          {
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "tag": "div",
                                            "text": "freehand",
                                            "class": "text-10 -m-[5px] text-center"
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "description": "measurePolygon tool",
                                "type": "container",
                                "class": "h-full w-[70px] border-r border-l border-gray-500",
                                "children": [
                                  {
                                    "description": "toggle button selection",
                                    "type": "container",
                                    "class": "flex justify-center pt-1",
                                    "children": [
                                      {
                                        "type": "container",
                                        "class": "text-white hover:text-amber-400 cursor-pointer",
                                        "checkedClass": "text-amber-400",
                                        "children": [
                                          {
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "text": "square_foot",
                                            "class": "material-symbols-outlined text-[19px]  cursor-pointer pt-1"
                                          },
                                          {
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "tag": "div",
                                            "text": "poly meas",
                                            "class": "text-10 -m-[5px] text-center"
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
                            "description": "Tools - dropdown button example",
                            "type": "navEvent",
                            "eventType": "dropdownPanelTrigger",
                            "target": "toolsAnnotationTrigger",
                            "key": "toolsAnnotationTrigger",
                            "containerType": "a",
                            "class": "w-[60px] flex flex-col justify-center items-center cursor-pointer border-r border-l border-gray-500 mt-1.5",
                            "children": [
                              {
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "text": "dashboard",
                                "class": "material-symbols-outlined text-[19px] text-white"
                              },
                              {
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "div",
                                "text": "drawing",
                                "class": "text-10 m-0.5 text-white text-center"
                              }
                            ]
                          },
                          {
                            "description": "Tools - dropdown panel example",
                            "type": "container",
                            "containerType": "div",
                            "class": "relative inline-block text-left",
                            "children": [
                              {
                                "type": "dropdownPanel",
                                "key": "toolsAnnotationTrigger",
                                "id": "toolsAnnotationTrigger",
                                "tag": "div",
                                "class": "origin-top-left absolute -left-[70px] mt-[49px] w-24 rounded-sm shadow bg-[#4e5962] ring-1 ring-black ring-opacity-5 focus:outline-none",
                                "children": [
                                  {
                                    "description": "panel container menu items",
                                    "type": "container",
                                    "containerType": "div",
                                    "class": "py-1",
                                    "children": [
                                      {
                                        "description": "menu item 1",
                                        "type": "annotatorEvent",
                                        "eventType": "activateTool",
                                        "key": "images",
                                        "value": {
                                          "name": "rectangle",
                                          "value": "rectangleTool",
                                          "fillColor": "#0000ff01",
                                          "opacity": 1,
                                          "strokeColor": "#ff0000",
                                          "strokeWidth": 4
                                        },
                                        "containerType": "div",
                                        "class": "flex justify-start items-center hover:bg-amber-300 text-black cursor-pointer border-b border-grey-500",
                                        "children": [
                                          {
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "tag": "div",
                                            "text": "rectangle",
                                            "class": "material-symbols-outlined text-[18px] text-white pl-2"
                                          },
                                          {
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "tag": "div",
                                            "text": "rectangle",
                                            "class": "block pl-2 py-2 text-12 text-white"
                                          }
                                        ]
                                      },
                                      {
                                        "description": "menu item 2",
                                        "type": "annotatorEvent",
                                        "eventType": "activateTool",
                                        "key": "images",
                                        "value": {
                                          "name": "circle",
                                          "value": "circleTool",
                                          "fillColor": "#0000ff01",
                                          "opacity": 1,
                                          "strokeColor": "#ff0000",
                                          "strokeWidth": 8
                                        },
                                        "containerType": "div",
                                        "class": "flex justify-start items-center hover:bg-amber-300 text-black cursor-pointer border-b border-grey-500",
                                        "children": [
                                          {
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "tag": "div",
                                            "text": "circle",
                                            "class": "material-symbols-outlined text-[18px] text-white pl-2"
                                          },
                                          {
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "tag": "div",
                                            "text": "circle",
                                            "class": "block pl-2 py-2 text-12 text-white"
                                          }
                                        ]
                                      },
                                      {
                                        "description": "menu item 3",
                                        "type": "annotatorEvent",
                                        "eventType": "activateTool",
                                        "key": "images",
                                        "value": {
                                          "name": "polygon",
                                          "value": "polygonTool",
                                          "fillColor": "#0000ff",
                                          "opacity": 1,
                                          "strokeColor": "#ff0000",
                                          "strokeWidth": 1
                                        },
                                        "containerType": "div",
                                        "class": "flex justify-start items-center hover:bg-amber-300 text-black cursor-pointer border-b border-grey-500",
                                        "children": [
                                          {
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "tag": "div",
                                            "text": "polyline",
                                            "class": "material-symbols-outlined text-[18px] text-white pl-2"
                                          },
                                          {
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "tag": "div",
                                            "text": "polygon",
                                            "class": "block pl-2 py-2 text-12 text-white"
                                          }
                                        ]
                                      },
                                      {
                                        "description": "menu item 4",
                                        "type": "annotatorEvent",
                                        "eventType": "activateTool",
                                        "key": "images",
                                        "value": {
                                          "name": "dotCircle",
                                          "value": "dotCircleTool",
                                          "fillColor": "#0000ff01",
                                          "opacity": 1,
                                          "radius": 50,
                                          "strokeColor": "#ff0000",
                                          "strokeWidth": 4,
                                          "dashArrayStroke": 20,
                                          "dashArrayGap": 20,
                                          "content": "Lasertool",
                                          "resize": false
                                        },
                                        "containerType": "div",
                                        "class": "flex justify-start items-center hover:bg-amber-300 text-black cursor-pointer border-b border-grey-500",
                                        "children": [
                                          {
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "tag": "div",
                                            "text": "radio_button_checked",
                                            "class": "material-symbols-outlined text-[18px] text-white pl-2"
                                          },
                                          {
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "tag": "div",
                                            "text": "circle dot",
                                            "class": "block pl-2 py-2 text-12 text-white"
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
                            "description": "tool undo",
                            "type": "container",
                            "class": "h-full w-[50px] border-r border-l border-gray-500 ml-8",
                            "children": [
                              {
                                "description": "toggle button undo",
                                "type": "annotatorEvent",
                                "eventType": "undo",
                                "key": "images",
                                "class": "flex justify-center pt-1",
                                "children": [
                                  {
                                    "description": "stage1",
                                    "type": "container",
                                    "class": "text-white hover:text-amber-400 cursor-pointer",
                                    "children": [
                                      {
                                        "type": "element",
                                        "elementType": "staticHtmlTag",
                                        "text": "undo",
                                        "class": "material-symbols-outlined text-[20px] pt-1"
                                      },
                                      {
                                        "type": "element",
                                        "elementType": "staticHtmlTag",
                                        "tag": "div",
                                        "text": "undo",
                                        "class": "text-10 -m-1.5 text-center"
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "description": "tool redo",
                            "type": "container",
                            "class": "w-[50px] border-r border-gray-500 h-full",
                            "children": [
                              {
                                "description": "toggle button redo",
                                "type": "annotatorEvent",
                                "eventType": "redo",
                                "key": "images",
                                "class": "flex justify-center pt-1",
                                "children": [
                                  {
                                    "description": "stage1",
                                    "type": "container",
                                    "class": "text-white hover:text-amber-400 cursor-pointer",
                                    "children": [
                                      {
                                        "type": "element",
                                        "elementType": "staticHtmlTag",
                                        "text": "redo",
                                        "class": "material-symbols-outlined text-[20px] pt-1"
                                      },
                                      {
                                        "type": "element",
                                        "elementType": "staticHtmlTag",
                                        "tag": "div",
                                        "text": "redo",
                                        "class": "text-10 -m-1.5  text-center"
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },

                          {
                            "description": "tool view selector",
                            "type": "container",
                            "class": "h-full w-[100px] pl-2 pt-1.5 border-r border-gray-600",
                            "children": [
                              {
                                "description": "listbox select input",
                                "type": "annotatorEvent",
                                "eventType": "setView",
                                "key": "images",
                                "class": "h-full",
                                "elementType": "listboxSelectInput",
                                "value": "object",
                                "listbox": {
                                  "listboxButton": {
                                    "placeholder": "select view",
                                    "class": "relative flex items-center w-[100px] h-full bg-transparent py-3 pl-4 pr-10 text-left text-white hover:text-amber-400 cursor-pointer",
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
                                            "class": "block truncate sm:text-10"
                                          },
                                          {
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "tag": "span",
                                            "text": "unfold_more",
                                            "class": "material-symbols-outlined text-[22px] font-normal pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "listboxOptionsContainer": {
                                    "class": "absolute z-50 mt-0 max-h-60 w-full overflow-auto rounded-ibr border-l border-r border-b bg-white py-1 text-base  sm:text-sm",
                                    "listboxOptions": {
                                      "classActive": "bg-gray-300 text-black",
                                      "classInactive": "text-gray-900",
                                      "class": "relative cursor-default select-none py-1  pl-2 pr-4",
                                      "children": [
                                        {
                                          "type": "container",
                                          "children": [
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
                                        "name": "front view",
                                        "value": "front_part[0]",
                                        "bgImage1": "images.front_part[0].imageResponse.originalUrl",
                                        "bgImage1UrlParameter": "-/resize/1900x/-/format/auto/-/quality/smart/",
                                        "bgImage2": "images.front_ruler[0].imageResponse.originalUrl",
                                        "bgImage2UrlParameter": "-/resize/1900x/-/format/auto/-/quality/smart/"
                                      },
                                      {
                                        "name": "back view",
                                        "value": "back_part[0]",
                                        "bgImage1": "images.back_part[0].imageResponse.originalUrl",
                                        "bgImage1UrlParameter": "-/resize/1900x/-/format/auto/-/quality/smart/",
                                        "bgImage2": "images.back_ruler[0].imageResponse.originalUrl",
                                        "bgImage2UrlParameter": "-/resize/1900x/-/format/auto/-/quality/smart/"
                                      },
                                      {
                                        "name": "side1 view",
                                        "value": "side1_part[0]",
                                        "bgImage1": "images.side1_part[0].imageResponse.originalUrl",
                                        "bgImage1UrlParameter": "-/resize/1900x/-/format/auto/-/quality/smart/",
                                        "bgImage2": "images.side1_ruler[0].imageResponse.originalUrl",
                                        "bgImage2UrlParameter": "-/resize/1900x/-/format/auto/-/quality/smart/"
                                      },
                                      {
                                        "name": "side2 view",
                                        "value": "side2_part[0]",
                                        "bgImage1": "images.side2_part[0].imageResponse.originalUrl",
                                        "bgImage1UrlParameter": "-/resize/1900x/-/format/auto/-/quality/smart/",
                                        "bgImage2": "images.side2_ruler[0].imageResponse.originalUrl",
                                        "bgImage2UrlParameter": "-/resize/1900x/-/format/auto/-/quality/smart/"
                                      },
                                      {
                                        "name": "side3 view",
                                        "value": "side3_part[0]",
                                        "bgImage1": "images.side3_part[0].imageResponse.originalUrl",
                                        "bgImage1UrlParameter": "-/resize/1900x/-/format/auto/-/quality/smart/",
                                        "bgImage2": "images.side3_ruler[0].imageResponse.originalUrl",
                                        "bgImage2UrlParameter": "-/resize/1900x/-/format/auto/-/quality/smart/"
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "description": "tool fit to screen",
                            "type": "container",
                            "class": "h-full w-[60px] border-r border-l border-gray-500 ml-2",
                            "children": [
                              {
                                "description": "toggle button fit to screen",
                                "type": "annotatorEvent",
                                "eventType": "fitToScreen",
                                "key": "images",
                                "class": "flex justify-center pt-1",
                                "children": [
                                  {
                                    "description": "stage1",
                                    "type": "container",
                                    "class": "text-white hover:text-amber-400 cursor-pointer",
                                    "children": [
                                      {
                                        "type": "element",
                                        "elementType": "staticHtmlTag",
                                        "text": "display_settings",
                                        "class": "material-symbols-outlined text-[20px] pt-1.5"
                                      },
                                      {
                                        "type": "element",
                                        "elementType": "staticHtmlTag",
                                        "tag": "div",
                                        "text": "fit screen",
                                        "class": "text-10 -m-2 text-center"
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },

                          {
                            "description": "switch resolution",
                            "type": "container",
                            "class": "h-full w-[50px] border-r border-gray-500 mt-1",
                            "children": [
                              {
                                "description": "toggle button fit to screen",
                                "type": "annotatorEvent",
                                "eventType": "setMaxResolution",
                                "key": "images",
                                "elementType": "toggleButton",
                                "class": "flex justify-center",
                                "children": [
                                  {
                                    "description": "stage1",
                                    "type": "container",
                                    "value": false,
                                    "class": "text-white hover:text-amber-400 cursor-pointer",
                                    "children": [
                                      {
                                        "type": "element",
                                        "elementType": "staticHtmlTag",
                                        "text": "8k",
                                        "class": "material-symbols-outlined text-[21px] pt-1.5"
                                      },
                                      {
                                        "type": "element",
                                        "elementType": "staticHtmlTag",
                                        "tag": "div",
                                        "text": "max res",
                                        "class": "text-10 -m-2 text-center"
                                      }
                                    ]
                                  },
                                  {
                                    "description": "stage1",
                                    "type": "container",
                                    "value": true,
                                    "class": "text-amber-400 cursor-pointer",
                                    "children": [
                                      {
                                        "type": "element",
                                        "elementType": "staticHtmlTag",
                                        "text": "8k",
                                        "class": "material-symbols-outlined text-[23px] pt-1.5"
                                      },
                                      {
                                        "type": "element",
                                        "elementType": "staticHtmlTag",
                                        "tag": "div",
                                        "text": "max resolution",
                                        "class": "text-10 -m-1 text-center"
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "description": "show/hide bgImage",
                            "type": "container",
                            "class": "h-full w-[80px] border-r border-gray-500",
                            "children": [
                              {
                                "description": "toggle button fit to screen",
                                "type": "annotatorEvent",
                                "eventType": "toggleVisibilityBGimage",
                                "key": "images",
                                "class": "flex justify-center pt-1",
                                "children": [
                                  {
                                    "type": "container",
                                    "class": "text-white hover:text-amber-400 cursor-pointer",
                                    "children": [
                                      {
                                        "type": "element",
                                        "elementType": "staticHtmlTag",
                                        "text": "straighten",
                                        "class": "material-symbols-outlined text-[23px] pt-1"
                                      },
                                      {
                                        "type": "element",
                                        "elementType": "staticHtmlTag",
                                        "tag": "div",
                                        "text": "toggle ruler",
                                        "class": "text-10 -m-2 text-center"
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },

                          {
                            "description": "Export image",
                            "type": "container",
                            "class": "h-full w-[50px] border-r border-gray-500 mt-1",
                            "children": [
                              {
                                "description": "toggle button fit to screen",
                                "type": "annotatorEvent",
                                "eventType": "exportImage",
                                "key": "images",
                                "exportKey": "images.annotation",
                                "key2write": "annotationImage",
                                "value2write": "images.annotation.cdnUrl",
                                "class": "flex justify-center",
                                "children": [
                                  {
                                    "type": "container",
                                    "class": "text-white hover:text-amber-400 cursor-pointer",
                                    "children": [
                                      {
                                        "type": "element",
                                        "elementType": "staticHtmlTag",
                                        "text": "upgrade",
                                        "class": "material-symbols-outlined text-[21px] pt-1.5"
                                      },
                                      {
                                        "type": "element",
                                        "elementType": "staticHtmlTag",
                                        "tag": "div",
                                        "text": "export",
                                        "class": "text-10 -m-2 text-center"
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "description": "uploadcare progress - export image",
                            "type": "container",
                            "class": "w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700",
                            "conditionArray": [
                              {
                                "cd": "INI, k, uploadcareProgress:images.annotation, notEmpty"
                              },
                              {
                                "cd": "AND, k, uploadcareProgress:images.annotation, gte, s, 0"
                              }
                            ],
                            "children": [
                              {
                                "description": "preview",
                                "type": "container",
                                "class": "relative flex mt-4",
                                "children": [
                                  {
                                    "type": "element",
                                    "elementType": "staticHtmlTag",
                                    "tag": "div",
                                    "class": "bg-red-400 h-20",
                                    "style": "ex:'width: ' + uploadcareProgress:images.annotation + '%'",
                                    "text": ""
                                  },
                                  {
                                    "type": "element",
                                    "elementType": "staticHtmlTag",
                                    "tag": "div",
                                    "class": "absolute w-full h-full",
                                    "text": "ex:uploadcareProgress:images.annotation + '%'"
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "description": "toolsPane right",
                        "type": "container",
                        "class": "flex items-center h-full text-white hover:text-white mr-4 px-2 font-bold text-10",
                        "children": [
                          {
                            "description": "save button",
                            "type": "cddpEvent",
                            "eventType": "save",
                            "class": "flex items-center h-full bg-transparent hover:text-amber-400 border-r border-l border-gray-500 px-3 cursor-pointer",
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
                            "dialogKey": "annotatorDialogFS",
                            "class": "flex items-center h-full bg-transparent hover:text-amber-400 border-r border-gray-500 px-3 cursor-pointer",
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
                            "dialogKey": "annotatorDialogFS",
                            "class": "flex items-center h-full bg-transparent hover:text-amber-400 border-r  border-gray-500 px-3 cursor-pointer",
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
                  },
                  {
                    "type": "container",
                    "class": "bg-white flex dark:bg-gray-800 w-full h-screen",
                    "children": [
                      {
                        "type": "container",
                        "class": "w-full flex",
                        "children": [
                          {
                            "description": "canvasPane",
                            "type": "container",
                            "tag": "div",
                            "class": "w-[80%] min-h-screen bg-white",
                            "children": [
                              {
                                "type": "element",
                                "elementType": "annotatorCanvas",
                                "autoSave": false,
                                "displayImageUrlParameter": "/-/resize/1900x/-/format/auto/-/quality/smart/",
                                "key": "images",
                                "class": "h-screen",
                                "style": "min-height:600px;"
                              }
                            ]
                          },
                          {
                            "description": "resultPane",
                            "type": "container",
                            "containerType": "div",
                            "class": "w-[20%] min-h-screen bg-[#1b2b36]",
                            "children": [
                              {
                                "description": "tab buttons",
                                "type": "container",
                                "class": "grid grid-cols-2 gap-2",
                                "children": [
                                  {
                                    "description": "tab 1",
                                    "type": "container",
                                    "tabID": "tab001",
                                    "tabGroupID": "annotatorGroup001",
                                    "class": "flex justify-center items-center cursor-pointer px-2 bg-amber-400 hover:bg-gray-400 hover:text-white text-12 font-bold leading-[24px] h-10",
                                    "activeClass": "text-white bg-red-500 h-full w-full",
                                    "children": [
                                      {
                                        "type": "element",
                                        "elementType": "staticHtmlTag",
                                        "tag": "div",
                                        "text": "measures",
                                        "class": "uppercase"
                                      }
                                    ]
                                  },
                                  {
                                    "description": "tab 2",
                                    "type": "container",
                                    "tabID": "tab002",
                                    "tabGroupID": "annotatorGroup001",
                                    "class": "flex justify-center items-center cursor-pointer px-2 bg-amber-400 hover:bg-gray-400 hover:text-white text-12 font-bold leading-[24px] h-10",
                                    "activeClass": "text-white bg-red-500 h-full w-full",
                                    "children": [
                                      {
                                        "type": "element",
                                        "elementType": "staticHtmlTag",
                                        "tag": "div",
                                        "text": "drawing",
                                        "class": "uppercase"
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "description": "tab 1 container",
                                "type": "container",
                                "tabID": "tab001",
                                "tabGroupID": "annotatorGroup001",
                                "tabContent": true,
                                "class": "text-left",
                                "children": [
                                  {
                                    "description": "headline measurements",
                                    "type": "element",
                                    "elementType": "staticHtmlTag",
                                    "tag": "div",
                                    "text": "view measurements",
                                    "class": "text-sm font-bold py-4 pl-4 text-white border-t border-b border-gray-600"
                                  },
                                  {
                                    "description": "annotatorMeasurements scale",
                                    "type": "annotatorMeasurements",
                                    "assignedKey": "images",
                                    "class": "pl-4",
                                    "measureTool": {
                                      "scale": [
                                        {
                                          "description": "view scaling text",
                                          "type": "element",
                                          "elementType": "staticHtmlTag",
                                          "tag": "div",
                                          "text": "view scaling",
                                          "class": "text-12 w-full pt-2 pb-2 text-white"
                                        },
                                        {
                                          "description": "scaling elements",
                                          "type": "container",
                                          "class": "flex justify-between",
                                          "children": [
                                            {
                                              "description": "left",
                                              "type": "container",
                                              "class": "flex",
                                              "children": [
                                                {
                                                  "description": "rectangle",
                                                  "type": "container",
                                                  "tag": "div",
                                                  "class": "pl-0 pt-2 w-10 whitespace-nowrap font-normal text-gray-900 text-12",
                                                  "children": [
                                                    {
                                                      "description": "rectColor",
                                                      "type": "element",
                                                      "elementType": "staticHtmlTag",
                                                      "tag": "rectColor",
                                                      "width": 20,
                                                      "height": 20,
                                                      "text": "2afe48"
                                                    }
                                                  ]
                                                },
                                                {
                                                  "description": "scale input",
                                                  "type": "element",
                                                  "elementType": "textInput",
                                                  "autoSave": false,
                                                  "key": "value",
                                                  "class": "mt-0 block w-16 bg-transparent border border-gray-600 py-0.5 px-3 sm:text-11 text-white"
                                                },
                                                {
                                                  "description": "listbox select",
                                                  "type": "container",
                                                  "containerType": "div",
                                                  "class": "w-[80px] pl-4",
                                                  "children": [
                                                    {
                                                      "description": "listbox select input",
                                                      "type": "element",
                                                      "elementType": "listboxSelectInput",
                                                      "autoSave": false,
                                                      "value": "value",
                                                      "key": "unit",
                                                      "class": "relative",
                                                      "listbox": {
                                                        "listboxButton": {
                                                          "placeholder": "unit",
                                                          "class": "relative flex items-center w-full h-selHeight cursor-pointer bg-transparent border border-gray-600 text-white hover:text-amber-400 rounded-ibr p-2 pl-3 pr-10 text-left  sm:text-12",
                                                          "assignedKey": "unit",
                                                          "children": [
                                                            {
                                                              "type": "container",
                                                              "children": [
                                                                {
                                                                  "type": "element",
                                                                  "elementType": "staticHtmlTag",
                                                                  "tag": "span",
                                                                  "assignedKey": "name",
                                                                  "class": "block truncate "
                                                                },
                                                                {
                                                                  "type": "element",
                                                                  "elementType": "staticHtmlTag",
                                                                  "tag": "span",
                                                                  "text": "unfold_more",
                                                                  "class": "material-symbols-outlined text-iicon font-normal pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1"
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        },
                                                        "listboxOptionsContainer": {
                                                          "class": "absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-ibr border-l border-r border-b bg-gray-100 py-1 text-base  sm:text-sm",
                                                          "listboxOptions": {
                                                            "classActive": "bg-gray-400 text-black",
                                                            "classInactive": "text-gray-900",
                                                            "class": "relative cursor-default select-none py-1 pl-2 pr-4 text-11",
                                                            "children": [
                                                              {
                                                                "type": "container",
                                                                "children": [
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
                                                              "value": "mm",
                                                              "name": "mm"
                                                            },
                                                            {
                                                              "value": "cm",
                                                              "name": "cm"
                                                            },
                                                            {
                                                              "value": "m",
                                                              "name": "m"
                                                            },
                                                            {
                                                              "value": "km",
                                                              "name": "km"
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
                                              "description": "right",
                                              "type": "container",
                                              "class": "flex",
                                              "children": [
                                                {
                                                  "description": "lock",
                                                  "type": "annotatorEvent",
                                                  "eventType": "lockMeasurement",
                                                  "measureType": "scale",
                                                  "key": "images",
                                                  "elementType": "toggleButton",
                                                  "parentClass": "flex justify-center pt-1 pr-1",
                                                  "children": [
                                                    {
                                                      "description": "stage1",
                                                      "value": false,
                                                      "class": "",
                                                      "children": [
                                                        {
                                                          "type": "element",
                                                          "elementType": "staticHtmlTag",
                                                          "text": "lock_open",
                                                          "class": "material-symbols-outlined text-[20px] text-gray-500 hover:text-amber-400 cursor-pointer"
                                                        }
                                                      ]
                                                    },
                                                    {
                                                      "description": "stage2",
                                                      "value": true,
                                                      "class": "",
                                                      "children": [
                                                        {
                                                          "type": "element",
                                                          "elementType": "staticHtmlTag",
                                                          "text": "lock",
                                                          "class": "material-symbols-outlined text-[20px] text-amber-400 cursor-pointer"
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                },
                                                {
                                                  "description": "delete",
                                                  "type": "container",
                                                  "class": "flex justify-center pt-[5px] pr-4",
                                                  "children": [
                                                    {
                                                      "description": "container",
                                                      "type": "container",
                                                      "class": "",
                                                      "children": [
                                                        {
                                                          "type": "annotatorEvent",
                                                          "eventType": "deleteMeasurement",
                                                          "measureType": "scale",
                                                          "key": "images",
                                                          "elementType": "staticHtmlTag",
                                                          "text": "delete_forever",
                                                          "class": "material-symbols-outlined text-[20px] text-gray-500 hover:text-amber-400 cursor-pointer"
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
                                          "description": "divider",
                                          "type": "container",
                                          "class": "text-cardHeaderTitle flex pb-2",
                                          "children": [
                                            {
                                              "type": "element",
                                              "elementType": "staticHtmlTag",
                                              "tag": "div",
                                              "text": " ",
                                              "class": "w-full border border-gray-700 mr-4 mt-4"
                                            }
                                          ]
                                        }
                                      ],
                                      "line": [
                                        {
                                          "description": "line measurement",
                                          "type": "element",
                                          "elementType": "staticHtmlTag",
                                          "tag": "div",
                                          "text": "line measurement",
                                          "class": "text-12 w-full text-white"
                                        },
                                        {
                                          "description": "measure row 1 elements",
                                          "type": "container",
                                          "class": "flex justify-between",
                                          "children": [
                                            {
                                              "description": "left",
                                              "type": "container",
                                              "class": "flex",
                                              "children": [
                                                {
                                                  "description": "rectangle",
                                                  "type": "container",
                                                  "tag": "div",
                                                  "class": "pl-0 pt-2 w-10 whitespace-nowrap font-normal text-gray-900 text-12",
                                                  "children": [
                                                    {
                                                      "description": "rectColor",
                                                      "type": "element",
                                                      "elementType": "staticHtmlTag",
                                                      "tag": "rectColor",
                                                      "width": 20,
                                                      "height": 20,
                                                      "text": "fc17db"
                                                    }
                                                  ]
                                                },
                                                {
                                                  "description": "measure value",
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "assignedKey": "index:length",
                                                  "tag": "div",
                                                  "class": "text-13 w-auto pt-2 text-white font-bold"
                                                },
                                                {
                                                  "description": "measure unit",
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "assignedKey": "noIndex:lengthUnit",
                                                  "class": "text-13 w-10 pt-2 text-white font-bold pl-1"
                                                }
                                              ]
                                            },
                                            {
                                              "description": "right",
                                              "type": "container",
                                              "class": "flex",
                                              "children": [
                                                {
                                                  "description": "lock",
                                                  "type": "annotatorEvent",
                                                  "eventType": "lockMeasurement",
                                                  "key": "images",
                                                  "elementType": "toggleButton",
                                                  "parentClass": "flex justify-center pt-1 pr-1",
                                                  "children": [
                                                    {
                                                      "description": "stage1",
                                                      "value": false,
                                                      "class": "",
                                                      "children": [
                                                        {
                                                          "type": "element",
                                                          "elementType": "staticHtmlTag",
                                                          "text": "lock_open",
                                                          "class": "material-symbols-outlined text-[20px] text-gray-500 hover:text-amber-400 cursor-pointer"
                                                        }
                                                      ]
                                                    },
                                                    {
                                                      "description": "stage2",
                                                      "value": true,
                                                      "class": "",
                                                      "children": [
                                                        {
                                                          "type": "element",
                                                          "elementType": "staticHtmlTag",
                                                          "text": "lock",
                                                          "class": "material-symbols-outlined text-[20px] text-amber-400 cursor-pointer"
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                },
                                                {
                                                  "description": "delete",
                                                  "type": "container",
                                                  "class": "flex justify-center pt-[5px] pr-4",
                                                  "children": [
                                                    {
                                                      "description": "container",
                                                      "type": "container",
                                                      "class": "",
                                                      "children": [
                                                        {
                                                          "type": "annotatorEvent",
                                                          "eventType": "deleteMeasurement",
                                                          "key": "images",
                                                          "elementType": "staticHtmlTag",
                                                          "text": "delete_forever",
                                                          "class": "material-symbols-outlined text-[20px] text-gray-500 hover:text-amber-400 cursor-pointer"
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
                                          "description": "measure row 2 elements",
                                          "type": "container",
                                          "class": "pt-2 flex justify-between",
                                          "children": [
                                            {
                                              "description": "left",
                                              "type": "container",
                                              "class": "flex",
                                              "children": [
                                                {
                                                  "description": "listbox select",
                                                  "type": "container",
                                                  "containerType": "div",
                                                  "class": "w-[180px] pl-4",
                                                  "children": [
                                                    {
                                                      "description": "listbox select input",
                                                      "conditionArray": [
                                                        {
                                                          "cd": "INI, k, index:partLengthText, empty"
                                                        }
                                                      ],
                                                      "type": "element",
                                                      "elementType": "listboxSelectInput",
                                                      "value": "value",
                                                      "key": "index:selectionHelperValue",
                                                      "writeValueAsKey": true,
                                                      "value4Key": "index:length",
                                                      "autoSave": false,
                                                      "class": "relative",
                                                      "listbox": {
                                                        "listboxButton": {
                                                          "placeholder": "---",
                                                          "class": "relative flex items-center w-full h-selHeight cursor-pointer bg-transparent border border-gray-600 text-white hover:text-amber-400 rounded-ibr p-2 pl-3 pr-10 text-left sm:text-12",
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
                                                                  "class": "block truncate font-bold"
                                                                },
                                                                {
                                                                  "type": "element",
                                                                  "elementType": "staticHtmlTag",
                                                                  "tag": "span",
                                                                  "text": "unfold_more",
                                                                  "class": "material-symbols-outlined text-iicon font-normal pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        },
                                                        "listboxOptionsContainer": {
                                                          "class": "absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-ibr border-l border-r border-b bg-gray-100 py-1 text-base  sm:text-sm",
                                                          "listboxOptions": {
                                                            "classActive": "bg-gray-400 text-black",
                                                            "classInactive": "text-gray-900",
                                                            "class": "relative cursor-default select-none py-1 pl-2 pr-4 text-11",
                                                            "children": [
                                                              {
                                                                "type": "container",
                                                                "children": [
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
                                                              "value": "partLength",
                                                              "name": "part length"
                                                            },
                                                            {
                                                              "value": "maxPartLength",
                                                              "name": "max part length"
                                                            },
                                                            {
                                                              "value": "partWidth",
                                                              "name": "part width"
                                                            },
                                                            {
                                                              "value": "partHeight",
                                                              "name": "part height"
                                                            },
                                                            {
                                                              "value": "partDiameter",
                                                              "name": "part diameter"
                                                            }
                                                          ]
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                },
                                                {
                                                  "description": "keyname input",
                                                  "type": "element",
                                                  "elementType": "textInput",
                                                  "key": "index:partLengthText",
                                                  "writeValueAsKey": true,
                                                  "value4Key": "index:length",
                                                  "updateEvent": "onChange",
                                                  "autoSave": false,
                                                  "class": "mt-0 block w-full bg-transparent border border-gray-600 py-0.5 px-3 sm:text-12 text-white ml-4 mr-6"
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "description": "measure row 3 elements",
                                          "type": "container",
                                          "class": "pt-2 flex justify-between",
                                          "children": [
                                            {
                                              "description": "left",
                                              "type": "container",
                                              "class": "flex",
                                              "children": [
                                                {
                                                  "description": "description input",
                                                  "type": "element",
                                                  "placeholder": "description",
                                                  "elementType": "textInput",
                                                  "key": "index:description",
                                                  "class": "mt-0 block w-full bg-transparent border border-gray-600 py-0.5 px-3 sm:text-12 text-white ml-4 mr-6"
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "description": "divider",
                                          "type": "container",
                                          "class": "text-cardHeaderTitle flex mt-2 pb-2",
                                          "children": [
                                            {
                                              "type": "element",
                                              "elementType": "staticHtmlTag",
                                              "tag": "div",
                                              "text": " ",
                                              "class": "w-full border border-gray-700 mr-4 mt-4"
                                            }
                                          ]
                                        }
                                      ],
                                      "angle": [
                                        {
                                          "description": "angle measurement",
                                          "type": "element",
                                          "elementType": "staticHtmlTag",
                                          "tag": "div",
                                          "text": "angle measurement",
                                          "class": "text-12 w-full text-white"
                                        },
                                        {
                                          "description": "measure row 1 elements",
                                          "type": "container",
                                          "class": "flex justify-between",
                                          "children": [
                                            {
                                              "description": "left",
                                              "type": "container",
                                              "class": "flex",
                                              "children": [
                                                {
                                                  "description": "rectangle",
                                                  "type": "container",
                                                  "tag": "div",
                                                  "class": "pl-0 pt-2 w-10 whitespace-nowrap font-normal text-gray-900 text-12",
                                                  "children": [
                                                    {
                                                      "description": "rectColor",
                                                      "type": "element",
                                                      "elementType": "staticHtmlTag",
                                                      "tag": "rectColor",
                                                      "width": 20,
                                                      "height": 20,
                                                      "text": "FF8000"
                                                    }
                                                  ]
                                                },
                                                {
                                                  "description": "angle value",
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "assignedKey": "index:angle",
                                                  "class": "text-13 w-auto pt-2 text-white font-bold"
                                                },
                                                {
                                                  "description": "measure unit",
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "º",
                                                  "class": "text-13 w-10 pt-2 pl-1 text-white font-bold"
                                                }
                                              ]
                                            },
                                            {
                                              "description": "right",
                                              "type": "container",
                                              "class": "flex",
                                              "children": [
                                                {
                                                  "description": "lock",
                                                  "type": "annotatorEvent",
                                                  "eventType": "lockMeasurement",
                                                  "key": "images",
                                                  "elementType": "toggleButton",
                                                  "parentClass": "flex justify-center pt-1 pr-1",
                                                  "children": [
                                                    {
                                                      "description": "stage1",
                                                      "value": false,
                                                      "class": "",
                                                      "children": [
                                                        {
                                                          "type": "element",
                                                          "elementType": "staticHtmlTag",
                                                          "text": "lock_open",
                                                          "class": "material-symbols-outlined text-[20px] text-gray-500 hover:text-amber-400 cursor-pointer"
                                                        }
                                                      ]
                                                    },
                                                    {
                                                      "description": "stage2",
                                                      "value": true,
                                                      "class": "",
                                                      "children": [
                                                        {
                                                          "type": "element",
                                                          "elementType": "staticHtmlTag",
                                                          "text": "lock",
                                                          "class": "material-symbols-outlined text-[20px] text-amber-400 cursor-pointer"
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                },
                                                {
                                                  "description": "delete",
                                                  "type": "container",
                                                  "class": "flex justify-center pt-[5px] pr-4",
                                                  "children": [
                                                    {
                                                      "description": "container",
                                                      "type": "container",
                                                      "class": "",
                                                      "children": [
                                                        {
                                                          "type": "annotatorEvent",
                                                          "eventType": "deleteMeasurement",
                                                          "key": "images",
                                                          "elementType": "staticHtmlTag",
                                                          "text": "delete_forever",
                                                          "class": "material-symbols-outlined text-[20px] text-gray-500 hover:text-amber-400 cursor-pointer"
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
                                          "description": "measure row 2 elements",
                                          "type": "container",
                                          "class": "pt-2 flex justify-between",
                                          "children": [
                                            {
                                              "description": "left",
                                              "type": "container",
                                              "class": "flex",
                                              "children": [
                                                {
                                                  "description": "angle input",
                                                  "type": "element",
                                                  "elementType": "textInput",
                                                  "key": "xtraKey3",
                                                  "class": "mt-0 block w-full bg-transparent border border-gray-600 py-0.5 px-3 sm:text-12 text-white ml-4 mr-6"
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "description": "divider",
                                          "type": "container",
                                          "class": "text-cardHeaderTitle flex pb-2",
                                          "children": [
                                            {
                                              "type": "element",
                                              "elementType": "staticHtmlTag",
                                              "tag": "div",
                                              "text": " ",
                                              "class": "w-full border border-gray-700 mr-4 mt-4"
                                            }
                                          ]
                                        }
                                      ],
                                      "measurePolygon": [
                                        {
                                          "description": "measurePolygon measurement",
                                          "type": "element",
                                          "elementType": "staticHtmlTag",
                                          "tag": "div",
                                          "text": "polygone measurement",
                                          "class": "text-12 w-full text-white"
                                        },
                                        {
                                          "description": "measure row 1 elements",
                                          "type": "container",
                                          "class": "flex justify-between",
                                          "children": [
                                            {
                                              "description": "left",
                                              "type": "container",
                                              "class": "flex",
                                              "children": [
                                                {
                                                  "description": "rectangle",
                                                  "type": "container",
                                                  "tag": "div",
                                                  "class": "pl-0 pt-2 w-10 whitespace-nowrap font-normal text-gray-900 text-12",
                                                  "children": [
                                                    {
                                                      "description": "rectColor",
                                                      "type": "element",
                                                      "elementType": "staticHtmlTag",
                                                      "tag": "rectColor",
                                                      "width": 20,
                                                      "height": 20,
                                                      "text": "fc17db"
                                                    }
                                                  ]
                                                },
                                                {
                                                  "description": "measure value",
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "assignedKey": "index:area",
                                                  "tag": "div",
                                                  "class": "text-13 w-auto pt-2 text-white font-bold"
                                                },
                                                {
                                                  "description": "measure unit",
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "assignedKey": "noIndex:lengthUnit",
                                                  "class": "text-13 w-10 pt-2 text-white font-bold pl-1"
                                                }
                                              ]
                                            },
                                            {
                                              "description": "right",
                                              "type": "container",
                                              "class": "flex",
                                              "children": [
                                                {
                                                  "description": "lock",
                                                  "type": "annotatorEvent",
                                                  "eventType": "lockMeasurement",
                                                  "key": "images",
                                                  "elementType": "toggleButton",
                                                  "parentClass": "flex justify-center pt-1 pr-1",
                                                  "children": [
                                                    {
                                                      "description": "stage1",
                                                      "value": false,
                                                      "class": "",
                                                      "children": [
                                                        {
                                                          "type": "element",
                                                          "elementType": "staticHtmlTag",
                                                          "text": "lock_open",
                                                          "class": "material-symbols-outlined text-[20px] text-gray-500 hover:text-amber-400 cursor-pointer"
                                                        }
                                                      ]
                                                    },
                                                    {
                                                      "description": "stage2",
                                                      "value": true,
                                                      "class": "",
                                                      "children": [
                                                        {
                                                          "type": "element",
                                                          "elementType": "staticHtmlTag",
                                                          "text": "lock",
                                                          "class": "material-symbols-outlined text-[20px] text-amber-400 cursor-pointer"
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                },
                                                {
                                                  "description": "delete",
                                                  "type": "container",
                                                  "class": "flex justify-center pt-[5px] pr-4",
                                                  "children": [
                                                    {
                                                      "description": "container",
                                                      "type": "container",
                                                      "class": "",
                                                      "children": [
                                                        {
                                                          "type": "annotatorEvent",
                                                          "eventType": "deleteMeasurement",
                                                          "key": "images",
                                                          "elementType": "staticHtmlTag",
                                                          "text": "delete_forever",
                                                          "class": "material-symbols-outlined text-[20px] text-gray-500 hover:text-amber-400 cursor-pointer"
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
                                          "description": "measure row 2 elements",
                                          "type": "container",
                                          "class": "pt-2 flex justify-between",
                                          "children": [
                                            {
                                              "description": "left",
                                              "type": "container",
                                              "class": "flex",
                                              "children": [
                                                {
                                                  "description": "listbox select",
                                                  "type": "container",
                                                  "containerType": "div",
                                                  "class": "w-[180px] pl-4",
                                                  "children": [
                                                    {
                                                      "description": "listbox select input",
                                                      "conditionArray": [
                                                        {
                                                          "cd": "INI, k, noIndex:partLengthText, empty"
                                                        }
                                                      ],
                                                      "type": "element",
                                                      "elementType": "listboxSelectInput",
                                                      "value": "value",
                                                      "key": "index:selectionHelperValue",
                                                      "writeValueAsKey": true,
                                                      "value4Key": "index:length",
                                                      "autoSave": false,
                                                      "class": "relative",
                                                      "listbox": {
                                                        "listboxButton": {
                                                          "placeholder": "---",
                                                          "class": "relative flex items-center w-full h-selHeight cursor-pointer bg-transparent border border-gray-600 text-white hover:text-amber-400 rounded-ibr p-2 pl-3 pr-10 text-left sm:text-12",
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
                                                                  "class": "block truncate font-bold"
                                                                },
                                                                {
                                                                  "type": "element",
                                                                  "elementType": "staticHtmlTag",
                                                                  "tag": "span",
                                                                  "text": "unfold_more",
                                                                  "class": "material-symbols-outlined text-iicon font-normal pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        },
                                                        "listboxOptionsContainer": {
                                                          "class": "absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-ibr border-l border-r border-b bg-gray-100 py-1 text-base  sm:text-sm",
                                                          "listboxOptions": {
                                                            "classActive": "bg-gray-400 text-black",
                                                            "classInactive": "text-gray-900",
                                                            "class": "relative cursor-default select-none py-1 pl-2 pr-4 text-11",
                                                            "children": [
                                                              {
                                                                "type": "container",
                                                                "children": [
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
                                                              "value": "partsLength",
                                                              "name": "parts length"
                                                            },
                                                            {
                                                              "value": "maxPartsLength",
                                                              "name": "max parts length"
                                                            },
                                                            {
                                                              "value": "partsWidth",
                                                              "name": "parts width"
                                                            },
                                                            {
                                                              "value": "partsHeight",
                                                              "name": "parts height"
                                                            },
                                                            {
                                                              "value": "partsDiameter",
                                                              "name": "parts diameter"
                                                            }
                                                          ]
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                },
                                                {
                                                  "description": "keyname input",
                                                  "type": "element",
                                                  "elementType": "textInput",
                                                  "key": "noIndex:partLengthText",
                                                  "writeValueAsKey": true,
                                                  "value4Key": "index:length",
                                                  "autoSave": false,
                                                  "class": "mt-0 block w-full bg-transparent border border-gray-600 py-0.5 px-3 sm:text-12 text-white ml-4 mr-6"
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "description": "measure row 3 elements",
                                          "type": "container",
                                          "class": "pt-2 flex justify-between",
                                          "children": [
                                            {
                                              "description": "left",
                                              "type": "container",
                                              "class": "flex",
                                              "children": [
                                                {
                                                  "description": "description input",
                                                  "type": "element",
                                                  "placeholder": "description",
                                                  "elementType": "textInput",
                                                  "key": "index:description",
                                                  "class": "mt-0 block w-full bg-transparent border border-gray-600 py-0.5 px-3 sm:text-12 text-white ml-4 mr-6"
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "description": "divider",
                                          "type": "container",
                                          "class": "text-cardHeaderTitle flex mt-2 pb-2",
                                          "children": [
                                            {
                                              "type": "element",
                                              "elementType": "staticHtmlTag",
                                              "tag": "div",
                                              "text": " ",
                                              "class": "w-full border border-gray-700 mr-4 mt-4"
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  }
                                ]
                              },
                              {
                                "description": "tab 2 container",
                                "type": "container",
                                "tabID": "tab002",
                                "tabGroupID": "annotatorGroup001",
                                "tabContent": true,
                                "class": "text-left",
                                "children": [
                                  {
                                    "description": "headline measurements",
                                    "type": "element",
                                    "elementType": "staticHtmlTag",
                                    "tag": "div",
                                    "text": "view drawings",
                                    "class": "text-sm font-bold py-4 pl-4 text-white border-t border-b border-gray-600"
                                  },
                                  {
                                    "description": "annotator drawings",
                                    "type": "annotatorMeasurements",
                                    "assignedKey": "images",
                                    "class": "pl-4",
                                    "measureTool": {
                                      "rectangle": [
                                        {
                                          "description": "drawing row 1 elements",
                                          "type": "container",
                                          "class": "flex justify-between",
                                          "children": [
                                            {
                                              "description": "left",
                                              "type": "container",
                                              "class": "flex space-x-4",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "text": "rectangle",
                                                  "class": "material-symbols-outlined text-[32px] pt-1 text-white"
                                                },
                                                {
                                                  "description": "rectangle",
                                                  "type": "container",
                                                  "tag": "div",
                                                  "class": "pl-0 pt-2.5 w-10 whitespace-nowrap font-normal text-gray-900 text-12",
                                                  "children": [
                                                    {
                                                      "description": "rectColor",
                                                      "type": "element",
                                                      "elementType": "staticHtmlTag",
                                                      "tag": "rectColor",
                                                      "width": 20,
                                                      "height": 20,
                                                      "text": "fc17db"
                                                    }
                                                  ]
                                                }
                                              ]
                                            },
                                            {
                                              "description": "right",
                                              "type": "container",
                                              "class": "flex mt-1",
                                              "children": [
                                                {
                                                  "description": "lock",
                                                  "type": "annotatorEvent",
                                                  "eventType": "lockMeasurement",
                                                  "key": "images",
                                                  "elementType": "toggleButton",
                                                  "parentClass": "flex justify-center pt-1.5 pr-1",
                                                  "children": [
                                                    {
                                                      "description": "stage1",
                                                      "value": false,
                                                      "class": "",
                                                      "children": [
                                                        {
                                                          "type": "element",
                                                          "elementType": "staticHtmlTag",
                                                          "text": "lock_open",
                                                          "class": "material-symbols-outlined text-[18px] text-gray-500 hover:text-amber-400 cursor-pointer"
                                                        }
                                                      ]
                                                    },
                                                    {
                                                      "description": "stage2",
                                                      "value": true,
                                                      "class": "",
                                                      "children": [
                                                        {
                                                          "type": "element",
                                                          "elementType": "staticHtmlTag",
                                                          "text": "lock",
                                                          "class": "material-symbols-outlined text-[18px] text-amber-400 cursor-pointer"
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                },
                                                {
                                                  "description": "delete",
                                                  "type": "container",
                                                  "class": "flex justify-center pt-[5px] pr-4",
                                                  "children": [
                                                    {
                                                      "description": "container",
                                                      "type": "container",
                                                      "class": "",
                                                      "children": [
                                                        {
                                                          "type": "annotatorEvent",
                                                          "eventType": "deleteMeasurement",
                                                          "key": "images",
                                                          "elementType": "staticHtmlTag",
                                                          "text": "delete_forever",
                                                          "class": "material-symbols-outlined text-[20px] text-gray-500 hover:text-amber-400 cursor-pointer"
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
                                          "description": "divider",
                                          "type": "container",
                                          "class": "text-cardHeaderTitle flex",
                                          "children": [
                                            {
                                              "type": "element",
                                              "elementType": "staticHtmlTag",
                                              "tag": "div",
                                              "text": " ",
                                              "class": "w-full border border-gray-700 mr-4 mt-1"
                                            }
                                          ]
                                        }
                                      ],
                                      "circle": [
                                        {
                                          "description": "drawing row 1 elements",
                                          "type": "container",
                                          "class": "flex justify-between",
                                          "children": [
                                            {
                                              "description": "left",
                                              "type": "container",
                                              "class": "flex space-x-4",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "text": "circle",
                                                  "class": "material-symbols-outlined text-[32px] pt-1 text-white"
                                                },
                                                {
                                                  "description": "rectangle",
                                                  "type": "container",
                                                  "tag": "div",
                                                  "class": "pl-0 pt-2.5 w-10 whitespace-nowrap font-normal text-gray-900 text-12",
                                                  "children": [
                                                    {
                                                      "description": "rectColor",
                                                      "type": "element",
                                                      "elementType": "staticHtmlTag",
                                                      "tag": "rectColor",
                                                      "width": 20,
                                                      "height": 20,
                                                      "text": "fc17db"
                                                    }
                                                  ]
                                                }
                                              ]
                                            },
                                            {
                                              "description": "right",
                                              "type": "container",
                                              "class": "flex mt-1",
                                              "children": [
                                                {
                                                  "description": "lock",
                                                  "type": "annotatorEvent",
                                                  "eventType": "lockMeasurement",
                                                  "key": "images",
                                                  "elementType": "toggleButton",
                                                  "parentClass": "flex justify-center pt-1.5 pr-1",
                                                  "children": [
                                                    {
                                                      "description": "stage1",
                                                      "value": false,
                                                      "class": "",
                                                      "children": [
                                                        {
                                                          "type": "element",
                                                          "elementType": "staticHtmlTag",
                                                          "text": "lock_open",
                                                          "class": "material-symbols-outlined text-[18px] text-gray-500 hover:text-amber-400 cursor-pointer"
                                                        }
                                                      ]
                                                    },
                                                    {
                                                      "description": "stage2",
                                                      "value": true,
                                                      "class": "",
                                                      "children": [
                                                        {
                                                          "type": "element",
                                                          "elementType": "staticHtmlTag",
                                                          "text": "lock",
                                                          "class": "material-symbols-outlined text-[18px] text-amber-400 cursor-pointer"
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                },
                                                {
                                                  "description": "delete",
                                                  "type": "container",
                                                  "class": "flex justify-center pt-[5px] pr-4",
                                                  "children": [
                                                    {
                                                      "description": "container",
                                                      "type": "container",
                                                      "class": "",
                                                      "children": [
                                                        {
                                                          "type": "annotatorEvent",
                                                          "eventType": "deleteMeasurement",
                                                          "key": "images",
                                                          "elementType": "staticHtmlTag",
                                                          "text": "delete_forever",
                                                          "class": "material-symbols-outlined text-[20px] text-gray-500 hover:text-amber-400 cursor-pointer"
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
                                          "description": "divider",
                                          "type": "container",
                                          "class": "text-cardHeaderTitle flex",
                                          "children": [
                                            {
                                              "type": "element",
                                              "elementType": "staticHtmlTag",
                                              "tag": "div",
                                              "text": " ",
                                              "class": "w-full border border-gray-700 mr-4 mt-1"
                                            }
                                          ]
                                        }
                                      ],
                                      "polygon": [
                                        {
                                          "description": "drawing row 1 elements",
                                          "type": "container",
                                          "class": "flex justify-between",
                                          "children": [
                                            {
                                              "description": "left",
                                              "type": "container",
                                              "class": "flex space-x-4",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "text": "polyline",
                                                  "class": "material-symbols-outlined text-[32px] pt-1 text-white"
                                                },
                                                {
                                                  "type": "container",
                                                  "class": "flex justify-center items-center  space-x-4",
                                                  "children": [
                                                    {
                                                      "description": "rectangle",
                                                      "type": "container",
                                                      "tag": "div",
                                                      "class": "w-[19px] h-[20px] bg-white whitespace-nowrap font-normal text-gray-900 text-12",
                                                      "children": [
                                                        {
                                                          "description": "rectColor",
                                                          "type": "element",
                                                          "elementType": "staticHtmlTag",
                                                          "tag": "rectColor",
                                                          "width": 20,
                                                          "height": 20,
                                                          "assignedKey": "index:fillColor",
                                                          "class": "absolute top-0 left-0bg-white"
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                }
                                              ]
                                            },
                                            {
                                              "description": "right",
                                              "type": "container",
                                              "class": "flex mt-1",
                                              "children": [
                                                {
                                                  "description": "lock",
                                                  "type": "annotatorEvent",
                                                  "eventType": "lockMeasurement",
                                                  "key": "images",
                                                  "elementType": "toggleButton",
                                                  "parentClass": "flex justify-center pt-1.5 pr-1",
                                                  "children": [
                                                    {
                                                      "description": "stage1",
                                                      "value": false,
                                                      "class": "",
                                                      "children": [
                                                        {
                                                          "type": "element",
                                                          "elementType": "staticHtmlTag",
                                                          "text": "lock_open",
                                                          "class": "material-symbols-outlined text-[18px] text-gray-500 hover:text-amber-400 cursor-pointer"
                                                        }
                                                      ]
                                                    },
                                                    {
                                                      "description": "stage2",
                                                      "value": true,
                                                      "class": "",
                                                      "children": [
                                                        {
                                                          "type": "element",
                                                          "elementType": "staticHtmlTag",
                                                          "text": "lock",
                                                          "class": "material-symbols-outlined text-[18px] text-amber-400 cursor-pointer"
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                },
                                                {
                                                  "description": "delete",
                                                  "type": "container",
                                                  "class": "flex justify-center pt-[5px] pr-4",
                                                  "children": [
                                                    {
                                                      "description": "container",
                                                      "type": "container",
                                                      "class": "",
                                                      "children": [
                                                        {
                                                          "type": "annotatorEvent",
                                                          "eventType": "deleteMeasurement",
                                                          "key": "images",
                                                          "elementType": "staticHtmlTag",
                                                          "text": "delete_forever",
                                                          "class": "material-symbols-outlined text-[20px] text-gray-500 hover:text-amber-400 cursor-pointer"
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
                                          "description": "divider",
                                          "type": "container",
                                          "class": "text-cardHeaderTitle flex",
                                          "children": [
                                            {
                                              "type": "element",
                                              "elementType": "staticHtmlTag",
                                              "tag": "div",
                                              "text": " ",
                                              "class": "w-full border border-gray-700 mr-4 mt-1"
                                            }
                                          ]
                                        }
                                      ],
                                      "dotCircle": [
                                        {
                                          "description": "drawing row 1 elements",
                                          "type": "container",
                                          "class": "flex justify-between",
                                          "children": [
                                            {
                                              "description": "left",
                                              "type": "container",
                                              "class": "flex space-x-4",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "text": "radio_button_checked",
                                                  "class": "material-symbols-outlined text-[32px] pt-1 text-white"
                                                },
                                                {
                                                  "description": "rectangle",
                                                  "type": "container",
                                                  "tag": "div",
                                                  "class": "pl-0 pt-2.5 w-10 whitespace-nowrap font-normal text-gray-900 text-12",
                                                  "children": [
                                                    {
                                                      "description": "rectColor",
                                                      "type": "element",
                                                      "elementType": "staticHtmlTag",
                                                      "tag": "rectColor",
                                                      "width": 20,
                                                      "height": 20,
                                                      "text": "fc17db"
                                                    }
                                                  ]
                                                }
                                              ]
                                            },
                                            {
                                              "description": "right",
                                              "type": "container",
                                              "class": "flex mt-1",
                                              "children": [
                                                {
                                                  "description": "lock",
                                                  "type": "annotatorEvent",
                                                  "eventType": "lockMeasurement",
                                                  "key": "images",
                                                  "elementType": "toggleButton",
                                                  "parentClass": "flex justify-center pt-1.5 pr-1",
                                                  "children": [
                                                    {
                                                      "description": "stage1",
                                                      "value": false,
                                                      "class": "",
                                                      "children": [
                                                        {
                                                          "type": "element",
                                                          "elementType": "staticHtmlTag",
                                                          "text": "lock_open",
                                                          "class": "material-symbols-outlined text-[18px] text-gray-500 hover:text-amber-400 cursor-pointer"
                                                        }
                                                      ]
                                                    },
                                                    {
                                                      "description": "stage2",
                                                      "value": true,
                                                      "class": "",
                                                      "children": [
                                                        {
                                                          "type": "element",
                                                          "elementType": "staticHtmlTag",
                                                          "text": "lock",
                                                          "class": "material-symbols-outlined text-[18px] text-amber-400 cursor-pointer"
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                },
                                                {
                                                  "description": "delete",
                                                  "type": "container",
                                                  "class": "flex justify-center pt-[5px] pr-4",
                                                  "children": [
                                                    {
                                                      "description": "container",
                                                      "type": "container",
                                                      "class": "",
                                                      "children": [
                                                        {
                                                          "type": "annotatorEvent",
                                                          "eventType": "deleteMeasurement",
                                                          "key": "images",
                                                          "elementType": "staticHtmlTag",
                                                          "text": "delete_forever",
                                                          "class": "material-symbols-outlined text-[20px] text-gray-500 hover:text-amber-400 cursor-pointer"
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
                                          "description": "divider",
                                          "type": "container",
                                          "class": "text-cardHeaderTitle flex",
                                          "children": [
                                            {
                                              "type": "element",
                                              "elementType": "staticHtmlTag",
                                              "tag": "div",
                                              "text": " ",
                                              "class": "w-full border border-gray-700 mr-4 mt-1"
                                            }
                                          ]
                                        }
                                      ],
                                      "freehand": [
                                        {
                                          "description": "drawing row 1 elements",
                                          "type": "container",
                                          "class": "flex justify-between",
                                          "children": [
                                            {
                                              "description": "left",
                                              "type": "container",
                                              "class": "flex space-x-4",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "text": "draw",
                                                  "class": "material-symbols-outlined text-[32px] pt-1 text-white"
                                                },
                                                {
                                                  "description": "rectangle",
                                                  "type": "container",
                                                  "tag": "div",
                                                  "class": "pl-0 pt-2.5 w-10 whitespace-nowrap font-normal text-gray-900 text-12",
                                                  "children": [
                                                    {
                                                      "description": "rectColor",
                                                      "type": "element",
                                                      "elementType": "staticHtmlTag",
                                                      "tag": "rectColor",
                                                      "width": 20,
                                                      "height": 20,
                                                      "text": "fc17db"
                                                    }
                                                  ]
                                                }
                                              ]
                                            },
                                            {
                                              "description": "right",
                                              "type": "container",
                                              "class": "flex mt-1",
                                              "children": [
                                                {
                                                  "description": "lock",
                                                  "type": "annotatorEvent",
                                                  "eventType": "lockMeasurement",
                                                  "key": "images",
                                                  "elementType": "toggleButton",
                                                  "parentClass": "flex justify-center pt-1.5 pr-1",
                                                  "children": [
                                                    {
                                                      "description": "stage1",
                                                      "value": false,
                                                      "class": "",
                                                      "children": [
                                                        {
                                                          "type": "element",
                                                          "elementType": "staticHtmlTag",
                                                          "text": "lock_open",
                                                          "class": "material-symbols-outlined text-[18px] text-gray-500 hover:text-amber-400 cursor-pointer"
                                                        }
                                                      ]
                                                    },
                                                    {
                                                      "description": "stage2",
                                                      "value": true,
                                                      "class": "",
                                                      "children": [
                                                        {
                                                          "type": "element",
                                                          "elementType": "staticHtmlTag",
                                                          "text": "lock",
                                                          "class": "material-symbols-outlined text-[18px] text-amber-400 cursor-pointer"
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                },
                                                {
                                                  "description": "delete",
                                                  "type": "container",
                                                  "class": "flex justify-center pt-[5px] pr-4",
                                                  "children": [
                                                    {
                                                      "description": "container",
                                                      "type": "container",
                                                      "class": "",
                                                      "children": [
                                                        {
                                                          "type": "annotatorEvent",
                                                          "eventType": "deleteMeasurement",
                                                          "key": "images",
                                                          "elementType": "staticHtmlTag",
                                                          "text": "delete_forever",
                                                          "class": "material-symbols-outlined text-[20px] text-gray-500 hover:text-amber-400 cursor-pointer"
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
                                          "description": "divider",
                                          "type": "container",
                                          "class": "text-cardHeaderTitle flex",
                                          "children": [
                                            {
                                              "type": "element",
                                              "elementType": "staticHtmlTag",
                                              "tag": "div",
                                              "text": " ",
                                              "class": "w-full border border-gray-700 mr-4 mt-1"
                                            }
                                          ]
                                        }
                                      ]
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
            "description": "card1 dialog navision Datensatz ",
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
                            "text": "Navision Datensatz",
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
                            "description": "oem",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8 ",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "OEM",
                                "class": "text-12 w-40 font-bold pl-8 pt-2"
                              },
                              {
                                "type": "element",
                                "elementType": "textInput",
                                "key": "oem",
                                "class": "w-1/3 ml-8 py-1 px-2 sm:text-13 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 border-gray-300 focus:border-b-2 focus:border-gray-400"
                              }
                            ]
                          },
                          {
                            "description": "model",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8 ",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Model",
                                "class": "text-12 w-40 font-bold pl-8 pt-2"
                              },
                              {
                                "type": "element",
                                "elementType": "textInput",
                                "key": "model",
                                "class": "w-1/3 ml-8 py-1 px-2 sm:text-13 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 border-gray-300 focus:border-b-2 focus:border-gray-400"
                              }
                            ]
                          },
                          {
                            "description": "navisionDescription",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8 ",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Navision Desc.",
                                "class": "text-12 w-40 font-bold pl-8 pt-2"
                              },
                              {
                                "type": "element",
                                "elementType": "textInput",
                                "key": "navisionDescription",
                                "class": "w-1/3 ml-8 py-1 px-2 sm:text-13 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 border-gray-300 focus:border-b-2 focus:border-gray-400"
                              }
                            ]
                          },
                          {
                            "description": "articleNumber",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8 ",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Artikelnummer",
                                "class": "text-12 w-40 font-bold pl-8 pt-2"
                              },
                              {
                                "type": "element",
                                "elementType": "textInput",
                                "key": "articleNumber",
                                "class": "w-1/3 ml-8 py-1 px-2 sm:text-13 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 border-gray-300 focus:border-b-2 focus:border-gray-400"
                              }
                            ]
                          },
                          {
                            "description": "material",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8 ",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Material",
                                "class": "text-12 w-40 font-bold pl-8 pt-2"
                              },
                              {
                                "type": "element",
                                "elementType": "textInput",
                                "key": "material",
                                "class": "w-1/3 ml-8 py-1 px-2 sm:text-13 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 border-gray-300 focus:border-b-2 focus:border-gray-400"
                              }
                            ]
                          },
                          {
                            "description": "client",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8 ",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Kunde",
                                "class": "text-12 w-40 font-bold pl-8 pt-2"
                              },
                              {
                                "type": "element",
                                "elementType": "textInput",
                                "key": "client",
                                "class": "w-1/3 ml-8 py-1 px-2 sm:text-13 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 border-gray-300 focus:border-b-2 focus:border-gray-400"
                              }
                            ]
                          },
                          {
                            "description": "application",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8 ",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Anwendung",
                                "class": "text-12 w-40 font-bold pl-8 pt-2"
                              },
                              {
                                "type": "element",
                                "elementType": "textInput",
                                "key": "application",
                                "class": "w-1/3 ml-8 py-1 px-2 sm:text-13 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 border-gray-300 focus:border-b-2 focus:border-gray-400"
                              }
                            ]
                          },
                          {
                            "description": "baseLayer",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8 ",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Base Layer",
                                "class": "text-12 w-40 font-bold pl-8 pt-2"
                              },
                              {
                                "type": "element",
                                "elementType": "textInput",
                                "key": "baseLayer",
                                "class": "w-1/3 ml-8 py-1 px-2 sm:text-13 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 border-gray-300 focus:border-b-2 focus:border-gray-400"
                              }
                            ]
                          },
                          {
                            "description": "topLayer",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8 ",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Top Layer",
                                "class": "text-12 w-40 font-bold pl-8 pt-2"
                              },
                              {
                                "type": "element",
                                "elementType": "textInput",
                                "key": "topLayer",
                                "class": "w-1/3 ml-8 py-1 px-2 sm:text-13 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 border-gray-300 focus:border-b-2 focus:border-gray-400"
                              }
                            ]
                          },
                          {
                            "description": "heoProduct",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8 ",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "HEO COATING Product",
                                "class": "text-12 w-40 font-bold pl-8 pt-2"
                              },
                              {
                                "type": "element",
                                "elementType": "textInput",
                                "key": "heoProduct",
                                "class": "w-1/3 ml-8 py-1 px-2 sm:text-13 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 border-gray-300 focus:border-b-2 focus:border-gray-400"
                              }
                            ]
                          },
                          {
                            "description": "partsCategory",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8 ",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Bauteil-Kategorie",
                                "class": "text-12 w-40 font-bold pl-8 pt-2"
                              },
                              {
                                "type": "element",
                                "elementType": "textInput",
                                "key": "partsCategory",
                                "class": "w-1/3 ml-8 py-1 px-2 sm:text-13 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 border-gray-300 focus:border-b-2 focus:border-gray-400"
                              }
                            ]
                          },
                          {
                            "description": "card1 row 5",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Kommentar",
                                "class": "text-12 w-40 font-bold pl-8 pt-2"
                              },
                              {
                                "type": "element",
                                "elementType": "textareaInput",
                                "rows": 7,
                                "key": "comment",
                                "class": "w-2/3 ml-8 border border-gray-200 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none py-1 px-2 focus:outline-none focus:ring-gray-900 focus:border-b-2 focus:border-gray-400 sm:text-13"
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
            "description": "card2 dialog capacityCard",
            "type": "dialog",
            "key": "capacityCard",
            "toggleDialog": true,
            "dialogKey": "capacityCard",
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
                            "text": "Kapazitäten",
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
                            "dialogKey": "capacityCard"
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
                            "description": "oem",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8 ",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "OEM",
                                "class": "text-12 w-40 font-bold pl-8 pt-2"
                              },
                              {
                                "type": "element",
                                "elementType": "textInput",
                                "key": "oem",
                                "class": "w-1/3 ml-8 py-1 px-2 sm:text-13 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 border-gray-300 focus:border-b-2 focus:border-gray-400"
                              }
                            ]
                          },
                          {
                            "description": "model",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8 ",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Model",
                                "class": "text-12 w-40 font-bold pl-8 pt-2"
                              },
                              {
                                "type": "element",
                                "elementType": "textInput",
                                "key": "model",
                                "class": "w-1/3 ml-8 py-1 px-2 sm:text-13 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 border-gray-300 focus:border-b-2 focus:border-gray-400"
                              }
                            ]
                          },
                          {
                            "description": "navisionDescription",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8 ",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Navision Desc.",
                                "class": "text-12 w-40 font-bold pl-8 pt-2"
                              },
                              {
                                "type": "element",
                                "elementType": "textInput",
                                "key": "navisionDescription",
                                "class": "w-1/3 ml-8 py-1 px-2 sm:text-13 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 border-gray-300 focus:border-b-2 focus:border-gray-400"
                              }
                            ]
                          },
                          {
                            "description": "articleNumber",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8 ",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Artikelnummer",
                                "class": "text-12 w-40 font-bold pl-8 pt-2"
                              },
                              {
                                "type": "element",
                                "elementType": "textInput",
                                "key": "articleNumber",
                                "class": "w-1/3 ml-8 py-1 px-2 sm:text-13 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 border-gray-300 focus:border-b-2 focus:border-gray-400"
                              }
                            ]
                          },
                          {
                            "description": "material",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8 ",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Material",
                                "class": "text-12 w-40 font-bold pl-8 pt-2"
                              },
                              {
                                "type": "element",
                                "elementType": "textInput",
                                "key": "material",
                                "class": "w-1/3 ml-8 py-1 px-2 sm:text-13 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 border-gray-300 focus:border-b-2 focus:border-gray-400"
                              }
                            ]
                          },
                          {
                            "description": "zoom factor demo",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8 ",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "zoom factor",
                                "class": "text-12 w-40 font-bold pl-8 pt-2"
                              },
                              {
                                "type": "element",
                                "elementType": "textInput",
                                "textInputType": "number",
                                "key": "number:scaling.zoomFactor",
                                "class": "w-1/3 ml-8 py-1 px-2 sm:text-13 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 border-gray-300 focus:border-b-2 focus:border-gray-400"
                              }
                            ]
                          },
                          {
                            "description": "panYfromCenter",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8 ",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "posX from center",
                                "class": "text-12 w-40 font-bold pl-8 pt-2"
                              },
                              {
                                "type": "element",
                                "elementType": "textInput",
                                "textInputType": "number",
                                "key": "number:scaling.panXfromCenter",
                                "class": "w-1/3 ml-8 py-1 px-2 sm:text-13 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 border-gray-300 focus:border-b-2 focus:border-gray-400"
                              }
                            ]
                          },
                          {
                            "description": "panYfromCenter demo",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8 ",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "posY from center",
                                "class": "text-12 w-40 font-bold pl-8 pt-2"
                              },
                              {
                                "type": "element",
                                "elementType": "textInput",
                                "key": "number:scaling.panYfromCenter",
                                "class": "w-1/3 ml-8 py-1 px-2 sm:text-13 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 border-gray-300 focus:border-b-2 focus:border-gray-400"
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
            "description": "card2 big images",
            "type": "dialog",
            "key": "previewBig01",
            "toggleDialog": true,
            "dialogKey": "previewBig01",
            "class": "inline-block align-bottom text-left shadow-xl transform transition-all sm:align-middle w-[90vW] h-[90vH]",
            "children": [
              {
                "description": "dialog card",
                "type": "container",
                "class": "bg-black/70 w-full h-full",
                "children": [
                  {
                    "description": "dialog card header",
                    "type": "container",
                    "class": "flex justify-between pl-6 pr-4 py-2 border-b h-10 text-left bg-transparent",
                    "children": [
                      {
                        "description": "dialog card header title div",
                        "type": "container",
                        "class": "item w-full",
                        "children": [
                          {
                            "description": "toolsPane left",
                            "type": "container",
                            "class": "flex h-full pl-8",
                            "children": [
                              {
                                "description": "annotator tools",
                                "type": "annotatorEvent",
                                "eventType": "activateTool",
                                "elementType": "buttonGroup",
                                "buttonGroupId": "imagesActiveTools",
                                "key": "images",
                                "value": "object",
                                "values": [
                                  {
                                    "name": "selection",
                                    "value": "selectionTool"
                                  },
                                  {
                                    "name": "measure",
                                    "value": "measureTool",
                                    "opacity": 1,
                                    "strokeColor": "#0ec271",
                                    "strokeWidth": 1
                                  },
                                  {
                                    "name": "line",
                                    "value": "lineTool",
                                    "opacity": 1,
                                    "strokeColor": "#ee00ff",
                                    "strokeWidth": 1
                                  },
                                  {
                                    "name": "angle",
                                    "value": "angleTool",
                                    "opacity": 1,
                                    "strokeColor": "#ff0000",
                                    "strokeWidth": 1
                                  },
                                  {
                                    "name": "freehand",
                                    "value": "freehandTool",
                                    "opacity": 1,
                                    "strokeColor": "#ff0000",
                                    "strokeWidth": 2
                                  },
                                  {
                                    "name": "measurePolygon",
                                    "value": "measurePolygonTool",
                                    "fillColor": "#0000ff",
                                    "opacity": 0.4,
                                    "strokeColor": "#ff0000",
                                    "strokeWidth": 2
                                  },
                                  {
                                    "name": "polygon",
                                    "value": "polygonTool",
                                    "fillColor": "#0000ff",
                                    "opacity": 1,
                                    "strokeColor": "#ff0000",
                                    "strokeWidth": 1
                                  }
                                ],
                                "class": "flex h-full",
                                "children": [
                                  {
                                    "description": "selection tool",
                                    "type": "container",
                                    "class": "h-full w-[40px] border-r border-l border-gray-500",
                                    "children": [
                                      {
                                        "type": "container",
                                        "class": "text-white hover:text-amber-400 cursor-pointer w-full h-full flex justify-center items-center",
                                        "checkedClass": "text-amber-400",
                                        "children": [
                                          {
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "text": "back_hand",
                                            "class": "material-symbols-outlined text-[17px] cursor-pointer pt-0.5"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "description": "scale tool",
                                    "type": "container",
                                    "class": "h-full w-[40px] border-r border-l border-gray-500",
                                    "children": [
                                      {
                                        "type": "container",
                                        "class": "text-white hover:text-amber-400 cursor-pointer w-full h-full flex justify-center items-center",
                                        "checkedClass": "text-amber-400",
                                        "children": [
                                          {
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "text": "straighten",
                                            "class": "material-symbols-outlined text-[18px] cursor-pointer pt-1"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "description": "line tool",
                                    "type": "container",
                                    "class": "h-full w-[40px] border-r border-l border-gray-500",
                                    "children": [
                                      {
                                        "type": "container",
                                        "class": "text-white hover:text-amber-400 cursor-pointer w-full h-full flex justify-center items-center",
                                        "checkedClass": "text-amber-400",
                                        "children": [
                                          {
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "text": "drive_file_rename_outline",
                                            "class": "material-symbols-outlined text-[18px] cursor-pointer pt-1"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "description": "angle tool",
                                    "type": "container",
                                    "class": "h-full w-[40px] border-r border-l border-gray-500",
                                    "children": [
                                      {
                                        "type": "container",
                                        "class": "text-white hover:text-amber-400 cursor-pointer w-full h-full flex justify-center items-center",
                                        "checkedClass": "text-amber-400",
                                        "children": [
                                          {
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "text": "device_hub",
                                            "class": "material-symbols-outlined text-[18px] cursor-pointer pt-1"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "description": "freehand tool",
                                    "type": "container",
                                    "class": "h-full w-[40px] border-r border-l border-gray-500",
                                    "children": [
                                      {
                                        "type": "container",
                                        "class": "text-white hover:text-amber-400 cursor-pointer w-full h-full flex justify-center items-center",
                                        "checkedClass": "text-amber-400",
                                        "children": [
                                          {
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "text": "draw",
                                            "class": "material-symbols-outlined text-[18px] cursor-pointer pt-1"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "description": "measure polygon tool",
                                    "type": "container",
                                    "class": "h-full w-[40px] border-r border-l border-gray-500",
                                    "children": [
                                      {
                                        "type": "container",
                                        "class": "text-white hover:text-amber-400 cursor-pointer w-full h-full flex justify-center items-center",
                                        "checkedClass": "text-amber-400",
                                        "children": [
                                          {
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "text": "square_foot",
                                            "class": "material-symbols-outlined text-[18px] cursor-pointer pt-1"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "description": "polygon tool",
                                    "type": "container",
                                    "class": "h-full w-[40px] border-r border-l border-gray-500",
                                    "children": [
                                      {
                                        "type": "container",
                                        "class": "text-white hover:text-amber-400 cursor-pointer w-full h-full flex justify-center items-center",
                                        "checkedClass": "text-amber-400",
                                        "children": [
                                          {
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "text": "polyline",
                                            "class": "material-symbols-outlined text-[18px] cursor-pointer pt-1"
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "description": "tool view selector",
                                "type": "container",
                                "class": "h-full w-auto pl-2 border-r border-gray-600",
                                "children": [
                                  {
                                    "description": "listbox select input",
                                    "type": "annotatorEvent",
                                    "eventType": "activateTool",
                                    "storeArray": "a534325_table1",
                                    "key": "images",
                                    "class": "h-full",
                                    "elementType": "listboxSelectInput",
                                    "value": "object",
                                    "listbox": {
                                      "listboxButton": {
                                        "placeholder": "Tools",
                                        "class": "relative flex items-center w-full h-full bg-transparent py-1 pl-1 pr-8 text-left text-white hover:text-amber-400 cursor-pointer",
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
                                                "class": "block truncate sm:text-10"
                                              },
                                              {
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "span",
                                                "text": "unfold_more",
                                                "class": "material-symbols-outlined text-[22px] font-normal pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      "listboxOptionsContainer": {
                                        "class": "absolute z-50 mt-0 max-h-60 w-full overflow-auto rounded-ibr border-l border-r border-b bg-white py-1 text-base  sm:text-sm",
                                        "listboxOptions": {
                                          "classActive": "bg-gray-300 text-black",
                                          "classInactive": "text-gray-900",
                                          "class": "relative cursor-default select-none py-1  pl-2 pr-4",
                                          "children": [
                                            {
                                              "type": "container",
                                              "children": [
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
                                            "name": "rectangle",
                                            "value": "rectangleTool",
                                            "fillColor": "#0000ff01",
                                            "opacity": 1,
                                            "strokeColor": "#ff0000",
                                            "strokeWidth": 4
                                          },
                                          {
                                            "name": "circle",
                                            "value": "circleTool",
                                            "fillColor": "#0000ff01",
                                            "opacity": 1,
                                            "strokeColor": "#ff0000",
                                            "strokeWidth": 8
                                          },
                                          {
                                            "name": "dotCircle",
                                            "value": "dotCircleTool",
                                            "fillColor": "#0000ff01",
                                            "opacity": 1,
                                            "radius": 80,
                                            "strokeColor": "#ff0000",
                                            "strokeWidth": 4,
                                            "dashArrayStroke": 20,
                                            "dashArrayGap": 20,
                                            "content": "Lasertool"
                                          },
                                          {
                                            "name": "dotCircle",
                                            "value": "dotCircleTool",
                                            "fillColor": "#0000ff01",
                                            "opacity": 1,
                                            "radius": 50,
                                            "strokeColor": "#11ff23",
                                            "strokeWidth": 4,
                                            "dashArrayStroke": 20,
                                            "dashArrayGap": 20,
                                            "content": "Holder"
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "description": "fit to screen tool",
                                "type": "container",
                                "class": "h-full w-[40px] border-r border-l border-gray-500",
                                "children": [
                                  {
                                    "type": "annotatorEvent",
                                    "eventType": "fitToScreen",
                                    "key": "images",
                                    "class": "text-white hover:text-amber-400 cursor-pointer w-full h-full flex justify-center items-center",
                                    "children": [
                                      {
                                        "type": "element",
                                        "elementType": "staticHtmlTag",
                                        "text": "display_settings",
                                        "class": "material-symbols-outlined text-[18px] cursor-pointer pt-1"
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "description": "fit to screen tool",
                                "type": "container",
                                "class": "h-full w-[40px] border-r border-l border-gray-500",
                                "children": [
                                  {
                                    "type": "annotatorEvent",
                                    "eventType": "setMaxResolution",
                                    "key": "images",
                                    "class": "text-white hover:text-amber-400 cursor-pointer w-full h-full flex justify-center items-center",
                                    "children": [
                                      {
                                        "type": "element",
                                        "elementType": "staticHtmlTag",
                                        "text": "8k",
                                        "class": "material-symbols-outlined text-[18px] cursor-pointer pt-1"
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
                            "dialogKey": "previewBig01"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "container",
                    "class": "",
                    "children": [
                      {
                        "type": "container",
                        "class": "flex flex-col w-full h-[74vh]",
                        "children": [
                          {
                            "description": "canvasPane",
                            "type": "container",
                            "tag": "div",
                            "class": "w-full h-full",
                            "children": [
                              {
                                "type": "element",
                                "elementType": "annotatorCanvas",
                                "autoSave": false,
                                "key": "images",
                                "defaultView": {
                                  "name": "top view",
                                  "value": "topView",
                                  "bgImage1": "images.preview[0].imageResponse.cdnUrl",
                                  "bgImage1UrlParameter": "",
                                  "bgImage2": "",
                                  "bgImage2UrlParameter": ""
                                },
                                "class": "w-full h-full"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "description": "loop array progress",
                        "type": "container",
                        "class": "flex space-x-2 w-full",
                        "children": [
                          {
                            "type": "container",
                            "class": "w-3/12  h-40 bg-gray-100/10",
                            "children": [
                              {
                                "elementType": "staticHtmlTag",
                                "tag": "img",

                                "src": "ex: images.preview[0].imageResponse.cdnUrl + '/-/resize/400x/-/format/auto/-/quality/smart/'",
                                "class": "w-full h-full"
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
                "class": "flex justify-between w-full  py-1 pl-7 w-full",
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
                                "text": "Bauteile",
                                "class": "text-2xl uppercase font-bold text-gray-500 py-2 w-auto"
                              },
                              {
                                "description": "FU headline",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "12/2022",
                                "class": "text uppercase font-bold text-gray-400 pt-[15px] pl-1 py-2 w-auto"
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
                    "class": "flex xl:justify-end w-full space-x-2 text-[#b6c2cd] pr-3 pt-1",
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
                                            "type": "cddpEvent",
                                            "eventType": "create",
                                            "toggleDialog": true,
                                            "dialogKey": "table1EditDialog",
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
            "class": "flex flex-col pattern-dots pattern-gray-300 pattern-bg-gray-200 pattern-size-2 pattern-opacity-100 px-6 pt-2",
            "children": [
              {
                "description": "ag grid",
                "type": "element",
                "elementType": "agGrid",
                "collection": "a888222heoparts",
                "class": "ag-theme-balham h-screen w-full pt-0",
                "style": "--ag-background-color: transparent; --ag-odd-row-background-color: transparent; --ag-cell-horizontal-border: #ff0000; --ag-header-background-color: #16232d; --ag-cell-horizontal-padding: 0px; --ag-borders: none; --ag-row-hover-color: transparent; --ag-selected-row-background-color: transparent; --ag-range-selection-border-color: transparent; --ag-line-height: 1rem; --ag-header-background-color: transparent",
                "rowGroupPanelShow": "always",
                "query": [
                  {},
                  {
                    "_id": 1,
                    "articleNumber": 1,
                    "oem": 1,
                    "corporateGroup": 1,
                    "client": 1,
                    "model": 1,
                    "partCategory": 1,
                    "partLength": 1,
                    "partHeight": 1,
                    "previewImage": 1,
                    "retrievalPerMonth": 1,
                    "usage": 1,
                    "documentLock": 1
                  }
                ],
                "columnDefs": [
                  {
                    "field": "corporateGroup",
                    "headerName": "Unternehmensgruppe",
                    "enableRowGroup": true,
                    "enablePivot": true
                  },
                  {
                    "field": "client",
                    "headerName": "Client",
                    "filter": "agTextColumnFilter",
                    "enableRowGroup": true,
                    "enablePivot": true,
                    "width": 150
                  },
                  {
                    "field": "oem",
                    "headerName": "OEM",
                    "filter": "agTextColumnFilter",
                    "enableRowGroup": true,
                    "enablePivot": true,
                    "width": 180
                  },
                  {
                    "field": "model",
                    "enableRowGroup": true,
                    "filter": "agTextColumnFilter",
                    "enablePivot": true
                  },
                  {
                    "headerName": "image",
                    "enablePivot": true,
                    "cellRenderer": "ImgCellRenderer",
                    "filter": false,
                    "floatingFilter": false,
                    "width": 120
                  },
                  {
                    "field": "partCategory",
                    "headerName": "part category",
                    "enableRowGroup": true,
                    "enablePivot": true
                  },
                  {
                    "field": "articleNumber",
                    "headerName": "Artkel Nummer",
                    "filter": "agTextColumnFilter",
                    "enableRowGroup": true,
                    "enablePivot": true
                  },
                  {
                    "field": "retrievalPerMonth",
                    "enableRowGroup": true,
                    "enablePivot": true,
                    "filter": "agNumberColumnFilter",
                    "width": 160,
                    "sort": "desc",
                    "sortingOrder": ["desc", "asc"]
                  },
                  {
                    "field": "partLength",
                    "headerName": "Length",
                    "enableRowGroup": true,
                    "enablePivot": true,
                    "width": 100
                  },
                  {
                    "headerName": "Height",
                    "field": "partHeight",
                    "enableRowGroup": true,
                    "enablePivot": true
                  },
                  {
                    "headerName": "actions",
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

                    "display": "flex ",
                    "justify-content": "start",
                    "align-items": "center ",
                    "text-align": "left"
                  }
                },
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
                "cellRenderer": [
                  {
                    "id": "ImgCellRenderer",
                    "type": "container",
                    "children": [
                      {
                        "description": "cellRender img",
                        "type": "element",
                        "elementType": "staticHtmlTag",
                        "tag": "img",
                        "conditionArray": [
                          {
                            "cd": "INI, k, previewImage, notEmpty"
                          }
                        ],
                        "src": "ex: previewImage + '/-/resize/240x/-/format/auto/-/quality/smart/'",
                        "class": ""
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
                        "class": "material-symbols-outlined text-xl text-gray-600 hover:text-amber-400 cursor-pointer",
                        "toggleDialog": true,
                        "dialogKey": "table1EditDialog"
                      },
                      {
                        "description": "cell 5 element",
                        "type": "element",
                        "elementType": "staticHtmlTag",
                        "tag": "span",
                        "text": "content_copy",
                        "class": "material-symbols-outlined text-xl text-gray-600 hover:text-amber-400 cursor-pointer",
                        "toggleDialog": true,
                        "dialogKey": "cddpDuplicateDialog01"
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
                        "type": "cddpEvent",
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
          },
          {
            "description": "table 1 dialog full screen",
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
                                        "class": "flex space-x-2 w-auto",
                                        "children": [
                                          {
                                            "description": "tab 1 Eigenschaften button",
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
                                                "text": "Eigenschaften",
                                                "class": "uppercase"
                                              }
                                            ]
                                          },
                                          {
                                            "description": "tab 2 QS button",
                                            "type": "container",
                                            "tabID": "tab002",
                                            "tabGroupID": "tabGroup001",
                                            "class": "flex justify-center items-center cursor-pointer px-6 bg-[#3b4650] hover:bg-gray-400 hover:text-white text-12 font-bold leading-[24px]",
                                            "activeClass": "text-white bg-[#9ca3af] h-full w-full",
                                            "children": [
                                              {
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "div",
                                                "text": "QS",
                                                "class": "uppercase"
                                              }
                                            ]
                                          },
                                          {
                                            "description": "tab 3 Gestellbestückung button",
                                            "type": "container",
                                            "tabID": "tab003",
                                            "tabGroupID": "tabGroup001",
                                            "class": "flex justify-center items-center cursor-pointer px-6 bg-[#3b4650] hover:bg-gray-400 hover:text-white text-12 font-bold leading-[24px]",
                                            "activeClass": "text-white bg-[#9ca3af] h-full w-full",
                                            "children": [
                                              {
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "div",
                                                "text": "Gestellbestückung",
                                                "class": "uppercase"
                                              }
                                            ]
                                          },
                                          {
                                            "description": "tab 4 Gestellentstückung button",
                                            "type": "container",
                                            "tabID": "tab004",
                                            "tabGroupID": "tabGroup001",
                                            "class": "flex justify-center items-center cursor-pointer px-6 bg-[#3b4650] hover:bg-gray-400 hover:text-white text-12 font-bold leading-[24px]",
                                            "activeClass": "text-white bg-[#9ca3af] h-full w-full",
                                            "children": [
                                              {
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "div",
                                                "text": "Gestellentstückung",
                                                "class": "uppercase"
                                              }
                                            ]
                                          },
                                          {
                                            "description": "tab 5 annotator button",
                                            "type": "container",
                                            "toggleDialog": true,
                                            "dialogKey": "annotatorDialogFS",
                                            "class": "flex justify-center items-center cursor-pointer px-6 bg-[#3b4650] hover:bg-gray-400 hover:text-white text-12 font-bold leading-[24px]",
                                            "activeClass": "text-white bg-[#9ca3af] h-full w-full",
                                            "children": [
                                              {
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "div",
                                                "text": "Annotator",
                                                "class": "uppercase"
                                              }
                                            ]
                                          },
                                          {
                                            "description": "tab 6 media upload button",
                                            "type": "container",
                                            "tabID": "tab006",
                                            "tabGroupID": "tabGroup001",
                                            "class": "flex justify-center items-center cursor-pointer px-6 bg-[#3b4650] hover:bg-gray-400 hover:text-white text-12 font-bold leading-[24px]",
                                            "activeClass": "text-white bg-[#9ca3af] h-full w-full",
                                            "children": [
                                              {
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "div",
                                                "text": "Media",
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
                                        "dialogKey": "table1EditDialog"
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "description": "tab 1 Eigenschaften",
                                "type": "container",
                                "tabID": "tab001",
                                "tabGroupID": "tabGroup001",
                                "tabContent": true,
                                "class": "sm:px-6 bg-white w-full grid grid-cols-3 gap-4 pt-4",
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
                                                    "text": "Navision Datensatz",
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
                                                    "class": "material-symbols-outlined text-primary align-middle  w-1/8"
                                                  },
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "text": "",
                                                    "assignedKey": "project",
                                                    "class": "text text-black dark:text-white font-bold"
                                                  },
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "text": "",
                                                    "assignedKey": "model",
                                                    "class": "text text-black dark:text-white font-bold pl-2"
                                                  },
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "text": "",
                                                    "assignedKey": "navisionDescription",
                                                    "class": "text text-black dark:text-white font-bold pl-2"
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
                                                        "text": "Artikelnr: ",
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
                                                        "assignedKey": "articleNumber",
                                                        "class": "text text-black dark:text-white w-full pl-8"
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
                                                "description": "card1 row 5",
                                                "type": "container",
                                                "class": "text dark:text-white flex w-full mt-0 px-4",
                                                "children": [
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "text": "Kategorie",
                                                    "class": "text-12 w-48 font-bold pl-8"
                                                  },
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "assignedKey": "partCategory",
                                                    "class": "text-12 w-full pl-2"
                                                  }
                                                ]
                                              },
                                              {
                                                "description": "card1 row 5",
                                                "type": "container",
                                                "class": "text dark:text-white flex w-full mt-0 px-4",
                                                "children": [
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "text": "Verfahren",
                                                    "class": "text-12 w-48 font-bold pl-8"
                                                  },
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "assignedKey": "coatingApplication",
                                                    "class": "text-12 w-full pl-2"
                                                  }
                                                ]
                                              },
                                              {
                                                "description": "card1 row 5",
                                                "type": "container",
                                                "class": "text dark:text-white flex w-full mt-0 px-4",
                                                "children": [
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "assignedKey": "carrier",
                                                    "class": "text-12 w-48 font-bold pl-8"
                                                  },
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "assignedKey": "carrierId",
                                                    "class": "text-12 w-full pl-2"
                                                  }
                                                ]
                                              },
                                              {
                                                "description": "card1 row 5",
                                                "type": "container",
                                                "class": "text dark:text-white flex w-full mt-0 px-4",
                                                "children": [
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "text": "Material",
                                                    "class": "text-12 w-48 font-bold pl-8"
                                                  },
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "assignedKey": "partMaterial",
                                                    "class": "text-12 w-full pl-2"
                                                  }
                                                ]
                                              },
                                              {
                                                "description": "card1 row 5",
                                                "type": "container",
                                                "class": "text dark:text-white flex w-full mt-0 px-4",
                                                "children": [
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "text": "Produkt",
                                                    "class": "text-12 w-48 font-bold pl-8"
                                                  },
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "assignedKey": "heoProduct",
                                                    "class": "text-12 w-full pl-2"
                                                  }
                                                ]
                                              },
                                              {
                                                "description": "card1 row 5",
                                                "type": "container",
                                                "class": "text dark:text-white flex w-full mt-0 px-4",
                                                "children": [
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "text": "SOP",
                                                    "class": "text-12 w-48 font-bold pl-8"
                                                  },
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "assignedKey": "sop",
                                                    "class": "text-12 text w-full pl-2"
                                                  }
                                                ]
                                              },
                                              {
                                                "description": "card1 row 5",
                                                "type": "container",
                                                "class": "text dark:text-white flex w-full mt-0 pb-4 px-4",
                                                "children": [
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "text": "EOP",
                                                    "class": "text-12 w-48 font-bold pl-8"
                                                  },
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "assignedKey": "eop",
                                                    "class": "text-12 text w-full pl-2"
                                                  }
                                                ]
                                              },
                                              {
                                                "description": "card1 row 5",
                                                "type": "container",
                                                "class": "text dark:text-white flex w-full mt-0 px-4",
                                                "children": [
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "text": "PPC",
                                                    "class": "text-12 w-48 font-bold pl-8"
                                                  },
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "assignedKey": "ppc",
                                                    "class": "text-12 font-bold text w-full pl-2"
                                                  }
                                                ]
                                              },
                                              {
                                                "description": "card1 row 5",
                                                "type": "container",
                                                "class": "text dark:text-white flex w-full mt-0 px-4",
                                                "children": [
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "text": "Transportunit",
                                                    "class": "text-12 w-48 font-bold pl-8"
                                                  },
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "assignedKey": "carrier",
                                                    "class": "text-12 font-bold text w-full pl-2"
                                                  }
                                                ]
                                              },
                                              {
                                                "description": "card1 row 5",
                                                "type": "container",
                                                "class": "text dark:text-white flex w-full mt-0 pb-4 px-4",
                                                "children": [
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "text": "Anmerkung",
                                                    "class": "text-12 w-48 font-bold pl-8"
                                                  },
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "assignedKey": "carrierAmount",
                                                    "class": "text-12 font-bold text w-full pl-2"
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
                                    "description": "CARD 2",
                                    "type": "container",
                                    "class": "flex flex-col md:flex-row md:space-x-4 w-full",
                                    "children": [
                                      {
                                        "description": "card 2 container",
                                        "type": "container",
                                        "class": "w-full",
                                        "children": [
                                          {
                                            "description": "card 2 header",
                                            "type": "container",
                                            "class": "bg-cardHeaderBg h-10 pl-3 mt-6 cursor-pointer",
                                            "children": [
                                              {
                                                "description": "card2 above card headline",
                                                "type": "container",
                                                "toggleDialog": true,
                                                "dialogKey": "capacityCard",
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
                                                    "text": "Kapazitäten",
                                                    "class": "text-sm font-bold"
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            "description": "card 1 content",
                                            "type": "container",
                                            "class": "bg-white dark:bg-gray-800 flex-col pl-3 border",
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
                                                    "class": "material-symbols-outlined text-primary align-middle  w-1/8"
                                                  },
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "text": "Kapazitäten 12/22",
                                                    "class": "text text-black dark:text-white font-bold pl-2"
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
                                                    "class": "text-cardHeaderTitle ",
                                                    "children": [
                                                      {
                                                        "description": "element project number",
                                                        "type": "element",
                                                        "elementType": "staticHtmlTag",
                                                        "tag": "div",
                                                        "text": "Artikelnr: ",
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
                                                        "assignedKey": "articleNumber",
                                                        "class": "text text-black dark:text-white w-full pl-8"
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
                                                "description": "card1 row 5",
                                                "type": "container",
                                                "class": "text dark:text-white flex w-full mt-0 px-4",
                                                "children": [
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "text": "Abruf pro Tag",
                                                    "class": "text-12 w-48 font-bold pl-8"
                                                  },
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "assignedKey": "retrievalPerDay",
                                                    "class": "text-12 font-bold text w-full pl-2"
                                                  }
                                                ]
                                              },
                                              {
                                                "description": "card1 row 5",
                                                "type": "container",
                                                "class": "text dark:text-white flex w-full mt-0 px-4",
                                                "children": [
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "text": "Abruf pro Woche",
                                                    "class": "text-12 w-48 font-bold pl-8"
                                                  },
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "assignedKey": "retrievalPerWeek",
                                                    "class": "text-12 font-bold text w-full pl-2"
                                                  }
                                                ]
                                              },
                                              {
                                                "description": "card1 row 5",
                                                "type": "container",
                                                "class": "text dark:text-white flex w-full mt-0 px-4 pb-8",
                                                "children": [
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "text": "Abruf pro Monat",
                                                    "class": "text-12 w-48 font-bold pl-8"
                                                  },
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "assignedKey": "retrievalPerMonth",
                                                    "class": "text-12 font-bold text w-full pl-2"
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
                                    "description": "CARD 3",
                                    "type": "container",
                                    "class": "flex flex-col md:flex-row md:space-x-4 w-full",
                                    "children": [
                                      {
                                        "description": "card 2 container",
                                        "type": "container",
                                        "class": "w-full",
                                        "children": [
                                          {
                                            "description": "card 2 header",
                                            "type": "container",
                                            "class": "bg-cardHeaderBg h-10 pl-3 mt-6 cursor-pointer",
                                            "children": [
                                              {
                                                "description": "card1 above card headline",
                                                "type": "container",
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
                                                    "text": "Images",
                                                    "class": "text-sm font-bold"
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            "description": "card 2 content",
                                            "type": "container",
                                            "toggleDialog": true,
                                            "dialogKey": "previewBig01",
                                            "class": "bg-white dark:bg-gray-800 flex-col pl-3 border",
                                            "children": [
                                              {
                                                "description": "image preview",
                                                "type": "element",
                                                "elementType": "staticHtmlTag",
                                                "tag": "img",
                                                "conditionArray": [
                                                  {
                                                    "cd": "INI, k, images.preview[0].imageResponse.cdnUrl, notEmpty"
                                                  }
                                                ],
                                                "src": "ex:images.preview[0].imageResponse.cdnUrl + '/-/resize/600x/-/format/auto/-/quality/smart/'",
                                                "class": "w-[80%] rounded-xl ml-3 pb-2 cursor-pointer"
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "description": "CARD 4",
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
                                                    "text": "Bauteil-Geometrie",
                                                    "class": "text-sm font-bold"
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            "description": "card 1 content",
                                            "type": "container",
                                            "class": "bg-white dark:bg-gray-800 flex-col pl-3 border",
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
                                                    "class": "material-symbols-outlined text-primary align-middle  w-1/8"
                                                  },
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "text": "",
                                                    "assignedKey": "project",
                                                    "class": "text text-black dark:text-white font-bold"
                                                  },
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "text": "",
                                                    "assignedKey": "model",
                                                    "class": "text text-black dark:text-white font-bold pl-2"
                                                  },
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "text": "",
                                                    "assignedKey": "navisionDescription",
                                                    "class": "text text-black dark:text-white font-bold pl-2"
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
                                                        "text": "Artikelnr: ",
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
                                                        "assignedKey": "articleNumber",
                                                        "class": "text text-black dark:text-white w-full pl-8"
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
                                                    "assignedKey": "navisionDescription",
                                                    "class": "text-sm text-black dark:text-white w-5/6 pl-8"
                                                  }
                                                ]
                                              },
                                              {
                                                "description": "card1 row 5",
                                                "type": "container",
                                                "class": "text dark:text-white flex w-full mt-0 px-4",
                                                "children": [
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "text": "Kategorie",
                                                    "class": "text-12 w-48 font-bold pl-8"
                                                  },
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "assignedKey": "partsCategory",
                                                    "class": "text-12 w-full pl-2"
                                                  }
                                                ]
                                              },
                                              {
                                                "description": "card1 row 5",
                                                "type": "container",
                                                "class": "text dark:text-white flex w-full mt-0 px-4",
                                                "children": [
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "text": "Verfahren",
                                                    "class": "text-12 w-48 font-bold pl-8"
                                                  },
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "assignedKey": "application",
                                                    "class": "text-12 w-full pl-2"
                                                  }
                                                ]
                                              },
                                              {
                                                "description": "card1 row 5",
                                                "type": "container",
                                                "class": "text dark:text-white flex w-full mt-0 px-4",
                                                "children": [
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "assignedKey": "carrier",
                                                    "class": "text-12 w-48 font-bold pl-8"
                                                  },
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "assignedKey": "carrierId",
                                                    "class": "text-12 w-full pl-2"
                                                  }
                                                ]
                                              },
                                              {
                                                "description": "card1 row 5",
                                                "type": "container",
                                                "class": "text dark:text-white flex w-full mt-0 px-4",
                                                "children": [
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "text": "Material",
                                                    "class": "text-12 w-48 font-bold pl-8"
                                                  },
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "assignedKey": "material",
                                                    "class": "text-12 w-full pl-2"
                                                  }
                                                ]
                                              },
                                              {
                                                "description": "card1 row 5",
                                                "type": "container",
                                                "class": "text dark:text-white flex w-full mt-0 px-4",
                                                "children": [
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "text": "Produkt",
                                                    "class": "text-12 w-48 font-bold pl-8"
                                                  },
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "assignedKey": "heoProduct",
                                                    "class": "text-12 w-full pl-2"
                                                  }
                                                ]
                                              },
                                              {
                                                "description": "card1 row 5",
                                                "type": "container",
                                                "class": "text dark:text-white flex w-full mt-0 px-4",
                                                "children": [
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "text": "SOP",
                                                    "class": "text-12 w-48 font-bold pl-8"
                                                  },
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "assignedKey": "sop",
                                                    "class": "text-12 text w-full pl-2"
                                                  }
                                                ]
                                              },
                                              {
                                                "description": "card1 row 5",
                                                "type": "container",
                                                "class": "text dark:text-white flex w-full mt-0 pb-4 px-4",
                                                "children": [
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "text": "EOP",
                                                    "class": "text-12 w-48 font-bold pl-8"
                                                  },
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "assignedKey": "eop",
                                                    "class": "text-12 text w-full pl-2"
                                                  }
                                                ]
                                              },
                                              {
                                                "description": "card1 row 5",
                                                "type": "container",
                                                "class": "text dark:text-white flex w-full mt-0 px-4",
                                                "children": [
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "text": "PPC",
                                                    "class": "text-12 w-48 font-bold pl-8"
                                                  },
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "assignedKey": "ppc",
                                                    "class": "text-12 font-bold text w-full pl-2"
                                                  }
                                                ]
                                              },
                                              {
                                                "description": "card1 row 5",
                                                "type": "container",
                                                "class": "text dark:text-white flex w-full mt-0 px-4",
                                                "children": [
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "text": "Transportunit",
                                                    "class": "text-12 w-48 font-bold pl-8"
                                                  },
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "assignedKey": "carrier",
                                                    "class": "text-12 font-bold text w-full pl-2"
                                                  }
                                                ]
                                              },
                                              {
                                                "description": "card1 row 5",
                                                "type": "container",
                                                "class": "text dark:text-white flex w-full mt-0 pb-4 px-4",
                                                "children": [
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "text": "Anmerkung",
                                                    "class": "text-12 w-48 font-bold pl-8"
                                                  },
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "assignedKey": "carrierAmount",
                                                    "class": "text-12 font-bold text w-full pl-2"
                                                  }
                                                ]
                                              },
                                              {
                                                "description": "card1 row 5",
                                                "type": "container",
                                                "class": "text dark:text-white flex w-full mt-0 px-4",
                                                "children": [
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "text": "Abruf pro Tag",
                                                    "class": "text-12 w-48 font-bold pl-8"
                                                  },
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "assignedKey": "retrievalPerDay",
                                                    "class": "text-12 font-bold text w-full pl-2"
                                                  }
                                                ]
                                              },
                                              {
                                                "description": "card1 row 5",
                                                "type": "container",
                                                "class": "text dark:text-white flex w-full mt-0 px-4",
                                                "children": [
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "text": "Abruf pro Woche",
                                                    "class": "text-12 w-48 font-bold pl-8"
                                                  },
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "assignedKey": "retrievalPerWeek",
                                                    "class": "text-12 font-bold text w-full pl-2"
                                                  }
                                                ]
                                              },
                                              {
                                                "description": "card1 row 5",
                                                "type": "container",
                                                "class": "text dark:text-white flex w-full mt-0 px-4 pb-8",
                                                "children": [
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "text": "Abruf pro Monat",
                                                    "class": "text-12 w-48 font-bold pl-8"
                                                  },
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "assignedKey": "retrievalPerMonth",
                                                    "class": "text-12 font-bold text w-full pl-2"
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
                                "description": "tab 2 QS",
                                "type": "container",
                                "tabID": "tab002",
                                "tabGroupID": "tabGroup001",
                                "tabContent": true,
                                "class": "sm:px-6 bg-white w-full h-screen ",
                                "children": [
                                  {
                                    "description": "CARD CONTENT row 1",
                                    "type": "container",
                                    "class": "xl:flex xl:space-x-4 mt-8",
                                    "children": [
                                      {
                                        "description": "card 1 container",
                                        "type": "container",
                                        "class": " w-full xl:w-1/2 flex flex-col min-h-[300px]",
                                        "children": [
                                          {
                                            "description": "card 1 header",
                                            "type": "container",
                                            "class": "bg-[#88959b] rounded-sm h-10 pl-3 cursor-pointer",
                                            "children": [
                                              {
                                                "description": "card1 above card headline",
                                                "type": "container",
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
                                                    "text": "QS",
                                                    "class": "text-sm font-bold"
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            "description": "card 1 content",
                                            "type": "container",
                                            "class": "bg-white pl-3 rounded-sm border flex-1 ",
                                            "children": [
                                              {
                                                "description": "independent header with add item button",
                                                "type": "container",
                                                "containerType": "div",
                                                "class": "w-full bg-white flex justify-between mx-auto overflow-y-auto p-2 border-b border-gray-300",
                                                "children": [
                                                  {
                                                    "description": "left aligned",
                                                    "type": "container",
                                                    "containerType": "div",
                                                    "class": "flex justify-between w-full",
                                                    "children": [
                                                      {
                                                        "description": "prime vue text input",
                                                        "type": "container",
                                                        "containerType": "div",
                                                        "class": " p-inputtext-sm w-1/2 pl-2 pr-0 sm:pr-4 focus:outline-none",
                                                        "children": [
                                                          {
                                                            "type": "element",
                                                            "elementType": "textInput",
                                                            "key": "specificationsTable1.title",
                                                            "class": "w-full mx-8 py-0 border-none text-sm focus:outline-none",
                                                            "parameters": {
                                                              "placeholder": "#",
                                                              "disabled": false,
                                                              "size": "sm"
                                                            }
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  },
                                                  {
                                                    "description": "right aligned",
                                                    "type": "container",
                                                    "containerType": "div",
                                                    "class": "flex justify-end",
                                                    "children": [
                                                      {
                                                        "description": "add item button navEvent",
                                                        "type": "navEvent",
                                                        "eventType": "draggableAddItem",
                                                        "elementType": "staticHtmlTag",
                                                        "key": "specificationsTable1.specifications",
                                                        "tag": "div",
                                                        "text": "add",
                                                        "class": "material-symbols-outlined h-9 w-9 cursor-pointer pt-2"
                                                      }
                                                    ]
                                                  }
                                                ]
                                              },
                                              {
                                                "description": "draggable container",
                                                "type": "container",
                                                "containerType": "div",
                                                "class": "w-full h-auto flex justify-between mx-auto overflow-y-auto p-4",
                                                "children": [
                                                  {
                                                    "type": "draggable",
                                                    "key": "specificationsTable1.specifications",
                                                    "tag": "ul",
                                                    "handle": "handle",
                                                    "class": "h-auto w-full",
                                                    "children": [
                                                      {
                                                        "description": "draggable container",
                                                        "type": "container",
                                                        "containerType": "div",
                                                        "class": "flex justify-between w-full py-1 border-b border-gray-400",
                                                        "children": [
                                                          {
                                                            "description": "left aligned",
                                                            "type": "container",
                                                            "containerType": "div",
                                                            "class": "flex items-center w-full",
                                                            "children": [
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "div",
                                                                "text": "drag_handle",
                                                                "class": "handle material-symbols-outlined text-2xl text-gray-500 cursor-pointer text-center pt-1"
                                                              },
                                                              {
                                                                "description": "left aligned",
                                                                "type": "container",
                                                                "containerType": "div",
                                                                "class": "pt-1 pl-4",
                                                                "children": [
                                                                  {
                                                                    "type": "element",
                                                                    "elementType": "primeVueSwitchInput",
                                                                    "key": "specificationsTable1.specifications[index].1st_level",
                                                                    "trueValue": "on",
                                                                    "falseValue": "off",
                                                                    "class": "w-24 ",
                                                                    "parameters": {}
                                                                  }
                                                                ]
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "primeVueCheckboxInput",
                                                                "key": "specificationsTable1.specifications[index].active",
                                                                "class": "ml-4",
                                                                "parameters": {
                                                                  "trueValue": true,
                                                                  "falseValue": false,
                                                                  "disabled": false
                                                                }
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "primeVueCheckboxInput",
                                                                "key": "specificationsTable1.specifications[index].dulu",
                                                                "class": "ml-4",
                                                                "parameters": {
                                                                  "trueValue": true,
                                                                  "falseValue": false,
                                                                  "disabled": false
                                                                }
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "primeVueSelectInput",
                                                                "key": "specificationsTable1.specifications[index].assembly",
                                                                "class": "p-inputtext-sm ml-4 pl-0 pr-2 w-64 ",
                                                                "parameters": {
                                                                  "optionLabel": "text",
                                                                  "options": [
                                                                    {
                                                                      "text": "---",
                                                                      "value": ""
                                                                    },
                                                                    {
                                                                      "text": "Automobil",
                                                                      "value": "Automobil"
                                                                    },
                                                                    {
                                                                      "text": "LKW",
                                                                      "value": "LKW"
                                                                    },
                                                                    {
                                                                      "text": "Motorrad",
                                                                      "value": "Motorrad"
                                                                    },
                                                                    {
                                                                      "text": "Micromobil",
                                                                      "value": "Micromobil"
                                                                    }
                                                                  ],
                                                                  "placeholder": "select item",
                                                                  "disabled": false
                                                                }
                                                              },
                                                              {
                                                                "description": "prime vue text input",
                                                                "type": "container",
                                                                "containerType": "div",
                                                                "class": " p-inputtext-sm w-full text-sm pl-6 pr-0 sm:pr-4",
                                                                "children": [
                                                                  {
                                                                    "type": "element",
                                                                    "elementType": "textInput",
                                                                    "key": "specificationsTable1.specifications[index].name",
                                                                    "class": "w-full mx-8 py-0 border-gray-300 text-sm",
                                                                    "parameters": {
                                                                      "placeholder": "#",
                                                                      "disabled": false,
                                                                      "size": "sm"
                                                                    }
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          },
                                                          {
                                                            "type": "navEvent",
                                                            "elementType": "staticHtmlTag",
                                                            "eventType": "draggableDeleteItem",
                                                            "key": "specificationsTable1.specifications",
                                                            "text": "delete",
                                                            "class": "material-symbols-outlined text-gray-400 hover:text-black text-xl cursor-pointer pt-1"
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
                                "description": "tab 3 Gestellbestückung",
                                "type": "container",
                                "tabID": "tab003",
                                "tabGroupID": "tabGroup001",
                                "tabContent": true,
                                "class": "sm:px-6 bg-white w-full h-screen ",
                                "children": [
                                  {
                                    "description": "CARD CONTENT row 1",
                                    "type": "container",
                                    "class": "xl:flex xl:space-x-4 mt-8",
                                    "children": [
                                      {
                                        "description": "card 1 container",
                                        "type": "container",
                                        "class": " w-full xl:w-1/2 flex flex-col min-h-[300px]",
                                        "children": [
                                          {
                                            "description": "card 1 header",
                                            "type": "container",
                                            "class": "bg-[#88959b] rounded-sm h-10 pl-3 cursor-pointer",
                                            "children": [
                                              {
                                                "description": "card1 above card headline",
                                                "type": "container",
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
                                                    "text": "Gestellbestückung",
                                                    "class": "text-sm font-bold"
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            "description": "card 1 content",
                                            "type": "container",
                                            "class": "bg-white pl-3 rounded-sm border flex-1 ",
                                            "children": [
                                              {
                                                "description": "independent header with add item button",
                                                "type": "container",
                                                "containerType": "div",
                                                "class": "w-full bg-white flex justify-between mx-auto overflow-y-auto p-2 border-b border-gray-300",
                                                "children": [
                                                  {
                                                    "description": "left aligned",
                                                    "type": "container",
                                                    "containerType": "div",
                                                    "class": "flex justify-between w-full",
                                                    "children": [
                                                      {
                                                        "description": "prime vue text input",
                                                        "type": "container",
                                                        "containerType": "div",
                                                        "class": " p-inputtext-sm w-1/2 pl-2 pr-0 sm:pr-4 focus:outline-none",
                                                        "children": [
                                                          {
                                                            "type": "element",
                                                            "elementType": "textInput",
                                                            "key": "specificationsTable1.title",
                                                            "class": "w-full mx-8 py-0 border-none text-sm focus:outline-none",
                                                            "parameters": {
                                                              "placeholder": "#",
                                                              "disabled": false,
                                                              "size": "sm"
                                                            }
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  },
                                                  {
                                                    "description": "right aligned",
                                                    "type": "container",
                                                    "containerType": "div",
                                                    "class": "flex justify-end",
                                                    "children": [
                                                      {
                                                        "description": "add item button navEvent",
                                                        "type": "navEvent",
                                                        "eventType": "draggableAddItem",
                                                        "elementType": "staticHtmlTag",
                                                        "key": "specificationsTable1.specifications",
                                                        "tag": "div",
                                                        "text": "add",
                                                        "class": "material-symbols-outlined h-9 w-9 cursor-pointer pt-2"
                                                      }
                                                    ]
                                                  }
                                                ]
                                              },
                                              {
                                                "description": "draggable container",
                                                "type": "container",
                                                "containerType": "div",
                                                "class": "w-full h-auto flex justify-between mx-auto overflow-y-auto p-4",
                                                "children": [
                                                  {
                                                    "type": "draggable",
                                                    "key": "specificationsTable1.specifications",
                                                    "tag": "ul",
                                                    "handle": "handle",
                                                    "class": "h-auto w-full",
                                                    "children": [
                                                      {
                                                        "description": "draggable container",
                                                        "type": "container",
                                                        "containerType": "div",
                                                        "class": "flex justify-between w-full py-1 border-b border-gray-400",
                                                        "children": [
                                                          {
                                                            "description": "left aligned",
                                                            "type": "container",
                                                            "containerType": "div",
                                                            "class": "flex items-center w-full",
                                                            "children": [
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "div",
                                                                "text": "drag_handle",
                                                                "class": "handle material-symbols-outlined text-2xl text-gray-500 cursor-pointer text-center pt-1"
                                                              },
                                                              {
                                                                "description": "left aligned",
                                                                "type": "container",
                                                                "containerType": "div",
                                                                "class": "pt-1 pl-4",
                                                                "children": [
                                                                  {
                                                                    "type": "element",
                                                                    "elementType": "primeVueSwitchInput",
                                                                    "key": "specificationsTable1.specifications[index].1st_level",
                                                                    "trueValue": "on",
                                                                    "falseValue": "off",
                                                                    "class": "w-24 ",
                                                                    "parameters": {}
                                                                  }
                                                                ]
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "primeVueCheckboxInput",
                                                                "key": "specificationsTable1.specifications[index].active",
                                                                "class": "ml-4",
                                                                "parameters": {
                                                                  "trueValue": true,
                                                                  "falseValue": false,
                                                                  "disabled": false
                                                                }
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "primeVueCheckboxInput",
                                                                "key": "specificationsTable1.specifications[index].dulu",
                                                                "class": "ml-4",
                                                                "parameters": {
                                                                  "trueValue": true,
                                                                  "falseValue": false,
                                                                  "disabled": false
                                                                }
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "primeVueSelectInput",
                                                                "key": "specificationsTable1.specifications[index].assembly",
                                                                "class": "p-inputtext-sm ml-4 pl-0 pr-2 w-64 ",
                                                                "parameters": {
                                                                  "optionLabel": "text",
                                                                  "options": [
                                                                    {
                                                                      "text": "---",
                                                                      "value": ""
                                                                    },
                                                                    {
                                                                      "text": "Automobil",
                                                                      "value": "Automobil"
                                                                    },
                                                                    {
                                                                      "text": "LKW",
                                                                      "value": "LKW"
                                                                    },
                                                                    {
                                                                      "text": "Motorrad",
                                                                      "value": "Motorrad"
                                                                    },
                                                                    {
                                                                      "text": "Micromobil",
                                                                      "value": "Micromobil"
                                                                    }
                                                                  ],
                                                                  "placeholder": "select item",
                                                                  "disabled": false
                                                                }
                                                              },
                                                              {
                                                                "description": "prime vue text input",
                                                                "type": "container",
                                                                "containerType": "div",
                                                                "class": " p-inputtext-sm w-full text-sm pl-6 pr-0 sm:pr-4",
                                                                "children": [
                                                                  {
                                                                    "type": "element",
                                                                    "elementType": "textInput",
                                                                    "key": "specificationsTable1.specifications[index].name",
                                                                    "class": "w-full mx-8 py-0 border-gray-300 text-sm",
                                                                    "parameters": {
                                                                      "placeholder": "#",
                                                                      "disabled": false,
                                                                      "size": "sm"
                                                                    }
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          },
                                                          {
                                                            "type": "navEvent",
                                                            "elementType": "staticHtmlTag",
                                                            "eventType": "draggableDeleteItem",
                                                            "key": "specificationsTable1.specifications",
                                                            "text": "delete",
                                                            "class": "material-symbols-outlined text-gray-400 hover:text-black text-xl cursor-pointer pt-1"
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
                                "description": "tab 4 Gestellentstückung",
                                "type": "container",
                                "tabID": "tab004",
                                "tabGroupID": "tabGroup001",
                                "tabContent": true,
                                "class": "sm:px-6 bg-white w-full h-screen ",
                                "children": [
                                  {
                                    "description": "CARD CONTENT row 1",
                                    "type": "container",
                                    "class": "xl:flex xl:space-x-4 mt-8",
                                    "children": [
                                      {
                                        "description": "card 1 container",
                                        "type": "container",
                                        "class": " w-full xl:w-1/2 flex flex-col min-h-[300px]",
                                        "children": [
                                          {
                                            "description": "card 1 header",
                                            "type": "container",
                                            "class": "bg-[#88959b] rounded-sm h-10 pl-3 cursor-pointer",
                                            "children": [
                                              {
                                                "description": "card1 above card headline",
                                                "type": "container",
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
                                                    "text": "Gestellentstückung",
                                                    "class": "text-sm font-bold"
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            "description": "card 1 content",
                                            "type": "container",
                                            "class": "bg-white pl-3 rounded-sm border flex-1 ",
                                            "children": [
                                              {
                                                "description": "independent header with add item button",
                                                "type": "container",
                                                "containerType": "div",
                                                "class": "w-full bg-white flex justify-between mx-auto overflow-y-auto p-2 border-b border-gray-300",
                                                "children": [
                                                  {
                                                    "description": "left aligned",
                                                    "type": "container",
                                                    "containerType": "div",
                                                    "class": "flex justify-between w-full",
                                                    "children": [
                                                      {
                                                        "description": "prime vue text input",
                                                        "type": "container",
                                                        "containerType": "div",
                                                        "class": " p-inputtext-sm w-1/2 pl-2 pr-0 sm:pr-4 focus:outline-none",
                                                        "children": [
                                                          {
                                                            "type": "element",
                                                            "elementType": "textInput",
                                                            "key": "specificationsTable1.title",
                                                            "class": "w-full mx-8 py-0 border-none text-sm focus:outline-none",
                                                            "parameters": {
                                                              "placeholder": "#",
                                                              "disabled": false,
                                                              "size": "sm"
                                                            }
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  },
                                                  {
                                                    "description": "right aligned",
                                                    "type": "container",
                                                    "containerType": "div",
                                                    "class": "flex justify-end",
                                                    "children": [
                                                      {
                                                        "type": "navEvent",
                                                        "elementType": "staticHtmlTag",
                                                        "description": "add item button navEvent",
                                                        "eventType": "draggableAddItem",
                                                        "key": "specificationsTable1.specifications",
                                                        "tag": "div",
                                                        "text": "add",
                                                        "class": "material-symbols-outlined h-9 w-9 cursor-pointer pt-2"
                                                      }
                                                    ]
                                                  }
                                                ]
                                              },
                                              {
                                                "description": "draggable container",
                                                "type": "container",
                                                "containerType": "div",
                                                "class": "w-full h-auto flex justify-between mx-auto overflow-y-auto p-4",
                                                "children": [
                                                  {
                                                    "type": "draggable",
                                                    "key": "specificationsTable1.specifications",
                                                    "tag": "ul",
                                                    "handle": "handle",
                                                    "class": "h-auto w-full",
                                                    "children": [
                                                      {
                                                        "description": "draggable container",
                                                        "type": "container",
                                                        "containerType": "div",
                                                        "class": "flex justify-between w-full py-1 border-b border-gray-400",
                                                        "children": [
                                                          {
                                                            "description": "left aligned",
                                                            "type": "container",
                                                            "containerType": "div",
                                                            "class": "flex items-center w-full",
                                                            "children": [
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "div",
                                                                "text": "drag_handle",
                                                                "class": "handle material-symbols-outlined text-2xl text-gray-500 cursor-pointer text-center pt-1"
                                                              },
                                                              {
                                                                "description": "left aligned",
                                                                "type": "container",
                                                                "containerType": "div",
                                                                "class": "pt-1 pl-4",
                                                                "children": [
                                                                  {
                                                                    "type": "element",
                                                                    "elementType": "primeVueSwitchInput",
                                                                    "key": "specificationsTable1.specifications[index].1st_level",
                                                                    "trueValue": "on",
                                                                    "falseValue": "off",
                                                                    "class": "w-24 ",
                                                                    "parameters": {}
                                                                  }
                                                                ]
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "primeVueCheckboxInput",
                                                                "key": "specificationsTable1.specifications[index].active",
                                                                "class": "ml-4",
                                                                "parameters": {
                                                                  "trueValue": true,
                                                                  "falseValue": false,
                                                                  "disabled": false
                                                                }
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "primeVueCheckboxInput",
                                                                "key": "specificationsTable1.specifications[index].dulu",
                                                                "class": "ml-4",
                                                                "parameters": {
                                                                  "trueValue": true,
                                                                  "falseValue": false,
                                                                  "disabled": false
                                                                }
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "primeVueSelectInput",
                                                                "key": "specificationsTable1.specifications[index].assembly",
                                                                "class": "p-inputtext-sm ml-4 pl-0 pr-2 w-64 ",
                                                                "parameters": {
                                                                  "optionLabel": "text",
                                                                  "options": [
                                                                    {
                                                                      "text": "---",
                                                                      "value": ""
                                                                    },
                                                                    {
                                                                      "text": "Automobil",
                                                                      "value": "Automobil"
                                                                    },
                                                                    {
                                                                      "text": "LKW",
                                                                      "value": "LKW"
                                                                    },
                                                                    {
                                                                      "text": "Motorrad",
                                                                      "value": "Motorrad"
                                                                    },
                                                                    {
                                                                      "text": "Micromobil",
                                                                      "value": "Micromobil"
                                                                    }
                                                                  ],
                                                                  "placeholder": "select item",
                                                                  "disabled": false
                                                                }
                                                              },
                                                              {
                                                                "description": "prime vue text input",
                                                                "type": "container",
                                                                "containerType": "div",
                                                                "class": " p-inputtext-sm w-full text-sm pl-6 pr-0 sm:pr-4",
                                                                "children": [
                                                                  {
                                                                    "type": "element",
                                                                    "elementType": "textInput",
                                                                    "key": "specificationsTable1.specifications[index].name",
                                                                    "class": "w-full mx-8 py-0 border-gray-300 text-sm",
                                                                    "parameters": {
                                                                      "placeholder": "#",
                                                                      "disabled": false,
                                                                      "size": "sm"
                                                                    }
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          },
                                                          {
                                                            "type": "navEvent",
                                                            "elementType": "staticHtmlTag",
                                                            "eventType": "draggableDeleteItem",
                                                            "key": "specificationsTable1.specifications",
                                                            "text": "delete",
                                                            "class": "material-symbols-outlined text-gray-400 hover:text-black text-xl cursor-pointer pt-1"
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
                                "description": "tab 6 media",
                                "type": "container",
                                "tabID": "tab006",
                                "tabGroupID": "tabGroup001",
                                "tabContent": true,
                                "class": "sm:px-6 bg-white w-full overflow-auto h-screen pb-48",
                                "children": [
                                  {
                                    "description": "uploader",
                                    "type": "container",
                                    "class": "grid grid-cols-4 gap-4 mt-8",
                                    "children": [
                                      {
                                        "description": "single images container",
                                        "type": "container",
                                        "class": " w-full flex flex-col",
                                        "children": [
                                          {
                                            "description": "card 1 header",
                                            "type": "container",
                                            "class": "bg-[#88959b] rounded-sm h-10 pl-3 cursor-pointer",
                                            "children": [
                                              {
                                                "description": "card1 above card headline",
                                                "type": "container",
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
                                                    "text": "single images",
                                                    "class": "text-sm font-bold"
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            "description": "preview uploader",
                                            "type": "container",
                                            "class": "flex space-x-4",
                                            "children": [
                                              {
                                                "description": "preview uploader",
                                                "type": "container",
                                                "class": "relative inline-block align-bottom rounded-sm text-left transform transition-all sm:align-middle w-32 h-32 pt-4",
                                                "children": [
                                                  {
                                                    "description": "dialog card",
                                                    "type": "element",
                                                    "elementType": "uploadcareFileProvision",
                                                    "uploaderId": "uc_preview",
                                                    "maxDownload": 10,
                                                    "key": "images.preview",
                                                    "uploaderResponseKey": "imageResponse",
                                                    "key2write": "previewImage",
                                                    "value2write": "images.preview[0].imageResponse.cdnUrl",
                                                    "class": "relative bg-gray-300 h-full rounded-xl border-2 border-gray-500 border-dashed",
                                                    "children": [
                                                      {
                                                        "description": "drop zone overlay",
                                                        "type": "container",
                                                        "children": [
                                                          {
                                                            "type": "overlay",
                                                            "uploaderId": "uc_preview",
                                                            "class": "absolute z-50 w-full h-full bg-white/[.9] overflow-hidden",
                                                            "children": [
                                                              {
                                                                "type": "container",
                                                                "class": "-z-10 flex justify-center items-center w-full h-full",
                                                                "children": [
                                                                  {
                                                                    "type": "container",
                                                                    "class": "-z-10 w-64 h-64 justify-center items-center border-4 border-gray-300 rounded-xl",
                                                                    "children": [
                                                                      {
                                                                        "type": "container",
                                                                        "class": "-z-10 flex flex-col justify-center items-center w-full h-full",
                                                                        "children": [
                                                                          {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "text": "backup",
                                                                            "class": "material-symbols-outlined text-[50px] text-gray-300"
                                                                          },
                                                                          {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "text": "uploadcare",
                                                                            "class": "text-[14px] text-gray-400"
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
                                                        "description": "title + delete",
                                                        "type": "container",
                                                        "class": "flex justify between",
                                                        "children": [
                                                          {
                                                            "description": "headline",
                                                            "type": "element",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "text": "preview",
                                                            "class": "text-13 w-full text-gray-600 font-bold pl-2 pt-2"
                                                          },
                                                          {
                                                            "description": "image delete",
                                                            "type": "uploadEvent",
                                                            "eventType": "delete",
                                                            "criteria": "images.preview[0]",
                                                            "uploaderResponseKey": "imageResponse",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "conditionArray": [],
                                                            "text": "delete",
                                                            "class": "material-symbols-outlined font-medium text-gray-500 hover:text-gray-500 text-20 pl-2 cursor-pointer p-2",
                                                            "progressIndicator": {
                                                              "type": "container",
                                                              "class": "flex justify-center",
                                                              "children": [
                                                                {
                                                                  "type": "element",
                                                                  "elementType": "staticHtmlTag",
                                                                  "tag": "span",
                                                                  "text": "",
                                                                  "class": "w-6 h-6 border-b-2 border-gray-600 rounded-full animate-spin"
                                                                }
                                                              ]
                                                            }
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "description": "uploadcare progress",
                                                        "type": "container",
                                                        "class": "",
                                                        "conditionArray": [
                                                          {
                                                            "cd": "INI, k, uploadcareProgress:images.preview[0], notEmpty"
                                                          },
                                                          {
                                                            "cd": "AND, k, uploadcareProgress:images.preview[0], gte, s, 0"
                                                          }
                                                        ],
                                                        "children": [
                                                          {
                                                            "type": "container",
                                                            "class": "relative flex items-center justify-center mt-4",
                                                            "children": [
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "div",
                                                                "class": "bg-amber-400 h-2 ",
                                                                "style": "ex:'width: ' + uploadcareProgress:images.preview[0] + 'vw'",
                                                                "text": ""
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "div",
                                                                "class": "w-full h-full",
                                                                "text": "ex:uploadcareProgress:images.preview[0] + '%'"
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "description": "image preview",
                                                        "type": "element",
                                                        "elementType": "staticHtmlTag",
                                                        "tag": "img",
                                                        "conditionArray": [
                                                          {
                                                            "cd": "INI, k, images.preview[0].imageResponse.cdnUrl, notEmpty"
                                                          }
                                                        ],
                                                        "src": "ex:images.preview[0].imageResponse.cdnUrl + '/-/resize/400x/-/format/auto/-/quality/smart/'",
                                                        "class": "w-[80%] rounded-xl ml-3 pb-2"
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            "description": "dwpKontrolle uploader",
                                            "type": "container",
                                            "class": "flex space-x-4",
                                            "children": [
                                              {
                                                "description": "dwpKontrolle uploader",
                                                "type": "container",
                                                "class": "relative inline-block align-bottom rounded-sm text-left transform transition-all sm:align-middle w-32 h-32 pt-4",
                                                "children": [
                                                  {
                                                    "description": "dialog card",
                                                    "type": "element",
                                                    "elementType": "uploadcareFileProvision",
                                                    "uploaderId": "uc_dwpKontrolle",
                                                    "maxDownload": 10,
                                                    "key": "images.dwpKontrolle",
                                                    "uploaderResponseKey": "imageResponse",
                                                    "key2write": "dwpKontrolleImage",
                                                    "value2write": "images.dwpKontrolle[0].imageResponse.cdnUrl",
                                                    "class": "relative bg-gray-300 h-full rounded-xl border-2 border-gray-500 border-dashed",
                                                    "children": [
                                                      {
                                                        "description": "drop zone overlay",
                                                        "type": "container",
                                                        "children": [
                                                          {
                                                            "type": "overlay",
                                                            "uploaderId": "uc_dwpKontrolle",
                                                            "class": "absolute z-50 w-full h-full bg-white/[.9] overflow-hidden",
                                                            "children": [
                                                              {
                                                                "type": "container",
                                                                "class": "-z-10 flex justify-center items-center w-full h-full",
                                                                "children": [
                                                                  {
                                                                    "type": "container",
                                                                    "class": "-z-10 w-64 h-64 justify-center items-center border-4 border-gray-300 rounded-xl",
                                                                    "children": [
                                                                      {
                                                                        "type": "container",
                                                                        "class": "-z-10 flex flex-col justify-center items-center w-full h-full",
                                                                        "children": [
                                                                          {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "text": "backup",
                                                                            "class": "material-symbols-outlined text-[50px] text-gray-300"
                                                                          },
                                                                          {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "text": "uploadcare",
                                                                            "class": "text-[14px] text-gray-400"
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
                                                        "description": "title + delete",
                                                        "type": "container",
                                                        "class": "flex justify between",
                                                        "children": [
                                                          {
                                                            "description": "headline",
                                                            "type": "element",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "text": "dwpKontrolle",
                                                            "class": "text-13 w-full text-gray-600 font-bold pl-2 pt-2"
                                                          },
                                                          {
                                                            "description": "image delete",
                                                            "type": "uploadEvent",
                                                            "eventType": "delete",
                                                            "criteria": "images.dwpKontrolle[0]",
                                                            "uploaderResponseKey": "imageResponse",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "conditionArray": [],
                                                            "text": "delete",
                                                            "class": "material-symbols-outlined font-medium text-gray-500 hover:text-gray-500 text-20 pl-2 cursor-pointer p-2",
                                                            "progressIndicator": {
                                                              "type": "container",
                                                              "class": "flex justify-center",
                                                              "children": [
                                                                {
                                                                  "type": "element",
                                                                  "elementType": "staticHtmlTag",
                                                                  "tag": "span",
                                                                  "text": "",
                                                                  "class": "w-6 h-6 border-b-2 border-gray-600 rounded-full animate-spin"
                                                                }
                                                              ]
                                                            }
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "description": "uploadcare progress",
                                                        "type": "container",
                                                        "class": "",
                                                        "conditionArray": [
                                                          {
                                                            "cd": "INI, k, uploadcareProgress:images.dwpKontrolle[0], notEmpty"
                                                          },
                                                          {
                                                            "cd": "AND, k, uploadcareProgress:images.dwpKontrolle[0], gte, s, 0"
                                                          }
                                                        ],
                                                        "children": [
                                                          {
                                                            "type": "container",
                                                            "class": "relative flex items-center justify-center mt-4",
                                                            "children": [
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "div",
                                                                "class": "bg-amber-400 h-2 ",
                                                                "style": "ex:'width: ' + uploadcareProgress:images.dwpKontrolle[0] + 'vw'",
                                                                "text": ""
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "div",
                                                                "class": "w-full h-full",
                                                                "text": "ex:uploadcareProgress:images.dwpKontrolle[0] + '%'"
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "description": "image dwpKontrolle",
                                                        "type": "element",
                                                        "elementType": "staticHtmlTag",
                                                        "tag": "img",
                                                        "conditionArray": [
                                                          {
                                                            "cd": "INI, k, images.dwpKontrolle[0].imageResponse.cdnUrl, notEmpty"
                                                          }
                                                        ],
                                                        "src": "ex:images.dwpKontrolle[0].imageResponse.cdnUrl + '/-/resize/400x/-/format/auto/-/quality/smart/'",
                                                        "class": "w-[80%] rounded-xl ml-3 pb-2"
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            "description": "outline uploader",
                                            "type": "container",
                                            "class": "flex space-x-4",
                                            "children": [
                                              {
                                                "description": "outline uploader",
                                                "type": "container",
                                                "class": "relative inline-block align-bottom rounded-sm text-left transform transition-all sm:align-middle w-32 h-32 pt-4",
                                                "children": [
                                                  {
                                                    "description": "dialog card",
                                                    "type": "element",
                                                    "elementType": "uploadcareFileProvision",
                                                    "uploaderId": "uc_outline",
                                                    "maxDownload": 10,
                                                    "key": "images.outline",
                                                    "uploaderResponseKey": "imageResponse",
                                                    "key2write": "outlineImage",
                                                    "value2write": "images.outline[0].imageResponse.cdnUrl",
                                                    "class": "relative bg-gray-300 h-full rounded-xl border-2 border-gray-500 border-dashed",
                                                    "children": [
                                                      {
                                                        "description": "drop zone overlay",
                                                        "type": "container",
                                                        "children": [
                                                          {
                                                            "type": "overlay",
                                                            "uploaderId": "uc_outline",
                                                            "class": "absolute z-50 w-full h-full bg-white/[.9] overflow-hidden",
                                                            "children": [
                                                              {
                                                                "type": "container",
                                                                "class": "-z-10 flex justify-center items-center w-full h-full",
                                                                "children": [
                                                                  {
                                                                    "type": "container",
                                                                    "class": "-z-10 w-64 h-64 justify-center items-center border-4 border-gray-300 rounded-xl",
                                                                    "children": [
                                                                      {
                                                                        "type": "container",
                                                                        "class": "-z-10 flex flex-col justify-center items-center w-full h-full",
                                                                        "children": [
                                                                          {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "text": "backup",
                                                                            "class": "material-symbols-outlined text-[50px] text-gray-300"
                                                                          },
                                                                          {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "text": "uploadcare",
                                                                            "class": "text-[14px] text-gray-400"
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
                                                        "description": "title + delete",
                                                        "type": "container",
                                                        "class": "flex justify between",
                                                        "children": [
                                                          {
                                                            "description": "headline",
                                                            "type": "element",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "text": "outline",
                                                            "class": "text-13 w-full text-gray-600 font-bold pl-2 pt-2"
                                                          },
                                                          {
                                                            "description": "image delete",
                                                            "type": "uploadEvent",
                                                            "eventType": "delete",
                                                            "criteria": "images.outline[0]",
                                                            "uploaderResponseKey": "imageResponse",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "conditionArray": [],
                                                            "text": "delete",
                                                            "class": "material-symbols-outlined font-medium text-gray-500 hover:text-gray-500 text-20 pl-2 cursor-pointer p-2",
                                                            "progressIndicator": {
                                                              "type": "container",
                                                              "class": "flex justify-center",
                                                              "children": [
                                                                {
                                                                  "type": "element",
                                                                  "elementType": "staticHtmlTag",
                                                                  "tag": "span",
                                                                  "text": "",
                                                                  "class": "w-6 h-6 border-b-2 border-gray-600 rounded-full animate-spin"
                                                                }
                                                              ]
                                                            }
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "description": "uploadcare progress",
                                                        "type": "container",
                                                        "class": "",
                                                        "conditionArray": [
                                                          {
                                                            "cd": "INI, k, uploadcareProgress:images.outline[0], notEmpty"
                                                          },
                                                          {
                                                            "cd": "AND, k, uploadcareProgress:images.outline[0], gte, s, 0"
                                                          }
                                                        ],
                                                        "children": [
                                                          {
                                                            "type": "container",
                                                            "class": "relative flex items-center justify-center mt-4",
                                                            "children": [
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "div",
                                                                "class": "bg-amber-400 h-2 ",
                                                                "style": "ex:'width: ' + uploadcareProgress:images.outline[0] + 'vw'",
                                                                "text": ""
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "div",
                                                                "class": "w-full h-full",
                                                                "text": "ex:uploadcareProgress:images.outline[0] + '%'"
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "description": "image outline",
                                                        "type": "element",
                                                        "elementType": "staticHtmlTag",
                                                        "tag": "img",
                                                        "conditionArray": [
                                                          {
                                                            "cd": "INI, k, images.outline[0].imageResponse.cdnUrl, notEmpty"
                                                          }
                                                        ],
                                                        "src": "ex:images.outline[0].imageResponse.cdnUrl + '/-/resize/400x/-/format/auto/-/quality/smart/'",
                                                        "class": "w-[80%] rounded-xl ml-3 pb-2"
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
                                        "description": "part container",
                                        "type": "container",
                                        "class": " w-full flex flex-col",
                                        "children": [
                                          {
                                            "description": "card 1 header",
                                            "type": "container",
                                            "class": "bg-[#88959b] rounded-sm h-10 pl-3 cursor-pointer",
                                            "children": [
                                              {
                                                "description": "card1 above card headline",
                                                "type": "container",
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
                                                    "text": "part images",
                                                    "class": "text-sm font-bold"
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            "description": "front uploader",
                                            "type": "container",
                                            "class": "flex space-x-4",
                                            "children": [
                                              {
                                                "description": "front_part uploader",
                                                "type": "container",
                                                "class": "relative inline-block align-bottom rounded-sm text-left transform transition-all sm:align-middle w-32 h-32 pt-4",
                                                "children": [
                                                  {
                                                    "description": "dialog card",
                                                    "type": "element",
                                                    "elementType": "uploadcareFileProvision",
                                                    "uploaderId": "uc_front_part",
                                                    "maxDownload": 10,
                                                    "key": "images.front_part",
                                                    "uploaderResponseKey": "imageResponse",
                                                    "key2write": "",
                                                    "value2write": "",
                                                    "class": "relative bg-gray-300 h-full rounded-xl border-2 border-gray-500 border-dashed",
                                                    "children": [
                                                      {
                                                        "description": "drop zone overlay",
                                                        "type": "container",
                                                        "children": [
                                                          {
                                                            "type": "overlay",
                                                            "uploaderId": "uc_front_part",
                                                            "class": "absolute z-50 w-full h-full bg-white/[.9] overflow-hidden",
                                                            "children": [
                                                              {
                                                                "type": "container",
                                                                "class": "-z-10 flex justify-center items-center w-full h-full",
                                                                "children": [
                                                                  {
                                                                    "type": "container",
                                                                    "class": "-z-10 w-64 h-64 justify-center items-center border-4 border-gray-300 rounded-xl",
                                                                    "children": [
                                                                      {
                                                                        "type": "container",
                                                                        "class": "-z-10 flex flex-col justify-center items-center w-full h-full",
                                                                        "children": [
                                                                          {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "text": "backup",
                                                                            "class": "material-symbols-outlined text-[50px] text-gray-300"
                                                                          },
                                                                          {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "text": "uploadcare",
                                                                            "class": "text-[14px] text-gray-400"
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
                                                        "description": "title + delete",
                                                        "type": "container",
                                                        "class": "flex justify between",
                                                        "children": [
                                                          {
                                                            "description": "headline",
                                                            "type": "element",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "text": "front part",
                                                            "class": "text-13 w-full text-gray-600 font-bold pl-2 pt-2"
                                                          },
                                                          {
                                                            "description": "image delete",
                                                            "type": "uploadEvent",
                                                            "eventType": "delete",
                                                            "criteria": "images.front_part[0]",
                                                            "uploaderResponseKey": "imageResponse",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "conditionArray": [],
                                                            "text": "delete",
                                                            "class": "material-symbols-outlined font-medium text-gray-500 hover:text-gray-500 text-20 pl-2 cursor-pointer p-2",
                                                            "progressIndicator": {
                                                              "type": "container",
                                                              "class": "flex justify-center",
                                                              "children": [
                                                                {
                                                                  "type": "element",
                                                                  "elementType": "staticHtmlTag",
                                                                  "tag": "span",
                                                                  "text": "",
                                                                  "class": "w-6 h-6 border-b-2 border-gray-600 rounded-full animate-spin"
                                                                }
                                                              ]
                                                            }
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "description": "uploadcare progress",
                                                        "type": "container",
                                                        "class": "",
                                                        "conditionArray": [
                                                          {
                                                            "cd": "INI, k, uploadcareProgress:images.front_part[0], notEmpty"
                                                          },
                                                          {
                                                            "cd": "AND, k, uploadcareProgress:images.front_part[0], gte, s, 0"
                                                          }
                                                        ],
                                                        "children": [
                                                          {
                                                            "type": "container",
                                                            "class": "relative flex items-center justify-center mt-4",
                                                            "children": [
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "div",
                                                                "class": "bg-amber-400 h-2 ",
                                                                "style": "ex:'width: ' + uploadcareProgress:images.front_part[0] + 'vw'",
                                                                "text": ""
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "div",
                                                                "class": "w-full h-full",
                                                                "text": "ex:uploadcareProgress:images.front_part[0] + '%'"
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "description": "image preview",
                                                        "type": "element",
                                                        "elementType": "staticHtmlTag",
                                                        "tag": "img",
                                                        "conditionArray": [
                                                          {
                                                            "cd": "INI, k, images.front_part[0].imageResponse.cdnUrl, notEmpty"
                                                          }
                                                        ],
                                                        "src": "ex:images.front_part[0].imageResponse.cdnUrl + '/-/resize/400x/-/format/auto/-/quality/smart/'",
                                                        "class": "w-[80%] rounded-xl ml-3 pb-2"
                                                      }
                                                    ]
                                                  }
                                                ]
                                              },
                                              {
                                                "description": "front_ruler uploader",
                                                "type": "container",
                                                "class": "relative inline-block align-bottom rounded-sm text-left transform transition-all sm:align-middle w-32 h-32 pt-4",
                                                "children": [
                                                  {
                                                    "description": "dialog card",
                                                    "type": "element",
                                                    "elementType": "uploadcareFileProvision",
                                                    "uploaderId": "uc_front_ruler",
                                                    "maxDownload": 10,
                                                    "key": "images.front_ruler",
                                                    "uploaderResponseKey": "imageResponse",
                                                    "key2write": "",
                                                    "value2write": "",
                                                    "class": "relative bg-gray-300 h-full rounded-xl border-2 border-gray-500 border-dashed",
                                                    "children": [
                                                      {
                                                        "description": "drop zone overlay",
                                                        "type": "container",
                                                        "children": [
                                                          {
                                                            "type": "overlay",
                                                            "uploaderId": "uc_front_ruler",
                                                            "class": "absolute z-50 w-full h-full bg-white/[.9] overflow-hidden",
                                                            "children": [
                                                              {
                                                                "type": "container",
                                                                "class": "-z-10 flex justify-center items-center w-full h-full",
                                                                "children": [
                                                                  {
                                                                    "type": "container",
                                                                    "class": "-z-10 w-64 h-64 justify-center items-center border-4 border-gray-300 rounded-xl",
                                                                    "children": [
                                                                      {
                                                                        "type": "container",
                                                                        "class": "-z-10 flex flex-col justify-center items-center w-full h-full",
                                                                        "children": [
                                                                          {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "text": "backup",
                                                                            "class": "material-symbols-outlined text-[50px] text-gray-300"
                                                                          },
                                                                          {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "text": "uploadcare",
                                                                            "class": "text-[14px] text-gray-400"
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
                                                        "description": "title + delete",
                                                        "type": "container",
                                                        "class": "flex justify between",
                                                        "children": [
                                                          {
                                                            "description": "headline",
                                                            "type": "element",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "text": "front ruler",
                                                            "class": "text-13 w-full text-gray-600 font-bold pl-2 pt-2"
                                                          },
                                                          {
                                                            "description": "image delete",
                                                            "type": "uploadEvent",
                                                            "eventType": "delete",
                                                            "criteria": "images.front_ruler[0]",
                                                            "uploaderResponseKey": "imageResponse",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "conditionArray": [],
                                                            "text": "delete",
                                                            "class": "material-symbols-outlined font-medium text-gray-500 hover:text-gray-500 text-20 pl-2 cursor-pointer p-2",
                                                            "progressIndicator": {
                                                              "type": "container",
                                                              "class": "flex justify-center",
                                                              "children": [
                                                                {
                                                                  "type": "element",
                                                                  "elementType": "staticHtmlTag",
                                                                  "tag": "span",
                                                                  "text": "",
                                                                  "class": "w-6 h-6 border-b-2 border-gray-600 rounded-full animate-spin"
                                                                }
                                                              ]
                                                            }
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "description": "uploadcare progress",
                                                        "type": "container",
                                                        "class": "",
                                                        "conditionArray": [
                                                          {
                                                            "cd": "INI, k, uploadcareProgress:images.front_ruler[0], notEmpty"
                                                          },
                                                          {
                                                            "cd": "AND, k, uploadcareProgress:images.front_ruler[0], gte, s, 0"
                                                          }
                                                        ],
                                                        "children": [
                                                          {
                                                            "type": "container",
                                                            "class": "relative flex items-center justify-center mt-4",
                                                            "children": [
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "div",
                                                                "class": "bg-amber-400 h-2 ",
                                                                "style": "ex:'width: ' + uploadcareProgress:images.front_ruler[0] + 'vw'",
                                                                "text": ""
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "div",
                                                                "class": "w-full h-full",
                                                                "text": "ex:uploadcareProgress:images.front_ruler[0] + '%'"
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "description": "image preview",
                                                        "type": "element",
                                                        "elementType": "staticHtmlTag",
                                                        "tag": "img",
                                                        "conditionArray": [
                                                          {
                                                            "cd": "INI, k, images.front_ruler[0].imageResponse.cdnUrl, notEmpty"
                                                          }
                                                        ],
                                                        "src": "ex:images.front_ruler[0].imageResponse.cdnUrl + '/-/resize/400x/-/format/auto/-/quality/smart/'",
                                                        "class": "w-[80%] rounded-xl ml-3 pb-2"
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            "description": "back uploader",
                                            "type": "container",
                                            "class": "flex space-x-4 mt-8",
                                            "children": [
                                              {
                                                "description": "back_part uploader",
                                                "type": "container",
                                                "class": "relative inline-block align-bottom rounded-sm text-left transform transition-all sm:align-middle w-32 h-32 pt-4",
                                                "children": [
                                                  {
                                                    "description": "dialog card",
                                                    "type": "element",
                                                    "elementType": "uploadcareFileProvision",
                                                    "uploaderId": "uc_back_part",
                                                    "maxDownload": 10,
                                                    "key": "images.back_part",
                                                    "uploaderResponseKey": "imageResponse",
                                                    "key2write": "",
                                                    "value2write": "",
                                                    "class": "relative bg-gray-300 h-full rounded-xl border-2 border-gray-500 border-dashed",
                                                    "children": [
                                                      {
                                                        "description": "drop zone overlay",
                                                        "type": "container",
                                                        "children": [
                                                          {
                                                            "type": "overlay",
                                                            "uploaderId": "uc_back_part",
                                                            "class": "absolute z-50 w-full h-full bg-white/[.9] overflow-hidden",
                                                            "children": [
                                                              {
                                                                "type": "container",
                                                                "class": "-z-10 flex justify-center items-center w-full h-full",
                                                                "children": [
                                                                  {
                                                                    "type": "container",
                                                                    "class": "-z-10 w-64 h-64 justify-center items-center border-4 border-gray-300 rounded-xl",
                                                                    "children": [
                                                                      {
                                                                        "type": "container",
                                                                        "class": "-z-10 flex flex-col justify-center items-center w-full h-full",
                                                                        "children": [
                                                                          {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "text": "backup",
                                                                            "class": "material-symbols-outlined text-[50px] text-gray-300"
                                                                          },
                                                                          {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "text": "uploadcare",
                                                                            "class": "text-[14px] text-gray-400"
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
                                                        "description": "title + delete",
                                                        "type": "container",
                                                        "class": "flex justify between",
                                                        "children": [
                                                          {
                                                            "description": "headline",
                                                            "type": "element",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "text": "back part",
                                                            "class": "text-13 w-full text-gray-600 font-bold pl-2 pt-2"
                                                          },
                                                          {
                                                            "description": "image delete",
                                                            "type": "uploadEvent",
                                                            "eventType": "delete",
                                                            "criteria": "images.back_part[0]",
                                                            "uploaderResponseKey": "imageResponse",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "conditionArray": [],
                                                            "text": "delete",
                                                            "class": "material-symbols-outlined font-medium text-gray-500 hover:text-gray-500 text-20 pl-2 cursor-pointer p-2",
                                                            "progressIndicator": {
                                                              "type": "container",
                                                              "class": "flex justify-center",
                                                              "children": [
                                                                {
                                                                  "type": "element",
                                                                  "elementType": "staticHtmlTag",
                                                                  "tag": "span",
                                                                  "text": "",
                                                                  "class": "w-6 h-6 border-b-2 border-gray-600 rounded-full animate-spin"
                                                                }
                                                              ]
                                                            }
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "description": "uploadcare progress",
                                                        "type": "container",
                                                        "class": "",
                                                        "conditionArray": [
                                                          {
                                                            "cd": "INI, k, uploadcareProgress:images.back_part[0], notEmpty"
                                                          },
                                                          {
                                                            "cd": "AND, k, uploadcareProgress:images.back_part[0], gte, s, 0"
                                                          }
                                                        ],
                                                        "children": [
                                                          {
                                                            "type": "container",
                                                            "class": "relative flex items-center justify-center mt-4",
                                                            "children": [
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "div",
                                                                "class": "bg-amber-400 h-2 ",
                                                                "style": "ex:'width: ' + uploadcareProgress:images.back_part[0] + 'vw'",
                                                                "text": ""
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "div",
                                                                "class": "w-full h-full",
                                                                "text": "ex:uploadcareProgress:images.back_part[0] + '%'"
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "description": "image preview",
                                                        "type": "element",
                                                        "elementType": "staticHtmlTag",
                                                        "tag": "img",
                                                        "conditionArray": [
                                                          {
                                                            "cd": "INI, k, images.back_part[0].imageResponse.cdnUrl, notEmpty"
                                                          }
                                                        ],
                                                        "src": "ex:images.back_part[0].imageResponse.cdnUrl + '/-/resize/400x/-/format/auto/-/quality/smart/'",
                                                        "class": "w-[80%] rounded-xl ml-3 pb-2"
                                                      }
                                                    ]
                                                  }
                                                ]
                                              },
                                              {
                                                "description": "back_ruler uploader",
                                                "type": "container",
                                                "class": "relative inline-block align-bottom rounded-sm text-left transform transition-all sm:align-middle w-32 h-32 pt-4",
                                                "children": [
                                                  {
                                                    "description": "dialog card",
                                                    "type": "element",
                                                    "elementType": "uploadcareFileProvision",
                                                    "uploaderId": "uc_back_ruler",
                                                    "maxDownload": 10,
                                                    "key": "images.back_ruler",
                                                    "uploaderResponseKey": "imageResponse",
                                                    "key2write": "",
                                                    "value2write": "",
                                                    "class": "relative bg-gray-300 h-full rounded-xl border-2 border-gray-500 border-dashed",
                                                    "children": [
                                                      {
                                                        "description": "drop zone overlay",
                                                        "type": "container",
                                                        "children": [
                                                          {
                                                            "type": "overlay",
                                                            "uploaderId": "uc_back_ruler",
                                                            "class": "absolute z-50 w-full h-full bg-white/[.9] overflow-hidden",
                                                            "children": [
                                                              {
                                                                "type": "container",
                                                                "class": "-z-10 flex justify-center items-center w-full h-full",
                                                                "children": [
                                                                  {
                                                                    "type": "container",
                                                                    "class": "-z-10 w-64 h-64 justify-center items-center border-4 border-gray-300 rounded-xl",
                                                                    "children": [
                                                                      {
                                                                        "type": "container",
                                                                        "class": "-z-10 flex flex-col justify-center items-center w-full h-full",
                                                                        "children": [
                                                                          {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "text": "backup",
                                                                            "class": "material-symbols-outlined text-[50px] text-gray-300"
                                                                          },
                                                                          {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "text": "uploadcare",
                                                                            "class": "text-[14px] text-gray-400"
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
                                                        "description": "title + delete",
                                                        "type": "container",
                                                        "class": "flex justify between",
                                                        "children": [
                                                          {
                                                            "description": "headline",
                                                            "type": "element",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "text": "back ruler",
                                                            "class": "text-13 w-full text-gray-600 font-bold pl-2 pt-2"
                                                          },
                                                          {
                                                            "description": "image delete",
                                                            "type": "uploadEvent",
                                                            "eventType": "delete",
                                                            "criteria": "images.back_ruler[0]",
                                                            "uploaderResponseKey": "imageResponse",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "conditionArray": [],
                                                            "text": "delete",
                                                            "class": "material-symbols-outlined font-medium text-gray-500 hover:text-gray-500 text-20 pl-2 cursor-pointer p-2",
                                                            "progressIndicator": {
                                                              "type": "container",
                                                              "class": "flex justify-center",
                                                              "children": [
                                                                {
                                                                  "type": "element",
                                                                  "elementType": "staticHtmlTag",
                                                                  "tag": "span",
                                                                  "text": "",
                                                                  "class": "w-6 h-6 border-b-2 border-gray-600 rounded-full animate-spin"
                                                                }
                                                              ]
                                                            }
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "description": "uploadcare progress",
                                                        "type": "container",
                                                        "class": "",
                                                        "conditionArray": [
                                                          {
                                                            "cd": "INI, k, uploadcareProgress:images.back_ruler[0], notEmpty"
                                                          },
                                                          {
                                                            "cd": "AND, k, uploadcareProgress:images.back_ruler[0], gte, s, 0"
                                                          }
                                                        ],
                                                        "children": [
                                                          {
                                                            "type": "container",
                                                            "class": "relative flex items-center justify-center mt-4",
                                                            "children": [
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "div",
                                                                "class": "bg-amber-400 h-2 ",
                                                                "style": "ex:'width: ' + uploadcareProgress:images.back_ruler[0] + 'vw'",
                                                                "text": ""
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "div",
                                                                "class": "w-full h-full",
                                                                "text": "ex:uploadcareProgress:images.back_ruler[0] + '%'"
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "description": "image preview",
                                                        "type": "element",
                                                        "elementType": "staticHtmlTag",
                                                        "tag": "img",
                                                        "conditionArray": [
                                                          {
                                                            "cd": "INI, k, images.back_ruler[0].imageResponse.cdnUrl, notEmpty"
                                                          }
                                                        ],
                                                        "src": "ex:images.back_ruler[0].imageResponse.cdnUrl + '/-/resize/400x/-/format/auto/-/quality/smart/'",
                                                        "class": "w-[80%] rounded-xl ml-3 pb-2"
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            "description": "side1 uploader",
                                            "type": "container",
                                            "class": "flex space-x-4 mt-8",
                                            "children": [
                                              {
                                                "description": "side1_part uploader",
                                                "type": "container",
                                                "class": "relative inline-block align-bottom rounded-sm text-left transform transition-all sm:align-middle w-32 h-32 pt-4",
                                                "children": [
                                                  {
                                                    "description": "dialog card",
                                                    "type": "element",
                                                    "elementType": "uploadcareFileProvision",
                                                    "uploaderId": "uc_side1_part",
                                                    "maxDownload": 10,
                                                    "key": "images.side1_part",
                                                    "uploaderResponseKey": "imageResponse",
                                                    "key2write": "",
                                                    "value2write": "",
                                                    "class": "relative bg-gray-300 h-full rounded-xl border-2 border-gray-500 border-dashed",
                                                    "children": [
                                                      {
                                                        "description": "drop zone overlay",
                                                        "type": "container",
                                                        "children": [
                                                          {
                                                            "type": "overlay",
                                                            "uploaderId": "uc_side1_part",
                                                            "class": "absolute z-50 w-full h-full bg-white/[.9] overflow-hidden",
                                                            "children": [
                                                              {
                                                                "type": "container",
                                                                "class": "-z-10 flex justify-center items-center w-full h-full",
                                                                "children": [
                                                                  {
                                                                    "type": "container",
                                                                    "class": "-z-10 w-64 h-64 justify-center items-center border-4 border-gray-300 rounded-xl",
                                                                    "children": [
                                                                      {
                                                                        "type": "container",
                                                                        "class": "-z-10 flex flex-col justify-center items-center w-full h-full",
                                                                        "children": [
                                                                          {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "text": "side1up",
                                                                            "class": "material-symbols-outlined text-[50px] text-gray-300"
                                                                          },
                                                                          {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "text": "uploadcare",
                                                                            "class": "text-[14px] text-gray-400"
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
                                                        "description": "title + delete",
                                                        "type": "container",
                                                        "class": "flex justify between",
                                                        "children": [
                                                          {
                                                            "description": "headline",
                                                            "type": "element",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "text": "side1 part",
                                                            "class": "text-13 w-full text-gray-600 font-bold pl-2 pt-2"
                                                          },
                                                          {
                                                            "description": "image delete",
                                                            "type": "uploadEvent",
                                                            "eventType": "delete",
                                                            "criteria": "images.side1_part[0]",
                                                            "uploaderResponseKey": "imageResponse",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "conditionArray": [],
                                                            "text": "delete",
                                                            "class": "material-symbols-outlined font-medium text-gray-500 hover:text-gray-500 text-20 pl-2 cursor-pointer p-2",
                                                            "progressIndicator": {
                                                              "type": "container",
                                                              "class": "flex justify-center",
                                                              "children": [
                                                                {
                                                                  "type": "element",
                                                                  "elementType": "staticHtmlTag",
                                                                  "tag": "span",
                                                                  "text": "",
                                                                  "class": "w-6 h-6 border-b-2 border-gray-600 rounded-full animate-spin"
                                                                }
                                                              ]
                                                            }
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "description": "uploadcare progress",
                                                        "type": "container",
                                                        "class": "",
                                                        "conditionArray": [
                                                          {
                                                            "cd": "INI, k, uploadcareProgress:images.side1_part[0], notEmpty"
                                                          },
                                                          {
                                                            "cd": "AND, k, uploadcareProgress:images.side1_part[0], gte, s, 0"
                                                          }
                                                        ],
                                                        "children": [
                                                          {
                                                            "type": "container",
                                                            "class": "relative flex items-center justify-center mt-4",
                                                            "children": [
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "div",
                                                                "class": "bg-amber-400 h-2 ",
                                                                "style": "ex:'width: ' + uploadcareProgress:images.side1_part[0] + 'vw'",
                                                                "text": ""
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "div",
                                                                "class": "w-full h-full",
                                                                "text": "ex:uploadcareProgress:images.side1_part[0] + '%'"
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "description": "image preview",
                                                        "type": "element",
                                                        "elementType": "staticHtmlTag",
                                                        "tag": "img",
                                                        "conditionArray": [
                                                          {
                                                            "cd": "INI, k, images.side1_part[0].imageResponse.cdnUrl, notEmpty"
                                                          }
                                                        ],
                                                        "src": "ex:images.side1_part[0].imageResponse.cdnUrl + '/-/resize/400x/-/format/auto/-/quality/smart/'",
                                                        "class": "w-[80%] rounded-xl ml-3 pb-2"
                                                      }
                                                    ]
                                                  }
                                                ]
                                              },
                                              {
                                                "description": "side1_ruler uploader",
                                                "type": "container",
                                                "class": "relative inline-block align-bottom rounded-sm text-left transform transition-all sm:align-middle w-32 h-32 pt-4",
                                                "children": [
                                                  {
                                                    "description": "dialog card",
                                                    "type": "element",
                                                    "elementType": "uploadcareFileProvision",
                                                    "uploaderId": "uc_side1_ruler",
                                                    "maxDownload": 10,
                                                    "key": "images.side1_ruler",
                                                    "uploaderResponseKey": "imageResponse",
                                                    "key2write": "",
                                                    "value2write": "",
                                                    "class": "relative bg-gray-300 h-full rounded-xl border-2 border-gray-500 border-dashed",
                                                    "children": [
                                                      {
                                                        "description": "drop zone overlay",
                                                        "type": "container",
                                                        "children": [
                                                          {
                                                            "type": "overlay",
                                                            "uploaderId": "uc_side1_ruler",
                                                            "class": "absolute z-50 w-full h-full bg-white/[.9] overflow-hidden",
                                                            "children": [
                                                              {
                                                                "type": "container",
                                                                "class": "-z-10 flex justify-center items-center w-full h-full",
                                                                "children": [
                                                                  {
                                                                    "type": "container",
                                                                    "class": "-z-10 w-64 h-64 justify-center items-center border-4 border-gray-300 rounded-xl",
                                                                    "children": [
                                                                      {
                                                                        "type": "container",
                                                                        "class": "-z-10 flex flex-col justify-center items-center w-full h-full",
                                                                        "children": [
                                                                          {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "text": "side1up",
                                                                            "class": "material-symbols-outlined text-[50px] text-gray-300"
                                                                          },
                                                                          {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "text": "uploadcare",
                                                                            "class": "text-[14px] text-gray-400"
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
                                                        "description": "title + delete",
                                                        "type": "container",
                                                        "class": "flex justify between",
                                                        "children": [
                                                          {
                                                            "description": "headline",
                                                            "type": "element",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "text": "side1 ruler",
                                                            "class": "text-13 w-full text-gray-600 font-bold pl-2 pt-2"
                                                          },
                                                          {
                                                            "description": "image delete",
                                                            "type": "uploadEvent",
                                                            "eventType": "delete",
                                                            "criteria": "images.side1_ruler[0]",
                                                            "uploaderResponseKey": "imageResponse",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "conditionArray": [],
                                                            "text": "delete",
                                                            "class": "material-symbols-outlined font-medium text-gray-500 hover:text-gray-500 text-20 pl-2 cursor-pointer p-2",
                                                            "progressIndicator": {
                                                              "type": "container",
                                                              "class": "flex justify-center",
                                                              "children": [
                                                                {
                                                                  "type": "element",
                                                                  "elementType": "staticHtmlTag",
                                                                  "tag": "span",
                                                                  "text": "",
                                                                  "class": "w-6 h-6 border-b-2 border-gray-600 rounded-full animate-spin"
                                                                }
                                                              ]
                                                            }
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "description": "uploadcare progress",
                                                        "type": "container",
                                                        "class": "",
                                                        "conditionArray": [
                                                          {
                                                            "cd": "INI, k, uploadcareProgress:images.side1_ruler[0], notEmpty"
                                                          },
                                                          {
                                                            "cd": "AND, k, uploadcareProgress:images.side1_ruler[0], gte, s, 0"
                                                          }
                                                        ],
                                                        "children": [
                                                          {
                                                            "type": "container",
                                                            "class": "relative flex items-center justify-center mt-4",
                                                            "children": [
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "div",
                                                                "class": "bg-amber-400 h-2 ",
                                                                "style": "ex:'width: ' + uploadcareProgress:images.side1_ruler[0] + 'vw'",
                                                                "text": ""
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "div",
                                                                "class": "w-full h-full",
                                                                "text": "ex:uploadcareProgress:images.side1_ruler[0] + '%'"
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "description": "image preview",
                                                        "type": "element",
                                                        "elementType": "staticHtmlTag",
                                                        "tag": "img",
                                                        "conditionArray": [
                                                          {
                                                            "cd": "INI, k, images.side1_ruler[0].imageResponse.cdnUrl, notEmpty"
                                                          }
                                                        ],
                                                        "src": "ex:images.side1_ruler[0].imageResponse.cdnUrl + '/-/resize/400x/-/format/auto/-/quality/smart/'",
                                                        "class": "w-[80%] rounded-xl ml-3 pb-2"
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            "description": "side2 uploader",
                                            "type": "container",
                                            "class": "flex space-x-4 mt-8",
                                            "children": [
                                              {
                                                "description": "side2_part uploader",
                                                "type": "container",
                                                "class": "relative inline-block align-bottom rounded-sm text-left transform transition-all sm:align-middle w-32 h-32 pt-4",
                                                "children": [
                                                  {
                                                    "description": "dialog card",
                                                    "type": "element",
                                                    "elementType": "uploadcareFileProvision",
                                                    "uploaderId": "uc_side2_part",
                                                    "maxDownload": 10,
                                                    "key": "images.side2_part",
                                                    "uploaderResponseKey": "imageResponse",
                                                    "key2write": "",
                                                    "value2write": "",
                                                    "class": "relative bg-gray-300 h-full rounded-xl border-2 border-gray-500 border-dashed",
                                                    "children": [
                                                      {
                                                        "description": "drop zone overlay",
                                                        "type": "container",
                                                        "children": [
                                                          {
                                                            "type": "overlay",
                                                            "uploaderId": "uc_side2_part",
                                                            "class": "absolute z-50 w-full h-full bg-white/[.9] overflow-hidden",
                                                            "children": [
                                                              {
                                                                "type": "container",
                                                                "class": "-z-10 flex justify-center items-center w-full h-full",
                                                                "children": [
                                                                  {
                                                                    "type": "container",
                                                                    "class": "-z-10 w-64 h-64 justify-center items-center border-4 border-gray-300 rounded-xl",
                                                                    "children": [
                                                                      {
                                                                        "type": "container",
                                                                        "class": "-z-10 flex flex-col justify-center items-center w-full h-full",
                                                                        "children": [
                                                                          {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "text": "side2up",
                                                                            "class": "material-symbols-outlined text-[50px] text-gray-300"
                                                                          },
                                                                          {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "text": "uploadcare",
                                                                            "class": "text-[14px] text-gray-400"
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
                                                        "description": "title + delete",
                                                        "type": "container",
                                                        "class": "flex justify between",
                                                        "children": [
                                                          {
                                                            "description": "headline",
                                                            "type": "element",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "text": "side2 part",
                                                            "class": "text-13 w-full text-gray-600 font-bold pl-2 pt-2"
                                                          },
                                                          {
                                                            "description": "image delete",
                                                            "type": "uploadEvent",
                                                            "eventType": "delete",
                                                            "criteria": "images.side2_part[0]",
                                                            "uploaderResponseKey": "imageResponse",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "conditionArray": [],
                                                            "text": "delete",
                                                            "class": "material-symbols-outlined font-medium text-gray-500 hover:text-gray-500 text-20 pl-2 cursor-pointer p-2",
                                                            "progressIndicator": {
                                                              "type": "container",
                                                              "class": "flex justify-center",
                                                              "children": [
                                                                {
                                                                  "type": "element",
                                                                  "elementType": "staticHtmlTag",
                                                                  "tag": "span",
                                                                  "text": "",
                                                                  "class": "w-6 h-6 border-b-2 border-gray-600 rounded-full animate-spin"
                                                                }
                                                              ]
                                                            }
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "description": "uploadcare progress",
                                                        "type": "container",
                                                        "class": "",
                                                        "conditionArray": [
                                                          {
                                                            "cd": "INI, k, uploadcareProgress:images.side2_part[0], notEmpty"
                                                          },
                                                          {
                                                            "cd": "AND, k, uploadcareProgress:images.side2_part[0], gte, s, 0"
                                                          }
                                                        ],
                                                        "children": [
                                                          {
                                                            "type": "container",
                                                            "class": "relative flex items-center justify-center mt-4",
                                                            "children": [
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "div",
                                                                "class": "bg-amber-400 h-2 ",
                                                                "style": "ex:'width: ' + uploadcareProgress:images.side2_part[0] + 'vw'",
                                                                "text": ""
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "div",
                                                                "class": "w-full h-full",
                                                                "text": "ex:uploadcareProgress:images.side2_part[0] + '%'"
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "description": "image preview",
                                                        "type": "element",
                                                        "elementType": "staticHtmlTag",
                                                        "tag": "img",
                                                        "conditionArray": [
                                                          {
                                                            "cd": "INI, k, images.side2_part[0].imageResponse.cdnUrl, notEmpty"
                                                          }
                                                        ],
                                                        "src": "ex:images.side2_part[0].imageResponse.cdnUrl + '/-/resize/400x/-/format/auto/-/quality/smart/'",
                                                        "class": "w-[80%] rounded-xl ml-3 pb-2"
                                                      }
                                                    ]
                                                  }
                                                ]
                                              },
                                              {
                                                "description": "side2_ruler uploader",
                                                "type": "container",
                                                "class": "relative inline-block align-bottom rounded-sm text-left transform transition-all sm:align-middle w-32 h-32 pt-4",
                                                "children": [
                                                  {
                                                    "description": "dialog card",
                                                    "type": "element",
                                                    "elementType": "uploadcareFileProvision",
                                                    "uploaderId": "uc_side2_ruler",
                                                    "maxDownload": 10,
                                                    "key": "images.side2_ruler",
                                                    "uploaderResponseKey": "imageResponse",
                                                    "key2write": "",
                                                    "value2write": "",
                                                    "class": "relative bg-gray-300 h-full rounded-xl border-2 border-gray-500 border-dashed",
                                                    "children": [
                                                      {
                                                        "description": "drop zone overlay",
                                                        "type": "container",
                                                        "children": [
                                                          {
                                                            "type": "overlay",
                                                            "uploaderId": "uc_side2_ruler",
                                                            "class": "absolute z-50 w-full h-full bg-white/[.9] overflow-hidden",
                                                            "children": [
                                                              {
                                                                "type": "container",
                                                                "class": "-z-10 flex justify-center items-center w-full h-full",
                                                                "children": [
                                                                  {
                                                                    "type": "container",
                                                                    "class": "-z-10 w-64 h-64 justify-center items-center border-4 border-gray-300 rounded-xl",
                                                                    "children": [
                                                                      {
                                                                        "type": "container",
                                                                        "class": "-z-10 flex flex-col justify-center items-center w-full h-full",
                                                                        "children": [
                                                                          {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "text": "side2up",
                                                                            "class": "material-symbols-outlined text-[50px] text-gray-300"
                                                                          },
                                                                          {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "text": "uploadcare",
                                                                            "class": "text-[14px] text-gray-400"
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
                                                        "description": "title + delete",
                                                        "type": "container",
                                                        "class": "flex justify between",
                                                        "children": [
                                                          {
                                                            "description": "headline",
                                                            "type": "element",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "text": "side2 ruler",
                                                            "class": "text-13 w-full text-gray-600 font-bold pl-2 pt-2"
                                                          },
                                                          {
                                                            "description": "image delete",
                                                            "type": "uploadEvent",
                                                            "eventType": "delete",
                                                            "criteria": "images.side2_ruler[0]",
                                                            "uploaderResponseKey": "imageResponse",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "conditionArray": [],
                                                            "text": "delete",
                                                            "class": "material-symbols-outlined font-medium text-gray-500 hover:text-gray-500 text-20 pl-2 cursor-pointer p-2",
                                                            "progressIndicator": {
                                                              "type": "container",
                                                              "class": "flex justify-center",
                                                              "children": [
                                                                {
                                                                  "type": "element",
                                                                  "elementType": "staticHtmlTag",
                                                                  "tag": "span",
                                                                  "text": "",
                                                                  "class": "w-6 h-6 border-b-2 border-gray-600 rounded-full animate-spin"
                                                                }
                                                              ]
                                                            }
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "description": "uploadcare progress",
                                                        "type": "container",
                                                        "class": "",
                                                        "conditionArray": [
                                                          {
                                                            "cd": "INI, k, uploadcareProgress:images.side2_ruler[0], notEmpty"
                                                          },
                                                          {
                                                            "cd": "AND, k, uploadcareProgress:images.side2_ruler[0], gte, s, 0"
                                                          }
                                                        ],
                                                        "children": [
                                                          {
                                                            "type": "container",
                                                            "class": "relative flex items-center justify-center mt-4",
                                                            "children": [
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "div",
                                                                "class": "bg-amber-400 h-2 ",
                                                                "style": "ex:'width: ' + uploadcareProgress:images.side2_ruler[0] + 'vw'",
                                                                "text": ""
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "div",
                                                                "class": "w-full h-full",
                                                                "text": "ex:uploadcareProgress:images.side2_ruler[0] + '%'"
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "description": "image preview",
                                                        "type": "element",
                                                        "elementType": "staticHtmlTag",
                                                        "tag": "img",
                                                        "conditionArray": [
                                                          {
                                                            "cd": "INI, k, images.side2_ruler[0].imageResponse.cdnUrl, notEmpty"
                                                          }
                                                        ],
                                                        "src": "ex:images.side2_ruler[0].imageResponse.cdnUrl + '/-/resize/400x/-/format/auto/-/quality/smart/'",
                                                        "class": "w-[80%] rounded-xl ml-3 pb-2"
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            "description": "side3 uploader",
                                            "type": "container",
                                            "class": "flex space-x-4 mt-8",
                                            "children": [
                                              {
                                                "description": "side3_part uploader",
                                                "type": "container",
                                                "class": "relative inline-block align-bottom rounded-sm text-left transform transition-all sm:align-middle w-32 h-32 pt-4",
                                                "children": [
                                                  {
                                                    "description": "dialog card",
                                                    "type": "element",
                                                    "elementType": "uploadcareFileProvision",
                                                    "uploaderId": "uc_side3_part",
                                                    "maxDownload": 10,
                                                    "key": "images.side3_part",
                                                    "uploaderResponseKey": "imageResponse",
                                                    "key2write": "",
                                                    "value2write": "",
                                                    "class": "relative bg-gray-300 h-full rounded-xl border-2 border-gray-500 border-dashed",
                                                    "children": [
                                                      {
                                                        "description": "drop zone overlay",
                                                        "type": "container",
                                                        "children": [
                                                          {
                                                            "type": "overlay",
                                                            "uploaderId": "uc_side3_part",
                                                            "class": "absolute z-50 w-full h-full bg-white/[.9] overflow-hidden",
                                                            "children": [
                                                              {
                                                                "type": "container",
                                                                "class": "-z-10 flex justify-center items-center w-full h-full",
                                                                "children": [
                                                                  {
                                                                    "type": "container",
                                                                    "class": "-z-10 w-64 h-64 justify-center items-center border-4 border-gray-300 rounded-xl",
                                                                    "children": [
                                                                      {
                                                                        "type": "container",
                                                                        "class": "-z-10 flex flex-col justify-center items-center w-full h-full",
                                                                        "children": [
                                                                          {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "text": "side3up",
                                                                            "class": "material-symbols-outlined text-[50px] text-gray-300"
                                                                          },
                                                                          {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "text": "uploadcare",
                                                                            "class": "text-[14px] text-gray-400"
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
                                                        "description": "title + delete",
                                                        "type": "container",
                                                        "class": "flex justify between",
                                                        "children": [
                                                          {
                                                            "description": "headline",
                                                            "type": "element",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "text": "side3 part",
                                                            "class": "text-13 w-full text-gray-600 font-bold pl-2 pt-2"
                                                          },
                                                          {
                                                            "description": "image delete",
                                                            "type": "uploadEvent",
                                                            "eventType": "delete",
                                                            "criteria": "images.side3_part[0]",
                                                            "uploaderResponseKey": "imageResponse",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "conditionArray": [],
                                                            "text": "delete",
                                                            "class": "material-symbols-outlined font-medium text-gray-500 hover:text-gray-500 text-20 pl-2 cursor-pointer p-2",
                                                            "progressIndicator": {
                                                              "type": "container",
                                                              "class": "flex justify-center",
                                                              "children": [
                                                                {
                                                                  "type": "element",
                                                                  "elementType": "staticHtmlTag",
                                                                  "tag": "span",
                                                                  "text": "",
                                                                  "class": "w-6 h-6 border-b-2 border-gray-600 rounded-full animate-spin"
                                                                }
                                                              ]
                                                            }
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "description": "uploadcare progress",
                                                        "type": "container",
                                                        "class": "",
                                                        "conditionArray": [
                                                          {
                                                            "cd": "INI, k, uploadcareProgress:images.side3_part[0], notEmpty"
                                                          },
                                                          {
                                                            "cd": "AND, k, uploadcareProgress:images.side3_part[0], gte, s, 0"
                                                          }
                                                        ],
                                                        "children": [
                                                          {
                                                            "type": "container",
                                                            "class": "relative flex items-center justify-center mt-4",
                                                            "children": [
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "div",
                                                                "class": "bg-amber-400 h-2 ",
                                                                "style": "ex:'width: ' + uploadcareProgress:images.side3_part[0] + 'vw'",
                                                                "text": ""
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "div",
                                                                "class": "w-full h-full",
                                                                "text": "ex:uploadcareProgress:images.side3_part[0] + '%'"
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "description": "image preview",
                                                        "type": "element",
                                                        "elementType": "staticHtmlTag",
                                                        "tag": "img",
                                                        "conditionArray": [
                                                          {
                                                            "cd": "INI, k, images.side3_part[0].imageResponse.cdnUrl, notEmpty"
                                                          }
                                                        ],
                                                        "src": "ex:images.side3_part[0].imageResponse.cdnUrl + '/-/resize/400x/-/format/auto/-/quality/smart/'",
                                                        "class": "w-[80%] rounded-xl ml-3 pb-2"
                                                      }
                                                    ]
                                                  }
                                                ]
                                              },
                                              {
                                                "description": "side3_ruler uploader",
                                                "type": "container",
                                                "class": "relative inline-block align-bottom rounded-sm text-left transform transition-all sm:align-middle w-32 h-32 pt-4",
                                                "children": [
                                                  {
                                                    "description": "dialog card",
                                                    "type": "element",
                                                    "elementType": "uploadcareFileProvision",
                                                    "uploaderId": "uc_side3_ruler",
                                                    "maxDownload": 10,
                                                    "key": "images.side3_ruler",
                                                    "uploaderResponseKey": "imageResponse",
                                                    "key2write": "",
                                                    "value2write": "",
                                                    "class": "relative bg-gray-300 h-full rounded-xl border-2 border-gray-500 border-dashed",
                                                    "children": [
                                                      {
                                                        "description": "drop zone overlay",
                                                        "type": "container",
                                                        "children": [
                                                          {
                                                            "type": "overlay",
                                                            "uploaderId": "uc_side3_ruler",
                                                            "class": "absolute z-50 w-full h-full bg-white/[.9] overflow-hidden",
                                                            "children": [
                                                              {
                                                                "type": "container",
                                                                "class": "-z-10 flex justify-center items-center w-full h-full",
                                                                "children": [
                                                                  {
                                                                    "type": "container",
                                                                    "class": "-z-10 w-64 h-64 justify-center items-center border-4 border-gray-300 rounded-xl",
                                                                    "children": [
                                                                      {
                                                                        "type": "container",
                                                                        "class": "-z-10 flex flex-col justify-center items-center w-full h-full",
                                                                        "children": [
                                                                          {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "text": "side3up",
                                                                            "class": "material-symbols-outlined text-[50px] text-gray-300"
                                                                          },
                                                                          {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "text": "uploadcare",
                                                                            "class": "text-[14px] text-gray-400"
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
                                                        "description": "title + delete",
                                                        "type": "container",
                                                        "class": "flex justify between",
                                                        "children": [
                                                          {
                                                            "description": "headline",
                                                            "type": "element",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "text": "side3 ruler",
                                                            "class": "text-13 w-full text-gray-600 font-bold pl-2 pt-2"
                                                          },
                                                          {
                                                            "description": "image delete",
                                                            "type": "uploadEvent",
                                                            "eventType": "delete",
                                                            "criteria": "images.side3_ruler[0]",
                                                            "uploaderResponseKey": "imageResponse",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "conditionArray": [],
                                                            "text": "delete",
                                                            "class": "material-symbols-outlined font-medium text-gray-500 hover:text-gray-500 text-20 pl-2 cursor-pointer p-2",
                                                            "progressIndicator": {
                                                              "type": "container",
                                                              "class": "flex justify-center",
                                                              "children": [
                                                                {
                                                                  "type": "element",
                                                                  "elementType": "staticHtmlTag",
                                                                  "tag": "span",
                                                                  "text": "",
                                                                  "class": "w-6 h-6 border-b-2 border-gray-600 rounded-full animate-spin"
                                                                }
                                                              ]
                                                            }
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "description": "uploadcare progress",
                                                        "type": "container",
                                                        "class": "",
                                                        "conditionArray": [
                                                          {
                                                            "cd": "INI, k, uploadcareProgress:images.side3_ruler[0], notEmpty"
                                                          },
                                                          {
                                                            "cd": "AND, k, uploadcareProgress:images.side3_ruler[0], gte, s, 0"
                                                          }
                                                        ],
                                                        "children": [
                                                          {
                                                            "type": "container",
                                                            "class": "relative flex items-center justify-center mt-4",
                                                            "children": [
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "div",
                                                                "class": "bg-amber-400 h-2 ",
                                                                "style": "ex:'width: ' + uploadcareProgress:images.side3_ruler[0] + 'vw'",
                                                                "text": ""
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "div",
                                                                "class": "w-full h-full",
                                                                "text": "ex:uploadcareProgress:images.side3_ruler[0] + '%'"
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "description": "image preview",
                                                        "type": "element",
                                                        "elementType": "staticHtmlTag",
                                                        "tag": "img",
                                                        "conditionArray": [
                                                          {
                                                            "cd": "INI, k, images.side3_ruler[0].imageResponse.cdnUrl, notEmpty"
                                                          }
                                                        ],
                                                        "src": "ex:images.side3_ruler[0].imageResponse.cdnUrl + '/-/resize/400x/-/format/auto/-/quality/smart/'",
                                                        "class": "w-[80%] rounded-xl ml-3 pb-2"
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
                                        "description": "rack mounting container",
                                        "type": "container",
                                        "class": " w-full flex flex-col",
                                        "children": [
                                          {
                                            "description": "card 1 header",
                                            "type": "container",
                                            "class": "bg-[#88959b] rounded-sm h-10 pl-3 cursor-pointer",
                                            "children": [
                                              {
                                                "description": "card1 above card headline",
                                                "type": "container",
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
                                                    "text": "rack mounting images",
                                                    "class": "text-sm font-bold"
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            "description": "front uploader",
                                            "type": "container",
                                            "class": "flex space-x-4",
                                            "children": [
                                              {
                                                "description": "rack_longshot uploader",
                                                "type": "container",
                                                "class": "relative inline-block align-bottom rounded-sm text-left transform transition-all sm:align-middle w-32 h-32 pt-4",
                                                "children": [
                                                  {
                                                    "description": "dialog card",
                                                    "type": "element",
                                                    "elementType": "uploadcareFileProvision",
                                                    "uploaderId": "uc_rack_longshot",
                                                    "maxDownload": 10,
                                                    "key": "images.rack_longshot",
                                                    "uploaderResponseKey": "imageResponse",
                                                    "key2write": "",
                                                    "value2write": "",
                                                    "class": "relative bg-gray-300 h-full rounded-xl border-2 border-gray-500 border-dashed",
                                                    "children": [
                                                      {
                                                        "description": "drop zone overlay",
                                                        "type": "container",
                                                        "children": [
                                                          {
                                                            "type": "overlay",
                                                            "uploaderId": "uc_rack_longshot",
                                                            "class": "absolute z-50 w-full h-full bg-white/[.9] overflow-hidden",
                                                            "children": [
                                                              {
                                                                "type": "container",
                                                                "class": "-z-10 flex justify-center items-center w-full h-full",
                                                                "children": [
                                                                  {
                                                                    "type": "container",
                                                                    "class": "-z-10 w-64 h-64 justify-center items-center border-4 border-gray-300 rounded-xl",
                                                                    "children": [
                                                                      {
                                                                        "type": "container",
                                                                        "class": "-z-10 flex flex-col justify-center items-center w-full h-full",
                                                                        "children": [
                                                                          {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "text": "backup",
                                                                            "class": "material-symbols-outlined text-[50px] text-gray-300"
                                                                          },
                                                                          {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "text": "uploadcare",
                                                                            "class": "text-[14px] text-gray-400"
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
                                                        "description": "title + delete",
                                                        "type": "container",
                                                        "class": "flex justify between",
                                                        "children": [
                                                          {
                                                            "description": "headline",
                                                            "type": "element",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "text": "rack longshot",
                                                            "class": "text-13 w-full text-gray-600 font-bold pl-2 pt-2"
                                                          },
                                                          {
                                                            "description": "image delete",
                                                            "type": "uploadEvent",
                                                            "eventType": "delete",
                                                            "criteria": "images.rack_longshot[0]",
                                                            "uploaderResponseKey": "imageResponse",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "conditionArray": [],
                                                            "text": "delete",
                                                            "class": "material-symbols-outlined font-medium text-gray-500 hover:text-gray-500 text-20 pl-2 cursor-pointer p-2",
                                                            "progressIndicator": {
                                                              "type": "container",
                                                              "class": "flex justify-center",
                                                              "children": [
                                                                {
                                                                  "type": "element",
                                                                  "elementType": "staticHtmlTag",
                                                                  "tag": "span",
                                                                  "text": "",
                                                                  "class": "w-6 h-6 border-b-2 border-gray-600 rounded-full animate-spin"
                                                                }
                                                              ]
                                                            }
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "description": "uploadcare progress",
                                                        "type": "container",
                                                        "class": "",
                                                        "conditionArray": [
                                                          {
                                                            "cd": "INI, k, uploadcareProgress:images.rack_longshot[0], notEmpty"
                                                          },
                                                          {
                                                            "cd": "AND, k, uploadcareProgress:images.rack_longshot[0], gte, s, 0"
                                                          }
                                                        ],
                                                        "children": [
                                                          {
                                                            "type": "container",
                                                            "class": "relative flex items-center justify-center mt-4",
                                                            "children": [
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "div",
                                                                "class": "bg-amber-400 h-2 ",
                                                                "style": "ex:'width: ' + uploadcareProgress:images.rack_longshot[0] + 'vw'",
                                                                "text": ""
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "div",
                                                                "class": "w-full h-full",
                                                                "text": "ex:uploadcareProgress:images.rack_longshot[0] + '%'"
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "description": "image preview",
                                                        "type": "element",
                                                        "elementType": "staticHtmlTag",
                                                        "tag": "img",
                                                        "conditionArray": [
                                                          {
                                                            "cd": "INI, k, images.rack_longshot[0].imageResponse.cdnUrl, notEmpty"
                                                          }
                                                        ],
                                                        "src": "ex:images.rack_longshot[0].imageResponse.cdnUrl + '/-/resize/400x/-/format/auto/-/quality/smart/'",
                                                        "class": "w-[80%] rounded-xl ml-3 pb-2"
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
                                        "description": "other files container",
                                        "type": "container",
                                        "class": " w-full flex flex-col",
                                        "children": [
                                          {
                                            "description": "card 1 header",
                                            "type": "container",
                                            "class": "bg-[#88959b] rounded-sm h-10 pl-3 cursor-pointer",
                                            "children": [
                                              {
                                                "description": "card1 above card headline",
                                                "type": "container",
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
                                                    "text": "media",
                                                    "class": "text-sm font-bold"
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            "description": "media uploader",
                                            "type": "container",
                                            "class": "flex space-x-4",
                                            "children": [
                                              {
                                                "description": "front_part uploader",
                                                "type": "container",
                                                "class": "relative inline-block align-bottom rounded-sm text-left transform transition-all sm:align-middle w-32 h-32 pt-4",
                                                "children": [
                                                  {
                                                    "description": "dialog card",
                                                    "type": "element",
                                                    "elementType": "uploadcareFileProvision",
                                                    "uploaderId": "uc_front_part",
                                                    "maxDownload": 10,
                                                    "key": "images.front_part",
                                                    "uploaderResponseKey": "imageResponse",
                                                    "key2write": "",
                                                    "value2write": "",
                                                    "class": "relative bg-gray-300 h-full rounded-xl border-2 border-gray-500 border-dashed",
                                                    "children": [
                                                      {
                                                        "description": "drop zone overlay",
                                                        "type": "container",
                                                        "children": [
                                                          {
                                                            "type": "overlay",
                                                            "uploaderId": "uc_front_part",
                                                            "class": "absolute z-50 w-full h-full bg-white/[.9] overflow-hidden",
                                                            "children": [
                                                              {
                                                                "type": "container",
                                                                "class": "-z-10 flex justify-center items-center w-full h-full",
                                                                "children": [
                                                                  {
                                                                    "type": "container",
                                                                    "class": "-z-10 w-64 h-64 justify-center items-center border-4 border-gray-300 rounded-xl",
                                                                    "children": [
                                                                      {
                                                                        "type": "container",
                                                                        "class": "-z-10 flex flex-col justify-center items-center w-full h-full",
                                                                        "children": [
                                                                          {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "text": "backup",
                                                                            "class": "material-symbols-outlined text-[50px] text-gray-300"
                                                                          },
                                                                          {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "text": "uploadcare",
                                                                            "class": "text-[14px] text-gray-400"
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
                                                        "description": "title + delete",
                                                        "type": "container",
                                                        "class": "flex justify between",
                                                        "children": [
                                                          {
                                                            "description": "headline",
                                                            "type": "element",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "text": "front part",
                                                            "class": "text-13 w-full text-gray-600 font-bold pl-2 pt-2"
                                                          },
                                                          {
                                                            "description": "image delete",
                                                            "type": "uploadEvent",
                                                            "eventType": "delete",
                                                            "criteria": "images.front_part[0]",
                                                            "uploaderResponseKey": "imageResponse",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "conditionArray": [],
                                                            "text": "delete",
                                                            "class": "material-symbols-outlined font-medium text-gray-500 hover:text-gray-500 text-20 pl-2 cursor-pointer p-2",
                                                            "progressIndicator": {
                                                              "type": "container",
                                                              "class": "flex justify-center",
                                                              "children": [
                                                                {
                                                                  "type": "element",
                                                                  "elementType": "staticHtmlTag",
                                                                  "tag": "span",
                                                                  "text": "",
                                                                  "class": "w-6 h-6 border-b-2 border-gray-600 rounded-full animate-spin"
                                                                }
                                                              ]
                                                            }
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "description": "uploadcare progress",
                                                        "type": "container",
                                                        "class": "",
                                                        "conditionArray": [
                                                          {
                                                            "cd": "INI, k, uploadcareProgress:images.front_part[0], notEmpty"
                                                          },
                                                          {
                                                            "cd": "AND, k, uploadcareProgress:images.front_part[0], gte, s, 0"
                                                          }
                                                        ],
                                                        "children": [
                                                          {
                                                            "type": "container",
                                                            "class": "relative flex items-center justify-center mt-4",
                                                            "children": [
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "div",
                                                                "class": "bg-amber-400 h-2 ",
                                                                "style": "ex:'width: ' + uploadcareProgress:images.front_part[0] + 'vw'",
                                                                "text": ""
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "div",
                                                                "class": "w-full h-full",
                                                                "text": "ex:uploadcareProgress:images.front_part[0] + '%'"
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "description": "image preview",
                                                        "type": "element",
                                                        "elementType": "staticHtmlTag",
                                                        "tag": "img",
                                                        "conditionArray": [
                                                          {
                                                            "cd": "INI, k, images.front_part[0].imageResponse.cdnUrl, notEmpty"
                                                          }
                                                        ],
                                                        "src": "ex:images.front_part[0].imageResponse.cdnUrl + '/-/resize/400x/-/format/auto/-/quality/smart/'",
                                                        "class": "w-[80%] rounded-xl ml-3 pb-2"
                                                      }
                                                    ]
                                                  }
                                                ]
                                              },
                                              {
                                                "description": "front_ruler uploader",
                                                "type": "container",
                                                "class": "relative inline-block align-bottom rounded-sm text-left transform transition-all sm:align-middle w-32 h-32 pt-4",
                                                "children": [
                                                  {
                                                    "description": "dialog card",
                                                    "type": "element",
                                                    "elementType": "uploadcareFileProvision",
                                                    "uploaderId": "uc_front_ruler",
                                                    "maxDownload": 10,
                                                    "key": "images.front_ruler",
                                                    "uploaderResponseKey": "imageResponse",
                                                    "key2write": "",
                                                    "value2write": "",
                                                    "class": "relative bg-gray-300 h-full rounded-xl border-2 border-gray-500 border-dashed",
                                                    "children": [
                                                      {
                                                        "description": "drop zone overlay",
                                                        "type": "container",
                                                        "children": [
                                                          {
                                                            "type": "overlay",
                                                            "uploaderId": "uc_front_ruler",
                                                            "class": "absolute z-50 w-full h-full bg-white/[.9] overflow-hidden",
                                                            "children": [
                                                              {
                                                                "type": "container",
                                                                "class": "-z-10 flex justify-center items-center w-full h-full",
                                                                "children": [
                                                                  {
                                                                    "type": "container",
                                                                    "class": "-z-10 w-64 h-64 justify-center items-center border-4 border-gray-300 rounded-xl",
                                                                    "children": [
                                                                      {
                                                                        "type": "container",
                                                                        "class": "-z-10 flex flex-col justify-center items-center w-full h-full",
                                                                        "children": [
                                                                          {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "text": "backup",
                                                                            "class": "material-symbols-outlined text-[50px] text-gray-300"
                                                                          },
                                                                          {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "text": "uploadcare",
                                                                            "class": "text-[14px] text-gray-400"
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
                                                        "description": "title + delete",
                                                        "type": "container",
                                                        "class": "flex justify between",
                                                        "children": [
                                                          {
                                                            "description": "headline",
                                                            "type": "element",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "text": "front ruler",
                                                            "class": "text-13 w-full text-gray-600 font-bold pl-2 pt-2"
                                                          },
                                                          {
                                                            "description": "image delete",
                                                            "type": "uploadEvent",
                                                            "eventType": "delete",
                                                            "criteria": "images.front_ruler[0]",
                                                            "uploaderResponseKey": "imageResponse",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "conditionArray": [],
                                                            "text": "delete",
                                                            "class": "material-symbols-outlined font-medium text-gray-500 hover:text-gray-500 text-20 pl-2 cursor-pointer p-2",
                                                            "progressIndicator": {
                                                              "type": "container",
                                                              "class": "flex justify-center",
                                                              "children": [
                                                                {
                                                                  "type": "element",
                                                                  "elementType": "staticHtmlTag",
                                                                  "tag": "span",
                                                                  "text": "",
                                                                  "class": "w-6 h-6 border-b-2 border-gray-600 rounded-full animate-spin"
                                                                }
                                                              ]
                                                            }
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "description": "uploadcare progress",
                                                        "type": "container",
                                                        "class": "",
                                                        "conditionArray": [
                                                          {
                                                            "cd": "INI, k, uploadcareProgress:images.front_ruler[0], notEmpty"
                                                          },
                                                          {
                                                            "cd": "AND, k, uploadcareProgress:images.front_ruler[0], gte, s, 0"
                                                          }
                                                        ],
                                                        "children": [
                                                          {
                                                            "type": "container",
                                                            "class": "relative flex items-center justify-center mt-4",
                                                            "children": [
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "div",
                                                                "class": "bg-amber-400 h-2 ",
                                                                "style": "ex:'width: ' + uploadcareProgress:images.front_ruler[0] + 'vw'",
                                                                "text": ""
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "div",
                                                                "class": "w-full h-full",
                                                                "text": "ex:uploadcareProgress:images.front_ruler[0] + '%'"
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "description": "image preview",
                                                        "type": "element",
                                                        "elementType": "staticHtmlTag",
                                                        "tag": "img",
                                                        "conditionArray": [
                                                          {
                                                            "cd": "INI, k, images.front_ruler[0].imageResponse.cdnUrl, notEmpty"
                                                          }
                                                        ],
                                                        "src": "ex:images.front_ruler[0].imageResponse.cdnUrl + '/-/resize/400x/-/format/auto/-/quality/smart/'",
                                                        "class": "w-[80%] rounded-xl ml-3 pb-2"
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
                                        "description": "videos container",
                                        "type": "container",
                                        "class": " w-full flex flex-col",
                                        "children": [
                                          {
                                            "description": "card 1 header",
                                            "type": "container",
                                            "class": "bg-[#88959b] rounded-sm h-10 pl-3 cursor-pointer",
                                            "children": [
                                              {
                                                "description": "card1 above card headline",
                                                "type": "container",
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
                                                    "text": "single videos",
                                                    "class": "text-sm font-bold"
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            "description": "media uploader",
                                            "type": "container",
                                            "class": "flex space-x-4",
                                            "children": [
                                              {
                                                "description": "dwp_kontrolle_01_video_video uploader",
                                                "type": "container",
                                                "class": "relative inline-block align-bottom rounded-sm text-left transform transition-all sm:align-middle w-48 h-32 pt-4",
                                                "children": [
                                                  {
                                                    "description": "dialog card",
                                                    "type": "element",
                                                    "elementType": "uploadcareFileProvision",
                                                    "uploaderId": "uc_dwp_kontrolle_01_video",
                                                    "maxDownload": 10,
                                                    "key": "videos.dwp_kontrolle_01_video",
                                                    "uploaderResponseKey": "videoResponse",
                                                    "key2write": "",
                                                    "value2write": "",
                                                    "class": "relative bg-blue-300 h-full rounded-xl border-2 border-gray-500 border-dashed",
                                                    "children": [
                                                      {
                                                        "description": "drop zone overlay",
                                                        "type": "container",
                                                        "children": [
                                                          {
                                                            "type": "overlay",
                                                            "uploaderId": "uc_dwp_kontrolle_01_video",
                                                            "class": "absolute z-50 w-full h-full bg-white/[.9] overflow-hidden",
                                                            "children": [
                                                              {
                                                                "type": "container",
                                                                "class": "-z-10 flex justify-center items-center w-full h-full",
                                                                "children": [
                                                                  {
                                                                    "type": "container",
                                                                    "class": "-z-10 w-64 h-64 justify-center items-center border-4 border-gray-300 rounded-xl",
                                                                    "children": [
                                                                      {
                                                                        "type": "container",
                                                                        "class": "-z-10 flex flex-col justify-center items-center w-full h-full",
                                                                        "children": [
                                                                          {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "text": "backup",
                                                                            "class": "material-symbols-outlined text-[50px] text-gray-300"
                                                                          },
                                                                          {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "text": "uploadcare",
                                                                            "class": "text-[14px] text-gray-400"
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
                                                        "description": "title + delete",
                                                        "type": "container",
                                                        "class": "flex justify between",
                                                        "children": [
                                                          {
                                                            "description": "headline",
                                                            "type": "element",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "text": "DWP Kontrolle Video",
                                                            "class": "text-13 w-full text-gray-600 font-bold pl-2 pt-2"
                                                          },
                                                          {
                                                            "description": "image delete",
                                                            "type": "uploadEvent",
                                                            "eventType": "delete",
                                                            "criteria": "videos.dwp_kontrolle_01_video[0]",
                                                            "uploaderResponseKey": "videoResponse",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "conditionArray": [],
                                                            "text": "delete",
                                                            "class": "material-symbols-outlined font-medium text-gray-500 hover:text-gray-500 text-20 pl-2 cursor-pointer p-2",
                                                            "progressIndicator": {
                                                              "type": "container",
                                                              "class": "flex justify-center",
                                                              "children": [
                                                                {
                                                                  "type": "element",
                                                                  "elementType": "staticHtmlTag",
                                                                  "tag": "span",
                                                                  "text": "",
                                                                  "class": "w-6 h-6 border-b-2 border-gray-600 rounded-full animate-spin"
                                                                }
                                                              ]
                                                            }
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "description": "uploadcare progress",
                                                        "type": "container",
                                                        "class": "",
                                                        "conditionArray": [
                                                          {
                                                            "cd": "INI, k, uploadcareProgress:videos.dwp_kontrolle_01_video[0], notEmpty"
                                                          },
                                                          {
                                                            "cd": "AND, k, uploadcareProgress:videos.dwp_kontrolle_01_video[0], gte, s, 0"
                                                          }
                                                        ],
                                                        "children": [
                                                          {
                                                            "type": "container",
                                                            "class": "relative flex items-center justify-center mt-4",
                                                            "children": [
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "div",
                                                                "class": "bg-amber-400 h-2 ",
                                                                "style": "ex:'width: ' + uploadcareProgress:videos.dwp_kontrolle_01_video[0] + 'vw'",
                                                                "text": ""
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "div",
                                                                "class": "w-full h-full",
                                                                "text": "ex:uploadcareProgress:videos.dwp_kontrolle_01_video[0] + '%'"
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "description": "video title",
                                                        "type": "element",
                                                        "elementType": "staticHtmlTag",
                                                        "tag": "div",
                                                        "conditionArray": [
                                                          {
                                                            "cd": "INI, k, videos.dwp_kontrolle_01_video[0].videoResponse.name, notEmpty"
                                                          }
                                                        ],
                                                        "text": "videos.dwp_kontrolle_01_video[0].videoResponse.name",
                                                        "class": "w-full text-10 font-bold ml-3 mt-2"
                                                      }
                                                    ]
                                                  }
                                                ]
                                              },
                                              {
                                                "description": "dwp_kontrolle_01_poster_video uploader",
                                                "type": "container",
                                                "class": "relative inline-block align-bottom rounded-sm text-left transform transition-all sm:align-middle w-48 h-32 pt-4",
                                                "children": [
                                                  {
                                                    "description": "dialog card",
                                                    "type": "element",
                                                    "elementType": "uploadcareFileProvision",
                                                    "uploaderId": "uc_dwp_kontrolle_01_poster",
                                                    "maxDownload": 10,
                                                    "key": "images.dwp_kontrolle_01_poster",
                                                    "uploaderResponseKey": "imageResponse",
                                                    "key2write": "",
                                                    "value2write": "",
                                                    "class": "relative bg-gray-300 h-full rounded-xl border-2 border-gray-500 border-dashed",
                                                    "children": [
                                                      {
                                                        "description": "drop zone overlay",
                                                        "type": "container",
                                                        "children": [
                                                          {
                                                            "type": "overlay",
                                                            "uploaderId": "uc_dwp_kontrolle_01_poster",
                                                            "class": "absolute z-50 w-full h-full bg-white/[.9] overflow-hidden",
                                                            "children": [
                                                              {
                                                                "type": "container",
                                                                "class": "-z-10 flex justify-center items-center w-full h-full",
                                                                "children": [
                                                                  {
                                                                    "type": "container",
                                                                    "class": "-z-10 w-64 h-64 justify-center items-center border-4 border-gray-300 rounded-xl",
                                                                    "children": [
                                                                      {
                                                                        "type": "container",
                                                                        "class": "-z-10 flex flex-col justify-center items-center w-full h-full",
                                                                        "children": [
                                                                          {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "text": "backup",
                                                                            "class": "material-symbols-outlined text-[50px] text-gray-300"
                                                                          },
                                                                          {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "text": "uploadcare",
                                                                            "class": "text-[14px] text-gray-400"
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
                                                        "description": "title + delete",
                                                        "type": "container",
                                                        "class": "flex justify between",
                                                        "children": [
                                                          {
                                                            "description": "headline",
                                                            "type": "element",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "text": "DWP Kontrolle poster",
                                                            "class": "text-13 w-full text-gray-600 font-bold pl-2 pt-2"
                                                          },
                                                          {
                                                            "description": "image delete",
                                                            "type": "uploadEvent",
                                                            "eventType": "delete",
                                                            "criteria": "images.dwp_kontrolle_01_poster[0]",
                                                            "uploaderResponseKey": "imageResponse",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "conditionArray": [],
                                                            "text": "delete",
                                                            "class": "material-symbols-outlined font-medium text-gray-500 hover:text-gray-500 text-20 pl-2 cursor-pointer p-2",
                                                            "progressIndicator": {
                                                              "type": "container",
                                                              "class": "flex justify-center",
                                                              "children": [
                                                                {
                                                                  "type": "element",
                                                                  "elementType": "staticHtmlTag",
                                                                  "tag": "span",
                                                                  "text": "",
                                                                  "class": "w-6 h-6 border-b-2 border-gray-600 rounded-full animate-spin"
                                                                }
                                                              ]
                                                            }
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "description": "uploadcare progress",
                                                        "type": "container",
                                                        "class": "",
                                                        "conditionArray": [
                                                          {
                                                            "cd": "INI, k, uploadcareProgress:images.dwp_kontrolle_01_poster[0], notEmpty"
                                                          },
                                                          {
                                                            "cd": "AND, k, uploadcareProgress:images.dwp_kontrolle_01_poster[0], gte, s, 0"
                                                          }
                                                        ],
                                                        "children": [
                                                          {
                                                            "type": "container",
                                                            "class": "relative flex items-center justify-center mt-4",
                                                            "children": [
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "div",
                                                                "class": "bg-amber-400 h-2 ",
                                                                "style": "ex:'width: ' + uploadcareProgress:images.dwp_kontrolle_01_poster[0] + 'vw'",
                                                                "text": ""
                                                              },
                                                              {
                                                                "type": "element",
                                                                "elementType": "staticHtmlTag",
                                                                "tag": "div",
                                                                "class": "w-full h-full",
                                                                "text": "ex:uploadcareProgress:images.dwp_kontrolle_01_poster[0] + '%'"
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "description": "image preview",
                                                        "type": "element",
                                                        "elementType": "staticHtmlTag",
                                                        "tag": "img",
                                                        "conditionArray": [
                                                          {
                                                            "cd": "INI, k, images.dwp_kontrolle_01_poster[0].imageResponse.cdnUrl, notEmpty"
                                                          }
                                                        ],
                                                        "src": "ex:images.dwp_kontrolle_01_poster[0].imageResponse.cdnUrl + '/-/resize/400x/-/format/auto/-/quality/smart/'",
                                                        "class": "w-[60%] rounded-xl ml-3 pb-2"
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
      },
      {
        "description": "a888222heoparts document list",
        "appNavigationLink": "a888222heoparts",
        "subURL": "home",
        "globalCollection": "a888222heoparts",
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
                                    "type": "cddpEvent",
                                    "eventType": "create",
                                    "elementType": "staticHtmlTag",
                                    "text": "CREATE",
                                    "tag": "div",
                                    "class": "block text-red-500 bg-transparent border border-solid border-red-500 hover:bg-primary hover:text-white active:bg-red-600 text-center font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 cursor-pointer"
                                  },
                                  {
                                    "type": "cddpEvent",
                                    "eventType": "duplicate",
                                    "elementType": "staticHtmlTag",
                                    "tag": "div",
                                    "text": "DUPLICATE",
                                    "class": "block text-red-500 bg-transparent border border-solid border-red-500 hover:bg-primary hover:text-white active:bg-red-600 text-center font-bold uppercase text-sm mt-6 px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 cursor-pointer"
                                  },
                                  {
                                    "type": "cddpEvent",
                                    "eventType": "delete",
                                    "elementType": "staticHtmlTag",
                                    "tag": "div",
                                    "text": "DELETE",
                                    "class": "block text-red-500 bg-transparent border border-solid border-red-500 hover:bg-primary hover:text-white active:bg-red-600 text-center font-bold uppercase text-sm mt-6 px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 cursor-pointer"
                                  },
                                  {
                                    "elementType": "staticHtmlTag",
                                    "type": "cddpEvent",
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
            "description": "import dialog",
            "type": "dialog",
            "key": "importDialogAppSys01",
            "toggleDialog": true,
            "dialogKey": "importDialogAppSys01",
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
                                "text": "Import data",
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
                                "dialogKey": "importDialogAppSys01"
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
                                    "type": "cddpEvent",
                                    "eventType": "create",
                                    "elementType": "staticHtmlTag",
                                    "text": "CREATE",
                                    "tag": "div",
                                    "class": "block text-red-500 bg-transparent border border-solid border-red-500 hover:bg-primary hover:text-white active:bg-red-600 text-center font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 cursor-pointer"
                                  },
                                  {
                                    "type": "cddpEvent",
                                    "eventType": "duplicate",
                                    "elementType": "staticHtmlTag",
                                    "tag": "div",
                                    "text": "DUPLICATE",
                                    "class": "block text-red-500 bg-transparent border border-solid border-red-500 hover:bg-primary hover:text-white active:bg-red-600 text-center font-bold uppercase text-sm mt-6 px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 cursor-pointer"
                                  },
                                  {
                                    "type": "cddpEvent",
                                    "eventType": "delete",
                                    "elementType": "staticHtmlTag",
                                    "tag": "div",
                                    "text": "DELETE",
                                    "class": "block text-red-500 bg-transparent border border-solid border-red-500 hover:bg-primary hover:text-white active:bg-red-600 text-center font-bold uppercase text-sm mt-6 px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 cursor-pointer"
                                  },
                                  {
                                    "elementType": "staticHtmlTag",
                                    "type": "cddpEvent",
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
            "description": "card1 dialog navision Datensatz ",
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
                            "text": "Navision Datensatz",
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
                            "description": "oem",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8 ",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "OEM",
                                "class": "text-12 w-40 font-bold pl-8 pt-2"
                              },
                              {
                                "type": "element",
                                "elementType": "textInput",
                                "key": "oem",
                                "class": "w-1/3 ml-8 py-1 px-2 sm:text-13 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 border-gray-300 focus:border-b-2 focus:border-gray-400"
                              }
                            ]
                          },
                          {
                            "description": "model",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8 ",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Model",
                                "class": "text-12 w-40 font-bold pl-8 pt-2"
                              },
                              {
                                "type": "element",
                                "elementType": "textInput",
                                "key": "model",
                                "class": "w-1/3 ml-8 py-1 px-2 sm:text-13 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 border-gray-300 focus:border-b-2 focus:border-gray-400"
                              }
                            ]
                          },
                          {
                            "description": "navisionDescription",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8 ",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Navision Desc.",
                                "class": "text-12 w-40 font-bold pl-8 pt-2"
                              },
                              {
                                "type": "element",
                                "elementType": "textInput",
                                "key": "navisionDescription",
                                "class": "w-1/3 ml-8 py-1 px-2 sm:text-13 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 border-gray-300 focus:border-b-2 focus:border-gray-400"
                              }
                            ]
                          },
                          {
                            "description": "articleNumber",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8 ",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Artikelnummer",
                                "class": "text-12 w-40 font-bold pl-8 pt-2"
                              },
                              {
                                "type": "element",
                                "elementType": "textInput",
                                "key": "articleNumber",
                                "class": "w-1/3 ml-8 py-1 px-2 sm:text-13 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 border-gray-300 focus:border-b-2 focus:border-gray-400"
                              }
                            ]
                          },
                          {
                            "description": "material",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8 ",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Material",
                                "class": "text-12 w-40 font-bold pl-8 pt-2"
                              },
                              {
                                "type": "element",
                                "elementType": "textInput",
                                "key": "material",
                                "class": "w-1/3 ml-8 py-1 px-2 sm:text-13 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 border-gray-300 focus:border-b-2 focus:border-gray-400"
                              }
                            ]
                          },
                          {
                            "description": "client",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8 ",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Kunde",
                                "class": "text-12 w-40 font-bold pl-8 pt-2"
                              },
                              {
                                "type": "element",
                                "elementType": "textInput",
                                "key": "client",
                                "class": "w-1/3 ml-8 py-1 px-2 sm:text-13 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 border-gray-300 focus:border-b-2 focus:border-gray-400"
                              }
                            ]
                          },
                          {
                            "description": "application",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8 ",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Anwendung",
                                "class": "text-12 w-40 font-bold pl-8 pt-2"
                              },
                              {
                                "type": "element",
                                "elementType": "textInput",
                                "key": "application",
                                "class": "w-1/3 ml-8 py-1 px-2 sm:text-13 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 border-gray-300 focus:border-b-2 focus:border-gray-400"
                              }
                            ]
                          },
                          {
                            "description": "baseLayer",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8 ",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Base Layer",
                                "class": "text-12 w-40 font-bold pl-8 pt-2"
                              },
                              {
                                "type": "element",
                                "elementType": "textInput",
                                "key": "baseLayer",
                                "class": "w-1/3 ml-8 py-1 px-2 sm:text-13 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 border-gray-300 focus:border-b-2 focus:border-gray-400"
                              }
                            ]
                          },
                          {
                            "description": "topLayer",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8 ",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Top Layer",
                                "class": "text-12 w-40 font-bold pl-8 pt-2"
                              },
                              {
                                "type": "element",
                                "elementType": "textInput",
                                "key": "topLayer",
                                "class": "w-1/3 ml-8 py-1 px-2 sm:text-13 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 border-gray-300 focus:border-b-2 focus:border-gray-400"
                              }
                            ]
                          },
                          {
                            "description": "heoProduct",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8 ",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "HEO COATING Product",
                                "class": "text-12 w-40 font-bold pl-8 pt-2"
                              },
                              {
                                "type": "element",
                                "elementType": "textInput",
                                "key": "heoProduct",
                                "class": "w-1/3 ml-8 py-1 px-2 sm:text-13 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 border-gray-300 focus:border-b-2 focus:border-gray-400"
                              }
                            ]
                          },
                          {
                            "description": "partsCategory",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8 ",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Bauteil-Kategorie",
                                "class": "text-12 w-40 font-bold pl-8 pt-2"
                              },
                              {
                                "type": "element",
                                "elementType": "textInput",
                                "key": "partsCategory",
                                "class": "w-1/3 ml-8 py-1 px-2 sm:text-13 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 border-gray-300 focus:border-b-2 focus:border-gray-400"
                              }
                            ]
                          },
                          {
                            "description": "card1 row 5",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Kommentar",
                                "class": "text-12 w-40 font-bold pl-8 pt-2"
                              },
                              {
                                "type": "element",
                                "elementType": "textareaInput",
                                "rows": 7,
                                "key": "comment",
                                "class": "w-2/3 ml-8 border border-gray-200 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none py-1 px-2 focus:outline-none focus:ring-gray-900 focus:border-b-2 focus:border-gray-400 sm:text-13"
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
            "description": "card2 dialog capacityCard",
            "type": "dialog",
            "key": "capacityCard",
            "toggleDialog": true,
            "dialogKey": "capacityCard",
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
                            "text": "Kapazitäten",
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
                            "dialogKey": "capacityCard"
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
                            "description": "oem",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8 ",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "OEM",
                                "class": "text-12 w-40 font-bold pl-8 pt-2"
                              },
                              {
                                "type": "element",
                                "elementType": "textInput",
                                "key": "oem",
                                "class": "w-1/3 ml-8 py-1 px-2 sm:text-13 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 border-gray-300 focus:border-b-2 focus:border-gray-400"
                              }
                            ]
                          },
                          {
                            "description": "model",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8 ",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Model",
                                "class": "text-12 w-40 font-bold pl-8 pt-2"
                              },
                              {
                                "type": "element",
                                "elementType": "textInput",
                                "key": "model",
                                "class": "w-1/3 ml-8 py-1 px-2 sm:text-13 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 border-gray-300 focus:border-b-2 focus:border-gray-400"
                              }
                            ]
                          },
                          {
                            "description": "navisionDescription",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8 ",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Navision Desc.",
                                "class": "text-12 w-40 font-bold pl-8 pt-2"
                              },
                              {
                                "type": "element",
                                "elementType": "textInput",
                                "key": "navisionDescription",
                                "class": "w-1/3 ml-8 py-1 px-2 sm:text-13 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 border-gray-300 focus:border-b-2 focus:border-gray-400"
                              }
                            ]
                          },
                          {
                            "description": "articleNumber",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8 ",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Artikelnummer",
                                "class": "text-12 w-40 font-bold pl-8 pt-2"
                              },
                              {
                                "type": "element",
                                "elementType": "textInput",
                                "key": "articleNumber",
                                "class": "w-1/3 ml-8 py-1 px-2 sm:text-13 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 border-gray-300 focus:border-b-2 focus:border-gray-400"
                              }
                            ]
                          },
                          {
                            "description": "material",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8 ",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Material",
                                "class": "text-12 w-40 font-bold pl-8 pt-2"
                              },
                              {
                                "type": "element",
                                "elementType": "textInput",
                                "key": "material",
                                "class": "w-1/3 ml-8 py-1 px-2 sm:text-13 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 border-gray-300 focus:border-b-2 focus:border-gray-400"
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
            "description": "card3 dialog images",
            "type": "dialog",
            "key": "imagesCard2",
            "toggleDialog": true,
            "dialogKey": "imagesCard2",
            "class": "relative inline-block align-bottom bg-white rounded-sm text-left shadow-xl transform transition-all sm:align-middle w-1/2 h-[70vH]",
            "children": [
              {
                "description": "dialog card",
                "type": "element",
                "elementType": "uploadcareFileProvision",
                "uploaderId": "documentUploads",
                "maxDownload": 10,
                "key": "images.preview",
                "uploaderResponseKey": "imageResponse",
                "key2write": "previewImage",
                "value2write": "images.preview[0].imageResponse.cdnUrl",
                "class": "relative bg-white",
                "children": [
                  {
                    "description": "drop zone overlay",
                    "type": "container",
                    "children": [
                      {
                        "type": "overlay",
                        "uploaderId": "documentUploads",
                        "class": "absolute z-50 w-full h-full bg-gray-400/[.5] overflow-hidden",
                        "children": [
                          {
                            "type": "container",
                            "class": "-z-10 flex justify-center items-center w-full h-full",
                            "children": [
                              {
                                "type": "container",
                                "class": "-z-10 w-64 h-64 flex justify-center items-center border-2 border-green-400 rounded-xl",
                                "children": [
                                  {
                                    "type": "element",
                                    "elementType": "staticHtmlTag",
                                    "tag": "div",
                                    "text": "drop it sir",
                                    "class": "text-sm leading-6 font-medium uppercase d-block"
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
                    "description": "loop array progress",
                    "type": "element",
                    "elementType": "loopArray",
                    "key": "images.preview",
                    "children": [
                      {
                        "description": "upload care progress - test container",
                        "type": "container",
                        "class": "w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700",
                        "conditionArray": [
                          {
                            "cd": "INI, k, uploadcareProgress:images.preview[index], notEmpty"
                          },
                          {
                            "cd": "AND, k, uploadcareProgress:images.preview[index], gte, s, 0"
                          }
                        ],
                        "children": [
                          {
                            "description": "preview",
                            "type": "container",
                            "class": "relative flex mt-4",
                            "children": [
                              {
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "div",
                                "class": "bg-red-400 h-20",
                                "style": "ex:'width: ' + uploadcareProgress:images.preview[index] + '%'",
                                "text": ""
                              },
                              {
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "div",
                                "class": "w-full h-full",
                                "text": "ex:uploadcareProgress:images.preview[index] + '%'"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
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
                            "text": "Images",
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
                            "dialogKey": "imagesCard2"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "description": "headline",
                    "type": "element",
                    "elementType": "staticHtmlTag",
                    "tag": "div",
                    "text": "preview",
                    "class": "text-13 w-full font-bold p-8"
                  },
                  {
                    "description": "loop array preview",
                    "type": "element",
                    "elementType": "loopArray",
                    "key": "images.preview",
                    "children": [
                      {
                        "type": "container",
                        "class": "flex mt-4",
                        "children": [
                          {
                            "description": "upload preview",
                            "type": "element",
                            "elementType": "staticHtmlTag",
                            "tag": "img",
                            "conditionArray": [
                              {
                                "cd": "INI, k, images.preview[index].imageResponse.cdnUrl, notEmpty"
                              }
                            ],
                            "src": "ex:images.preview[index].imageResponse.cdnUrl + '/-/resize/250x/-/format/auto/-/quality/smart/'",
                            "class": "w-1/6"
                          }
                        ]
                      }
                    ]
                  },

                  {
                    "description": "preview",
                    "type": "container",
                    "class": "flex mt-4",
                    "children": [
                      {
                        "description": "front part",
                        "type": "container",
                        "class": "relative px-6 my-2 w-1/2",
                        "children": [
                          {
                            "description": "headline",
                            "type": "element",
                            "elementType": "staticHtmlTag",
                            "tag": "span",
                            "text": "preview image",
                            "class": "text-13 w-full font-bold pl-4 pt-4"
                          },
                          {
                            "description": "upload row1 content",
                            "type": "container",
                            "class": "flex space-x-8 px-1 pb-8",
                            "children": [
                              {
                                "description": "dropzone",
                                "type": "element",
                                "elementType": "uploadcareCustomFileUpload",
                                "key": "images.preview",
                                "dropZoneText": "part",
                                "class": "w-full",
                                "key2write": "previewImage",
                                "value2write": "images.preview.cdnUrl"
                              },
                              {
                                "description": "upload preview",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "img",
                                "conditionArray": [
                                  {
                                    "cd": "INI, k, images.preview.cdnUrl, notEmpty"
                                  }
                                ],
                                "src": "ex:images.preview.cdnUrl + '/-/resize/250x/-/format/auto/-/quality/smart/'",
                                "class": "w-1/3"
                              },
                              {
                                "description": "delete upload",
                                "type": "uploadEvent",
                                "eventType": "delete",
                                "criteria": "images.preview",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "conditionArray": [
                                  {
                                    "cd": "INI, k, images.preview.cdnUrl, notEmpty"
                                  }
                                ],
                                "text": "delete",
                                "class": "material-symbols-outlined font-medium text-gray-300 hover:text-gray-500 text-32 pl-2 cursor-pointer",
                                "progressIndicator": {
                                  "type": "container",
                                  "class": "flex justify-center",
                                  "children": [
                                    {
                                      "type": "element",
                                      "elementType": "staticHtmlTag",
                                      "tag": "span",
                                      "text": "",
                                      "class": "w-6 h-6 border-b-2 border-gray-600 rounded-full animate-spin"
                                    }
                                  ]
                                }
                              }
                            ]
                          },

                          {
                            "description": "divider",
                            "type": "container",
                            "class": "text-cardHeaderTitle flex mt-0  pb-4",
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
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "description": "headline",
                    "type": "element",
                    "elementType": "staticHtmlTag",
                    "tag": "div",
                    "text": "front",
                    "class": "text-13 w-full font-bold p-8"
                  },
                  {
                    "description": "topView",
                    "type": "container",
                    "class": "flex mt-4",
                    "children": [
                      {
                        "description": "front part",
                        "type": "container",
                        "class": "relative px-6 my-2 w-1/2",
                        "children": [
                          {
                            "description": "headline",
                            "type": "element",
                            "elementType": "staticHtmlTag",
                            "tag": "span",
                            "text": "part",
                            "class": "text-13 w-full font-bold pl-4 pt-4"
                          },
                          {
                            "description": "upload row1 content",
                            "type": "container",
                            "class": "flex space-x-8 px-1 pb-8",
                            "children": [
                              {
                                "description": "dropzone",
                                "type": "element",
                                "elementType": "uploadcareCustomFileUpload",
                                "key": "images.topView.file_part",
                                "dropZoneText": "part",
                                "class": "w-full"
                              },
                              {
                                "description": "upload preview",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "img",
                                "conditionArray": [
                                  {
                                    "cd": "INI, k, images.topView.file_part.cdnUrl, notEmpty"
                                  }
                                ],
                                "src": "ex:images.topView.file_part.cdnUrl + '/-/resize/250x/-/format/auto/-/quality/smart/'",
                                "class": "w-1/3"
                              },
                              {
                                "description": "delete upload",
                                "type": "uploadEvent",
                                "eventType": "delete",
                                "criteria": "images.topView.file_part",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "conditionArray": [
                                  {
                                    "cd": "INI, k, images.topView.file_part.cdnUrl, notEmpty"
                                  }
                                ],
                                "text": "delete",
                                "class": "material-symbols-outlined font-medium text-gray-300 hover:text-gray-500 text-32 pl-2 cursor-pointer",
                                "progressIndicator": {
                                  "type": "container",
                                  "class": "flex justify-center",
                                  "children": [
                                    {
                                      "type": "element",
                                      "elementType": "staticHtmlTag",
                                      "tag": "span",
                                      "text": "",
                                      "class": "w-6 h-6 border-b-2 border-gray-600 rounded-full animate-spin"
                                    }
                                  ]
                                }
                              }
                            ]
                          },

                          {
                            "description": "divider",
                            "type": "container",
                            "class": "text-cardHeaderTitle flex mt-0  pb-4",
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
                          }
                        ]
                      },
                      {
                        "description": "front ruler",
                        "type": "container",
                        "class": "relative px-6 my-2 w-1/2",
                        "children": [
                          {
                            "description": "headline",
                            "type": "element",
                            "elementType": "staticHtmlTag",
                            "tag": "span",
                            "text": "ruler",
                            "class": "text-13 w-full font-bold pl-4 pt-4"
                          },
                          {
                            "description": "upload row1 content",
                            "type": "container",
                            "class": "flex space-x-8 px-1 pb-8",
                            "children": [
                              {
                                "description": "dropzone",
                                "type": "element",
                                "elementType": "uploadcareCustomFileUpload",
                                "key": "images.topView.file_ruler",
                                "dropZoneText": "ruler",
                                "class": "w-full"
                              },
                              {
                                "description": "upload preview",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "img",
                                "conditionArray": [
                                  {
                                    "cd": "INI, k, images.topView.file_ruler.cdnUrl, notEmpty"
                                  }
                                ],
                                "src": "ex:images.topView.file_ruler.cdnUrl + '/-/resize/250x/-/format/auto/-/quality/smart/'",
                                "class": "w-1/3"
                              },
                              {
                                "description": "delete upload",
                                "type": "uploadEvent",
                                "eventType": "delete",
                                "criteria": "images.topView.file_ruler",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "conditionArray": [
                                  {
                                    "cd": "INI, k, images.topView.file_ruler.cdnUrl, notEmpty"
                                  }
                                ],
                                "text": "delete",
                                "class": "material-symbols-outlined font-medium text-gray-300 hover:text-gray-500 text-32 pl-2 cursor-pointer",
                                "progressIndicator": {
                                  "type": "container",
                                  "class": "flex justify-center",
                                  "children": [
                                    {
                                      "type": "element",
                                      "elementType": "staticHtmlTag",
                                      "tag": "span",
                                      "text": "",
                                      "class": "w-6 h-6 border-b-2 border-gray-600 rounded-full animate-spin"
                                    }
                                  ]
                                }
                              }
                            ]
                          },
                          {
                            "description": "divider",
                            "type": "container",
                            "class": "text-cardHeaderTitle flex mt-0  pb-4",
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
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "description": "headline",
                    "type": "element",
                    "elementType": "staticHtmlTag",
                    "tag": "div",
                    "text": "back",
                    "class": "text-13 w-full font-bold p-8"
                  },
                  {
                    "description": "frontView",
                    "type": "container",
                    "class": "flex mt-4",
                    "children": [
                      {
                        "description": "back part",
                        "type": "container",
                        "class": "relative px-6 my-2 w-1/2",
                        "children": [
                          {
                            "description": "headline",
                            "type": "element",
                            "elementType": "staticHtmlTag",
                            "tag": "span",
                            "text": "part",
                            "class": "text-13 w-full font-bold pl-4 pt-4"
                          },
                          {
                            "description": "upload row1 content",
                            "type": "container",
                            "class": "flex space-x-8 px-1 pb-8",
                            "children": [
                              {
                                "description": "dropzone",
                                "type": "element",
                                "elementType": "uploadcareCustomFileUpload",
                                "key": "images.frontView.file_part",
                                "dropZoneText": "part",
                                "class": "w-full",
                                "key2write": "rowImage",
                                "value2write": "images.front.file_part.cdnUrl"
                              },
                              {
                                "description": "upload preview",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "img",
                                "conditionArray": [
                                  {
                                    "cd": "INI, k, images.frontView.file_part.cdnUrl, notEmpty"
                                  }
                                ],
                                "src": "ex:images.frontView.file_part.cdnUrl + '/-/resize/250x/-/format/auto/-/quality/smart/'",
                                "class": "w-1/3"
                              },
                              {
                                "description": "delete upload",
                                "type": "uploadEvent",
                                "eventType": "delete",
                                "criteria": "images.frontView.file_part",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "conditionArray": [
                                  {
                                    "cd": "INI, k, images.frontView.file_part.cdnUrl, notEmpty"
                                  }
                                ],
                                "text": "delete",
                                "class": "material-symbols-outlined font-medium text-gray-300 hover:text-gray-500 text-32 pl-2 cursor-pointer",
                                "progressIndicator": {
                                  "type": "container",
                                  "class": "flex justify-center",
                                  "children": [
                                    {
                                      "type": "element",
                                      "elementType": "staticHtmlTag",
                                      "tag": "span",
                                      "text": "",
                                      "class": "w-6 h-6 border-b-2 border-gray-600 rounded-full animate-spin"
                                    }
                                  ]
                                }
                              }
                            ]
                          },

                          {
                            "description": "divider",
                            "type": "container",
                            "class": "text-cardHeaderTitle flex mt-0  pb-4",
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
                          }
                        ]
                      },
                      {
                        "description": "front ruler",
                        "type": "container",
                        "class": "relative px-6 my-2 w-1/2",
                        "children": [
                          {
                            "description": "headline",
                            "type": "element",
                            "elementType": "staticHtmlTag",
                            "tag": "span",
                            "text": "ruler",
                            "class": "text-13 w-full font-bold pl-4 pt-4"
                          },
                          {
                            "description": "upload row1 content",
                            "type": "container",
                            "class": "flex space-x-8 px-1 pb-8",
                            "children": [
                              {
                                "description": "dropzone",
                                "type": "element",
                                "elementType": "uploadcareCustomFileUpload",
                                "key": "images.frontView.file_ruler",
                                "dropZoneText": "ruler",
                                "class": "w-full"
                              },
                              {
                                "description": "upload preview",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "img",
                                "conditionArray": [
                                  {
                                    "cd": "INI, k, images.frontView.file_ruler.cdnUrl, notEmpty"
                                  }
                                ],
                                "src": "ex:images.frontView.file_ruler.cdnUrl + '/-/resize/250x/-/format/auto/-/quality/smart/'",
                                "class": "w-1/3"
                              },
                              {
                                "description": "delete upload",
                                "type": "uploadEvent",
                                "eventType": "delete",
                                "criteria": "images.frontView.file_ruler",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "conditionArray": [
                                  {
                                    "cd": "INI, k, images.frontView.file_ruler.cdnUrl, notEmpty"
                                  }
                                ],
                                "text": "delete",
                                "class": "material-symbols-outlined font-medium text-gray-300 hover:text-gray-500 text-32 pl-2 cursor-pointer",
                                "progressIndicator": {
                                  "type": "container",
                                  "class": "flex justify-center",
                                  "children": [
                                    {
                                      "type": "element",
                                      "elementType": "staticHtmlTag",
                                      "tag": "span",
                                      "text": "",
                                      "class": "w-6 h-6 border-b-2 border-gray-600 rounded-full animate-spin"
                                    }
                                  ]
                                }
                              }
                            ]
                          },
                          {
                            "description": "divider",
                            "type": "container",
                            "class": "text-cardHeaderTitle flex mt-0  pb-4",
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
            "class": "py-3 px-8 w-full",
            "children": [
              {
                "description": "flex div row",
                "type": "container",
                "class": "flex flex-row justify-between space-x-2 w-full pb-4",
                "children": [
                  {
                    "description": "content header col 1",
                    "type": "container",
                    "class": "w-4/12 flex flex-col",
                    "children": [
                      {
                        "description": "content header col 1",
                        "type": "container",
                        "class": "w-full flex",
                        "children": [
                          {
                            "description": "FU headline",
                            "type": "element",
                            "elementType": "staticHtmlTag",
                            "tag": "label",
                            "assignedKey": "oem",
                            "class": "text-2xl uppercase font-bold text-primary dark:text-white py-2 w-1/2"
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
                                "assignedKey": "model",
                                "class": "text-xl font-bold dark:text-white pt-2.5 pl-3"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "description": "content header col 1",
                        "type": "container",
                        "class": "w-full flex",
                        "children": [
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
                                "assignedKey": "client",
                                "class": "text-xl font-bold dark:text-white"
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
                        "assignedKey": "articleNumber",
                        "class": "text-xl font-bold dark:text-white"
                      },
                      {
                        "description": "element headings",
                        "type": "element",
                        "elementType": "staticHtmlTag",
                        "tag": "label",
                        "assignedKey": "navisionDescription",
                        "class": "text-xl dark:text-white"
                      }
                    ]
                  },
                  {
                    "description": "content header col 2",
                    "type": "container",
                    "class": "w-4/12 flex flex-col",
                    "children": [
                      {
                        "description": "content header col 1",
                        "type": "container",
                        "class": "w-full",
                        "children": [
                          {
                            "description": "content header col 1",
                            "type": "container",
                            "class": "w-full flex",
                            "children": [
                              {
                                "description": "element headings",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "calendar_month",
                                "class": "material-symbols-outlined text-[40px] text-primary hover:text-primary cursor-pointer"
                              },
                              {
                                "description": "element headings",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "assignedKey": "retrievalPerMonth",
                                "class": "text-xl text-primary font-bold dark:text-white pl-2 pt-2"
                              },
                              {
                                "description": "element headings",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "assignedKey": "retrievalPerWeek",
                                "class": "text-xl text-primary font-bold dark:text-white pl-2 pt-2"
                              },
                              {
                                "description": "element headings",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "assignedKey": "retrievalPerDay",
                                "class": "text-xl text-primary font-bold dark:text-white pl-2 pt-2"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "description": "content header col 1",
                        "type": "container",
                        "class": "w-full flex",
                        "children": [
                          {
                            "description": "element headings",
                            "type": "element",
                            "elementType": "staticHtmlTag",
                            "tag": "span",
                            "text": "view_module",
                            "class": "material-symbols-outlined text-[40px] text-[#6d767e] hover:text-primary cursor-pointer"
                          },
                          {
                            "description": "element headings",
                            "type": "element",
                            "elementType": "staticHtmlTag",
                            "tag": "span",
                            "assignedKey": "ppc",
                            "class": "text-xl font-bold dark:text-white pl-2 pt-2"
                          }
                        ]
                      },
                      {
                        "description": "content header col 1",
                        "type": "container",
                        "class": "w-full flex",
                        "children": [
                          {
                            "description": "element headings",
                            "type": "element",
                            "elementType": "staticHtmlTag",
                            "tag": "span",
                            "text": "table",
                            "class": "material-symbols-outlined text-[40px] text-[#6d767e] hover:text-primary cursor-pointer"
                          },
                          {
                            "description": "element headings",
                            "type": "element",
                            "elementType": "staticHtmlTag",
                            "tag": "span",
                            "assignedKey": "carrierAmount",
                            "class": "text-xl font-bold dark:text-white pl-2 pt-2"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "description": "content header col 3",
                    "type": "container",
                    "class": "w-2/12 flex justify-center items-center",
                    "children": [
                      {
                        "conditionArray": [
                          {
                            "cd": "INI, k, oem, equal, s, Audi"
                          }
                        ],
                        "type": "element",
                        "elementType": "staticHtmlTag",
                        "tag": "img",
                        "src": "/static/img/logo/audi_01.png",
                        "class": "w-[50%] ml-8"
                      },
                      {
                        "conditionArray": [
                          {
                            "cd": "INI, k, oem, equal, s, Jaguar"
                          }
                        ],
                        "type": "element",
                        "elementType": "staticHtmlTag",
                        "tag": "img",
                        "src": "/static/img/logo/jaguar_01.png",
                        "class": "w-[50%] ml-8"
                      },
                      {
                        "conditionArray": [
                          {
                            "cd": "INI, k, oem, equal, s, Porsche"
                          }
                        ],
                        "type": "element",
                        "elementType": "staticHtmlTag",
                        "tag": "img",
                        "src": "/static/img/logo/porsche_01.png",
                        "class": "w-[40%] ml-8"
                      },
                      {
                        "conditionArray": [
                          {
                            "cd": "INI, k, oem, equal, s, Daimler"
                          }
                        ],
                        "type": "element",
                        "elementType": "staticHtmlTag",
                        "tag": "img",
                        "src": "/static/img/logo/mercedes_01.png",
                        "class": "w-[50%] ml-8"
                      },
                      {
                        "conditionArray": [
                          {
                            "cd": "INI, k, oem, equal, s, Mercedes"
                          }
                        ],
                        "type": "element",
                        "elementType": "staticHtmlTag",
                        "tag": "img",
                        "src": "/static/img/logo/mercedes_01.png",
                        "class": "w-[50%] ml-8"
                      },
                      {
                        "conditionArray": [
                          {
                            "cd": "INI, k, oem, equal, s, Land Rover"
                          }
                        ],
                        "type": "element",
                        "elementType": "staticHtmlTag",
                        "tag": "img",
                        "src": "/static/img/logo/rangeRover_01.png",
                        "class": "w-[50%] ml-8"
                      },
                      {
                        "conditionArray": [
                          {
                            "cd": "INI, k, oem, equal, s, Opel"
                          }
                        ],
                        "type": "element",
                        "elementType": "staticHtmlTag",
                        "tag": "img",
                        "src": "/static/img/logo/opel_01.png",
                        "class": "w-[50%] ml-8"
                      },
                      {
                        "conditionArray": [
                          {
                            "cd": "INI, k, oem, equal, s, BMW"
                          }
                        ],
                        "type": "element",
                        "elementType": "staticHtmlTag",
                        "tag": "img",
                        "src": "/static/img/logo/bmw_01.png",
                        "class": "w-[55%] ml-8"
                      },
                      {
                        "conditionArray": [
                          {
                            "cd": "INI, k, oem, equal, s, Volvo"
                          }
                        ],
                        "type": "element",
                        "elementType": "staticHtmlTag",
                        "tag": "img",
                        "src": "/static/img/logo/volvo_01.png",
                        "class": "w-[50%] ml-8"
                      },
                      {
                        "conditionArray": [
                          {
                            "cd": "INI, k, oem, equal, s, Kia"
                          }
                        ],
                        "type": "element",
                        "elementType": "staticHtmlTag",
                        "tag": "img",
                        "src": "/static/img/logo/kia_02.png",
                        "class": "w-[55%] ml-8"
                      },
                      {
                        "conditionArray": [
                          {
                            "cd": "INI, k, oem, equal, s, Rolls Royce"
                          }
                        ],
                        "type": "element",
                        "elementType": "staticHtmlTag",
                        "tag": "img",
                        "src": "/static/img/logo/rollsroyce_01.png",
                        "class": "w-[50%] ml-8"
                      },
                      {
                        "conditionArray": [
                          {
                            "cd": "INI, k, oem, equal, s, Renault"
                          }
                        ],
                        "type": "element",
                        "elementType": "staticHtmlTag",
                        "tag": "img",
                        "src": "/static/img/logo/renault_02.png",
                        "class": "w-[50%] ml-8"
                      },
                      {
                        "conditionArray": [
                          {
                            "cd": "INI, k, oem, equal, s, Peugeot"
                          }
                        ],
                        "type": "element",
                        "elementType": "staticHtmlTag",
                        "tag": "img",
                        "src": "/static/img/logo/peugeot_01.png",
                        "class": "w-[50%] ml-8"
                      },
                      {
                        "conditionArray": [
                          {
                            "cd": "INI, k, oem, equal, s, Lamborghini"
                          }
                        ],
                        "type": "element",
                        "elementType": "staticHtmlTag",
                        "tag": "img",
                        "src": "/static/img/logo/lambo_01.png",
                        "class": "w-[60%] ml-8"
                      },
                      {
                        "conditionArray": [
                          {
                            "cd": "INI, k, oem, equal, s,VW"
                          }
                        ],
                        "type": "element",
                        "elementType": "staticHtmlTag",
                        "tag": "img",
                        "src": "/static/img/logo/vw_01.png",
                        "class": "w-[50%] ml-8"
                      },
                      {
                        "conditionArray": [
                          {
                            "cd": "INI, k, oem, equal, s,Aston Martin"
                          }
                        ],
                        "type": "element",
                        "elementType": "staticHtmlTag",
                        "tag": "img",
                        "src": "/static/img/logo/astonMartin_01.png",
                        "class": "w-[58%] ml-8"
                      },
                      {
                        "conditionArray": [
                          {
                            "cd": "INI, k, oem, equal, s,Hyundai"
                          }
                        ],
                        "type": "element",
                        "elementType": "staticHtmlTag",
                        "tag": "img",
                        "src": "/static/img/logo/hyundai_01.png",
                        "class": "w-[65%] ml-8"
                      },
                      {
                        "conditionArray": [
                          {
                            "cd": "INI, k, oem, equal, s,PSA"
                          }
                        ],
                        "type": "element",
                        "elementType": "staticHtmlTag",
                        "tag": "img",
                        "src": "/static/img/logo/psa_01.png",
                        "class": "w-[55%] ml-8"
                      },
                      {
                        "conditionArray": [
                          {
                            "cd": "INI, k, oem, equal, s,Ford"
                          }
                        ],
                        "type": "element",
                        "elementType": "staticHtmlTag",
                        "tag": "img",
                        "src": "/static/img/logo/ford_01.png",
                        "class": "w-[55%] ml-8"
                      },
                      {
                        "conditionArray": [
                          {
                            "cd": "INI, k, oem, equal, s,Honda"
                          }
                        ],
                        "type": "element",
                        "elementType": "staticHtmlTag",
                        "tag": "img",
                        "src": "/static/img/logo/honda_01.png",
                        "class": "w-[55%] ml-8"
                      },
                      {
                        "conditionArray": [
                          {
                            "cd": "INI, k, oem, equal, s,Nissan"
                          }
                        ],
                        "type": "element",
                        "elementType": "staticHtmlTag",
                        "tag": "img",
                        "src": "/static/img/logo/nissan_01.png",
                        "class": "w-[55%] ml-8"
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
                        "text": "888222 HEO COATING bauteile",
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
                                "text": "parts basic",
                                "class": "font-bold text-sm"
                              }
                            ]
                          },
                          {
                            "description": "tab 2",
                            "type": "container",
                            "toggleDialog": true,
                            "dialogKey": "annotatorDialogFS",
                            "class": "flex justify-center items-center cursor-pointer text-[#b6c2cd] px-6 hover:bg-white hover:text-black hover:mt-1",
                            "activeClass": "bg-white mt-1 text-black",
                            "children": [
                              {
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "div",
                                "text": "measurement tool",
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
                                                "type": "cddpEvent",
                                                "eventType": "duplicate",
                                                "elementType": "staticHtmlTag",
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
                                                "type": "cddpEvent",
                                                "eventType": "protect",
                                                "elementType": "staticHtmlTag",
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
                                                "type": "cddpEvent",
                                                "eventType": "delete",
                                                "elementType": "staticHtmlTag",
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
            "class": "px-6 bg-white grid grid-cols-3 gap-4 dark:bg-gray-800 w-full h-screen",
            "children": [
              {
                "description": "CARD 1",
                "type": "container",
                "class": "flex flex-col md:flex-row md:space-x-4 w-full",
                "children": [
                  {
                    "description": "card 1 container",
                    "type": "container",
                    "class": "w-full mt-6",
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
                                "text": "Navision Datensatz",
                                "class": "text-sm font-bold"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "description": "card 1 content",
                        "type": "container",
                        "class": "bg-white dark:bg-gray-800 flex-col pl-3 border",
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
                                "class": "material-symbols-outlined text-primary align-middle  w-1/8"
                              },
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "",
                                "assignedKey": "project",
                                "class": "text text-black dark:text-white font-bold"
                              },
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "",
                                "assignedKey": "model",
                                "class": "text text-black dark:text-white font-bold pl-2"
                              },
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "",
                                "assignedKey": "navisionDescription",
                                "class": "text text-black dark:text-white font-bold pl-2"
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
                                    "text": "Artikelnr: ",
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
                                    "assignedKey": "articleNumber",
                                    "class": "text text-black dark:text-white w-full pl-8"
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
                                "assignedKey": "navisionDescription",
                                "class": "text-sm text-black dark:text-white w-5/6 pl-8"
                              }
                            ]
                          },
                          {
                            "description": "card1 row 5",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Kategorie",
                                "class": "text-12 w-48 font-bold pl-8"
                              },
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "assignedKey": "partsCategory",
                                "class": "text-12 w-full pl-2"
                              }
                            ]
                          },
                          {
                            "description": "card1 row 5",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Verfahren",
                                "class": "text-12 w-48 font-bold pl-8"
                              },
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "assignedKey": "application",
                                "class": "text-12 w-full pl-2"
                              }
                            ]
                          },
                          {
                            "description": "card1 row 5",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "assignedKey": "carrier",
                                "class": "text-12 w-48 font-bold pl-8"
                              },
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "assignedKey": "carrierId",
                                "class": "text-12 w-full pl-2"
                              }
                            ]
                          },
                          {
                            "description": "card1 row 5",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Material",
                                "class": "text-12 w-48 font-bold pl-8"
                              },
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "assignedKey": "material",
                                "class": "text-12 w-full pl-2"
                              }
                            ]
                          },
                          {
                            "description": "card1 row 5",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Produkt",
                                "class": "text-12 w-48 font-bold pl-8"
                              },
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "assignedKey": "heoProduct",
                                "class": "text-12 w-full pl-2"
                              }
                            ]
                          },
                          {
                            "description": "card1 row 5",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "SOP",
                                "class": "text-12 w-48 font-bold pl-8"
                              },
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "assignedKey": "sop",
                                "class": "text-12 text w-full pl-2"
                              }
                            ]
                          },
                          {
                            "description": "card1 row 5",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 pb-4 px-4",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "EOP",
                                "class": "text-12 w-48 font-bold pl-8"
                              },
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "assignedKey": "eop",
                                "class": "text-12 text w-full pl-2"
                              }
                            ]
                          },
                          {
                            "description": "card1 row 5",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "PPC",
                                "class": "text-12 w-48 font-bold pl-8"
                              },
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "assignedKey": "ppc",
                                "class": "text-12 font-bold text w-full pl-2"
                              }
                            ]
                          },
                          {
                            "description": "card1 row 5",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Transportunit",
                                "class": "text-12 w-48 font-bold pl-8"
                              },
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "assignedKey": "carrier",
                                "class": "text-12 font-bold text w-full pl-2"
                              }
                            ]
                          },
                          {
                            "description": "card1 row 5",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 pb-4 px-4",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Anmerkung",
                                "class": "text-12 w-48 font-bold pl-8"
                              },
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "assignedKey": "carrierAmount",
                                "class": "text-12 font-bold text w-full pl-2"
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
                "description": "CARD 2",
                "type": "container",
                "class": "flex flex-col md:flex-row md:space-x-4 w-full",
                "children": [
                  {
                    "description": "card 1 container",
                    "type": "container",
                    "class": "w-full mt-6",
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
                            "dialogKey": "capacityCard",
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
                                "text": "Kapazitäten",
                                "class": "text-sm font-bold"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "description": "card 1 content",
                        "type": "container",
                        "class": "bg-white dark:bg-gray-800 flex-col pl-3 border",
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
                                "class": "material-symbols-outlined text-primary align-middle  w-1/8"
                              },
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "",
                                "assignedKey": "project",
                                "class": "text text-black dark:text-white font-bold"
                              },
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "",
                                "assignedKey": "model",
                                "class": "text text-black dark:text-white font-bold pl-2"
                              },
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "",
                                "assignedKey": "navisionDescription",
                                "class": "text text-black dark:text-white font-bold pl-2"
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
                                    "text": "Artikelnr: ",
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
                                    "assignedKey": "articleNumber",
                                    "class": "text text-black dark:text-white w-full pl-8"
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
                            "description": "card1 row 5",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Abruf pro Tag",
                                "class": "text-12 w-48 font-bold pl-8"
                              },
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "assignedKey": "retrievalPerDay",
                                "class": "text-12 font-bold text w-full pl-2"
                              }
                            ]
                          },
                          {
                            "description": "card1 row 5",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Abruf pro Woche",
                                "class": "text-12 w-48 font-bold pl-8"
                              },
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "assignedKey": "retrievalPerWeek",
                                "class": "text-12 font-bold text w-full pl-2"
                              }
                            ]
                          },
                          {
                            "description": "card1 row 5",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Abruf pro Monat",
                                "class": "text-12 w-48 font-bold pl-8"
                              },
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "assignedKey": "retrievalPerMonth",
                                "class": "text-12 font-bold text w-full pl-2"
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
                "description": "CARD 3",
                "type": "container",
                "class": "flex flex-col md:flex-row md:space-x-4 w-full",
                "children": [
                  {
                    "description": "card 2 container",
                    "type": "container",
                    "class": "w-full  mt-6",
                    "children": [
                      {
                        "description": "card 2 header",
                        "type": "container",
                        "class": "bg-cardHeaderBg h-10 pl-3 mt-6 cursor-pointer",
                        "children": [
                          {
                            "description": "card1 above card headline",
                            "type": "container",
                            "toggleDialog": true,
                            "dialogKey": "imagesCard2",
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
                                "text": "Images",
                                "class": "text-sm font-bold"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "description": "card 2 content",
                        "type": "container",
                        "class": "bg-white dark:bg-gray-800 flex-col pl-3 border",
                        "children": [
                          {
                            "description": "top view preview",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-8 px-4 pb-8",
                            "children": [
                              {
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "top view",
                                "class": "text-12 w-40 font-bold pl-8 pt-2"
                              },
                              {
                                "type": "container",
                                "class": "",
                                "children": [
                                  {
                                    "type": "element",
                                    "elementType": "staticHtmlTag",
                                    "tag": "img",
                                    "conditionArray": [
                                      {
                                        "cd": "INI, k, images.topView.file_part.cdnUrl, notEmpty"
                                      }
                                    ],
                                    "src": "ex:images.topView.file_part.cdnUrl + '/-/resize/400x/-/format/auto/-/quality/smart/'",
                                    "class": ""
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "description": "top view url",
                            "type": "container",
                            "class": "text dark:text-white flex w-full px-4",
                            "children": [
                              {
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "url",
                                "class": "text-12 w-20 font-bold pl-8"
                              },
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "div",
                                "text": "",
                                "assignedKey": "images.topView.file_parts.cdnUrl",
                                "class": "text-11 text-black dark:text-white"
                              }
                            ]
                          },
                          {
                            "description": "top view width",
                            "type": "container",
                            "class": "text dark:text-white flex w-full px-4",
                            "children": [
                              {
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "width",
                                "class": "text-12 w-20 font-bold pl-8"
                              },
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "",
                                "assignedKey": "images.topView.file_parts.originalImageInfo.width",
                                "class": "text-11 text-black dark:text-white  pt-0.5"
                              },
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "px",
                                "class": "text-11 text-black dark:text-white pl-1  pt-0.5"
                              }
                            ]
                          },
                          {
                            "description": "top view height",
                            "type": "container",
                            "class": "text dark:text-white flex w-full px-4 pb-8",
                            "children": [
                              {
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "height",
                                "class": "text-12 w-20 font-bold pl-8"
                              },
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "",
                                "assignedKey": "images.topView.file_parts.originalImageInfo.height",
                                "class": "text-11 text-black dark:text-white  pt-0.5"
                              },
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "px",
                                "class": "text-11 text-black dark:text-white pl-1  pt-0.5"
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
                "description": "CARD 4",
                "type": "container",
                "class": "flex flex-col md:flex-row md:space-x-4 w-full",
                "children": [
                  {
                    "description": "card 1 container",
                    "type": "container",
                    "class": "w-full mt-6",
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
                                "text": "Navision Datensatz",
                                "class": "text-sm font-bold"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "description": "card 1 content",
                        "type": "container",
                        "class": "bg-white dark:bg-gray-800 flex-col pl-3 border",
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
                                "class": "material-symbols-outlined text-primary align-middle  w-1/8"
                              },
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "",
                                "assignedKey": "project",
                                "class": "text text-black dark:text-white font-bold"
                              },
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "",
                                "assignedKey": "model",
                                "class": "text text-black dark:text-white font-bold pl-2"
                              },
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "",
                                "assignedKey": "navisionDescription",
                                "class": "text text-black dark:text-white font-bold pl-2"
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
                                    "text": "Artikelnr: ",
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
                                    "assignedKey": "articleNumber",
                                    "class": "text text-black dark:text-white w-full pl-8"
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
                                "assignedKey": "navisionDescription",
                                "class": "text-sm text-black dark:text-white w-5/6 pl-8"
                              }
                            ]
                          },
                          {
                            "description": "card1 row 5",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Kategorie",
                                "class": "text-12 w-48 font-bold pl-8"
                              },
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "assignedKey": "partsCategory",
                                "class": "text-12 w-full pl-2"
                              }
                            ]
                          },
                          {
                            "description": "card1 row 5",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Verfahren",
                                "class": "text-12 w-48 font-bold pl-8"
                              },
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "assignedKey": "application",
                                "class": "text-12 w-full pl-2"
                              }
                            ]
                          },
                          {
                            "description": "card1 row 5",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "assignedKey": "carrier",
                                "class": "text-12 w-48 font-bold pl-8"
                              },
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "assignedKey": "carrierId",
                                "class": "text-12 w-full pl-2"
                              }
                            ]
                          },
                          {
                            "description": "card1 row 5",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Material",
                                "class": "text-12 w-48 font-bold pl-8"
                              },
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "assignedKey": "material",
                                "class": "text-12 w-full pl-2"
                              }
                            ]
                          },
                          {
                            "description": "card1 row 5",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Produkt",
                                "class": "text-12 w-48 font-bold pl-8"
                              },
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "assignedKey": "heoProduct",
                                "class": "text-12 w-full pl-2"
                              }
                            ]
                          },
                          {
                            "description": "card1 row 5",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "SOP",
                                "class": "text-12 w-48 font-bold pl-8"
                              },
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "assignedKey": "sop",
                                "class": "text-12 text w-full pl-2"
                              }
                            ]
                          },
                          {
                            "description": "card1 row 5",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 pb-4 px-4",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "EOP",
                                "class": "text-12 w-48 font-bold pl-8"
                              },
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "assignedKey": "eop",
                                "class": "text-12 text w-full pl-2"
                              }
                            ]
                          },
                          {
                            "description": "card1 row 5",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "PPC",
                                "class": "text-12 w-48 font-bold pl-8"
                              },
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "assignedKey": "ppc",
                                "class": "text-12 font-bold text w-full pl-2"
                              }
                            ]
                          },
                          {
                            "description": "card1 row 5",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Transportunit",
                                "class": "text-12 w-48 font-bold pl-8"
                              },
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "assignedKey": "carrier",
                                "class": "text-12 font-bold text w-full pl-2"
                              }
                            ]
                          },
                          {
                            "description": "card1 row 5",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 pb-4 px-4",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Anmerkung",
                                "class": "text-12 w-48 font-bold pl-8"
                              },
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "assignedKey": "carrierAmount",
                                "class": "text-12 font-bold text w-full pl-2"
                              }
                            ]
                          },
                          {
                            "description": "card1 row 5",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Abruf pro Tag",
                                "class": "text-12 w-48 font-bold pl-8"
                              },
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "assignedKey": "retrievalPerDay",
                                "class": "text-12 font-bold text w-full pl-2"
                              }
                            ]
                          },
                          {
                            "description": "card1 row 5",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Abruf pro Woche",
                                "class": "text-12 w-48 font-bold pl-8"
                              },
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "assignedKey": "retrievalPerWeek",
                                "class": "text-12 font-bold text w-full pl-2"
                              }
                            ]
                          },
                          {
                            "description": "card1 row 5",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Abruf pro Monat",
                                "class": "text-12 w-48 font-bold pl-8"
                              },
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "assignedKey": "retrievalPerMonth",
                                "class": "text-12 font-bold text w-full pl-2"
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
                "description": "TEST CARD",
                "type": "container",
                "class": "flex flex-col md:flex-row md:space-x-4 w-full",
                "children": [
                  {
                    "description": "card 1 container",
                    "type": "container",
                    "class": "w-full mt-6",
                    "children": [
                      {
                        "description": "card 1 header",
                        "type": "container",
                        "class": "bg-cardHeaderBg h-10 pl-3 mt-6 cursor-pointer",
                        "children": [
                          {
                            "description": "card1 above card headline",
                            "type": "container",
                            "dialogKey": "capacityCard",
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
                                "text": "TEST CARD",
                                "class": "text-sm font-bold"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "description": "card 1 content",
                        "type": "container",
                        "class": "bg-white dark:bg-gray-800 flex-col pl-3 border",
                        "children": [
                          {
                            "description": "String",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8 ",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "String Key",
                                "class": "text-12 w-40 font-bold pl-8 pt-2"
                              },
                              {
                                "type": "element",
                                "elementType": "textInput",
                                "key": "stringKey",
                                "class": "w-1/3 ml-8 py-1 px-2 sm:text-13 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 border-gray-300 focus:border-b-2 focus:border-gray-400"
                              }
                            ]
                          },
                          {
                            "description": "Number",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8 ",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Number Key",
                                "class": "text-12 w-40 font-bold pl-8 pt-2"
                              },
                              {
                                "type": "element",
                                "elementType": "textInput",
                                "key": "number:numberKey",
                                "class": "w-1/3 ml-8 py-1 px-2 sm:text-13 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 border-gray-300 focus:border-b-2 focus:border-gray-400"
                              }
                            ]
                          },
                          {
                            "description": "Date",
                            "type": "container",
                            "class": "text dark:text-white flex w-full mt-0 px-4 pb-8 ",
                            "children": [
                              {
                                "description": "element project number",
                                "type": "element",
                                "elementType": "staticHtmlTag",
                                "tag": "span",
                                "text": "Date Key",
                                "class": "text-12 w-40 font-bold pl-8 pt-2"
                              },
                              {
                                "type": "element",
                                "elementType": "textInput",
                                "key": "date:dateKey",
                                "class": "w-1/3 ml-8 py-1 px-2 sm:text-13 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 border-gray-300 focus:border-b-2 focus:border-gray-400"
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
            "description": "cards project  tab 2",

            "tabID": "tab002",
            "tabGroupID": "tabGroup001",
            "tabContent": true,
            "type": "container",
            "class": "bg-white flex dark:bg-gray-800 w-full h-screen",
            "children": []
          }
        ]
      }
    ]
  })

  return { jsonLocal: jsonStructure.value }
}
