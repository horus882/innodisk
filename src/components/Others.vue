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
          <li>
            <a class="item" href="#" target="_blank">
              <p class="item-name">Agriculture</p>
              <span class="item-extra">learn more</span>
            </a>
          </li>
          <li>
            <a class="item" href="#" target="_blank">
              <p class="item-name">Agriculture</p>
              <span class="item-extra">learn more</span>
            </a>
          </li>
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
      width: 240px;
      height: 150px;
      margin: 8px 2px;
    }

    .item {
      display: block;
      width: 100%;
      height: 100%;
      color: #fff;
      padding: 7px 14px;
      box-sizing: border-box;
      background: $primary-color;
      cursor: pointer;
    }

    .item-name {
      font-size: 21px;
    }

    .item-extra {
      font-size: 12px;
    }

  }

}

</style>
