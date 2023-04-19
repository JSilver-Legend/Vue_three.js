import { ref } from 'vue'

export function useJsonLocal() {

    const jsonStructure = ref(
        {
            "_id": {
                "$oid": "6350d32c8e11b6f1b8a7bb9f"
            },
            "type": "platformNavigation",
            "navigationPaths": [
                {
                    "navigationPathID": "rootLevel",
                    "path": [
                        {
                            "text": "HILLEBRAND COATING",
                            "permission": "PheoCoating",
                            "cellSetID": "custom_hcTemplates-parent",
                            "beforeHtmlSnippet": "",
                            "afterHtmlSnippet": "",
                            "custom": {
                                "icon": "",
                                "iconColor": ""
                            },
                            "children": [
                                {
                                    "text": "Sample Project",
                                    "permission": "PsampleProjectF",
                                    "custom": { "icon": "coronavirus" },
                                    "cellSetID": "",
                                    "beforeHtmlSnippet": "",
                                    "afterHtmlSnippet": "",
                                    "appPathAssignementID": "a534325"
                                },
                                {
                                    "text": "Blog",
                                    "permission": "PblogF",
                                    "custom": {
                                        "icon": "coronavirus"
                                    },
                                    "cellSetID": "",
                                    "beforeHtmlSnippet": "",
                                    "afterHtmlSnippet": "",
                                    "appPathAssignementID": "a777444blog"
                                },
                                {
                                    "text": "Karriere",
                                    "permission": "PcareerF",
                                    "custom": {
                                        "icon": "group"
                                    },
                                    "cellSetID": "",
                                    "beforeHtmlSnippet": "",
                                    "afterHtmlSnippet": "",
                                    "children": [
                                        {
                                            "text": "job offers",
                                            "permission": "PcareerJobOffers",
                                            "custom": {
                                                "icon": "work"
                                            },
                                            "cellSetID": "",
                                            "beforeHtmlSnippet": "",
                                            "afterHtmlSnippet": "",
                                            "appPathAssignementID": "a666333jobOffers"
                                        }
                                    ]
                                },
                                {
                                    "text": "Events",
                                    "permission": "PcareerF",
                                    "custom": {
                                        "icon": "group"
                                    },
                                    "cellSetID": "",
                                    "beforeHtmlSnippet": "",
                                    "afterHtmlSnippet": "",
                                    "children": [
                                        {
                                            "text": "Event",
                                            "permission": "PcareerJobOffers",
                                            "custom": {
                                                "icon": "work"
                                            },
                                            "cellSetID": "",
                                            "beforeHtmlSnippet": "",
                                            "afterHtmlSnippet": "",
                                            "appPathAssignementID": "a999114events"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "text": "HEO COATING",
                            "permission": "PheoCoating",
                            "cellSetID": "custom_heoTemplates-parent",
                            "beforeHtmlSnippet": "",
                            "afterHtmlSnippet": "",
                            "custom": {
                                "icon": "",
                                "iconColor": ""
                            },
                            "children": [
                                {
                                    "text": "PARTS",
                                    "permission": "PheoCoatingPartsF",
                                    "custom": {
                                        "icon": "coronavirus"
                                    },
                                    "cellSetID": "",
                                    "beforeHtmlSnippet": "",
                                    "afterHtmlSnippet": "",
                                    "appPathAssignementID": "a888222heoparts"
                                },
                                {
                                    "text": "DWP",
                                    "permission": "PheoCoatingDwpF",
                                    "cellSetID": "",
                                    "beforeHtmlSnippet": "",
                                    "afterHtmlSnippet": "",
                                    "custom": {
                                        "icon": "coronavirus",
                                        "iconColor": ""
                                    },
                                    "children": [
                                        {
                                            "text": "dwp Kontrolle",
                                            "permission": "PheoCoatingDwpKontrolleF",
                                            "custom": {
                                                "icon": "coronavirus"
                                            },
                                            "cellSetID": "",
                                            "beforeHtmlSnippet": "",
                                            "afterHtmlSnippet": "",
                                            "appPathAssignementID": "a999111dwpKontrolle"
                                        },
                                        {
                                            "text": "Kontrolle",
                                            "permission": "PheoCoatingKontrolleF",
                                            "custom": {
                                                "icon": "coronavirus"
                                            },
                                            "cellSetID": "",
                                            "beforeHtmlSnippet": "",
                                            "afterHtmlSnippet": "",
                                            "appPathAssignementID": "a999113kontrolle"
                                        }
                                    ]
                                },
                                {
                                    "text": "ANLAGEN",
                                    "permission": "PheoCoatingAnlagenF",
                                    "cellSetID": "",
                                    "beforeHtmlSnippet": "",
                                    "afterHtmlSnippet": "",
                                    "custom": {
                                        "icon": "coronavirus",
                                        "iconColor": ""
                                    },
                                    "children": [
                                        {
                                            "text": "Glanzanlage",
                                            "permission": "PheoCoatingAnlagenGlanzanlageF",
                                            "custom": {
                                                "icon": "coronavirus"
                                            },
                                            "cellSetID": "",
                                            "beforeHtmlSnippet": "",
                                            "afterHtmlSnippet": "",
                                            "appPathAssignementID": "a999112anlageNasslack"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "text": "Base Data",
                            "permission": "PheoCoating",
                            "cellSetID": "custom_standardTemplates-parent",
                            "beforeHtmlSnippet": "",
                            "afterHtmlSnippet": "",
                            "custom": {
                                "icon": "",
                                "iconColor": ""
                            },
                            "children": [
                                {
                                    "text": "Company",
                                    "permission": "PheoCoatingPartsF",
                                    "custom": {
                                        "icon": "coronavirus"
                                    },
                                    "cellSetID": "",
                                    "beforeHtmlSnippet": "",
                                    "afterHtmlSnippet": "",
                                    "appPathAssignementID": "abCompany"
                                }
                            ]
                        },
                        {
                            "text": "Sample Templates",
                            "permission": "PsampleTemplateF",
                            "cellSetID": "custom_sampleTemplates-parent",
                            "beforeHtmlSnippet": "",
                            "afterHtmlSnippet": "",
                            "custom": {
                                "icon": "",
                                "iconColor": ""
                            },
                            "children": [
                                {
                                    "text": "appSysJson",
                                    "permission": "PappSysJson",
                                    "url": "/appSysJson",
                                    "custom": {
                                        "icon": "",
                                        "iconColor": ""
                                    },
                                    "cellSetID": "",
                                    "beforeHtmlSnippet": "",
                                    "afterHtmlSnippet": ""
                                },
                                {
                                    "text": "tailwind1",
                                    "permission": "Ptailwind1",
                                    "url": "/tailwind1",
                                    "custom": {
                                        "icon": "",
                                        "iconColor": ""
                                    },
                                    "cellSetID": "",
                                    "beforeHtmlSnippet": "",
                                    "afterHtmlSnippet": ""
                                },
                                {
                                    "text": "tailwind2",
                                    "permission": "Ptailwind2",
                                    "url": "/tailwind2",
                                    "custom": {
                                        "icon": "",
                                        "iconColor": ""
                                    },
                                    "cellSetID": "",
                                    "beforeHtmlSnippet": "",
                                    "afterHtmlSnippet": ""
                                }
                            ]
                        },
                        {
                            "text": "Platform Management",
                            "permission": "PplatformManagementF",
                            "custom": {},
                            "cellSetID": "custom_platformManagement-parent",
                            "beforeHtmlSnippet": "",
                            "afterHtmlSnippet": "",
                            "children": [
                                {
                                    "text": "userManagement static",
                                    "permission": "PplatformManagementStaticF",
                                    "url": "/platformUserManagement",
                                    "custom": {
                                        "icon": "",
                                        "iconColor": ""
                                    },
                                    "cellSetID": "",
                                    "beforeHtmlSnippet": "",
                                    "afterHtmlSnippet": ""
                                },
                                {
                                    "text": "userManagement appSys",
                                    "permission": "PplatformManagementApsysF",
                                    "url": "/puManagement/home",
                                    "custom": {
                                        "icon": "",
                                        "iconColor": ""
                                    },
                                    "cellSetID": "",
                                    "beforeHtmlSnippet": "",
                                    "afterHtmlSnippet": ""
                                },
                                {
                                    "text": "platform settings",
                                    "permission": "PplatformManagementSettingsF",
                                    "url": "/platformSettings",
                                    "custom": {
                                        "icon": "",
                                        "iconColor": ""
                                    },
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
                    "cellSetID": "custom_standardTemplates-parent",
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
                                                    "class": "material-symbols-outlined text-2xl sm:text-xl h-8 w-8 sm:h-6 sm:w-6 rounded bg-gray-400 text-white ml-1.5 sm:ml:0 pl-1 sm:pl-0.5 pt-1 sm:pt-0 leading-[24px]"
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
                    "cellSetID": "custom_hcTemplates-parent",
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
                                                    "class": "material-symbols-outlined text-2xl sm:text-xl h-8 w-8 sm:h-6 sm:w-6 rounded bg-red-500 text-white ml-1.5 sm:ml:0 pl-1 sm:pl-0.5 pt-1 sm:pt-0 leading-[24px]"
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
                    "cellSetID": "custom_heoTemplates-parent",
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
                                                    "class": "material-symbols-outlined text-2xl sm:text-xl h-8 w-8 sm:h-6 sm:w-6 rounded bg-amber-400 text-white ml-1.5 sm:ml:0 pl-1 sm:pl-0.5 pt-1 sm:pt-0 leading-[24px]"
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
                                                    "class": "material-symbols-outlined text-2xl sm:text-xl h-8 w-8 sm:h-6 sm:w-6 rounded bg-green-600 text-white ml-1.5 sm:ml:0 pl-1 sm:pl-0.5 pt-1 sm:pt-0 leading-[24px]"
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
                                    "type": "navEvent",
                                    "eventType": "resetNav",
                                    "elementType": "staticHtmlTag",
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
                                    "type": "navEvent",
                                    "eventType": "resetNav",
                                    "elementType": "staticHtmlTag",
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
                                    "type": "navEvent",
                                    "eventType": "resetNav",
                                    "elementType": "staticHtmlTag",
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
                                    "type": "navEvent",
                                    "eventType": "resetNav",
                                    "elementType": "staticHtmlTag",
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
                                    "type": "navEvent",
                                    "eventType": "resetNav",
                                    "elementType": "staticHtmlTag",
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
                                    "type": "navEvent",
                                    "eventType": "resetNav",
                                    "elementType": "staticHtmlTag",
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
                                    "type": "navEvent",
                                    "eventType": "resetNav",
                                    "elementType": "staticHtmlTag",
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
                                            "type": "navEvent",
                                            "eventType": "resetNav",
                                            "elementType": "staticHtmlTag",
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
                                            "type": "navEvent",
                                            "eventType": "resetNav",
                                            "elementType": "staticHtmlTag",
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
                                            "type": "navEvent",
                                            "eventType": "resetNav",
                                            "elementType": "staticHtmlTag",
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
                                            "type": "navEvent",
                                            "eventType": "resetNav",
                                            "elementType": "staticHtmlTag",
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
                                            "type": "navEvent",
                                            "eventType": "resetNav",
                                            "elementType": "staticHtmlTag",
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
                                            "type": "navEvent",
                                            "eventType": "resetNav",
                                            "elementType": "staticHtmlTag",
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
                                    "type": "navEvent",
                                    "eventType": "toggleView",
                                    "elementType": "staticHtmlTag",
                                    "viewID": "rootNavigation-mobile",
                                    "tag": "button",
                                    "text": "home",
                                    "class": "focus:outline-none w-1/2 py-1 hover:bg-red-700 border-t border-b border-r border-gray-500 text-center cursor-pointer text-xs uppercase text-gray-100 ",
                                    "selected": "bg-gray-700"
                                },
                                {
                                    "description": "btn",
                                    "type": "navEvent",
                                    "eventType": "toggleView",
                                    "elementType": "staticHtmlTag",
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
                                                    "type": "navEvent",
                                                    "eventType": "resetNav",
                                                    "elementType": "staticHtmlTag",
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
                                                    "type": "navEvent",
                                                    "eventType": "resetNav",
                                                    "elementType": "staticHtmlTag",
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
                                                    "type": "navEvent",
                                                    "eventType": "resetNav",
                                                    "elementType": "staticHtmlTag",
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
                                                    "type": "navEvent",
                                                    "eventType": "resetNav",
                                                    "elementType": "staticHtmlTag",
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
                                                    "type": "navEvent",
                                                    "eventType": "resetNav",
                                                    "elementType": "staticHtmlTag",
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
                                                    "type": "navEvent",
                                                    "eventType": "resetNav",
                                                    "elementType": "staticHtmlTag",
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
                                            "type": "navEvent",
                                            "eventType": "toggleView",
                                            "elementType": "staticHtmlTag",
                                            "viewID": "rootNavigation-mobile",
                                            "tag": "button",
                                            "text": "home",
                                            "class": "focus:outline-none w-1/2 py-1 hover:bg-red-700 border-t border-b border-r border-gray-500 text-center cursor-pointer text-xs uppercase text-gray-100 ",
                                            "selected": "bg-gray-700"
                                        },
                                        {
                                            "description": "btn",
                                            "type": "navEvent",
                                            "eventType": "toggleView",
                                            "elementType": "staticHtmlTag",
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
                                                    "type": "navEvent",
                                                    "elementType": "staticHtmlTag",
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
                                                            "type": "navEvent",
                                                            "eventType": "",
                                                            "elementType": "staticHtmlTag",
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
                                                            "type": "navEvent",
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
                    "snippetID": "back-button",
                    "snippet": [
                        {
                            "description": "back button",
                            "behaviour": "fixTop",
                            "type": "container",
                            "tag": "a",
                            "class": "w-full cursor-pointer h-16 sm:h-12 bg-darkSidebar py-0 md:py-2 align-middle  text-12 font-medium no-underline text-gray-300 border-b border-gray-800 flex items-center",
                            "style": "",
                            "children": [
                                {
                                    "type": "container",
                                    "class": "flex justify-between items-center w-full",
                                    "children": [
                                        {
                                            "description": "mainLevel backButton div",
                                            "type": "navEvent",
                                            "eventType": "navigationBackButton",
                                            "class": "inline-flex items-center w-full py-3 hover:bg-gray-600 hover:text-white pl-3",
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
                                        },
                                        {
                                            "type": "container",
                                            "class": "w-10",
                                            "children": [
                                                {
                                                    "description": "mainLevel backButton icon",
                                                    "type": "element",
                                                    "elementType": "staticHtmlTag",
                                                    "tag": "span",
                                                    "text": "refresh",
                                                    "class": "material-symbols-outlined font-normal text-gray-500 cursor-pointer hover:bg-gray-600 hover:text-white py-3 px-2 border-l border-gray-600",
                                                    "style": ""
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
                    "appPathAssignementID": "abCompany",
                    "device": [
                        {
                            "deviceID": "desktop",
                            "appViews": [
                                {
                                    "description": "abCompany parent folder",
                                    "type": "container",
                                    "containerType": "div",
                                    "class": "relative md:w-56 h-auto sm:min-h-screen bg-lightSidebar",
                                    "view": [
                                        {
                                            "description": "htmlSnippet header-full",
                                            "type": "htmlSnippet",
                                            "snippetID": "header-full",
                                            "behaviour": "fixTop"
                                        },
                                        {
                                            "description": "htmlSnippet back-button",
                                            "type": "htmlSnippet",
                                            "behaviour": "fixTop",
                                            "snippetID": "back-button"
                                        },
                                        {
                                            "description": "abCompany table",
                                            "appViewLevel": "parent",
                                            "permission": "",
                                            "url": "/abCompany/table",
                                            "folderCell": [
                                                {
                                                    "description": "parent cell",
                                                    "type": "container",
                                                    "tag": "div",
                                                    "class": "w-full h-20 sm:h-12 bg-darkSidebar hover:bg-gray-500 text-gray-400 text-left hover:text-white border-b-[1px] border-gray-800 transition-colors duration-50 pl-4 pt-2",
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
                                                                    "text": "app_registration",
                                                                    "class": "material-symbols-outlined text-2xl sm:text-lg text-white"
                                                                },
                                                                {
                                                                    "description": "mainLevel cell text",
                                                                    "type": "element",
                                                                    "tag": "span",
                                                                    "elementType": "staticHtmlTag",
                                                                    "text": "Companies",
                                                                    "class": "text-16 sm:text-12 pl-4"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
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
                            "deviceID": "mobile"
                        }
                    ]
                },
                {
                    "appPathAssignementID": "a534325",
                    "device": [
                        {
                            "deviceID": "desktop",
                            "appViews": [
                                {
                                    "description": "534325SampleProject parent folder",
                                    "type": "container",
                                    "containerType": "div",
                                    "class": "relative md:w-56 h-auto sm:min-h-screen bg-lightSidebar",
                                    "view": [
                                        {
                                            "description": "htmlSnippet header-full",
                                            "type": "htmlSnippet",
                                            "snippetID": "header-full",
                                            "behaviour": "fixTop"
                                        },
                                        {
                                            "description": "htmlSnippet back-button",
                                            "type": "htmlSnippet",
                                            "snippetID": "back-button",
                                            "behaviour": "fixTop"
                                        },
                                        {
                                            "description": "534325SampleProject projects",
                                            "appViewLevel": "parent",
                                            "permission": "",
                                            "url": "/534325SampleProject/home",
                                            "folderCell": [
                                                {
                                                    "description": "sample Project parent cell",
                                                    "type": "container",
                                                    "tag": "div",
                                                    "class": "w-full h-20 sm:h-12 bg-darkSidebar hover:bg-gray-500 text-gray-400 text-left hover:text-white border-b-[1px] border-gray-800 transition-colors duration-50 pl-4 pt-2",
                                                    "style": "",
                                                    "children": [
                                                        {
                                                            "description": "mainLevel cell container",
                                                            "type": "container",
                                                            "containerType": "div",
                                                            "class": "flex justify-start items-center ",
                                                            "children": [
                                                                {
                                                                    "description": "mainLevel cell icon",
                                                                    "type": "element",
                                                                    "elementType": "staticHtmlTag",
                                                                    "tag": "span",
                                                                    "text": "app_registration",
                                                                    "class": "material-symbols-outlined text-2xl sm:text-lg text-white"
                                                                },
                                                                {
                                                                    "description": "mainLevel cell text",
                                                                    "type": "element",
                                                                    "tag": "span",
                                                                    "elementType": "staticHtmlTag",
                                                                    "text": "sample project",
                                                                    "class": "text-16 sm:text-12 pl-4"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ],
                                            "folderCellSelected": [
                                                {
                                                    "description": "sample Project parent cell",
                                                    "type": "container",
                                                    "tag": "div",
                                                    "class": "w-full h-20 sm:h-12 bg-gray-500 text-white text-left  border-b-[1px] border-gray-800 transition-colors duration-50 pl-4 pt-2",
                                                    "style": "",
                                                    "children": [
                                                        {
                                                            "description": "mainLevel cell container",
                                                            "type": "container",
                                                            "containerType": "div",
                                                            "class": "flex justify-start items-center ",
                                                            "children": [
                                                                {
                                                                    "description": "mainLevel cell icon",
                                                                    "type": "element",
                                                                    "elementType": "staticHtmlTag",
                                                                    "tag": "span",
                                                                    "text": "app_registration",
                                                                    "class": "material-symbols-outlined text-2xl sm:text-lg text-white"
                                                                },
                                                                {
                                                                    "description": "mainLevel cell text",
                                                                    "type": "element",
                                                                    "tag": "span",
                                                                    "elementType": "staticHtmlTag",
                                                                    "text": "sample project",
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
                                                    "class": "relative md:w-56 h-screen sm:min-h-full bg-lightSidebar",
                                                    "style": "",
                                                    "view": [
                                                        {
                                                            "description": "htmlSnippet header-full",
                                                            "type": "htmlSnippet",
                                                            "behaviour": "fixTop",
                                                            "snippetID": "header-full"
                                                        },
                                                        {
                                                            "description": "htmlSnippet back-button",
                                                            "type": "htmlSnippet",
                                                            "behaviour": "fixTop",
                                                            "snippetID": "back-button"
                                                        },
                                                        {
                                                            "description": "sort demo",
                                                            "type": "container",
                                                            "tag": "div",
                                                            "class": "w-full h-20 sm:h-10 bg-darkSidebar ",
                                                            "children": [
                                                                {
                                                                    "description": "filter 1",
                                                                    "type": "container",
                                                                    "containerType": "div",
                                                                    "class": "flex justify-center items-center h-full border-b-[1px] border-gray-300",
                                                                    "children": [
                                                                        {
                                                                            "description": "mainLevel cell icon",
                                                                            "type": "listEvent",
                                                                            "eventType": "sort",
                                                                            "storeArray": "a534325",
                                                                            "criteria": "",
                                                                            "containerType": "div",
                                                                            "tag": "a",
                                                                            "class": "w-1/5 h-full bg-[#98a5a9] hover:bg-gray-300 flex justify-center items-center border-r-[1px] border-gray-300 cursor-pointer",
                                                                            "children": [
                                                                                {
                                                                                    "description": "mainLevel cell icon",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "div",
                                                                                    "text": "#",
                                                                                    "class": "text-white text-13"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "description": "mainLevel cell icon",
                                                                            "type": "listEvent",
                                                                            "eventType": "sort",
                                                                            "storeArray": "a534325",
                                                                            "criteria": "generalProjectNumber",
                                                                            "class": "w-2/5 h-full bg-[#7f8b95] hover:bg-gray-300 flex justify-center items-center border-r-[1px] border-gray-300 cursor-pointer",
                                                                            "children": [
                                                                                {
                                                                                    "description": "mainLevel cell icon",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "div",
                                                                                    "text": "MANUAL",
                                                                                    "class": "text-white text-12"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "description": "mainLevel cell icon",
                                                                            "type": "listEvent",
                                                                            "eventType": "sort",
                                                                            "storeArray": "a534325",
                                                                            "criteria": "date",
                                                                            "class": "w-2/5 h-full bg-[#98a5a9] hover:bg-gray-300 flex justify-center items-center cursor-pointer",
                                                                            "children": [
                                                                                {
                                                                                    "description": "mainLevel cell icon",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "div",
                                                                                    "text": "AUTO",
                                                                                    "class": "text-white text-12"
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "description": "filter 2",
                                                            "type": "container",
                                                            "tag": "div",
                                                            "class": "w-full h-20 sm:h-10 bg-darkSidebar ",
                                                            "children": [
                                                                {
                                                                    "description": "filter 2",
                                                                    "type": "container",
                                                                    "containerType": "div",
                                                                    "class": "flex justify-center items-center h-full ",
                                                                    "children": [
                                                                        {
                                                                            "description": "mainLevel cell icon",
                                                                            "type": "listEvent",
                                                                            "eventType": "filter",
                                                                            "storeArray": "a534325",
                                                                            "criteria": "generalProjectCategory.value",
                                                                            "value": "all",
                                                                            "tag": "a",
                                                                            "class": "w-1/5 h-full bg-[#7f8b95] hover:bg-gray-300 flex justify-center items-center border-r-[1px] border-gray-300 cursor-pointer",
                                                                            "children": [
                                                                                {
                                                                                    "description": "mainLevel cell icon",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "div",
                                                                                    "text": "#",
                                                                                    "class": "text-white text-12"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "description": "mainLevel cell icon",
                                                                            "type": "listEvent",
                                                                            "eventType": "filter",
                                                                            "storeArray": "a534325",
                                                                            "criteria": "generalProjectCategory.value",
                                                                            "value": "DE",
                                                                            "class": "w-1/5 h-full bg-[#98a5a9] hover:bg-gray-300 flex justify-center items-center border-r-[1px] border-gray-300 cursor-pointer",
                                                                            "children": [
                                                                                {
                                                                                    "description": "mainLevel cell icon",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "div",
                                                                                    "text": "DE",
                                                                                    "class": "text-white text-12"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "description": "mainLevel cell icon",
                                                                            "type": "listEvent",
                                                                            "eventType": "filter",
                                                                            "storeArray": "a534325",
                                                                            "criteria": "generalProjectCategory.value",
                                                                            "value": "FU",
                                                                            "class": "w-1/5 h-full bg-[#98a5a9] hover:bg-gray-300 flex justify-center items-center border-r-[1px] border-gray-300 cursor-pointer",
                                                                            "children": [
                                                                                {
                                                                                    "description": "mainLevel cell icon",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "div",
                                                                                    "text": "FU",
                                                                                    "class": "text-white text-12"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "description": "mainLevel cell icon",
                                                                            "type": "listEvent",
                                                                            "eventType": "filter",
                                                                            "storeArray": "a534325",
                                                                            "criteria": "generalProjectCategory.value",
                                                                            "value": "MO",
                                                                            "class": "w-1/5 h-full bg-[#98a5a9] hover:bg-gray-300 flex justify-center items-center border-r-[1px] border-gray-300 cursor-pointer",
                                                                            "children": [
                                                                                {
                                                                                    "description": "mainLevel cell icon",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "div",
                                                                                    "text": "MO",
                                                                                    "class": "text-white text-12"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "description": "mainLevel cell icon",
                                                                            "type": "listEvent",
                                                                            "eventType": "filter",
                                                                            "storeArray": "a534325",
                                                                            "criteria": "generalProjectCategory.value",
                                                                            "value": "AR",
                                                                            "class": "w-1/5 h-full bg-[#98a5a9] hover:bg-gray-300 flex justify-center items-center cursor-pointer",
                                                                            "children": [
                                                                                {
                                                                                    "description": "mainLevel cell icon",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "div",
                                                                                    "text": "AR",
                                                                                    "class": "text-white text-12"
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "description": "filter 3 select",
                                                            "type": "container",
                                                            "tag": "div",
                                                            "class": "w-full bg-darkSidebar ",
                                                            "children": [
                                                                {
                                                                    "description": "listbox select input",
                                                                    "type": "listEvent",
                                                                    "eventType": "filter",
                                                                    "storeArray": "a534325",
                                                                    "criteria": "generalProjectCategory.value",
                                                                    "class": "",
                                                                    "elementType": "listboxSelectInput",
                                                                    "value": "value",
                                                                    "listbox": {
                                                                        "listboxButton": {
                                                                            "placeholder": "Filter wählen",
                                                                            "class": "relative flex items-center w-full h-full cursor-pointer bg-white py-3 pl-4 pr-10 text-left",
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
                                                                                            "class": "block truncate sm:text-13"
                                                                                        },
                                                                                        {
                                                                                            "type": "element",
                                                                                            "elementType": "staticHtmlTag",
                                                                                            "tag": "span",
                                                                                            "text": "unfold_more",
                                                                                            "class": "material-symbols-outlined text-[20px] text-gray-800 font-normal pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
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
                                                                                    "value": "all",
                                                                                    "name": "All"
                                                                                },
                                                                                {
                                                                                    "value": "DE",
                                                                                    "name": "Decorative"
                                                                                },
                                                                                {
                                                                                    "value": "FU",
                                                                                    "name": "Functional"
                                                                                },
                                                                                {
                                                                                    "value": "MO",
                                                                                    "name": "Mobility"
                                                                                },
                                                                                {
                                                                                    "value": "AR",
                                                                                    "name": "Architecture"
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "description": "search",
                                                            "type": "container",
                                                            "tag": "div",
                                                            "class": "w-full h-20 sm:h-10 bg-[#34495e] ",
                                                            "style": "",
                                                            "children": [
                                                                {
                                                                    "description": "filter 2",
                                                                    "type": "container",
                                                                    "containerType": "div",
                                                                    "class": "flex justify-center items-center h-full",
                                                                    "children": [
                                                                        {
                                                                            "description": "mainLevel cell icon",
                                                                            "type": "container",
                                                                            "containerType": "div",
                                                                            "tag": "div",
                                                                            "class": "w-full h-full bg-[#34495e] flex justify-start items-center pl-4",
                                                                            "children": [
                                                                                {
                                                                                    "description": "mainLevel cell icon",
                                                                                    "type": "listEvent",
                                                                                    "eventType": "search",
                                                                                    "storeArray": "a534325",
                                                                                    "elementType": "textInput",
                                                                                    "triggerEventType": "keyup",
                                                                                    "placeholder": "search",
                                                                                    "class": "text-white bg-transparent border-none focus:outline-none text-13"
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "description": "ag grid documentList 534325SampleProject",
                                                            "type": "element",
                                                            "selectFirst": true,
                                                            "elementType": "agGrid",
                                                            "listType": "documentList",
                                                            "collection": "a534325",
                                                            "class": "ag-theme-balham h-screen min-w-[200px] pt-0",
                                                            "style": "--ag-background-color: #16232d; --ag-odd-row-background-color: #16232d; --ag-cell-horizontal-border: #ff0000; --ag-header-background-color: #16232d; --ag-cell-horizontal-padding: 0px; --ag-borders: none; --ag-row-hover-color: transparent; --ag-selected-row-background-color: transparent; --ag-range-selection-border-color: transparent; --ag-line-height: 1rem;",
                                                            "rowHeight": 67,
                                                            "headerHeight": 0,
                                                            "rowGroupPanelShow": "never",
                                                            "sideBar": null,
                                                            "rowSelection": "single",
                                                            "isRowSelectable": null,
                                                            "detailCellRendererParams": null,
                                                            "rowData": null,
                                                            "query": [
                                                                {},
                                                                {
                                                                    "_id": 1,
                                                                    "generalProjectNumber": 1,
                                                                    "company": 1,
                                                                    "generalProjectCategory": 1,

                                                                    "documentLock": 1
                                                                }
                                                            ],
                                                            "columnDefs": [
                                                                {
                                                                    "field": "generalProjectNumber",
                                                                    "cellRenderer": "rowCell",
                                                                    "width": 240
                                                                }
                                                            ],
                                                            "defaultColDef": {
                                                                "sortable": true,
                                                                "filter": true,
                                                                "flex": 0,
                                                                "floatingFilter": false
                                                            },
                                                            "sideBarDefs": null,
                                                            "cellRenderer": [
                                                                {
                                                                    "id": "rowCell",
                                                                    "type": "container",
                                                                    "class": "relative bg-sidebar h-16 hover:bg-gray-700",
                                                                    "selectedClass": "relative bg-gray-500 h-16",
                                                                    "children": [
                                                                        {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "assignedKey": "generalProjectNumber",
                                                                            "class": "absolute top-2 left-2 text-amber-400 font-bold text-11",
                                                                            "selectedClass": "absolute top-2 left-2 text-amber-400 font-bold text-11"
                                                                        },
                                                                        {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "assignedKey": "company.generalCompany",
                                                                            "class": "absolute bottom-1 left-2 text-white text-10",
                                                                            "selectedClass": "absolute bottom-1 left-2 text-white text-10"
                                                                        },
                                                                        {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "assignedKey": "generalProjectCategory.value",
                                                                            "class": "absolute bottom-1 right-6 text-white font-bold text-10",
                                                                            "selectedClass": "absolute bottom-1 right-6 text-white font-bold text-10"
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
                                            "description": "534325SampleProject ag-grid tables",
                                            "appViewLevel": "parent",
                                            "permission": "",
                                            "folderCell": [
                                                {
                                                    "description": "sample Project parent cell",
                                                    "type": "container",
                                                    "tag": "div",
                                                    "class": "w-full h-20 sm:h-12 bg-darkSidebar hover:bg-gray-500 text-gray-400 text-left hover:text-white border-b-[1px] border-gray-800 transition-colors duration-50 pl-4 pt-2",
                                                    "style": "",
                                                    "children": [
                                                        {
                                                            "description": "mainLevel cell container",
                                                            "type": "container",
                                                            "containerType": "div",
                                                            "class": "flex justify-start items-center ",
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
                                                    "class": "relative md:w-56 h-screen sm:min-h-full bg-lightSidebar",
                                                    "style": "",
                                                    "view": [
                                                        {
                                                            "description": "htmlSnippet header-full",
                                                            "type": "htmlSnippet",
                                                            "snippetID": "header-full",
                                                            "behaviour": "fixTop"
                                                        },
                                                        {
                                                            "description": "htmlSnippet back-button",
                                                            "type": "htmlSnippet",
                                                            "behaviour": "fixTop",
                                                            "snippetID": "back-button"
                                                        },
                                                        {
                                                            "description": "534325SampleProject table1",
                                                            "appViewLevel": "parent",
                                                            "permission": "",
                                                            "url": "/534325SampleProject/table1",
                                                            "folderCell": [
                                                                {
                                                                    "description": "sample Project parent cell",
                                                                    "type": "container",
                                                                    "tag": "div",
                                                                    "class": "w-full h-20 sm:h-12 bg-darkSidebar hover:bg-gray-500 text-gray-400 text-left hover:text-white border-b-[1px] border-gray-800 transition-colors duration-50 pl-4 pt-2",
                                                                    "style": "",
                                                                    "children": [
                                                                        {
                                                                            "description": "mainLevel cell container",
                                                                            "type": "container",
                                                                            "containerType": "div",
                                                                            "class": "flex justify-start items-center ",
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
                                                                                    "text": "Fun Coating Product",
                                                                                    "class": "text-16 sm:text-12 pl-4"
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ],
                                                            "folderCellSelected": [
                                                                {
                                                                    "description": "sample Project parent cell",
                                                                    "type": "container",
                                                                    "tag": "div",
                                                                    "class": "w-full h-20 sm:h-12 bg-gray-500 text-white text-left  border-b-[1px] border-gray-800 transition-colors duration-50 pl-4 pt-2",
                                                                    "style": "",
                                                                    "children": [
                                                                        {
                                                                            "description": "mainLevel cell container",
                                                                            "type": "container",
                                                                            "containerType": "div",
                                                                            "class": "flex justify-start items-center ",
                                                                            "children": [
                                                                                {
                                                                                    "description": "mainLevel cell icon",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "span",
                                                                                    "text": "app_registration",
                                                                                    "class": "material-symbols-outlined text-2xl sm:text-lg text-white"
                                                                                },
                                                                                {
                                                                                    "description": "mainLevel cell text",
                                                                                    "type": "element",
                                                                                    "tag": "span",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "text": "Fun Coating Product",
                                                                                    "class": "text-16 sm:text-12 pl-4"
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "description": "534325SampleProject table2",
                                                            "appViewLevel": "parent",
                                                            "permission": "",
                                                            "url": "/534325SampleProject/table2",
                                                            "folderCell": [
                                                                {
                                                                    "description": "sample Project parent cell",
                                                                    "type": "container",
                                                                    "tag": "div",
                                                                    "class": "w-full h-20 sm:h-12 bg-darkSidebar hover:bg-gray-500 text-gray-400 text-left hover:text-white border-b-[1px] border-gray-800 transition-colors duration-50 pl-4 pt-2",
                                                                    "style": "",
                                                                    "children": [
                                                                        {
                                                                            "description": "mainLevel cell container",
                                                                            "type": "container",
                                                                            "containerType": "div",
                                                                            "class": "flex justify-start items-center ",
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
                                                                                    "text": "Powder Coating Colors",
                                                                                    "class": "text-16 sm:text-12 pl-4"
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ],
                                                            "folderCellSelected": [
                                                                {
                                                                    "description": "sample Project parent cell",
                                                                    "type": "container",
                                                                    "tag": "div",
                                                                    "class": "w-full h-20 sm:h-12 bg-gray-500 text-white text-left  border-b-[1px] border-gray-800 transition-colors duration-50 pl-4 pt-2",
                                                                    "style": "",
                                                                    "children": [
                                                                        {
                                                                            "description": "mainLevel cell container",
                                                                            "type": "container",
                                                                            "containerType": "div",
                                                                            "class": "flex justify-start items-center ",
                                                                            "children": [
                                                                                {
                                                                                    "description": "mainLevel cell icon",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "span",
                                                                                    "text": "app_registration",
                                                                                    "class": "material-symbols-outlined text-2xl sm:text-lg text-white"
                                                                                },
                                                                                {
                                                                                    "description": "mainLevel cell text",
                                                                                    "type": "element",
                                                                                    "tag": "span",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "text": "Powder Coating Colors",
                                                                                    "class": "text-16 sm:text-12 pl-4"
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "description": "a534325 mobility",
                                                            "appViewLevel": "parent",
                                                            "permission": "",
                                                            "url": "/534325SampleProject/table3",
                                                            "folderCell": [
                                                                {
                                                                    "description": "sample Project parent cell",
                                                                    "type": "container",
                                                                    "tag": "div",
                                                                    "class": "w-full h-20 sm:h-12 bg-darkSidebar hover:bg-gray-500 text-gray-400 text-left hover:text-white border-b-[1px] border-gray-800 transition-colors duration-50 pl-4 pt-2",
                                                                    "style": "",
                                                                    "children": [
                                                                        {
                                                                            "description": "mainLevel cell container",
                                                                            "type": "container",
                                                                            "containerType": "div",
                                                                            "class": "flex justify-start items-center ",
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
                                                                                    "text": "Mobility Products",
                                                                                    "class": "text-16 sm:text-12 pl-4"
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ],
                                                            "folderCellSelected": [
                                                                {
                                                                    "description": "sample Project parent cell",
                                                                    "type": "container",
                                                                    "tag": "div",
                                                                    "class": "w-full h-20 sm:h-12 bg-gray-500 text-white text-left  border-b-[1px] border-gray-800 transition-colors duration-50 pl-4 pt-2",
                                                                    "style": "",
                                                                    "children": [
                                                                        {
                                                                            "description": "mainLevel cell container",
                                                                            "type": "container",
                                                                            "containerType": "div",
                                                                            "class": "flex justify-start items-center ",
                                                                            "children": [
                                                                                {
                                                                                    "description": "mainLevel cell icon",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "span",
                                                                                    "text": "app_registration",
                                                                                    "class": "material-symbols-outlined text-2xl sm:text-lg text-white"
                                                                                },
                                                                                {
                                                                                    "description": "mainLevel cell text",
                                                                                    "type": "element",
                                                                                    "tag": "span",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "text": "Mobility Products",
                                                                                    "class": "text-16 sm:text-12 pl-4"
                                                                                }
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
                                            "description": "534325SampleProject settings",
                                            "appViewLevel": "parent",
                                            "permission": "",
                                            "url": "/534325SampleProject/settings",
                                            "folderCell": [
                                                {
                                                    "description": "settings parent cell",
                                                    "type": "container",
                                                    "tag": "div",
                                                    "class": "w-full h-20 sm:h-12 bg-darkSidebar hover:bg-gray-500 text-gray-400 text-left hover:text-white border-b-[1px] border-gray-800 transition-colors duration-50 pl-4 pt-2",
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
                                                                    "text": "toggle_on",
                                                                    "class": "material-symbols-outlined text-2xl sm:text-lg text-white"
                                                                },
                                                                {
                                                                    "description": "mainLevel cell text",
                                                                    "type": "element",
                                                                    "tag": "span",
                                                                    "elementType": "staticHtmlTag",
                                                                    "text": "settings",
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
                                                    "class": "relative md:w-56 h-screen sm:min-h-full bg-lightSidebar",
                                                    "style": "",
                                                    "view": [
                                                        {
                                                            "description": "htmlSnippet header-full",
                                                            "type": "htmlSnippet",
                                                            "behaviour": "fixTop",
                                                            "snippetID": "header-full"
                                                        },
                                                        {
                                                            "description": "htmlSnippet back-button",
                                                            "type": "htmlSnippet",
                                                            "behaviour": "fixTop",
                                                            "snippetID": "back-button"
                                                        },
                                                        {
                                                            "description": "ag grid documentList 534325SampleProject",
                                                            "type": "element",
                                                            "elementType": "agGrid",
                                                            "listType": "documentList",
                                                            "collection": "a534325_settings",
                                                            "selectFirst": true,
                                                            "class": "ag-theme-balham h-screen min-w-[200px] pt-0",
                                                            "style": "--ag-background-color: #16232d; --ag-odd-row-background-color: #16232d; --ag-cell-horizontal-border: #ff0000; --ag-header-background-color: #16232d; --ag-cell-horizontal-padding: 0px; --ag-borders: none; --ag-row-hover-color: transparent; --ag-selected-row-background-color: transparent; --ag-range-selection-border-color: transparent; --ag-line-height: 1rem;",
                                                            "rowHeight": 67,
                                                            "headerHeight": 0,
                                                            "rowGroupPanelShow": "never",
                                                            "sideBar": null,
                                                            "rowSelection": "single",
                                                            "isRowSelectable": null,
                                                            "detailCellRendererParams": null,
                                                            "rowData": null,
                                                            "query": [
                                                                {
                                                                    "type": "settings"
                                                                },
                                                                {
                                                                    "_id": 1,
                                                                    "type": 1,
                                                                    "description": 1
                                                                }
                                                            ],
                                                            "columnDefs": [
                                                                {
                                                                    "field": "generalProjectNumber",
                                                                    "cellRenderer": "rowCell",
                                                                    "width": 240
                                                                }
                                                            ],
                                                            "defaultColDef": {
                                                                "sortable": true,
                                                                "filter": true,
                                                                "flex": 0,
                                                                "floatingFilter": false
                                                            },
                                                            "sideBarDefs": null,
                                                            "cellRenderer": [
                                                                {
                                                                    "id": "rowCell",
                                                                    "type": "container",
                                                                    "class": "relative bg-sidebar h-16 hover:bg-gray-700",
                                                                    "selectedClass": "relative bg-gray-500 h-16",
                                                                    "children": [
                                                                        {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "assignedKey": "type",
                                                                            "class": "absolute top-2 left-2 text-amber-400 font-bold text-11",
                                                                            "selectedClass": "absolute top-3 left-3 text-amber-400 font-bold text-11"
                                                                        },
                                                                        {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "assignedKey": "description",
                                                                            "class": "absolute bottom-0 left-2 text-white text-10",
                                                                            "selectedClass": "absolute bottom-0 left-3 text-white text-10"
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
                            "deviceID": "mobile"
                        }
                    ]
                },
                {
                    "appPathAssignementID": "a777444blog",
                    "device": [
                        {
                            "deviceID": "desktop",
                            "appViews": [
                                {
                                    "description": "a777444blog parent folder",
                                    "type": "container",
                                    "containerType": "div",
                                    "class": "relative md:w-56 h-auto sm:min-h-screen bg-lightSidebar",
                                    "view": [
                                        {
                                            "description": "htmlSnippet header-full",
                                            "type": "htmlSnippet",
                                            "snippetID": "header-full",
                                            "behaviour": "fixTop"
                                        },
                                        {
                                            "description": "htmlSnippet back-button",
                                            "type": "htmlSnippet",
                                            "behaviour": "fixTop",
                                            "snippetID": "back-button"
                                        },
                                        {
                                            "description": "a777444blog",
                                            "appViewLevel": "parent",
                                            "permission": "",
                                            "url": "/a777444blog/home",
                                            "folderCell": [
                                                {
                                                    "description": "sample Project parent cell",
                                                    "type": "container",
                                                    "tag": "div",
                                                    "class": "w-full h-20 sm:h-12 bg-darkSidebar hover:bg-gray-500 text-gray-400 text-left hover:text-white border-b-[1px] border-gray-800 transition-colors duration-50 pl-4 pt-2",
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
                                                                    "text": "app_registration",
                                                                    "class": "material-symbols-outlined text-2xl sm:text-lg text-white"
                                                                },
                                                                {
                                                                    "description": "mainLevel cell text",
                                                                    "type": "element",
                                                                    "tag": "span",
                                                                    "elementType": "staticHtmlTag",
                                                                    "text": "sample project",
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
                                                    "selectFirst": true,
                                                    "class": "relative md:w-56 h-screen sm:min-h-full bg-lightSidebar",
                                                    "style": "",
                                                    "view": [
                                                        {
                                                            "description": "htmlSnippet header-full",
                                                            "type": "htmlSnippet",
                                                            "behaviour": "fixTop",
                                                            "snippetID": "header-full"
                                                        },
                                                        {
                                                            "description": "htmlSnippet back-button",
                                                            "type": "htmlSnippet",
                                                            "behaviour": "fixTop",
                                                            "snippetID": "back-button"
                                                        },
                                                        {
                                                            "description": "filter 1",
                                                            "type": "container",
                                                            "tag": "div",
                                                            "class": "w-full h-20 sm:h-10 bg-darkSidebar ",
                                                            "children": [
                                                                {
                                                                    "description": "filter 1",
                                                                    "type": "container",
                                                                    "containerType": "div",
                                                                    "class": "flex justify-center items-center h-full border-b-[1px] border-gray-300",
                                                                    "children": [
                                                                        {
                                                                            "description": "mainLevel cell icon",
                                                                            "type": "listEvent",
                                                                            "eventType": "sort",
                                                                            "storeArray": "a534325",
                                                                            "criteria": "",
                                                                            "containerType": "div",
                                                                            "tag": "a",
                                                                            "class": "w-1/5 h-full bg-[#98a5a9] hover:bg-gray-300 flex justify-center items-center border-r-[1px] border-gray-300 cursor-pointer",
                                                                            "children": [
                                                                                {
                                                                                    "description": "mainLevel cell icon",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "div",
                                                                                    "text": "#",
                                                                                    "class": "text-white text-13"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "description": "mainLevel cell icon",
                                                                            "type": "listEvent",
                                                                            "eventType": "sort",
                                                                            "storeArray": "a534325",
                                                                            "criteria": "generalProjectNumber",
                                                                            "class": "w-2/5 h-full bg-[#7f8b95] hover:bg-gray-300 flex justify-center items-center border-r-[1px] border-gray-300 cursor-pointer",
                                                                            "children": [
                                                                                {
                                                                                    "description": "mainLevel cell icon",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "div",
                                                                                    "text": "MANUAL",
                                                                                    "class": "text-white text-12"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "description": "mainLevel cell icon",
                                                                            "type": "listEvent",
                                                                            "eventType": "sort",
                                                                            "storeArray": "a534325",
                                                                            "criteria": "date",
                                                                            "class": "w-2/5 h-full bg-[#98a5a9] hover:bg-gray-300 flex justify-center items-center cursor-pointer",
                                                                            "children": [
                                                                                {
                                                                                    "description": "mainLevel cell icon",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "div",
                                                                                    "text": "AUTO",
                                                                                    "class": "text-white text-12"
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "description": "filter 2",
                                                            "type": "container",
                                                            "tag": "div",
                                                            "class": "w-full h-20 sm:h-10 bg-darkSidebar ",
                                                            "children": [
                                                                {
                                                                    "description": "filter 1",
                                                                    "type": "container",
                                                                    "containerType": "div",
                                                                    "class": "flex justify-center items-center h-full ",
                                                                    "children": [
                                                                        {
                                                                            "description": "mainLevel cell icon",
                                                                            "type": "container",
                                                                            "containerType": "div",
                                                                            "tag": "a",
                                                                            "class": "w-1/5 h-full bg-[#7f8b95] hover:bg-gray-300 flex justify-center items-center border-r-[1px] border-gray-300 cursor-pointer",
                                                                            "children": [
                                                                                {
                                                                                    "description": "mainLevel cell icon",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "div",
                                                                                    "text": "#",
                                                                                    "class": "text-white text-12"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "description": "mainLevel cell icon",
                                                                            "type": "container",
                                                                            "containerType": "div",
                                                                            "tag": "div",
                                                                            "class": "w-1/5 h-full bg-[#98a5a9] hover:bg-gray-300 flex justify-center items-center border-r-[1px] border-gray-300 cursor-pointer",
                                                                            "children": [
                                                                                {
                                                                                    "description": "mainLevel cell icon",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "div",
                                                                                    "text": "DE",
                                                                                    "class": "text-white text-12"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "description": "mainLevel cell icon",
                                                                            "type": "container",
                                                                            "containerType": "div",
                                                                            "tag": "div",
                                                                            "class": "w-1/5 h-full bg-[#98a5a9] hover:bg-gray-300 flex justify-center items-center border-r-[1px] border-gray-300 cursor-pointer",
                                                                            "children": [
                                                                                {
                                                                                    "description": "mainLevel cell icon",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "div",
                                                                                    "text": "FU",
                                                                                    "class": "text-white text-12"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "description": "mainLevel cell icon",
                                                                            "type": "container",
                                                                            "containerType": "div",
                                                                            "tag": "div",
                                                                            "class": "w-1/5 h-full bg-[#98a5a9] hover:bg-gray-300 flex justify-center items-center border-r-[1px] border-gray-300 cursor-pointer",
                                                                            "children": [
                                                                                {
                                                                                    "description": "mainLevel cell icon",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "div",
                                                                                    "text": "MO",
                                                                                    "class": "text-white text-12"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "description": "mainLevel cell icon",
                                                                            "type": "container",
                                                                            "containerType": "div",
                                                                            "tag": "div",
                                                                            "class": "w-1/5 h-full bg-[#98a5a9] hover:bg-gray-300 flex justify-center items-center cursor-pointer",
                                                                            "children": [
                                                                                {
                                                                                    "description": "mainLevel cell icon",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "div",
                                                                                    "text": "AR",
                                                                                    "class": "text-white text-12"
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "description": "search",
                                                            "type": "container",
                                                            "tag": "div",
                                                            "class": "w-full h-20 sm:h-10 bg-[#34495e] ",
                                                            "style": "",
                                                            "children": [
                                                                {
                                                                    "description": "filter 2",
                                                                    "type": "container",
                                                                    "containerType": "div",
                                                                    "class": "flex justify-center items-center h-full",
                                                                    "children": [
                                                                        {
                                                                            "description": "mainLevel cell icon",
                                                                            "type": "container",
                                                                            "containerType": "div",
                                                                            "tag": "div",
                                                                            "class": "w-full h-full bg-[#34495e] flex justify-start items-center pl-4",
                                                                            "children": [
                                                                                {
                                                                                    "description": "mainLevel cell icon",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "div",
                                                                                    "text": "search",
                                                                                    "class": "text-white text-13"
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "description": "ag grid documentList a777444blog",
                                                            "type": "element",
                                                            "elementType": "agGrid",
                                                            "listType": "documentList",
                                                            "collection": "a777444blog",
                                                            "class": "ag-theme-balham h-screen min-w-[225px] pt-0",
                                                            "style": "--ag-background-color: #16232d; --ag-odd-row-background-color: #16232d; --ag-cell-horizontal-border: #ff0000; --ag-header-background-color: #16232d; --ag-cell-horizontal-padding: 0px; --ag-borders: none; --ag-row-hover-color: transparent; --ag-selected-row-background-color: transparent; --ag-range-selection-border-color: transparent; --ag-line-height: 1rem;",
                                                            "rowHeight": 67,
                                                            "headerHeight": 0,
                                                            "rowGroupPanelShow": "never",
                                                            "sideBar": null,
                                                            "rowSelection": "single",
                                                            "isRowSelectable": null,
                                                            "detailCellRendererParams": null,
                                                            "rowData": null,
                                                            "query": [
                                                                {},
                                                                {
                                                                    "_id": 1,
                                                                    "title": 1,
                                                                    "date": 1,
                                                                    "teaserTitle": 1,
                                                                    "urlDe": 1
                                                                }
                                                            ],
                                                            "columnDefs": [
                                                                {
                                                                    "field": "generalProjectNumber",
                                                                    "cellRenderer": "rowCell",
                                                                    "width": 240
                                                                }
                                                            ],
                                                            "defaultColDef": {
                                                                "sortable": true,
                                                                "filter": true,
                                                                "flex": 0,
                                                                "floatingFilter": false
                                                            },
                                                            "sideBarDefs": null,
                                                            "cellRenderer": [
                                                                {
                                                                    "id": "rowCell",
                                                                    "type": "container",
                                                                    "class": "relative bg-darkSidebar h-16 hover:bg-gray-600",
                                                                    "selectedClass": "relative bg-gray-600 h-16",
                                                                    "children": [
                                                                        {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "assignedKey": "teaserTitle",
                                                                            "class": "absolute top-2 left-2 text-amber-400 font-bold text-11",
                                                                            "selectedClass": "absolute top-2 left-2 text-amber-400 font-bold text-11"
                                                                        },
                                                                        {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "assignedKey": "title",
                                                                            "class": "absolute bottom-1 left-2 text-white text-10",
                                                                            "selectedClass": "absolute bottom-1 left-2 text-white text-10"
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
                            "deviceID": "mobile"
                        }
                    ]
                },
                {
                    "appPathAssignementID": "a666333jobOffers",
                    "device": [
                        {
                            "deviceID": "desktop",
                            "appViews": [
                                {
                                    "description": "a666333jobOffers parent folder",
                                    "type": "container",
                                    "containerType": "div",
                                    "class": "relative md:w-56 h-screen sm:min-h-full bg-lightSidebar",
                                    "view": [
                                        {
                                            "description": "htmlSnippet header-full",
                                            "type": "htmlSnippet",
                                            "snippetID": "header-full",
                                            "behaviour": "fixTop"
                                        },
                                        {
                                            "description": "htmlSnippet back-button",
                                            "type": "htmlSnippet",
                                            "behaviour": "fixTop",
                                            "snippetID": "back-button"
                                        },
                                        {
                                            "description": "ag grid folderList a666333jobOffers",
                                            "type": "element",
                                            "elementType": "agGrid",
                                            "listType": "folderList",
                                            "collection": "a666333jobOffers",
                                            "class": "ag-theme-balham h-screen w-56 pt-4",
                                            "style": "--ag-background-color: #16232d; --ag-odd-row-background-color: #16232d; --ag-cell-horizontal-border: #ff0000; --ag-header-background-color: #16232d; --ag-cell-horizontal-padding: 0px; --ag-borders: none; --ag-row-hover-color: transparent; --ag-selected-row-background-color: transparent; --ag-range-selection-border-color: transparent; --ag-line-height: 1rem;",
                                            "rowHeight": 82,
                                            "headerHeight": 0,
                                            "rowGroupPanelShow": "never",
                                            "sideBar": null,
                                            "rowSelection": "single",
                                            "isRowSelectable": null,
                                            "detailCellRendererParams": null,
                                            "rowData": null,
                                            "query": [
                                                {},
                                                {
                                                    "_id": 1,
                                                    "title": 1,
                                                    "jobId": 1,
                                                    "company": 1,
                                                    "active": 1,
                                                    "date": 1
                                                }
                                            ],
                                            "columnDefs": [
                                                {
                                                    "field": "eventName",
                                                    "cellRenderer": "rowCell",
                                                    "width": 240
                                                }
                                            ],
                                            "defaultColDef": {
                                                "sortable": true,
                                                "filter": true,
                                                "flex": 0,
                                                "floatingFilter": false
                                            },
                                            "cellRenderer": [
                                                {
                                                    "id": "rowCell",
                                                    "type": "container",
                                                    "class": "relative bg-sidebar h-20 hover:bg-gray-700",
                                                    "children": [
                                                        {
                                                            "type": "element",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "text": "title",
                                                            "class": "absolute top-4 left-3 text-amber-400 text-11"
                                                        },
                                                        {
                                                            "type": "element",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "text": "jobId",
                                                            "class": "absolute top-0 left-3 text-white text-12"
                                                        },
                                                        {
                                                            "type": "element",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "text": "date",
                                                            "class": "absolute bottom-1 left-3 text-white text-10"
                                                        }
                                                    ]
                                                }
                                            ],
                                            "children": [
                                                {
                                                    "selectFirst": true,
                                                    "tag": "aside",
                                                    "class": "relative md:w-56 h-screen sm:min-h-full bg-lightSidebar",
                                                    "style": "",
                                                    "view": [
                                                        {
                                                            "description": "htmlSnippet header-logo",
                                                            "type": "htmlSnippet",
                                                            "behaviour": "fixTop",
                                                            "snippetID": "header-full"
                                                        },
                                                        {
                                                            "description": "htmlSnippet back-button",
                                                            "type": "htmlSnippet",
                                                            "behaviour": "fixTop",
                                                            "snippetID": "back-button"
                                                        },
                                                        {
                                                            "description": "a666333jobOffers single job offer project",
                                                            "appViewLevel": "parent",
                                                            "permission": "",
                                                            "url": "/a666333jobOffers/home",
                                                            "folderCell": [
                                                                {
                                                                    "description": "single job offer project static cell",
                                                                    "type": "container",
                                                                    "tag": "div",
                                                                    "class": "w-full h-20 sm:h-12 bg-darkSidebar hover:bg-gray-500 text-gray-400 text-left hover:text-white border-b-[1px] border-gray-800 transition-colors duration-50 pl-4 pt-2",
                                                                    "style": "",
                                                                    "children": [
                                                                        {
                                                                            "description": "single job offer project static cell",
                                                                            "type": "container",
                                                                            "containerType": "div",
                                                                            "class": "flex justify-start items-center",
                                                                            "children": [
                                                                                {
                                                                                    "description": "mainLevel cell icon",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "span",
                                                                                    "text": "work",
                                                                                    "class": "material-symbols-outlined text-2xl sm:text-lg text-white"
                                                                                },
                                                                                {
                                                                                    "description": "mainLevel cell text",
                                                                                    "type": "element",
                                                                                    "tag": "span",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "text": "job offer",
                                                                                    "class": "text-16 sm:text-12 pl-4"
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ],
                                                            "folderCellSelected": [
                                                                {
                                                                    "description": "single job offer project static cell",
                                                                    "type": "container",
                                                                    "tag": "div",
                                                                    "class": "w-full h-20 sm:h-12 bg-gray-500 text-gray-400 text-left hover:text-white border-b-[1px] border-gray-800 transition-colors duration-50 pl-4 pt-2",
                                                                    "style": "",
                                                                    "children": [
                                                                        {
                                                                            "description": "single job offer project static cell",
                                                                            "type": "container",
                                                                            "containerType": "div",
                                                                            "class": "flex justify-start items-center",
                                                                            "children": [
                                                                                {
                                                                                    "description": "mainLevel cell icon",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "span",
                                                                                    "text": "work",
                                                                                    "class": "material-symbols-outlined text-2xl sm:text-lg text-white"
                                                                                },
                                                                                {
                                                                                    "description": "mainLevel cell text",
                                                                                    "type": "element",
                                                                                    "tag": "span",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "text": "job offer",
                                                                                    "class": "text-16 sm:text-12 pl-4 text-white font-bold"
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "description": "666333 candidates",
                                                            "appViewLevel": "parent",
                                                            "permission": "",
                                                            "url": "/a666333jobOffers/candidates",
                                                            "folderCell": [
                                                                {
                                                                    "description": "candidate static cell",
                                                                    "type": "container",
                                                                    "tag": "div",
                                                                    "class": "w-full h-20 sm:h-12 bg-darkSidebar hover:bg-gray-500 text-gray-400 text-left hover:text-white border-b-[1px] border-gray-800 transition-colors duration-50 pl-4 pt-2",
                                                                    "style": "",
                                                                    "children": [
                                                                        {
                                                                            "description": "candidate static cell",
                                                                            "type": "container",
                                                                            "containerType": "div",
                                                                            "class": "flex justify-start items-center",
                                                                            "children": [
                                                                                {
                                                                                    "description": "mainLevel cell icon",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "span",
                                                                                    "text": "group",
                                                                                    "class": "material-symbols-outlined text-2xl sm:text-lg text-white"
                                                                                },
                                                                                {
                                                                                    "description": "mainLevel cell text",
                                                                                    "type": "element",
                                                                                    "tag": "span",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "text": "candidates",
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
                                                                    "class": "relative md:w-56 h-screen sm:min-h-full bg-lightSidebar",
                                                                    "style": "",
                                                                    "view": [
                                                                        {
                                                                            "description": "htmlSnippet header-full",
                                                                            "type": "htmlSnippet",
                                                                            "behaviour": "fixTop",
                                                                            "snippetID": "header-full"
                                                                        },
                                                                        {
                                                                            "description": "htmlSnippet back-button",
                                                                            "type": "htmlSnippet",
                                                                            "behaviour": "fixTop",
                                                                            "snippetID": "back-button"
                                                                        },
                                                                        {
                                                                            "description": "filter 1",
                                                                            "type": "container",
                                                                            "tag": "div",
                                                                            "class": "w-full h-20 sm:h-10 bg-darkSidebar ",
                                                                            "children": [
                                                                                {
                                                                                    "description": "filter 1",
                                                                                    "type": "container",
                                                                                    "containerType": "div",
                                                                                    "class": "flex justify-center items-center h-full border-b-[1px] border-gray-300",
                                                                                    "children": [
                                                                                        {
                                                                                            "description": "mainLevel cell icon",
                                                                                            "type": "container",
                                                                                            "containerType": "div",
                                                                                            "tag": "a",
                                                                                            "class": "w-1/5 h-full bg-[#98a5a9] hover:bg-gray-300 flex justify-center items-center border-r-[1px] border-gray-300 cursor-pointer",
                                                                                            "children": [
                                                                                                {
                                                                                                    "description": "mainLevel cell icon",
                                                                                                    "type": "element",
                                                                                                    "elementType": "staticHtmlTag",
                                                                                                    "tag": "div",
                                                                                                    "text": "#",
                                                                                                    "class": "text-white text-13"
                                                                                                }
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            "description": "mainLevel cell icon",
                                                                                            "type": "container",
                                                                                            "containerType": "div",
                                                                                            "tag": "div",
                                                                                            "class": "w-2/5 h-full bg-[#7f8b95] hover:bg-gray-300 flex justify-center items-center border-r-[1px] border-gray-300 cursor-pointer",
                                                                                            "children": [
                                                                                                {
                                                                                                    "description": "mainLevel cell icon",
                                                                                                    "type": "element",
                                                                                                    "elementType": "staticHtmlTag",
                                                                                                    "tag": "div",
                                                                                                    "text": "MANUAL",
                                                                                                    "class": "text-white text-12"
                                                                                                }
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            "description": "mainLevel cell icon",
                                                                                            "type": "container",
                                                                                            "containerType": "div",
                                                                                            "tag": "div",
                                                                                            "class": "w-2/5 h-full bg-[#98a5a9] hover:bg-gray-300 flex justify-center items-center border-r-[1px] border-gray-300 cursor-pointer",
                                                                                            "children": [
                                                                                                {
                                                                                                    "description": "mainLevel cell icon",
                                                                                                    "type": "element",
                                                                                                    "elementType": "staticHtmlTag",
                                                                                                    "tag": "div",
                                                                                                    "text": "AUTO",
                                                                                                    "class": "text-white text-12"
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "description": "filter 2",
                                                                            "type": "container",
                                                                            "tag": "div",
                                                                            "class": "w-full h-20 sm:h-10 bg-darkSidebar ",
                                                                            "children": [
                                                                                {
                                                                                    "description": "filter 1",
                                                                                    "type": "container",
                                                                                    "containerType": "div",
                                                                                    "class": "flex justify-center items-center h-full ",
                                                                                    "children": [
                                                                                        {
                                                                                            "description": "mainLevel cell icon",
                                                                                            "type": "container",
                                                                                            "containerType": "div",
                                                                                            "tag": "a",
                                                                                            "class": "w-1/5 h-full bg-[#7f8b95] hover:bg-gray-300 flex justify-center items-center border-r-[1px] border-gray-300 cursor-pointer",
                                                                                            "children": [
                                                                                                {
                                                                                                    "description": "mainLevel cell icon",
                                                                                                    "type": "element",
                                                                                                    "elementType": "staticHtmlTag",
                                                                                                    "tag": "div",
                                                                                                    "text": "#",
                                                                                                    "class": "text-white text-12"
                                                                                                }
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            "description": "mainLevel cell icon",
                                                                                            "type": "container",
                                                                                            "containerType": "div",
                                                                                            "tag": "div",
                                                                                            "class": "w-1/5 h-full bg-[#98a5a9] hover:bg-gray-300 flex justify-center items-center border-r-[1px] border-gray-300 cursor-pointer",
                                                                                            "children": [
                                                                                                {
                                                                                                    "description": "mainLevel cell icon",
                                                                                                    "type": "element",
                                                                                                    "elementType": "staticHtmlTag",
                                                                                                    "tag": "div",
                                                                                                    "text": "DE",
                                                                                                    "class": "text-white text-12"
                                                                                                }
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            "description": "mainLevel cell icon",
                                                                                            "type": "container",
                                                                                            "containerType": "div",
                                                                                            "tag": "div",
                                                                                            "class": "w-1/5 h-full bg-[#98a5a9] hover:bg-gray-300 flex justify-center items-center border-r-[1px] border-gray-300 cursor-pointer",
                                                                                            "children": [
                                                                                                {
                                                                                                    "description": "mainLevel cell icon",
                                                                                                    "type": "element",
                                                                                                    "elementType": "staticHtmlTag",
                                                                                                    "tag": "div",
                                                                                                    "text": "FU",
                                                                                                    "class": "text-white text-12"
                                                                                                }
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            "description": "mainLevel cell icon",
                                                                                            "type": "container",
                                                                                            "containerType": "div",
                                                                                            "tag": "div",
                                                                                            "class": "w-1/5 h-full bg-[#98a5a9] hover:bg-gray-300 flex justify-center items-center border-r-[1px] border-gray-300 cursor-pointer",
                                                                                            "children": [
                                                                                                {
                                                                                                    "description": "mainLevel cell icon",
                                                                                                    "type": "element",
                                                                                                    "elementType": "staticHtmlTag",
                                                                                                    "tag": "div",
                                                                                                    "text": "MO",
                                                                                                    "class": "text-white text-12"
                                                                                                }
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            "description": "mainLevel cell icon",
                                                                                            "type": "container",
                                                                                            "containerType": "div",
                                                                                            "tag": "div",
                                                                                            "class": "w-1/5 h-full bg-[#98a5a9] hover:bg-gray-300 flex justify-center items-center cursor-pointer",
                                                                                            "children": [
                                                                                                {
                                                                                                    "description": "mainLevel cell icon",
                                                                                                    "type": "element",
                                                                                                    "elementType": "staticHtmlTag",
                                                                                                    "tag": "div",
                                                                                                    "text": "AR",
                                                                                                    "class": "text-white text-12"
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "description": "search",
                                                                            "type": "container",
                                                                            "tag": "div",
                                                                            "class": "w-full h-20 sm:h-10 bg-darkSidebar ",
                                                                            "style": "",
                                                                            "children": [
                                                                                {
                                                                                    "description": "filter 2",
                                                                                    "type": "container",
                                                                                    "containerType": "div",
                                                                                    "class": "flex justify-center items-center h-full",
                                                                                    "children": [
                                                                                        {
                                                                                            "description": "mainLevel cell icon",
                                                                                            "type": "container",
                                                                                            "containerType": "div",
                                                                                            "tag": "div",
                                                                                            "class": "w-full h-full bg-amber-700 flex justify-start items-center border-r border-gray-300 pl-4",
                                                                                            "children": [
                                                                                                {
                                                                                                    "description": "mainLevel cell icon",
                                                                                                    "type": "element",
                                                                                                    "elementType": "staticHtmlTag",
                                                                                                    "tag": "div",
                                                                                                    "text": "SEARCH",
                                                                                                    "class": "text-white text-13"
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "description": "ag grid documentList a777444blog",
                                                                            "type": "element",
                                                                            "elementType": "agGrid",
                                                                            "listType": "documentList",
                                                                            "collection": "a666333candidates",
                                                                            "class": "ag-theme-balham h-screen min-w-[225px] pt-0",
                                                                            "style": "--ag-background-color: #16232d; --ag-odd-row-background-color: #16232d; --ag-cell-horizontal-border: #ff0000; --ag-header-background-color: #16232d; --ag-cell-horizontal-padding: 0px; --ag-borders: none; --ag-row-hover-color: transparent; --ag-selected-row-background-color: transparent; --ag-range-selection-border-color: transparent; --ag-line-height: 1rem;",
                                                                            "rowHeight": 67,
                                                                            "headerHeight": 0,
                                                                            "rowGroupPanelShow": "never",
                                                                            "sideBar": null,
                                                                            "rowSelection": "single",
                                                                            "isRowSelectable": null,
                                                                            "detailCellRendererParams": null,
                                                                            "rowData": null,
                                                                            "query": [
                                                                                {
                                                                                    "jobId": "parentFolderListSelection:a666333jobOffers.jobId"
                                                                                },
                                                                                {
                                                                                    "_id": 1,
                                                                                    "firstname": 1,
                                                                                    "lastname": 1,
                                                                                    "jobId": 1,
                                                                                    "timeStamp": 1
                                                                                }
                                                                            ],
                                                                            "columnDefs": [
                                                                                {
                                                                                    "field": "generalProjectNumber",
                                                                                    "cellRenderer": "rowCell",
                                                                                    "width": 240
                                                                                }
                                                                            ],
                                                                            "defaultColDef": {
                                                                                "sortable": true,
                                                                                "filter": true,
                                                                                "flex": 0,
                                                                                "floatingFilter": false
                                                                            },
                                                                            "sideBarDefs": null,
                                                                            "cellRenderer": [
                                                                                {
                                                                                    "id": "rowCell",
                                                                                    "type": "container",
                                                                                    "class": "relative bg-darkSidebar h-16 hover:bg-gray-700",
                                                                                    "selectedClass": "relative bg-gray-700 h-16",
                                                                                    "children": [
                                                                                        {
                                                                                            "type": "element",
                                                                                            "elementType": "staticHtmlTag",
                                                                                            "tag": "div",
                                                                                            "assignedKey": "lastname",
                                                                                            "class": "absolute top-2 left-2 text-amber-400 font-bold text-11",
                                                                                            "selectedClass": "absolute top-2 left-2 text-amber-400 font-bold text-11"
                                                                                        },
                                                                                        {
                                                                                            "type": "element",
                                                                                            "elementType": "staticHtmlTag",
                                                                                            "tag": "div",
                                                                                            "assignedKey": "firstname",
                                                                                            "class": "absolute bottom-0 left-2 text-white text-10",
                                                                                            "selectedClass": "absolute bottom-0 left-2 text-white text-10"
                                                                                        }
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
                            "deviceID": "mobile"
                        }
                    ]
                },
                {
                    "appPathAssignementID": "a888222heoparts",
                    "device": [
                        {
                            "deviceID": "desktop",
                            "appViews": [
                                {
                                    "description": "a888222heoparts parent folder",
                                    "type": "container",
                                    "containerType": "div",
                                    "class": "relative md:w-56 h-auto sm:min-h-screen bg-lightSidebar",
                                    "view": [
                                        {
                                            "description": "htmlSnippet header-full",
                                            "type": "htmlSnippet",
                                            "snippetID": "header-full",
                                            "behaviour": "fixTop"
                                        },
                                        {
                                            "description": "htmlSnippet back-button",
                                            "type": "htmlSnippet",
                                            "behaviour": "fixTop",
                                            "snippetID": "back-button"
                                        },
                                        {
                                            "description": "parts table",
                                            "appViewLevel": "parent",
                                            "permission": "",
                                            "url": "/a888222heoparts/table",
                                            "folderCell": [
                                                {
                                                    "description": "sample Project parent cell",
                                                    "type": "container",
                                                    "tag": "div",
                                                    "class": "w-full h-20 sm:h-12 bg-darkSidebar hover:bg-gray-500 text-gray-400 text-left hover:text-white border-b-[1px] border-gray-800 transition-colors duration-50 pl-4 pt-2",
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
                                                                    "text": "app_registration",
                                                                    "class": "material-symbols-outlined text-2xl sm:text-lg text-white"
                                                                },
                                                                {
                                                                    "description": "mainLevel cell text",
                                                                    "type": "element",
                                                                    "tag": "span",
                                                                    "elementType": "staticHtmlTag",
                                                                    "text": "parts table",
                                                                    "class": "text-16 sm:text-12 pl-4"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "description": "parts document list",
                                            "appViewLevel": "parent",
                                            "permission": "",
                                            "url": "/a888222heoparts/home",
                                            "folderCell": [
                                                {
                                                    "description": "sample Project parent cell",
                                                    "type": "container",
                                                    "tag": "div",
                                                    "class": "w-full h-20 sm:h-12 bg-darkSidebar hover:bg-gray-500 text-gray-400 text-left hover:text-white border-b-[1px] border-gray-800 transition-colors duration-50 pl-4 pt-2",
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
                                                                    "text": "app_registration",
                                                                    "class": "material-symbols-outlined text-2xl sm:text-lg text-white"
                                                                },
                                                                {
                                                                    "description": "mainLevel cell text",
                                                                    "type": "element",
                                                                    "tag": "span",
                                                                    "elementType": "staticHtmlTag",
                                                                    "text": "parts ducument list",
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
                                                    "class": "relative md:w-56 h-screen sm:min-h-full bg-lightSidebar",
                                                    "style": "",
                                                    "view": [
                                                        {
                                                            "description": "htmlSnippet header-full",
                                                            "type": "htmlSnippet",
                                                            "behaviour": "fixTop",
                                                            "snippetID": "header-full"
                                                        },
                                                        {
                                                            "description": "htmlSnippet back-button",
                                                            "type": "htmlSnippet",
                                                            "behaviour": "fixTop",
                                                            "snippetID": "back-button"
                                                        },
                                                        {
                                                            "description": "filter 1",
                                                            "type": "container",
                                                            "tag": "div",
                                                            "class": "w-full h-20 sm:h-10 bg-darkSidebar ",
                                                            "children": [
                                                                {
                                                                    "description": "filter 1",
                                                                    "type": "container",
                                                                    "containerType": "div",
                                                                    "class": "flex justify-center items-center h-full border-b-[1px] border-gray-300",
                                                                    "children": [
                                                                        {
                                                                            "description": "mainLevel cell icon",
                                                                            "type": "container",
                                                                            "containerType": "div",
                                                                            "tag": "a",
                                                                            "class": "w-1/5 h-full bg-[#98a5a9] hover:bg-gray-300 flex justify-center items-center border-r-[1px] border-gray-300 cursor-pointer",
                                                                            "children": [
                                                                                {
                                                                                    "description": "mainLevel cell icon",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "div",
                                                                                    "text": "#",
                                                                                    "class": "text-white text-13"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "description": "mainLevel cell icon",
                                                                            "type": "container",
                                                                            "containerType": "div",
                                                                            "tag": "div",
                                                                            "class": "w-2/5 h-full bg-[#7f8b95] hover:bg-gray-300 flex justify-center items-center border-r-[1px] border-gray-300 cursor-pointer",
                                                                            "children": [
                                                                                {
                                                                                    "description": "mainLevel cell icon",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "div",
                                                                                    "text": "MANUAL",
                                                                                    "class": "text-white text-12"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "description": "mainLevel cell icon",
                                                                            "type": "container",
                                                                            "containerType": "div",
                                                                            "tag": "div",
                                                                            "class": "w-2/5 h-full bg-[#98a5a9] hover:bg-gray-300 flex justify-center items-center cursor-pointer",
                                                                            "children": [
                                                                                {
                                                                                    "description": "mainLevel cell icon",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "div",
                                                                                    "text": "AUTO",
                                                                                    "class": "text-white text-12"
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },

                                                        {
                                                            "description": "filter 2 select",
                                                            "type": "container",
                                                            "tag": "div",
                                                            "class": "w-full bg-darkSidebar ",
                                                            "children": [
                                                                {
                                                                    "description": "listbox select input",
                                                                    "type": "listEvent",
                                                                    "eventType": "filter",
                                                                    "storeArray": "a888222heoparts",
                                                                    "criteria": "oem",
                                                                    "class": "",
                                                                    "elementType": "listboxSelectInput",
                                                                    "value": "value",
                                                                    "listbox": {
                                                                        "listboxButton": {
                                                                            "placeholder": "OEM wählen",
                                                                            "class": "relative flex items-center w-full h-full cursor-pointer bg-white py-3 pl-4 pr-10 text-left",
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
                                                                                            "class": "block truncate sm:text-13"
                                                                                        },
                                                                                        {
                                                                                            "type": "element",
                                                                                            "elementType": "staticHtmlTag",
                                                                                            "tag": "span",
                                                                                            "text": "unfold_more",
                                                                                            "class": "material-symbols-outlined text-[20px] text-gray-800 font-normal pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
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
                                                                                    "value": "all",
                                                                                    "name": "All"
                                                                                },
                                                                                {
                                                                                    "value": "Jaguar",
                                                                                    "name": "Jaguar"
                                                                                },
                                                                                {
                                                                                    "value": "Land Rover",
                                                                                    "name": "Land Rover"
                                                                                },
                                                                                {
                                                                                    "value": "Porsche",
                                                                                    "name": "Porsche"
                                                                                },
                                                                                {
                                                                                    "value": "Audi",
                                                                                    "name": "Audi"
                                                                                },
                                                                                {
                                                                                    "value": "Daimler",
                                                                                    "name": "Daimler"
                                                                                },
                                                                                {
                                                                                    "value": "Mercedes",
                                                                                    "name": "Mercedes"
                                                                                },
                                                                                {
                                                                                    "value": "BMW",
                                                                                    "name": "BMW"
                                                                                },
                                                                                {
                                                                                    "value": "Volvo",
                                                                                    "name": "Volvo "
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "description": "filter 3 select",
                                                            "type": "container",
                                                            "tag": "div",
                                                            "class": "w-full bg-darkSidebar ",
                                                            "children": [
                                                                {
                                                                    "description": "listbox select input",
                                                                    "type": "listEvent",
                                                                    "eventType": "filter",
                                                                    "storeArray": "a888222heoparts",
                                                                    "criteria": "partsCategory",
                                                                    "class": "",
                                                                    "elementType": "listboxSelectInput",
                                                                    "value": "value",
                                                                    "listbox": {
                                                                        "listboxButton": {
                                                                            "placeholder": "Kategorie wählen",
                                                                            "class": "relative flex items-center w-full h-full cursor-pointer bg-gray-200 py-3 pl-4 pr-10 text-left",
                                                                            "assignedKey": "partsCategory.name",
                                                                            "children": [
                                                                                {
                                                                                    "type": "container",
                                                                                    "children": [
                                                                                        {
                                                                                            "type": "element",
                                                                                            "elementType": "staticHtmlTag",
                                                                                            "tag": "span",
                                                                                            "assignedKey": "name",
                                                                                            "class": "block truncate sm:text-13"
                                                                                        },
                                                                                        {
                                                                                            "type": "element",
                                                                                            "elementType": "staticHtmlTag",
                                                                                            "tag": "span",
                                                                                            "text": "unfold_more",
                                                                                            "class": "material-symbols-outlined text-[20px] text-gray-800 font-normal pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
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
                                                                                    "value": "all",
                                                                                    "name": "All"
                                                                                },
                                                                                {
                                                                                    "value": "Fensterschachtleiste",
                                                                                    "name": "Fensterschachtleiste"
                                                                                },
                                                                                {
                                                                                    "value": "Dachzierleiste",
                                                                                    "name": "Dachzierleiste"
                                                                                },
                                                                                {
                                                                                    "value": "Zierleiste Seitenscheibe",
                                                                                    "name": "Zierleiste Seitenscheibe"
                                                                                },
                                                                                {
                                                                                    "value": "Blenden",
                                                                                    "name": "Blenden"
                                                                                },
                                                                                {
                                                                                    "value": "Fenstersteg",
                                                                                    "name": "Fenstersteg"
                                                                                },
                                                                                {
                                                                                    "value": "Fensterführung",
                                                                                    "name": "Fensterführung"
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "description": "search",
                                                            "type": "container",
                                                            "tag": "div",
                                                            "class": "w-full h-20 sm:h-10 bg-[#34495e] ",
                                                            "style": "",
                                                            "children": [
                                                                {
                                                                    "description": "filter 2",
                                                                    "type": "container",
                                                                    "containerType": "div",
                                                                    "class": "flex justify-center items-center h-full",
                                                                    "children": [
                                                                        {
                                                                            "description": "mainLevel cell icon",
                                                                            "type": "container",
                                                                            "containerType": "div",
                                                                            "tag": "div",
                                                                            "class": "w-full h-full bg-[#34495e] flex justify-start items-center pl-4",
                                                                            "children": [
                                                                                {
                                                                                    "description": "mainLevel cell icon",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "div",
                                                                                    "text": "search",
                                                                                    "class": "text-white text-13"
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "description": "ag grid documentList a888222heoparts",
                                                            "type": "element",
                                                            "elementType": "agGrid",
                                                            "listType": "documentList",
                                                            "collection": "a888222heoparts",
                                                            "class": "ag-theme-balham h-screen min-w-[225px] pt-0",
                                                            "style": "--ag-background-color: #16232d; --ag-odd-row-background-color: #16232d; --ag-cell-horizontal-border: #ff0000; --ag-header-background-color: #16232d; --ag-cell-horizontal-padding: 0px; --ag-borders: none; --ag-row-hover-color: transparent; --ag-selected-row-background-color: transparent; --ag-range-selection-border-color: transparent; --ag-line-height: 1rem;",
                                                            "rowHeight": 67,
                                                            "headerHeight": 0,
                                                            "rowGroupPanelShow": "never",
                                                            "sideBar": null,
                                                            "rowSelection": "single",
                                                            "isRowSelectable": null,
                                                            "detailCellRendererParams": null,
                                                            "rowData": null,
                                                            "query": [
                                                                {},
                                                                {
                                                                    "_id": 1,
                                                                    "project": 1,
                                                                    "model": 1,
                                                                    "oem": 1,
                                                                    "articleNumber": 1,
                                                                    "partsCategory": 1
                                                                }
                                                            ],
                                                            "columnDefs": [
                                                                {
                                                                    "field": "generalProjectNumber",
                                                                    "cellRenderer": "rowCell",
                                                                    "width": 240
                                                                }
                                                            ],
                                                            "defaultColDef": {
                                                                "sortable": true,
                                                                "filter": true,
                                                                "flex": 0,
                                                                "floatingFilter": false
                                                            },
                                                            "sideBarDefs": null,
                                                            "cellRenderer": [
                                                                {
                                                                    "id": "rowCell",
                                                                    "type": "container",
                                                                    "class": "relative bg-darkSidebar h-16 hover:bg-gray-700",
                                                                    "selectedClass": "relative bg-gray-700 h-16",
                                                                    "children": [
                                                                        {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "assignedKey": "articleNumber",
                                                                            "class": "absolute top-2 left-2 text-amber-400 font-bold text-11",
                                                                            "selectedClass": "absolute top-2 left-2 text-amber-400 font-bold text-11"
                                                                        },
                                                                        {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "assignedKey": "model",
                                                                            "class": "absolute bottom-0 left-2 text-white text-10",
                                                                            "selectedClass": "absolute bottom-0 left-2 text-white text-10"
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
                            "deviceID": "mobile"
                        }
                    ]
                },
                {
                    "appPathAssignementID": "a999111dwpKontrolle",
                    "device": [
                        {
                            "deviceID": "desktop",
                            "appViews": [
                                {
                                    "type": "container",
                                    "containerType": "div",
                                    "class": "relative md:w-56 h-auto sm:min-h-screen bg-lightSidebar",
                                    "view": [
                                        {
                                            "description": "htmlSnippet header-full",
                                            "type": "htmlSnippet",
                                            "snippetID": "header-full",
                                            "behaviour": "fixTop"
                                        },
                                        {
                                            "description": "htmlSnippet back-button",
                                            "type": "htmlSnippet",
                                            "behaviour": "fixTop",
                                            "snippetID": "back-button"
                                        },
                                        {
                                            "description": "a999111dwpKontrolle",
                                            "appViewLevel": "parent",
                                            "permission": "",
                                            "url": "/a999111dwpKontrolle/home",
                                            "folderCell": [
                                                {
                                                    "description": "dwp kontrolle parent cell",
                                                    "type": "container",
                                                    "tag": "div",
                                                    "class": "w-full h-20 sm:h-12 bg-darkSidebar hover:bg-gray-500 text-gray-400 text-left hover:text-white border-b-[1px] border-gray-800 transition-colors duration-50 pl-4 pt-2",
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
                                                                    "text": "app_registration",
                                                                    "class": "material-symbols-outlined text-2xl sm:text-lg text-white"
                                                                },
                                                                {
                                                                    "description": "mainLevel cell text",
                                                                    "type": "element",
                                                                    "tag": "span",
                                                                    "elementType": "staticHtmlTag",
                                                                    "text": "sample project",
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
                                                    "class": "relative md:w-56 h-screen sm:min-h-full bg-lightSidebar",
                                                    "style": "",
                                                    "view": [
                                                        {
                                                            "description": "htmlSnippet header-full",
                                                            "type": "htmlSnippet",
                                                            "behaviour": "fixTop",
                                                            "snippetID": "header-full"
                                                        },
                                                        {
                                                            "description": "htmlSnippet back-button",
                                                            "type": "htmlSnippet",
                                                            "behaviour": "fixTop",
                                                            "snippetID": "back-button"
                                                        },
                                                        {
                                                            "description": "filter 1",
                                                            "type": "container",
                                                            "tag": "div",
                                                            "class": "w-full h-20 sm:h-10 bg-darkSidebar ",
                                                            "children": [
                                                                {
                                                                    "description": "filter 1",
                                                                    "type": "container",
                                                                    "containerType": "div",
                                                                    "class": "flex justify-center items-center h-full border-b-[1px] border-gray-300",
                                                                    "children": [
                                                                        {
                                                                            "description": "mainLevel cell icon",
                                                                            "type": "container",
                                                                            "containerType": "div",
                                                                            "tag": "a",
                                                                            "class": "w-1/5 h-full bg-[#98a5a9] hover:bg-gray-300 flex justify-center items-center border-r-[1px] border-gray-300 cursor-pointer",
                                                                            "children": [
                                                                                {
                                                                                    "description": "mainLevel cell icon",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "div",
                                                                                    "text": "#",
                                                                                    "class": "text-white text-13"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "description": "mainLevel cell icon",
                                                                            "type": "container",
                                                                            "containerType": "div",
                                                                            "tag": "div",
                                                                            "class": "w-2/5 h-full bg-[#7f8b95] hover:bg-gray-300 flex justify-center items-center border-r-[1px] border-gray-300 cursor-pointer",
                                                                            "children": [
                                                                                {
                                                                                    "description": "mainLevel cell icon",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "div",
                                                                                    "text": "MANUAL",
                                                                                    "class": "text-white text-12"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "description": "mainLevel cell icon",
                                                                            "type": "container",
                                                                            "containerType": "div",
                                                                            "tag": "div",
                                                                            "class": "w-2/5 h-full bg-[#98a5a9] hover:bg-gray-300 flex justify-center items-center cursor-pointer",
                                                                            "children": [
                                                                                {
                                                                                    "description": "mainLevel cell icon",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "div",
                                                                                    "text": "AUTO",
                                                                                    "class": "text-white text-12"
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "description": "filter 2",
                                                            "type": "container",
                                                            "tag": "div",
                                                            "class": "w-full h-20 sm:h-10 bg-darkSidebar ",
                                                            "children": [
                                                                {
                                                                    "description": "filter 1",
                                                                    "type": "container",
                                                                    "containerType": "div",
                                                                    "class": "flex justify-center items-center h-full ",
                                                                    "children": [
                                                                        {
                                                                            "description": "mainLevel cell icon",
                                                                            "type": "container",
                                                                            "containerType": "div",
                                                                            "tag": "a",
                                                                            "class": "w-1/5 h-full bg-[#7f8b95] hover:bg-gray-300 flex justify-center items-center border-r-[1px] border-gray-300 cursor-pointer",
                                                                            "children": [
                                                                                {
                                                                                    "description": "mainLevel cell icon",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "div",
                                                                                    "text": "#",
                                                                                    "class": "text-white text-12"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "description": "mainLevel cell icon",
                                                                            "type": "container",
                                                                            "containerType": "div",
                                                                            "tag": "div",
                                                                            "class": "w-1/5 h-full bg-[#98a5a9] hover:bg-gray-300 flex justify-center items-center border-r-[1px] border-gray-300 cursor-pointer",
                                                                            "children": [
                                                                                {
                                                                                    "description": "mainLevel cell icon",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "div",
                                                                                    "text": "DE",
                                                                                    "class": "text-white text-12"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "description": "mainLevel cell icon",
                                                                            "type": "container",
                                                                            "containerType": "div",
                                                                            "tag": "div",
                                                                            "class": "w-1/5 h-full bg-[#98a5a9] hover:bg-gray-300 flex justify-center items-center border-r-[1px] border-gray-300 cursor-pointer",
                                                                            "children": [
                                                                                {
                                                                                    "description": "mainLevel cell icon",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "div",
                                                                                    "text": "FU",
                                                                                    "class": "text-white text-12"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "description": "mainLevel cell icon",
                                                                            "type": "container",
                                                                            "containerType": "div",
                                                                            "tag": "div",
                                                                            "class": "w-1/5 h-full bg-[#98a5a9] hover:bg-gray-300 flex justify-center items-center border-r-[1px] border-gray-300 cursor-pointer",
                                                                            "children": [
                                                                                {
                                                                                    "description": "mainLevel cell icon",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "div",
                                                                                    "text": "MO",
                                                                                    "class": "text-white text-12"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "description": "mainLevel cell icon",
                                                                            "type": "container",
                                                                            "containerType": "div",
                                                                            "tag": "div",
                                                                            "class": "w-1/5 h-full bg-[#98a5a9] hover:bg-gray-300 flex justify-center items-center cursor-pointer",
                                                                            "children": [
                                                                                {
                                                                                    "description": "mainLevel cell icon",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "div",
                                                                                    "text": "AR",
                                                                                    "class": "text-white text-12"
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "description": "search",
                                                            "type": "container",
                                                            "tag": "div",
                                                            "class": "w-full h-20 sm:h-10 bg-[#34495e] ",
                                                            "style": "",
                                                            "children": [
                                                                {
                                                                    "description": "filter 2",
                                                                    "type": "container",
                                                                    "containerType": "div",
                                                                    "class": "flex justify-center items-center h-full",
                                                                    "children": [
                                                                        {
                                                                            "description": "mainLevel cell icon",
                                                                            "type": "container",
                                                                            "containerType": "div",
                                                                            "tag": "div",
                                                                            "class": "w-full h-full bg-[#34495e] flex justify-start items-center pl-4",
                                                                            "children": [
                                                                                {
                                                                                    "description": "mainLevel cell icon",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "div",
                                                                                    "text": "search",
                                                                                    "class": "text-white text-13"
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "description": "ag grid documentList 534325SampleProject",
                                                            "type": "element",
                                                            "selectFirst": true,
                                                            "elementType": "agGrid",
                                                            "listType": "documentList",
                                                            "collection": "a999111dwpKontrolle",
                                                            "class": "ag-theme-balham h-screen min-w-[200px] pt-0",
                                                            "style": "--ag-background-color: #16232d; --ag-odd-row-background-color: #16232d; --ag-cell-horizontal-border: #ff0000; --ag-header-background-color: #16232d; --ag-cell-horizontal-padding: 0px; --ag-borders: none; --ag-row-hover-color: transparent; --ag-selected-row-background-color: transparent; --ag-range-selection-border-color: transparent; --ag-line-height: 1rem;",
                                                            "rowHeight": 67,
                                                            "headerHeight": 0,
                                                            "rowGroupPanelShow": "never",
                                                            "sideBar": null,
                                                            "rowSelection": "single",
                                                            "isRowSelectable": null,
                                                            "detailCellRendererParams": null,
                                                            "rowData": null,
                                                            "query": [
                                                                {},
                                                                {
                                                                    "_id": 1,
                                                                    "fa": 1,
                                                                    "articleNumber": 1,
                                                                    "partCategory": 1
                                                                }
                                                            ],
                                                            "columnDefs": [
                                                                {
                                                                    "field": "generalProjectNumber",
                                                                    "cellRenderer": "rowCell",
                                                                    "width": 240
                                                                }
                                                            ],
                                                            "defaultColDef": {
                                                                "sortable": true,
                                                                "filter": true,
                                                                "flex": 0,
                                                                "floatingFilter": false
                                                            },
                                                            "sideBarDefs": null,
                                                            "cellRenderer": [
                                                                {
                                                                    "id": "rowCell",
                                                                    "type": "container",
                                                                    "class": "relative bg-sidebar h-16 hover:bg-gray-700",
                                                                    "selectedClass": "relative bg-gray-500 h-16",
                                                                    "children": [
                                                                        {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "assignedKey": "fa",
                                                                            "class": "absolute top-2 left-2 text-amber-400 font-bold text-11",
                                                                            "selectedClass": "absolute top-2 left-2 text-amber-400 font-bold text-11"
                                                                        },
                                                                        {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "assignedKey": "articleNumber",
                                                                            "class": "absolute bottom-1 left-2 text-white text-10",
                                                                            "selectedClass": "absolute bottom-1 left-2 text-white text-10"
                                                                        },
                                                                        {
                                                                            "type": "element",
                                                                            "elementType": "staticHtmlTag",
                                                                            "tag": "div",
                                                                            "assignedKey": "partCategory",
                                                                            "class": "absolute bottom-1 right-6 text-white font-bold text-10",
                                                                            "selectedClass": "absolute bottom-1 right-6 text-white font-bold text-10"
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "type": "documentListLoop",
                                                            "query": [
                                                                {},
                                                                {
                                                                    "_id": 1,
                                                                    "fa": 1,
                                                                    "articleNumber": 1,
                                                                    "partCategory": 1
                                                                }
                                                            ],
                                                            "selectFirst": false,
                                                            "class": "",
                                                            "cells": [
                                                                {
                                                                    "description": "project cell normal",
                                                                    "buttonStatusID": "normal",
                                                                    "type": "container",
                                                                    "class": "relative h-20 w-full bg-darkSidebar hover:bg-gray-500 border-b-2 border-gray-900 cursor-pointer",
                                                                    "style": "",
                                                                    "children": [
                                                                        {
                                                                            "description": "project cell div elements",
                                                                            "type": "container",
                                                                            "class": "absolute top-2 left-4 text-12 font-bold text-[#ffa500] hover:text-white",
                                                                            "style": "",
                                                                            "children": [
                                                                                {
                                                                                    "description": "project number",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "span",
                                                                                    "class": "font-bold",
                                                                                    "style": "",
                                                                                    "assignedKey": "fa"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "description": "project cell div elements",
                                                                            "type": "container",
                                                                            "class": "absolute top-8 left-4 text-11 font-bold text-gray-200",
                                                                            "style": "",
                                                                            "children": [
                                                                                {
                                                                                    "description": "project number",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "span",
                                                                                    "class": "font-normal",
                                                                                    "style": "",
                                                                                    "assignedKey": "articleNumber"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "description": "project cell div elements",
                                                                            "type": "container",
                                                                            "class": "absolute top-12 left-4 text-12 font-bold text-white",
                                                                            "style": "",
                                                                            "children": [
                                                                                {
                                                                                    "description": "project number",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "span",
                                                                                    "class": "font-normal",
                                                                                    "style": "",
                                                                                    "assignedKey": "partsCategory"
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "description": "project cell active",
                                                                    "buttonStatusID": "active",
                                                                    "type": "container",
                                                                    "class": "relative h-20 w-full bg-gray-500 border-b-2 border-gray-900 cursor-pointer",
                                                                    "style": "",
                                                                    "children": [
                                                                        {
                                                                            "description": "project cell div elements",
                                                                            "type": "container",
                                                                            "class": "absolute top-2 left-4 text-12 font-bold text-[#ffa500] hover:text-white",
                                                                            "style": "",
                                                                            "children": [
                                                                                {
                                                                                    "description": "project number",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "span",
                                                                                    "class": "font-bold",
                                                                                    "style": "",
                                                                                    "assignedKey": "fa"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "description": "project cell div elements",
                                                                            "type": "container",
                                                                            "class": "absolute top-8 left-4 text-11 font-bold text-gray-300",
                                                                            "style": "",
                                                                            "children": [
                                                                                {
                                                                                    "description": "project number",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "span",
                                                                                    "class": "font-normal",
                                                                                    "style": "",
                                                                                    "assignedKey": "articleNumber"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "description": "project cell div elements",
                                                                            "type": "container",
                                                                            "class": "absolute top-12 left-4 text-12 font-bold text-white",
                                                                            "style": "",
                                                                            "children": [
                                                                                {
                                                                                    "description": "project number",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "span",
                                                                                    "class": "font-normal",
                                                                                    "style": "",
                                                                                    "assignedKey": "partsCategory"
                                                                                }
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
                            "deviceID": "mobile"
                        }
                    ]
                },
                {
                    "appPathAssignementID": "a999112anlageNasslack",
                    "device": [
                        {
                            "deviceID": "desktop",
                            "appViews": [
                                {
                                    "description": "a999112anlageNasslack parent folder",
                                    "type": "container",
                                    "containerType": "div",
                                    "class": "relative md:w-56 h-auto sm:min-h-screen bg-lightSidebar",
                                    "view": [
                                        {
                                            "description": "htmlSnippet header-full",
                                            "type": "htmlSnippet",
                                            "snippetID": "header-full",
                                            "behaviour": "fixTop"
                                        },
                                        {
                                            "description": "htmlSnippet back-button",
                                            "type": "htmlSnippet",
                                            "behaviour": "fixTop",
                                            "snippetID": "back-button"
                                        },
                                        {
                                            "description": "a999112anlageNasslack table",
                                            "appViewLevel": "parent",
                                            "permission": "",
                                            "url": "/a999112anlageNasslack/table",
                                            "folderCell": [
                                                {
                                                    "description": "parent cell",
                                                    "type": "container",
                                                    "tag": "div",
                                                    "class": "w-full h-20 sm:h-12 bg-darkSidebar hover:bg-gray-500 text-gray-400 text-left hover:text-white border-b-[1px] border-gray-800 transition-colors duration-50 pl-4 pt-2",
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
                                                                    "text": "app_registration",
                                                                    "class": "material-symbols-outlined text-2xl sm:text-lg text-white"
                                                                },
                                                                {
                                                                    "description": "mainLevel cell text",
                                                                    "type": "element",
                                                                    "tag": "span",
                                                                    "elementType": "staticHtmlTag",
                                                                    "text": "Nassanlage",
                                                                    "class": "text-16 sm:text-12 pl-4"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
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
                            "deviceID": "mobile"
                        }
                    ]
                },
                {
                    "appPathAssignementID": "a999113kontrolle",
                    "device": [
                        {
                            "deviceID": "desktop",
                            "appViews": [
                                {
                                    "description": "a999113kontrolle parent folder",
                                    "type": "container",
                                    "containerType": "div",
                                    "class": "relative md:w-56 h-auto sm:min-h-screen bg-lightSidebar",
                                    "view": [
                                        {
                                            "description": "htmlSnippet header-full",
                                            "type": "htmlSnippet",
                                            "snippetID": "header-full",
                                            "behaviour": "fixTop"
                                        },
                                        {
                                            "description": "htmlSnippet back-button",
                                            "type": "htmlSnippet",
                                            "behaviour": "fixTop",
                                            "snippetID": "back-button"
                                        },
                                        {
                                            "description": "a999113kontrolle table",
                                            "appViewLevel": "parent",
                                            "permission": "",
                                            "url": "/a999113kontrolle/table",
                                            "folderCell": [
                                                {
                                                    "description": "parent cell",
                                                    "type": "container",
                                                    "tag": "div",
                                                    "class": "w-full h-20 sm:h-12 bg-darkSidebar hover:bg-gray-500 text-gray-400 text-left hover:text-white border-b-[1px] border-gray-800 transition-colors duration-50 pl-4 pt-2",
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
                                                                    "text": "app_registration",
                                                                    "class": "material-symbols-outlined text-2xl sm:text-lg text-white"
                                                                },
                                                                {
                                                                    "description": "mainLevel cell text",
                                                                    "type": "element",
                                                                    "tag": "span",
                                                                    "elementType": "staticHtmlTag",
                                                                    "text": "Nassanlage",
                                                                    "class": "text-16 sm:text-12 pl-4"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
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
                            "deviceID": "mobile"
                        }
                    ]
                },
                {
                    "appPathAssignementID": "a999114events",
                    "device": [
                        {
                            "deviceID": "desktop",
                            "appViews": [
                                {
                                    "description": "a999114events parent folder",
                                    "type": "container",
                                    "containerType": "div",
                                    "class": "relative w-full md:w-56 h-auto sm:min-h-screen bg-lightSidebar",
                                    "view": [
                                        {
                                            "description": "htmlSnippet header-full",
                                            "type": "htmlSnippet",
                                            "snippetID": "header-full",
                                            "behaviour": "fixTop"
                                        },
                                        {
                                            "description": "htmlSnippet back-button",
                                            "type": "htmlSnippet",
                                            "behaviour": "fixTop",
                                            "snippetID": "back-button"
                                        },
                                        {
                                            "description": "ag grid folderList events",
                                            "type": "element",
                                            "elementType": "agGrid",
                                            "listType": "folderList",
                                            "collection": "a999114events",
                                            "class": "ag-theme-balham h-screen w-screen md:w-56 pt-4",
                                            "style": "--ag-background-color: #16232d; --ag-odd-row-background-color: #16232d; --ag-cell-horizontal-border: #ff0000; --ag-header-background-color: #16232d; --ag-cell-horizontal-padding: 0px; --ag-borders: none; --ag-row-hover-color: transparent; --ag-selected-row-background-color: transparent; --ag-range-selection-border-color: transparent; --ag-line-height: 1rem;",
                                            "rowHeight": 82,
                                            "headerHeight": 0,
                                            "rowGroupPanelShow": "never",
                                            "sideBar": null,
                                            "rowSelection": "single",
                                            "isRowSelectable": null,
                                            "detailCellRendererParams": null,
                                            "rowData": null,
                                            "query": [
                                                {},
                                                {
                                                    "_id": 1,
                                                    "eventId": 1,
                                                    "name": 1,
                                                    "eventType": 1,
                                                    "startDate": 1,
                                                    "documentLock": 1
                                                }
                                            ],
                                            "columnDefs": [
                                                {
                                                    "field": "eventName",
                                                    "cellRenderer": "rowCell",
                                                    "width": 240
                                                }
                                            ],
                                            "defaultColDef": {
                                                "sortable": true,
                                                "filter": true,
                                                "flex": 0,
                                                "floatingFilter": false
                                            },
                                            "cellRenderer": [
                                                {
                                                    "id": "rowCell",
                                                    "type": "container",
                                                    "class": "relative bg-sidebar h-20 hover:bg-gray-700",
                                                    "children": [
                                                        {
                                                            "type": "element",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "text": "name",
                                                            "class": "absolute top-4 left-3 text-amber-400 text-11"
                                                        },
                                                        {
                                                            "type": "element",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "text": "eventType",
                                                            "class": "absolute bottom-1 left-3 text-white text-10"
                                                        },
                                                        {
                                                            "type": "element",
                                                            "elementType": "staticHtmlTag",
                                                            "tag": "div",
                                                            "text": "startDate",
                                                            "class": "absolute bottom-1 right-6 text-white text-10"
                                                        }
                                                    ]
                                                }
                                            ],
                                            "children": [
                                                {
                                                    "tag": "aside",
                                                    "class": "relative w-full md:w-56 h-screen sm:min-h-full bg-lightSidebar",
                                                    "style": "",
                                                    "view": [
                                                        {
                                                            "description": "htmlSnippet header-logo",
                                                            "type": "htmlSnippet",
                                                            "behaviour": "fixTop",
                                                            "snippetID": "header-full"
                                                        },
                                                        {
                                                            "description": "htmlSnippet back-button",
                                                            "type": "htmlSnippet",
                                                            "behaviour": "fixTop",
                                                            "snippetID": "back-button"
                                                        },
                                                        {
                                                            "description": "a999114events tradeshow project",
                                                            "appViewLevel": "parent",
                                                            "permission": "",
                                                            "url": "/a999114events/home",
                                                            "folderCell": [
                                                                {
                                                                    "description": "single job offer project static cell",
                                                                    "type": "container",
                                                                    "tag": "div",
                                                                    "class": "w-full h-20 sm:h-12 bg-darkSidebar hover:bg-gray-500 text-gray-400 text-left hover:text-white border-b-[1px] border-gray-800 transition-colors duration-50 pl-4 pt-2",
                                                                    "style": "",
                                                                    "children": [
                                                                        {
                                                                            "description": "single job offer project static cell",
                                                                            "type": "container",
                                                                            "containerType": "div",
                                                                            "class": "flex justify-start items-center",
                                                                            "children": [
                                                                                {
                                                                                    "description": "mainLevel cell icon",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "span",
                                                                                    "text": "work",
                                                                                    "class": "material-symbols-outlined text-2xl sm:text-lg text-white"
                                                                                },
                                                                                {
                                                                                    "description": "mainLevel cell text",
                                                                                    "type": "element",
                                                                                    "tag": "span",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "text": "tradeshow",
                                                                                    "class": "text-16 sm:text-12 pl-4"
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ],
                                                            "folderCellSelected": [
                                                                {
                                                                    "description": "single job offer project static cell",
                                                                    "type": "container",
                                                                    "tag": "div",
                                                                    "class": "w-full h-20 sm:h-12 bg-gray-500 text-gray-400 text-left hover:text-white border-b-[1px] border-gray-800 transition-colors duration-50 pl-4 pt-2",
                                                                    "style": "",
                                                                    "children": [
                                                                        {
                                                                            "description": "single job offer project static cell",
                                                                            "type": "container",
                                                                            "containerType": "div",
                                                                            "class": "flex justify-start items-center",
                                                                            "children": [
                                                                                {
                                                                                    "description": "mainLevel cell icon",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "span",
                                                                                    "text": "work",
                                                                                    "class": "material-symbols-outlined text-2xl sm:text-lg text-white"
                                                                                },
                                                                                {
                                                                                    "description": "mainLevel cell text",
                                                                                    "type": "element",
                                                                                    "tag": "span",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "text": "tradeshow",
                                                                                    "class": "text-16 sm:text-12 pl-4 text-white font-bold"
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "description": "a999114exhibitor ag grid table",
                                                            "appViewLevel": "parent",
                                                            "permission": "",
                                                            "url": "/a999114events/exhibitor",
                                                            "folderCell": [
                                                                {
                                                                    "description": "exhibitor parent cell",
                                                                    "type": "container",
                                                                    "tag": "div",
                                                                    "class": "w-full h-20 sm:h-12 bg-darkSidebar hover:bg-gray-500 text-gray-400 text-left hover:text-white border-b-[1px] border-gray-800 transition-colors duration-50 pl-4 pt-2",
                                                                    "style": "",
                                                                    "children": [
                                                                        {
                                                                            "description": "mainLevel cell container",
                                                                            "type": "container",
                                                                            "containerType": "div",
                                                                            "class": "flex justify-start items-center ",
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
                                                                                    "text": "Aussteller",
                                                                                    "class": "text-16 sm:text-12 pl-4"
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ],
                                                            "folderCellSelected": [
                                                                {
                                                                    "description": "exhibitor parent cell",
                                                                    "type": "container",
                                                                    "tag": "div",
                                                                    "class": "w-full h-20 sm:h-12 bg-gray-500 text-white text-left  border-b-[1px] border-gray-800 transition-colors duration-50 pl-4 pt-2",
                                                                    "style": "",
                                                                    "children": [
                                                                        {
                                                                            "description": "mainLevel cell container",
                                                                            "type": "container",
                                                                            "containerType": "div",
                                                                            "class": "flex justify-start items-center ",
                                                                            "children": [
                                                                                {
                                                                                    "description": "mainLevel cell icon",
                                                                                    "type": "element",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "tag": "span",
                                                                                    "text": "app_registration",
                                                                                    "class": "material-symbols-outlined text-2xl sm:text-lg text-white"
                                                                                },
                                                                                {
                                                                                    "description": "mainLevel cell text",
                                                                                    "type": "element",
                                                                                    "tag": "span",
                                                                                    "elementType": "staticHtmlTag",
                                                                                    "text": "Aussteller",
                                                                                    "class": "text-16 sm:text-12 pl-4"
                                                                                }
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
                            "deviceID": "mobile"
                        }
                    ]
                }
            ]
        }
    )
    return { jsonLocal: jsonStructure.value }
}
