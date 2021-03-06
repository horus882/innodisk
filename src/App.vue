<template>
  <div id="app" v-bind:class="{mobile: isMobile}">
    <Intro :show="showIntro" />
    <Header :showMenu="showMenu" :showHeader="showIntro" />
    <div id="wrap"> <!-- v-bind:style="{position: wrapPosition}" -->
      <div id="main">
        <Index          :pages="pages" />
        <Automation     :page="pages[1]" />
        <Security       :page="pages[2]" />
        <Infrastructure :page="pages[3]" />
        <Service        :page="pages[4]" />
        <Others         :page="pages[5]" />
      </div>
    </div>
    <Popup :detail="pointDetail" :show="showPopup" />
    <Menu :pages="pages" :show="showMenu" />
  </div>
</template>

<script>

// import Vue from 'vue'

import Intro            from './components/Intro'
import Header           from './components/Header'
import Index            from './components/Index'
import Automation       from './components/Automation'
import Security         from './components/Security'
import Infrastructure   from './components/Infrastructure'
import Service          from './components/Service'
import Others           from './components/Others'
import Popup            from './components/Popup'
import Menu             from './components/Menu'

import "normalize.css"

import $ from 'jquery'

export default {
  name: 'App',
  data: function() {
    return {
      isMobile: false,
      // wrapPosition: 'fixed',
      showIntro: true,
      showPopup: false,
      showMenu: false,
      afterIntro: null,
      pointDetail: {
        name: null,
        text: null,
        link: null,
        type: null
      },
      pages: [
        {
          idName: 'index',
          pageName: 'Index',
          pageLabel: null,
          pageText: '',
          moreLink: null
        },
        {
          idName: 'manufacturing',
          pageName: 'Smart Automation',
          pageLabel: 'Manufacturing',
          pageText: 'Factories can be made smarter in countless ways.<br>Which solution interests you the most?',
          more: true,
          points: [
            {
              name: 'Human Machine Interface (HMI)',
              text: 'HMI devices provide invaluable data and features to workers in smart factories and are critical to maintain speed and precision along assembly lines.<br>HMI devices must deliver high performance and unparalleled stability in challenging manufacturing settings—leaving little room for error.',
              link: 'https://aiot.innodisk.com/solutions-manufacturing/',
              svg:  '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="21px" height="58px" viewBox="0 0 20.938 57.5" enable-background="new 0 0 20.938 57.5"><path fill="none" stroke-width="2" stroke-miterlimit="10" d="M20.204,0.751L1,19.771V57.5"/></svg>'
            },
            {
              name: 'Industrial Robot',
              text: 'Industrial robots are one of the core parts of the smart factories of tomorrow and already constitute key equipment along modern assembly lines.<br>Expected to provide uninterrupted exceptional performance in harsh industrial conditions, industrial robots demand the best components and smartest features to operate at an optimal level.',
              link: 'https://aiot.innodisk.com/solutions-manufacturing/',
              svg:  '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30px" height="77px" viewBox="0 0 20.335 68.326" enable-background="new 0 0 20.335 68.326"><path fill="none" stroke-width="2" stroke-miterlimit="10" d="M19.335,0v49 L0.838,67.554"/></svg>'
            },
            {
              name: 'Conveyor System',
              text: 'Conveyor systems need to keep a rapid pace and maintain perfect coordination with all the other fast-moving equipment and workers on the factory floor. If it stops, everything stops.<br>Conveyor systems need to withstand the tough and challenging conditions present everywhere along an assembly line without even the slightest hiccup in performance.',
              link: 'https://aiot.innodisk.com/solutions-manufacturing/',
              svg:  '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="59px" height="16px" viewBox="0 0 58.156 15.219" enable-background="new 0 0 58.156 15.219"><path fill="none" stroke-width="2" stroke-miterlimit="10" d="M0.781,0.704 l11.544,13.515h45.8"/></svg>'
            }
          ]
        },
        {
          idName: 'facialRecognition',
          pageName: 'Smart Security',
          // pageLabel: 'Facial recognition applications',
          pageLabel: 'Security systems',
          pageText: 'Facial recognition can be made smarter in countless ways.<br>Which solution interests you the most?',
          more: true,
          points: [
            {
              name: 'Smart Camera',
              text: 'Smart camera identification systems need to be able to process biometric information without delay and without error to provide users with the convenience and security they require.<br>Processing complex data sets at a rapid pace puts extreme performance and stability requirements on components used in smart cameras. Further, they are required to maintain perfect uptime and record video without any interruption in diverse applications and environments.',
              link: 'https://aiot.innodisk.com/solution-security-systems/',
              svg:  '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28.037px" height="24.509px" viewBox="0 0 28.037 24.509" enable-background="new 0 0 28.037 24.509"><path fill="none" stroke-width="2" stroke-miterlimit="10" d="M27.384,0.758 L0.691,23.735"/></svg>'
            },
            {
              name: 'Panel PC',
              text: 'Panel PCs used in surveillance applications need to provide security guards and other stakeholders instant access to video feeds from vast numbers of connected devices.<br>Security-focused panel PCs need to provide performance and flexibility while also allowing system operators to manage and maintain connected devices.',
              link: 'https://aiot.innodisk.com/solution-security-systems/',
              svg:  '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="12.92px" height="62.63px" viewBox="0 0 12.92 62.63" enable-background="new 0 0 12.92 62.63"><path fill="none" stroke-width="2" stroke-miterlimit="10" d="M6.459,0v62.632"/></svg>'
            },
            {
              name: 'Network Video Recorder (NVR)',
              text: 'Surveillance applications generate enormous amounts of data every second, thereby requiring high-performance video recording and data processing capabilities that make surveillance data actionable.<br>Network video recorders (NVRs) used in surveillance applications have some of the highest requirements for performance and reliability in the industry, meaning that all hardware and components need to be up for the task.',
              link: 'https://aiot.innodisk.com/solution-security-systems/',
              svg:  '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="89.478px" height="26.083px" viewBox="0 0 89.478 26.083" enable-background="new 0 0 89.478 26.083"><path fill="none" stroke-width="2" stroke-miterlimit="10" d="M89.479,25.083H21.905 L0.85,0.809"/></svg>'
            },
            {
              name: 'Entrance Gate',
              text: 'Entrance gates serve as the last barrier before granting users access to protected areas. While seemingly simple, entrance gates need to work in perfect tandem with other parts of the security system, providing instant access as soon users have proven their identity.<br>Expected to make no mistakes while also providing instant processing and high throughput, entrance gates require excellent communications, high performance, and minimum downtime.',
              link: 'https://aiot.innodisk.com/solution-security-systems/',
              svg:  '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="21px" height="58px" viewBox="0 0 20.938 57.5" enable-background="new 0 0 20.938 57.5"><path fill="none" stroke-width="2" stroke-miterlimit="10" d="M20.204,0.751L1,19.771V57.5"/></svg>'
            }
          ]
        },
        {
          idName: 'roadInfrastructure',
          pageName: 'Smart Infrastructure',
          pageLabel: 'Road infrastructure',
          pageText: 'Road infrastructure can be made smarter in countless ways.<br>Which solution interests you the most?',
          more: true,
          points: [
            {
              name: 'Electronic Toll Collection System',
              text: 'Electronic toll collection (ETC) systems need to process vehicles at a rapid pace while also providing critical traffic data to operators or AI systems for further processing.<br>ETC systems serve vital parts of road infrastructure and must remain operational at an optimal level even in the toughest outdoor climate and weather conditions, e.g., during heatwaves and cold snaps.',
              link: 'https://aiot.innodisk.com/solutions-road-infrastructure/',
              svg:  '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30px" height="77px" viewBox="0 0 20.335 68.326" enable-background="new 0 0 20.335 68.326"><path fill="none" stroke-width="2" stroke-miterlimit="10" d="M19.335,0v49 L0.838,67.554"/></svg>'
            },
            {
              name: 'Roadside Monitoring Station',
              text: 'Roadside monitoring stations provide and process critical data such as traffic data, weather information, and information from nearby infrastructure.<br>Exposed to year-round outside climates, pollution, and other roadside challenges such as shocks and vibrations, roadside monitoring stations require extreme ruggedness. To allow efficient maintenance and management, they also need to provide sophisticated remote management functionality.',
              link: 'https://aiot.innodisk.com/solutions-road-infrastructure/',
              svg:  '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="58.151px" height="15.186px" viewBox="0 0 58.151 15.186" enable-background="new 0 0 58.151 15.186"><path fill="none" stroke-width="2" stroke-miterlimit="10" d="M0.809,14.516L12.353,1 h45.8"/></svg>'
            }
          ]
        },
        {
          idName: 'healthcare',
          pageName: 'Smart Service',
          pageLabel: 'Healthcare',
          pageText: 'Healthcare can be made smarter in countless ways.<br>Which solution interests you the most?',
          more: true,
          points: [
            {
              name: 'MRI Machine',
              text: 'MRI machines generate an extraordinary amount of highly sensitive data that must be processed expediently and securely in a way that makes information quickly actionable by physicians and medical experts.<br>MRI machines need to transmit and store data without any interruption or threats to data integrity despite high levels of electromagnetic interference, all while providing excellent performance for rapid processing.',
              link: 'https://aiot.innodisk.com/solution-healthcare/',
              svg:  '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="62.632px" height="12.921px" viewBox="0 0 62.632 12.921" enable-background="new 0 0 62.632 12.921"><path fill="none" stroke-width="2" stroke-miterlimit="10" d="M0,6.461h62.632"/></svg>'
            },
            {
              name: 'Smart Medical Cart',
              text: 'Medical carts provide medical professionals with important patient information and data processing abilities where they are needed the most.<br>Processing sensitive information in sensitive settings leaves little room for performance lapses or data security issues.',
              link: 'https://aiot.innodisk.com/solution-healthcare/',
              svg:  '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28.037px" height="24.509px" viewBox="0 0 28.037 24.509" enable-background="new 0 0 28.037 24.509"><path fill="none" stroke-width="2" stroke-miterlimit="10" d="M27.384,0.758 L0.691,23.735"/></svg>'
            },
            {
              name: 'Medical All-in-one PC',
              text: 'Medical all-in-one PCs provide healthcare professionals with actionable real-time information from sensors and equipment, ensuring that they make the right decisions at the ideal time.<br>Medical all-in-one PCs have no margin for error, require the highest possible reliability and system stability—all while providing critical information to professionals at a rapid pace.',
              link: 'https://aiot.innodisk.com/solution-healthcare/',
              svg:  '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="59px" height="16px" viewBox="0 0 58.156 15.219" enable-background="new 0 0 58.156 15.219"><path fill="none" stroke-width="2" stroke-miterlimit="10" d="M0.781,0.704 l11.544,13.515h45.8"/></svg>'
            }
          ]
        },
        {
          // pageIntro: true,
          idName: 'others',
          pageName: 'Others',
          pageLabel: null,
          pageText: 'Which of the applications<br>interest you the most?',
          more: false,
          apps: [
            {
              name: 'Agriculture',
              image: require('./assets/images/others/item-pic-1.jpg'),
              link: 'https://aiot.innodisk.com/solution-agriculture/',
              extra: 'learn more'
            },
            {
              name: 'Construction',
              image: require('./assets/images/others/item-pic-2.jpg'),
              link: 'https://aiot.innodisk.com/contact/',
              extra: 'contact us'
            },
            {
              name: 'Delivery Services',
              image: require('./assets/images/others/item-pic-3.jpg'),
              link: 'https://aiot.innodisk.com/contact/',
              extra: 'contact us'
            },
            {
              name: 'Public<br>Transportation',
              image: require('./assets/images/others/item-pic-4.jpg'),
              link: 'https://aiot.innodisk.com/solution-transportation/',
              extra: 'learn more'
            },
            {
              name: 'Logistics',
              image: require('./assets/images/others/item-pic-5.jpg'),
              link: 'https://aiot.innodisk.com/contact/',
              extra: 'contact us'
            },
            {
              name: 'Public Services',
              image: require('./assets/images/others/item-pic-6.jpg'),
              link: 'https://aiot.innodisk.com/contact/',
              extra: 'contact us'
            },
            {
              name: 'Surveillance',
              image: require('./assets/images/others/item-pic-7.jpg'),
              link: 'https://aiot.innodisk.com/contact/',
              extra: 'contact us'
            },
            // {
            //   name: 'Security systems',
            //   image: require('./assets/images/others/item-pic-8.jpg'),
            //   link: 'https://www.google.com/',
            //   extra: 'learn more'
            // },
            {
              name: 'Security<br>Checkpoints',
              image: require('./assets/images/others/item-pic-9.jpg'),
              link: 'https://aiot.innodisk.com/contact/',
              extra: 'contact us'
            },
            {
              name: 'Mining and Drilling',
              image: require('./assets/images/others/item-pic-10.jpg'),
              link: 'https://aiot.innodisk.com/contact/',
              extra: 'contact us'
            },
            {
              name: 'Oil and Gas',
              image: require('./assets/images/others/item-pic-11.jpg'),
              link: 'https://aiot.innodisk.com/contact/',
              extra: 'contact us'
            },
            {
              name: 'Retail',
              image: require('./assets/images/others/item-pic-12.jpg'),
              link: 'https://aiot.innodisk.com/solution-retail/',
              extra: 'learn more'
            },
            {
              name: 'Automated Machines',
              image: require('./assets/images/others/item-pic-13.jpg'),
              link: 'https://aiot.innodisk.com/contact/',
              extra: 'contact us'
            },
            {
              name: 'Aviation',
              image: require('./assets/images/others/item-pic-14.jpg'),
              link: 'https://aiot.innodisk.com/contact/',
              extra: 'contact us'
            },
            {
              name: 'Power',
              image: require('./assets/images/others/item-pic-15.jpg'),
              link: 'https://aiot.innodisk.com/contact/',
              extra: 'contact us'
            },
            // {
            //   name: 'Defense',
            //   image: require('./assets/images/others/item-pic-16.jpg'),
            //   link: 'https://www.innodisk.com/tw/inquiry',
            //   extra: 'contact us'
            // },
            {
              name: 'Border Security',
              image: require('./assets/images/others/item-pic-17.jpg'),
              link: 'https://aiot.innodisk.com/contact/',
              extra: 'contact us'
            }
          ]
        }
      ],
      othersItemsArray: []
    }
  },
  props: {},
  components: { Intro, Header, Index, Automation, Security, Infrastructure, Service, Others, Popup, Menu },
  created() {
    if (/Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      const metaViewPort = document.querySelector('head meta[name="viewport"]');
      metaViewPort.setAttribute('content', 'width=540, user-scalable=no');
      this.isMobile = true;
      console.log('[Mobile]');
      document.body.classList.add('mobile');
    } else {
      this.isMobile = false;
      console.log('[Desktop]');
      document.body.classList.remove('mobile');
    }
    document.querySelector('html').classList.add('show-intro');
    // if (window.devicePixelRatio >= 1) {
    //   document.querySelector('html').classList.add('zoom-normal');
    // }
  },
  mounted() {

    // fullpage.js 初始化
    this.initFullpage();
    this.toggleFullpageScrolling(false);
    // this.toggleIntro();
    // this.toggleFullpageScrolling(true);
    for (let i = 0; i < this.pages[5].apps.length; i++) { this.othersItemsArray.push(i); }
    this.shuffle(this.othersItemsArray);

  },
  methods: {

    // fullpage.js 初始化
    initFullpage() {
      var self = this;
      // self.wrapPosition = 'relative';
      $('#main').fullpage({
        navigation: true,            // 顯示導行列
        navigationPosition: 'left',  // 導行列位置
        anchors: ['index', 'manufacturing', 'facialRecognition', 'roadInfrastructure', 'healthcare', 'others'],
        scrollOverflow: true,
        // scrollOverflowOptions: {disablePointer: true},
        onLeave: function() { // origin, destination, direction
          this[0].classList.add('page-intro');
        },
        afterLoad: function(anchorLink) { //, index
          self.$trackPage(anchorLink);
          if (!self.showIntro) {
            document.querySelector('#page-' + anchorLink).classList.remove('page-intro');
          } else {
            self.afterIntro = anchorLink;
          }
        }
      });
    },

    // 開啟 Point 資訊
    showPointDetail(pageName, pointIndex) {

      var self = this;
      if (self.showPopup == true) return false;
      document.querySelector('html').classList.add('show-pop');

      if (pageName) {

        var result = self.pages.filter(function(item) { return item.idName == pageName; });
        if (pageName != 'others') {
          self.pointDetail.name = result[0].points[pointIndex].name;
          self.pointDetail.text = result[0].points[pointIndex].text;
          self.pointDetail.link = result[0].points[pointIndex].link;
          self.pointDetail.type = 'null';
        } else {
          self.pointDetail.name = result[0].apps[pointIndex].name.replace('<br>', ' ');
          self.pointDetail.text = 'Innodisk offers AIoT solutions optimized for ' + result[0].apps[pointIndex].name + '.<br>Please do not hesitate to contact us to learn more.';
          self.pointDetail.link = result[0].apps[pointIndex].link;
          self.pointDetail.type = 'others';
        }
        self.showPopup = true;
        self.toggleFullpageScrolling(false);
        setTimeout(function() { document.querySelector('#pop').classList.remove('intro'); }, 100);

        this.$trackEvent(self.pointDetail.name, 'click', pageName);

      }

    },

    // 關閉 Point 資訊
    hidePointDetail(from) {

      if (this.isMobile == true && from == 'pop') return false;

      var self = this;
      document.querySelector('#pop').classList.add('intro');
      self.toggleFullpageScrolling(true);
      setTimeout(function() { self.showPopup = false; }, 600);
      document.querySelector('html').classList.remove('show-pop');
      
    },

    // 隨機延遲
    randomDelay(index) { return this.othersItemsArray[index] * 0.025; },

    // 陣列亂數排序
    shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
        }
      return a;
    },

    // 開啟或關閉 Fullpage 捲動
    toggleFullpageScrolling(bool) {
      $.fn.fullpage.setMouseWheelScrolling(bool);
      $.fn.fullpage.setAllowScrolling(bool);
    },

    // 開啟或關閉 Menu
    toggleMenu() {
      this.showMenu = !this.showMenu;
      this.toggleFullpageScrolling(!this.showMenu);
      if (this.showMenu) {
        document.querySelector('html').classList.add('show-menu');
        this.hidePointDetail();
      } else {
        document.querySelector('html').classList.remove('show-menu');
      }
    },

    // 開啟或關閉 Intro
    toggleIntro() {
      this.showIntro = !this.showIntro;
      if (!this.showIntro) {
        document.querySelector('html').classList.remove('show-intro');
        setTimeout(() => {
          document.querySelector('#page-' + this.afterIntro).classList.remove('page-intro');
        }, 250);
      }
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
  &.mobile {
    min-width: 0;
  }
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

.mobile .inner {
  width: 100%;
}

#main {position: relative; z-index: 1; transition: all 700ms ease 0s;}
.show-pop #main,
.show-menu #main {
  opacity: 0.5;
}

