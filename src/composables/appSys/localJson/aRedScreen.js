import { ref } from "vue"

export function useJsonLocal() {
  const jsonStructure = ref(
    {
      "_id": {
        "$oid": "62a4ddb81dd8e9b8d7de1e93"
      },
      "type": "appTemplate",
      "appLink": "aRedScreen",
      "functions": [],
      "expressions": [],
      "appMarkup": [
        {
          "appID": "aRedScreen",
          "appLink": "home",
          "markup": [
            {
              "description": "cards project  tab 1",
              "type": "container",
              "tabID": "tab001",
              "tabGroupID": "tabGroup001",
              "tabContent": true,
              "class": "sm:px-6 bg-red w-full",
              "children": [
                {
                  "type": "element",
                  "elementType": "staticHtmlTag",
                  "tag": "div",
                  "text": "1 Projektdaten - here",
                  "class": "text-lg font-bold pt-8 pl-3 sm:pl-0"
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
                      "class": "w-full md:w-3/4 mt-6",
                      "children": [
                        {
                          "description": "card 1 off header",
                          "type": "container",
                          "class": " flex-inline pl-3",
                          "children": [
                            {
                              "description": "card1 above card headline",
                              "type": "container",
                              "class": "text-gray-400 leading-none",
                              "children": [
                                {
                                  "description": "FU headline",
                                  "type": "element",
                                  "elementType": "staticHtmlTag",
                                  "tag": "label",
                                  "text": "protocol card",
                                  "class": ""
                                },
                                {
                                  "type": "element",
                                  "elementType": "staticHtmlTag",
                                  "tag": "span",
                                  "text": "1 tab 2",
                                  "class": "text-gray-500 font-bold"
                                }
                              ]
                            },
                            {
                              "description": "card1 headline subtext",
                              "type": "container",
                              "class": "",
                              "children": [
                                {
                                  "description": "FU headline",
                                  "type": "element",
                                  "elementType": "staticHtmlTag",
                                  "tag": "label",
                                  "text": "Individual from contorls automatically recieve some globle styling",
                                  "class": "text-xs"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "type": "element",
                          "elementType": "staticHtmlTag",
                          "tag": "div",
                          "text": "buttonGroup demo",
                          "class": "text-lg font-bold pt-8 pl-3"
                        },
                        {
                          "description": "buttonGroup demo",
                          "type": "container",
                          "containerType": "div",
                          "class": "pl-3",
                          "children": [
                            {
                              "type": "element",
                              "elementType": "buttonGroup",
                              "buttonGroupId": "buttonGroup2",
                              "key": "communicationType",
                              "values": [
                                {
                                  "name": "Email address",
                                  "value": "email"
                                },
                                {
                                  "name": "SMS message",
                                  "value": "sms"
                                },
                                {
                                  "name": "slack messanger",
                                  "value": "slack"
                                }
                              ],
                              "class": "flex justify-start space-x-8 w-full pt-8",
                              "children": [
                                {
                                  "description": "button 1",
                                  "type": "container",
                                  "containerType": "div",
                                  "class": "relative block bg-white cursor-pointer sm:flex sm:justify-between focus:outline-none",
                                  "children": [
                                    {
                                      "description": "container",
                                      "type": "container",
                                      "containerType": "div",
                                      "class": "flex items-center space-x-16 border rounded-lg shadow-sm px-6 py-4 text-bold h-full w-full ",
                                      "checkedClass": "border-1 border-gray-300 flex items-center space-x-16 text-bold h-full w-full bg-gray-500",
                                      "children": [
                                        {
                                          "description": "container",
                                          "type": "container",
                                          "containerType": "div",
                                          "class": "text-sm flex flex-col h-full ",
                                          "children": [
                                            {
                                              "description": "element",
                                              "type": "element",
                                              "elementType": "staticHtmlTag",
                                              "tag": "div",
                                              "text": "label name 1",
                                              "class": "font-medium text-[#000000]",
                                              "checkedClass":"font-medium text-black"
                                            },
                                            {
                                              "description": "element",
                                              "type": "element",
                                              "elementType": "staticHtmlTag",
                                              "tag": "div",
                                              "text": "10 / 1CPU",
                                              "class": "font-medium pt-4",
                                              "checkedClass":"font-medium text-white"
                                            }


                                          ]
                                        },
                                        {
                                          "description": "container",
                                          "type": "container",
                                          "containerType": "div",
                                          "class": "text-sm h-full",
                                          "children": [
                                            {
                                              "description": "element",
                                              "type": "element",
                                              "elementType": "staticHtmlTag",
                                              "tag": "div",
                                              "text": "8/mo",
                                              "class": "font-medium text-gray-500 h-full"
                                            }


                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "description": "button 2",
                                  "type": "container",
                                  "containerType": "div",
                                  "class": "relative block bg-white cursor-pointer sm:flex sm:justify-between focus:outline-none",
                                  "children": [
                                    {
                                      "description": "container",
                                      "type": "container",
                                      "containerType": "div",
                                      "class": "flex items-center space-x-16 border rounded-lg shadow-sm px-6 py-4 text-bold h-full w-full ",
                                      "checkedClass": "border-1 border-gray-300 flex items-center space-x-16 text-bold h-full w-full bg-gray-300 text-white ",
                                      "children": [
                                        {
                                          "description": "container",
                                          "type": "container",
                                          "containerType": "div",
                                          "class": "text-sm flex flex-col h-full ",
                                          "children": [
                                            {
                                              "description": "element",
                                              "type": "element",
                                              "elementType": "staticHtmlTag",
                                              "tag": "div",
                                              "text": "label name 2",
                                              "class": "font-medium text-gray-900"
                                            },
                                            {
                                              "description": "element",
                                              "type": "element",
                                              "elementType": "staticHtmlTag",
                                              "tag": "div",
                                              "text": "10 / 1CPU",
                                              "class": "font-medium text-gray-500 pt-4"
                                            }


                                          ]
                                        },
                                        {
                                          "description": "container",
                                          "type": "container",
                                          "containerType": "div",
                                          "class": "text-sm h-full",
                                          "children": [
                                            {
                                              "description": "element",
                                              "type": "element",
                                              "elementType": "staticHtmlTag",
                                              "tag": "div",
                                              "text": "8/mo",
                                              "class": "font-medium text-gray-500 h-full"
                                            }


                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "description": "button 3",
                                  "type": "container",
                                  "containerType": "div",
                                  "class": "relative block bg-white cursor-pointer sm:flex sm:justify-between focus:outline-none",
                                  "children": [
                                    {
                                      "description": "container",
                                      "type": "container",
                                      "containerType": "div",
                                      "class": "flex items-center space-x-16 border rounded-lg shadow-sm px-6 py-4 text-bold h-full w-full ",
                                      "checkedClass": "border-1 border-gray-300 flex items-center space-x-16 text-bold h-full w-full bg-gray-300 text-white ",
                                      "children": [
                                        {
                                          "description": "container",
                                          "type": "container",
                                          "containerType": "div",
                                          "class": "text-sm flex flex-col h-full ",
                                          "children": [
                                            {
                                              "description": "element",
                                              "type": "element",
                                              "elementType": "staticHtmlTag",
                                              "tag": "div",
                                              "text": "label name 3",
                                              "class": "font-medium text-gray-900"
                                            },
                                            {
                                              "description": "element",
                                              "type": "element",
                                              "elementType": "staticHtmlTag",
                                              "tag": "div",
                                              "text": "10 / 1CPU",
                                              "class": "font-medium text-gray-500 pt-4"
                                            }


                                          ]
                                        },
                                        {
                                          "description": "container",
                                          "type": "container",
                                          "containerType": "div",
                                          "class": "text-sm h-full",
                                          "children": [
                                            {
                                              "description": "element",
                                              "type": "element",
                                              "elementType": "staticHtmlTag",
                                              "tag": "div",
                                              "text": "8/mo",
                                              "class": "font-medium text-gray-500 h-full"
                                            }


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
                          "type": "element",
                          "elementType": "staticHtmlTag",
                          "tag": "div",
                          "text": "volatile container payload demo",
                          "class": "text-lg font-bold pt-16 pl-3"
                        },
                        {
                          "description": "volatile container payload demo",
                          "type": "container",
                          "containerType": "div",
                          "class": "flex space-x-8 pt-8 pl-3",
                          "children": [
                            {
                              "description": "volatile inputs",
                              "type": "container",
                              "containerType": "div",
                              "class": "flex flex-col justify-start w-1/2",
                              "children": [
                                {
                                  "description": "prime vue select input",
                                  "type": "container",
                                  "containerType": "div",
                                  "class": "p-input-filled p-inputtext-sm w-full",
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
                                      "key": "payloadkey1",
                                      "volatileObject": "payloadEmail",
                                      "class": "pl-0 pr-2 w-full ",
                                      "parameters": {
                                        "optionLabel": "name",
                                        "options": [
                                          {
                                            "value": "VA",
                                            "name": "VA - Versuchsauftrag"
                                          },
                                          {
                                            "value": "FM",
                                            "name": "FM - Farbmuster"
                                          },
                                          {
                                            "value": "BE",
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
                                  "class": "pt-8 p-input-filled p-inputtext-sm w-8/12 flex",
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
                                          "key": "payloadkey2",
                                          "volatileObject": "payloadEmail",
                                          "tag": "span",
                                          "class": "w-full",
                                          "parameters": {
                                            "placeholder": "Projektfokus",
                                            "disabled": false,
                                            "size": "sm"
                                          }
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "description": "show payload button",
                                  "type": "container",
                                  "class": "w-full flex justify-between items-center rounded-b-xl pt-16 pb-16",
                                  "children": [

                                    {
                                      "type": "element",
                                      "elementType": "cddpEvent",
                                      "eventType": "function",
                                      "functionId": "volatileWrite",
                                      "tag": "div",
                                      "text": "show payload button",
                                      "class": "uppercase tracking-widest text-13 font-bold text-white bg-[#EC5424] hover:bg-primary rounded-3xl px-8 py-3",
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "description": "volatile output payload",
                              "type": "container",
                              "containerType": "div",
                              "class": "w-full h-full bg-gray-200 min-h-[250px]",
                              "children": [
                                {
                                  "type": "element",
                                  "elementType": "staticHtmlTag",
                                  "tag": "div",
                                  "text": "show payload and call function 'payload'",
                                  "class": "text pl-3 sm:pl-0 h-full"
                                },
                                {
                                  "type": "element",
                                  "elementType": "staticHtmlTag",
                                  "tag": "div",
                                  "text": "volatile:payloadEmail.payloadkey1.value",
                                  "class": "text-13 pt-4 pl-3 sm:pl-0 h-full"
                                },
                                {
                                  "type": "element",
                                  "elementType": "staticHtmlTag",
                                  "tag": "div",
                                  "text": "volatile:payloadEmail.payloadkey2",
                                  "class": "text-13 pt-4 pl-3 sm:pl-0 h-full"
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
            }

          ]
        }
      ],
      "tables": []
    }
  )
  return { jsonLocal: jsonStructure.value }
}
