<template>
  <header id="header">
    <div class="logo"><a href="./#index"></a></div>
    <a class="menu-toggle" v-on:click="menuToggle" v-bind:class="{open: menuOpen}">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </a>
    <div class="language">
      <ul>
        <li><a href="#">中</a></li>
        <li><a href="#">Eg</a></li>
      </ul>
    </div>
  </header>
</template>

<script>

// import Vue from 'vue'

export default {
  name: 'Header',
  data: function() {
    return {
      menuOpen: false
    }
  },
  props: {

  },
  mounted() {
  },
  methods: {
    menuToggle: function() {
      this.menuOpen = !this.menuOpen;
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
  z-index: 2;

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
      background: #16272e;
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
      background: url(../assets/common/header-logo.svg) 0 0 no-repeat;
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

</style>
