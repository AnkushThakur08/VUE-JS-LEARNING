import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import "vue-toast-notification/dist/theme-sugar.css";
import ToastPlugin from 'vue-toast-notification';


createApp(App).use(ToastPlugin).mount('#app')
