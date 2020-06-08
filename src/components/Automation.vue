<template>
  <div v-bind:id="'page-' + page.idName" class="section page-intro">
    <div class="inner">
      <div class="page-info">
        <p class="page-name">{{ page.pageName }}</p>
        <p class="page-label"><span>{{ page.pageLabel }}</span>Agriculture</p>
        <p class="page-text" v-html="page.pageText"></p>
      </div>
      <div class="points">
        <div v-bind:id="page.idName + '-point-1'" class="point" style="transform: translate(360%, -280%);">
          <div class="ring"></div>
          <div class="line">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="21px" height="58px" viewBox="0 0 20.938 57.5" enable-background="new 0 0 20.938 57.5"><path fill="none" stroke="#16272e" stroke-width="2" stroke-miterlimit="10" d="M20.204,0.751L1,19.771V57.5"/></svg>
          </div>
          <div class="label">Human Machine Interface (HMI)</div>
        </div>
        <div v-bind:id="page.idName + '-point-2'" class="point" style="transform: translate(-330%, -220%);">
          <div class="ring"></div>
          <div class="line">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30px" height="77px" viewBox="0 0 20.335 68.326" enable-background="new 0 0 20.335 68.326"><path fill="none" stroke="#16272e" stroke-width="2" stroke-miterlimit="10" d="M19.335,0v49 L0.838,67.554"/></svg>
          </div>
          <div class="label">Industrial Robot</div>
        </div>
        <div v-bind:id="page.idName + '-point-3'" class="point" style="transform: translate(-510%, 340%);">
          <div class="ring"></div>
          <div class="line">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="59px" height="16px" viewBox="0 0 58.156 15.219" enable-background="new 0 0 58.156 15.219"><path fill="none" stroke="#1D313A" stroke-width="2" stroke-miterlimit="10" d="M0.781,0.704 l11.544,13.515h45.8"/></svg>
          </div>
          <div class="label">Conveyor System</div>
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
    .line {
      top: -55px;
      left: 28px;
      @media (min-width: $screen-lg) { top: -92px; left: 36px; }
      svg {
        @media (min-width: $screen-lg) { width: 36px; height: 95px; }
      }
    }
    .label {
      top: -108px;
      left: 46px;
      width: 258px;
      height: 57px;
      text-indent: 16px;
      line-height: 64px;
      background-image: url(../assets/images/automation/point-1-label-md.png);
    }
  }

  #automation-point-2 {
    .line {
      top: 54px;
      left: 4px;
      @media (min-width: $screen-lg) { top: -92px; left: 36px; }
      svg {
        @media (min-width: $screen-lg) { width: 36px; height: 95px; }
      }
    }
    .label {
      top: 127px;
      left: -137px;
      width: 148px;
      height: 52px;
      text-indent: 17px;
      line-height: 45px;
      background-image: url(../assets/images/automation/point-2-label-md.png);
    }
  }

  #automation-point-3 {
    .line {
      top: 26px;
      left: -54px;
      @media (min-width: $screen-lg) { top: -92px; left: 36px; }
      svg {
        @media (min-width: $screen-lg) { width: 36px; height: 95px; }
      }
    }
    .label {
      top: -21px;
      left: -206px;
      width: 157px;
      height: 51px;
      text-indent: 18px;
      line-height: 55px;
      background-image: url(../assets/images/automation/point-3-label-md.png);
    }
  }

}

</style>
