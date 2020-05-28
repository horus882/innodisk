<template>
  <div id="app">
    <Intro />
    <div id="wrap">
      <Header />
      <div id="main">
        <Index />
        <div id="products" class="section">
          <p style="text-align: center">PRODUCTS</p>
        </div>
      </div>
    </div>
    <!--
    <div>
      <full-page ref="fullpage" :options="options" id="fullpage">
        <div class="section">
          First section ...
        </div>
        <div class="section">
          Second section ...
        </div>
      </full-page>
    </div>
    -->
  </div>
</template>

<script>

import Intro from './components/Intro.vue'
import Header from './components/Header.vue'
import Index from './components/Index.vue'

import "normalize.css"

import $ from 'jquery'

export default {
  name: 'App',
  data: function() {
    return {
      isMobile: false
    }
  },
  components: {
    Intro,
    Header,
    Index
  },
  created() {
    if (/Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      const metaViewPort = document.querySelector('head meta[name="viewport"]');
      metaViewPort.setAttribute('content', 'width=320, user-scalable=no');
      console.log('[Mobile]');
    } else {
      console.log('[Desktop]');
    }
  },
  mounted() {

    // fullpage.js 初始化
    // this.initFullpage();

  },
  methods: {
    initFullpage() {

      $('#main').fullpage({
        navigation: true,            // 顯示導行列
        navigationPosition: 'left', // 導行列位置
        // anchors: ['index', 'thermo_spot', 'titanium_excellence', 'conducting', 'various', 'series'],
        // scrollOverflow: true,
        // scrollOverflowOptions: {
        //   disablePointer: true
        // },
        // afterLoad: function(anchorLink, index) {
        //   var currentPage = anchorLink.charAt(0).toUpperCase() + anchorLink.slice(1);
        //   if (Page.Loaded) {
        //     Page[currentPage].init();
        //   }
        // }
      });

    }
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap');
@import url('https://fonts.googleapis.com/earlyaccess/notosanstc.css');

body {
  background: #efefef;
  /* overflow-y: scroll; */
}

#app {
  color: #000;
  font-size: 16px;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: 'Lato', 'sourcehansans-tc', 'Noto Sans S Chinese', 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', Tahoma, Verdana, Arial, Helvetica, sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#wrap {
  position: relative;
  width: 100%;
  z-index: 1;
}

#main {
  position: relative;
}

.section {
  position: relative;
}

.intro {
  opacity: 0;
  pointer-events: none;
}

.fade-enter-active, 
.fade-leave-active {
  transition: .75s opacity;
}

.fade-enter, 
.fade-leave-to {
  opacity: 0;
}

</style>
