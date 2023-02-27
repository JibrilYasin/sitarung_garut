require('./bootstrap')
import { createApp } from 'vue'
import router from './router'
import store from './store.js'
import App from './App.vue'
import Loading from 'vue3-loading-screen'
import { createMetaManager } from 'vue-meta'
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App)
.use(router)
.use(store)
.use(createMetaManager())
.use(Toast)
.use(VueSweetalert2)
.use(Loading, {
  bg: '#696cffad',
  slot: `
    <div class="px-5 py-3 bg-gray-800 rounded">
      <h5 class="text-3xl text-white"><i class="bx bx-loader-circle d-none"></i> <small>Loading...</h5>
    </div>
  `
})
if(window.location.href.indexOf("localhost") >= 0) {
  window.baseurl = "http://localhost:8000";
  window.imagepath = 'http://localhost:8000/images/';
}else{
  window.baseurl = "https://sitarung.saktiyasin.com";
  window.imagepath = 'https://sitarung.saktiyasin.com/images/';
}
window.$ = window.jQuery = require('jquery')
window.moment = require('moment');
app.config.globalProperties.$filters = {
  formatDate(date) {
    return moment(date).format('DD MMM YYYY, HH:mm:ss')
  },
  formatDateOnly(date) {
    return moment(date).format('DD MMM YYYY')
  },
}
app.mount('#app')
