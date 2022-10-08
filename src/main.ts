import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/css'
import VueCountdown from '@chenfengyuan/vue-countdown';

import './stylesheets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createVuestic())
app.component(VueCountdown.name, VueCountdown);

app.mount('#app')
