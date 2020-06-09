<template>
  <div v-bind:id="'page-' + page.idName" class="section page-intro">
    <div class="inner">
      <div class="page-info">
        <h2 class="page-name">{{ page.pageName }}</h2>
        <p class="page-label"><span>{{ page.pageLabel }}</span>Agriculture</p>
        <p class="page-text" v-html="page.pageText"></p>
      </div>
      <div class="points">
        <div v-bind:id="page.idName + '-point-1'" class="point" v-on:click="showPointDetail(page.idName, 0)"> <!-- style="margin: -13% 0 0 17%;" -->
          <div class="ring"></div>
          <div class="info">
            <div class="line"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="21px" height="58px" viewBox="0 0 20.938 57.5" enable-background="new 0 0 20.938 57.5"><path fill="none" stroke="#16272e" stroke-width="2" stroke-miterlimit="10" d="M20.204,0.751L1,19.771V57.5"/></svg></div>
            <div class="label">Human Machine Interface (HMI)</div>
          </div>
        </div>
        <div v-bind:id="page.idName + '-point-2'" class="point" v-on:click="showPointDetail(page.idName, 1)"> <!-- style="margin: -10% 0 0 -15%;" -->
          <div class="ring"></div>
          <div class="info">
            <div class="line"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30px" height="77px" viewBox="0 0 20.335 68.326" enable-background="new 0 0 20.335 68.326"><path fill="none" stroke="#16272e" stroke-width="2" stroke-miterlimit="10" d="M19.335,0v49 L0.838,67.554"/></svg></div>
            <div class="label">Industrial Robot</div>
          </div>
        </div>
        <div v-bind:id="page.idName + '-point-3'" class="point" v-on:click="showPointDetail(page.idName, 2)"> <!-- style="margin: 16% 0 0 -24%;" -->
          <div class="ring"></div>
          <div class="info">
            <div class="line"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="59px" height="16px" viewBox="0 0 58.156 15.219" enable-background="new 0 0 58.156 15.219"><path fill="none" stroke="#1D313A" stroke-width="2" stroke-miterlimit="10" d="M0.781,0.704 l11.544,13.515h45.8"/></svg></div>
            <div class="label">Conveyor System</div>
          </div>
        </div>
      </div>
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

<style lang="scss" scoped>

#page-automation {

  &::before {
  // &::after {
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

  #automation-point-1 {
    transform: translateX(370%) translateY(-280%);
    .info {
      bottom: 92%;
      left: 50%;
      transform: translateX(-2px);
      // @media (min-width: $screen-lg) { bottom: 92%; }
      svg { @media (min-width: $screen-lg) { width: 30px; height: 82px; } }
    }
    .label {
      top: -54px;
      left: 22px;
      width: 251px;
      height: 52px;
      text-indent: 8px;
      line-height: 64px;
      background-image: url(../assets/images/automation/point-1-label-md.png);
      @media (min-width: $screen-lg) {
        top: -74px;
        left: 30px;
        width: 352px;
        height: 74px;
        text-indent: 14px;
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

  #automation-point-2 {
    transform: translateX(-320%) translateY(-220%);
    .info {
      top: 96%;
      right: 50%;
      transform: translateX(4px);
      @media (min-width: $screen-lg) { transform: translateX(2px); } // top: 96%; 
      svg { @media (min-width: $screen-lg) { width: 27px; height: 95px; } }
    }
    .label {
      top: 77px;
      left: -141px;
      width: 143px;
      height: 47px;
      text-indent: 17px;
      line-height: 35px;
      background-image: url(../assets/images/automation/point-2-label-md.png);
      @media (min-width: $screen-lg) {
        top: 92px;
        left: -200px;
        width: 200px;
        height: 66px;
        text-indent: 26px;
        line-height: 52px;
        background-image: url(../assets/images/automation/point-2-label-lg.png);
      }
      &::before {
        top: -5px;
        right: -5px;
      }
    }
  }

  #automation-point-3 {
    transform: translateX(-500%) translateY(360%);
    .info {
      bottom: 50%;
      right: 96%;
      transform: translateY(4px);
      // @media (min-width: $screen-lg) { top: -92px; left: 36px; }
      svg { @media (min-width: $screen-lg) { width: 82px; height: 22px; } }
    }
    .label {
      top: -46px;
      left: -152px;
      width: 151px;
      height: 48px;
      text-indent: 18px;
      line-height: 55px;
      background-image: url(../assets/images/automation/point-3-label-md.png);
      @media (min-width: $screen-lg) {
        top: -64px;
        left: -210px;
        width: 212px;
        height: 68px;
        text-indent: 26px;
        line-height: 80px;
        background-image: url(../assets/images/automation/point-3-label-lg.png);
      }
      &::before {
        right: -5px;
        bottom: -2px;
      }
    }
  }

}

</style>
