<template>
  <div v-bind:id="'page-' + page.idName" class="section page-intro">
    <div class="inner">
      <div class="page-info">
        <h2 class="page-name">{{ $t(page.pageName) }}</h2>
        <p class="page-label"><span>{{ $t(page.pageLabel) }}</span></p>
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
      <a class="learn-more" v-on:click="$trackEvent('Learn More', 'click', page.idName)" :href="'https://aiot.innodisk.com/solution-smart-services/' + $t('common.param')" target="_blank">{{ $t('common.learn_more') }}</a>
    </div>
  </div>
</template>

<script>

// import $ from 'jquery'

export default {
  name: 'Service',
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

#page-healthcare {

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(../assets/images/service/bg.jpg) center center no-repeat;
    background-size: cover;
    z-index: -1;
  }

  #healthcare-point-1 {
    transform: translateX(390%) translateY(-280%);
    .ring { transition-delay: .1s; }
    .info {
      top: 50%;
      left: 96%;
      transform: translateY(-9px);
      svg path { stroke-dasharray: 63; transition-delay: .45s; }
      @media (min-width: $screen-lg) {
        svg { width: 86px; height: 18px; }
      }
    }
    .label {
      top: -37px;
      left: 66px;
      width: 122px;
      height: 48px;
      text-indent: 10px;
      line-height: 56px;
      background-image: url(../assets/images/service/point-1-label-md.png);
      transition-delay: .8s;
      @media (min-width: $screen-lg) {
        top: -55px;
        left: 91px;
        width: 171px;
        height: 68px;
        text-indent: 18px;
        line-height: 78px;
        background-image: url(../assets/images/service/point-1-label-lg.png);
      }
      &::before {
        bottom: -4px;
        left: -5px;
        @media (min-width: $screen-lg) {
          bottom: -5px;
          left: -7px;
        }
      }
    }
  }

  #healthcare-point-2 {
    transform: translateX(-490%) translateY(70%);
    .ring { transition-delay: .25s; }
    .info {
      top: 82%;
      right: 82%;
      transform: translateX(4px);
      svg path { stroke-dasharray: 35; transition-delay: .6s; }
      @media (min-width: $screen-lg) {
        transform: translateX(2px);
        svg { width: 38px; height: 34px; }
      }
    }
    .label {
      top: 24px;
      right: 29px;
      width: 156px;
      height: 47px;
      text-indent: 18px;
      line-height: 36px;
      background-image: url(../assets/images/service/point-2-label-md.png);
      transition-delay: .95s;
      @media (min-width: $screen-lg) {
        top: 34px;
        right: 40px;
        width: 219px;
        height: 66px;
        text-indent: 29px;
        line-height: 50px;
        background-image: url(../assets/images/service/point-2-label-lg.png);
      }
      &::before {
        top: -5px;
        right: -5px;
        @media (min-width: $screen-lg) {
          top: -5px;
          right: -7px;
        }
      }
    }
  }

  #healthcare-point-3 {
    transform: translateX(580%) translateY(490%);
    .ring { transition-delay: .4s; }
    .info {
      top: 50%;
      right: 96%;
      transform: translateY(-14px);
      svg path { stroke-dasharray: 64; transition-delay: .75s; }
      @media (min-width: $screen-lg) {
        transform: translateX(2px);
        svg { width: 82px; height: 22px; }
      }
    }
    .label {
      top: -48px;
      right: 60px;
      width: 174px;
      height: 48px;
      text-indent: 20px;
      line-height: 56px;
      background-image: url(../assets/images/service/point-3-label-md.png);
      transition-delay: 1.1s;
      @media (min-width: $screen-lg) {
        top: -68px;
        right: 82px;
        width: 244px;
        height: 68px;
        text-indent: 32px;
        line-height: 80px;
        background-image: url(../assets/images/service/point-3-label-lg.png);
      }
      &::before {
        bottom: -3px;
        right: -5px;
        @media (min-width: $screen-lg) {
          bottom: -4px;
          right: -7px;
        }
      }
    }
  }

  &.page-intro {
    #healthcare-point-1 { svg path { stroke-dashoffset: 63; } .label { transform: translateX(-10px); } }
    #healthcare-point-2 { svg path { stroke-dashoffset: 35; } .label { transform: translateX(10px); } }
    #healthcare-point-3 { svg path { stroke-dashoffset: -64; } .label { transform: translateX(10px); } }
  }

}

.mobile #page-healthcare {

  &::before {
    background-image: url(../assets/images/service/m-bg.jpg);
    background-position: right top;
  }

  #healthcare-point-1 {
    // top: 304px;
    left: 98px;
    margin-top: -100px;
    &::before {
      top: -35px;
      left: -57px;
      width: 27px;
      height: 75px;
      background-image: url(../assets/images/service/m-point-1-label-before.png);
    }
    &::after {
      top: 8px;
      right: -75px;
      width: 59px;
      height: 8px;
      background-image: url(../assets/images/service/m-point-1-label-after.png);
    }
    .label {
      transition-delay: .1s;
    }
  }

  #healthcare-point-2 {
    // top: 415px;
    left: 98px;
    margin-top: 8px;
    &::before {
      display: none;
    }
    &::after {
      top: 31px;
      right: -92px;
      width: 80px;
      height: 8px;
      background-image: url(../assets/images/service/m-point-2-label-after.png);
    }
    .label {
      transition-delay: .2s;
    }
  }

  #healthcare-point-3 {
    // top: 528px;
    left: 98px;
    margin-top: 124px;
    &::before {
      display: none;
    }
    &::after {
      top: 62px;
      right: 28px;
      width: 8px;
      height: 28px;
      background-image: url(../assets/images/service/m-point-3-label-after.png);
    }
    .label {
      transition-delay: .3s;
    }
  }

}

</style>
