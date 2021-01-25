<template>
  <div id="page-index" class="section page-intro">
    <div class="inner">
      <nav>
        <ul class="anchors">
          <li v-for="(item, index) in anchors" v-bind:key="index">
            <div class="anchor" tabindex="0" v-bind:class="'anchor-' + item.idName" v-on:click="moveToPage(item.idName)" v-on:keyup.enter="moveToPage(item.idName)">
              <p class="page-name">{{ item.pageName }}</p>
              <!-- <p class="page-label">{{ item.pageLabel }} <a v-if="item.link" v-on:click.stop v-bind:href="item.link" target="_blank">more</a></p> -->
              <p class="page-label">{{ item.pageLabel }} <a v-if="item.more">{{ $t('common.more') }}</a></p>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>

import $ from 'jquery'

export default {
  name: 'Index',
  computed: {
    anchors() {
      return [
        {
          idName: this.pages[1].idName,
          pageName: this.$t(this.pages[1].pageName),
          pageLabel: this.$t(this.pages[1].pageLabel),
          more: this.pages[1].more
        },
        {
          idName: this.pages[2].idName,
          pageName: this.$t(this.pages[2].pageName),
          pageLabel: this.$t(this.pages[2].pageLabel),
          more: this.pages[2].more
        },
        {
          idName: this.pages[3].idName,
          pageName: this.$t(this.pages[3].pageName),
          pageLabel: this.$t(this.pages[3].pageLabel),
          more: this.pages[3].more
        },
        {
          idName: this.pages[4].idName,
          pageName: this.$t(this.pages[4].pageName),
          pageLabel: this.$t(this.pages[4].pageLabel),
          more: this.pages[4].more
        },
        {
          idName: this.pages[5].idName,
          pageName: this.$t(this.pages[5].pageName),
          pageLabel: this.$t(this.pages[5].pageLabel),
          more: this.pages[5].more
        }
      ]
    }
  },
  data: function() {
    return {
      // anchors: [
      //   {
      //     idName: this.pages[1].idName,
      //     pageName: this.pages[1].pageName,
      //     pageLabel: this.pages[1].pageLabel,
      //     more: this.pages[1].more
      //   },
      //   {
      //     idName: this.pages[2].idName,
      //     pageName: this.pages[2].pageName,
      //     pageLabel: this.pages[2].pageLabel,
      //     more: this.pages[2].more
      //   },
      //   {
      //     idName: this.pages[3].idName,
      //     pageName: this.pages[3].pageName,
      //     pageLabel: this.pages[3].pageLabel,
      //     more: this.pages[3].more
      //   },
      //   {
      //     idName: this.pages[4].idName,
      //     pageName: this.pages[4].pageName,
      //     pageLabel: this.pages[4].pageLabel,
      //     more: this.pages[4].more
      //   },
      //   {
      //     idName: this.pages[5].idName,
      //     pageName: this.pages[5].pageName,
      //     pageLabel: this.pages[5].pageLabel,
      //     more: this.pages[5].more
      //   },
      // ]
    }
  },
  props: {
    pages: Array
  },
  mounted() {
  },
  methods: {
    moveToPage: function(page) {
      $.fn.fullpage.moveTo(page, true);
    }
  }
}

</script>

<style lang="scss">

