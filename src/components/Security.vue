<template>
  <div v-bind:id="'page-' + page.idName" class="section page-intro">
    <div class="inner">
      <div class="page-info">
        <h2 class="page-name">{{ page.pageName }}</h2>
        <p class="page-label"><span>{{ page.pageLabel.replace('applications', '') }}</span>Security systems</p>
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

#page-security {

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

  #security-point-1 {
    transform: translateX(-240%) translateY(-250%);
    .info {
      top: 80%;
      right: 80%;
      @media (min-width: $screen-lg) {
        svg { width: 38px; height: 34px; }
      }
    }
    .label {
      top: 23px;
      right: 28px;
      width: 131px;
      height: 47px;
      text-indent: 20px;
      line-height: 34px;
      background-image: url(../assets/images/security/point-1-label-md.png);
      @media (min-width: $screen-lg) {
        top: 33px;
        right: 38px;
        width: 184px;
        height: 66px;
        text-indent: 28px;
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

  #security-point-2 {
    transform: translateX(550%) translateY(40%);
    .info {
      bottom: 92%;
      left: 50%;
      transform: translateX(-6px);
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
      text-indent: 13px;
      line-height: 58px;
      background-image: url(../assets/images/security/point-2-label-md.png);
      @media (min-width: $screen-lg) {
        top: -72px;
        left: 8px;
        width: 138px;
        height: 69px;
        text-indent: 20px;
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

  #security-point-3 {
    transform: translateX(510%) translateY(480%);
    .info {
      right: 96%;
      bottom: 50%;
      transform: translateY(6px);
      @media (min-width: $screen-lg) {
        svg { width: 126px; height: 37px; }
      }
    }
    .label {
      top: -47px;
      right: 90px;
      width: 257px;
      height: 49px;
      text-indent: 24px;
      line-height: 58px;
      background-image: url(../assets/images/security/point-3-label-md.png);
      @media (min-width: $screen-lg) {
        top: -66px;
        right: 126px;
        width: 360px;
        height: 69px;
        text-indent: 36px;
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

  #security-point-4 {
    transform: translateX(130%) translateY(116%);
    .info {
      bottom: 92%;
      left: 50%;
      transform: translateX(-2px);
      @media (min-width: $screen-lg) {
        svg { width: 30px; height: 82px; }
      }
    }
    .label {
      top: -51px;
      left: 22px;
      width: 134px;
      height: 52px;
      text-indent: 12px;
      line-height: 64px;
      background-image: url(../assets/images/security/point-4-label-md.png);
      @media (min-width: $screen-lg) {
        top: -72px;
        left: 32px;
        width: 186px;
        height: 74px;
        text-indent: 20px;
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

}

</style>
