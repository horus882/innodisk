<template>
  <div v-bind:id="'page-' + page.idName" class="section page-intro">
    <div class="inner">
      <div class="page-info">
        <h2 class="page-name">{{ page.pageName }}</h2>
        <p class="page-label"><span>{{ page.pageLabel }}</span></p>
        <p class="page-text">{{ $t(page.pageText) }}</p>
      </div>
      <div class="applications">
        <ul>
          <li v-for="(item, index) in page.apps" v-bind:key="index" v-bind:style="'transition-delay: ' + randomDelay(index) + 's'">
            <a class="item" v-on:click="$trackEvent(item.name.replace('<br>', ' '), 'click', page.idName)" v-bind:href="item.link" target="_blank" v-if="item.extra == 'learn more'">
              <img class="item-image" v-bind:src="item.image">
              <p class="item-name">{{ $t(item.name) }}</p>
              <span class="item-extra">{{ $t(item.extra) }}</span>
            </a>
            <a class="item" v-on:click="showPointDetail(page.idName, index)" v-else-if="item.extra != 'learn more'">
              <img class="item-image" v-bind:src="item.image">
              <p class="item-name">{{ $t(item.name) }}</p>
              <span class="item-extra">{{ $t(item.extra) }}</span>
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
    this.randomDelay();
  },
  methods: {
    randomDelay(index) {
      return this.$parent.randomDelay(index);
    },
    showPointDetail(pageName, pointIndex) {
      this.$parent.showPointDetail(pageName, pointIndex);
    }
  }
}

</script>

<style lang="scss" scoped>

#page-others {

  &::before {
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
    @media (min-width: $screen-lg) {
      font-size: 36px;
    }
  }

  .applications {

    font-size: 0;
    text-align: left;
    padding-top: 17px;

    @media (min-width: $screen-lg) {
      padding-top: 30px;
    }

    ul {
      perspective: 500px;
    }

    li {
      display: inline-block;
      width: 190px;
      height: 120px;
      margin: 8px 2px;
      vertical-align: top;
      transition: transform .75s ease-out, opacity .75s ease-out;
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
      overflow: hidden;
      @media (min-width: $screen-lg) {
        padding-bottom: 28px;
      }
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: $primary-color;
        opacity: 0.4;
        z-index: 1;
      }
      &:hover {
        .item-image {
          opacity: 0.6;
          transform: scale(1.1);
        }
      }
    }

    .item-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      object-fit: cover;
      transition: .35s cubic-bezier(0.5, 1, 0.89, 1);
    }

    .item-name {
      position: relative;
      font-size: 21px;
      z-index: 2;
      white-space: pre-line;
      @media (min-width: $screen-lg) {
        font-size: 26px;
        font-weight: 600;
      }
    }

    .item-extra {
      position: absolute;
      left: 14px;
      bottom: 8px;
      font-size: 12px;
      line-height: 15px;
      z-index: 2;
      &::after {
        content: '';
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: 5px;
        border-style: solid;
        border-width: 3px 0 3px 7px;
        border-color: transparent transparent transparent #fff;
        @media (min-width: $screen-lg) {
          margin-left: 10px;
          border-width: 4px 0 4px 8px;
        }
      }
      @media (min-width: $screen-lg) {
        font-size: 15px;
        font-weight: 300;
        line-height: 20px;
      }
    }

  }

  &.page-intro {
    .applications li {
      transform: translateY(100px) rotateX(50deg);
      opacity: 0;
    }
  }

}

.mobile #page-others {

  &::before {
    background-image: url(../assets/images/others/m-bg.jpg);
    background-position: center top;
  }

  .page-info {
    padding-top: 110px;
  }

  .page-text {
    font-size: 41px;
  }

  .applications {

    // font-size: 0;
    // text-align: left;
    padding-top: 16px;
    padding-bottom: 105px;

    ul {
      margin: 0 -7px;
    }

    li {
      // display: inline-block;
      width: 213px;
      height: 133px;
      margin: 7px 7px;
      // vertical-align: top;
      // transition: transform .75s ease-out, opacity .75s ease-out;
    }

    // .item {
    //   position: relative;
    //   display: block;
    //   width: 100%;
    //   height: 100%;
    //   color: #fff;
    //   padding: 7px 14px 22px;
    //   box-sizing: border-box;
    //   background-color: $primary-color;
    //   background-position: center center;
    //   background-repeat: no-repeat;
    //   background-size: cover;
    //   cursor: pointer;
    //   overflow: hidden;
    //   &::before {
    //     content: '';
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     width: 100%;
    //     height: 100%;
    //     background: $primary-color;
    //     opacity: 0.4;
    //     z-index: 1;
    //   }
    //   &:hover {
    //     .item-image {
    //       opacity: 0.6;
    //       transform: scale(1.1);
    //     }
    //   }
    // }

    // .item-image {
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   width: 100%;
    //   height: 100%;
    //   z-index: 0;
    //   object-fit: cover;
    //   transition: .35s cubic-bezier(0.5, 1, 0.89, 1);
    // }

    // .item-name {
    //   position: relative;
    //   font-size: 21px;
    //   z-index: 2;
    // }

    // .item-extra {
    //   position: absolute;
    //   left: 14px;
    //   bottom: 8px;
    //   font-size: 12px;
    //   line-height: 15px;
    //   z-index: 2;
    //   &::after {
    //     content: '';
    //     display: inline-block;
    //     width: 0;
    //     height: 0;
    //     margin-left: 5px;
    //     border-style: solid;
    //     border-width: 3px 0 3px 7px;
    //     border-color: transparent transparent transparent #fff;
    //   }
    // }

  }

}

</style>