#page-index {

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(../assets/images/index/bg.jpg) center center no-repeat;
    background-size: cover;
    z-index: -1;
  }

  &::after {
    transition-property: transform, opacity;
    transition-duration: .5s;
    transition-timing-function: ease-out;
    background-image: url(../assets/images/index/light_md.png);
    background-size: 1200px 675px;
  }

  &.page-intro::after {
    transform: translateY(30px);
    opacity: 0;
  }

  @media (min-width: $screen-lg) and (min-height: $screen-lg-height) {
    &::after {
      background-image: url(../assets/images/index/light_lg.png);
      background-size: 1900px 950px;
    }
  }

  .anchor {
    position: absolute;
    top: 50%;
    left: 50%;
    white-space: nowrap;
    cursor: pointer;
    transition-property: transform, opacity;
    transition-duration: .5s;
    transition-timing-function: ease-out;
  }

  .anchor::before,
  .anchor::after {
    content: '';
    position: absolute;
    bottom: -35px;
    left: -35px;
    width: 25px;
    height: 25px;
    border: #fff 1px solid;
    border-radius: 50%;
    box-shadow: rgba(255, 255, 255, 0.75) 0 0 15px, rgba(255, 255, 255, 0.75) 0 0 15px;
    transition-property: transform, opacity;
    transition-delay: 0.5s;
    transition-duration: .75s;
    transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
    animation: pointScale 2s ease-in-out infinite;
    @media (min-width: $screen-lg) and (min-height: $screen-lg-height) {
      width: 35px;
      height: 35px;
    }
  }

  .anchor::after {
    bottom: -27px;
    left: -27px;
    width: 11px;
    height: 11px;
    border: 0;
    background-color: #fff;
    @media (min-width: $screen-lg) and (min-height: $screen-lg-height) {
      bottom: -24px;
      left: -24px;
      width: 15px;
      height: 15px;
    }
  }

  .anchor-manufacturing {
    margin: -165px 0 0 350px;
    transition-delay: .3s;
    &::before {bottom: -48px; left: -15px; transition-delay: .9s; animation-delay: .35s;}
    &::after {bottom: -40px; left: -7px; transition-delay: .9s; animation-delay: .35s;}
    @media (min-width: $screen-lg) and (min-height: $screen-lg-height) {
      &::before {bottom: -51px; left: -8px;}
      &::after {bottom: -40px; left: 3px;}
    }
  }

  .anchor-facialRecognition {
    margin: -98px 0 0 56px;
    transition-delay: .2s;
    &::before {transition-delay: .7s; animation-delay: .7s;}
    &::after {transition-delay: .7s; animation-delay: .7s;}
    @media (min-width: $screen-lg) and (min-height: $screen-lg-height) {
      &::before {bottom: -19px; left: -46px;}
      &::after {bottom: -8px; left: -35px;}
    }
  }

  .anchor-roadInfrastructure {
    margin: -250px 0 0 -46px;
    transition-delay: .1s;
    &::before {bottom: -46px; left: -35px; transition-delay: .5s; animation-delay: 1.05s;}
    &::after {bottom: -38px; left: -27px; transition-delay: .5s; animation-delay: 1.05s;}
    @media (min-width: $screen-lg) and (min-height: $screen-lg-height) {
      &::before {bottom: -42px; left: -42px;}
      &::after {bottom: -31px; left: -31px;}
    }
  }

  .anchor-healthcare {
    margin: -156px 0 0 -292px;
    transition-delay: .15s;
    &::before {bottom: -25px; left: -35px; transition-delay: .6s; animation-delay: 1.4s;}
    &::after {bottom: -17px; left: -27px; transition-delay: .6s; animation-delay: 1.4s;}
    @media (min-width: $screen-lg) and (min-height: $screen-lg-height) {
      &::before {bottom: -34px; left: -50px;}
      &::after {bottom: -23px; left: -39px;}
    }
  }

  .anchor-others {
    margin: -88px 0 0 -458px;
    transition-delay: .25s;
    &::before {bottom: -40px; left: -35px; transition-delay: .8s; animation-delay: 1.75s;}
    &::after {bottom: -32px; left: -27px; transition-delay: .8s; animation-delay: 1.75s;}
    @media (min-width: $screen-lg) and (min-height: $screen-lg-height) {
      &::before {bottom: -52px; left: -28px;}
      &::after {bottom: -41px; left: -17px;}
    }
  }

  @media (min-width: $screen-lg) and (min-height: $screen-lg-height) {
    .anchor-manufacturing { margin: -262px 0 0 528px; }
    .anchor-facialRecognition { margin: -178px 0 0 72px; }
    .anchor-roadInfrastructure { margin: -374px 0 0 -38px; }
    .anchor-healthcare { margin: -254px 0 0 -382px; }
    .anchor-others { margin: -158px 0 0 -618px; }
  }

  &.page-intro .anchor {
    transform: translateY(50px);
    opacity: 0;
    &::before,
    &::after {
      transform: scale(0.5);
      opacity: 0;
    }
  }

  .page-name {
    font-size: 28px;
    font-weight: 400;
    margin: 0 0 5px;
    @media (min-width: $screen-lg) and (min-height: $screen-lg-height) {
      font-size: 40px;
      font-weight: 300;
    }
  }

  .page-label {
    font-size: 14px;
    font-weight: 800;
    @media (min-width: $screen-lg) and (min-height: $screen-lg-height) {
      font-size: 20px;
      font-weight: 700;
    }
    a {
      display: inline-block;
      width: 57px;
      height: 13px;
      color: #fff;
      font-size: 13px;
      font-weight: 300;
      line-height: 13px;
      margin-left: 2px;
      padding-left: 12px;
      background: url(../assets/images/index/btn-more.svg) 0 0 no-repeat;
      background-size: contain;
      box-sizing: border-box;
      @media (min-width: $screen-lg) and (min-height: $screen-lg-height) {
        width: 80px;
        height: 18px;
        font-size: 18px;
        line-height: 14px;
        padding-left: 16px;
        vertical-align: middle;
      }
    }
  }

}

