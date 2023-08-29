import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './main.css'
import MorphemeUI from '@morpheme/ui' 
import '@morpheme/themes/dist/morpheme/main.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(MorphemeUI)
app.use(router)

app.mount('#app')
