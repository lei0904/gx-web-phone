<template>
  <div id="government">
    <div class="page-part">
      <mt-header fixed title="移动政务">
        <mt-button icon="back" slot="left" @click="$router.replace('/myapp')"></mt-button>
      </mt-header>
    </div>
    <div class="content">
      <div class="banner">
        <mt-swipe :auto="4000">
          <mt-swipe-item class="banner-item" v-for="item in bannerArr">
            <img :src='"../../../static/img/"+ item' alt="">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="module">
        <router-link  to='/partyFee' class="module-item">
          <i class="icon icon1"></i>
          <p>党建收费</p>
        </router-link>
        <router-link  to='/ideaReport' class="module-item">
          <i class="icon icon2"></i>
          <p>思想汇报</p>
        </router-link>
        <router-link to='/activityEnroll' class="module-item">
          <i class="icon icon3"></i>
          <p>活动报名</p>
        </router-link>
        <router-link to='' class="module-item">
          <i class="icon icon4"></i>
          <p>在线考试</p>
        </router-link>
        <router-link to='/missionManage' class="module-item">
          <i class="icon icon5"></i>
          <p>任务管理</p>
        </router-link>
        <router-link to='/threeOne' class="module-item">
          <i class="icon icon6"></i>
          <p>三科一会</p>
        </router-link>
        <router-link to='/specialSubject' class="module-item">
          <i class="icon icon7"></i>
          <p>专题教育</p>
        </router-link>
        <router-link to='/combatCorruption' class="module-item">
          <i class="icon icon8"></i>
          <p>反腐倡廉</p>
        </router-link>
      </div>
      <div class="scroller-content">
        <div class="tips" >
          <p class="tips-item" @click="tipsClick(1)">
            党建要闻
          </p>
          <p class="tips-item" @click="tipsClick(2)">
            通知公告
          </p>
          <p class="tips-item" @click="tipsClick(3)">
            党内公示
          </p>
          <p class="tips-item" @click="tipsClick(4)">
            政策法规
          </p>
          <p class="tips-item" @click="tipsClick(5)">
            党员学习
          </p>
        </div>
        <div class="scroller-wrapper">
          <scroller :on-refresh="refresh"
                    :on-infinite="infinite"
                    ref="scroller">
            <div   v-for="(item, index) in list">
              <div class="info-list" v-if="item.type == active">
                <div class="img-avatar">
                  <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563772470980&di=3c078174d36cda96b98fb19361781bc0&imgtype=0&src=http%3A%2F%2Fwww.cas.cn%2Fxw%2Fzyxw%2Ftpxw%2F200910%2FW020091014598700107536.jpg" alt="">
                </div>
                <div class="info-content">
                  <div class="title">
                    {{item.title}}
                  </div>
                  <div class="info  info-title" v-if="item.type == 1">分类:党建要闻</div>
                  <div class="info  info-title" v-if="item.type == 2">分类:通知公告</div>
                  <div class="info  info-title" v-if="item.type == 3">分类:党内公示</div>
                  <div class="info  info-title" v-if="item.type == 4">分类:政策法规</div>
                  <div class="info  info-title" v-if="item.type == 5">分类:党员学习</div>
                  <div class=" info-publish">
                    <div class="info ">发布时间:{{item.time}}</div>
                    <span class="info publish-num">阅读{{item.read}}</span>
                  </div>
                </div>
              </div>
              <div class="info-list" v-if="!active">
                <div class="img-avatar">
                  <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563772470980&di=3c078174d36cda96b98fb19361781bc0&imgtype=0&src=http%3A%2F%2Fwww.cas.cn%2Fxw%2Fzyxw%2Ftpxw%2F200910%2FW020091014598700107536.jpg" alt="">
                </div>
                <div class="info-content">
                  <div class="title">
                    {{item.title}}
                  </div>
                  <div class="info  info-title" v-if="item.type == 1">分类:党建要闻</div>
                  <div class="info  info-title" v-if="item.type == 2">分类:通知公告</div>
                  <div class="info  info-title" v-if="item.type == 3">分类:党内公示</div>
                  <div class="info  info-title" v-if="item.type == 4">分类:政策法规</div>
                  <div class="info  info-title" v-if="item.type == 5">分类:党员学习</div>
                  <div class=" info-publish">
                    <div class="info ">发布时间:{{item.time}}</div>
                    <span class="info publish-num">阅读{{item.read}}</span>
                  </div>
                </div>
              </div>

            </div>
          </scroller>
        </div>

      </div>
    </div>
    <v-menu :checked="1"></v-menu>
  </div>
</template>

