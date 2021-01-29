<template>
  <div v-bind:id="'page-' + page.idName" class="section page-intro">
    <div class="inner">
      <div class="page-info">
        <h2 class="page-name">{{ $t(page.pageName) }}</h2>
        <p class="page-label"><span>{{ $t(page.pageLabel.replace('applications', '')) }}</span></p> <!-- Security systems -->
        <p class="page-text">{{ $t(page.pageText) }}</p>
      </div>
      <div class="points">
        <div v-for="(item, index) in page.points" v-bind:key="index" v-bind:id="page.idName + '-point-' + (index + 1)" class="point" v-on:click="showPointDetail(page.idName, index)">
          <div class="ring"></div>
          <div class="info">
            <div class="line" v-html="item.svg"></div>
            <div class="label">{{ $t(item.name) }}</div>
          </div>
        </div>
      </div>
      <a class="learn-more" v-on:click="$trackEvent('Learn More', 'click', page.idName)" href="https://aiot.innodisk.com/solution-smart-security/" target="_blank">{{ $t('common.learn_more') }}</a>
    </div>
  </div>
</template>

<script>

// import $ from 'jquery'

export default {
  name: 'Security',
  data: function() {
    return {
    }
  },
  props: {
    page: Object
  },
  mounted() {
  },
  methods: {
    showPointDetail(pageName, pointIndex) {
      this.$parent.showPointDetail(pageName, pointIndex);
    }
  }
}

</script>

<style lang="scss">

#page-facialRecognition {

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(../assets/images/security/bg.jpg) center center no-repeat;
    background-size: cover;
    z-index: -1;
  }

  #facialRecognition-point-1 {
    transform: translateX(-240%) translateY(-250%);
    .ring { transition-delay: .1s; }
    .info {
      top: 80%;
      right: 80%;
      svg path { stroke-dasharray: 35; transition-delay: .45s; }
      @media (min-width: $screen-lg) {
        svg { width: 38px; height: 34px; }
      }
    }
    .label {
      top: 23px;
      right: 28px;
      width: 131px;
      height: 47px;
      text-indent: 22px;
      line-height: 34px;
      background-image: url(../assets/images/security/point-1-label-md.png);
      transition-delay: .8s;
      @media (min-width: $screen-lg) {
        top: 33px;
        right: 38px;
        width: 184px;
        height: 66px;
        text-indent: 34px;
        line-height: 50px;
        background-image: url(../assets/images/security/point-1-label-lg.png);
      }
      &::before {
        top: -3px;
        right: -3px;
        @media (min-width: $screen-lg) {
          top: -6px;
          right: -6px;
        }
      }
    }
  }

  #facialRecognition-point-2 {
    transform: translateX(550%) translateY(40%);
    .ring { transition-delay: .25s; }
    .info {
      bottom: 92%;
      left: 50%;
      transform: translateX(-6px);
      svg path { stroke-dasharray: 63; transition-delay: .6s; }
      @media (min-width: $screen-lg) {
        transform: translateX(-9px);
        svg { width: 20px; height: 90px; }
      }
    }
    .label {
      top: -52px;
      left: 6px;
      width: 98px;
      height: 49px;
      text-indent: 15px;
      line-height: 58px;
      background-image: url(../assets/images/security/point-2-label-md.png);
      transition-delay: .95s;
      @media (min-width: $screen-lg) {
        top: -72px;
        left: 8px;
        width: 138px;
        height: 69px;
        text-indent: 24px;
        line-height: 82px;
        background-image: url(../assets/images/security/point-2-label-lg.png);
      }
      &::before {
        bottom: -5px;
        left: -6px;
        @media (min-width: $screen-lg) {
          bottom: -6px;
          left: -7px;
        }
      }
    }
  }

  #facialRecognition-point-3 {
    transform: translateX(510%) translateY(480%);
    .ring { transition-delay: .4s; }
    .info {
      right: 96%;
      bottom: 50%;
      transform: translateY(6px);
      svg path { stroke-dasharray: 100; transition-delay: .75s; }
      @media (min-width: $screen-lg) {
        svg { width: 126px; height: 37px; }
      }
    }
    .label {
      top: -47px;
      right: 90px;
      width: 257px;
      height: 49px;
      text-indent: 30px;
      line-height: 58px;
      background-image: url(../assets/images/security/point-3-label-md.png);
      transition-delay: 1.1s;
      @media (min-width: $screen-lg) {
        top: -66px;
        right: 126px;
        width: 360px;
        height: 69px;
        text-indent: 48px;
        line-height: 82px;
        background-image: url(../assets/images/security/point-3-label-lg.png);
      }
      &::before {
        bottom: -3px;
        right: -5px;
        @media (min-width: $screen-lg) {
          bottom: -3px;
          right: -7px;
        }
      }
    }
  }

  #facialRecognition-point-4 {
    transform: translateX(130%) translateY(116%);
    .ring { transition-delay: .55s; }
    .info {
      bottom: 92%;
      left: 50%;
      transform: translateX(-2px);
      svg path { stroke-dasharray: 65; transition-delay: .9s; }
      @media (min-width: $screen-lg) {
        svg { width: 30px; height: 82px; }
      }
    }
    .label {
      top: -51px;
      left: 22px;
      width: 134px;
      height: 52px;
      text-indent: 14px;
      line-height: 64px;
      background-image: url(../assets/images/security/point-4-label-md.png);
      transition-delay: 1.25s;
      @media (min-width: $screen-lg) {
        top: -72px;
        left: 32px;
        width: 186px;
        height: 74px;
        text-indent: 25px;
        line-height: 92px;
        background-image: url(../assets/images/security/point-4-label-lg.png);
      }
      &::before {
        bottom: -4px;
        left: -5px;
        @media (min-width: $screen-lg) {
          bottom: -3px;
          left: -7px;
        }
      }
    }
  }

  &.page-intro {
    #facialRecognition-point-1 { svg path { stroke-dashoffset: 35; } .label { transform: translateX(10px); } }
    #facialRecognition-point-2 { svg path { stroke-dashoffset: -63; } .label { transform: translateX(-10px); } }
    #facialRecognition-point-3 { svg path { stroke-dashoffset: 100; } .label { transform: translateX(10px); } }
    #facialRecognition-point-4 { svg path { stroke-dashoffset: -65; } .label { transform: translateX(-10px); } }
  }

}

