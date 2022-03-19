import { createApp } from 'vue'
import App from './App.vue'
import BootstrapVue3 from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import router from './router'
//--mitt(EventBus)--
import mitt from 'mitt'
const emitter = mitt()

const app = createApp(App)
app.config.globalProperties.emitter = emitter;
app.use(router)
app.use(BootstrapVue3)
app.mount('#app')

// createApp(App)
//     .use(router)
//     .use(BootstrapVue3)
//     .mount('#app')