import { createApp } from 'vue'
import { Button } from 'vant'
import router from './router'
import store from './store'
import App from './App.vue'
import 'lib-flexible/flexible'
createApp(App).use(Button).use(router).use(store).mount('#app')
