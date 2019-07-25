<template>
  <div id="message">
    <div class="page-part">
      <mt-header fixed title="消息">
        <mt-button icon="back" slot="left" @click="$router.replace('/')"></mt-button>
      </mt-header>
    </div>
    <div class="content">
      <div class="scroller-content">
        <div class="scroller-wrapper">
          <scroller :on-refresh="refresh"
                    :on-infinite="infinite"
                    ref="scroller">
            <div   v-for="(item, idx) in list">
              <div class="info-list" @click="chatItem(item)">
                <div class="img-avatar" v-if="item.imgName">
<!--                  <img :src='"../../../static/img/"+item.imgName' alt="">-->
                  <p class="icon-avatar" :class='"avatar"+item.imgName'></p>
                </div>
                <div class="img-avatar" v-else>
                  <p class="icon-avatar" :class='"avatar"+item.imgName'></p>
                </div>
                <div class="info-content">
                    <div class="info items">
                      <div class="name">{{item.name}}</div>
                      <div class="time">{{item.time}}</div>
                    </div>
                    <div class="info">{{item.msg}}</div>
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

  import Menu from '../../components/menu/menu.vue'
  import {mapActions} from 'vuex'
  import {messageList} from '../../service/index'
  export default {
    name: "governmentIndex",
    components: {
      "v-menu": Menu
    },
    data() {
      return {
        page: 0,
        rows: 5,
        list: [],
        scrollerPosition: null

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
        messageList(params, loading).then((rets)=>{
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
      chatItem(item){
         this.$router.push({path:'/chat',query:item});
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
  #message{
    .content{
      background: #edf1f4;
      padding-top: 65px;
      .scroller-content{
        .info-list{
          display: flex;
          background-color: #fff;
          margin: 20px;
          border-radius: 10px;
          padding: 20px 10px;
          color: #c0c0c0;
          .info-content{
            flex:1;
            .info{
              font-size: 16px;/*no*/
              margin-bottom: 10px;
            }
            .items{
              display: flex;
              margin-bottom: 20px;
              font-size: 12px;/*no*/
              justify-content: space-between;
              .name{
                flex: 1;
                font-size: 15px;/*no*/
                color: #000;
              }
              .time{
                flex: 1;
                text-align: right;
              }
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
            .icon-avatar{
              width: 140px;
              height: 140px;
            }
            .avatar1{
              background-image: url("../../../static/img/icon-qq-02.jpg");
              background-size: 100% 100%;
              background-repeat: no-repeat;
              background-position: center center;
            }
            .avatar2{
              background-image: url("../../../static/img/icon-qq-03.jpg");
              background-size: 100% 100%;
              background-repeat: no-repeat;
              background-position: center center;
            }
            .avatar3{
              background-image: url("../../../static/img/icon-qq-avatar.jpg");
              background-size: 100% 100%;
              background-repeat: no-repeat;
              background-position: center center;
            }
          }
        }
        .info-list:active{
          background-color:rgba(0,0,0,0.21);
        }
      }

    }
  }

</style>
