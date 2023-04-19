import { app } from './plugins/main-app'
import { markRaw } from 'vue'
import { createPinia } from 'pinia'
import { Vue3Mq } from 'vue3-mq'
import { MotionPlugin } from '@vueuse/motion'
import { LicenseManager } from 'ag-grid-enterprise';
// import sequentialEntrance from 'vue3-sequential-entrance'

import router from '@/router.js'

import '@/tailwind.css'

import './plugins/global-components'

LicenseManager.setLicenseKey('[TRIAL]_CompanyName=SYSTEM,LicensedApplication=Trial Support - April,LicenseType=SingleApplication,LicensedConcurrentDeveloperCount=-1,LicensedProductionInstancesCount=0,AssetReference=AG-037732,SupportServicesEnd=30_April_2023_[v2]_MTY4MjgwOTIwMDAwMA==ac53951bd0f776b7f44f66ab27d46014')

const pinia = createPinia()
pinia.use(({ store }) => {
  store.$router = markRaw(router)
})

app.use(pinia)
app.use(router)
app.use(MotionPlugin)
/*app.use(sequentialEntrance)*/

app.use(Vue3Mq, {
  defaultBreakpoint: 'small',
  breakpoints: {
    xs: '0px',
    small: '322px',
    medium: '768px',
    large: '1024px',
    xl: '1280px',
    xxl: '1536px',
  },
})

app.mount('#app')
