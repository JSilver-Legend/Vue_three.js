import { ref } from "vue"

export function useJsonLocal() {
  const jsonStructure = ref(
    {
      "type": "appTemplate",
      "folderNavigationLink": "a999111dwpKontrolle",
      "URL": "a999111dwpKontrolle",
      "showHideSidebar": false,
      "showHideTopbar": false,
      "functions": [
        {
          "Id": "scanDocumentCheck",
          "type": "documentExists",
          "expressionId": "",
          "writeArray": [
            {
              "action": "getDocument",
              "store": "getDocument01",
              "collection": "a999111dwpKontrolle",
              "searchKey": "volatile.qrReaderObject01.fa",
              "exists": "documentExists01",
              "notExists": "documentNotExists01"
            }
          ]
        },
        {
          "Id": "documentExists01",
          "type": "write",
          "expressionId": "",
          "writeArray": [
            {
              "action": "showDocument"
            }
          ]
        },
        {
          "Id": "documentNotExists01",
          "type": "write",
          "expressionId": "",
          "writeArray": [
            {
              "action": "createDocument"
            },
            {
              "action": "getDocument",
              "store": "articleNumberDocument",
              "collection": "a888222heoparts",
              "searchKey": "articleNumber",
              "exists": "documentExists01",
              "notExists": "notification"
            }
          ]
        }
      ],
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
          "appNavigationLink": "a999111dwpKontrolle",
          "subURL": "home",
          "category": "noDocument",
          "globalCollection": "a999111dwpKontrolle",
          "markup": [
            {
              "description": "bauteil falsch Dialog",
              "type": "dialog",
              "key": "bauteilFalsch",
              "toggleDialog": true,
              "dialogKey": "bauteilFalsch",
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
                          "class": "flex justify-between px-4 py-4 bg-red-400 text-left sm:px-6",
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
                                  "text": "Bauteil Falschanlieferung",
                                  "class": "text-XL leading-6 font-medium uppercase text-white"
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
                                  "dialogKey": "bauteilFalsch"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "type": "container",
                          "class": "bg-white py-10 px-4 sm:p-6",
                          "children": [
                            {
                              "type": "container",
                              "class": "col-span-12 sm:col-span-12 text-center",
                              "children": [
                                {
                                  "type": "element",
                                  "elementType": "staticHtmlTag",
                                  "tag": "div",
                                  "text": "Bitte klicken um eine Falschanlieferung zu melden",
                                  "class": "mt-4 text-[32px] text w-full"
                                }
                              ]
                            },
                            {
                              "type": "container",
                              "class": "mt-16 mb-8 grid grid-cols-12 gap-6",
                              "children": [
                                {
                                  "type": "container",
                                  "class": "col-span-12 sm:col-span-12",
                                  "children": [
                                    {
                                      "type": "element",
                                      "elementType": "staticHtmlTag",
                                      "text": "MELDUNG ABSENDEN",
                                      "tag": "div",
                                      "toggleDialog": true,
                                      "dialogKey": "bauteilFalsch",
                                      "class": "block text-white bg-red-400 active:bg-red-600 text-xl text-center font-bold uppercase text-sm px-6 py-6 rounded outline-none focus:outline-none mr-1 mb-1 cursor-pointer"
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
              "description": "dwp Kontrolle full screen",
              "type": "container",
              "class": "w-full h-screen top-0 left-0 flex inset-0 z-50",
              "children": [
                {
                  "type": "container",
                  "class": "relative my-0  w-full h-screen",
                  "children": [
                    {
                      "type": "container",
                      "class": "border-0 shadow-lg relative flex flex-col  bg-gray-400 outline-none focus:outline-none w-full h-screen",
                      "children": [
                        {
                          "type": "container",
                          "class": "w-full h-full ",
                          "children": [
                            {
                              "description": "topbar",
                              "type": "container",
                              "class": "w-full flex justify-between bg-[#4e5962] h-24",
                              "children": [
                                {
                                  "description": "left",
                                  "type": "container",
                                  "class": "flex",
                                  "children": [
                                    {
                                      "description": "tabs container",
                                      "type": "container",
                                      "class": "flex space-x-4 ml-2",
                                      "children": [
                                        {
                                          "type": "navEvent",
                                          "eventType": "showHideSidebar",
                                          "elementType": "staticHtmlTag",
                                          "text": "menu",
                                          "class": "material-symbols-outlined text-[32px] text-gray-400 pl-4 mr-1 cursor-pointer text-center pt-8"
                                        },
                                        {
                                          "description": "tab 1",
                                          "type": "container",
                                          "tabID": "tab001",
                                          "tabGroupID": "tabGroup001",
                                          "class": "cursor-pointer pt-2",
                                          "activeClass": "",
                                          "children": [
                                            {
                                              "type": "element",
                                              "elementType": "staticHtmlTag",
                                              "tag": "img",
                                              "src": "https://ucarecdn.com/b599e82a-6eb3-4bbc-bd20-269df42cacb3/-/resize/80x/-/format/auto/-/quality/smart/",
                                              "class": ""
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      "description": "navision FA Data",
                                      "type": "container",
                                      "conditionArray": [
                                        {
                                          "cd": "INI, k, articleNumber, notEmpty"
                                        },
                                        {
                                          "cd": "AND, tabGroupID, tabGroup001, unequal, tabID, tab001"
                                        }
                                      ],
                                      "class": "",
                                      "children": [
                                        {
                                          "description": "button",
                                          "type": "container",

                                          "class": "flex space-x-8 w-full pl-8",
                                          "children": [
                                            {
                                              "type": "element",
                                              "elementType": "staticHtmlTag",
                                              "tag": "div",
                                              "assignedKey": "fa",
                                              "class": "font-bold text-white text-[64px] p-0 bg-gray-500 px-4"
                                            },
                                            {
                                              "description": "button",
                                              "type": "container",
                                              "class": "pt-2",
                                              "children": [
                                                {
                                                  "description": "Artiklenummer",
                                                  "type": "container",
                                                  "class": "flex w-full pt-1 leading-tight",
                                                  "children": [
                                                    {
                                                      "type": "element",
                                                      "elementType": "staticHtmlTag",
                                                      "tag": "span",
                                                      "text": "Artiklenummer: ",
                                                      "class": "font-bold text-white text-[20px]"
                                                    },
                                                    {
                                                      "type": "element",
                                                      "elementType": "staticHtmlTag",
                                                      "tag": "span",
                                                      "assignedKey": "articleNumber",
                                                      "class": "font-bold text-white text-[20px] pl-3"
                                                    }
                                                  ]
                                                },
                                                {
                                                  "description": "Kunde",
                                                  "type": "container",
                                                  "class": "flex w-full leading-tight",
                                                  "children": [
                                                    {
                                                      "type": "element",
                                                      "elementType": "staticHtmlTag",
                                                      "tag": "span",
                                                      "text": "Kunde: ",
                                                      "class": "font-bold text-white text-[20px]"
                                                    },
                                                    {
                                                      "type": "element",
                                                      "elementType": "staticHtmlTag",
                                                      "tag": "span",
                                                      "text": "volatile:articleNumberStore.client",
                                                      "class": "font-bold text-white text-[20px] pl-4"
                                                    }
                                                  ]
                                                },
                                                {
                                                  "description": "Kunde",
                                                  "type": "container",
                                                  "class": "flex w-full leading-tight",
                                                  "children": [
                                                    {
                                                      "type": "element",
                                                      "elementType": "staticHtmlTag",
                                                      "tag": "span",
                                                      "text": "Produkt: ",
                                                      "class": "font-bold text-white text-[20px]"
                                                    },
                                                    {
                                                      "type": "element",
                                                      "elementType": "staticHtmlTag",
                                                      "tag": "span",
                                                      "text": "volatile:articleNumberStore.heoProduct",
                                                      "class": "font-bold text-white text-[20px] pl-4"
                                                    }
                                                  ]
                                                }
                                              ]
                                            },
                                            {
                                              "description": "button",
                                              "type": "container",
                                              "class": "pt-2",
                                              "children": [
                                                {
                                                  "description": "Kunde",
                                                  "type": "container",
                                                  "class": "flex w-full leading-tight",
                                                  "children": [
                                                    {
                                                      "type": "element",
                                                      "elementType": "staticHtmlTag",
                                                      "tag": "span",
                                                      "text": "Oem: ",
                                                      "class": "font-bold text-white text-[20px]"
                                                    },
                                                    {
                                                      "type": "element",
                                                      "elementType": "staticHtmlTag",
                                                      "tag": "span",
                                                      "text": "volatile:articleNumberStore.oem",
                                                      "class": "font-bold text-white text-[20px] pl-4"
                                                    }
                                                  ]
                                                },
                                                {
                                                  "description": "Kunde",
                                                  "type": "container",
                                                  "class": "flex w-full leading-tight",
                                                  "children": [
                                                    {
                                                      "type": "element",
                                                      "elementType": "staticHtmlTag",
                                                      "tag": "span",
                                                      "text": "Model: ",
                                                      "class": "font-bold text-white text-[20px]"
                                                    },
                                                    {
                                                      "type": "element",
                                                      "elementType": "staticHtmlTag",
                                                      "tag": "span",
                                                      "text": "volatile:articleNumberStore.model",
                                                      "class": "font-bold text-white text-[20px] pl-4"
                                                    }
                                                  ]
                                                },
                                                {
                                                  "description": "Kunde",
                                                  "type": "container",
                                                  "class": "flex w-full leading-tight",
                                                  "children": [
                                                    {
                                                      "type": "element",
                                                      "elementType": "staticHtmlTag",
                                                      "tag": "span",
                                                      "text": "Gewicht: ",
                                                      "class": "font-bold text-white text-[20px]"
                                                    },
                                                    {
                                                      "type": "container",
                                                      "class": "flex",
                                                      "children": [
                                                        {
                                                          "type": "element",
                                                          "elementType": "staticHtmlTag",
                                                          "tag": "span",
                                                          "text": "volatile:articleNumberStore.partWeight",
                                                          "class": "font-bold text-white text-[20px] pl-4"
                                                        },
                                                        {
                                                          "type": "element",
                                                          "elementType": "staticHtmlTag",
                                                          "tag": "span",
                                                          "text": "gr",
                                                          "class": "font-bold text-white text-[20px] pl-1"
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
                                  "description": "right",
                                  "type": "container",
                                  "class": "w-2/12  flex items-center justify-end",
                                  "children": [
                                    {
                                      "description": "logo",
                                      "type": "element",
                                      "elementType": "staticHtmlTag",
                                      "tag": "img",
                                      "src": "/static/img/logo_heo_02.png",
                                      "class": "cursor-point scale-[55%]"
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
                              "class": "flex justify-center items-center w-full",
                              "children": [
                                {
                                  "type": "container",
                                  "class": "w-[500px] f-auto",
                                  "children": [
                                    {
                                      "type": "cddpEvent",
                                      "eventType": "scanDocument",
                                      "searchKey": "fa",
                                      "elementType": "qrReader",
                                      "getDocuments2Store": [
                                        {
                                          "collection": "a888222heoparts",
                                          "searchKey": "articleNumber",
                                          "searchValue": "articleNumber",
                                          "query": [],
                                          "store": "articleNumberStore"
                                        }
                                      ],
                                      "jump2TabID": "tab002",
                                      "tabGroupID": "tabGroup001",
                                      "class": "bg-amber-400"
                                    },
                                    {
                                      "description": "button Fertigungsauftrag scannen",
                                      "elementType": "toggleButton",
                                      "type": "element",
                                      "key": "passedTab1",
                                      "parentClass": "w-full",
                                      "children": [
                                        {
                                          "description": "stage1",
                                          "value": false,
                                          "tag": "div",
                                          "tabID": "tab002",
                                          "tabGroupID": "tabGroup001",
                                          "class": "w-full h-full bg-amber-400 flex justify-center items-center",
                                          "children": [
                                            {
                                              "description": "button Bauteilprüfung richtig",
                                              "type": "container",
                                              "class": "flex flex-col justify-center items-center",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "Fertigungsauftrag scannen!!!",
                                                  "class": "font-bold text-[24px]"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "text": "barcode_scanner",
                                                  "class": "material-symbols-outlined text-[96px] pl-4 mr-1 cursor-pointer text-center"
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "description": "stage2",
                                          "value": true,
                                          "tabID": "tab002",
                                          "tabGroupID": "tabGroup001",
                                          "tag": "div",
                                          "class": "w-full h-full bg-amber-400 flex justify-center items-center",
                                          "children": [
                                            {
                                              "description": "button Bauteilprüfung richtig",
                                              "type": "container",
                                              "class": "flex flex-col",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "Fertigungsauftrag scannen",
                                                  "class": "font-bold text-[24px] px-4"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "text": "barcode_scanner",
                                                  "class": "material-symbols-outlined text-[96px] pl-4 mr-1 cursor-pointer text-center"
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
                              "description": "tab 2",
                              "type": "container",
                              "tabID": "tab002",
                              "tabGroupID": "tabGroup001",
                              "tabContent": true,
                              "class": "",
                              "children": [
                                {
                                  "type": "container",
                                  "class": "w-full px-24 w-full pt-4",
                                  "children": [
                                    {
                                      "type": "element",
                                      "elementType": "staticHtmlTag",
                                      "tag": "div",
                                      "text": "Heatmap",
                                      "class": "font-bold text-white text-[48px] p-0 bg-gray-500 pl-4 text-center uppercase"
                                    },
                                    {
                                      "type": "element",
                                      "elementType": "staticHtmlTag",
                                      "tag": "div",
                                      "text": "scaling factor",
                                      "class": "text-sm text-white p-0 pt-4 text-left"
                                    },
                                    {
                                      "type": "container",
                                      "class": "w-full flex",
                                      "children": [
                                        {
                                          "type": "element",
                                          "elementType": "rangeSlider",
                                          "key": "scalingFactor",
                                          "volatileObject": "heatmapRangeSlider",
                                          "orientation": "horizontal",
                                          "circleOffset": 0,
                                          "height": 8,
                                          "min": 0,
                                          "max": 1,
                                          "step": 0.01,
                                          "color": "green",
                                          "trackcolor": "#888888",
                                          "tooltip": false,
                                          "class": "",
                                          "parentClass": "pt-1 w-64 "
                                        },
                                        {
                                          "type": "element",
                                          "elementType": "staticHtmlTag",
                                          "tag": "span",
                                          "class": "w-full text-white text-sm pl-4",
                                          "text": "volatile:heatmapRangeSlider.scalingFactor"
                                        },
                                      ]
                                    },
                                    {
                                      "type": "element",
                                      "elementType": "staticHtmlTag",
                                      "tag": "div",
                                      "text": "filter heatmap data",
                                      "class": "text-sm text-white p-0 pt-4 text-left"
                                    },
                                    {
                                      "type": "container",
                                      "class": "w-full flex space-x-4 pt-0",
                                      "children": [
                                        {
                                          "description": "ALL",
                                          "type": "annotatorEvent",
                                          "eventType": "filterObjectsArray",
                                          "value": null,
                                          "class": "flex  items-center cursor-pointer  text-cardHeaderBg hover:text-primary border border-blue-800 hover:border-primary w-40 h-10 mt-1 border-1 px-4 text-12 font-bold leading-[24px]",
                                          "activeClass": "bg-[#e14b1d] text-white hover:text-white",
                                          "children": [
                                            {
                                              "type": "element",
                                              "elementType": "staticHtmlTag",
                                              "tag": "div",
                                              "text": "ALL",
                                              "class": "uppercase"
                                            }
                                          ]
                                        },
                                        {
                                          "description": "Pickel / Einschluss",
                                          "type": "annotatorEvent",
                                          "eventType": "filterObjectsArray",
                                          "value": [{ "cd": "INI, k, content, equal, s, Pickel / Einschluss" }],
                                          "class": "flex  items-center cursor-pointer  text-cardHeaderBg hover:text-primary border border-blue-800 hover:border-primary w-40 h-10 mt-1 border-1 px-4 text-12 font-bold leading-[24px]",
                                          "activeClass": "bg-[#e14b1d] text-white hover:text-white",
                                          "children": [
                                            {
                                              "type": "element",
                                              "elementType": "staticHtmlTag",
                                              "tag": "div",
                                              "text": "Pickel / Einschluss",
                                              "class": "uppercase"
                                            }
                                          ]
                                        },
                                        {
                                          "description": "Lacktropfen",
                                          "type": "annotatorEvent",
                                          "eventType": "filterObjectsArray",
                                          "value": [{ "cd": "INI, k, content, equal, s, Lacktropfen" }],
                                          "class": "flex  items-center cursor-pointer  text-cardHeaderBg hover:text-primary border border-blue-800 hover:border-primary w-40 h-10 mt-1 border-1 px-4 text-12 font-bold leading-[24px]",
                                          "activeClass": "bg-[#e14b1d] text-white hover:text-white",
                                          "children": [
                                            {
                                              "type": "element",
                                              "elementType": "staticHtmlTag",
                                              "tag": "div",
                                              "text": "Lacktropfen",
                                              "class": "uppercase"
                                            }
                                          ]
                                        },
                                        {
                                          "description": "Lackbeule",
                                          "type": "annotatorEvent",
                                          "eventType": "filterObjectsArray",
                                          "value": [{ "cd": "INI, k, content, equal, s, Lackbeule" }],
                                          "class": "flex  items-center cursor-pointer  text-cardHeaderBg hover:text-primary border border-blue-800 hover:border-primary w-40 h-10 mt-1 border-1 px-4 text-12 font-bold leading-[24px]",
                                          "activeClass": "bg-[#e14b1d] text-white hover:text-white",
                                          "children": [
                                            {
                                              "type": "element",
                                              "elementType": "staticHtmlTag",
                                              "tag": "div",
                                              "text": "Lackbeule",
                                              "class": "uppercase"
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      "type": "container",
                                      "class": "w-full flex px-1 pt-4",
                                      "children": [
                                        {
                                          "description": "canvasPane",
                                          "type": "container",
                                          "tag": "div",
                                          "class": "w-full mt-8",
                                          "children": [
                                            {
                                              "type": "element",
                                              "elementType": "annotatorCanvas",
                                              "mode": "heatMap",
                                              "heatmapData": "control",
                                              "zoom": false,
                                              "pan": false,
                                              "heatmapScalefactor": "volatile:heatmapRangeSlider.scalingFactor",
                                              "heatmapDefaultfactor": 0.5,
                                              "autoSave": true,
                                              "key": "images",
                                              "defaultView": {
                                                "name": "top view",
                                                "value": "topView",
                                                "newKey": "test 4",
                                                "zoomFactor": "volatile:articleNumberStore.scaling.zoomFactor",
                                                "panXfromCenter": "volatile:articleNumberStore.scaling.panXfromCenter",
                                                "panYfromCenter": "volatile:articleNumberStore.scaling.panYfromCenter",
                                                "bgImage1": "volatile:articleNumberStore.images.preview[0].imageResponse.cdnUrl",
                                                "bgImage1UrlParameter": "",
                                                "bgImage2": "",
                                                "bgImage2UrlParameter": ""
                                              },
                                              "heatmapColorConditions": [
                                                {
                                                  "key": "default",
                                                  "value": "default",
                                                  "0.25": "rgb(0,0,255)",
                                                  "0.55": "rgb(0,255,0)",
                                                  "0.85": "blue",
                                                  "1.0": "rgb(255,0,0)"
                                                },
                                                {
                                                  "key": "content",
                                                  "value": "Pickel / Einschluss",
                                                  "0.25": "#660000",
                                                  "0.55": "#990000",
                                                  "0.85": "#bb0000",
                                                  "1.0": "#ff0000"
                                                }
                                              ],
                                              "class": "w-full h-[500px]"
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      "description": "button container",
                                      "type": "container",
                                      "class": "h-32 flex px-48 justify-between w-full",
                                      "children": [
                                        {
                                          "description": "button Bauteilprüfung falsch",
                                          "type": "container",
                                          "toggleDialog": true,
                                          "dialogKey": "bauteilFalsch",
                                          "class": "h-32 w-64 bg-red-500 flex justify-center items-center",
                                          "children": [
                                            {
                                              "type": "element",
                                              "elementType": "staticHtmlTag",
                                              "tag": "div",
                                              "text": "Bauteil falsch",
                                              "class": "font-bold text-white text-[24px] px-4"
                                            }
                                          ]
                                        },
                                        {
                                          "description": "button Bauteilprüfung richtig",
                                          "elementType": "toggleButton",
                                          "type": "element",
                                          "key": "passedTab2",
                                          "parentClass": "h-32 w-64 flex justify-center items-center",
                                          "children": [
                                            {
                                              "description": "stage1",

                                              "value": false,
                                              "tag": "div",
                                              "tabID": "tab003",
                                              "tabGroupID": "tabGroup001",
                                              "class": "w-full h-full bg-green-700",
                                              "children": [
                                                {
                                                  "description": "button Bauteilprüfung richtig",
                                                  "type": "container",
                                                  "class": "flex flex-col justify-center items-center",
                                                  "children": [
                                                    {
                                                      "type": "element",
                                                      "elementType": "staticHtmlTag",
                                                      "tag": "div",
                                                      "text": "Bauteil richtig",
                                                      "class": "font-bold text-white text-[24px] px-4"
                                                    },
                                                    {
                                                      "type": "element",
                                                      "elementType": "staticHtmlTag",
                                                      "text": "how_to_reg",
                                                      "class": "material-symbols-outlined text-[64px] mont-bold text-white pl-4 mr-1 cursor-pointer text-center"
                                                    }
                                                  ]
                                                }
                                              ]
                                            },
                                            {
                                              "description": "stage2",
                                              "value": true,
                                              "fixStatus": true,
                                              "tabID": "tab003",
                                              "tabGroupID": "tabGroup001",
                                              "tag": "div",
                                              "class": "w-full h-full bg-green-400",
                                              "children": [
                                                {
                                                  "description": "button Bauteilprüfung richtig",
                                                  "type": "container",
                                                  "class": "flex flex-col justify-center items-center",
                                                  "children": [
                                                    {
                                                      "type": "element",
                                                      "elementType": "staticHtmlTag",
                                                      "tag": "div",
                                                      "text": "Bauteil richtig!",
                                                      "class": "font-bold text-white text-[24px] px-4"
                                                    },
                                                    {
                                                      "type": "element",
                                                      "elementType": "staticHtmlTag",
                                                      "text": "done",
                                                      "class": "material-symbols-outlined text-[64px] mont-bold text-white pl-4 mr-1 cursor-pointer text-center"
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
                              "description": "tab 3",
                              "type": "container",
                              "tabID": "tab003",
                              "tabGroupID": "tabGroup001",
                              "tabContent": true,
                              "class": "",
                              "children": [
                                {
                                  "description": "button",
                                  "type": "container",
                                  "class": "w-full px-24 w-full uppercase pt-8 text-center",
                                  "children": [
                                    {
                                      "description": "button",
                                      "type": "container",
                                      "class": "flex justify-start w-full bg-gray-500 ",
                                      "children": [
                                        {
                                          "type": "element",
                                          "elementType": "staticHtmlTag",
                                          "tag": "div",
                                          "text": "Kontrollanweisung für Artikelnummer",
                                          "class": "font-bold text-white text-[36px] p-0 bg-gray-500 pl-4"
                                        },
                                        {
                                          "type": "element",
                                          "elementType": "staticHtmlTag",
                                          "tag": "div",
                                          "assignedKey": "articleNumber",
                                          "class": "font-bold text-white text-[36px] p-0 bg-gray-500 pl-4"
                                        }
                                      ]
                                    },
                                    {
                                      "description": "video container",
                                      "type": "container",
                                      "class": "w-full h-[600px] flex justify-center items-center bg-black",
                                      "children": [
                                        {
                                          "type": "element",
                                          "elementType": "videoPlayer",
                                          "class": "w-full h-full vjs-big-play-centered",
                                          "options": {
                                            "src": "ex:volatile:articleNumberStore.videos.dwp_kontrolle_01_video[0].videoResponse.cdnUrl + '/' + volatile:articleNumberStore.videos.dwp_kontrolle_01_video[0].videoResponse.name",
                                            "poster": "volatile:articleNumberStore.images.dwp_kontrolle_01_poster[0].imageResponse.cdnUrl",
                                            "controls": true,
                                            "loop": false
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "description": "button container",
                                      "type": "container",
                                      "class": "h-32 flex px-48 justify-center w-full mt-8",
                                      "children": [
                                        {
                                          "description": "Videoanweisung verstanden",
                                          "type": "container",
                                          "tabID": "tab004",
                                          "tabGroupID": "tabGroup001",
                                          "class": "h-32 w-96 bg-green-400 flex justify-center items-center",
                                          "children": [
                                            {
                                              "type": "element",
                                              "elementType": "staticHtmlTag",
                                              "tag": "div",
                                              "text": "Anweisung verstanden?",
                                              "class": "font-bold text-white text-[24px] px-4"
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
                              "description": "tab 4",
                              "type": "container",
                              "tabID": "tab004",
                              "tabGroupID": "tabGroup001",
                              "tabContent": true,
                              "class": "",
                              "children": [
                                {
                                  "description": "button",
                                  "type": "container",
                                  "class": "w-full px-24 w-full pt-4",
                                  "children": [
                                    {
                                      "description": "Fehlermerkmale",
                                      "type": "container",
                                      "class": "grid grid-cols-6 gap-8 w-full mt-8",
                                      "children": [
                                        {
                                          "description": "button Pickel / Einschlüsse",
                                          "type": "annotatorEvent",
                                          "eventType": "activateTool",
                                          "key": "images",
                                          "value": {
                                            "name": "dotCircle",
                                            "value": "dotCircleTool",
                                            "fillColor": "#0000ff01",
                                            "opacity": 1,
                                            "radius": 40,
                                            "strokeColor": "#55ff00",
                                            "strokeWidth": 4,
                                            "dashArrayStroke": 20,
                                            "dashArrayGap": 20,
                                            "content": "Pickel / Einschluss",
                                            "resize": false
                                          },
                                          "containerType": "div",
                                          "class": "py-2 w-52 bg-blue-400 flex flex-col justify-center items-center",
                                          "children": [
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "text-center h-2/3 leading-tight",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "Pickel",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "Einschlüsse A",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase"
                                                }
                                              ]
                                            },
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "flex text-center w-full",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "< 3mm",
                                                  "class": "font-bold text-gray-300 text-[32px] px-4"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "action:count",
                                                  "class": "font-bold text-white text-[32px] px-4",
                                                  "parameters": {
                                                    "location": "control",
                                                    "key": "content",
                                                    "value": "Pickel / Einschluss",
                                                    "calc": 1
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "description": "button Lacktropfen",
                                          "type": "annotatorEvent",
                                          "eventType": "activateTool",
                                          "key": "images",
                                          "value": {
                                            "name": "dotCircle",
                                            "value": "dotCircleTool",
                                            "fillColor": "#0000ff01",
                                            "opacity": 1,
                                            "radius": 40,
                                            "strokeColor": "#26d0fa",
                                            "strokeWidth": 4,
                                            "dashArrayStroke": 20,
                                            "dashArrayGap": 20,
                                            "content": "Lacktropfen",
                                            "resize": false
                                          },
                                          "containerType": "div",
                                          "class": "py-2 w-52 bg-blue-400 flex flex-col justify-center items-center",
                                          "children": [
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "text-center h-2/3 leading-tight",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "Lacktropfen",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase pt-6"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase"
                                                }
                                              ]
                                            },
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "flex text-center w-full",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "",
                                                  "class": "font-bold text-gray-300 text-[32px] px-4 w-8/12"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "action:count",
                                                  "class": "font-bold text-white text-[32px] px-4 w-4/12",
                                                  "parameters": {
                                                    "location": "control",
                                                    "key": "content",
                                                    "value": "Lacktropfen",
                                                    "calc": 1
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "description": "button Lackbeule",
                                          "type": "annotatorEvent",
                                          "eventType": "activateTool",
                                          "key": "images",
                                          "value": {
                                            "name": "dotCircle",
                                            "value": "dotCircleTool",
                                            "fillColor": "#0000ff01",
                                            "opacity": 1,
                                            "radius": 40,
                                            "strokeColor": "#8400ff",
                                            "strokeWidth": 4,
                                            "dashArrayStroke": 20,
                                            "dashArrayGap": 20,
                                            "content": "Lackbeule",
                                            "resize": false
                                          },
                                          "containerType": "div",
                                          "class": "py-2 w-52 bg-blue-400 flex flex-col justify-center items-center",
                                          "children": [
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "text-center h-2/3 leading-tight",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "Lackbeule",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase pt-6"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase"
                                                }
                                              ]
                                            },
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "flex text-center w-full",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "",
                                                  "class": "font-bold text-gray-300 text-[32px] px-4 w-8/12"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "action:count",
                                                  "class": "font-bold text-white text-[32px] px-4 w-4/12",
                                                  "parameters": {
                                                    "location": "control",
                                                    "key": "content",
                                                    "value": "Lackbeule",
                                                    "calc": 1
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "description": "button Lackbläschen",
                                          "type": "annotatorEvent",
                                          "eventType": "activateTool",
                                          "key": "images",
                                          "value": {
                                            "name": "dotCircle",
                                            "value": "dotCircleTool",
                                            "fillColor": "#0000ff01",
                                            "opacity": 1,
                                            "radius": 40,
                                            "strokeColor": "#f7ff00",
                                            "strokeWidth": 4,
                                            "dashArrayStroke": 20,
                                            "dashArrayGap": 20,
                                            "content": "Lackbläschen",
                                            "resize": false
                                          },
                                          "containerType": "div",
                                          "class": "py-2 w-52 bg-blue-400 flex flex-col justify-center items-center",
                                          "children": [
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "text-center h-2/3 leading-tight",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "Lackbläschen",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase pt-6"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase"
                                                }
                                              ]
                                            },
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "flex text-center w-full",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "",
                                                  "class": "font-bold text-gray-300 text-[32px] px-4 w-8/12"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "action:count",
                                                  "class": "font-bold text-white text-[32px] px-4 w-4/12",
                                                  "parameters": {
                                                    "location": "control",
                                                    "key": "content",
                                                    "value": "Lackbläschen",
                                                    "calc": 1
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "description": "button Fettkante",
                                          "type": "annotatorEvent",
                                          "eventType": "activateTool",
                                          "key": "images",
                                          "value": {
                                            "name": "dotCircle",
                                            "value": "dotCircleTool",
                                            "fillColor": "#0000ff01",
                                            "opacity": 1,
                                            "radius": 40,
                                            "strokeColor": "#00b2ff",
                                            "strokeWidth": 4,
                                            "dashArrayStroke": 20,
                                            "dashArrayGap": 20,
                                            "content": "Fettkante",
                                            "resize": false
                                          },
                                          "containerType": "div",
                                          "class": "py-2 w-52 bg-blue-400 flex flex-col justify-center items-center",
                                          "children": [
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "text-center h-2/3 leading-tight",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "Fettkante",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase pt-6"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase"
                                                }
                                              ]
                                            },
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "flex text-center w-full",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "",
                                                  "class": "font-bold text-gray-300 text-[32px] px-4 w-8/12"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "action:count",
                                                  "class": "font-bold text-white text-[32px] px-4 w-4/12",
                                                  "parameters": {
                                                    "location": "control",
                                                    "key": "content",
                                                    "value": "Fettkante",
                                                    "calc": 1
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "description": "button Orangenhaut",
                                          "type": "annotatorEvent",
                                          "eventType": "activateTool",
                                          "key": "images",
                                          "value": {
                                            "name": "dotCircle",
                                            "value": "dotCircleTool",
                                            "fillColor": "#0000ff01",
                                            "opacity": 1,
                                            "radius": 40,
                                            "strokeColor": "#ff7300",
                                            "strokeWidth": 4,
                                            "dashArrayStroke": 20,
                                            "dashArrayGap": 20,
                                            "content": "Orangenhaut",
                                            "resize": false
                                          },
                                          "containerType": "div",
                                          "class": "py-2 w-52 bg-blue-400 flex flex-col justify-center items-center",
                                          "children": [
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "text-center h-2/3 leading-tight",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "Orangenhaut",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase pt-6"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase"
                                                }
                                              ]
                                            },
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "flex text-center w-full",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "",
                                                  "class": "font-bold text-gray-300 text-[32px] px-4 w-8/12"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "action:count",
                                                  "class": "font-bold text-white text-[32px] px-4 w-4/12",
                                                  "parameters": {
                                                    "location": "control",
                                                    "key": "content",
                                                    "value": "Orangenhaut",
                                                    "calc": 1
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "description": "button Magerlackierung",
                                          "type": "annotatorEvent",
                                          "eventType": "activateTool",
                                          "key": "images",
                                          "value": {
                                            "name": "dotCircle",
                                            "value": "dotCircleTool",
                                            "fillColor": "#0000ff01",
                                            "opacity": 1,
                                            "radius": 40,
                                            "strokeColor": "#f6cdcd",
                                            "strokeWidth": 4,
                                            "dashArrayStroke": 20,
                                            "dashArrayGap": 20,
                                            "content": "Magerlackierung",
                                            "resize": false
                                          },
                                          "containerType": "div",
                                          "class": "py-2 w-52 bg-blue-400 flex flex-col justify-center items-center",
                                          "children": [
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "text-center h-2/3 leading-tight",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "Magerlackierung",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase pt-6"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase"
                                                }
                                              ]
                                            },
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "flex text-center w-full",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "",
                                                  "class": "font-bold text-gray-300 text-[32px] px-4 w-8/12"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "action:count",
                                                  "class": "font-bold text-white text-[32px] px-4 w-4/12",
                                                  "parameters": {
                                                    "location": "control",
                                                    "key": "content",
                                                    "value": "Magerlackierung",
                                                    "calc": 1
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "description": "button Kratzer",
                                          "type": "annotatorEvent",
                                          "eventType": "activateTool",
                                          "key": "images",
                                          "value": {
                                            "name": "dotCircle",
                                            "value": "dotCircleTool",
                                            "fillColor": "#0000ff01",
                                            "opacity": 1,
                                            "radius": 40,
                                            "strokeColor": "#00fff7",
                                            "strokeWidth": 4,
                                            "dashArrayStroke": 20,
                                            "dashArrayGap": 20,
                                            "content": "Kratzer",
                                            "resize": false
                                          },
                                          "containerType": "div",
                                          "class": "py-2 w-52 bg-blue-400 flex flex-col justify-center items-center",
                                          "children": [
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "text-center h-2/3 leading-tight",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "Kratzer",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase pt-6"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase"
                                                }
                                              ]
                                            },
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "flex text-center w-full",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "< 3mm",
                                                  "class": "font-bold text-gray-300 text-[32px] px-4 w-8/12"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "action:count",
                                                  "class": "font-bold text-white text-[32px] px-4 w-4/12",
                                                  "parameters": {
                                                    "location": "control",
                                                    "key": "content",
                                                    "value": "Kratzer",
                                                    "calc": 1
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "description": "button Krater",
                                          "type": "annotatorEvent",
                                          "eventType": "activateTool",
                                          "key": "images",
                                          "value": {
                                            "name": "dotCircle",
                                            "value": "dotCircleTool",
                                            "fillColor": "#0000ff01",
                                            "opacity": 1,
                                            "radius": 40,
                                            "strokeColor": "#0095ff",
                                            "strokeWidth": 4,
                                            "dashArrayStroke": 20,
                                            "dashArrayGap": 20,
                                            "content": "Krater",
                                            "resize": false
                                          },
                                          "containerType": "div",
                                          "class": "py-2 w-52 bg-blue-400 flex flex-col justify-center items-center",
                                          "children": [
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "text-center h-2/3 leading-tight",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "Krater",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase pt-6"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase"
                                                }
                                              ]
                                            },
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "flex text-center w-full",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "< 4mm",
                                                  "class": "font-bold text-gray-300 text-[32px] px-4 w-8/12"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "action:count",
                                                  "class": "font-bold text-white text-[32px] px-4 w-4/12",
                                                  "parameters": {
                                                    "location": "control",
                                                    "key": "content",
                                                    "value": "Krater",
                                                    "calc": 1
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "description": "button KTL-Fehler",
                                          "type": "annotatorEvent",
                                          "eventType": "activateTool",
                                          "key": "images",
                                          "value": {
                                            "name": "dotCircle",
                                            "value": "dotCircleTool",
                                            "fillColor": "#0000ff01",
                                            "opacity": 1,
                                            "radius": 40,
                                            "strokeColor": "#ff0000",
                                            "strokeWidth": 4,
                                            "dashArrayStroke": 20,
                                            "dashArrayGap": 20,
                                            "content": "KTL-Fehler",
                                            "resize": false
                                          },
                                          "containerType": "div",
                                          "class": "py-2 w-52 bg-blue-400 flex flex-col justify-center items-center",
                                          "children": [
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "text-center h-2/3 leading-tight",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "KTL-Fehler",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase pt-6"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase"
                                                }
                                              ]
                                            },
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "flex text-center w-full",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "",
                                                  "class": "font-bold text-gray-300 text-[32px] px-4 w-8/12"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "action:count",
                                                  "class": "font-bold text-white text-[32px] px-4 w-4/12",
                                                  "parameters": {
                                                    "location": "control",
                                                    "key": "content",
                                                    "value": "KTL-Fehler",
                                                    "calc": 1
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "description": "button Rohwarefehler",
                                          "type": "annotatorEvent",
                                          "eventType": "activateTool",
                                          "key": "images",
                                          "value": {
                                            "name": "dotCircle",
                                            "value": "dotCircleTool",
                                            "fillColor": "#0000ff01",
                                            "opacity": 1,
                                            "radius": 40,
                                            "strokeColor": "#ff0000",
                                            "strokeWidth": 4,
                                            "dashArrayStroke": 20,
                                            "dashArrayGap": 20,
                                            "content": "Rohwarefehler",
                                            "resize": false
                                          },
                                          "containerType": "div",
                                          "class": "py-2 w-52 bg-blue-400 flex flex-col justify-center items-center",
                                          "children": [
                                            {
                                              "description": "Rohwarefehler",
                                              "type": "container",
                                              "class": "text-center h-2/3 leading-tight",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "Rohwarefehler",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase pt-6"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase"
                                                }
                                              ]
                                            },
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "flex text-center w-full",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "",
                                                  "class": "font-bold text-gray-300 text-[32px] px-4 w-8/12"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "action:count",
                                                  "class": "font-bold text-white text-[32px] px-4 w-4/12",
                                                  "parameters": {
                                                    "location": "control",
                                                    "key": "content",
                                                    "value": "Rohwarefehler",
                                                    "calc": 1
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "description": "button container",
                                          "type": "container",
                                          "class": "py-4 w-52 bg-orange-400 flex flex-col justify-center items-center",
                                          "children": [
                                            {
                                              "description": "button Bauteilprüfung falsch",
                                              "type": "container",
                                              "class": "font-bold text-white text-[24px] px-4 flex flex-col justify-center items-center",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "Fehler gesamt "
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "action:count",
                                                  "parameters": {
                                                    "location": "control",
                                                    "key": "content"
                                                  },
                                                  "class": "font-bold text-white text-[24px] px-4"
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      "description": "button",
                                      "type": "container",
                                      "class": "w-full flex px-1 pt-4",
                                      "children": [
                                        {
                                          "description": "canvasPane",
                                          "type": "container",
                                          "tag": "div",
                                          "class": "w-10/12 border border-white mt-8 bg-black/70",
                                          "children": [
                                            {
                                              "type": "element",
                                              "elementType": "annotatorCanvas",
                                              "mode": "normal",
                                              "autoSave": false,
                                              "key": "images",
                                              "defaultView": {
                                                "name": "top view",
                                                "value": "topView",
                                                "bgImage1": "volatile:articleNumberStore.images.preview[0].imageResponse.cdnUrl",
                                                "bgImage1UrlParameter": "",
                                                "bgImage2": "",
                                                "bgImage2UrlParameter": ""
                                              },
                                              "class": "w-full h-[500px] testing"
                                            }
                                          ]
                                        },
                                        {
                                          "description": "button",
                                          "type": "container",
                                          "class": "w-2/12 flex flex-col justify-center",
                                          "children": [
                                            {
                                              "description": "button container",
                                              "type": "container",
                                              "class": "h-32 flex w-full mt-4 pl-8",
                                              "children": [
                                                {
                                                  "description": "button Fehlermerkmal einloggen",
                                                  "type": "annotatorEvent",
                                                  "eventType": "storeMeasures",
                                                  "key": "images",
                                                  "centerDot": true,
                                                  "storeLocation": "control",
                                                  "clearCanvas": true,
                                                  "class": "h-32 w-96 bg-green-400 flex justify-center items-center",
                                                  "children": [
                                                    {
                                                      "type": "element",
                                                      "elementType": "staticHtmlTag",
                                                      "tag": "div",
                                                      "text": "Fehlermerkmal einloggen",
                                                      "class": "font-bold text-white text-[24px] px-4"
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
                                      "description": "button container",
                                      "type": "container",
                                      "class": "flex justify-between w-10/12 pt-4",
                                      "children": [
                                        {
                                          "description": "button löschen",
                                          "type": "container",
                                          "class": "py-4 w-36 bg-red-500 flex justify-center items-center ml-1",
                                          "children": [
                                            {
                                              "type": "element",
                                              "elementType": "staticHtmlTag",
                                              "tag": "div",
                                              "text": "löschen",
                                              "class": "font-bold text-white text-[16px] px-4"
                                            }
                                          ]
                                        },
                                        {
                                          "description": "button weiter",
                                          "type": "container",
                                          "class": "py-4 w-36 bg-green-700 flex justify-center items-center mr-1",
                                          "children": [
                                            {
                                              "type": "element",
                                              "elementType": "staticHtmlTag",
                                              "tabID": "tab004a",
                                              "tabGroupID": "tabGroup001",
                                              "tag": "div",
                                              "text": "weiter",
                                              "class": "font-bold text-white text-[16px] px-4"
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
                              "description": "tab 4a",
                              "type": "container",
                              "tabID": "tab004a",
                              "tabGroupID": "tabGroup001",
                              "tabContent": true,
                              "class": "",
                              "children": [
                                {
                                  "description": "button",
                                  "type": "container",
                                  "class": "w-full px-24 w-full pt-4",
                                  "children": [
                                    {
                                      "description": "Fehlermerkmale",
                                      "type": "container",
                                      "class": "grid grid-cols-6 gap-8 w-full mt-8",
                                      "children": [
                                        {
                                          "description": "button Pickel / Einschlüsse",
                                          "type": "annotatorEvent",
                                          "eventType": "exchangeTool",
                                          "key": "images",
                                          "value": {
                                            "name": "dotCircle",
                                            "value": "dotCircleTool",
                                            "fillColor": "#0000ff01",
                                            "opacity": 1,
                                            "radius": 40,
                                            "strokeColor": "#55ff00",
                                            "strokeWidth": 4,
                                            "dashArrayStroke": 20,
                                            "dashArrayGap": 20,
                                            "content": "Pickel / Einschluss",
                                            "resize": false
                                          },
                                          "containerType": "div",
                                          "class": "py-2 w-52 bg-blue-400 flex flex-col justify-center items-center",
                                          "children": [
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "text-center h-2/3 leading-tight",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "Pickel",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "Einschlüsse B",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase"
                                                }
                                              ]
                                            },
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "flex text-center w-full",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "< 3mm",
                                                  "class": "font-bold text-gray-300 text-[32px] px-4"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "action:count",
                                                  "class": "font-bold text-white text-[32px] px-4",
                                                  "parameters": {
                                                    "location": "control",
                                                    "key": "content",
                                                    "value": "Pickel / Einschluss",
                                                    "calc": 1
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "description": "button Lacktropfen",
                                          "type": "annotatorEvent",
                                          "eventType": "exchangeTool",
                                          "key": "images",
                                          "value": {
                                            "name": "dotCircle",
                                            "value": "dotCircleTool",
                                            "fillColor": "#0000ff01",
                                            "opacity": 1,
                                            "radius": 40,
                                            "strokeColor": "#26d0fa",
                                            "strokeWidth": 4,
                                            "dashArrayStroke": 20,
                                            "dashArrayGap": 20,
                                            "content": "Lacktropfen",
                                            "resize": false
                                          },
                                          "containerType": "div",
                                          "class": "py-2 w-52 bg-blue-400 flex flex-col justify-center items-center",
                                          "children": [
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "text-center h-2/3 leading-tight",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "Lacktropfen",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase pt-6"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase"
                                                }
                                              ]
                                            },
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "flex text-center w-full",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "",
                                                  "class": "font-bold text-gray-300 text-[32px] px-4 w-8/12"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "action:count",
                                                  "class": "font-bold text-white text-[32px] px-4 w-4/12",
                                                  "parameters": {
                                                    "location": "control",
                                                    "key": "content",
                                                    "value": "Lacktropfen",
                                                    "calc": 1
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "description": "button Lackbeule",
                                          "type": "annotatorEvent",
                                          "eventType": "exchangeTool",
                                          "key": "images",
                                          "value": {
                                            "name": "dotCircle",
                                            "value": "dotCircleTool",
                                            "fillColor": "#0000ff01",
                                            "opacity": 1,
                                            "radius": 40,
                                            "strokeColor": "#8400ff",
                                            "strokeWidth": 4,
                                            "dashArrayStroke": 20,
                                            "dashArrayGap": 20,
                                            "content": "Lackbeule",
                                            "resize": false
                                          },
                                          "containerType": "div",
                                          "class": "py-2 w-52 bg-blue-400 flex flex-col justify-center items-center",
                                          "children": [
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "text-center h-2/3 leading-tight",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "Lackbeule",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase pt-6"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase"
                                                }
                                              ]
                                            },
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "flex text-center w-full",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "",
                                                  "class": "font-bold text-gray-300 text-[32px] px-4 w-8/12"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "action:count",
                                                  "class": "font-bold text-white text-[32px] px-4 w-4/12",
                                                  "parameters": {
                                                    "location": "control",
                                                    "key": "content",
                                                    "value": "Lackbeule",
                                                    "calc": 1
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "description": "button Lackbläschen",
                                          "type": "annotatorEvent",
                                          "eventType": "exchangeTool",
                                          "key": "images",
                                          "value": {
                                            "name": "dotCircle",
                                            "value": "dotCircleTool",
                                            "fillColor": "#0000ff01",
                                            "opacity": 1,
                                            "radius": 40,
                                            "strokeColor": "#f7ff00",
                                            "strokeWidth": 4,
                                            "dashArrayStroke": 20,
                                            "dashArrayGap": 20,
                                            "content": "Lackbläschen",
                                            "resize": false
                                          },
                                          "containerType": "div",
                                          "class": "py-2 w-52 bg-blue-400 flex flex-col justify-center items-center",
                                          "children": [
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "text-center h-2/3 leading-tight",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "Lackbläschen",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase pt-6"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase"
                                                }
                                              ]
                                            },
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "flex text-center w-full",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "",
                                                  "class": "font-bold text-gray-300 text-[32px] px-4 w-8/12"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "action:count",
                                                  "class": "font-bold text-white text-[32px] px-4 w-4/12",
                                                  "parameters": {
                                                    "location": "control",
                                                    "key": "content",
                                                    "value": "Lackbläschen",
                                                    "calc": 1
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "description": "button Fettkante",
                                          "type": "annotatorEvent",
                                          "eventType": "exchangeTool",
                                          "key": "images",
                                          "value": {
                                            "name": "dotCircle",
                                            "value": "dotCircleTool",
                                            "fillColor": "#0000ff01",
                                            "opacity": 1,
                                            "radius": 40,
                                            "strokeColor": "#00b2ff",
                                            "strokeWidth": 4,
                                            "dashArrayStroke": 20,
                                            "dashArrayGap": 20,
                                            "content": "Fettkante",
                                            "resize": false
                                          },
                                          "containerType": "div",
                                          "class": "py-2 w-52 bg-blue-400 flex flex-col justify-center items-center",
                                          "children": [
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "text-center h-2/3 leading-tight",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "Fettkante",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase pt-6"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase"
                                                }
                                              ]
                                            },
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "flex text-center w-full",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "",
                                                  "class": "font-bold text-gray-300 text-[32px] px-4 w-8/12"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "action:count",
                                                  "class": "font-bold text-white text-[32px] px-4 w-4/12",
                                                  "parameters": {
                                                    "location": "control",
                                                    "key": "content",
                                                    "value": "Fettkante",
                                                    "calc": 1
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "description": "button Orangenhaut",
                                          "type": "annotatorEvent",
                                          "eventType": "exchangeTool",
                                          "key": "images",
                                          "value": {
                                            "name": "dotCircle",
                                            "value": "dotCircleTool",
                                            "fillColor": "#0000ff01",
                                            "opacity": 1,
                                            "radius": 40,
                                            "strokeColor": "#ff7300",
                                            "strokeWidth": 4,
                                            "dashArrayStroke": 20,
                                            "dashArrayGap": 20,
                                            "content": "Orangenhaut",
                                            "resize": false
                                          },
                                          "containerType": "div",
                                          "class": "py-2 w-52 bg-blue-400 flex flex-col justify-center items-center",
                                          "children": [
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "text-center h-2/3 leading-tight",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "Orangenhaut",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase pt-6"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase"
                                                }
                                              ]
                                            },
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "flex text-center w-full",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "",
                                                  "class": "font-bold text-gray-300 text-[32px] px-4 w-8/12"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "action:count",
                                                  "class": "font-bold text-white text-[32px] px-4 w-4/12",
                                                  "parameters": {
                                                    "location": "control",
                                                    "key": "content",
                                                    "value": "Orangenhaut",
                                                    "calc": 1
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "description": "button Magerlackierung",
                                          "type": "annotatorEvent",
                                          "eventType": "exchangeTool",
                                          "key": "images",
                                          "value": {
                                            "name": "dotCircle",
                                            "value": "dotCircleTool",
                                            "fillColor": "#0000ff01",
                                            "opacity": 1,
                                            "radius": 40,
                                            "strokeColor": "#f6cdcd",
                                            "strokeWidth": 4,
                                            "dashArrayStroke": 20,
                                            "dashArrayGap": 20,
                                            "content": "Magerlackierung",
                                            "resize": false
                                          },
                                          "containerType": "div",
                                          "class": "py-2 w-52 bg-blue-400 flex flex-col justify-center items-center",
                                          "children": [
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "text-center h-2/3 leading-tight",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "Magerlackierung",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase pt-6"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase"
                                                }
                                              ]
                                            },
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "flex text-center w-full",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "",
                                                  "class": "font-bold text-gray-300 text-[32px] px-4 w-8/12"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "action:count",
                                                  "class": "font-bold text-white text-[32px] px-4 w-4/12",
                                                  "parameters": {
                                                    "location": "control",
                                                    "key": "content",
                                                    "value": "Magerlackierung",
                                                    "calc": 1
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "description": "button Kratzer",
                                          "type": "annotatorEvent",
                                          "eventType": "exchangeTool",
                                          "key": "images",
                                          "value": {
                                            "name": "dotCircle",
                                            "value": "dotCircleTool",
                                            "fillColor": "#0000ff01",
                                            "opacity": 1,
                                            "radius": 40,
                                            "strokeColor": "#00fff7",
                                            "strokeWidth": 4,
                                            "dashArrayStroke": 20,
                                            "dashArrayGap": 20,
                                            "content": "Kratzer",
                                            "resize": false
                                          },
                                          "containerType": "div",
                                          "class": "py-2 w-52 bg-blue-400 flex flex-col justify-center items-center",
                                          "children": [
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "text-center h-2/3 leading-tight",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "Kratzer",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase pt-6"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase"
                                                }
                                              ]
                                            },
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "flex text-center w-full",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "< 3mm",
                                                  "class": "font-bold text-gray-300 text-[32px] px-4 w-8/12"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "action:count",
                                                  "class": "font-bold text-white text-[32px] px-4 w-4/12",
                                                  "parameters": {
                                                    "location": "control",
                                                    "key": "content",
                                                    "value": "Kratzer",
                                                    "calc": 1
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "description": "button Krater",
                                          "type": "annotatorEvent",
                                          "eventType": "exchangeTool",
                                          "key": "images",
                                          "value": {
                                            "name": "dotCircle",
                                            "value": "dotCircleTool",
                                            "fillColor": "#0000ff01",
                                            "opacity": 1,
                                            "radius": 40,
                                            "strokeColor": "#0095ff",
                                            "strokeWidth": 4,
                                            "dashArrayStroke": 20,
                                            "dashArrayGap": 20,
                                            "content": "Krater",
                                            "resize": false
                                          },
                                          "containerType": "div",
                                          "class": "py-2 w-52 bg-blue-400 flex flex-col justify-center items-center",
                                          "children": [
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "text-center h-2/3 leading-tight",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "Krater",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase pt-6"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase"
                                                }
                                              ]
                                            },
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "flex text-center w-full",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "< 4mm",
                                                  "class": "font-bold text-gray-300 text-[32px] px-4 w-8/12"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "action:count",
                                                  "class": "font-bold text-white text-[32px] px-4 w-4/12",
                                                  "parameters": {
                                                    "location": "control",
                                                    "key": "content",
                                                    "value": "Krater",
                                                    "calc": 1
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "description": "button KTL-Fehler",
                                          "type": "annotatorEvent",
                                          "eventType": "exchangeTool",
                                          "key": "images",
                                          "value": {
                                            "name": "dotCircle",
                                            "value": "dotCircleTool",
                                            "fillColor": "#0000ff01",
                                            "opacity": 1,
                                            "radius": 40,
                                            "strokeColor": "#ff0000",
                                            "strokeWidth": 4,
                                            "dashArrayStroke": 20,
                                            "dashArrayGap": 20,
                                            "content": "KTL-Fehler",
                                            "resize": false
                                          },
                                          "containerType": "div",
                                          "class": "py-2 w-52 bg-blue-400 flex flex-col justify-center items-center",
                                          "children": [
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "text-center h-2/3 leading-tight",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "KTL-Fehler",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase pt-6"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase"
                                                }
                                              ]
                                            },
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "flex text-center w-full",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "",
                                                  "class": "font-bold text-gray-300 text-[32px] px-4 w-8/12"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "action:count",
                                                  "class": "font-bold text-white text-[32px] px-4 w-4/12",
                                                  "parameters": {
                                                    "location": "control",
                                                    "key": "content",
                                                    "value": "KTL-Fehler",
                                                    "calc": 1
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "description": "button Rohwarefehler",
                                          "type": "annotatorEvent",
                                          "eventType": "exchangeTool",
                                          "key": "images",
                                          "value": {
                                            "name": "dotCircle",
                                            "value": "dotCircleTool",
                                            "fillColor": "#0000ff01",
                                            "opacity": 1,
                                            "radius": 40,
                                            "strokeColor": "#ff0000",
                                            "strokeWidth": 4,
                                            "dashArrayStroke": 20,
                                            "dashArrayGap": 20,
                                            "content": "Rohwarefehler",
                                            "resize": false
                                          },
                                          "containerType": "div",
                                          "class": "py-2 w-52 bg-blue-400 flex flex-col justify-center items-center",
                                          "children": [
                                            {
                                              "description": "Rohwarefehler",
                                              "type": "container",
                                              "class": "text-center h-2/3 leading-tight",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "Rohwarefehler",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase pt-6"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase"
                                                }
                                              ]
                                            },
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "flex text-center w-full",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "",
                                                  "class": "font-bold text-gray-300 text-[32px] px-4 w-8/12"
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "action:count",
                                                  "class": "font-bold text-white text-[32px] px-4 w-4/12",
                                                  "parameters": {
                                                    "location": "control",
                                                    "key": "content",
                                                    "value": "Rohwarefehler",
                                                    "calc": 1
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "description": "button container",
                                          "type": "container",
                                          "class": "py-4 w-52 bg-orange-400 flex flex-col justify-center items-center",
                                          "children": [
                                            {
                                              "description": "button Bauteilprüfung falsch",
                                              "type": "container",
                                              "class": "font-bold text-white text-[24px] px-4 flex flex-col justify-center items-center",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "Fehler gesamt "
                                                },
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "action:count",
                                                  "parameters": {
                                                    "location": "control",
                                                    "key": "content"
                                                  },
                                                  "class": "font-bold text-white text-[24px] px-4"
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      "description": "button",
                                      "type": "container",
                                      "class": "w-full flex px-1 pt-4",
                                      "children": [
                                        {
                                          "description": "canvasPane",
                                          "type": "container",
                                          "tag": "div",
                                          "class": "w-10/12 border border-white mt-8 bg-black/70",
                                          "children": [
                                            {
                                              "type": "element",
                                              "elementType": "annotatorCanvas",
                                              "autoSave": false,
                                              "key": "images",
                                              "mode": "touch",
                                              "touchTool": "locatorTool",
                                              "defaultView": {
                                                "name": "top view",
                                                "value": "topView",
                                                "bgImage1": "volatile:articleNumberStore.images.preview[0].imageResponse.cdnUrl",
                                                "bgImage1UrlParameter": "",
                                                "bgImage2": "",
                                                "bgImage2UrlParameter": ""
                                              },
                                              "class": "w-full h-[500px]"
                                            }
                                          ]
                                        },
                                        {
                                          "description": "button",
                                          "type": "container",
                                          "class": "w-2/12 flex flex-col justify-center",
                                          "children": [
                                            {
                                              "description": "button container",
                                              "type": "container",
                                              "class": "h-32 flex w-full mt-4 pl-8",
                                              "children": [
                                                {
                                                  "description": "button Fehlermerkmal einloggen",
                                                  "type": "annotatorEvent",
                                                  "eventType": "storeMeasures",
                                                  "key": "images",
                                                  "centerDot": true,
                                                  "storeLocation": "control",
                                                  "clearCanvas": true,
                                                  "class": "h-32 w-96 bg-green-400 flex justify-center items-center",
                                                  "children": [
                                                    {
                                                      "type": "element",
                                                      "elementType": "staticHtmlTag",
                                                      "tag": "div",
                                                      "text": "Fehlermerkmal einloggen",
                                                      "class": "font-bold text-white text-[24px] px-4"
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
                                      "description": "button container",
                                      "type": "container",
                                      "class": "flex justify-between w-10/12 pt-4",
                                      "children": [
                                        {
                                          "description": "button löschen",
                                          "type": "container",
                                          "class": "py-4 w-36 bg-red-500 flex justify-center items-center ml-1",
                                          "children": [
                                            {
                                              "type": "element",
                                              "elementType": "staticHtmlTag",
                                              "tag": "div",
                                              "text": "löschen",
                                              "class": "font-bold text-white text-[16px] px-4"
                                            }
                                          ]
                                        },
                                        {
                                          "description": "button weiter",
                                          "type": "container",
                                          "class": "py-4 w-36 bg-green-700 flex justify-center items-center mr-1",
                                          "children": [
                                            {
                                              "type": "element",
                                              "elementType": "staticHtmlTag",
                                              "tabID": "tab005",
                                              "tabGroupID": "tabGroup001",
                                              "tag": "div",
                                              "text": "weiter",
                                              "class": "font-bold text-white text-[16px] px-4"
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
                              "description": "tab 5",
                              "type": "container",
                              "tabID": "tab005",
                              "tabGroupID": "tabGroup001",
                              "tabContent": true,
                              "class": "",
                              "children": [
                                {
                                  "description": "button",
                                  "type": "container",
                                  "class": "w-full px-24 w-full pt-4",
                                  "children": [
                                    {
                                      "description": "button",
                                      "type": "container",
                                      "class": "w-full flex px-1 pt-4",
                                      "children": [
                                        {
                                          "description": "canvasPane",
                                          "type": "container",
                                          "tag": "div",
                                          "class": "relative w-8/12 border border-white mt-8 bg-gray-500",
                                          "children": [
                                            {
                                              "type": "element",
                                              "elementType": "annotatorCanvas",
                                              "mode": "heatMap",
                                              "heatmapData": "control",
                                              "autoSave": false,
                                              "key": "images",
                                              "defaultView": {
                                                "name": "top view",
                                                "value": "topView",
                                                "bgImage1": "volatile:articleNumberStore.images.preview[0].imageResponse.cdnUrl",
                                                "bgImage1UrlParameter": "",
                                                "bgImage2": "",
                                                "bgImage2UrlParameter": ""
                                              },
                                              "class": "absolute w-full h-[500px]"
                                            },
                                            {
                                              "description": "Fehlermerkmal",
                                              "type": "container",
                                              "class": "absolute left-2 top-2 text-center h-16 bg-green-400 leading-tight",
                                              "children": [
                                                {
                                                  "type": "element",
                                                  "elementType": "staticHtmlTag",
                                                  "tag": "div",
                                                  "text": "Pickel",
                                                  "class": "font-bold text-white text-[20px] px-4 uppercase"
                                                },
                                                {
                                                  "description": "product",
                                                  "type": "container",
                                                  "class": "w-full",
                                                  "children": [

                                                    {
                                                      "type": "element",
                                                      "elementType": "textInput",
                                                      "key": "product",
                                                      "class": "mt-0 block w-full border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-13"
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
                                          "class": "flex flex-col w-4/12 h-[600px] mt-8",
                                          "children": [
                                            {
                                              "description": "ag grid",
                                              "type": "element",
                                              "elementType": "agGrid",
                                              "subDocuments": "control",
                                              "rowGroupPanelShow": "always",
                                              "masterDetail": true,
                                              "class": "ag-theme-balham h-[600px] w-full pt-0",
                                              "columnDefs": [
                                                {
                                                  "field": "measureStart",
                                                  "enableRowGroup": true,
                                                  "enablePivot": true,
                                                  "cellRenderer": "agGroupCellRenderer"
                                                  // "width": 320
                                                }
                                              ],
                                              "defaultColDef": {
                                                "flex": 0,
                                              },
                                              "detailCellRendererParams": {
                                                "suppressDisplayOfHeader": false,
                                                "detailGridOptions": {
                                                  "columnDefs": [
                                                    { "field": 'content' },
                                                    { "field": 'locked' },
                                                    { "field": 'fillColor' }
                                                  ],
                                                  "defaultColDef": {
                                                    "flex": 0,
                                                  },
                                                },
                                                "detailKey": "measures",
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
                                                      "class": "material-symbols-outlined text-xl text-primary hover:text-amber-400 cursor-pointer",
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
                                        }
                                      ]
                                    },
                                    {
                                      "description": "button container",
                                      "type": "container",
                                      "class": "flex justify-between w-8/12",
                                      "children": [
                                        {
                                          "description": "button löschen",
                                          "type": "container",
                                          "class": "py-4 w-36 bg-red-500 flex justify-center items-center ml-1",
                                          "children": [
                                            {
                                              "type": "element",
                                              "elementType": "staticHtmlTag",
                                              "tag": "div",
                                              "text": "löschen",
                                              "class": "font-bold text-white text-[16px] px-4"
                                            }
                                          ]
                                        },
                                        {
                                          "description": "button löschen",
                                          "type": "container",
                                          "class": "py-4 w-36 bg-green-700 flex justify-center items-center mr-1",
                                          "children": [
                                            {
                                              "type": "element",
                                              "elementType": "staticHtmlTag",
                                              "tag": "div",
                                              "text": "weiter",
                                              "class": "font-bold text-white text-[16px] px-4"
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
  )

  return { jsonLocal: jsonStructure.value }
}