.section {

  &#page-manufacturing .inner,
  &#page-facialRecognition .inner,
  &#page-roadInfrastructure .inner,
  &#page-healthcare .inner {
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
      margin-top: 0;
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

  .points {

    .point {

      position: absolute;
      top: 50%;
      left: 50%;
      width: calc(100vh * 0.08);
      height: 8%;
      cursor: pointer;

    }

    .ring {
      position: absolute;
      width: 100%;
      height: 100%;
      transition: .75s cubic-bezier(0.34, 1.56, 0.64, 1);

      &::before,
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url(./assets/images/common/ring-outer.svg) center center no-repeat;
        background-size: contain;
        animation: ringRotateCW 10s linear infinite;
      }

      &::after {
        background-image: url(./assets/images/common/ring-inner.svg);
        animation: ringRotateCCW 10s linear infinite;
      }

      @keyframes ringRotateCW {
        0% { transform: rotate(0deg) }
        100% { transform: rotate(360deg) }
      }

      @keyframes ringRotateCCW {
        0% { transform: rotate(0deg) }
        100% { transform: rotate(-360deg) }
      }

    }

    .info {
      position: absolute;
    }

    .line {
      svg path {
        stroke: $primary-color;
        stroke-dashoffset: 0;
        transition: .75s ease-out;
      }
    }

    .label {
      position: absolute;
      color: #fff;
      font-size: 15px;
      background-position: 0 0;
      background-repeat: no-repeat;
      background-size: contain;
      transition-property: transform, opacity;
      transition-duration: .5s;
      transition-timing-function: ease-out;
      @media (min-width: $screen-lg) {
        font-size: 20px;
      }
      &::before {
        content: '';
        position: absolute;
        width: 7px;
        height: 7px;
        border: $primary-color 3px solid;
        border-radius: 50%;
        @media (min-width: $screen-lg) {
          width: 10px;
          height: 10px;
          border-width: 4px;
        }
      }
    }

  }

  &.page-intro .points {
    .ring {
      transform: scale(0);
      opacity: 0;
    }
    .label {
      opacity: 0;
    }
  }

  .learn-more {
    position: absolute;
    right: 55px;
    bottom: 0;
    width: 190px;
    height: 42px;
    color: #000000;
    font-size: 16px;
    text-indent: 30px;
    line-height: 42px;
    border: #000 1px solid;
    border-bottom: 0;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: rgba(0, 0, 0, 0.6) 0 0 6px;
    transition: transform .5s ease-out, opacity .5s ease-out;
    &::after {
      content: '';
      display: inline-block;
      width: 43px;
      height: 11px;
      margin-left: 14px;
      vertical-align: middle;
      background: url(assets/images/common/learn-more-arrow.png) 0 0 no-repeat;
    }
  }

  &.page-intro .learn-more {
    transform: translateY(100%);
    opacity: 0;
  }

}

