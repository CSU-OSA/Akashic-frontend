import { createApp } from 'vue'
import { createPinia } from 'pinia'
import naive from "naive-ui"

import App from './App'
import router from './router'

import './style/style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(naive)

app.mount('#app')
