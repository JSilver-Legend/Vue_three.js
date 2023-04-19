<template>
  <spinner v-if="authState == 'signedIn'"></spinner>
  <template v-else-if="authState !== 'signedIn' && componentContainer">
    <form>
      <div v-motion class="" :initial="{ opacity: 0, x: 0 }"
        :enter="{ opacity: 1, x: 0, transition: { delay: 0, duration: 500, type: 'keyframes', ease: 'easeIn', }, }">
        <container :element="componentContainer" :entityData="entityData" />
      </div>
    </form>
  </template>
</template>

<script setup>
import spinner from "@/platform/platformComponents/spinner.vue"
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers"
import { CognitoIdentityProviderClient, AdminUpdateUserAttributesCommand } from "@aws-sdk/client-cognito-identity-provider"
import axios from 'axios'
import { ref, provide, computed, onBeforeUnmount, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/store/auth'
import { Auth } from 'aws-amplify'
import config from '@/config.json'
import _ from "lodash"
import emitter from '@/services/emitter'

import { useDynamicAppsStore } from "@/store/dynamicApps"

const dynamicAppsStore = useDynamicAppsStore()

const componentContainersLocal = {
  "markup": [
    {
      "screenType": "signIn",
      "description": "login screen container",
      "type": "container",
      "class": "h-screen sm:min-h-screen bg-authFullBg flex flex-col justify-center ",
      "children": [
        {
          "description": "signIn email/password step 1",
          "type": "container",
          "class": "sm:mt-8 sm:mx-auto w-full sm:w-96 h-full sm:h-1/2",
          "children": [
            {
              "description": "sign window card bg",
              "type": "container",
              "class": "bg-authBg h-full",
              "children": [
                {
                  "description": "logo image div row 1",
                  "type": "container",
                  "class": "px-0 h-1/4 sm:h-1/4 sm:px-10 pt-6",
                  "children": [
                    {
                      "description": "logo image",
                      "type": "navEvent",
                      "eventType": "resetNav",
                      "elementType": "staticHtmlTag",
                      "tag": "img",
                      "src": "static/img/dxp_bearlin_black_01.png",
                      "class": "cursor-pointer mx-auto pt-2 w-48 sm:w-32"
                    }
                  ]
                },
                {
                  "description": "willkommen row 2",
                  "type": "container",
                  "class": "bg-authBg px-4  sm:px-4",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "mt-6 w-full text-center",
                      "children": [
                        {
                          "description": "logo image",
                          "type": "element",
                          "elementType": "staticHtmlTag",
                          "tag": "span",
                          "text": "Willkommen",
                          "class": ""
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "type in description row 3",
                  "type": "container",
                  "class": "bg-authBg py-4 px-4  sm:px-6",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "w-full text-12 text-center",
                      "children": [
                        {
                          "description": "logo image",
                          "type": "element",
                          "elementType": "staticHtmlTag",
                          "tag": "span",
                          "text": "Bitte melden Sie sich mit Ihren Zugangsdaten an",
                          "class": ""
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "email input in row 4",
                  "type": "container",
                  "class": "bg-authBg pt-8 px-4  sm:pt-4",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "mt-0 w-full text-12 text-center",
                      "children": [
                        {
                          "type": "element",
                          "elementType": "textInput",
                          "key": "email",
                          "placeholder": "Email address",
                          "textInputType": "email",
                          "autofocus": "true",
                          "class": "appearance-none block w-full px-3 py-2 border border-gray-300  placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "password input in row 5",
                  "type": "container",
                  "class": "bg-authBg mt-4  px-4  sm:px-4",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "mt-0 w-full text-12 text-center",
                      "children": [
                        {
                          "type": "element",
                          "elementType": "textInput",
                          "textInputType": "password",
                          "placeholder": "Password",
                          "key": "password",
                          "class": "appearance-none block w-full px-3 py-2 border border-gray-300  placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "sign In button in row 6",
                  "type": "container",
                  "class": "bg-authBg mt-4 pb-8 px-4  sm:px-4",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "mt-0 w-full text-12 text-center",
                      "children": [
                        {
                          "type": "authEvent",
                          "eventType": "signIn",
                          "elementType": "staticHtmlTag",
                          "tag": "span",
                          "text": "SIGN IN",
                          "class": "block text-red-500 bg-transparent border border-solid border-red-500 hover:bg-primary hover:text-white active:bg-red-600 text-center font-bold uppercase text-sm mt-6 px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 cursor-pointer"
                        }
                      ]
                    }
                  ]
                },
               /* {
                  "description": "Sign Up in description row 7",
                  "type": "container",
                  "class": "bg-authBg py-4 px-4  sm:px-6",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "w-full text-12 text-center",
                      "children": [
                        {
                          "description": "logo image",
                          "type": "element",
                          "elementType": "staticHtmlTag",
                          "tag": "span",
                          "text": "New to dnamy?",
                          "class": ""
                        },
                        {
                          "description": "logo image",
                          "type": "element",
                          "elementType": "staticHtmlTag",
                          "tag": "a",
                          "text": "Sign Up",
                          "url": "/signup",
                          "class": "pl-2 text-primary hover:underline"
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "password reset in description row 8",
                  "type": "container",
                  "class": "bg-authBg py-1 px-4 pb-5  sm:px-6",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "w-full text-12 text-center",
                      "children": [
                        {
                          "description": "logo image",
                          "type": "element",
                          "elementType": "staticHtmlTag",
                          "tag": "a",
                          "url": "/password-reset",
                          "text": "Password reset?",
                          "class": "pl-2 mb-4 hover:underline hover:text-red-300"
                        }
                      ]
                    }
                  ]
                }*/
              ]
            }
          ]
        }
      ]
    },
    {
      "screenType": "signInPasswordless",
      "description": "login screen container",
      "type": "container",
      "class": "min-h-screen bg-authFullBg flex flex-col justify-center",
      "children": [
        {
          "description": "signIn email/password step 1",
          "type": "container",
          "class": "mt-8 sm:mx-auto w-full sm:w-72 min-h-[600px] bg-authBg",
          "children": [
            {
              "description": "sign window card bg",
              "type": "container",
              "class": "",
              "children": [
                {
                  "description": "logo image div row 1",
                  "type": "container",
                  "class": "py-8 px-0 h-1/3 sm:px-10",
                  "children": [
                    {
                      "description": "logo image",
                      "type": "element",
                      "elementType": "staticHtmlTag",
                      "tag": "img",
                      "src": "static/img/logo_black.png",
                      "class": "cursor-pointer mx-auto pt-2 w-32 hidden md:block"
                    }
                  ]
                },
                {
                  "description": "willkommen row 2",
                  "type": "container",
                  "class": "bg-authBg py-8 px-4  sm:px-4",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "mt-6 w-full text-center",
                      "children": [
                        {
                          "description": "logo image",
                          "type": "element",
                          "elementType": "staticHtmlTag",
                          "tag": "span",
                          "text": "Willkommen",
                          "class": ""
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "type in description row 3",
                  "type": "container",
                  "class": "bg-authBg py-4 px-4  sm:px-6",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "w-full text-12 text-center",
                      "children": [
                        {
                          "description": "logo image",
                          "type": "element",
                          "elementType": "staticHtmlTag",
                          "tag": "span",
                          "text": "Bitte melden Sie sich mit Ihren Zugangsdaten an",
                          "class": ""
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "email input in row 4",
                  "type": "container",
                  "class": "bg-authBg pt-8 px-4  sm:pt-4",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "mt-0 w-full text-12 text-center",
                      "children": [
                        {
                          "type": "element",
                          "elementType": "textInput",
                          "key": "email",
                          "placeholder": "Email address",
                          "textInputType": "email",
                          "autofocus": "true",
                          "class": "appearance-none block w-full px-3 py-2 border border-gray-300  placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "phone input in row 4",
                  "type": "container",
                  "class": "bg-authBg pt-8 px-4  sm:pt-4",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "mt-0 w-full text-12 text-center",
                      "children": [
                        {
                          "type": "element",
                          "elementType": "textInput",
                          "key": "phoneNumber",
                          "placeholder": "mobile number",
                          "textInputType": "phone",
                          "autofocus": "false",
                          "class": "appearance-none block w-full px-3 py-2 border border-gray-300  placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "sign In button in row 6",
                  "type": "container",
                  "class": "bg-authBg mt-4 pb-8 px-4  sm:px-4",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "mt-0 w-full text-12 text-center",
                      "children": [
                        {
                          "type": "authEvent",
                          "eventType": "signInPasswordless",
                          "elementType": "staticHtmlTag",
                          "tag": "span",
                          "text": "SIGN IN",
                          "class": "block text-red-500 bg-transparent border border-solid border-red-500 hover:bg-primary hover:text-white active:bg-red-600 text-center font-bold uppercase text-sm mt-6 px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 cursor-pointer"
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "Sign Up in description row 7",
                  "type": "container",
                  "class": "bg-authBg py-4 px-4  sm:px-6",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "w-full text-12 text-center",
                      "children": [
                        {
                          "description": "logo image",
                          "type": "element",
                          "elementType": "staticHtmlTag",
                          "tag": "span",
                          "text": "New to dnamy?",
                          "class": ""
                        },
                        {
                          "description": "logo image",
                          "type": "element",
                          "elementType": "staticHtmlTag",
                          "tag": "a",
                          "text": "Sign Up",
                          "url": "/signup",
                          "class": "pl-2 text-primary hover:underline"
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "password reset in description row 8",
                  "type": "container",
                  "class": "bg-authBg py-1 px-4 pb-5  sm:px-6",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "w-full text-12 text-center",
                      "children": [
                        {
                          "description": "logo image",
                          "type": "element",
                          "elementType": "staticHtmlTag",
                          "tag": "a",
                          "url": "/password-reset",
                          "text": "Password reset?",
                          "class": "pl-2 mb-4 hover:underline hover:text-red-300"
                        }
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
      "screenType": "signInPasswordlessConfirmation",
      "description": "signInPasswordlessConfirmation screen container",
      "type": "container",
      "class": "min-h-screen bg-authFullBg flex flex-col justify-center",
      "children": [
        {
          "description": "signIn email/password step 1",
          "type": "container",
          "class": "mt-8 sm:mx-auto w-full sm:w-72 min-h-[600px] bg-authBg",
          "children": [
            {
              "description": "sign window card bg",
              "type": "container",
              "class": "",
              "children": [
                {
                  "description": "logo image div row 1",
                  "type": "container",
                  "class": "py-8 px-0 h-1/3 sm:px-10",
                  "children": [
                    {
                      "description": "logo image",
                      "type": "element",
                      "elementType": "staticHtmlTag",
                      "tag": "img",
                      "src": "static/img/logo_black.png",
                      "class": "cursor-pointer mx-auto pt-2 w-32 hidden md:block"
                    }
                  ]
                },
                {
                  "description": "willkommen row 2",
                  "type": "container",
                  "class": "bg-authBg py-8 px-4  sm:px-4",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "mt-6 w-full text-center",
                      "children": [
                        {
                          "description": "logo image",
                          "type": "element",
                          "elementType": "staticHtmlTag",
                          "tag": "span",
                          "text": "Sie erhalten einen Magic-Link per email zum direkten Einloggen",
                          "class": ""
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "type in description row 3",
                  "type": "container",
                  "class": "bg-authBg py-4 px-4  sm:px-6",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "w-full text-12 text-center",
                      "children": [
                        {
                          "description": "logo image",
                          "type": "element",
                          "elementType": "staticHtmlTag",
                          "tag": "span",
                          "text": "Please check your email for magic link :)",
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
    },
    {
      "screenType": "changePassword",
      "description": "login screen container",
      "type": "container",
      "class": "h-screen sm:min-h-screen bg-authFullBg flex flex-col justify-center ",
      "children": [
        {
          "description": "signIn TOTP step 3",
          "type": "container",
          "class": "sm:mt-8 sm:mx-auto w-full sm:w-96 h-full sm:h-1/2",
          "children": [
            {
              "description": "sign window card bg",
              "type": "container",
              "class": "bg-authBg h-full",
              "children": [
                {
                  "description": "logo image div row 1",
                  "type": "container",
                  "class": "py-8 px-0 h-1/3 sm:px-10",
                  "children": [
                    {
                      "description": "logo image",
                      "type": "navEvent",
                      "eventType": "resetNav",
                      "elementType": "staticHtmlTag",
                      "tag": "img",
                      "src": "static/img/logo_black.png",
                      "class": "cursor-pointer mx-auto pt-2 w-32 hidden md:block"
                    }
                  ]
                },
                {
                  "description": "type in description row 3",
                  "type": "container",
                  "class": "bg-authBg py-4 px-4  sm:px-6",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "w-full text-12 text-center",
                      "children": [
                        {
                          "description": "logo image",
                          "type": "element",
                          "elementType": "staticHtmlTag",
                          "tag": "span",
                          "text": "Bitte neues Passwort für die zukünftigen Anmeldungen eingeben",
                          "class": ""
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "new password input in row 4",
                  "type": "container",
                  "class": "bg-authBg mt-4  px-4  sm:px-4",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "mt-0 w-full text-12 text-left",
                      "children": [
                        {
                          "type": "element",
                          "elementType": "staticHtmlTag",
                          "tag": "label",
                          "text": "New password",
                          "class": "appearance-none block w-full py-2 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        },
                        {
                          "type": "element",
                          "elementType": "textInput",
                          "textInputType": "password",
                          "placeholder": "Password",
                          "triggerEventType": "keyup",
                          "key": "password",
                          "class": "appearance-none block w-full px-3 py-2 border border-gray-300  placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "TOTP input in row 4",
                  "type": "container",
                  "class": "bg-authBg mt-4  px-4  sm:px-4",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "mt-0 w-full text-12 text-left",
                      "children": [
                        {
                          "type": "element",
                          "elementType": "staticHtmlTag",
                          "tag": "label",
                          "text": "Enter new password again",
                          "class": "appearance-none block w-full py-2 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        },
                        {
                          "type": "element",
                          "elementType": "textInput",
                          "key": "confirmPassword",
                          "textInputType": "password",
                          "placeholder": "Confirm password",
                          "autofocus": "false",
                          "triggerEventType": "keyup",
                          "class": "appearance-none block w-full px-3 py-2 border border-gray-300  placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "TOTP input in row 4",
                  "type": "container",
                  "class": "bg-authBg mt-4  px-4  sm:px-4",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "mt-0 w-full text-12 text-left",
                      "children": [
                        {
                          "type": "element",
                          "elementType": "staticHtmlTag",
                          "tag": "label",
                          "text": "",
                          "assignedKey": "lowerCaseLetterPasswordHint",
                          "class": "block w-full placeholder-red-400"
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "TOTP input in row 4",
                  "type": "container",
                  "class": "bg-authBg px-4  sm:px-4",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "mt-0 w-full text-12 text-left",
                      "children": [
                        {
                          "type": "element",
                          "elementType": "staticHtmlTag",
                          "tag": "label",
                          "text": "",
                          "assignedKey": "upperCaseLetterPasswordHint",
                          "class": "block w-full placeholder-gray-400"
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "TOTP input in row 4",
                  "type": "container",
                  "class": "bg-authBg px-4  sm:px-4",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "mt-0 w-full text-12 text-left",
                      "children": [
                        {
                          "type": "element",
                          "elementType": "staticHtmlTag",
                          "tag": "label",
                          "text": "",
                          "assignedKey": "minLengthPasswordHint",
                          "class": "block w-full placeholder-gray-400"
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "sign In button in row 5",
                  "type": "container",
                  "class": "bg-authBg mt-4 pb-8 px-4  sm:px-4",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "mt-0 w-full text-12 text-center",
                      "children": [
                        {
                          "type": "authEvent",
                          "eventType": "changePassword",
                          "elementType": "staticHtmlTag",
                          "tag": "span",
                          "text": "NEXT",
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
    },
    {
      "screenType": "mfaSetup",
      "description": "login screen container",
      "type": "container",
      "class": "h-screen sm:min-h-screen bg-authFullBg flex flex-col justify-center ",
      "children": [
        {
          "description": "signIn TOTP step 3",
          "type": "container",
          "class": "sm:mt-8 sm:mx-auto w-full sm:w-96 h-full sm:h-1/2",
          "children": [
            {
              "description": "sign window card bg",
              "type": "container",
              "class": "bg-authBg h-full",
              "children": [
                {
                  "description": "logo image div row 1",
                  "type": "container",
                  "class": "py-8 px-0 h-1/3 sm:px-10",
                  "children": [
                    {
                      "description": "logo image",
                      "type": "navEvent",
                      "eventType": "resetNav",
                      "elementType": "staticHtmlTag",
                      "tag": "img",
                      "src": "static/img/logo_black.png",
                      "class": "cursor-pointer mx-auto pt-2 w-32 hidden md:block"
                    }
                  ]
                },
                {
                  "description": "type in description row 2",
                  "type": "container",
                  "class": "bg-authBg py-4 px-4  sm:px-6",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "w-full text-12 text-center",
                      "children": [
                        {
                          "description": "logo image",
                          "type": "element",
                          "elementType": "staticHtmlTag",
                          "tag": "span",
                          "text": "Scan QR-code then enter verfication code",
                          "class": ""
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "qr image div row 3",
                  "type": "container",
                  "class": "relative h-40 w-full bg-white",
                  "children": [
                    {
                      "description": "logo image div row 1",
                      "type": "container",
                      "class": "absolute flex items-center w-full justify-center h-40",
                      "children": [
                        {
                          "description": "logo image",
                          "type": "element",
                          "elementType": "qrcode",
                          "assignedKey": "qrcode",
                          "value": "",
                          "size": "150",
                          "class": ""
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "type in description row 4",
                  "type": "container",
                  "class": "bg-authBg py-4 px-4  sm:px-6",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "w-full text-12 text-center",
                      "children": [
                        {
                          "description": "logo image",
                          "type": "element",
                          "elementType": "staticHtmlTag",
                          "tag": "span",
                          "text": "enter verfication code",
                          "class": ""
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "password input in row 5",
                  "type": "container",
                  "class": "bg-authBg mt-4  px-4  sm:px-4",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "mt-0 w-full text-12 text-center",
                      "children": [
                        {
                          "type": "element",
                          "elementType": "textInput",
                          "key": "TOTPCode",
                          "class": "appearance-none block w-full px-3 py-2 border border-gray-300  placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "NEXT button in row 6",
                  "type": "container",
                  "class": "bg-authBg mt-4 pb-8 px-4  sm:px-4",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "mt-0 w-full text-12 text-center",
                      "children": [
                        {
                          "type": "authEvent",
                          "eventType": "verifyTotpToken",
                          "elementType": "staticHtmlTag",
                          "tag": "span",
                          "text": "NEXT",
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
    },
    {
      "screenType": "verifyTotpToken",
      "description": "login screen container",
      "type": "container",
      "class": "h-screen sm:min-h-screen bg-authFullBg flex flex-col justify-center ",
      "children": [
        {
          "description": "signIn TOTP step 3",
          "type": "container",
          "class": "sm:mt-8 sm:mx-auto w-full sm:w-96 h-full sm:h-1/2",
          "children": [
            {
              "description": "sign window card bg",
              "type": "container",
              "class": "bg-authBg h-full",
              "children": [
                {
                  "description": "logo image div row 1",
                  "type": "container",
                  "class": "py-8 px-0 h-1/3 sm:px-10",
                  "children": [
                    {
                      "description": "logo image",
                      "type": "navEvent",
                      "eventType": "resetNav",
                      "elementType": "staticHtmlTag",
                      "tag": "img",
                      "src": "static/img/logo_black.png",
                      "class": "cursor-pointer mx-auto pt-2 w-32 hidden md:block"
                    }
                  ]
                },
                {
                  "description": "type in description row 3",
                  "type": "container",
                  "class": "bg-authBg py-4 px-4  sm:px-6",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "w-full text-12 text-center",
                      "children": [
                        {
                          "description": "logo image",
                          "type": "element",
                          "elementType": "staticHtmlTag",
                          "tag": "span",
                          "text": "Confirm TOTP Code",
                          "class": ""
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "TOTP input in row 4",
                  "type": "container",
                  "class": "bg-authBg mt-4  px-4  sm:px-4",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "mt-0 w-full text-12 text-center",
                      "children": [
                        {
                          "type": "element",
                          "elementType": "textInput",
                          "key": "TOTPCode",
                          "class": "appearance-none block w-full px-3 py-2 border border-gray-300  placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "sign In button in row 6",
                  "type": "container",
                  "class": "bg-authBg mt-4 pb-8 px-4  sm:px-4",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "mt-0 w-full text-12 text-center",
                      "children": [
                        {
                          "type": "authEvent",
                          "eventType": "verifyTotpToken",
                          "elementType": "staticHtmlTag",
                          "tag": "label",
                          "text": "SIGN IN",
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
    },
    {
      "screenType": "SMSMfa",
      "description": "login screen container",
      "type": "container",
      "class": "min-h-screen bg-authFullBg flex flex-col justify-center ",
      "children": [
        {
          "description": "signIn TOTP step 3",
          "type": "container",
          "class": "mt-8 sm:mx-auto w-full sm:w-72",
          "children": [
            {
              "description": "sign window card bg",
              "type": "container",
              "class": "bg-authBg",
              "children": [
                {
                  "description": "logo image div row 1",
                  "type": "container",
                  "class": "py-8 px-0 h-1/3 sm:px-10",
                  "children": [
                    {
                      "description": "logo image",
                      "type": "navEvent",
                      "eventType": "resetNav",
                      "elementType": "staticHtmlTag",
                      "tag": "img",
                      "src": "static/img/logo_black.png",
                      "class": "cursor-pointer mx-auto pt-2 w-32 hidden md:block"
                    }
                  ]
                },
                {
                  "description": "type in description row 3",
                  "type": "container",
                  "class": "bg-authBg py-4 px-4  sm:px-6",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "w-full text-12 text-center",
                      "children": [
                        {
                          "description": "logo image",
                          "type": "element",
                          "elementType": "staticHtmlTag",
                          "tag": "span",
                          "text": "Confirm TOTP Code",
                          "assignedKey": "TOTPCodeText",
                          "class": ""
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "TOTP input in row 4",
                  "type": "container",
                  "class": "bg-authBg mt-4  px-4  sm:px-4",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "mt-0 w-full text-12 text-center",
                      "children": [
                        {
                          "type": "element",
                          "elementType": "textInput",
                          "key": "TOTPCode",
                          "class": "appearance-none block w-full px-3 py-2 border border-gray-300  placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "sign In button in row 6",
                  "type": "container",
                  "class": "bg-authBg mt-4 pb-8 px-4  sm:px-4",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "mt-0 w-full text-12 text-center",
                      "children": [
                        {
                          "type": "authEvent",
                          "eventType": "verifyTotpToken",
                          "elementType": "staticHtmlTag",
                          "tag": "label",
                          "text": "SIGN IN",
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
    },
    {
      "screenType": "forgotPassword",
      "description": "Forgot password container",
      "type": "container",
      "class": "min-h-screen bg-authFullBg flex flex-col justify-center ",
      "children": [
        {
          "description": "Forgot password",
          "type": "container",
          "class": "mt-8 sm:mx-auto w-full sm:w-72",
          "children": [
            {
              "description": "sign window card bg",
              "type": "container",
              "class": "bg-authBg",
              "children": [
                {
                  "description": "logo image div row 1",
                  "type": "container",
                  "class": "py-8 px-0 h-1/3 sm:px-10",
                  "children": [
                    {
                      "description": "logo image",
                      "type": "navEvent",
                      "eventType": "resetNav",
                      "elementType": "staticHtmlTag",
                      "tag": "img",
                      "src": "static/img/logo_black.png",
                      "class": "cursor-pointer mx-auto pt-2 w-32 hidden md:block"
                    }
                  ]
                },
                {
                  "description": "type in description row 3",
                  "type": "container",
                  "class": "bg-authBg py-4 px-4  sm:px-6",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "w-full text-12 text-left",
                      "children": [
                        {
                          "description": "logo image",
                          "type": "element",
                          "elementType": "staticHtmlTag",
                          "tag": "span",
                          "text": "Enter your email address below and we'll send you a link to reset your password.",
                          "class": ""
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "TOTP input in row 4",
                  "type": "container",
                  "class": "bg-authBg mt-4  px-4  sm:px-4",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "mt-0 w-full text-12 text-center",
                      "children": [
                        {
                          "type": "element",
                          "elementType": "textInput",
                          "key": "email",
                          "textInputType": "email",
                          "autofocus": "true",
                          "class": "appearance-none block w-full px-3 py-2 border border-gray-300  placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "sign In button in row 6",
                  "type": "container",
                  "class": "bg-authBg mt-4 pb-8 px-4  sm:px-4",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "mt-0 w-full text-12 text-center",
                      "children": [
                        {
                          "type": "authEvent",
                          "eventType": "forgotPassword",
                          "elementType": "staticHtmlTag",
                          "tag": "label",
                          "text": "SEND CODE",
                          "class": "block text-red-500 bg-transparent border border-solid border-red-500 hover:bg-primary hover:text-white active:bg-red-600 text-center font-bold uppercase text-sm mt-6 px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 cursor-pointer"
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "SignUP in description row 7",
                  "type": "container",
                  "class": "bg-authBg py-4 px-4  sm:px-6",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "w-full text-12 text-center",
                      "children": [
                        {
                          "description": "logo image",
                          "type": "element",
                          "elementType": "staticHtmlTag",
                          "tag": "a",
                          "text": "Back",
                          "url": "/login",
                          "class": "pl-2 font-bold text-primary hover:underline"
                        }
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
      "screenType": "forgotPasswordSubmit",
      "description": "Reset password container",
      "type": "container",
      "class": "min-h-screen bg-authFullBg flex flex-col justify-center ",
      "children": [
        {
          "description": "Reset your password",
          "type": "container",
          "class": "mt-8 sm:mx-auto w-full sm:w-96",
          "children": [
            {
              "description": "sign window card bg",
              "type": "container",
              "class": "bg-authBg",
              "children": [
                {
                  "description": "logo image div row 1",
                  "type": "container",
                  "class": "py-8 px-0 h-1/3 sm:px-10",
                  "children": [
                    {
                      "description": "logo image",
                      "type": "navEvent",
                      "eventType": "resetNav",
                      "elementType": "staticHtmlTag",
                      "tag": "img",
                      "src": "static/img/logo_black.png",
                      "class": "cursor-pointer mx-auto pt-2 w-32 hidden md:block"
                    }
                  ]
                },
                {
                  "description": "type in description row 3",
                  "type": "container",
                  "class": "bg-authBg py-4 px-4  sm:px-6",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "w-full text-12 text-left",
                      "children": [
                        {
                          "description": "logo image",
                          "type": "element",
                          "elementType": "staticHtmlTag",
                          "tag": "span",
                          "text": "Enter your email address below and we'll send you a link to reset your password.",
                          "class": ""
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "TOTP input in row 4",
                  "type": "container",
                  "class": "bg-authBg mt-4  px-4  sm:px-4",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "mt-0 w-full text-12 text-left",
                      "children": [
                        {
                          "type": "element",
                          "elementType": "staticHtmlTag",
                          "tag": "label",
                          "text": "Email",
                          "class": "appearance-none block w-full py-2 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        },
                        {
                          "type": "element",
                          "elementType": "textInput",
                          "key": "email",
                          "textInputType": "email",
                          "disabled": "true",
                          "autofocus": "false",
                          "class": "bg-gray-200 appearance-none block w-full px-3 py-2 border border-gray-300  placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "TOTP input in row 4",
                  "type": "container",
                  "class": "bg-authBg mt-4  px-4  sm:px-4",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "mt-0 w-full text-12 text-left",
                      "children": [
                        {
                          "type": "element",
                          "elementType": "staticHtmlTag",
                          "tag": "label",
                          "text": "Code",
                          "class": "appearance-none block w-full py-2 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        },
                        {
                          "type": "element",
                          "elementType": "textInput",
                          "key": "code",
                          "textInputType": "text",
                          "triggerEventType": "keyup",
                          "autofocus": "true",
                          "class": "appearance-none block w-full px-3 py-2 border border-gray-300  placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "TOTP input in row 4",
                  "type": "container",
                  "class": "bg-authBg mt-4  px-4  sm:px-4",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "mt-0 w-full text-12 text-left",
                      "children": [
                        {
                          "type": "element",
                          "elementType": "staticHtmlTag",
                          "tag": "label",
                          "text": "New password",
                          "class": "appearance-none block w-full py-2 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        },
                        {
                          "type": "element",
                          "elementType": "textInput",
                          "key": "password",
                          "textInputType": "password",
                          "autofocus": "false",
                          "triggerEventType": "keyup",
                          "class": "appearance-none block w-full px-3 py-2 border border-gray-300  placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "TOTP input in row 4",
                  "type": "container",
                  "class": "bg-authBg mt-4  px-4  sm:px-4",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "mt-0 w-full text-12 text-left",
                      "children": [
                        {
                          "type": "element",
                          "elementType": "staticHtmlTag",
                          "tag": "label",
                          "text": "Enter new password again",
                          "class": "appearance-none block w-full py-2 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        },
                        {
                          "type": "element",
                          "elementType": "textInput",
                          "key": "confirmPassword",
                          "textInputType": "password",
                          "autofocus": "false",
                          "triggerEventType": "keyup",
                          "class": "appearance-none block w-full px-3 py-2 border border-gray-300  placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "TOTP input in row 4",
                  "type": "container",
                  "class": "bg-authBg mt-4  px-4  sm:px-4",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "mt-0 w-full text-12 text-center",
                      "children": [
                        {
                          "type": "element",
                          "elementType": "staticHtmlTag",
                          "tag": "label",
                          "text": "",
                          "assignedKey": "lowerCaseLetterPasswordHint",
                          "class": "appearance-none block w-full placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-12"
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "TOTP input in row 4",
                  "type": "container",
                  "class": "bg-authBg px-4  sm:px-4",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "mt-0 w-full text-12 text-center",
                      "children": [
                        {
                          "type": "element",
                          "elementType": "staticHtmlTag",
                          "tag": "label",
                          "text": "",
                          "assignedKey": "upperCaseLetterPasswordHint",
                          "class": "appearance-none block w-full placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-12"
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "TOTP input in row 4",
                  "type": "container",
                  "class": "bg-authBg px-4  sm:px-4",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "mt-0 w-full text-12 text-center",
                      "children": [
                        {
                          "type": "element",
                          "elementType": "staticHtmlTag",
                          "tag": "label",
                          "text": "",
                          "assignedKey": "minLengthPasswordHint",
                          "class": "appearance-none block w-full placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-12"
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "sign In button in row 6",
                  "type": "container",
                  "class": "bg-authBg mt-4 pb-8 px-4  sm:px-4",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "mt-0 w-full text-12 text-center",
                      "children": [
                        {
                          "type": "authEvent",
                          "eventType": "forgotPasswordSubmit",
                          "elementType": "staticHtmlTag",
                          "tag": "label",
                          "text": "SUBMIT",
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
    },
    {
      "screenType": "signUp",
      "description": "sign up screen container",
      "type": "container",
      "class": "min-h-screen bg-authFullBg flex flex-col justify-center ",
      "children": [
        {
          "description": "signUp email/password step 1",
          "type": "container",
          "class": "mt-8 sm:mx-auto w-full sm:w-72",
          "children": [
            {
              "description": "sign window card bg",
              "type": "container",
              "class": "bg-authBg",
              "children": [
                {
                  "description": "logo image div row 1",
                  "type": "container",
                  "class": "py-4 px-0 h-1/3 sm:px-10",
                  "children": [
                    {
                      "description": "logo image",
                      "type": "navEvent",
                      "eventType": "resetNav",
                      "elementType": "staticHtmlTag",
                      "tag": "img",
                      "src": "static/img/logo_black.png",
                      "class": "cursor-pointer mx-auto pt-2 w-32 hidden md:block"
                    }
                  ]
                },
                {
                  "description": "willkommen row 2",
                  "type": "container",
                  "class": "bg-authBg py-8 px-4  sm:px-4",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "w-full text-center",
                      "children": [
                        {
                          "description": "logo image",
                          "type": "element",
                          "elementType": "staticHtmlTag",
                          "tag": "span",
                          "text": "Willkommen",
                          "class": ""
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "type in description row 3",
                  "type": "container",
                  "class": "bg-authBg px-4  sm:px-6",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "w-full text-12 text-center",
                      "children": [
                        {
                          "description": "logo image",
                          "type": "element",
                          "elementType": "staticHtmlTag",
                          "tag": "span",
                          "text": "Sign up",
                          "class": ""
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "email input in row 4",
                  "type": "container",
                  "class": "bg-authBg pt-8 px-4  sm:pt-4",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "mt-0 w-full text-12 text-left",
                      "children": [
                        {
                          "type": "element",
                          "elementType": "textInput",
                          "key": "first_name",
                          "textInputType": "text",
                          "placeholder": "First name",
                          "autofocus": "true",
                          "class": "appearance-none block w-full px-3 py-2 border border-gray-300  placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "email input in row 4",
                  "type": "container",
                  "class": "bg-authBg pt-8 px-4  sm:pt-4",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "mt-0 w-full text-12 text-left",
                      "children": [
                        {
                          "type": "element",
                          "elementType": "textInput",
                          "key": "last_name",
                          "textInputType": "text",
                          "placeholder": "Last name",
                          "autofocus": "true",
                          "class": "appearance-none block w-full px-3 py-2 border border-gray-300  placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "email input in row 4",
                  "type": "container",
                  "class": "bg-authBg pt-8 px-4  sm:pt-4",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "mt-0 w-full text-12 text-left",
                      "children": [
                        {
                          "type": "element",
                          "elementType": "textInput",
                          "key": "email",
                          "textInputType": "email",
                          "placeholder": "Email",
                          "autofocus": "true",
                          "class": "appearance-none block w-full px-3 py-2 border border-gray-300  placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "password input in row 5",
                  "type": "container",
                  "class": "bg-authBg mt-4  px-4  sm:px-4",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "mt-0 w-full text-12 text-left",
                      "children": [
                        {
                          "type": "element",
                          "elementType": "textInput",
                          "textInputType": "password",
                          "placeholder": "Password",
                          "key": "password",
                          "class": "appearance-none block w-full px-3 py-2 border border-gray-300  placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "sign In button in row 6",
                  "type": "container",
                  "class": "bg-authBg mt-4 pb-8 px-4  sm:px-4",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "mt-0 w-full text-12 text-center",
                      "children": [
                        {
                          "type": "authEvent",
                          "eventType": "signUp",
                          "elementType": "staticHtmlTag",
                          "tag": "span",
                          "text": "SIGN UP",
                          "class": "block text-red-500 bg-transparent border border-solid border-red-500 hover:bg-primary hover:text-white active:bg-red-600 text-center font-bold uppercase text-sm mt-6 px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 cursor-pointer"
                        }
                      ]
                    }
                  ]
                },
                {
                  "description": "SignUP in description row 7",
                  "type": "container",
                  "class": "bg-authBg py-4 px-4  sm:px-6",
                  "children": [
                    {
                      "description": "logo image div",
                      "type": "container",
                      "class": "w-full text-12 text-center",
                      "children": [
                        {
                          "description": "logo image",
                          "type": "element",
                          "elementType": "staticHtmlTag",
                          "tag": "span",
                          "text": "Already registered?",
                          "class": ""
                        },
                        {
                          "description": "logo image",
                          "type": "element",
                          "elementType": "staticHtmlTag",
                          "tag": "a",
                          "text": "Signin",
                          "url": "/login",
                          "class": "pl-2 font-bold text-primary hover:underline"
                        }
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
  "expressions": []
}

const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()

// variables
const user = ref(null)
const entityData = ref({})
const minPasswordLength = ref(6)

onMounted(async () => {
  entityData.value = {}

  Auth.currentAuthenticatedUser({
    bypassCache: true, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
  }).then((user) => {
    user.value = user
  }).catch((error) => {
    console.log('mounted -> error', error)
  })

})

emitter.on('signIn', () => {
  console.log('emitted signIn screen')
  signIn()
})
emitter.on('signInPasswordless', () => {
  console.log('emitted signInPasswordless screen')
  signInPasswordless()
})
emitter.on('changePassword', () => {
  console.log("emitted changePassword screen");
  changePassword()
})
emitter.on('verifyTotpToken', () => {
  console.log("emitted verifyTotpToken screen");
  verifyTotpToken()
})
emitter.on('forgotPassword', () => {
  console.log("emitted forgotPassword screen");
  forgotPassword()
})
emitter.on('forgotPasswordSubmit', () => {
  console.log("emitted forgotPasswordSubmit screen");
  forgotPasswordSubmit()
})
emitter.on('signUp', () => {
  signUp()
})

onBeforeUnmount(() => {
  emitter.off('signIn')
  emitter.off('signInPasswordless')
  emitter.off('changePassword')
  emitter.off('verifyTotpToken')
  emitter.off('forgotPassword')
  emitter.off('forgotPasswordSubmit')
  emitter.off('signUp')
})

const tenantIds = computed(() => authStore.tenantIds)

const authState = computed({
  get: () => {
    if (!user.value && route.fullPath == '/signup') {
      return 'signUp'
    } else if (!user.value && route.fullPath == '/password-reset') {
      return 'forgotPassword'
    } else if (!user.value && route.fullPath == '/login') {
      return tenantIds?.value?.authenticationFlowType == 'CUSTOM_AUTH' ? 'signInPasswordless' : 'signIn'
    } else if (user.value?.challengeName == 'SIGN_IN_PASSWORD_LESS_CONFIRMATION') {
      return 'signInPasswordlessConfirmation'
    } else if (user.value?.challengeName == 'NEW_PASSWORD_REQUIRED') {
      return 'changePassword'
    } else if (user.value?.challengeName == 'MFA_SETUP') {
      return 'mfaSetup'
    } else if (user.value?.challengeName == 'SMS_MFA') {
      return 'SMSMfa'
    } else if (user.value?.challengeName == 'SOFTWARE_TOKEN_MFA') {
      return 'verifyTotpToken'
    } else if (user.value?.challengeName == 'forgotPassword') {
      return 'forgotPassword'
    } else if (user.value?.challengeName == 'forgotPasswordSubmit') {
      return 'forgotPasswordSubmit'
    } else if (user.value?.challengeName == 'CUSTOM_CHALLENGE') {
      return 'mfaSetup'
    } else if (
      (!user.value?.preferredMFA &&
        user.value?.challengeParam &&
        user.value?.challengeParam.userAttributes &&
        user.value?.challengeParam.userAttributes['custom:MFA'] ==
        'mfa-software') ||
      (user.value?.preferredMFA == 'NOMFA' &&
        user.value?.attributes['custom:MFA'] == 'mfa-software')
    ) {
      return 'mfaSetup'
    } else {
      return 'signedIn'
    }
  },
  set: (value) => {
    if (user.value) {
      user.value.challengeName = value
    } else {
      user.value = { challengeName: value }
    }
  },
})

const componentContainers = computed(() => {
  return config.authScreensLocal
    ? componentContainersLocal
    : tenantIds.value.authScreens || {}
})

const componentContainer = computed(() => {
  let selectedComponentContainer = null
  if (authState.value) {
    componentContainers.value.markup.forEach((element) => {
      if (element.screenType == authState.value)
        selectedComponentContainer = element
    })
  }
  return selectedComponentContainer
})

// expressions
const expressions = computed(() => componentContainers.value?.expressions ? componentContainers.value.expressions : null)
provide('expressions', expressions)

const password = computed(() => {
  return entityData.value.password
})

// methods

const signIn = async () => {
  // console.log(entityData.value.email, entityData.value.password)
  try {
    user.value = await Auth.signIn(
      entityData.value.email,
      entityData.value.password
    )
  } catch (error) {
    console.log('signIn -> error', error)
  }
}

const signInPasswordless = async () => {
  try {
    const loginUrl = 'https://' + tenantIds.value.pwlId + '.execute-api.eu-west-1.amazonaws.com/' + tenantIds.value.slug + '/login'; // TODO: should be an env var
    const { data } = await axios.post(loginUrl, { email: entityData.value.email || '', phoneNumber: entityData.value.phoneNumber, host: window.location.host, userPoolID: tenantIds.value.userPoolId, sendNotification: "customer" })
    console.log(data)
    user.value = { challengeName: 'SIGN_IN_PASSWORD_LESS_CONFIRMATION' }
  } catch (error) {
    console.log('signInPasswordless -> error', error)
  }
}

const changePassword = async () => {
  if (!validatePassword()) return
  try {
    user.value = await Auth.completeNewPassword(
      user.value, // the Cognito User Object
      entityData.value.password // the new password
    )
  } catch (error) {
    console.log('changePassword -> error', error)
  }
}
const verifyTotpToken = async () => {
  if (authState.value == 'mfaSetup') {
    console.log('Auth.verifyTotpToken')
    Auth.verifyTotpToken(user.value, entityData.value.TOTPCode)
      .then(async () => {
        await Auth.setPreferredMFA(user.value, 'TOTP')
        user.value = await Auth.currentAuthenticatedUser()
        authState.value = 'signedIn'
      })
      .catch((error) => {
        console.log('verifyTotpToken -> error', error)
      })
  } else {
    //console.log('Auth.confirmSignIn')
    /*console.log(
      user.value, // Return object from Auth.signIn()
      entityData.value.TOTPCode, // Confirmation code
      user.value.challengeName // MFA Type e.g. SMS_MFA, SOFTWARE_TOKEN_MFA
    )*/

    user.value.username = user.value.challengeParam.USER_ID_FOR_SRP

    Auth.confirmSignIn(
      user.value, // Return object from Auth.signIn()
      entityData.value.TOTPCode, // Confirmation code
      user.value.challengeName // MFA Type e.g. SMS_MFA, SOFTWARE_TOKEN_MFA
    )
      .then(() => {
        authState.value = 'signedIn'
      })
      .catch((error) => {
        console.log('confirmSignIn -> error', error)
      })
  }
}
const forgotPassword = async () => {
  Auth.forgotPassword(entityData.value.email)
    .then(() => {
      authState.value = 'forgotPasswordSubmit'
    })
    .catch((error) => {
      console.log('forgotPassword -> error', error)
    })
}
const forgotPasswordSubmit = async () => {
  console.log(
    entityData.value.email,
    entityData.value.code,
    entityData.value.password
  )

  if (!validatePassword()) return

  Auth.forgotPasswordSubmit(
    entityData.value.email,
    entityData.value.code,
    entityData.value.password
  )
    .then(() => {
      user.value = null
      entityData.value = {}
      router.push('/login')
    })
    .catch((error) => {
      console.log('forgotPasswordSubmit -> error', error)
    })
}
const signUp = () => {
  Auth.signUp({
    username: entityData.value.email,
    password: entityData.value.password,
    attributes: {
      email: entityData.value.email,
      // "email_verified": "true",
      phone_number: entityData.value.phone_number
        ? entityData.value.phone_number
        : '',
      'custom:realm-app-id': 'NOT DETERMINDED',
      'custom:subdomain': window.location.host,
    },
  })
    .then((user) => {
      user.value = null
      entityData.value = {}
      router.push('/login')
    })
    .catch((error) => {
      console.log('signUp -> error', error)
    })
}

const validatePassword = () => {
  if (!/[a-z]/.test(entityData.value.password)) {
    console.log('Password must contain a lower case letter')
    return false
  }

  if (!/[A-Z]/.test(entityData.value.password)) {
    console.log('Password must contain an upper case letter')
    return false
  }

  if (entityData.value.password && entityData.value.password.length < 6) {
    console.log(
      `Password must contain at least ${minPasswordLength.value} characters`
    )
    return false
  }

  // password & confirm password validation
  if (entityData.value.password !== entityData.value.confirmPassword) {
    console.log("Password and confirm password doesn't match")
    return false
  }
  return true
}
const setPasswordHintMessages = () => {
  entityData.value.password = ''
  entityData.value.confirmPassword = ''
  entityData.value[
    'lowerCaseLetterPasswordHint'
  ] = `<span class='text-gray-500'>
                    Password must contain a lower case letter
                </span>`
  entityData.value[
    'upperCaseLetterPasswordHint'
  ] = `<span class='text-gray-500'>
                    Password must contain an upper case letter
                </span>`
  entityData.value['minLengthPasswordHint'] = `<span class='text-gray-500'>
                    Password must contain at least ${minPasswordLength.value} characters
                </span>`
}


const onUpdate = ({ key, value }) => {
  // console.log('authScreens | onUpdate', key, value)
  _.set(entityData.value, key, value)
}
provide('onUpdate', onUpdate)

// AWS config
const getAWSCconfig = async () => {
  let user = await Auth.currentAuthenticatedUser()
  const config = {
    region: authStore.tenantIds.region,
    credentials: fromCognitoIdentityPool({
      identityPoolId: user.attributes["custom:identityPoolID"],
      logins: {
        [`cognito-idp.eu-west-1.amazonaws.com/${user.pool.userPoolId}`]: user.signInUserSession.idToken.jwtToken
      },
      clientConfig: { region: authStore.tenantIds.region },
    })
  }
  return config
}

const setLastLoginAttr = async () => {
  try {
    let user = await Auth.currentAuthenticatedUser()
    const adminUpdateUserAttributesParams = {
      UserPoolId: user.pool.userPoolId,
      Username: user.username,
      UserAttributes: [
        { Name: 'custom:previousLogin', Value: user.attributes["custom:lastLogin"] || "" },
        { Name: 'custom:lastLogin', Value: Date.now().toString() }
      ]
    }
    const cognitoIdentityProviderClient = new CognitoIdentityProviderClient(await getAWSCconfig())
    const adminUpdateUserAttributesCommand = new AdminUpdateUserAttributesCommand(adminUpdateUserAttributesParams)
    const adminUpdateUserAttributesResponse = await cognitoIdentityProviderClient.send(adminUpdateUserAttributesCommand)
    console.log('attribute last login response:', adminUpdateUserAttributesResponse)
  } catch (error) {
    console.log('attribute write error:', error)
  }
}

watch(authState, async (value) => {
  console.log('watch | authState ', value)
  if (value == 'mfaSetup') {
    Auth.setupTOTP(user.value)
      .then((code) => {
        console.log('setupTOTP', code)
        entityData.value['qrcode'] =
          'otpauth://totp/AWSCognito:' +
          user.value.username +
          '?secret=' +
          code +
          '&issuer=AWSCognito'
      })
      .catch((e) => {
        console.log(e)
      })
  }
  if (value == 'forgotPasswordSubmit' || value == 'changePassword') {
    setPasswordHintMessages()
  }
  if (value == 'SMSMfa') {
    entityData.value[
      'TOTPCodeText'
    ] = `We have delivered the authentication code by SMS to ${user.value.challengeParam.CODE_DELIVERY_DESTINATION}. Please enter the code to complete authentication.`
  }
  else if (value == 'signedIn') {
    // set last login protocal
    await setLastLoginAttr()

    router.push('/')
  }
})
watch(password, (value) => {
  if (/[a-z]/.test(value)) {
    entityData.value[
      'lowerCaseLetterPasswordHint'
    ] = `<span class='text-green-500'>
                        Password must contain a lower case letter
                    </span>`
  }
  else {
    entityData.value[
      'lowerCaseLetterPasswordHint'
    ] = `<span class='text-gray-500'>
                        Password must contain a lower case letter
                    </span>`
  }

  if (/[A-Z]/.test(value)) {
    entityData.value[
      'upperCaseLetterPasswordHint'
    ] = `<span class='text-green-500'>
                        Password must contain an upper case letter
                    </span>`
  }
  else {
    entityData.value[
      'upperCaseLetterPasswordHint'
    ] = `<span class='text-gray-500'>
                        Password must contain an upper case letter
                    </span>`
  }

  if (value && value.length >= 6) {
    entityData.value['minLengthPasswordHint'] = `<span class='text-green-500'>
                        Password must contain at least ${minPasswordLength.value} characters
                    </span>`
  }
  else {
    entityData.value['minLengthPasswordHint'] = `<span class='text-gray-500'>
                        Password must contain at least ${minPasswordLength.value} characters
                    </span>`
  }
})
</script>
