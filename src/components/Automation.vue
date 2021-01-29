<template>
  <div v-bind:id="'page-' + page.idName" class="section page-intro">
    <div class="inner">
      <div class="page-info">
        <h2 class="page-name">{{ $t(page.pageName) }}</h2>
        <p class="page-label"><span>{{ $t(page.pageLabel) }}</span>{{ $t('manufacturing.pageSubLabel')}}</p>
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
      <a class="learn-more" v-on:click="$trackEvent('Learn More', 'click', page.idName)" href="https://aiot.innodisk.com/solution-smart-automation/" target="_blank">{{ $t('common.learn_more') }}</a>
    </div>
  </div>
</template>

<script>

// import $ from 'jquery'

export default {
  name: 'Automation',
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

#page-manufacturing {

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(../assets/images/automation/bg.jpg) center center no-repeat;
    background-size: cover;
    z-index: -1;
  }

  #manufacturing-point-1 {
    transform: translateX(370%) translateY(-280%);
    .ring { transition-delay: .1s; }
    .info {
      bottom: 92%;
      left: 50%;
      transform: translateX(-2px);
      svg path { stroke-dasharray: 65; transition-delay: .45s; }
      @media (min-width: $screen-lg) {
        svg { width: 30px; height: 82px; }
      }
    }
    .label {
      top: -54px;
      left: 22px;
      width: 251px;
      height: 52px;
      text-indent: 16px;
      line-height: 64px;
      background-image: url(../assets/images/automation/point-1-label-md.png);
      transition-delay: .8s;
      @media (min-width: $screen-lg) {
        top: -74px;
        left: 30px;
        width: 352px;
        height: 74px;
        text-indent: 28px;
        line-height: 90px;
        background-image: url(../assets/images/automation/point-1-label-lg.png);
      }
      &::before {
        bottom: -5px;
        left: -5px;
        @media (min-width: $screen-lg) {
          bottom: -6px;
          left: -7px;
        }
      }
    }
  }

  #manufacturing-point-2 {
    transform: translateX(-320%) translateY(-220%);
    .ring { transition-delay: .25s; }
    .info {
      top: 96%;
      right: 50%;
      transform: translateX(4px);
      svg path { stroke-dasharray: 75; transition-delay: .6s; }
      @media (min-width: $screen-lg) {
        transform: translateX(2px);
        svg { width: 27px; height: 95px; }
      }
    }
    .label {
      top: 77px;
      left: -141px;
      width: 143px;
      height: 47px;
      text-indent: 21px;
      line-height: 35px;
      background-image: url(../assets/images/automation/point-2-label-md.png);
      transition-delay: .95s;
      @media (min-width: $screen-lg) {
        top: 92px;
        left: -200px;
        width: 200px;
        height: 66px;
        text-indent: 32px;
        line-height: 52px;
        background-image: url(../assets/images/automation/point-2-label-lg.png);
      }
      &::before {
        top: -5px;
        right: -5px;
      }
    }
  }

  #manufacturing-point-3 {
    transform: translateX(-500%) translateY(360%);
    .ring { transition-delay: .4s; }
    .info {
      bottom: 50%;
      right: 96%;
      transform: translateY(4px);
      svg path { stroke-dasharray: 64; transition-delay: .75s; }
      @media (min-width: $screen-lg) {
        svg { width: 82px; height: 22px; }
      }
    }
    .label {
      top: -46px;
      left: -152px;
      width: 151px;
      height: 48px;
      text-indent: 22px;
      line-height: 55px;
      background-image: url(../assets/images/automation/point-3-label-md.png);
      transition-delay: 1.1s;
      @media (min-width: $screen-lg) {
        top: -64px;
        left: -210px;
        width: 212px;
        height: 68px;
        text-indent: 34px;
        line-height: 80px;
        background-image: url(../assets/images/automation/point-3-label-lg.png);
      }
      &::before {
        right: -5px;
        bottom: -2px;
      }
    }
  }

  &.page-intro {
    #manufacturing-point-1 { svg path { stroke-dashoffset: -65; } .label { transform: translateX(-10px); } }
    #manufacturing-point-2 { svg path { stroke-dashoffset: 75; } .label { transform: translateX(10px); } }
    #manufacturing-point-3 { svg path { stroke-dashoffset: -64; } .label { transform: translateX(10px); } }
  }

}

.mobile #page-manufacturing {

  &::before {
    background-image: url(../assets/images/automation/m-bg.jpg);
    background-position: center top;
  }

  #manufacturing-point-1 {
    // top: 415px;
    left: 80px;
    margin-top: 10px;
    &::before {
      top: -6px;
      left: -39px;
      width: 22px;
      height: 42px;
      background-image: url(../assets/images/automation/m-point-1-label-before.png);
    }
    &::after {
      top: 15px;
      right: -49px;
      width: 45px;
      height: 8px;
      background-image: url(../assets/images/automation/m-point-1-label-after.png);
    }
    .label {
      transition-delay: .2s;
    }
  }

  #manufacturing-point-2 {
    // top: 304px;
    left: 80px;
    margin-top: -96px;
    &::before {
      top: -34px;
      left: -39px;
      width: 27px;
      height: 75px;
      background-image: url(../assets/images/automation/m-point-2-label-before.png);
    }
    &::after {
      top: 8px;
      right: -68px;
      width: 59px;
      height: 8px;
      background-image: url(../assets/images/automation/m-point-2-label-after.png);
    }
    .label {
      transition-delay: .1s;
    }
  }

  #manufacturing-point-3 {
    // top: 530px;
    left: 80px;
    margin-top: 128px;
    &::before {
      top: -8px;
      left: -39px;
      width: 22px;
      height: 42px;
      background-image: url(../assets/images/automation/m-point-3-label-before.png);
    }
    &::after {
      top: 12px;
      right: -21px;
      width: 8px;
      height: 80px;
      background-image: url(../assets/images/automation/m-point-3-label-after.png);
    }
    .label {
      transition-delay: .3s;
    }
  }

}

</style>
