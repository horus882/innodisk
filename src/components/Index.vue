<template>
  <div id="page-index" class="section">
    <div class="inner">
      <nav>
        <ul class="anchors">
          <li v-for="(item, index) in anchors" v-bind:key="index">
            <div class="anchor" tabindex="0" v-bind:class="'anchor-' + item.idName" v-on:click="moveToPage(item.idName)" v-on:keyup.enter="moveToPage(item.idName)">
              <p class="page-name">{{ item.pageName }}</p>
              <p class="page-desc">{{ item.pageDesc }} <a v-if="item.link" v-on:click.stop v-bind:href="item.link" target="_blank">more</a></p>
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
          idName: this.pages[1],
          pageName: 'Smart Automation',
          pageDesc: 'Manufacturing',
          link: 'https://www.google.com'
        },
        {
          idName: this.pages[2],
          pageName: 'Smart Security',
          pageDesc: 'Facial recognition applications',
          link: 'https://www.google.com'
        },
        {
          idName: this.pages[3],
          pageName: 'Smart Infrastructure',
          pageDesc: 'Road infrastructure',
          link: 'https://www.google.com'
        },
        {
          idName: this.pages[4],
          pageName: 'Smart Service',
          pageDesc: 'Healthcare',
          link: 'https://www.google.com'
        },
        {
          idName: this.pages[5],
          pageName: 'Others',
          pageDesc: '',
          link: ''
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

<style lang="scss" scoped>

#page-index {

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(../assets/index/bg.jpg) center center no-repeat;
    background-size: cover;
    z-index: -1;
  }

  .anchor {
    position: absolute;
    top: 50%;
    left: 50%;
    white-space: nowrap;
  }

  .anchor-automation { margin: -165px 0 0 350px; }
  .anchor-security { margin: -98px 0 0 56px; }
  .anchor-infrastructure { margin: -250px 0 0 -46px; }
  .anchor-service { margin: -156px 0 0 -292px; }
  .anchor-others { margin: -88px 0 0 -458px; }

  .page-name {
    font-size: 28px;
    font-weight: 300;
    margin: 0 0 5px;
  }

  .page-desc {
    font-size: 14px;
    font-weight: 800;
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
      background: url(../assets/index/btn-more.svg) 0 0 no-repeat;
      background-size: contain;
      box-sizing: border-box;
    }
  }

}

</style>