<script>

  import Menu from '../../components/menu/g-menu.vue'
  import {mapActions} from 'vuex'
  import {zwIndexData} from '../../service/index'
  export default {
    name: "message.vue",
    components: {
      "v-menu": Menu
    },
    data() {
      return {
        page: 0,
        rows: 5,
        bannerArr:['banner1.jpeg','banner02.jpeg','banner03.jpeg'],
        list: [],
        tasksList:[],
        remindList:[],
        searchText:'',
        active:'',
        scrollerPosition: null
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
      let needRefresh = this.$store.getters.getNeedRefresh();

      if (needRefresh) {
        this.setNeedRefresh(false);
        this.page = 1;
        let params = {
          'page': this.page,
          'rows': this.rows,
          'proposerid': this.$store.getters.getLoginInfo()['proposerid']
        };
        this.load('need_refresh', params);
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
        zwIndexData(params, loading).then((rets)=>{
          console.log("rets---->",rets)
          this.$api.process(rets, (data) => {
            if (action === 'refresh' || action === 'need_refresh') {
              this.data = [];
            }
            if (data) {
              if (rets.length < this.rows) {
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
        this.page = 1;
        let params = {
          'page': this.page,
          'rows': this.rows,
          'proposerid': this.$store.getters.getLoginInfo()['proposerid']
        };
        this.load('refresh', params, done);
      },
      infinite(done) {
        this.page = this.page + 1;
        let params = {
          'page': this.page,
          'rows': this.rows,
          'proposerid': this.$store.getters.getLoginInfo()['proposerid']
        };
        this.load('infinite', params, done);
      },
      onItemClick(index, item) {
        // this.$router.push('/migrants_info/' + item.ID);
        console.log("跳转野蛮")
      },
      tipsClick(idx){
        this.active = idx;
        this.page = 1;
        let params = {
          'page': this.page,
          'rows': this.rows,
          'proposerid': this.$store.getters.getLoginInfo()['proposerid']
        };
        this.load('need_refresh', params);
      }
    }
  }
</script>

<style lang="scss">
  #government{
    .content{
      background: #edf1f4;
      padding-top: 65px;
      .banner{
        height: 300px;
        .banner-item{
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
      .module{
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        background-color: #fff;
        /*margin: 10px 20px;*/
        /*border-radius: 10px;*/
        .module-item{
          flex: 1;
          width: 170px;
          height: 150px;
          padding: 10px;
          box-sizing: border-box;
          p{
            color: #000;
            width: 170px;
            height: 60px;
            padding-top: 10px;
            font-weight: 500;
            text-align: center;
          }
          .icon{
            display: block;
            width:60px;
            height: 60px;
            margin: 10px auto;
          }
          .icon1{
            background-image: url("../../../static/img/icon-zw-01.png");
            background-position: center center;
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }

          .icon2{
            background-image: url("../../../static/img/icon-zw-02.png");
            background-position: center center;
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }

          .icon3{
            background-image: url("../../../static/img/icon-zw-03.png");
            background-position: center center;
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }
          .icon4{
            background-image: url("../../../static/img/icon-zw-04.png");
            background-position: center center;
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }
          .icon5{
            background-image: url("../../../static/img/icon-zw-05.png");
            background-position: center center;
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }
          .icon6{
            background-image: url("../../../static/img/icon-zw-06.png");
            background-position: center center;
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }
          .icon7{
            background-image: url("../../../static/img/icon-zw-07.png");
            background-position: center center;
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }
          .icon8{
            background-image: url("../../../static/img/icon-zw-08.png");
            background-position: center center;
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }
        }
        .module-item:active{
          background-color: rgba(0,0,0,0.13);
        }
      }
      .task-title{
        color: #163995;
        font-size: 16px;/*no*/
        text-align: center;
        position: relative;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        margin: 80px 60px 20px;
        .title{
          width: 200px;
          text-align: center;
        }
        .line{
          width: 200px;
          background:#163995 ;
          height: 1px ;/*no*/
        }
        .left-line{
          flex: 1;
        }
        .right-line{
          flex: 1;
        }
      }
      .page-infinite-listitem{
        border-radius: 20px;
        margin: 20px 20px 0 20px;
        .info{
          margin-bottom: 15px;
          span {
            color: #a0a0a0;
          }
        }
        .info-title{
          font-size:15px;/*no*/
          font-weight: 600;
          margin-bottom: 25px;
        }
        .start-btn{
          background-color:#163995;
          color:#fff;
          width: 120px;
          height: 40px;
          line-height: 40px;
          padding: 10px 0;
          border-radius: 40px;
          text-align: center;
          float: right;
        }
        .start-btn:active{
          background-color:rgba(22,57,149,0.53);
        }
        .clear{
          clear: both;
        }
      }
      .scroller-content{
        .tips{
          display: flex;
          flex-wrap: nowrap;
          overflow-x: scroll;
          margin: 20px;
          .tips-item{
            width: 120px;
            padding: 10px 10px;
            text-align: center;
            background-color: #fff;
            margin-right: 10px;
            color: #136dc5;
          }
          .tips-item:active{
            background-color: rgba(0,0,0,.11);
          }
        }
        .info-list{
          display: flex;
          background-color: #fff;
          margin: 20px;
          border-radius: 10px;
          padding: 20px 10px;
          color: #c0c0c0;
          .info-content{
            flex:1;
            .title{
              font-size: 14px;/*no*/
              color: #000;
              margin-bottom: 20px;
            }
          }
          .img-avatar{
            width: 140px;
            height: 140px;
            margin-right: 15px;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .info{
            margin-bottom: 10px;
          }
          .info-publish{
            display: flex;
            justify-content: space-between;
          }
        }
      }

    }
  }

</style>