.mobile #page-index {

  &::before { background-image: url(../assets/images/index/m-bg.jpg); background-position: center top; }
  &::after { content: none; }

  nav, .fp-scroller, .anchors {
    height: 100%;
    box-sizing: border-box;
  }

  .anchors {
    position: absolute;
    top: 50%;
    width: 100%;
    height: auto;
    padding: 144px 0 0 129px;
    transform: translateY(-60%);
    background: url(../assets/images/index/m-extra-bg.png) center 20px no-repeat;
    background-size: 100% auto;
    perspective: 500px;
    li {
      // transition-duration: .5s;
      // transition-timing-function: ease-out;
      // &:nth-child(1) { transition-delay: .1s; }
      // &:nth-child(2) { transition-delay: .2s; }
      // &:nth-child(3) { transition-delay: .3s; }
      // &:nth-child(4) { transition-delay: .4s; }
      // &:nth-child(5) { transition-delay: .5s; }
    }
  }

  &.page-intro {
    .anchor {
      transform: translateY(-50px) rotateX(90deg);
      opacity: 0;
    }
  }

  .anchor {
    position: relative;
    top: 0;
    left: 0;
    &::before,
    &::after {
      content: none;
    }
  }

  .page-name {
    font-size: 32px;
    font-weight: 400;
    line-height: 43px;
    margin: 0 0 2.5px;
    padding-left: 12px;
    background: rgba($color: #fff, $alpha: 0.7);
  }

  .page-label {
    position: relative;
    font-size: 16.5px;
    font-weight: 800;
    line-height: 23px;
    padding-left: 12px;
    box-sizing: border-box;
    background: rgba($color: #fff, $alpha: 0.7);
    a {
      position: absolute;
      right: -64px;
      width: 64px;
      height: 23px;
      font-size: 14px;
      line-height: 22px;
      margin-left: 0;
      padding-left: 14px;
      background-image: url(../assets/images/index/m-btn-more.svg);
    }
  }

  .anchor-manufacturing {
    width: 289px;
    margin: 0 0 44px;
    transition-delay: .1s;
    .page-label {
      width: 225px;
    }
  }
  .anchor-facialRecognition {
    width: 320px;
    margin: 0 0 54px;
    transition-delay: .2s;
    .page-label {
      width: 258px;
    }
  }
  .anchor-roadInfrastructure {
    width: 304px;
    margin: 0 0 57px;
    transition-delay: .3s;
    .page-label {
      width: 241px;
    }
  }
  .anchor-healthcare {
    width: 213px;
    margin: 0 0 49px;
    transition-delay: .4s;
    .page-label {
      width: 150px;
    }
  }
  .anchor-others {
    width: 130px;
    margin: 0 0 0;
    transition-delay: .5s;
  }

}

@keyframes pointScale {
  0% { transform: scale(1) }
  50% { transform: scale(1.3) }
  100% { transform: scale(1) }
}



</style>
