<template>
  <div class="criminalTreatment">
    <mt-header fixed :title="titleText">
      <router-link to="/criminalDetail" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <div class="scroller-wrapper">
        <scroller :on-refresh="refresh"
                  :on-infinite="infinite"
                  ref="scroller">
          <div class="page-infinite-listitem" v-for="(item,index) in list">


            <div class="item" >
              <div class="info-content">
                <div class="info"><label>姓名:</label><span>{{criminalInfo.name||item.xm}}</span></div>
                <div class="info"><label>编号:</label><span>{{criminalInfo.bh||item.bh}}</span></div>
              </div>

              <div v-if="pageId == 1 || pageId == 2">
                <div class="info-content">
                  <div class="info"><label>罪名:</label><span>{{item.zm}}</span></div>
                  <div class="info"><label>刑种:</label><span>{{item.xz}}</span></div>
                </div>
                <div class="info"><label>刑期:</label><span>{{item.xq}}</span></div>
              </div>
              <div class="type-one" v-if="pageId == 1">
                <div class="info"><label>是否急诊:</label><span>{{item.sfjz}}</span></div>
                <div class="info"><label>是否回监:</label><span>{{item.sfhj}}</span></div>
                <div class="info"><label>就诊医院:</label><span>{{item.jzyy}}</span></div>
                <div class="info"><label>预计就诊时间:</label><span>{{item.yjjzsj}}</span></div>
              </div>
              <div class="type-two" v-if="pageId == 2">
                <div class="info"><label>剩余刑期:</label><span>{{item.yx}}</span></div>
                <div class="info"><label>住院医院:</label><span>{{item.zyyy}}</span></div>
                <div class="info"><label>回监时间:</label><span>{{item.hjsj}}</span></div>
                <div class="info"><label>诊断结论:</label><span>{{item.zdjl}}</span></div>

              </div>
              <div class="type-three" v-if="pageId == 3">
                <div class="info"><label>入监时间:</label><span>{{item.rjrq}}</span></div>
                <div class="info"><label>门诊时间:</label><span>{{item.mzsj}}</span></div>
              </div>
              <div class="type-four" v-if="pageId == 4">
                <div class="info"><label>监区:</label><span>{{item.jq}}</span></div>
                <div class="info"><label>体检日期:</label><span>{{item.tjrq}}</span></div>
                <div class="info"><label>入监日期:</label><span>{{item.rjrq}}</span></div>
              </div>
            </div>
          </div>
        </scroller>
      </div>
    </div>
  </div>
</template>

<script>

  import {mapGetters, mapActions, mapState} from 'vuex'
  import {criminalTreatment} from '../../service/index'
  export default {
    name: "criminalTreatment",
    ...mapActions([
      'setNeedRefresh'
    ]),
    data(){
      return {
        page: 0,
        rows: 5,
        list: [],
        scrollerPosition: null,
        titleText:'监外就诊',
        pageId:'',
        criminalInfo:{}
      }
    },
    created(){
      this.pageId = this.$store.getters.getPageId();
      this.criminalInfo = this.$store.getters.getCriminal();

      switch (this.pageId) {
        case 2:
          this.titleText = '监外住院';
          break;
        case 3:
          this.titleText = '门诊记录';
          break;
        case 4:
          this.titleText = '罪犯体检';
          break;
        default:
          this.titleText = '监外就诊'
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
        'setNeedRefresh'
      ]),
      load(action, params, done) {
        let loading = false;
        if (action === 'need_refresh') {
          loading = true;
        }
        criminalTreatment(params, loading).then((rets)=>{
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
      }
    }
  }
</script>

<style lang="scss">
  .criminalTreatment{
    .content{
      .scroller-wrapper{
        .page-infinite-listitem{
          background-color: #f0f0f0;
          border-radius: 20px;
          margin: 20px 20px 0 20px;
          background-repeat: no-repeat;
          background-size: 48px 48px;
          background-position: center right;
          .info-content{
            display: flex;
            .info{
              flex: 1;
            }
          }

          .info{
            font-size: 14px;/*no*/
            margin-bottom: 15px;
            label{
              padding-right: 10px;
            }
          }
        }
        .page-infinite-listitem:active{
          background-color:rgba(237,241,244,0.53);
        }

      }
    }
  }
</style>
