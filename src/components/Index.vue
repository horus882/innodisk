<template>
  <div id="index" class="section">
    <p style="text-align: center">INDEX</p>
  </div>
</template>

<script>

// import Vue from 'vue'

export default {
  name: 'Index',
  data: function() {
    return {
    }
  },
  props: {

  },
  mounted() {
  },
  methods: {
  }
}

</script>

<style lang="scss" scoped>

#index {

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

}

</style>
