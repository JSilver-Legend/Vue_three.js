import { createRouter, createWebHistory } from 'vue-router'
import { routeGuard } from '@/lib/routeGuard'

import platformSidebarTopbarContent from '@/platform/layouts/platformSidebarTopbarContent.vue'
import platformSidebarContent from '@/platform/layouts/platformSidebarContent.vue'
import platformFullscreenContent from '@/platform/layouts/platformFullscreenContent.vue'

import authScreens from '@/platform/layouts/authScreens.vue'
import magicLinkValidation from '@/platform/layouts/magicLinkValidation.vue'

import appTemplateSys01 from '@/components/appSys/appTemplateSys01.vue'
import PageBuilder from '@/components/pageBuilder/PageBuilder.vue'

import platformUserManagement from '@/platform/platformComponents/platformUserManagement.vue'
import platformSettings from '@/platform/platformComponents/platformSettings.vue'

import appSysJson from '@/components/appSysJson.vue'
import appSysJsonFS from '@/components/appSysJsonFS.vue'
import tailwind1 from '@/components/tailwind1.vue'
import tailwind2 from '@/components/tailwind2.vue'
import colorchange from '@/components/colorChange.vue'
import heatmap from '@/components/heatmap.vue'
import animationtest1 from '@/components/animationtest1.vue'
import animationtest2 from '@/components/animationtest2.vue'
import animationtest3 from '@/components/animationtest2.vue'


let routes = [
  /* sidebar topbar content appSys */
  {
    path: '/',
    beforeEnter: routeGuard,
    component: platformSidebarTopbarContent,
    children: [
      {
        path: '/:URL/:subURL',
        name: 'appTemplateSys01',
        component: appTemplateSys01,
      },
      {
        path: '/platformUserManagement',
        name: 'Platform User Management',
        component: platformUserManagement,
      },
      {
        path: '/platformSettings',
        name: 'Platform Settings',
        component: platformSettings,
      },
      {
        path: '/pagebuilder',
        name: 'New Page Builder',
        component: PageBuilder,
      }
    ]
  },
  /* sidebar content static */
  {
    path: '/',
    beforeEnter: routeGuard,
    component: platformSidebarContent,
    children: [
      {
        path: '/appSysJson',
        name: 'appTemplateMarkup',
        component: appSysJson,
      },
      {
        path: '/tailwind1',
        name: 'tailwind1',
        component: tailwind1,
      },
      {
        path: '/tailwind2',
        name: 'tailwind2',
        component: tailwind2,
      },
      {
        path: '/colorchange',
        name: 'colorchange',
        component: colorchange,
      },
      {
        path: '/heatmap',
        name: 'heatmap',
        component: heatmap,
      }
    ]
  },

  /* fullscreen content static */
  {
    path: '/',
    beforeEnter: routeGuard,
    component: platformFullscreenContent,
    children: [
      {
        path: '/appSysJsonFS',
        name: 'appTemplateMarkupFS',
        component: appSysJsonFS,
      },
      {
        path: '/animationtest1',
        name: 'animationtest1',
        component: animationtest1,
      },
      {
        path: '/animationtest2',
        name: 'animationtest2',
        component: animationtest2,
      },
      {
        path: '/animationtest3',
        name: 'animationtest3',
        component: animationtest3,
      }
    ]
  },
  /* initial magic link */
  {
    path: '/sign-in/:challenge',
    beforeEnter: routeGuard,
    name: 'Sign in password less',
    component: magicLinkValidation,
  },
  /* initial auth screens */
  {
    path: '/',
    beforeEnter: routeGuard,
    component: authScreens,
    children: [
      {
        path: '/login',
        name: 'Login',
        component: authScreens,
      },
      {
        path: '/signup',
        name: 'Sign up',
        component: authScreens,
      },
      {
        path: '/password-reset',
        name: 'Password reset',
        component: authScreens,
      }
    ]
  }
]

let router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
