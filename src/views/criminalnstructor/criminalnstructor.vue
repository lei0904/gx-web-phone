<template>
  <div class="criminalnstructor">
    <div class="page-part">
      <mt-header fixed title="技能指导">
        <router-link to="/criminalDetail" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="content">
      <div class="scroller-wrapper">
        <scroller :on-refresh="refresh"
                  :on-infinite="infinite"
                  ref="scroller">
          <div v-for="(item, index) in list" @click="onItemClick(index, item)"
               class="page-infinite-listitem">

            <div class="info">姓名：<span>{{criminalInfo.name||item.xm}}</span></div>
            <div class="info">编号：<span>{{criminalInfo.bh||item.bh}}</span></div>
            <div class="info">监区：<span>{{item.jq}}</span></div>
            <div class="info">定岗日期：<span>{{item.dgrq}}</span></div>
            <div class="info">劳动组别：<span>{{item.ldzb}}</span></div>
            <div class="info">劳动岗位：<span>{{item.ldgw}}</span></div>
            <div class="info">有能力未劳动：<span>{{item.isld}}</span></div>
            <div class="info">有无能力劳动：<span>{{item.nold}}</span></div>
          </div>
        </scroller>
      </div>
    </div>
  </div>
</template>

<script>

  import {mapGetters, mapActions, mapState} from 'vuex'
  import {criminalInstructor} from '../../service/index'
  export default {
    data() {
      return {
        page: 0,
        rows: 5,
        scrollerPosition: null,
        list:[],
        criminalInfo:{},
        sheetVisible: false,
      }
    },
    methods: {
      load(action, params, done) {
        let loading = false;
        if (action === 'need_refresh') {
          loading = true;
        }
        criminalInstructor(params, loading).then((rets)=>{
          console.log("rets---->",rets)
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
        this.page = 1;
        let params = {
          'page': this.page,
          'rows': this.rows
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


    },
    created(){
      this.criminalInfo = this.$store.getters.getCriminal();
    },
    activated(){
      this.page = 1;
      let params = {
        'page': this.page,
        'rows': this.rows,
      };
      this.load('need_refresh', params);

    }
  }
</script>

<style lang="scss">
  .criminalnstructor{
    .content{
      .page-infinite-listitem{
        background-color: #f0f0f0;
        border-radius: 20px;
        margin: 20px 20px 0 20px;
        background-repeat: no-repeat;
        background-size: 48px 48px;
        background-position: center right;
        .info{
          padding: 10px 0;
        }
      }
    }

  }
</style>
