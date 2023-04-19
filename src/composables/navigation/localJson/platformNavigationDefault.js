import { ref } from 'vue'

export function useJsonLocal() {

    const jsonStructure = ref(
        {
            "_id": { "$oid": "617d34178c33c4631fbd30bf" },
            "navigationType": "platformNavigation",
            "navigationPaths": [
                {
                    "navigationPathID": "rootLevel",
                    "path": [
                        {
                            "text": "sample templates",
                            "permission": "PsampleTemplateF",
                            "cellSetID": "custom_sampleTemplates-parent",
                            "beforeHtmlSnippet": "",
                            "afterHtmlSnippet": "",
                            "custom": { "icon": "", "iconColor": "" },
                            "children": [
                                {
                                    "text": "appSysJson",
                                    "permission": "PappSysJson",
                                    "url": "/appSysJson",
                                    "custom": { "icon": "", "iconColor": "" },
                                    "cellSetID": "",
                                    "beforeHtmlSnippet": "",
                                    "afterHtmlSnippet": ""
                                },
                                {
                                    "text": "tailwind1",
                                    "permission": "Ptailwind1",
                                    "url": "/tailwind1",
                                    "custom": { "icon": "", "iconColor": "" },
                                    "cellSetID": "",
                                    "beforeHtmlSnippet": "",
                                    "afterHtmlSnippet": ""
                                },
                                {
                                    "text": "tailwind2",
                                    "permission": "Ptailwind2",
                                    "url": "/tailwind2",
                                    "custom": { "icon": "", "iconColor": "" },
                                    "cellSetID": "",
                                    "beforeHtmlSnippet": "",
                                    "afterHtmlSnippet": ""
                                },
                                {
                                    "text": "primeVue",
                                    "permission": "PprimeVue",
                                    "url": "/primevue",
                                    "custom": { "icon": "", "iconColor": "" },
                                    "cellSetID": "",
                                    "beforeHtmlSnippet": "",
                                    "afterHtmlSnippet": ""
                                }
                            ]
                        },
                        {
                            "text": "template management",
                            "permission": "PtemplateManagement",
                            "custom": {},
                            "cellSetID": "custom_templateManagement-parent",
                            "beforeHtmlSnippet": "",
                            "afterHtmlSnippet": "",
                            "children": [
                                {
                                    "text": "template builder",
                                    "permission": "PtemplateBuilder",
                                    "custom": { "icon": "", "iconColor": "" },
                                    "cellSetID": "",
                                    "beforeHtmlSnippet": "",
                                    "afterHtmlSnippet": ""
                                }
                            ]
                        },
                        {
                            "text": "platform management",
                            "permission": "PplatformManagement",
                            "custom": {},
                            "cellSetID": "custom_platformManagement-parent",
                            "beforeHtmlSnippet": "",
                            "afterHtmlSnippet": "",
                            "children": [
                                {
                                    "text": "userManagement",
                                    "permission": "PplatformUserManagement",
                                    "url": "/platformUserManagement",
                                    "custom": { "icon": "", "iconColor": "" },
                                    "cellSetID": "",
                                    "beforeHtmlSnippet": "",
                                    "afterHtmlSnippet": ""
                                },
                                {
                                    "text": "platform settings",
                                    "permission": "PplatformSettings",
                                    "url": "/platformSettings",
                                    "custom": { "icon": "", "iconColor": "" },
                                    "cellSetID": "",
                                    "beforeHtmlSnippet": "",
                                    "afterHtmlSnippet": ""
                                }
                            ]
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
                            "class": "relative w-full md:w-56 h-screen sm:min-h-full bg-lightSidebar fixed",
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
                                },
                                {
                                    "description": "htmlSnippet fixBottom",
                                    "type": "htmlSnippet",
                                    "snippetID": "footer-full",
                                    "behaviour": "fixBottom"
                                },
                                {
                                    "description": "htmlSnippet bottom btn",
                                    "type": "htmlSnippet",
                                    "snippetID": "bottom-btn",
                                    "behaviour": "fixBottom"
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
                            "class": "w-full h-16 sm:h-12 bg-darkSidebar hover:bg-gray-500 text-gray-400 text-left hover:text-white border-b border-gray-800 transition-colors duration-50 pl-4",
                            "style": "",
                            "cell": [
                                {
                                    "description": "mainLevel cell container",
                                    "type": "container",
                                    "containerType": "div",
                                    "class": "flex justify-cenetr items-center",
                                    "children": [
                                        {
                                            "description": "mainLevel cell icon",
                                            "type": "element",
                                            "elementType": "staticHtmlTag",
                                            "tag": "span",
                                            "text": "custom:icon",
                                            "class2add": "sp",
                                            "class": "material-symbols-outlined text-2xl sm:text-lg text-white-500"
                                        },
                                        {
                                            "description": "mainLevel cell text",
                                            "type": "element",
                                            "tag": "span",
                                            "elementType": "staticHtmlTag",
                                            "text": "key:text",
                                            "class": "text-16 sm:text-12 pl-4"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "cellID": "backButton",
                            "tag": "button",
                            "class": "w-full cursor-pointer h-16 sm:h-12 bg-darkSidebar py-0 md:py-2 pl-1 align-middle uppercase text-12 font-medium no-underline text-gray-300 hover:text-white border-b border-gray-800 flex items-center  hover:bg-gray-600 ",
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
                                            "class": "material-symbols-outlined mr-1 font-normal text-white",
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
                            "class": "w-full h-20 sm:h-12 bg-darkSidebar hover:bg-gray-500 text-gray-400 text-left hover:text-white border-t border-b border-gray-800 transition-colors duration-50",
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
                },
                {
                    "cellSetID": "custom_templateManagement-parent",
                    "cells": [
                        {
                            "cellID": "mainLevel",
                            "tag": "button",
                            "class": "w-full h-20 sm:h-12 bg-darkSidebar hover:bg-gray-500 text-gray-400 text-left hover:text-white border-t border-b border-gray-800 transition-colors duration-50",
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
                                                    "class": "material-symbols-outlined text-2xl sm:text-xl h-8 w-8 sm:h-6 sm:w-6 rounded bg-green-500 text-white ml-1.5 sm:ml:0 pl-1 sm:pl-0.5 pt-1 sm:pt-0 leading-[24px]"
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
                },
                {
                    "cellSetID": "custom_platformManagement-parent",
                    "cells": [
                        {
                            "cellID": "mainLevel",
                            "tag": "button",
                            "class": "w-full h-20 sm:h-12 bg-darkSidebar hover:bg-gray-500 text-gray-400 text-left hover:text-white border-t border-b border-gray-800 transition-colors duration-50",
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
                                                    "class": "material-symbols-outlined text-2xl sm:text-xl h-8 w-8 sm:h-6 sm:w-6 rounded bg-blue-500 text-white ml-1.5 sm:ml:0 pl-1 sm:pl-0.5 pt-1 sm:pt-0 leading-[24px]"
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
                                    "class": "cursor-pointer mx-auto pt-4 w-10/12"
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
                                    "src": "/static/img/logo_dxpberlin_04.png",
                                    "class": "cursor-pointer mx-auto pt-4 w-9/12"
                                }
                            ]
                        },
                        {
                            "description": "ELSE IF -- div row label",
                            "conditionArray": [
                                {
                                    "cd": "INI, k, user:company, equal, s, dxpbaerlin"
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
                                    "src": "/static/img/logo_dxpbarlin_01.png",
                                    "class": "cursor-pointer mx-auto pt-4 w-9/12"
                                }
                            ]
                        },
                        {
                            "description": "object 1 MAIN NAVIGATION text",
                            "type": "container",
                            "containerType": "div",
                            "class": "pl-4 pt-4 pb-1",
                            "children": [
                                {
                                    "type": "element",
                                    "elementType": "staticHtmlTag",
                                    "tag": "div",
                                    "text": "user:first_name",
                                    "class": "text-gray-500 text-11"
                                }
                            ]
                        },
                        {
                            "description": "object 2 horizontal line",
                            "type": "container",
                            "containerType": "hr",
                            "class": "border-b border-seperatorSidebar p-0 m-0"
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
            "appNavigation": []
        }
    )

    return { jsonLocal: jsonStructure.value }
}
