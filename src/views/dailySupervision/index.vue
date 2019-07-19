<template>
  <div class="dailySupervision">
    <mt-header fixed title="日常监管">
      <router-link to="/bussiness" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <div class="modules">
       <router-link :to="'dailyCheck'" class="item">日考评登记</router-link>
       <router-link :to="'flowExamine'" class="item">流程审批</router-link>
       <router-link :to="'logExamine'" class="item">值班日志</router-link>
       <router-link :to="'dailyExamine'" class="item">日常检查</router-link>
       </div>
      <div class="scroller-wrapper">
        <scroller :on-refresh="refresh"
                  :on-infinite="infinite"
                  ref="scroller">
          <div class="page-infinite-listitem" v-for="(item,index) in list">
            <div class="item"  @click="onItemClick(index,item)" >
              <div class="item-title">
                <div class="img-content">

                  <img v-if="item.type == 1" src="../../../static/img/icon-leave.png" alt="">

                  <img v-if="item.type == 2"  src="../../../static/img/icon-duty.png" alt="">

                  <img v-if="item.type == 3"  src="../../../static/img/icon-award.png" alt="">
                </div>
                <div class="title-text">{{item.title}}</div>
              </div>
              <div v-if="item.type == 1">
                <div class="info">
                  <div class="left">
                    <label>申请人:</label>
                    <span>{{item.sqr}}</span>
                  </div>
                  <div class="right">
                    <label>当前审批人:</label>
                    <span>{{item.dqspr}}</span>
                  </div>
                </div>
                <div class="info">
                  <div class="left">
                    <label>审批时间:</label>
                    <span>{{item.spsj}}</span>
                  </div>
                </div>
              </div>
              <div v-if="item.type == 2">
                  <div class="info">
                    <div class="left">
                      {{item.drrz || '当日值班日志未填写！'}}
                    </div>
                  </div>
              </div>
              <div v-if="item.type == 3">
                  <div class="info">
                    <div class="left">
                      <label>罪犯:</label>
                      <span>{{item.zf}}</span>
                    </div>
                    <div class="right">
                      <label>当前审批人:</label>
                      <span>{{item.dqspr}}</span>
                    </div>
                  </div>
                  <div class="info">
                    <div class="left">
                      <label>审批时间:</label>
                      <span>{{item.spsj}}</span>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </scroller>
      </div>
    </div>
  </div>
</template>

<script>

  import {mapActions} from 'vuex'
  import {dailyDataList} from '../../service/index'
  export default {
    name: "dailySupervision",
    ...mapActions([
      'setCriminal',
      'setNeedRefresh'
    ]),
    data(){
      return {
        page: 0,
        rows: 5,
        list: [],
        scrollerPosition: null
      }
    },
    activated(){
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
        'setCriminal'
      ]),
      load(action, params, done) {
        let loading = false;
        if (action === 'need_refresh') {
          loading = true;
        }
        dailyDataList(params, loading).then((rets)=>{
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
        console.log("跳转详情--->",item)
        //this.$router.push({path:'/criminalDetail/'});
       // this.setCriminal(item)
      },
    }
  }
</script>

<style lang="scss">
  .dailySupervision{
    .content{
      .scroller-wrapper{
        .page-infinite-listitem{
          background-color: #f0f0f0;
          border-radius: 20px;
          margin: 20px 20px 0 20px;
          background-image:url("../../../static/img/icon-detail.png");
          background-repeat: no-repeat;
          background-size: 48px 48px;
          background-position: center right;
          .item{
            .item-title{
              font-size: 14px;/*no*/
              color: #1D8CE0;
              margin-bottom: 20px;
              height: 64px;
              line-height: 64px;
              box-sizing: border-box;
              display: flex;
              .img-content{
                width: 48px;
                height: 48px;
                img{
                  width: 100%;
                  height:100%;
                }
              }
              .title-text{
                flex: 1;
                line-height: 64px;
                padding-left: 16px;
              }
            }
            .info{
              display: flex;
              margin-bottom: 15px;
              margin-left: 64px;
              .left,.right{
                flex: 1;
                color: #9b9b9b;
                label,span{
                  color: #9b9b9b;
                }
              }
            }
          }
        }
        .page-infinite-listitem:active{
          background-color:rgba(237,241,244,0.53);
          background-image:url("../../../static/img/icon-detail-active.png");
        }

      }
      .modules{
         display: flex;
         flex-wrap: nowrap;
         background: #fff;
         margin: 20px 25px;
         width: 700px;
        .item{
          flex: 1;
          width: 155px;
          height: 155px;
          line-height: 155px;
          text-align: center;
          margin: 0 10px;
          align-items: center;
          background: #1D8CE0;
          color: #fff;
          border-radius: 50%;
          font-weight: 400;
        }
        .item:active{
          background:rgba(17,124,224,0.53);
        }
      }
    }
  }
</style>
