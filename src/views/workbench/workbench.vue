<template>
  <div id="workbench">
    <div class="page-part">
      <mt-header fixed title="工作台">
        <mt-button icon="back" slot="left" @click="$router.replace('/myapp')"></mt-button>
      </mt-header>
    </div>
    <div class="content">
        <div class="scroller-wrapper">
          <scroller :on-refresh="refresh"
                    :on-infinite="infinite"
                    ref="scroller">
            <div class="task-title">
              <div class="line left-line"></div>
              <div class="title">我的待办</div>
              <div class="line right-line"></div>
            </div>
            <div v-for="(item, index) in list">
              <div v-if="item.type == 1 || item.type == 2" class="page-infinite-listitem" :class="{'npb': index  == list.length - 1}">
                <div v-if="item.type == 1" >
                  <div class="info info-title"><label class="info-lable">点名：</label><label>{{item.name}}</label></div>
                  <div class="info"><label class="info-lable">点名时间：</label><span>{{item.time}}</span></div>
                  <div class="info"><label class="info-lable">预计点名人数：</label><span>{{item.num}} </span></div>
                </div>
                <div v-if="item.type == 2">
                  <div class="info  info-title"><label class="info-lable">值班：</label><label>{{item.name}}</label></div>
                  <div class="info"><label class="info-lable">值班时间：</label><span>{{item.time}}</span></div>
                </div>
                <div class="start-btn" @click="onItemClick(index, item)">开始</div>
                <div class="clear"></div>
              </div>
            </div>
            <div class="task-title">
              <div class="line left-line"></div>
              <div class="title">业务提醒</div>
              <div class="line right-line"></div>
            </div>
            <div v-for="(item, index) in list">
              <div  v-if="item.type == 3 || item.type == 4"
                    class="page-infinite-listitem" :class="{'npb': index  == list.length - 1}">
                <div class="info info-title"><label class="info-lable">{{item.remindName}}：</label><label>{{item.criminalName}}</label></div>
                <div v-if="item.type == 3">
                  <div class="info"><label class="info-lable">谈话时间：</label><span>{{item.time}}</span></div>
                </div>
                <div v-if="item.type == 4">
                  <div class="info  info-title"><label>{{item.name}}</label></div>
                  <div class="info"><label class="info-lable">提交时间：</label><span>{{item.time}}</span></div>
                </div>

                <div class="start-btn" @click="onItemClick(index, item)">查看</div>
                <div class="clear"></div>
              </div>
            </div>
          </scroller>
        </div>
    </div>
    <v-menu :checked="1"></v-menu>
  </div>
</template>

<script>

  import Menu from '../../components/menu/menu.vue'
  import {mapActions} from 'vuex'
  import {workbenchList} from '../../service/index'
  export default {
    name: "message.vue",
    components: {
      "v-menu": Menu
    },
    data() {
      return {
        page: 0,
        rows: 5,
        list: [],
        tasksList:[],
        remindList:[],
        searchText:'',
        scrollerPosition: null
      }
    },

    filters: {
      showOutsiders(items) {
        let arr = [];
        items && items.forEach((o) => {
          arr.push(o['WLRYXM']);
        });
        return arr.join(',');
      },
      showCurrent(item) {
        if (!item || item['OWNER_ID'] === '-999999') {
          return '已办结'
        }
        if (item) {
          return item['JS_MC'] + ':' + item['USER_NAME']
        }
        return '尚未提交'
      }
    },
    activated() {
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
      ]),
      load(action, params, done) {
        let loading = false;
        if (action === 'need_refresh') {
          loading = true;
        }
        workbenchList(params, loading).then((rets)=>{
          console.log("rets---->",rets)
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
        console.log("跳转野蛮")
        switch (item.type) {
          case 1:
            this.$router.push('/rollcallmanage');
            break;
          case 2:
            this.$router.push('/logExamine');
            break;
          case 3:
            this.$router.push('/talkManage');
            break;
          case 4:
            this.$router.push('/medicinemanage');
            break;
        }
      },
    }
  }
</script>

<style lang="scss">
  #workbench{
    .content{
      background: #edf1f4;
      .task-title{
        color: #163995;
        font-size: 16px;/*no*/
        text-align: center;
        position: relative;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        margin: 80px 60px 20px;
        .title{
          width: 200px;
          text-align: center;
        }
        .line{
          width: 200px;
          background:#163995 ;
          height: 1px ;/*no*/
        }
        .left-line{
          flex: 1;
        }
        .right-line{
          flex: 1;
        }
      }
      .page-infinite-listitem{
        border-radius: 20px;
        margin: 20px 20px 0 20px;
        .info{
          margin-bottom: 15px;
          span {
            color: #a0a0a0;
          }
        }
        .info-title{
          font-size:15px;/*no*/
          font-weight: 600;
          margin-bottom: 25px;
        }
        .start-btn{
           background-color:#163995;
           color:#fff;
           width: 120px;
           height: 40px;
           line-height: 40px;
           padding: 10px 0;
           border-radius: 40px;
           text-align: center;
           float: right;
        }
        .start-btn:active{
          background-color:rgba(22,57,149,0.53);
        }
        .clear{
          clear: both;
        }
      }
    }
  }

</style>
