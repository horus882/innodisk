<template>
  <div id="menu" v-bind:class="{show: show}">
    <div class="menu-container">
      <div class="menu-main">
        <nav>
          <ul>
            <li v-for="(item, index) in pages.slice(1, 6)" v-bind:key="index">
              <a class="item" tabindex="0" v-bind:class="'item-' + item.idName" v-bind:href="'#' + item.idName" v-on:click="menuToggle">
                {{ item.pageName }}
              </a>
            </li>
          </ul>
        </nav>
        <div class="language">
          <ul>
            <li><a href="#">中</a></li>
            <li><a href="#">Eg</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// import Vue from 'vue'

export default {
  name: 'Menu',
  data: function() {
    return {
    }
  },
  props: {
    pages: Array,
    show: Boolean
  },
  mounted() {
  },
  methods: {
    menuToggle: function() {
      this.$parent.menuToggle();
    }
  }
}

</script>

<style lang="scss" scoped>

#menu {

  // display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  min-height: 100%;
  transform: translateX(-100%);
  transition: .5s ease-in-out;
  z-index: 2;

  &.show {
    transform: translateX(0);
  }

  // pointer-events: none;

  .menu-container {
    position: absolute;
    width: 100%;
    height: 100%;
    // min-height: -webkit-fill-available;
    // min-height: -moz-fill-available;
    // min-height: fill-available;
    background: rgba($color: #fff, $alpha: 1);
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    -webkit-align-items: center;
    -ms-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    -ms-justify-content: center;
    justify-content: center;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .menu-main {
    position: relative;
    padding: 50px 0 70px;
    overflow: hidden;
    nav {
      li {
        padding: 20px 0;
        a {
          font-size: 41px;
          font-weight: 300;
        }
      }
    }

    .language {
      padding: 80px 0 0;
      ul {
        font-size: 0;
      }
      li {
        display: inline-block;
        font-size: 28px;
        font-family: Arial, 'sourcehansans-tc', 'Noto Sans S Chinese', 'Noto Sans TC', Tahoma, Verdana, Helvetica, sans-serif;
        font-weight: 600;
        &:nth-child(1)::after {
          content: '/';
          padding-right: 10px;
          padding-left: 10px;
        }
      }
    }

  }

}

</style>
