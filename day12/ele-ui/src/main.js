import Vue from 'vue'
import App from './App'
import { Button,Select,Option,MessageBox } from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.use(MessageBox)

Vue.prototype.$alert = MessageBox

new Vue({
    render: h => h(App)
}).$mount('#app')