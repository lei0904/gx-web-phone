<template>
  <div class="criminal-record">
    <mt-header fixed title="罪犯档案">
      <router-link to="/bussiness" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <div class="scroller-wrapper">
        <scroller :on-refresh="refresh"
                  :on-infinite="infinite"
                  ref="scroller">
            <div class="page-infinite-listitem" v-for="(item,index) in list">
              <div class="item"  @click="onItemClick(index,item)" >
                <div class="info">
                  <div class="left">
                    <label>姓名:</label>
                    <span>{{item.name}}</span>
                  </div>
                  <div class="right">
                    <label>编号:</label>
                    <span>{{item.bh}}</span>
                  </div>
                </div>
                <div class="info">
                  <div class="left">
                    <label>别名:</label>
                    <span>{{item.bm}}</span>
                  </div>
                  <div class="right">
                    <label>性别:</label>
                    <span>{{item.sex}}</span>
                  </div>
                </div>
                <div class="info">
                  <div class="left">
                    <label>出身日期:</label>
                    <span>{{item.birthday}}</span>
                  </div>
                  <div class="right">
                    <label>罪名:</label>
                    <span>{{item.zm}}</span>
                  </div>
                </div>
                <div class="info">
                  <div class="left">
                    <label>监狱:</label>
                    <span>{{item.jy}}</span>
                  </div>
                  <div class="right">
                    <label>监区:</label>
                    <span>{{item.jq}}</span>
                  </div>
                </div>
                <div class="info">
                  <div class="left">
                    <label>执行起日:</label>
                    <span>{{item.zxqr}}</span>
                  </div>
                  <div class="right">
                    <label>执行止日:</label>
                    <span>{{item.zxzr}}</span>
                  </div>
                </div>
                <div class="info">
                  <div class="left">
                    <label>入监日期:</label>
                    <span>{{item.rjrq}}</span>
                  </div>
                  <div class="right">
                    <label>余刑:</label>
                    <span>{{item.yx}}</span>
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
  import {criminalRecord} from '../../service/index'
    export default {
        name: "criminalRecord",
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
          criminalRecord(params, loading).then((rets)=>{
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
          console.log("跳转详情--->",item)
          this.$router.push({path:'/criminalDetail/'});
          this.setCriminal(item)
        },
      }
    }
</script>

<style lang="scss">
.criminal-record{
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
        .info{
          display: flex;
          margin-bottom: 15px;
          .left,.right{
            flex: 1;
          }
        }
      }
      .page-infinite-listitem:active{
        background-color:rgba(237,241,244,0.53);
        background-image:url("../../../static/img/icon-detail-active.png");
      }

    }
  }
}
</style>
