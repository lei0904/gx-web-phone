<template>
  <div>
    <div>

      <div class="page-part">
        <mt-header fixed title="视频巡查">
          <a @click="$router.back()" slot="left">
            <mt-button icon="back"></mt-button>
          </a>
        </mt-header>
      </div>
      <div class="casad-content">
        <Cascader :data="casad1" placeholder="请选择类型" v-model="value1" @on-change="cascader1change" size="large"></Cascader>
        <Cascader :data="casad2" placeholder="请选择位置" v-model="value2" @on-change="cascader2change" size="large"></Cascader>
      </div>

      <div class="content">
        <div class="scroller-wrapper">
          <scroller :on-refresh="refresh"
                    :on-infinite="infinite"
                    ref="scroller">
            <div v-for="(item, index) in list"
                 class="page-infinite-listitem" :class="{'npb': index  == list.length - 1}">
              <div class="title">{{index + 1}}. {{item.FQBM}}</div>
              <div class="info">位置：<span>{{item.position}}</span></div>
              <video-player  class="video-player vjs-custom-skin no-fastclick"
                             ref="videoPlayer"
                             :playsinline="true"
                             :options="playerOptions"
              ></video-player>
            </div>
          </scroller>
        </div>
      </div>
<!--      <v-menu :checked="1"></v-menu>-->
    </div>
  </div>
</template>

<script>


  import { videoPlayer } from 'vue-video-player'
  import 'video.js/dist/video-js.css'
  import 'iview/dist/styles/iview.css';
  import {Cascader} from 'iview'



  import Menu from '../../components/menu/menu.vue'
  import {mapActions} from 'vuex'
  import {videoPatrolList} from '../../service/index'
  export default {
    name: "message.vue",
    components: {
      "v-menu": Menu,
      videoPlayer,
      Cascader
    },
    data() {
      return {
        value1:[],
        value2:[],
        flowtype: '0',
        category: '0',

        page: 0,
        rows: 5,
        list: [],
        casad1:[{
          value: 'luxiang',
          label: '录像',
        }, {
          value: 'jiankong',
          label: '监控',
        }],
        casad2:[{
          value: 'diyi',
          label: '第一监狱',
          children: [
            {
              value: '1121',
              label: '一监区'
            },
            {
              value: '12312',
              label: '二监区'
            },
            {
              value: '13123',
              label: '三监区'
            }
          ]
        }, {
          value: '123123',
          label: '第二监狱',
          children: [
            {
              value: '1121',
              label: '一监区'
            },
            {
              value: '12312',
              label: '二监区'
            },
            {
              value: '13123',
              label: '三监区'
            }
          ],
        }],

        scrollerPosition: null,
        playerOptions : {
          playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
          autoplay: false, //如果true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: false, // 导致视频一结束就重新开始。
          preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: 'zh-CN',
          aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [{
            src: '../../../static/video/big_buck_bunny.mp4',  // 路径
            type: 'video/mp4'  // 类型
          }],
          poster: "../../../static/img/videopatrol.jpeg", //你的封面地址
          // width: document.documentElement.clientWidth,
          notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
          controlBar: {
            timeDivider: true,
            durationDisplay: true,
            remainingTimeDisplay: false,
            fullscreenToggle: false  //全屏按钮
          }
        }
      }
    },

    filters: {
      showOutsiders(items) {
        let arr = [];
        items && items.forEach((o) => {
          arr.push(o['WLRYXM']);
        });
        return arr.join(',');
      },
      showCurrent(item) {
        if (!item || item['OWNER_ID'] === '-999999') {
          return '已办结'
        }
        if (item) {
          return item['JS_MC'] + ':' + item['USER_NAME']
        }
        return '尚未提交'
      }
    },
    activated() {
      debugger
      let needRefresh = this.$store.getters.getNeedRefresh();

      if (needRefresh) {
        this.setNeedRefresh(false);
        this.page = 1;
        let params = {
          'flowtype': this.flowtype,
          'category': this.category,
          'page': this.page,
          'rows': this.rows,
          'proposerid': this.$store.getters.getLoginInfo()['proposerid']
        };
        // this.load('need_refresh', params);
      } else {
        if (this.scrollerPosition) {
          setTimeout(()=>{
            this.$refs['scroller'].scrollTo(this.scrollerPosition.left, this.scrollerPosition.top, false);
            this.scrollerPosition = null;
          }, 10)
        }
      }
    },
    deactivated() {
      this.scrollerPosition = this.$refs['scroller'].getPosition();
    },

    methods: {
      ...mapActions([
        'setNeedRefresh',
      ]),
      load(action, params, done) {
        let loading = false;
        if (action === 'need_refresh') {
          loading = true;
        }
        videoPatrolList(params, loading).then((rets)=>{
          this.$api.process(rets, (data) => {
            if (action === 'refresh' || action === 'need_refresh') {
              this.list = [];
            }
            if (data) {
              if (data.length < this.rows) {
                done && done(true);
              } else {
                done && done();
              }
              this.list = this.list.concat(data);
            }
          }, function () {
            done &&  done(true)
          });
        })
      },
      refresh(done) {
        done(true)
        return;
        this.page = 1;
        let params = {
          'flowtype': this.flowtype,
          'category': this.category,
          'page': this.page,
          'rows': this.rows,
          'proposerid': this.$store.getters.getLoginInfo()['proposerid']
        };
        this.load('refresh', params, done);
      },
      infinite(done) {
        done(true)
        return;
        this.page = this.page + 1;
        let params = {
          'flowtype': this.flowtype,
          'category': this.category,
          'page': this.page,
          'rows': this.rows,
          'proposerid': this.$store.getters.getLoginInfo()['proposerid']
        };

        // this.load('infinite', params, done);
      },
      cascader1change(value,dataset){
        if(this.value2.length>0){
          this.list = [];
          let params = {
            'flowtype': this.flowtype,
            'category': this.category,
            'page': this.page,
            'rows': this.rows,
            'proposerid': this.$store.getters.getLoginInfo()['proposerid']
          };
          this.load('sdfsf', params);
        }
      },
      cascader2change(value,dataset){
        if(this.value1.length>0){
          this.list = [];
          let params = {
            'flowtype': this.flowtype,
            'category': this.category,
            'page': this.page,
            'rows': this.rows,
            'proposerid': this.$store.getters.getLoginInfo()['proposerid']
          };
          this.load('dsffs', params);
        }
      },
    }
  }
</script>

<style lang="scss">
  .video-js .vjs-big-play-button{
    left: 50% !important;
    top: 50% !important;
    margin-left: -2em;
    margin-top: -1.3em;
    touch-action: none;
  }
  .casad-content{
    margin-top: 100px;
  }
</style>
