<template>
  <div id="app">
    <Intro />
    <div id="main">
      <div id="index" class="section">INDEX</div>
      <div id="products" class="section">PRODUCTS</div>
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
import "normalize.css"
import $ from 'jquery'

export default {
  name: 'App',
  components: {
    Intro
  },
  mounted() {

    // fullpage.js 初始化

    $('#main').fullpage({
      // navigation: true,            // 顯示導行列
      // navigationPosition: 'right', // 導行列位置
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
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap');
@import url('https://fonts.googleapis.com/earlyaccess/notosanstc.css');

body {
  overflow-y: scroll;
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
