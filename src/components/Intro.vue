<template>
  <transition name="fade">
    <div id="intro" v-show="introShow">
      <transition name="fade">
        <div class="part-1 part" v-show="part1Show">
          <div class="inner">
            <div class="brand">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="450px" height="82px" viewBox="-2 0 158.28 27.761" enable-background="new -2 0 158.28 27.761" xml:space="preserve">

                <defs>
                  <linearGradient id="strokeGradient"
                                  x1="0%" y1="100%"
                                  x2="100%" y2="0%"
                                  spreadMethod="pad">
                    <stop offset="0%"   stop-color="#aa98a8" stop-opacity="1"/>
                    <stop offset="100%" stop-color="#ecb3a1" stop-opacity="1"/>
                  </linearGradient>
                </defs>

                <g>

                  <!-- i -->
                  <path d="M0,0h5.11v4.05H0V0z"/>

                  <!-- i -->
                  <path d="M0,7.327h5.11v20.243H0V7.327z"/>

                  <!-- n -->
                  <path d="M21.922,7.326c-2.479,0-4.95,0.862-7.403,2.583l-0.638-2.583H9.928v20.244h5.11V14.016 c1.839-1.708,3.652-2.563,5.437-2.563c2.223,0,3.338,1.118,3.338,3.353v12.764h5.108V14.864 C28.921,9.84,26.586,7.326,21.922,7.326z"/>

                  <!-- n -->
                  <path d="M45.732,7.326c-2.481,0-4.95,0.862-7.405,2.583l-0.633-2.583H33.74v20.244h5.11V14.016 c1.837-1.708,3.65-2.563,5.435-2.563c2.224,0,3.334,1.118,3.334,3.353v12.764h5.111V14.864C52.73,9.84,50.397,7.326,45.732,7.326z"/>

                  <!-- o -->
                  <path d="M66.516,7.135c-6.812,0-10.218,3.437-10.218,10.313c0.023,6.864,3.432,10.296,10.218,10.296 c6.809,0,10.217-3.432,10.217-10.296C76.733,10.572,73.325,7.135,66.516,7.135z M66.516,23.713c-3.406,0-5.109-2.113-5.109-6.342 c0-4.125,1.703-6.188,5.109-6.188c3.404,0,5.108,2.063,5.108,6.188C71.624,21.6,69.92,23.713,66.516,23.713z"/>

                  <!-- d -->
                  <path d="M93.894,8.29c-1.427-0.642-3.016-0.964-4.764-0.964c-6.528,0-9.794,3.239-9.794,9.718 c0,7.017,3.401,10.525,10.199,10.525c3.213,0,6.369-0.404,9.466-1.215V0h-5.107V8.29z M93.894,22.499 c-1.313,0.501-2.895,0.752-4.742,0.752c-3.179,0-4.764-2.113-4.764-6.346c0-3.558,1.585-5.337,4.764-5.337 c1.848,0,3.43,0.347,4.742,1.043V22.499z"/>

                  <!-- i -->
                  <path d="M103.821,0h5.106v4.05h-5.106V0z"/>

                  <!-- i -->
                  <path d="M103.821,7.327h5.106v20.243h-5.106V7.327z"/>

                  <!-- s -->
                  <path d="M124.494,15.231h-4.578c-1.603,0-2.408-0.641-2.408-1.93c0-1.412,2.361-2.119,5.127-2.119 c2.637,0,5.394,0.448,7.644,1.35V8.29c-2.25-0.771-4.964-1.155-7.509-1.155c-6.001,0-9.983,2.118-9.983,6.359 c0,4.115,2.057,6.172,6.169,6.172h4.961c1.48,0,2.215,0.642,2.215,1.928c0,1.414-1.414,2.119-3.613,2.119 c-2.945,0-6.518-0.449-8.77-1.35v4.244c2.252,0.771,5.761,1.153,8.578,1.153c5.732,0,8.912-2.119,8.912-6.361 C131.238,17.287,128.991,15.231,124.494,15.231z"/>

                  <!-- k -->
                  <path d="M145.087,16.521c4.424-0.958,7.01-4.247,8.2-8.289l-4.839-1.486c-0.813,3.968-4.785,6.959-8.533,6.959V0 h-5.108v27.57h5.108v-8.125c3.925,0,9.258,3.739,9.258,8.125h5.107C154.08,23.01,150.97,17.784,145.087,16.521z"/>

                </g>
              </svg>
            </div>
            <div class="subheading" v-bind:class="{intro: subheadingIntro}">Building an Intelligent World</div>
          </div>
        </div>
      </transition>
      <transition name="fade">
        <div class="part-2 part" v-show="part2Show">
          <div class="inner">
            <p class="text">
              Welcome to the future of AIoT, powered by Innodisk<br>
              Which industry or application do you want to make smarter?
            </p>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>

import Vue from 'vue'

export default {
  name: 'Intro',
  data: function() {
    return {
      introShow: true,
      subheadingIntro: true,
      part1Show: true,
      part2Show: false
    }
  },
  props: {

  },
  mounted() {

    var self = this;

    // 品牌 LOGO 動畫
    Vue.$animeJS({
      targets: '#intro path',
      strokeDashoffset: [Vue.$animeJS.setDashoffset, 0],
      easing: 'easeInOutQuad',
      duration: 2250,
      delay: function(el, i) { return (i + 1) * 125 },
      complete: function() {

        // 填滿
        Vue.$animeJS({
          targets: '#intro path',
          fillOpacity: 1,
          stroke: '#16272e',
          duration: 750,
          easing: 'easeOutQuad'
        });

        // 下方文字出現
        self.subheadingIntro = false;

        setTimeout(function() { self.part1Show = false; }, 1500);
        setTimeout(function() { self.part2Show = true;  }, 2000);
        setTimeout(function() { 
          self.introShow = false;
          self.initFullpage();
        }, 5700);
        
      }
    });

  },
  methods: {
    initFullpage() {this.$parent.initFullpage();}
  }
}

</script>

<style lang="scss" scoped>

#intro {

  // display: none;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(../assets/intro/bg.jpg) center center no-repeat;
  background-size: cover;
  z-index: 3;

  .part-2 {
    transition: opacity .75s ease-out;
  }

  .inner {

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

  }

  .part-1 {
    .inner {
      width: 452px;
      height: 134px;
    }
  }

  .brand {

    height: 82px;
    margin-bottom: 14px;

    // .path {
    //   stroke-dasharray: 100;
    //   animation: dash 5s linear;
    // }

    path {
      // stroke: #16272e;
      stroke: url(#strokeGradient);
      stroke-width: .75px;
      fill: #16272e;
      fill-opacity: 0;
    }

  }

  .subheading {
    font-size: 34px;
    font-weight: 900;
    text-align: center;
    line-height: 37px;
    transition: opacity .75s ease-out;
  }

  .text {
    // position: absolute;
    // top: 50%;
    // width: 100%;
    font-size: 24px;
    line-height: 48px;
    text-align: center;
    margin: 0;
    // transform: translateY(-50%);
  }

}

</style>
