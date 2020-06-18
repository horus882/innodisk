<template>
  <transition name="fade">
    <header id="header" v-show="!showHeader">
      <transition name="fade">
        <div class="logo" v-show="!showMenu"><a href="./#index"></a></div>
      </transition>
      <a class="menu-toggle" v-on:click="toggleMenu" v-bind:class="{open: showMenu}">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </a>
      <transition name="fade">
        <div class="language" v-show="!showMenu">
          <ul>
            <li><a href="#">中</a></li>
            <li><a href="#">Eg</a></li>
          </ul>
        </div>
      </transition>
    </header>
  </transition>
</template>

<script>

// import Vue from 'vue'

export default {
  name: 'Header',
  data: function() {
    return {
      // menuOpen: false
    }
  },
  props: {
    showMenu: Boolean,
    showHeader: Boolean
  },
  mounted() {
  },
  methods: {
    toggleMenu: function() {
      this.$parent.toggleMenu();
    }
  }
}

</script>

<style lang="scss" scoped>

#header {

  position: fixed;
  top: 0;
  left: 0;
  width: 70px;
  height: 100%;
  background: rgba(255, 255, 255, 0.85);
  z-index: 3;

  .menu-toggle {
    position: absolute;
    top: 23px;
    left: 0;
    width: 70px;
    height: 70px;

    span {
      position: absolute;
      left: 18px;
      width: 33px;
      height: 1px;
      background: $primary-color;
      transition: .25s ease-in-out;
      &:nth-child(1) {top: 26px;}
      &:nth-child(2),
      &:nth-child(3) {top: 35px;}
      &:nth-child(4) {top: 43px;}
    }

    &.open span {
      &:nth-child(1) {top: 35px; left: 50%; width: 0;}
      &:nth-child(2) {transform: rotate(45deg);}
      &:nth-child(3) {transform: rotate(-45deg);}
      &:nth-child(4) {top: 35px; left: 50%; width: 0;}
    }

  }

  .logo {
    position: fixed;
    top: 22px;
    right: 27px;
    width: 171px;
    height: 40px;
    a {
      display: block;
      width: 100%;
      height: 100%;
      background: url(../assets/images/common/header-logo.svg) 0 0 no-repeat;
      background-size: contain;
    }
  }

  .language {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    ul {
      font-size: 0;
      text-align: center;
    }
    li {
      display: inline-block;
      font-size: 13px;
      font-family: Arial, 'sourcehansans-tc', 'Noto Sans S Chinese', 'Noto Sans TC', Tahoma, Verdana, Helvetica, sans-serif;
      font-weight: 600;
      &:nth-child(1)::after {
        content: '/';
        padding-right: 5px;
        padding-left: 5px;
      }
    }
  }

}

.mobile {

  &.fp-viewing-others {
    #header {
      .menu-toggle {
        span {
          background: #fff;
        }
      }
    }
  }

  #header {

    width: 100%;
    height: 0;
    background: none;

    .menu-toggle {

      top: 10px;
      left: 20px;

      span {
        left: 12.5px;
        width: 45px;
        height: 2px;
        &:nth-child(1) {top: 20px;}
        &:nth-child(2),
        &:nth-child(3) {top: 34px;}
        &:nth-child(4) {top: 48px;}
      }

      &.open span {
        &:nth-child(1) {top: 34px;}
        &:nth-child(4) {top: 34px;}
      }

    }

    .logo {

      top: 22.5px;
      right: 13px;
      width: 157px;
      height: 37px;

    }

    .language {
      display: none;
    }

  }

}

.show-menu {
  .mobile {
    &.fp-viewing-others {
      #header {
        .menu-toggle {
          span {
            background: $primary-color;
          }
        }
      }
    }
  }
}

</style>
