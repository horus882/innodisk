<template>
  <div id="app">
    <Intro />
    <div id="wrap" v-bind:style="{position: wrapPosition}">
      <Header />
      <div id="main">
        <Index          :pages="pages" />
        <Automation     :page="pages[1]" />
        <Security       :page="pages[2]" />
        <Infrastructure :page="pages[3]" />
        <Service        :page="pages[4]" />
        <Others         :page="pages[5]" />
      </div>
    </div>
  </div>
</template>

<script>

import Intro            from './components/Intro'
import Header           from './components/Header'
import Index            from './components/Index'
import Automation       from './components/Automation'
import Security         from './components/Security'
import Infrastructure   from './components/Infrastructure'
import Service          from './components/Service'
import Others           from './components/Others'

import "normalize.css"

import $ from 'jquery'

export default {
  name: 'App',
  data: function() {
    return {
      isMobile: false,
      wrapPosition: 'fixed',
      pages: [
        {
          idName: 'index',
          pageName: 'Index',
          pageLabel: null,
          pageText: '',
          moreLink: null
        },
        {
          idName: 'automation',
          pageName: 'Smart Automation',
          pageLabel: 'Manufacturing',
          pageText: 'Factories can be made smarter in countless ways.<br>Which solution interests you the most?',
          moreLink: 'https://www.google.com/'
        },
        {
          idName: 'security',
          pageName: 'Smart Security',
          pageLabel: 'Facial recognition applications',
          pageText: 'Facial recognition can be made smarter in countless ways.<br>Which solution interests you the most?',
          moreLink: 'https://www.google.com/'
        },
        {
          idName: 'infrastructure',
          pageName: 'Smart Infrastructure',
          pageLabel: 'Road infrastructure',
          pageText: 'Road infrastructure can be made smarter in countless ways.<br>Which solution interests you the most?',
          moreLink: 'https://www.google.com/'
        },
        {
          idName: 'service',
          pageName: 'Smart Service',
          pageLabel: 'Healthcare',
          pageText: 'Healthcare can be made smarter in countless ways.<br>Which solution interests you the most?',
          moreLink: 'https://www.google.com/'
        },
        {
          // pageIntro: true,
          idName: 'others',
          pageName: 'Others',
          pageLabel: null,
          pageText: 'Which of the applications<br>interest you the most?',
          moreLink: null,
          apps: [
            {
              name: 'Agriculture',
              image: require('./assets/images/others/item-pic-1.jpg'),
              link: 'https://www.google.com/',
              extra: 'learn more'
            },
            {
              name: 'Construction',
              image: require('./assets/images/others/item-pic-2.jpg'),
              link: 'https://www.google.com/',
              extra: 'contact us'
            },
            {
              name: 'Delivery Services',
              image: require('./assets/images/others/item-pic-3.jpg'),
              link: 'https://www.google.com/',
              extra: 'contact us'
            },
            {
              name: 'Public<br>Transportation',
              image: require('./assets/images/others/item-pic-4.jpg'),
              link: 'https://www.google.com/',
              extra: 'learn more'
            },
            {
              name: 'Logistics',
              image: require('./assets/images/others/item-pic-5.jpg'),
              link: 'https://www.google.com/',
              extra: 'contact us'
            },
            {
              name: 'Public services',
              image: require('./assets/images/others/item-pic-6.jpg'),
              link: 'https://www.google.com/',
              extra: 'contact us'
            },
            {
              name: 'Surveillance',
              image: require('./assets/images/others/item-pic-7.jpg'),
              link: 'https://www.google.com/',
              extra: 'contact us'
            },
            {
              name: 'Security systems',
              image: require('./assets/images/others/item-pic-8.jpg'),
              link: 'https://www.google.com/',
              extra: 'learn more'
            },
            {
              name: 'Security<br>check points',
              image: require('./assets/images/others/item-pic-9.jpg'),
              link: 'https://www.google.com/',
              extra: 'contact us'
            },
            {
              name: 'Mining and Drilling',
              image: require('./assets/images/others/item-pic-10.jpg'),
              link: 'https://www.google.com/',
              extra: 'contact us'
            },
            {
              name: 'Oli and Gas',
              image: require('./assets/images/others/item-pic-11.jpg'),
              link: 'https://www.google.com/',
              extra: 'contact us'
            },
            {
              name: 'Retail',
              image: require('./assets/images/others/item-pic-12.jpg'),
              link: 'https://www.google.com/',
              extra: 'learn more'
            },
            {
              name: 'Automated Machines',
              image: require('./assets/images/others/item-pic-13.jpg'),
              link: 'https://www.google.com/',
              extra: 'contact us'
            },
            {
              name: 'Aviation',
              image: require('./assets/images/others/item-pic-14.jpg'),
              link: 'https://www.google.com/',
              extra: 'contact us'
            },
            {
              name: 'Power',
              image: require('./assets/images/others/item-pic-15.jpg'),
              link: 'https://www.google.com/',
              extra: 'contact us'
            },
            {
              name: 'Defense',
              image: require('./assets/images/others/item-pic-16.jpg'),
              link: 'https://www.google.com/',
              extra: 'contact us'
            },
            {
              name: 'Border Security',
              image: require('./assets/images/others/item-pic-17.jpg'),
              link: 'https://www.google.com/',
              extra: 'contact us'
            }
          ]
        }
      ],
      othersItemsArray: []
    }
  },
  props: {},
  components: {
    Intro,
    Header,
    Index,
    Automation,
    Security,
    Infrastructure,
    Service,
    Others
  },
  created() {
    if (/Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      const metaViewPort = document.querySelector('head meta[name="viewport"]');
      metaViewPort.setAttribute('content', 'width=320, user-scalable=no');
      console.log('[Mobile]');
    } else {
      console.log('[Desktop]');
    }
  },
  mounted() {

    // fullpage.js 初始化
    this.initFullpage();
    // this.randomOthersItems();
    for (let i = 0; i < this.pages[5].apps.length; i++) {
      this.othersItemsArray.push(i);
    }

    this.shuffle(this.othersItemsArray);

  },
  methods: {

    // fullpage.js 初始化
    initFullpage() {
      this.wrapPosition = 'relative';
      // var self = this;
      $('#main').fullpage({
        navigation: true,            // 顯示導行列
        navigationPosition: 'left',  // 導行列位置
        anchors: ['index', 'automation', 'security', 'infrastructure', 'service', 'others'],
        // scrollOverflow: true,
        // scrollOverflowOptions: {
        //   disablePointer: true
        // },
        onLeave: function(origin, destination, direction) {
          console.log(origin);
          console.log(destination);
          console.log(direction);
          this[0].classList.add('page-intro');
        },
        afterLoad: function(anchorLink) { //, index
          // console.log(anchorLink);
          // console.log(index);
          document.querySelector('#page-' + anchorLink).classList.remove('page-intro');
          // var result = self.pages.filter(function(item) { // , index, array
          //   return item.idName == anchorLink;
          // });
          // console.log(result);
          // result[0].pageIntro = false;
        }
      });
    },

    randomDelay(index) {
      return this.othersItemsArray[index] * 0.025;
    },

    shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
        }
      return a;
    }

  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');
