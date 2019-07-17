<template>
  <div class="scroller-wrapper">
    <scroller :on-refresh="refresh"
              :on-infinite="infinite"
              ref="scroller">
      <div v-for="(item, index) in list" @click="onItemClick(index, item)"
           class="page-infinite-listitem" :class="{'npb': index  == list.length - 1}">
        <div class="title">{{index + 1}}. {{item.FQBM}}</div>
        <div class="info">外来人员：<span>{{item.outsiders | showOutsiders}}</span></div>
        <div class="info">进监时间：<span>{{item.JJSJ}}</span></div>
        <div class="info">进监事由：<span>{{item.JJSY}} - {{item.JJSYXL}}</span></div>
        <div class="process">当前进度：<span>{{item.current | showCurrent}}</span></div>
      </div>
    </scroller>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import {migrantsList} from '../../service/index'

  export default {
    name: 'MigrantsPageMine',

    data() {
      return {
        flowtype: '0',
        category: '0',

        page: 0,
        rows: 5,
        list: [],

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
          'flowtype': this.flowtype,
          'category': this.category,
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
        migrantsList(params, loading).then((rets)=>{
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
          'flowtype': this.flowtype,
          'category': this.category,
          'page': this.page,
          'rows': this.rows,
          'proposerid': this.$store.getters.getLoginInfo()['proposerid']
        };
        this.load('refresh', params, done);
      },
      infinite(done) {
        this.page = this.page + 1;
        let params = {
          'flowtype': this.flowtype,
          'category': this.category,
          'page': this.page,
          'rows': this.rows,
          'proposerid': this.$store.getters.getLoginInfo()['proposerid']
        };
        this.load('infinite', params, done);
      },
      onItemClick(index, item) {
        this.$router.push('/migrants_info/' + item.ID);
      },
    }
  }
</script>
