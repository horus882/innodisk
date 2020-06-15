<template>
  <div v-bind:id="'page-' + page.idName" class="section page-intro">
    <div class="inner">
      <div class="page-info">
        <h2 class="page-name">{{ page.pageName }}</h2>
        <p class="page-label"><span>{{ page.pageLabel }}</span>Public transportation</p>
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
  name: 'Infrastructure',
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

#page-infrastructure {

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(../assets/images/infrastructure/bg.jpg) center center no-repeat;
    background-size: cover;
    z-index: -1;
  }

  #infrastructure-point-1 {
    transform: translateX(-156%) translateY(-198%);
    .info {
      top: 96%;
      right: 50%;
      transform: translateX(4px);
      @media (min-width: $screen-lg) {
        transform: translateX(2px);
        svg { width: 27px; height: 95px; }
      }
    }
    .label {
      top: 77px;
      right: 28px;
      width: 254px;
      height: 46px;
      text-indent: 17px;
      line-height: 34px;
      background-image: url(../assets/images/infrastructure/point-1-label-md.png);
      @media (min-width: $screen-lg) {
        top: 94px;
        right: 30px;
        width: 356px;
        height: 64px;
        text-indent: 28px;
        line-height: 50px;
        background-image: url(../assets/images/infrastructure/point-1-label-lg.png);
      }
      &::before {
        top: -4px;
        right: -5px;
        @media (min-width: $screen-lg) {
          top: -5px;
          right: -7px;
        }
      }
    }
  }

  #infrastructure-point-2 {
    transform: translateX(800%) translateY(78%);
    .info {
      top: 50%;
      right: 96%;
      @media (min-width: $screen-lg) {
        transform: translateX(2px);
        svg { width: 82px; height: 22px; }
      }
    }
    .label {
      top: 6px;
      right: 61px;
      width: 224px;
      height: 49px;
      text-indent: 16px;
      line-height: 60px;
      background-image: url(../assets/images/infrastructure/point-2-label-md.png);
      @media (min-width: $screen-lg) {
        top: 16px;
        right: 86px;
        width: 314px;
        height: 69px;
        text-indent: 24px;
        line-height: 84px;
        background-image: url(../assets/images/infrastructure/point-2-label-lg.png);
      }
      &::before {
        top: 6px;
        right: -6px;
        @media (min-width: $screen-lg) {
          top: 2px;
          right: -10px;
        }
      }
    }
  }

}

.mobile #page-infrastructure {

  &::before {
    background-image: url(../assets/images/infrastructure/m-bg.jpg);
    background-position: right top;
  }

}

</style>
