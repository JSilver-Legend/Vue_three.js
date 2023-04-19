import { ref } from "vue"

export function useJsonLocal() {
  const jsonStructure = ref({
    "type": "appTemplate",
    "folderNavigationLink": "abCompany",
    "showHideSidebar": true,
    "showHideTopbar": true,
    "URL": "abCompany",
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
        "description": "abCompany ag-grid",
        "appNavigationLink": "abCompany",
        "subURL": "table",
        "category": "table",
        "globalCollection": "abCompany",
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
                                        "convert": "dd.mm.yy hh:mm",
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
                                "text": "Companies",
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
                                "text": "demo dataset",
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
                "collection": "abCompany",
                "key": false,
                "saveOnRowClick": false,
                "rowGroupPanelShow": "always",
                "masterDetail": true,
                "query": [
                  {},
                  {
                    "_id": 1,
                    "generalCompany": 1,
                    "generalCountry": 1,
                    "generalZip": 1,
                    "generalTown": 1,
                    "contacts": 1
                  }
                ],
                "columnDefs": [
                  {
                    "field": "generalCompany",
                    "headerName": "generalCompany",
                    "cellRenderer": "agGroupCellRenderer",
                    "checkboxSelection": false,
                    "enableRowGroup": true,
                    "enablePivot": true,
                    "width": 350
                  },
                  {
                    "field": "generalZip",
                    "headerName": "generalZip",
                    "enableRowGroup": true,
                    "enablePivot": true,
                    "width": 120
                  },
                  {
                    "field": "generalTown",
                    "headerName": "generalTown",
                    "enableRowGroup": true,
                    "enablePivot": true
                  },
                  {
                    "field": "generalCountry",
                    "headerName": "generalCountry",
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
                "rowSelection": null,
                "isRowSelectable": null,
                "rowData": null,
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
                "detailCellRendererParams": {
                  "detailGridOptions": {
                    "rowSelection": "multiple",
                    "suppressRowClickSelection": true,
                    "enableRangeSelection": true,
                    "columnDefs": [
                      {
                        "field": "givenname",
                        "checkboxSelection": false
                      },
                      { "field": "lastname" },
                      { "field": "email" },
                      { "field": "mobile" },
                      { "field": "mobileCountry" }
                    ],
                    "defaultColDef": {
                      "flex": 1
                    }
                  },
                  "detailKey": "contacts"
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
                "class": "ag-theme-balham h-screen w-full pt-0",
                "cellRenderer": [
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
          },
          {
            "description": "table edit",
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
                                "description": "tab 1 Exhibitor",
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
                              }
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
