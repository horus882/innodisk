<template>
  <div id="page-index" class="section page-intro">
    <div class="inner">
      <nav>
        <ul class="anchors">
          <li v-for="(item, index) in anchors" v-bind:key="index">
            <div class="anchor" tabindex="0" v-bind:class="'anchor-' + item.idName" v-on:click="moveToPage(item.idName)" v-on:keyup.enter="moveToPage(item.idName)">
              <p class="page-name">{{ item.pageName }}</p>
              <p class="page-label">{{ item.pageLabel }} <a v-if="item.link" v-on:click.stop v-bind:href="item.link" target="_blank">more</a></p>
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
  data: function() {
    return {
      anchors: [
        {
          idName: this.pages[1].idName,
          pageName: this.pages[1].pageName,
          pageLabel: this.pages[1].pageLabel,
          link: this.pages[1].moreLink
        },
        {
          idName: this.pages[2].idName,
          pageName: this.pages[2].pageName,
          pageLabel: this.pages[2].pageLabel,
          link: this.pages[2].moreLink
        },
        {
          idName: this.pages[3].idName,
          pageName: this.pages[3].pageName,
          pageLabel: this.pages[3].pageLabel,
          link: this.pages[3].moreLink
        },
        {
          idName: this.pages[4].idName,
          pageName: this.pages[4].pageName,
          pageLabel: this.pages[4].pageLabel,
          link: this.pages[4].moreLink
        },
        {
          idName: this.pages[5].idName,
          pageName: this.pages[5].pageName,
          pageLabel: this.pages[5].pageLabel,
          link: this.pages[5].moreLink
        },
      ]
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
    background-image: url(../assets/images/index/light_md.png);
    background-size: 1200px 675px;
  }

  @media (min-width: $screen-lg) {

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
  }

  .anchor-automation { margin: -165px 0 0 350px; }
  .anchor-security { margin: -98px 0 0 56px; }
  .anchor-infrastructure { margin: -250px 0 0 -46px; }
  .anchor-service { margin: -156px 0 0 -292px; }
  .anchor-others { margin: -88px 0 0 -458px; }

  @media (min-width: $screen-lg) {
    .anchor-automation { margin: -262px 0 0 528px; }
    .anchor-security { margin: -178px 0 0 72px; }
    .anchor-infrastructure { margin: -374px 0 0 -38px; }
    .anchor-service { margin: -254px 0 0 -382px; }
    .anchor-others { margin: -158px 0 0 -618px; }
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
    @media (min-width: $screen-lg) {
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
    @media (min-width: $screen-lg) {
      bottom: -24px;
      left: -24px;
      width: 15px;
      height: 15px;
    }
  }

  .anchor-automation {
    &::before {bottom: -48px; left: -15px;}
    &::after {bottom: -40px; left: -7px;}
    @media (min-width: $screen-lg) {
      &::before {bottom: -51px; left: -8px;}
      &::after {bottom: -40px; left: 3px;}
    }
  }

  .anchor-security {
    @media (min-width: $screen-lg) {
      &::before {bottom: -19px; left: -46px;}
      &::after {bottom: -8px; left: -35px;}
    }
  }

  .anchor-infrastructure {
    &::before {bottom: -46px; left: -35px;}
    &::after {bottom: -38px; left: -27px;}
    @media (min-width: $screen-lg) {
      &::before {bottom: -42px; left: -42px;}
      &::after {bottom: -31px; left: -31px;}
    }
  }

  .anchor-service {
    &::before {bottom: -25px; left: -35px;}
    &::after {bottom: -17px; left: -27px;}
    @media (min-width: $screen-lg) {
      &::before {bottom: -34px; left: -50px;}
      &::after {bottom: -23px; left: -39px;}
    }
  }

  .anchor-others {
    &::before {bottom: -40px; left: -35px;}
    &::after {bottom: -32px; left: -27px;}
    @media (min-width: $screen-lg) {
      &::before {bottom: -52px; left: -28px;}
      &::after {bottom: -41px; left: -17px;}
    }
  }

  .page-name {
    font-size: 28px;
    font-weight: 400;
    margin: 0 0 5px;
    @media (min-width: $screen-lg) {
      font-size: 40px;
      font-weight: 300;
    }
  }

  .page-label {
    font-size: 14px;
    font-weight: 800;
    @media (min-width: $screen-lg) {
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
      padding-left: 10px;
      background: url(../assets/images/index/btn-more.svg) 0 0 no-repeat;
      background-size: contain;
      box-sizing: border-box;
      @media (min-width: $screen-lg) {
        width: 80px;
        height: 18px;
        font-size: 18px;
        line-height: 14px;
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

  .anchor-automation {
    width: 289px;
    margin: 0 0 44px;
    .page-label {
      width: 225px;
    }
  }
  .anchor-security {
    width: 320px;
    margin: 0 0 54px;
    .page-label {
      width: 258px;
    }
  }
  .anchor-infrastructure {
    width: 304px;
    margin: 0 0 57px;
    .page-label {
      width: 241px;
    }
  }
  .anchor-service {
    width: 213px;
    margin: 0 0 49px;
    .page-label {
      width: 150px;
    }
  }
  .anchor-others {
    width: 130px;
    margin: 0 0 0;
  }

}

</style>
