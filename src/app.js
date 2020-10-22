// Import Vue

import Vue from 'vue'
Vue.config.devtools = true

// Import Styles
import scss from './assets/scss/main'

// Import App Component
import App from './app.vue'
import router from './router'

// Init App
new Vue({
  el: '#app',
  router,
  render: (h) => h(App),
})
