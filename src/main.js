import Vue from 'vue'
import App from './App.vue'
import store from './store/'
import VueGtag from "vue-gtag"

import VueI18n from 'vue-i18n'  // 引入 Vue I18n
import zh_hant from './i18n/zh-hant'      // 存放中文語系檔
import en from './i18n/en'      // 存放英文語系檔

Vue.use(VueI18n)

// 預設使用的語系
let locale = 'en';

// 檢查 localStorage 是否已有保存使用者選用的語系資訊
if (localStorage.getItem('site-lang')) {
  locale = localStorage.getItem('site-lang');
  store.commit('setLang', locale);
} else {
  store.commit('setLang', locale);
}

const i18n = new VueI18n({
  locale: locale,
  messages: {
    'zh-hant': zh_hant,
    'en': en
  }
});

// import 'fullpage.js/vendors/scrolloverflow'
// import VueFullPage from 'vue-fullpage.js'

Vue.prototype.$setLang = function(value) {
  this.$store.commit('setLang', value);
  this.$i18n.locale = value;
  localStorage.setItem('site-lang', value);
}

Vue.prototype.$trackPage = function(pageName) {
  this.$gtag.pageview({
    page_path: '/' + pageName,
  })
}

Vue.prototype.$trackEvent = function(category, action, label) {
  this.$gtag.event(action, {
    'event_category': category,
    'event_label': label
  })
}

import VueAnime from './vue-anime';
Vue.use(VueAnime);
Vue.use(VueGtag, {
  config: {
    id: "UA-18316180-12",
    params: {
      // send_page_view: true
    }
  }
});
// Vue.use(VueFullPage);

// import VueRouter from 'vue-router'
// import About from './pages/About'
// import Portfolio from './pages/Portfolio'
// import Research from './pages/Research'

// Vue.use(VueRouter);
Vue.config.productionTip = false

// const router = new VueRouter({
//   routes: [
//     { path: '/about', name: 'About', component: About },
//     { path: '/portfolio', name: 'Portfolio', component: Portfolio },
//     { path: '/research', name: 'Research', component: Research },
//     { path: '/', redirect: '/about' }
//   ]
// })

new Vue({
  // router,
  el: '#app',
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')

