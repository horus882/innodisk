<template>
  <div id="pop">
    <div class="pop-container">
      <div id="pop-pointDetail" class="pop-main">
        <div class="inner">
          <h3 class="title">{{ detail.name }}</h3>
          <p class="text" v-html="detail.text"></p>
          <a class="link" v-if="detail.link" v-bind:href="detail.link" target="_blank">more</a>
          <a class="pop-close text-hide" href="#" title="Close">Close</a>
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
    detail: Object
  },
  mounted() {
  },
  methods: {
  }
}

</script>

<style lang="scss" scoped>

#pop {

  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #fff, $alpha: 0);
  z-index: 2;
  pointer-events: none;

  .pop-container {
    position: absolute;
    width: 100%;
    height: auto;
    min-height: 100vh;
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
  }

  #pop-pointDetail {
    width: 100%;
    padding: 30px 0 30px 70px;
    background: #fff;

    .inner {
      width: 530px;
      &::before {
        content: '';
        position: absolute;
        top: -18px;
        left: -40px;
        width: 8px;
        height: 31px;
        background: url(../assets/images/common/pop-pointDetail-deco.png) 0 0 no-repeat;
        background-size: contain;
      }
    }

    .title {
      color: $primary-color;
      font-size: 18px;
      margin: 0 auto;
      padding: 15px 0;
    }

    .text {
      font-size: 14px;
      font-weight: 600;
      text-align: justify;
      line-height: 1.71428;
      margin: 0 auto 0;
    }

    .link {
      display: block;
      width: 65px;
      height: 17px;
      color: #fff;
      font-size: 13px;
      text-indent: 8px;
      line-height: 13px;
      margin-top: 15px;
      background: url(../assets/images/common/pop-pointDetail-more.svg) 0 0 no-repeat;
      background-size: contain;
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
      }
    }

    .pop-close {
      top: -20px;
      right: -60px;
    }

  }

}

</style>
