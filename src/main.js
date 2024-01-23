import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './assets/scss/main.scss';

import App from './App.vue'
import router from './router'

// 創建一個vue應用程式(主要配置在app.vue裡)
const vueApp = createApp(App)
const pinia = createPinia(vueApp)

vueApp.use(pinia)
vueApp.use(router)

// 渲染在index.html裡面的div#app
vueApp.mount('#app')
