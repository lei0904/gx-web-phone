<template>
  <div class="penologicalManage">
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
              <div v-if="pageId == 1">
                <div class="info-content">
                  <div class="info"><label>会见时常(分钟):</label><span>{{item.hjsc}}</span></div>
                  <div class="info"><label>会见窗口号:</label><span>{{item.hjck}}</span></div>
                </div>
                <div class="info-content">
                  <div class="info"><label>会见类别:</label><span>{{item.hjlb}}</span></div>
                  <div class="info"><label>会见状态:</label><span>{{item.hjzt}}</span></div>
                </div>
                <div>
                  <div class="info"><label>开始时间:</label><span>{{item.kssj}}</span></div>
                  <div class="info"><label>结束时间:</label><span>{{item.jssj}}</span></div>
                </div>
                <div class="info-content">
                  <div class="info"><label>复听情况:</label><span>{{item.ftqk}}</span></div>
                </div>
              </div>
              <div v-if="pageId == 2">
                <div class="info-content">
                  <div class="info"><label>监区:</label><span>{{item.jq}}</span></div>
                  <div class="info"><label>年月:</label><span>{{item.ny}}</span></div>
                </div>

                <div class="info-content">
                  <div class="info"><label>教育改造应考:</label><span>{{item.jygzyk}}</span></div>
                  <div class="info"><label>劳动改造应考:</label><span>{{item.ldgzyk}}</span></div>
                </div>
                <div class="info-content">
                  <div class="info"><label>专项加分:</label><span>{{item.zxjf}}</span></div>
                  <div class="info"><label>当月考核分:</label><span>{{item.dykhf}}</span></div>
                </div>
                <div class="info-content">
                  <div class="info"><label>扣减考核分:</label><span>{{item.kjkhf}}</span></div>
                  <div class="info"><label>累计考核分:</label><span>{{item.ljkhf}}</span></div>
                </div>
                <div class="info-type">
                  <div class="special-title">教育改造</div>
                  <div class="info-content">
                      <div class="info"><label>累计得分:</label><span>{{item.jygzlj}}</span></div>
                      <div class="info"><label>总占比:</label><span>{{item.jygzzb}}</span></div>
                  </div>
                  <div class="info-content">
                    <div class="info"><label>当月得分:</label><span>{{item.jygzdy}}</span></div>
                    <div class="info"><label>占比:</label><span>{{item.jygzzb}}</span></div>
                  </div>
                </div>
                <div class="info-type">
                  <div class="special-title">劳动改造</div>
                  <div class="info-content">
                    <div class="info"><label>当月得分:</label><span>{{item.ldgzdy}}</span></div>
                    <div class="info"><label>占比:</label><span>{{item.ldgzzb}}</span></div>
                  </div>
                  <div class="info-content">
                    <div class="info"><label>累计得分:</label><span>{{item.ldgzlj}}</span></div>
                    <div class="info"><label>总占比:</label><span>{{item.ldgzzzb}}</span></div>
                  </div>
                </div>
              </div>
              <div v-if ="pageId == 3">
                  <div class="info"><label>被拨打人:</label><span>{{item.bbdr}}</span></div>
                  <div class="info"><label>拨打号码:</label><span>{{item.bdhm}}</span></div>
                  <div class="info"><label>开始时间:</label><span>{{item.kssj}}</span></div>
                  <div class="info"><label>结束时间:</label><span>{{item.jssj}}</span></div>
                  <div class="info"><label>监听民警:</label><span>{{item.jtmj}}</span></div>
              </div>
              <div v-if="pageId == 4">

                <div class="info-content">
                  <div class="info"><label>年龄:</label><span>{{item.age}}</span></div>
                  <div class="info"><label>监区:</label><span>{{item.jq}}</span></div>
                </div>
                <div class="info-content">
                  <div class="info"><label>罪名:</label><span>{{item.zm}}</span></div>
                  <div class="info"><label>刑期:</label><span>{{item.xq}}</span></div>
                </div>
                <div class="info-content">
                  <div class="info"><label>余刑:</label><span>{{item.yx}}</span></div>
                  <div class="info"><label>危险程度:</label><span>{{item.wxcd}}</span></div>
                </div>
                <div class="info"><label>危险类别:</label><span>{{item.wxlb}}</span></div>
                <div class="info"><label>填表日期:</label><span>{{item.tbrq}}</span></div>
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
  import {penologicalList} from '../../service/index'
  export default {
    name: "penologicalManage",
    ...mapActions([
      'setNeedRefresh'
    ]),
    data(){
      return {
        page: 0,
        rows: 5,
        list: [],
        scrollerPosition: null,
        titleText:'个别谈话教育',
        pageId:'',
        criminalInfo:{}
      }
    },
    created(){
      this.pageId = this.$store.getters.getPageId();
      this.criminalInfo = this.$store.getters.getCriminal();

      switch (this.pageId) {
        case 2:
          this.titleText = '计分考核';
          break;
        case 3:
          this.titleText = '亲情电话';
          break;
        case 4:
          this.titleText = '日常评估';
          break;
        default:
          this.titleText = '会见管理'
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
        penologicalList(params, loading).then((rets)=>{
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
  .penologicalManage{
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
            padding: 5px 0;
            .info{
              flex: 1;
              padding: 5px 0;
            }
          }
          .info-type{
            .special-title{
              font-size: 18px;/*no*/
              padding: 20px 0 10px;
              color: #136dc5;
              margin-bottom: 10px;
              border-bottom: 1px solid #136dc5;/*no*/
            }
          }
          .info{
            font-size: 14px;/*no*/
            margin-bottom: 15px;
            padding: 5px 0;
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