.mobile .section {

  &#page-manufacturing .inner,
  &#page-facialRecognition .inner,
  &#page-roadInfrastructure .inner,
  &#page-healthcare .inner {
    padding: 0 30px;
  }

  &#page-others .inner {
    width: auto;
    padding: 0 50px;
  }

  .page-info {

    padding-top: 93px;

    &::before {
      content: none;
    }

  }

  .points {

    .point {

      position: absolute;
      top: 50%;
      left: 0;
      width: auto;
      height: auto;
      transform: none!important;

      &::before,
      &::after {
        content: '';
        position: absolute;
        background-position: 0 0;
        background-repeat: no-repeat;
        background-size: contain;
        pointer-events: none;
      }

    }

    .ring { display: none; }
    .info {
      position: static;
      transform: none!important;
    }
    .line { display: none; }

    .label {
      position: relative;
      display: inline-block;
      top: auto!important;
      right: auto!important;
      bottom: auto!important;
      left: auto!important;
      width: auto!important;
      height: auto!important;
      font-size: 20px;
      padding: 11px 20px 13px 10px;
      text-indent: 0!important;
      line-height: 1!important;
      background: rgba(22, 39, 46, 0.85)!important;
      clip-path: polygon(0% 0%, 0% 0%, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0% 0, 0% 0);
      transition-duration: .5s;
      transition-timing-function: ease-out;
      &::before {
        content: none;
      }
    }

  }

  &.page-intro {
    .label {
      opacity: 0;
      transform: translateY(-30px) rotateX(90deg)!important;
    }
  }

}

.intro {
  opacity: 0;
  pointer-events: none;
}

.language {display: none;}

.mobile #fp-nav { display: none; }
.show-menu #fp-nav,
.show-pop #fp-nav,
.show-intro #fp-nav {
  opacity: 0;
  pointer-events: none;
}

#fp-nav {
  transition: opacity .5s;
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

.text-hide {
  font-size: 0;
  text-indent: -5000px;
}

</style>
