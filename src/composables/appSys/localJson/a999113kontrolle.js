import { ref } from "vue"

export function useJsonLocal() {
  const jsonStructure = ref({
    "_id": {
      "$oid": "6353008707591a12e3f5e105"
    },
    "type": "appTemplate",
    "folderNavigationLink": "a999112anlageNasslack",
    "showHideSidebar": true,
    "showHideTopbar": true,
    "URL": "a999113kontrolle",
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
        "description": "a999113kontrolle ag-grid",
        "appNavigationLink": "a999113kontrolle",
        "subURL": "table",
        "category": "table",
        "globalCollection": "a999113kontrolle",
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
            "description": "a999113kontrolle ag-grid dialog full screen",
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
                                                    "text": "Nassanlage",
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
                                                    "assignedKey": "Startzeit",
                                                    "class": "text text-black dark:text-white font-bold"
                                                  },
                                                  {
                                                    "description": "element project number",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "text": "",
                                                    "assignedKey": "Startzeit",
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
                                                        "text": "Anzahl Warenträger: ",
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
                                                        "assignedKey": "Gesamtanzahl_WT",
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
            "description": "header",
            "type": "container",
            "class": "flex flex-col items-center justify-between bg-contentHead w-full",
            "children": [
              {
                "description": "header container",
                "type": "container",
                "class": "flex justify-between w-full bg-gradient-to-b from-[#fefeff] to-[#e9eef2] py-3 px-12 w-full",
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
                                "tag": "label",
                                "text": "Kontrolle",
                                "class": "text-4xl uppercase font-bold text-primary py-2 w-auto"
                              }
                            ]
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
                                "text": "02/2023",
                                "class": "text-xl font-bold"
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
                                          },
                                          {
                                            "description": "menu item 1",
                                            "type": "cddpEvent",
                                            "eventType": "create",
                                            "toggleDialog": true,
                                            "dialogKey": "importDataDialog01",
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
                                                "text": "import data",
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
                "collection": "a999113kontrolle",
                "query": [
                  {},
                  {
                    "_id": 1,
                    "Status": 1,
                    "Plandatum": 1,
                    "Produktionsdatum": 1,
                    "Artikelbezeichnung": 1,
                    "Kontrollpersonal": 1,
                    "Kontrolldatum": 1,
                    "Gesamtstückzahl": 1,
                    "Pickel Glanz": 1,
                    "Schwund - Glanz": 1,
                    "documentLock": 1
                  }
                ],
                "sourceDateFormats": ["DD.MM.YY hh:mm", "YYYY-MM-DD"],
                "rowGroupPanelShow": "always",
                "columnDefs": [
                  {
                    "field": "Plandatum",
                    "headerName": "Plandatum",
                    "enableRowGroup": true,
                    "enablePivot": true
                  },
                  {
                    "field": "Produktionsdatum",
                    "headerName": "Produktionsdatum",
                    "enableRowGroup": true,
                    "enablePivot": true
                  },
                  {
                    "field": "Artikelbezeichnung",
                    "headerName": "Artikelbezeichnung",
                    "enableRowGroup": true,
                    "enablePivot": true,
                    "width": 400
                  },
                  {
                    "field": "Kontrollpersonal",
                    "headerName": "Kontrollpersonal",
                    "enableRowGroup": true,
                    "enablePivot": true
                  },
                  {
                    "field": "Gesamtstückzahl",
                    "headerName": "Gesamtstückzahl",
                    "enableRowGroup": true,
                    "enablePivot": true
                  },
                  {
                    "field": "Pickel Glanz",
                    "headerName": "Pickel Glanz",
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
                "children": [
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
      }
    ]
  })

  return { jsonLocal: jsonStructure.value }
}
