<template>
  <div class="daily-check">
    <mt-header fixed title="值班日志">
      <router-link to="/dailySupervision" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <div class="log-module">
        <div class="info">
          <label>监区:</label>
          <span>五监区</span>
        </div>
        <div class="info">
          <label>值班时间:</label>
          <span>2019-08-27 8:00～12:00</span>
        </div>
        <div class="info">
          <label>值班岗位:</label>
          <span>常规劳务监区带班</span>
        </div>
        <div class="info mb20">
          <label>状态</label>
          <span>值班中</span>
        </div>

        <div class="duty">
          <label>执勤情况</label>
          <mt-button class="normal-button" size="small" type="primary" @click.native ="addLog">添加</mt-button>
        </div>
      </div>
      <div class="scroller-wrapper" :style="{height:listH+'px'}">
        <scroller :on-refresh="refresh"
                  :on-infinite="infinite"
                  ref="scroller">
          <div class="page-infinite-listitem" v-for="(item,index) in list">
            <div class="item"  @click="onItemClick(index,item)" >
              <div class="info-title">
                <div class="img-content">
                  <img src=".././../../static/img/icon-avator1.jpg" alt="">
                </div>
                <div class="item-title">
                  {{item.zf}}
                </div>
              </div>
              <div class="info">
                <label>考核分类:</label>
                <span>{{item.khfl}}</span>
              </div>
              <div class="info">

                <label>考核民警:</label>
                <span>{{item.khmj}}</span>
              </div>
              <div class="info">
                <label>考核日期:</label>
                <span>{{item.khrq}}</span>
              </div>
            </div>
          </div>
        </scroller>
      </div>
        <mt-button class="sub-button" size="large" type="primary" @click="subForm">提交申请</mt-button>
    </div>

<!--    <dragbtn @click="clickHandler"></dragbtn>-->
  </div>
</template>

<script>

  import {mapActions} from 'vuex'
  import {dailycheckList} from '../../service/index'


  import Menu from '../../components/menu/menu.vue'
  export default {
    name: "daily-check",
    ...mapActions([
      'setCriminal',
      'setNeedRefresh'
    ]),
    components: {
      "v-menu": Menu
    },
    data(){
      return {
        page: 0,
        rows: 5,
        list: [],
        listH:0,
        searchText:'',
        scrollerPosition: null
      }
    },
    created(){
      this.listH = document.body.clientHeight - 310;
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
        dailycheckList(params, loading).then((rets)=>{
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
      clickHandler(v){
        console.log("v------>",v)
        this.$router.push({'path':'/dailyNewCheck'})
      },
      addLog(){
        this.$router.push({'path':'/newLog'})
      },
      subForm(){

      }
    }
  }
</script>

<style lang="scss">
  .daily-check{
    .content{
      .log-module{
        padding-top: 50px;
        .info{
          font-size: 15px;/*no*/
          label,span{
            color: #000;
          }
        }
        .duty{
          font-size: 18px;/*no*/
          padding: 40px 55px;
          border-top:1px solid #d9d9d9 ;/*no*/
          border-bottom: 1px solid #d9d9d9;/*no*/
        }
        .mb20{
          margin-bottom: 20px;
        }
      }
      .info{
        margin-bottom: 15px;
        margin-left:55px;
        font-size:13px;/*no*/
        label,span{
          padding-right: 10px;
          color:#9b9b9b;
        }
      }
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
            .info-title{
              margin-bottom: 20px;
              display: flex;
              position: relative;
              height: 80px;
              .img-content{
                width: 80px;
                height: 80px;
                img{
                  width: 100%;
                  height:100%;
                  border-radius: 50%;
                }
              }
              .item-title{
                line-height: 80px;
                padding-left: 20px;
                font-size: 16px;/*no*/
              }
            }
            .info-content{
              display: flex;
              padding: 5px 0;
              .info{
                flex: 1;
                padding: 5px 0;
              }
            }
          }
        }
        .page-infinite-listitem:active{
          background-color:rgba(237,241,244,0.53);
          background-image:url("../../../static/img/icon-detail-active.png");
        }
      }

      .sub-button {
        width: 90%;
        margin-left: 5%;
        margin-top: 35px;
      }
    }
  }
</style>
