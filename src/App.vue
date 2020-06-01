<template>
  <div id="app">
    <Intro />
    <div id="wrap">
      <Header />
      <div id="main">
        <Index :pages="pages" />
        <Automation />
        <div id="page-security" class="section">
          <p style="text-align: center">Security</p>
        </div>
        <div id="page-infrastructure" class="section">
          <p style="text-align: center">Infrastructure</p>
        </div>
        <div id="page-service" class="section">
          <p style="text-align: center">Service</p>
        </div>
        <div id="page-others" class="section">
          <p style="text-align: center">Others</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Intro      from './components/Intro.vue'
import Header     from './components/Header.vue'
import Index      from './components/Index.vue'
import Automation from './components/Automation'

import "normalize.css"

import $ from 'jquery'

export default {
  name: 'App',
  data: function() {
    return {
      isMobile: false,
      pages: ['index', 'automation', 'security', 'infrastructure', 'service', 'others']
    }
  },
  props: {},
  components: {
    Intro,
    Header,
    Index,
    Automation
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

    // // fullpage.js 初始化
    this.initFullpage();

  },
  methods: {

    // fullpage.js 初始化
    initFullpage() {
      $('#main').fullpage({
        navigation: true,            // 顯示導行列
        navigationPosition: 'left',  // 導行列位置
        anchors: ['index', 'automation', 'security', 'infrastructure', 'service', 'others'],
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

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');
@import url('https://fonts.googleapis.com/earlyaccess/notosanstc.css');

body {
  min-width: 1000px;
  background: #efefef;
  /* overflow-y: scroll; */
}

a, a:hover {
  color: #16272e;
  cursor: pointer;
  text-decoration: none;
}

ul, li {
  margin: 0;
  padding-left: 0;
  list-style: none;
}

p {margin: 0;}

#app {
  color: #16272e;
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

.inner {
  position: relative;
  width: 1000px;
  height: 100%;
  margin: 0 auto;
}

#main {position: relative;}

.section {position: relative;}

.intro {
  opacity: 0;
  pointer-events: none;
}

#fp-nav.left {left: 30px;}
#fp-nav ul li,
.fp-slidesNav ul li {
  width: 9px;
  height: 9px;
  margin: 15px 0;
}

#fp-nav ul li a span,
.fp-slidesNav ul li a span,
#fp-nav ul li a.active span,
#fp-nav ul li:hover a.active span,
.fp-slidesNav ul li a.active span,
.fp-slidesNav ul li:hover a.active span {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  border: #16272e 2px solid;
  background: #fff;
  box-sizing: border-box;
}

#fp-nav ul li a.active span,
#fp-nav ul li:hover a.active span,
.fp-slidesNav ul li a.active span,
.fp-slidesNav ul li:hover a.active span {
  background: #16272e;
}

#fp-nav ul li:hover a span, .fp-slidesNav ul li:hover a span {
  width: 100%;
  height: 100%;
  margin: 0;
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
