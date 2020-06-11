<template>
  <div v-bind:id="'page-' + page.idName" class="section page-intro">
    <div class="inner">
      <div class="page-info">
        <h2 class="page-name">{{ page.pageName }}</h2>
        <p class="page-label"><span>{{ page.pageLabel }}</span></p>
        <p class="page-text" v-html="page.pageText"></p>
      </div>
      <div class="points">
        <div v-for="(item, index) in page.points" v-bind:key="index" v-bind:id="page.idName + '-point-' + (index + 1)" class="point" v-on:click="showPointDetail(page.idName, index)">
          <div class="ring"></div>
          <div class="info">
            <div class="line" v-html="item.svg"></div>
            <div class="label">{{ item.name }}</div>
          </div>
        </div>
      </div>
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

#page-service {

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

  #service-point-1 {
    transform: translateX(390%) translateY(-280%);
    .info {
      top: 50%;
      left: 96%;
      transform: translateY(-9px);
      @media (min-width: $screen-lg) {
        svg { width: 86px; height: 18px; }
      }
    }
    .label {
      top: -37px;
      left: 66px;
      width: 122px;
      height: 48px;
      text-indent: 8px;
      line-height: 56px;
      background-image: url(../assets/images/service/point-1-label-md.png);
      @media (min-width: $screen-lg) {
        top: -55px;
        left: 91px;
        width: 171px;
        height: 68px;
        text-indent: 13px;
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

  #service-point-2 {
    transform: translateX(-490%) translateY(70%);
    .info {
      top: 82%;
      right: 82%;
      transform: translateX(4px);
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
      text-indent: 15px;
      line-height: 36px;
      background-image: url(../assets/images/service/point-2-label-md.png);
      @media (min-width: $screen-lg) {
        top: 34px;
        right: 40px;
        width: 219px;
        height: 66px;
        text-indent: 22px;
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

  #service-point-3 {
    transform: translateX(580%) translateY(490%);
    .info {
      top: 50%;
      right: 96%;
      transform: translateY(-14px);
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
      text-indent: 14px;
      line-height: 56px;
      background-image: url(../assets/images/service/point-3-label-md.png);
      @media (min-width: $screen-lg) {
        top: -68px;
        right: 82px;
        width: 244px;
        height: 68px;
        text-indent: 20px;
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

}

</style>
