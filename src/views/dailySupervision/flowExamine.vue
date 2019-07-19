<template>
  <div class="flow-examine">
    <mt-header fixed title="流程审批">
      <router-link to="/dailySupervision" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <div class="content-nav-wrapper">
        <div class="content nav">
          <div class="nav_item" :class="active == '1'?'active':''" @click="loadList(1)">我的</div>
          <div class="nav_item" :class="active == '2'?'active':''" @click="loadList(2)">审批</div>
          <div class="nav_item" :class="active == '3'?'active':''" @click="loadList(3)">已办</div>
        </div>
      </div>
      <div class="scroller-wrapper">
        <scroller :on-refresh="refresh"
                  :on-infinite="infinite"
                  ref="scroller">
          <div class="" v-for="(item,index) in list">
            <div class=" page-infinite-listitem "  @click="onItemClick(index,item)"
                 v-if="item.type == 1 && (active ==1 || active ==2)">
              <div class="item" >
                <div class="item-title">
                  <div class="img-content">
                    <img v-if="item.type == 1" src="../../../static/img/icon-apply.png" alt="">
                    <img v-if="item.type == 2"  src="../../../static/img/icon-duty.png" alt="">
                    <img v-if="item.type == 3"  src="../../../static/img/icon-award.png" alt="">
                  </div>
                  <div class="title-text">{{item.title}}</div>
                </div>
                <div class="info">
                    <label>外来人员:</label>
                    <span>{{item.wlry}}</span>

                </div>
                <div class="info">
                  <label>进监时间:</label>
                  <span>{{item.jjsj}}</span>
                </div>
                <div class="info">
                  <div class="left">
                    <label>进监事由:</label>
                    <span>{{item.jjsy}}</span>
                  </div>
                </div>
                <div class="info">
                  <label>当前进度:</label>
                  <span class="progress-width">
                   {{item.dqld}}
                    </span>
                </div>
                <div class="info">
                    <label>完成情况:</label>
                    <span class="progress-width">
                    <mt-progress :value="item.dqjd" :barHeight = 5>
                      <div slot="start">0%</div>
                      <div slot="end">100%</div>
                    </mt-progress>
                    </span>
                </div>
              </div>
            </div>
            <div class="page-infinite-listitem"  v-if="item.type == 3 && active == 3">
              <div class="item">
                <div class="item-title">
                  <div class="img-content">
                    <img v-if="item.type == 1" src="../../../static/img/icon-apply.png" alt="">
                    <img v-if="item.type == 3"  src="../../../static/img/icon-apply.png" alt="">
                  </div>
                  <div class="title-text">{{item.title}}</div>
                </div>
                <div class="info">
                  <label>外来人员:</label>
                  <span>{{item.wlry}}</span>

                </div>
                <div class="info">
                  <label>进监时间:</label>
                  <span>{{item.jjsj}}</span>
                </div>
                <div class="info">
                  <div class="left">
                    <label>进监事由:</label>
                    <span>{{item.jjsy}}</span>
                  </div>
                </div>
                <div class="info">
                  <label>当前进度:</label>
                  <span class="progress-width">
                    <mt-progress :value="item.dqjd" :barHeight = 5>
                      <div slot="start">0%</div>
                      <div slot="end">100%</div>
                    </mt-progress>
                    </span>
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
  import {flowExamineList} from '../../service/index'
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
        active:'1',
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
        flowExamineList(params, loading).then((rets)=>{
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
      loadList(active){
        this.active = active;
        this.page = 1;
        let params = {
          'page': this.page,
          'rows': this.rows,
          'proposerid': this.$store.getters.getLoginInfo()['proposerid']
        };
        this.load('need_refresh', params);
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
  .flow-examine{
    .content{

      .nav{
        height: 70px;
        display: flex;
        background: #ffffff;
        border-bottom: 1px solid #ccc; /*no*/
        .nav_item {
          height: 70px;
          line-height: 70px;
          flex: 1;
          text-align: center;
          font-size: 30px; /*px*/
          font-weight: 400;
          color: #333333;
        }
        .active {
          color: #fff;
          background: #3190e8;
        }
      }
      .scroller-wrapper{
        .page-infinite-listitem{
          background-color: #f0f0f0;
          border-radius: 20px;
          margin: 20px 20px 0 20px;
         /* background-image:url("../../../static/img/icon-detail.png");*/
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
              height: 48px;
              line-height: 48px;
              color: #9b9b9b;
              label{
                padding-right: 15px;
              }
              .progress-width{
                width: 400px;
                padding-left: 10px;
              }
            }
          }
        }
        .page-infinite-listitem:active{
          background-color:rgba(237,241,244,0.53);
       /*   background-image:url("../../../static/img/icon-detail-active.png");*/
        }

      }
    }
  }
</style>
