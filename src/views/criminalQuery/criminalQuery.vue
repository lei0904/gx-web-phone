<template>
    <div class="criminalQuery">
      <div class="page-part">
        <mt-header fixed title="罪犯查询">
          <router-link to="/nav" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
        </mt-header>
      </div>
      <div class="content">
        <div class="search-content">
          <mt-search
            v-model="searchText"
            cancel-text="取消"
            placeholder="搜索罪犯姓名"
            @keyup.enter.native="search"
          >
          </mt-search>
        </div>

        <div class="scroller-wrapper">
          <scroller :on-refresh="refresh"
                    :on-infinite="infinite"
                    ref="scroller">
            <div v-for="(item, index) in list" @click="onItemClick(index, item)"
                 class="page-infinite-listitem">
              <div class="info">罪犯姓名：<span>{{item.name}}</span></div>
              <div class="info">罪犯编号：<span>{{item.bh}}</span></div>
            </div>
          </scroller>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
              searchText:'',
              page: 0,
              rows: 5,
              scrollerPosition: null,
              list:[
                {
                  name:'钱山01',
                  bh:'0001'
                },
                {
                  name:'钱山02',
                  bh:'0002'
                },
                {
                  name:'钱山03',
                  bh:'00023'
                },
              ]
            }
        },
        methods: {
          search(){
            console.log("---->",this.searchText)
            this.load('refresh');
          },

            load(action, params, done) {
            let loading = false;
            if (action === 'need_refresh') {
              loading = true;
            }
            this.list = this.list.concat(this.list);
            // migrantsList(params, loading).then((rets)=>{
            //   this.$api.process(rets, (data) => {
            //     if (action === 'refresh' || action === 'need_refresh') {
            //       this.list = [];
            //     }
            //     if (data) {
            //       if (data.length < this.rows) {
            //         done && done(true);
            //       } else {
            //         done && done();
            //       }
            //       this.list = this.list.concat(data);
            //     }
            //   }, function () {
            //     done &&  done(true)
            //   });
            // })
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
          onItemClick(){

          }

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
  .criminalQuery{
    .content{
      .mint-searchbar-core{
        padding: 0 15px;
      }
      .search-content{
        height: 80px;
      }
      .page-infinite-listitem{
        background-image:url("../../../static/img/icon-detail.png") ;
        background-repeat: no-repeat;
        background-size: 32px 32px;
        background-position: 98% center;
        .info{
          padding: 10px 0;
        }
      }
    }

  }
</style>   
