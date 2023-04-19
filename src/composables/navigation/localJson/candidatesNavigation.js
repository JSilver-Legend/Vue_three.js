import { ref } from 'vue'

export function useJsonLocal() {

    const jsonStructure = ref(
        {
            "_id": { "$oid": "617d34178c33c4631fbd30bf" },
            "description": "platform localJson",
            "navigationType": "platformNavigation",
            "navigationPaths": [
                {
                    "navigationPathID": "rootLevel",
                    "path": [
                        {
                            "text": "DASHBOARD",
                            "permission": "PsampleProjectF",
                            "custom": { "icon": "coronavirus" },
                            "cellSetID": "",
                            "beforeHtmlSnippet": "",
                            "afterHtmlSnippet": "",
                            "appPathAssignementID": "a643552"
                        },
                        {
                            "text": "PROFIL",
                            "permission": "PcareerF",
                            "custom": { "icon": "group" },
                            "cellSetID": "",
                            "beforeHtmlSnippet": "",
                            "afterHtmlSnippet": "",
                            "children": []
                        },
                        {
                            "text": "EINSTELLUNGEN",
                            "permission": "PcareerF",
                            "custom": { "icon": "group" },
                            "cellSetID": "",
                            "beforeHtmlSnippet": "",
                            "afterHtmlSnippet": "",
                            "children": []
                        }


                    ]
                }
            ],
            "navigationAssignment": [
                {
                    "deviceID": "desktop",
                    "navigationViews": [
                        {
                            "navigationViewID": "rootNavigation",
                            "class": "relative w-full md:w-56 h-screen sm:min-h-full bg-[#f1f4f8] fixed",
                            "view": [
                                {
                                    "description": "htmlSnippet header-full",
                                    "type": "htmlSnippet",
                                    "snippetID": "header-full",
                                    "behaviour": "fixTop"
                                },
                                {
                                    "description": "navigationPath assignment",
                                    "type": "navigationPath",
                                    "navigationPathID": "rootLevel",
                                    "cellSetID": "rootViewCells"
                                }
                            ]
                        }
                    ]
                },
                {
                    "deviceID": "mobile",
                    "navigationViews": [
                        {
                            "navigationViewID": "rootNavigation-mobile",
                            "class": "w-full md:w-56 h-screen sm:min-h-full bg-lightSidebar",
                            "view": [
                                {
                                    "description": "htmlSnippet header-full",
                                    "type": "htmlSnippet",
                                    "snippetID": "root-mobile",
                                    "behaviour": "fixTop"
                                },
                                {
                                    "description": "navigationPath root level",
                                    "type": "navigationPath",
                                    "navigationPathID": "rootLevel",
                                    "cellSetID": "rootViewCells"
                                }
                            ]
                        },
                        {
                            "navigationViewID": "profile-mobile",
                            "class": "w-full md:w-56 min-h-full bg-lightSidebar",
                            "view": [
                                {
                                    "description": "htmlSnippet header-full",
                                    "type": "htmlSnippet",
                                    "snippetID": "profile-mobile",
                                    "behaviour": "fixTop"
                                }
                            ]
                        }
                    ],
                    "colorThemes": []
                }
            ],
            "navigationCells": [
                {
                    "cellSetID": "rootViewCells",
                    "cells": [
                        {
                            "cellID": "mainLevel",
                            "tag": "button",
                            "class": "w-full h-16 sm:h-12 bg-[#f1f4f8] hover:bg-gray-500 text-gray-800 text-left hover:text-white transition-colors duration-50 pl-4",
                            "style": "",
                            "cell": [
                                {
                                    "description": "mainLevel cell container",
                                    "type": "container",
                                    "containerType": "div",
                                    "class": "flex justify-cenetr items-center",
                                    "children": [

                                        {
                                            "description": "mainLevel cell text",
                                            "type": "element",
                                            "tag": "span",
                                            "elementType": "staticHtmlTag",
                                            "text": "key:text",
                                            "class": "text-16 sm:text-12 pl-8"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "cellID": "backButton",
                            "tag": "button",
                            "class": "w-full cursor-pointer h-16 sm:h-12 bg-gray-100 py-0 md:py-2 pl-1 align-middle uppercase text-12 font-medium no-underline text-gray-800 hover:text-white border-b border-gray-800 flex items-center  hover:bg-gray-600 ",
                            "style": "",
                            "cell": [
                                {
                                    "description": "mainLevel backButton div",
                                    "type": "container",
                                    "containerType": "div",
                                    "class": "inline-flex items-center",
                                    "style": "",
                                    "children": [
                                        {
                                            "description": "mainLevel backButton icon",
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "tag": "span",
                                            "text": "arrow_back_ios_new",
                                            "class": "material-symbols-outlined mr-1 font-normal",
                                            "style": ""
                                        },
                                        {
                                            "description": "mainLevel backButton text",
                                            "type": "element",
                                            "tag": "span",
                                            "elementType": "staticHtmlTag",
                                            "text": "key:text",
                                            "class": "text-left",
                                            "style": ""
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "cellSetID": "custom_sampleTemplates-parent",
                    "cells": [
                        {
                            "cellID": "mainLevel",
                            "tag": "button",
                            "class": "w-full h-20 sm:h-12 bg-gray-100 hover:bg-gray-500 text-gray-800 text-left hover:text-white border-t border-b border-gray-800 transition-colors duration-50",
                            "style": "",
                            "cell": [
                                {
                                    "description": "mainLevel text div",
                                    "type": "container",
                                    "containerType": "div",
                                    "class": "flex items-center h-full",
                                    "style": "",
                                    "children": [
                                        {
                                            "description": "mainLevel cell icon",
                                            "type": "container",
                                            "containerType": "div",
                                            "tag": "div",
                                            "text": "",
                                            "class": "w-12 flex justify-center items-center h-full",
                                            "children": [
                                                {
                                                    "description": "mainLevel cell icon",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "div",
                                                    "text": "adjust",
                                                    "class": "material-symbols-outlined text-2xl sm:text-xl h-8 w-8 sm:h-6 sm:w-6 rounded bg-gray-500 text-white ml-1.5 sm:ml:0 pl-1 sm:pl-0.5 pt-1 sm:pt-0 leading-[24px]"
                                                }
                                            ]
                                        },
                                        {
                                            "description": "mainLevel cell text",
                                            "type": "element",
                                            "tag": "span",
                                            "elementType": "staticHtmlTag",
                                            "text": "key:text",
                                            "class": "text-16 sm:text-12 pl-2 sm:pl-0",
                                            "style": ""
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }

            ],
            "expressions": [
                {
                    "expressionID": "expressionSample",
                    "type": "stringchain",
                    "unit": "markup",
                    "expressionArray": [
                        {
                            "ex": "'Hello Mr.' + user:first_name"
                        }
                    ]
                },
                {
                    "expressionID": "first-last-name",
                    "type": "stringchain",
                    "unit": "markup",
                    "expressionArray": [
                        {
                            "ex": "firstname + ' ' + lastname"
                        }
                    ]
                }
            ],
            "htmlSnippets": [
                {
                    "snippetID": "header-full",
                    "snippet": [
                        {
                            "type": "container",
                            "containerType": "a",
                            "class": "",
                            "children": [
                                {
                                    "type": "element",
                                    "elementType": "navEvent",
                                    "eventType": "resetNav",
                                    "tag": "img",
                                    "src": "/static/img/logo_black.png",
                                    "class": "cursor-pointer mx-auto pt-4 w-28 pb-8"
                                }
                            ]
                        }
                    ]
                },
                {
                    "snippetID": "footer-full",
                    "snippet": [
                        {
                            "description": "object 4 html static footer fixed",
                            "type": "container",
                            "containerType": "a",
                            "class": "",
                            "children": [
                                {
                                    "type": "container",
                                    "containerType": "div",
                                    "class": "flex items-center mx-auto place-content-center w-10/12 mt-8 py-1 text-12 font-normal leading-5 text-highlightSidebar hover:text-white transition-colors duration-150 border border-highlightSidebar hover:border-white rounded-lg",
                                    "active": "bg-purple-600 hover:bg-highlightSidebar focus:outline-none focus:shadow-outline-purple",
                                    "children": [
                                        {
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "tag": "span",
                                            "text": "? Documentation",
                                            "class": ""
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "snippetID": "bottom-btn",
                    "snippet": [
                        {
                            "description": "object 4 html static footer fixed",
                            "type": "container",
                            "containerType": "div",
                            "class": "absolute flex justify-start bottom-3 border-t border-gray-400 left-0 w-full h-12",
                            "children": [
                                {
                                    "type": "container",
                                    "containerType": "div",
                                    "class": "flex justify-center items-center w-1/3 h-full",
                                    "children": [
                                        {
                                            "description": "mainLevel cell icon",
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "tag": "span",
                                            "text": "account_circle",
                                            "class": "material-symbols-outlined text-2xl sm:text-[24px] text-gray-400 hover:text-white cursor-pointer"
                                        }
                                    ]
                                },
                                {
                                    "type": "container",
                                    "containerType": "div",
                                    "class": "flex justify-center items-center w-1/3 h-full",
                                    "children": [
                                        {
                                            "description": "mainLevel cell icon",
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "tag": "span",
                                            "text": "chat_bubble",
                                            "class": "material-symbols-outlined text-2xl sm:text-[24px] text-gray-400 hover:text-white cursor-pointer"
                                        }
                                    ]
                                },
                                {
                                    "type": "container",
                                    "containerType": "div",
                                    "class": "flex justify-center items-center w-1/3 h-full",
                                    "children": [
                                        {
                                            "description": "mainLevel cell icon",
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "tag": "span",
                                            "text": "settings",
                                            "class": "material-symbols-outlined text-2xl sm:text-[24px] text-gray-400 hover:text-white cursor-pointer"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "snippetID": "base-data-snippet",
                    "snippet": [
                        {
                            "description": "object 1 MAIN NAVIGATION text",
                            "type": "container",
                            "containerType": "div",
                            "class": "hidden md:block pt-8 pl-4 pt-4 pb-1",
                            "children": [
                                {
                                    "type": "element",
                                    "elementType": "staticHtmlTag",
                                    "tag": "div",
                                    "text": "base data",
                                    "class": "text-gray-500 text-11"
                                }
                            ]
                        }
                    ]
                },
                {
                    "snippetID": "platform-management-snippet",
                    "snippet": [
                        {
                            "description": "object 1 MAIN NAVIGATION text",
                            "type": "container",
                            "containerType": "div",
                            "class": "hidden md:block pt-8 pl-4 pt-4 pb-1",
                            "children": [
                                {
                                    "type": "element",
                                    "elementType": "staticHtmlTag",
                                    "tag": "div",
                                    "text": "expression:expressionSample",
                                    "class": "text-gray-500 text-11"
                                }
                            ]
                        }
                    ]
                },
                {
                    "snippetID": "sample-templates-snippet",
                    "snippet": [
                        {
                            "description": "object 1 MAIN NAVIGATION text",
                            "type": "container",
                            "containerType": "div",
                            "class": "hidden md:block pt-8 pl-4 pt-4 pb-1",
                            "children": [
                                {
                                    "type": "element",
                                    "elementType": "staticHtmlTag",
                                    "tag": "div",
                                    "text": "sample pages",
                                    "class": "text-gray-500 text-11"
                                }
                            ]
                        }
                    ]
                },

                {
                    "snippetID": "root-mobile",
                    "snippet": [
                        {
                            "type": "container",
                            "class": "w-full",
                            "children": [
                                {
                                    "description": "IF -- div row label",
                                    "conditionArray": [
                                        {
                                            "cd": "INI, k, user:company, equal, s, dnamy"
                                        }
                                    ],
                                    "type": "container",
                                    "containerType": "a",
                                    "class": "",
                                    "children": [
                                        {
                                            "type": "element",
                                            "elementType": "navEvent",
                                            "eventType": "resetNav",
                                            "tag": "img",
                                            "src": "/static/img/logo.png",
                                            "class": "cursor-pointer mx-auto pt-4 w-28"
                                        }
                                    ]
                                },
                                {
                                    "description": "ELSE IF -- div row label",
                                    "conditionArray": [
                                        {
                                            "cd": "INI, k, user:company, equal, s, utomberlin"
                                        }
                                    ],
                                    "type": "container",
                                    "containerType": "a",
                                    "class": "bg-red-400 w-full h-full",
                                    "children": [
                                        {
                                            "type": "element",
                                            "elementType": "navEvent",
                                            "eventType": "resetNav",
                                            "tag": "img",
                                            "src": "/static/img/logo_utom_berlin_01.png",
                                            "class": "cursor-pointer mx-auto pt-4 w-8/12"
                                        }
                                    ]
                                },
                                {
                                    "description": "ELSE IF -- div row label",
                                    "conditionArray": [
                                        {
                                            "cd": "INI, k, user:company, equal, s, hillebrand-coating"
                                        }
                                    ],
                                    "type": "container",
                                    "containerType": "a",
                                    "class": "bg-red-400 w-full h-full",
                                    "children": [
                                        {
                                            "type": "element",
                                            "elementType": "navEvent",
                                            "eventType": "resetNav",
                                            "tag": "img",
                                            "src": "/static/img/logo_hc_01.png",
                                            "class": "cursor-pointer mx-auto pt-4 w-9/12"
                                        }
                                    ]
                                },
                                {
                                    "description": "ELSE IF -- div row label",
                                    "conditionArray": [
                                        {
                                            "cd": "INI, k, user:company, equal, s, heo-coating"
                                        }
                                    ],
                                    "type": "container",
                                    "containerType": "a",
                                    "class": "bg-red-400 w-full h-full",
                                    "children": [
                                        {
                                            "type": "element",
                                            "elementType": "navEvent",
                                            "eventType": "resetNav",
                                            "tag": "img",
                                            "src": "/static/img/logo_heo_01.png",
                                            "class": "cursor-pointer mx-auto pt-4 w-10/12"
                                        }
                                    ]
                                },
                                {
                                    "description": "ELSE IF -- div row label",
                                    "conditionArray": [
                                        {
                                            "cd": "INI, k, user:company, equal, s, hauptstadtliebe"
                                        }
                                    ],
                                    "type": "container",
                                    "containerType": "a",
                                    "class": "bg-red-400 w-full h-full",
                                    "children": [
                                        {
                                            "type": "element",
                                            "elementType": "navEvent",
                                            "eventType": "resetNav",
                                            "tag": "img",
                                            "src": "/static/img/logo_hauptstadtliebe_01.png",
                                            "class": "cursor-pointer mx-auto pt-4 w-8/12"
                                        }
                                    ]
                                },
                                {
                                    "description": "ELSE IF -- div row label",
                                    "conditionArray": [
                                        {
                                            "cd": "INI, k, user:company, equal, s, dxpberlin"
                                        }
                                    ],
                                    "type": "container",
                                    "containerType": "a",
                                    "class": "bg-red-400 w-full h-full",
                                    "children": [
                                        {
                                            "type": "element",
                                            "elementType": "navEvent",
                                            "eventType": "resetNav",
                                            "tag": "img",
                                            "src": "/static/img/logo_dxpberlin_01.png",
                                            "class": "cursor-pointer mx-auto pt-4 w-7/12"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "description": "object 1 2 static btn HOME/PROFILE",
                            "type": "container",
                            "class": "flex w-full h-16 pt-3",
                            "children": [
                                {
                                    "description": "btn1",
                                    "type": "element",
                                    "elementType": "navEvent",
                                    "eventType": "toggleView",
                                    "viewID": "rootNavigation-mobile",
                                    "tag": "button",
                                    "text": "home",
                                    "class": "focus:outline-none w-1/2 py-1 hover:bg-red-700 border-t border-b border-r border-gray-500 text-center cursor-pointer text-xs uppercase text-gray-100 ",
                                    "selected": "bg-gray-700"
                                },
                                {
                                    "description": "btn",
                                    "elementType": "navEvent",
                                    "eventType": "toggleView",
                                    "viewID": "profile-mobile",
                                    "tag": "button",
                                    "text": "Profile",
                                    "class": "focus:outline-none item w-1/2 py-1 bg-transparent hover:bg-red-700 border-t border-b border-gray-500 text-center cursor-pointer text-xs uppercase  w-1/2 text-gray-100 text-center py-2 ",
                                    "selected": "bg-gray-700"
                                }
                            ]
                        }
                    ]
                },
                {
                    "snippetID": "profile-mobile",
                    "snippet": [
                        {
                            "type": "container",
                            "class": "w-full h-screen",
                            "children": [
                                {
                                    "type": "container",
                                    "class": "w-full",
                                    "children": [
                                        {
                                            "description": "IF -- div row label",
                                            "conditionArray": [
                                                {
                                                    "cd": "INI, k, user:company, equal, s, dnamy"
                                                }
                                            ],
                                            "type": "container",
                                            "containerType": "a",
                                            "class": "",
                                            "children": [
                                                {
                                                    "type": "element",
                                                    "elementType": "navEvent",
                                                    "eventType": "resetNav",
                                                    "tag": "img",
                                                    "src": "/static/img/logo.png",
                                                    "class": "cursor-pointer mx-auto pt-4 w-28"
                                                }
                                            ]
                                        },
                                        {
                                            "description": "ELSE IF -- div row label",
                                            "conditionArray": [
                                                {
                                                    "cd": "INI, k, user:company, equal, s, utomberlin"
                                                }
                                            ],
                                            "type": "container",
                                            "containerType": "a",
                                            "class": "bg-red-400 w-full h-full",
                                            "children": [
                                                {
                                                    "type": "element",
                                                    "elementType": "navEvent",
                                                    "eventType": "resetNav",
                                                    "tag": "img",
                                                    "src": "/static/img/logo_utom_berlin_01.png",
                                                    "class": "cursor-pointer mx-auto pt-4 w-8/12"
                                                }
                                            ]
                                        },
                                        {
                                            "description": "ELSE IF -- div row label",
                                            "conditionArray": [
                                                {
                                                    "cd": "INI, k, user:company, equal, s, hillebrand-coating"
                                                }
                                            ],
                                            "type": "container",
                                            "containerType": "a",
                                            "class": "bg-red-400 w-full h-full",
                                            "children": [
                                                {
                                                    "type": "element",
                                                    "elementType": "navEvent",
                                                    "eventType": "resetNav",
                                                    "tag": "img",
                                                    "src": "/static/img/logo_hc_01.png",
                                                    "class": "cursor-pointer mx-auto pt-4 w-9/12"
                                                }
                                            ]
                                        },
                                        {
                                            "description": "ELSE IF -- div row label",
                                            "conditionArray": [
                                                {
                                                    "cd": "INI, k, user:company, equal, s, heo-coating"
                                                }
                                            ],
                                            "type": "container",
                                            "containerType": "a",
                                            "class": "bg-red-400 w-full h-full",
                                            "children": [
                                                {
                                                    "type": "element",
                                                    "elementType": "navEvent",
                                                    "eventType": "resetNav",
                                                    "tag": "img",
                                                    "src": "/static/img/logo_heo_01.png",
                                                    "class": "cursor-pointer mx-auto pt-4 w-10/12"
                                                }
                                            ]
                                        },
                                        {
                                            "description": "ELSE IF -- div row label",
                                            "conditionArray": [
                                                {
                                                    "cd": "INI, k, user:company, equal, s, hauptstadtliebe"
                                                }
                                            ],
                                            "type": "container",
                                            "containerType": "a",
                                            "class": "bg-red-400 w-full h-full",
                                            "children": [
                                                {
                                                    "type": "element",
                                                    "elementType": "navEvent",
                                                    "eventType": "resetNav",
                                                    "tag": "img",
                                                    "src": "/static/img/logo_hauptstadtliebe_01.png",
                                                    "class": "cursor-pointer mx-auto pt-4 w-8/12"
                                                }
                                            ]
                                        },
                                        {
                                            "description": "ELSE IF -- div row label",
                                            "conditionArray": [
                                                {
                                                    "cd": "INI, k, user:company, equal, s, dxpberlin"
                                                }
                                            ],
                                            "type": "container",
                                            "containerType": "a",
                                            "class": "bg-red-400 w-full h-full",
                                            "children": [
                                                {
                                                    "type": "element",
                                                    "elementType": "navEvent",
                                                    "eventType": "resetNav",
                                                    "tag": "img",
                                                    "src": "/static/img/logo_dxpberlin_01.png",
                                                    "class": "cursor-pointer mx-auto pt-4 w-7/12"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "description": "object 1 2 static btn HOME/PROFILE",
                                    "type": "container",
                                    "class": "flex w- full h-16 pt-3",
                                    "children": [
                                        {
                                            "description": "btn1",
                                            "type": "element",
                                            "elementType": "navEvent",
                                            "eventType": "toggleView",
                                            "viewID": "rootNavigation-mobile",
                                            "tag": "button",
                                            "text": "home",
                                            "class": "focus:outline-none w-1/2 py-1 hover:bg-red-700 border-t border-b border-r border-gray-500 text-center cursor-pointer text-xs uppercase text-gray-100 ",
                                            "selected": "bg-gray-700"
                                        },
                                        {
                                            "description": "btn",
                                            "elementType": "navEvent",
                                            "eventType": "toggleView",
                                            "viewID": "profile-mobile",
                                            "tag": "button",
                                            "text": "Profile",
                                            "class": "focus:outline-none item w-1/2 py-1 bg-transparent hover:bg-red-700 border-t border-b border-gray-500 text-center cursor-pointer text-xs uppercase  w-1/2 text-gray-100 text-center py-2 ",
                                            "selected": "bg-gray-700"
                                        }
                                    ]
                                },
                                {
                                    "type": "container",
                                    "class": "flex h-20",
                                    "children": [
                                        {
                                            "description": "profile image",
                                            "type": "container",
                                            "containerType": "div",
                                            "class": "flex justify-center items-center text-center",
                                            "children": [
                                                {
                                                    "type": "element",
                                                    "elementType": "navEvent",
                                                    "tag": "img",
                                                    "src": "/static/img/avatar_dom_01.jpg",
                                                    "class": "h-20 w-28"
                                                }
                                            ]
                                        },
                                        {
                                            "description": "object 2 logout btn",
                                            "type": "container",
                                            "containerType": "a",
                                            "class": "flex flex-col w-full font-bold text-13 text-center",
                                            "children": [
                                                {
                                                    "type": "container",
                                                    "containerType": "a",
                                                    "class": "flex w-full h-full justify-center items-center bg-amber-400 hover:bg-amber-500 cursor-pointer",
                                                    "children": [
                                                        {
                                                            "type": "element",
                                                            "elementType": "navEvent",
                                                            "eventType": "",
                                                            "tag": "div",
                                                            "text": "profile",
                                                            "class": ""
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "container",
                                                    "containerType": "a",
                                                    "class": "flex w-full h-full justify-center items-center bg-red-600 hover:bg-red-700 cursor-pointer",
                                                    "children": [
                                                        {
                                                            "type": "element",
                                                            "elementType": "navEvent",
                                                            "eventType": "logout",
                                                            "tag": "div",
                                                            "text": "logout",
                                                            "class": "text-white"
                                                        }
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
            "appNavigation": [
                {
                    "appPathAssignementID": "a643552",
                    "device": [
                        {
                            "deviceID": "desktop",
                            "appViews": [
                                {
                                    "description": "534325SampleProject parent folder",
                                    "type": "container",
                                    "containerType": "div",
                                    "class": "relative md:w-56 h-auto sm:min-h-screen bg-[#f1f4f8]",
                                    "view": [
                                        {
                                            "description": "htmlSnippet header-full",
                                            "type": "htmlSnippet",
                                            "snippetID": "header-full",
                                            "behaviour": "fixTop"
                                        },
                                        {
                                            "description": "back button",
                                            "behaviour": "fixTop",
                                            "type": "container",
                                            "tag": "a",
                                            "class": "w-full cursor-pointer h-16 sm:h-12 bg-[#f1f4f8] py-0 md:py-2 pl-1 align-middle uppercase text-12 font-medium no-underline text-gray-300 hover:text-white border-b border-gray-800 flex items-center  hover:bg-gray-600 ",
                                            "style": "",
                                            "children": [
                                                {
                                                    "description": "mainLevel backButton div",
                                                    "type": "element",
                                                    "elementType": "navEvent",
                                                    "eventType": "navigationBackButton",
                                                    "class": "inline-flex items-center w-full",
                                                    "style": "",
                                                    "children": [
                                                        {
                                                            "description": "mainLevel backButton icon",
                                                            "type": "element",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "span",
                                                            "text": "arrow_back_ios_new",
                                                            "class": "material-symbols-outlined mr-1 font-normal text-white",
                                                            "style": ""
                                                        },
                                                        {
                                                            "description": "mainLevel backButton text",
                                                            "type": "element",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "span",
                                                            "text": "back",
                                                            "class": "text-left",
                                                            "style": ""
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "description": "643552Candidates tables",
                                            "appViewLevel": "parent",
                                            "permission": "",
                                            "url": "643552Candidates/tables/tablegroupCandidate",
                                            "folderCell": [
                                                {
                                                    "description": "tableGroup parent cell",
                                                    "type": "container",
                                                    "tag": "div",
                                                    "class": "w-full h-20 sm:h-12 bg-darkSidebar hover:bg-gray-500 text-gray-400 text-left hover:text-white border-b border-gray-800 transition-colors duration-50 pl-4 pt-2",
                                                    "style": "",
                                                    "children": [
                                                        {
                                                            "description": "mainLevel cell container",
                                                            "type": "container",
                                                            "containerType": "div",
                                                            "class": "flex justify-start items-center",
                                                            "children": [
                                                                {
                                                                    "description": "mainLevel cell icon",
                                                                    "type": "element",
                                                                    "elementType": "staticHtmlTag",
                                                                    "tag": "span",
                                                                    "text": "density_small",
                                                                    "class": "material-symbols-outlined text-2xl sm:text-lg text-white"
                                                                },
                                                                {
                                                                    "description": "mainLevel cell text",
                                                                    "type": "element",
                                                                    "tag": "span",
                                                                    "elementType": "staticHtmlTag",
                                                                    "text": "tables",
                                                                    "class": "text-16 sm:text-12 pl-4"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ],
                                            "children": [
                                                {
                                                    "tag": "aside",
                                                    "class": "relative md:w-56 h-screen sm:min-h-full bg-[#f1f4f8]",
                                                    "style": "",
                                                    "view": [
                                                        {
                                                            "description": "htmlSnippet header-logo",
                                                            "type": "htmlSnippet",
                                                            "behaviour": "fixTop",
                                                            "snippetID": "header-full"
                                                        },
                                                        {
                                                            "description": "back button",
                                                            "behaviour": "fixTop",
                                                            "type": "container",
                                                            "tag": "a",
                                                            "class": "w-full cursor-pointer h-16 sm:h-12 bg-[#f1f4f8] py-0 md:py-2 pl-1 align-middle uppercase text-12 font-medium no-underline text-gray-300 hover:text-white flex items-center  hover:bg-amber-400 ",
                                                            "style": "",
                                                            "children": [
                                                                {
                                                                    "description": "mainLevel backButton div",
                                                                    "type": "element",
                                                                    "elementType": "navEvent",
                                                                    "eventType": "navigationBackButton",
                                                                    "class": "inline-flex items-center w-full",
                                                                    "style": "",
                                                                    "children": [
                                                                        {
                                                                            "description": "mainLevel backButton icon",
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "span",
                                                                            "text": "arrow_back_ios_new",
                                                                            "class": "material-symbols-outlined mr-1 font-normal text-gray-800",
                                                                            "style": ""
                                                                        },
                                                                        {
                                                                            "description": "mainLevel backButton text",
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "span",
                                                                            "text": "back",
                                                                            "class": "text-left text-gray-800",
                                                                            "style": ""
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "type": "tableGroup",
                                                            "selectFirst": true,
                                                            "class": "",
                                                            "tablesGroup": [
                                                                {
                                                                    "id": "tablegroupCandidate",
                                                                    "tables": [
                                                                        {
                                                                            "collection": "candidates",
                                                                            "query": [
                                                                                { "candidateId": "62fe176a37f09cc643c4d017" },
                                                                                {
                                                                                    "jobId": 1,
                                                                                    "firstname": 1,
                                                                                    "lastname": 1,
                                                                                    "teaserTitle":1,
                                                                                    "company":1,
                                                                                    "date":1,
                                                                                }
                                                                            ],
                                                                            "custom": {
                                                                                "title": "BEWERBUNGEN",
                                                                                "type": "FUNCTIONAL"
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            ],
                                                            "cells": [
                                                                {
                                                                    "description": "table cell normal",
                                                                    "buttonStatusID": "normal",
                                                                    "type": "container",
                                                                    "class": "relative h-16 w-full bg-[#f1f4f8] hover:bg-gray-500 cursor-pointer",
                                                                    "style": "",
                                                                    "children": [
                                                                        {
                                                                            "description": "table cell div elements",
                                                                            "type": "container",
                                                                            "class": "absolute pl-8 pt-5 text-12",
                                                                            "style": "",
                                                                            "children": [
                                                                                {
                                                                                    "description": "table title",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "span",
                                                                                    "class": "",
                                                                                    "style": "",
                                                                                    "text": "custom:title"
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "description": "table cell active",
                                                                    "buttonStatusID": "active",
                                                                    "type": "container",
                                                                    "class": "relative h-16 w-full bg-[#f1f4f8] cursor-pointer",
                                                                    "style": "",
                                                                    "children": [
                                                                        {
                                                                            "description": "table cell div elements",
                                                                            "type": "container",
                                                                            "class": "absolute pl-8 pt-3 text-12 text-gray-700",
                                                                            "style": "",
                                                                            "children": [
                                                                                {
                                                                                    "description": "table title",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "span",
                                                                                    "class": "",
                                                                                    "style": "",
                                                                                    "text": "custom:title"
                                                                                }
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

                                    ]
                                }
                            ]
                        },
                        {
                            "deviceID": "mobile"
                        }
                    ]
                }
            ]
        }
    )

    return { jsonLocal: jsonStructure.value }
}
