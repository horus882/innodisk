<template>
  <div v-bind:id="'page-' + page.idName" class="section">
    <div class="inner">
      <div class="page-info">
        <p class="page-name">{{ page.pageName }}</p>
        <p class="page-label"><span>{{ page.pageLabel.replace('applications', '') }}</span>Security systems</p>
        <p class="page-text" v-html="page.pageText"></p>
      </div>
    </div>
  </div>
</template>

<script>

// import $ from 'jquery'

export default {
  name: 'Security',
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

#page-security {

  &::before {
  // &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(../assets/images/security/bg.jpg) center center no-repeat;
    background-size: cover;
    z-index: -1;
  }

}

</style>
