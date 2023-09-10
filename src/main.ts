/* eslint-disable import/order */
import '@/@iconify/icons-bundle'
import App from '@/App.vue'
import layoutsPlugin from '@/plugins/layouts'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'
import router from '@/router'
import '@core/scss/template/index.scss'
import '@styles/styles.scss'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import mitt from 'mitt';
import '@/assets/css/main.css';
import '@/assets/css/style.css';
import '@/assets/css/responsive.css'
import i18n from '@/plugins/i18n'

import VueCryptojs from 'vue-cryptojs'
import { VueReCaptcha } from "vue-recaptcha-v3";

// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import Toast, { TYPE } from "vue-toastification";

const toastConfig = {
  toastDefaults: {
    // ToastOptions object for each type of toast
    [TYPE.ERROR]: {
      timeout: 3000,
      closeButton: false,
      hideProgressBar: true,
      icon: false
    },
    [TYPE.SUCCESS]: {
      timeout: 3000,
      hideProgressBar: true,
      closeButton: false,
      icon: false
    }
  }
};

import VueApexCharts from "vue3-apexcharts";
const emitter = mitt(); 

loadFonts()

// Create vue app
const app = createApp(App)

// Use plugins
app.use(vuetify)
app.use(createPinia())
app.use(router)
app.use(layoutsPlugin)
app.use(i18n)
app.use(VueReCaptcha, {
  siteKey: import.meta.env.VITE_APP_CAPTCHA_KEY
} as any)
app.use(VueCryptojs)
app.use(VueApexCharts);

app.use(Toast, toastConfig);

app.provide('emitter', emitter);

// Mount vue app
app.mount('#app')