@import url('https://fonts.googleapis.com/earlyaccess/notosanstc.css');

body {
  min-width: 1000px;
  background: #efefef;
}

a, a:hover {
  color: $primary-color;
  cursor: pointer;
  text-decoration: none;
}

ul, li {
  margin: 0;
  padding-left: 0;
  list-style: none;
}

p {margin: 0;}

#app {
  color: $primary-color;
  font-size: 16px;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: 'Lato', 'sourcehansans-tc', 'Noto Sans S Chinese', 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', Tahoma, Verdana, Arial, Helvetica, sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#wrap {
  position: relative;
  width: 100%;
  z-index: 1;
}

.inner {
  position: relative;
  width: 1000px;
  height: 100%;
  margin: 0 auto;
  // padding: 0 100px;
  // box-sizing: border-box;
  // @media (min-width: $screen-lg) {
  //   max-width: 1660px;
  //   width: 100%;
  // }
}

#main {position: relative;}

.section {

  &#page-automation .inner,
  &#page-security .inner,
  &#page-infrastructure .inner,
  &#page-service .inner {
    width: 100%;
    padding: 0 100px;
    box-sizing: border-box;
    overflow: hidden;
    @media (min-width: $screen-lg) {
      padding: 0 120px;
    }
  }

  &#page-others .inner {
    width: 970px;
    // padding: 0 100px;
    padding: 0 0 0 70px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    // align-items: center;
    flex-direction: column;
    @media (min-width: $screen-lg) {
      width: 1220px;
    }
  }

  position: relative;

  .page-info {

    position: relative;
    // position: absolute;
    // top: 0;
    // left: 0;
    padding-top: 30px;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 316px;
      width: 188px;
      height: 11px;
      background: url(assets/images/common/page-info-deco.svg) 0 bottom no-repeat;
      background-size: 210px auto;
      @media (min-width: $screen-lg) {
        left: 450px;
        width: 296px;
        height: 13px;
        background-size: 332px auto;
      }
    }

    .page-name,
    .page-label,
    .page-text {
      transition: transform .75s ease-out, opacity .75s ease-out;
    }

    .page-name {
      font-size: 48px;
      font-weight: 300;
      line-height: 1;
      margin-bottom: 6px;
      transition-delay: .0s;
      @media (min-width: $screen-lg) {
        font-size: 67px;
        margin-bottom: 10px;
      }
    }

    .page-label {
      font-size: 20px;
      font-weight: 600;
      line-height: 26px;
      margin-bottom: 12px;
      transition-delay: .1s;
      @media (min-width: $screen-lg) {
        font-size: 28px;
        line-height: 38px;
        margin-bottom: 14px;
      }
      span {
        display: inline-block;
        color: #fff;
        padding: 0 5px;
        margin-right: 10px;
        background: #17282f;
        @media (min-width: $screen-lg) {
          padding: 0 8px;
        }
      }
    }
    
    .page-text {
      font-size: 15px;
      font-weight: 600;
      line-height: 1.33;
      transition-delay: .2s;
      @media (min-width: $screen-lg) {
        font-size: 21px;
      }
    }
    
  }

  &.page-intro .page-info {

    .page-name,
    .page-label,
    .page-text {
      opacity: 0;
      transform: translateX(-100px);
    }

  }

  &#page-others .page-info {
    padding-top: 0;
    &::before {
      content: none;
    }
  }

}

.intro {
  opacity: 0;
  pointer-events: none;
}

#fp-nav.left {left: 30px;}
#fp-nav ul li,
.fp-slidesNav ul li {
  width: 9px;
  height: 9px;
  margin: 15px 0;
}

#fp-nav ul li a span,
.fp-slidesNav ul li a span,
#fp-nav ul li a.active span,
#fp-nav ul li:hover a.active span,
.fp-slidesNav ul li a.active span,
.fp-slidesNav ul li:hover a.active span {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  border: $primary-color 2px solid;
  background: #fff;
  box-sizing: border-box;
}

#fp-nav ul li a.active span,
#fp-nav ul li:hover a.active span,
.fp-slidesNav ul li a.active span,
.fp-slidesNav ul li:hover a.active span {
  background: $primary-color;
}

#fp-nav ul li:hover a span, .fp-slidesNav ul li:hover a span {
  width: 100%;
  height: 100%;
  margin: 0;
}

.fade-enter-active, 
.fade-leave-active {
  transition: .75s opacity;
}

.fade-enter, 
.fade-leave-to {
  opacity: 0;
}

</style>
