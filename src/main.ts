import { createApp } from 'vue'
import App from './App.vue'
import 'material-icons/iconfont/material-icons.css';
import './registerServiceWorker'
import router from './router'

createApp(App).use(router).mount('#app')
