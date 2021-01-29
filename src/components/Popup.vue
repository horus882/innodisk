<template>
  <div id="pop" class="intro" v-show="show" v-on:click="hidePointDetail('pop')"> <!-- v-bind:class="{'intro': !show}" -->
    <div class="pop-container">
      <div id="pop-pointDetail" class="pop-main" v-on:click.stop>
        <div class="inner">
          <h3 class="title">{{ $t(detail.name) }}</h3>
          <p class="text">{{ $t(detail.text) }}</p>
          <a :class="{ 'link-lg': detail.type == 'others' }" class="link" v-if="detail.link" v-bind:href="detail.link + $t('common.param')" target="_blank">{{ (detail.type == 'others') ? $t('common.contact_us') : $t('common.more')}}</a>
          <a class="link" v-if="detail.type == 'others'" v-bind:href="'https://aiot.innodisk.com/' + $t('common.param')" target="_blank">{{ $t('common.home')}}</a>
          <a class="pop-close text-hide" href="#" title="Close" v-on:click.prevent="hidePointDetail">Close</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// import Vue from 'vue'

export default {
  name: 'Popup',
  data: function() {
    return {
    }
  },
  props: {
    detail: Object,
    show: Boolean
  },
  mounted() {
  },
  methods: {
    hidePointDetail(from) { // 和 fullpagejs 的 scrollOverflow 衝到的解法
      this.$parent.hidePointDetail(from);
    }
  }
}

</script>

<style lang="scss">

#pop {

  // display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #fff, $alpha: 0);
  z-index: 2;
  // pointer-events: none;

  .pop-container {
    position: absolute;
    width: 100%;
    // height: auto;
    // min-height: 100vh;
    height: 100%;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    -webkit-align-items: center;
    -ms-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    -ms-justify-content: center;
    justify-content: center;
    overflow: hidden;
  }

  .pop-main {position: relative; overflow: hidden;}

  .pop-close {
    position: absolute;
    width: 40px;
    height: 40px;
    background: url(../assets/images/common/pop-close.svg) center center no-repeat;
    background-size: 27px 27px;
    @media (min-width: $screen-lg) {
      width: 60px;
      height: 60px;
      background-size: 40px 40px;
    }
  }

  #pop-pointDetail {
    width: 100%;
    padding: 30px 0 30px 70px;
    background: #fff;
    transition: transform .3s ease-out 0s;
    @media (min-width: $screen-lg) {
      padding-top: 65px;
      padding-bottom: 65px;
    }

    .inner {
      width: 530px;
      transition: opacity .5s ease-out .25s;
      @media (min-width: $screen-lg) {
        width: 724px;
      }
      &::before {
        content: '';
        position: absolute;
        top: -18px;
        left: -40px;
        width: 8px;
        height: 31px;
        background: url(../assets/images/common/pop-pointDetail-deco.png) 0 0 no-repeat;
        background-size: contain;
        @media (min-width: $screen-lg) {
          top: -5px;
          left: -55px;
          width: 11px;
          height: 43px;
        }
      }
    }

    .title {
      color: $primary-color;
      font-size: 18px;
      font-weight: 800;
      margin: 0 auto;
      padding: 15px 0;
      @media (min-width: $screen-lg) {
        font-size: 25px;
        padding-top: 35px;
      }
    }

    .text {
      font-size: 14px;
      font-weight: 600;
      // text-align: justify;
      line-height: 1.71428;
      margin: 0 auto 0;
      white-space: pre-line;
      br {
        content: '';
        display: block;
        margin: .65em 0;
      }
      @media (min-width: $screen-lg) {
        font-size: 19px;
        font-weight: 400;
      }
    }

    .link {
      display: inline-block;
      width: 69px;
      height: 17px;
      color: #fff;
      font-size: 13px;
      text-indent: 8px;
      line-height: 15px;
      margin-top: 15px;
      margin-right: 15px;
      vertical-align: top;
      background: url(../assets/images/common/pop-pointDetail-more.svg) 0 0 no-repeat;
      background-size: contain;
      &.link-lg {
        width: 92px;
        background-image: url(../assets/images/common/pop-pointDetail-more_long.svg);
      }
      @media (min-width: $screen-lg) {
        width: 91px;
        height: 22px;
        font-size: 18px;
        line-height: 18px;
        &.link-lg {
          width: 120px;
        }
      }
      &::after {
        content: '';
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: 5px;
        border-style: solid;
        border-width: 3px 0 3px 5px;
        border-color: transparent transparent transparent #fff;
        vertical-align: middle;
        @media (min-width: $screen-lg) {
          border-width: 4px 0 4px 6px;
        }
      }
    }

    .pop-close {
      top: -20px;
      right: -60px;
      @media (min-width: $screen-lg) {
        top: -16px;
        right: -60px;
      }
    }

  }

  &.intro {
    opacity: 1;
    pointer-events: auto;
    #pop-pointDetail {
      transform: scaleY(0);
      // .title,
      // .text,
      .inner {
        opacity: 0;
      }
    }
  }

}

.mobile #pop {

  #pop-pointDetail {
    padding: 53px 56px 80px;

    .inner {
      width: auto;
      margin: 0;
      &::before {
        display: none;
      }
    }

    .title {
      font-size: 24px;
      padding: 27px 0;
    }

    .text {
      font-size: 16px;
      font-weight: 400;
      line-height: 1.75;
    }

    .link {
      width: 86px;
      height: 22px;
      font-size: 15px;
      text-indent: 10px;
      line-height: 16px;
      &.link-lg {
        width: 120px;
      }
      &::after {
        content: '';
        margin-left: 5px;
        border-width: 4px 0 4px 7px;
      }
    }

    .pop-close {
      top: -40px;
      right: -40px;
    }

  }

}

</style>
