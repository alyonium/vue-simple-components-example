import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
import LeftSide from './LeftSide.vue'
import RightSide from './RightSide.vue'

Vue.component('header-row', Header)
Vue.component('footer-row', Footer)
Vue.component('left-side', LeftSide)
Vue.component('right-side', RightSide)

new Vue({
  el: '#app',
  render: h => h(App)
})
