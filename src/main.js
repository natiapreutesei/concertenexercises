
import {createApp, reactive} from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap-icons/font/bootstrap-icons.css'

import App from './App.vue'
import router from './router'

const myAlert = reactive({alertMessage:''})

const app = createApp(App).provide('myAlertVar', myAlert)

app.use(createPinia())
app.use(router)

app.mount('#app')
