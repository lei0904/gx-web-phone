<template>
  <div class="cause">
    <mt-header fixed title="选择事由">
      <mt-button icon="back" slot="left" @click.native="$router.back()"></mt-button>
      <mt-button slot="right" @click.native="submit">完成</mt-button>
    </mt-header>

    <div class="cause-content">
      <div class="cause-left">
        <div class="cause-item"
             @click="leftSelect(item)"
             v-for="item in causes"
             :class="selectCauseLeft.KEY == item.KEY ? 'selected' : ''">{{item.NAME}}
        </div>
      </div>
      <div class="cause-right">
        <div class="cause-item"
             @click="rightSelect(item)"
             v-for="item in children"
             :class="selectCauseRight.KEY == item.KEY ? 'selected' : ''">{{item.NAME}}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .cause {
    padding-top: 90px;
    height: 100vh;
    overflow: hidden;
    .cause-content {
      height: 100%;
      display: flex;
      .cause-left {
        flex: 2;
        overflow-y: auto;
        border-right: 1px solid #ccc;
        -webkit-overflow-scrolling: touch;
      }
      .cause-right {
        flex: 3;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }
      .cause-item {
        position: relative;
        height: 90px;
        line-height: 90px;
        color: #333;
        font-size: 28px;
        padding-left: 30px;
      }
      .cause-item::after {
        content: '';
        position: absolute;
        height: 1px; /*no*/
        bottom: 0;
        left: 0px;
        width: 100%;
        border-bottom: 1px solid #ccc; /*no*/
        transform-origin: 0 0;
        transform: scale(1, 0.5);
        box-sizing: border-box;
      }
      .cause-right .cause-item {
        height: 100px;
        line-height: 100px;
      }
      .cause-right .cause-item::after {
        left: 0;
      }
      .cause-item:last-child::after {
        display: none;
      }
      .cause-item.selected {
        background: rgba(255, 255, 224, .4);
      }
    }
  }
</style>

<script type="text/javascript">
  import {mapState, mapActions, mapGetters} from 'vuex'
  import {getCause} from '../../service/index'

  export default {
    name: 'Cause',
    data() {
      return {
        type: 0,
        causes: [],
        children: []
      }
    },
    mounted () {
      this.type = this.$route.params['type'];
      this.causes = this.getCausesByType()(this.type);
      if (!this.causes || this.causes.length === 0) {
        getCause({flowtype: this.type}).then((rets) => {
          if (rets['status'] == 1) {
            this.causes = rets['data'];
            this.children = this.causes['children']
            this.saveCausesByType({
              type: this.type,
              causes: this.causes
            });
          } else {
            this.$toast(rets['msg'] || '请求失败')
          }
        });
      }
      if (this.selectCauseLeft) {
        this.children = this.selectCauseLeft['children']
      }
    },
    computed: {
      ...mapState({
        selectCauseLeft: state => state.Cause.selectCauseLeft,
        selectCauseRight: state => state.Cause.selectCauseRight,
      })
    },
    methods: {
      ...mapGetters([
        'getCausesByType',
      ]),
      ...mapActions([
        'saveCausesByType',
        'setSelectCauseLeft',
        'setSelectCauseRight',
      ]),
      leftSelect(i) {
        this.setSelectCauseLeft(i)
        this.children = i['children'];
      },
      rightSelect(i) {
        this.setSelectCauseRight(i)
      },
      submit() {
        if (!this.selectCauseLeft || !this.selectCauseLeft ||
          !this.selectCauseLeft.KEY || !this.selectCauseRight.KEY) {
          this.$toast('请选择事由')
          return;
        }
        this.$router.back();
      }
    }
  }
</script>
