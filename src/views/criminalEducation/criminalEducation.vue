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
              <div v-if="pageId == 1">
                <div class="info-content">
                  <div class="info"><label>谈话类型:</label><span>{{item.thlx}}</span></div>
                  <div class="info"><label>是否完成:</label><span>{{item.sfwc}}</span></div>
                </div>
                <div class="info-content">
                  <div class="info"><label>谈话效果:</label><span>{{item.thxg}}</span></div>
                  <div class="info"><label>谈话民警:</label><span>{{item.thmj}}</span></div>
                </div>
                <div class="info-content">
                  <div class="info"><label>谈话日期:</label><span>{{item.thrq}}</span></div>
                </div>
              </div>
              <div v-if="pageId == 2">
                <div class="info-content">
                  <div class="info"><label>考试日期:</label><span>{{item.ksrq}}</span></div>
                  <div class="info"><label>课程名称:</label><span>{{item.kcmc}}</span></div>
                </div>

                <div class="info-content">
                  <div class="info"><label>考试成绩:</label><span>{{item.kscj}}</span></div>
                  <div class="info"><label>考试成绩等级:</label><span>{{item.ksdj}}</span></div>
                </div>
                <div class="info-content">
                  <div class="info"><label>获证日期:</label><span>{{item.hzrq || '--'}}</span></div>
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

  import {mapGetters, mapActions, mapState} from 'vuex'
  import {criminalEducation} from '../../service/index'
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
          this.titleText = '三课学习成绩';
          break;
        default:
          this.titleText = '个别谈话教育'
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
        criminalEducation(params, loading).then((rets)=>{
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
