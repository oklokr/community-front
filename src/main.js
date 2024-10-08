import { createApp } from 'vue'
import App from './App.vue'
import router from './route'
import ElementPlus from 'element-plus'

import '@/assets/css/normalize.css'
import '@/assets/css/style.scss'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.mount('#app')