.mobile #page-facialRecognition {

  &::before {
    background-image: url(../assets/images/security/m-bg.jpg);
    background-position: center top;
  }

  #facialRecognition-point-1 {
    // top: 305px;
    left: 96px;
    margin-top: -102px;
    &::before {
      top: -35px;
      left: -57px;
      width: 27px;
      height: 75px;
      background-image: url(../assets/images/security/m-point-1-label-before.png);
    }
    &::after {
      top: -12px;
      right: -25px;
      width: 8px;
      height: 29px;
      background-image: url(../assets/images/security/m-point-1-label-after.png);
    }
    .label {
      transition-delay: .1s;
    }
  }

  #facialRecognition-point-2 {
    // top: 503px;
    margin-top: 100px;
    left: 96px;
    &::before {
      display: none;
    }
    &::after {
      top: 15px;
      right: -190px;
      width: 70px;
      height: 31px;
      background-image: url(../assets/images/security/m-point-2-label-after.png);
    }
    .label {
      transition-delay: .3s;
    }
  }

  #facialRecognition-point-3 {
    // top: 603px;
    left: 96px;
    margin-top: 202px;
    &::before {
      display: none;
    }
    &::after {
      top: 55px;
      right: 10px;
      width: 8px;
      height: 28px;
      background-image: url(../assets/images/security/m-point-3-label-after.png);
    }
    .label {
      transition-delay: .4s;
    }
  }

  #facialRecognition-point-4 {
    // top: 402px;
    left: 96px;
    margin-top: -6px;
    &::before {
      display: none;
    }
    &::after {
      top: 55px;
      right: -110px;
      width: 59px;
      height: 8px;
      background-image: url(../assets/images/security/m-point-4-label-after.png);
    }
    .label {
      transition-delay: .2s;
    }
  }

}

</style>
