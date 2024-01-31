import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import InlineMessage from 'primevue/inlinemessage';
import Dialog from 'primevue/dialog';

import App from './App.vue'
import router from './router'

import 'primevue/resources/primevue.css'
import 'primevue/resources/themes/arya-green/theme.css'
import 'primeicons/primeicons.css'

import './utils/Validations.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.component('PrimeButton', Button)
app.component('PrimeDialog', Dialog)
app.component('PrimeInputText', InputText)
app.component('PrimeInlineMessage', InlineMessage)

app.mount('#app')
