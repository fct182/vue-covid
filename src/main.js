import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入移动端CSS样式
import './assets/css/common.css'

// 引入swiper的样式
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

// 引入axios请求
import api from './api/index'
// 挂载到  Vue
Vue.prototype.$api = api

// 引入echarts
import Echarts from './plugins/echarts'
// 引入地图数据
import '../node_modules/echarts/map/js/china'
// 引入省份地图
import '../node_modules/echarts/map/js/province/anhui'
import "../node_modules/echarts/map/js/province/aomen"
import "../node_modules/echarts/map/js/province/beijing"
import "../node_modules/echarts/map/js/province/chongqing"
import "../node_modules/echarts/map/js/province/fujian"
import "../node_modules/echarts/map/js/province/gansu"
import "../node_modules/echarts/map/js/province/guangdong"
import "../node_modules/echarts/map/js/province/guangxi"
import "../node_modules/echarts/map/js/province/guizhou"
import "../node_modules/echarts/map/js/province/hainan"
import "../node_modules/echarts/map/js/province/hebei"
import "../node_modules/echarts/map/js/province/heilongjiang"
import "../node_modules/echarts/map/js/province/henan"
import "../node_modules/echarts/map/js/province/hubei"
import "../node_modules/echarts/map/js/province/hunan"
import "../node_modules/echarts/map/js/province/jiangsu"
import "../node_modules/echarts/map/js/province/jiangxi"
import "../node_modules/echarts/map/js/province/jilin"
import "../node_modules/echarts/map/js/province/liaoning"
import "../node_modules/echarts/map/js/province/neimenggu"
import "../node_modules/echarts/map/js/province/ningxia"
import "../node_modules/echarts/map/js/province/qinghai"
import "../node_modules/echarts/map/js/province/shandong"
import "../node_modules/echarts/map/js/province/shanghai"
import "../node_modules/echarts/map/js/province/shanxi"
import "../node_modules/echarts/map/js/province/shanxi1"
import "../node_modules/echarts/map/js/province/sichuan"
import "../node_modules/echarts/map/js/province/taiwan"
import "../node_modules/echarts/map/js/province/tianjin"
import "../node_modules/echarts/map/js/province/xianggang"
import "../node_modules/echarts/map/js/province/xinjiang"
import "../node_modules/echarts/map/js/province/xizang"
import "../node_modules/echarts/map/js/province/yunnan"
import "../node_modules/echarts/map/js/province/zhejiang"
Vue.use(Echarts)


Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
