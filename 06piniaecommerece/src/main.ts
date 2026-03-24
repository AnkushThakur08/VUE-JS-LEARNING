import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import ToastPlugin from 'vue-toast-notification'



createApp(App).use(ToastPlugin).use(createPinia()).mount('#app')
