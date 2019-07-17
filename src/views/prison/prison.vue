<template>
    <div>
      <div class="prison">
        <mt-header fixed title="监区活动管理">
          <router-link to="/nav" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
        </mt-header>
        <div class="content" :style="{ height: contentH + 'px' }">

          <div class="list-wraper">

            <div class="scroller-wrapper">
              <scroller :on-refresh="refresh"
                        :on-infinite="infinite"
                        ref="scroller">
                <div v-for="(item, index) in list" @click="onItemClick(index, item)"
                     class="page-infinite-listitem">
                    <div class="title">
                      文化活动
                    </div>
                  <div class="list-item">
                    <div class="info">活动地点: <span>1111</span></div>
                    <div class="info">活动时间: <span>1111</span></div>
                    <div class="info">活动内容: <span>1111</span></div>
                    <div class="info">责任民警: <span>1111</span></div>
                  </div>
                </div>
              </scroller>

            </div>
          </div>
          <dragbtn @click="clickHandler"></dragbtn>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
              contentH:0,
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
          clickHandler(){
            console.log("clickHandler--->")
            this.$router.push({path:'/prisonDetail'})
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
       created(){
       this.contentH = document.body.clientHeight;
       console.log("----",this.contentH)
      }

    }
</script>

<style lang="scss">
  .prison{
    height: 100vh;
    position: relative;
    .content{
      height: 100vh;
      .info{
        padding: 10px 0 5px 0;
      }
    }
  }
</style>   
