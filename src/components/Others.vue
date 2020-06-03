<template>
  <div v-bind:id="'page-' + page.idName" class="section">
    <div class="inner">
      <div class="page-info">
        <p class="page-name">{{ page.pageName }}</p>
        <p class="page-label"><span>{{ page.pageLabel }}</span></p>
        <p class="page-text" v-html="page.pageText"></p>
      </div>
      <div class="applications">
        <ul>
          <li v-for="(item, index) in page.apps" v-bind:key="index">
            <a class="item" v-bind:href="item.link" target="_blank" v-bind:style="{'background-image': 'url(' + item.image + ')'}">
              <p class="item-name">{{ item.name }}</p>
              <span class="item-extra">{{ item.extra }}</span>
            </a>
          </li>
          <!-- <li>
            <a class="item" href="#" target="_blank" v-bind:style="{'background-image': 'url(' + page.apps[0].image + ')'}">
              <p class="item-name">{{ page.apps[0].name }}</p>
              <span class="item-extra">{{ page.apps[0].extra }}</span>
            </a>
          </li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

// import $ from 'jquery'

export default {
  name: 'Others',
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

#page-others {

  &::before {
  // &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(../assets/images/others/bg.jpg) center center no-repeat;
    background-size: cover;
    z-index: -1;
  }

  .page-info {
    color: #fff;
  }

  .page-name,
  .page-label {
    display: none;
  }

  .page-text {
    font-size: 28px;
    font-weight: 300;
  }

  .applications {

    font-size: 0;
    text-align: left;
    padding-top: 15px;

    li {
      display: inline-block;
      width: 190px;
      height: 120px;
      margin: 8px 2px;
      vertical-align: top;
      @media (min-width: $screen-lg) {
        width: 240px;
        height: 150px;
      }
    }

    .item {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      color: #fff;
      padding: 7px 14px 22px;
      box-sizing: border-box;
      background-color: $primary-color;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      cursor: pointer;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: $primary-color;
        opacity: 0.4;
        z-index: 0;
      }
    }

    .item-name {
      position: relative;
      font-size: 21px;
      z-index: 1;
    }

    .item-extra {
      position: absolute;
      left: 14px;
      bottom: 8px;
      font-size: 12px;
      line-height: 15px;
      z-index: 1;
      &::after {
        content: '';
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: 5px;
        border-style: solid;
        border-width: 3px 0 3px 7px;
        border-color: transparent transparent transparent #fff;
      }
    }

  }

}

</style>
