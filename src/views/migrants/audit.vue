<template>
  <div class="migrants_audit">
    <div class="migrants_audit_content">
      <mt-header fixed title="外来人员审批">
      <mt-button slot="left" @click="back" icon="back"></mt-button>
      </mt-header>

      <div class="page-part">
        <mt-field label="发起部门" v-model="item.FQBM" placeholder="请输入发起部门" readonly></mt-field>
        <mt-field label="带领民警" v-model="item.CJR_XM" placeholder="请输入带领民警" readonly></mt-field>
      </div>

      <div class="page-part">
        <div class="form-group">
          <header class="form-group-header lr">
            外来人员
          </header>
          <div class="items">
            <div class="item" v-for="(i, index) in item.outsiders">
              <span class="name">{{i.WLRYXM}}</span>
              <span class="id_card">{{i.WLRYSFZH}}</span>
            </div>
          </div>
        </div>
      </div>


      <div class="page-part">
        <mt-cell title="是否包含女性">
          {{item.SFBHNX | sfbhnxShow}}
        </mt-cell>
        <mt-cell :class="'link'" title="所到区域">
          {{sdqyShow(item)}}
        </mt-cell>
        <mt-cell :class="'link'" title="进监时间" :value="item.JJSJ"></mt-cell>
        <mt-cell :class="'link'" title="离监时间" :value="item.LJSJ"></mt-cell>
        <mt-cell :class="'link'" title="进监事由" :value="(item.JJSY || '') + ' - ' + (item.JJSYXL || '')"></mt-cell>
        <mt-cell :class="'link'" title="有效期起" :value="item.YXQQR"></mt-cell>
        <mt-cell :class="'link'" title="有效期止" :value="item.YXQZR"></mt-cell>
      </div>

      <div class="page-part" v-if="item.current && item.current.FUNCTION_ID != '1393'">
        <mt-cell :class="'link'" title="选择审批人" @click.native="toFlowNode" is-link :value="selectFlowNodes | showSelectFlowNodes"></mt-cell>
      </div>

      <mt-cell :class="'link'" title="当前节点" :value="item.current | showCurrent"></mt-cell>

      <div class="page-button-group">
        <mt-button size="small" type="primary" @click.native="submit(1)">同意</mt-button>
        <mt-button size="small" type="danger" @click.native="submit(2)">不同意</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
  import {getArea, migrantsGetById, flowNext, finishProcess, destroyProcess} from '../../service/index'

  import {mapActions, mapState} from 'vuex'

  export default {
    name: "MigrantsInfo",

    data() {
      return {
        loaded: false,
        item: {
          current: {}
        },
        areas: []
      }
    },

    filters: {
      showCurrent(current) {
        if (!current || !(current.JS_MC)) {
          return '';
        }
        return current.JS_MC + ' - ' + current.USER_NAME
      },
      showSelectFlowNodes: function (nodes) {
        let arr2 = [];
        for (let idx = 0, len = nodes.length; idx < len; idx++) {
          let n = nodes[idx];
          arr2.push(n['USER_NAME'])
        }
        return arr2.join(',');
      },
      sfbhnxShow: function (v) {
        if (v) {
          return v == 1 ? '是' : '否'
        }
        return '否'
      }
    },

    computed: {
      ...mapState({
        selectFlowNodes: state => state.FlowNode.selectFlowNodes
      })
    },
    methods: {
      ...mapActions([
        'saveSelectFlowNodes',
        'setNeedRefresh'
      ]),
      back() {
        this.reset();
        this.$router.push('/migrants_audit_page');
      },
      reset() {
        this.loaded = false;
        this.saveSelectFlowNodes([]);
      },
      showSubmit(item) {
        if (item.ID) {
          if (!item.current) {
            return true;
          }
        }
        return false;
      },
      submit (v) {
        let loginInfo = this.$store.getters.getLoginInfo();

        if (v == 1 && this.item.current && this.item.current.FUNCTION_ID == '1393') {
          let params = {
            'id': this.item['ID'],
            'proposerid': loginInfo['proposerid'],
            'functionId': '1394',
            'flowtype': '0'
          };
          finishProcess(params).then((rets) => {
            if (rets['status'] == 1) {
              this.setNeedRefresh(true);
              this.back();
            } else {
              this.$toast('提交失败')
            }
          });
          return;
        }


        let params2 = {};
        params2['dbBm'] = loginInfo['dbBm'];
        params2['dbMc'] = loginInfo['dbMc'];
        params2['proposerid'] = loginInfo['proposerid'];
        params2['id'] = this.item['ID'];
        params2['processInstanceId'] = this.item['PROCESS_INSTANCE_ID'];

        if (v == 1) {
          let node = this.selectFlowNodes[0];
          params2['auditor'] = node['RY_ID'];
          params2['functionId'] = node['FUNCTION_ID']//this.item.current['FUNCTION_ID']
        } else {
          params2['functionId'] = this.item.current['FUNCTION_ID']
        }

        // params2['nextFunctionId'] = node['FUNCTION_ID'];

        if (params2['functionId'] == '1390') {
          params2['nextFunctionId'] = '1391';
        }
        if (params2['functionId'] == '1391') {
          params2['nextFunctionId'] = '1392';
        }
        if (params2['functionId'] == '1392') {
          params2['nextFunctionId'] = '1393';
        }
        if (params2['functionId'] == '1393') {
          params2['nextFunctionId'] = '1394';
        }

        params2['processtaskId'] = '0';

        params2['flowtype'] = '0';

        params2['yj'] = v;
        params2['qz'] = loginInfo['proposerid'];
        params2['rq'] = this.$ces.DateTime.format(new Date());

        if (v == 1) {
          flowNext(params2).then((rets) => {
            if (rets['status'] == 1) {
              this.setNeedRefresh(true);
              this.back();
            } else {
              this.$toast('提交失败')
            }
          });
        } else {
          destroyProcess(params2).then((rets) => {
            if (rets['status'] == 1) {
              this.setNeedRefresh(true);
              this.back();
            } else {
              this.$toast('提交失败')
            }
          });
        }

      },

      to(path) {
        this.$router.push(path);
      },

      sdqyShow: function (v) {
        let r = '';
        this.areas.forEach((o)=>{
          if (o.KEY == v.SDQY) {
            r = o.NAME;
            return true;
          }
        });
        return r;
      },

      toFlowNode() {
        if (this.item && this.item.current && this.item.current.FUNCTION_ID) {
          this.to('/flow_node/0/' + this.item.current.FUNCTION_ID);
        } else {
          this.$toast('参数错误');
        }


      }
    },

    activated() {
      if (this.loaded) {
        return;
      }
      this.loaded = true;
      // if (!this.item || !this.item.ID) {
      let id = this.$route.params['id'];
      getArea({flowtype: 0}).then((rets) => {
        if (rets['status'] == 1) {
          this.areas = rets['data'];

          migrantsGetById({
            'id': id,
            'flowtype': 0
          }).then((rets) => {
            if (rets['status'] == 1) {
              this.item = rets;
            } else {
              this.$toast('请求失败')
            }
          })
        } else {
          this.$toast(rets['msg'] || '请求失败')
        }
      });
    }
  }
</script>

<style lang="scss" scoped>
.migrants_audit {
  padding-top: 90px;
  box-sizing: border-box;
  height: 100%;
  overflow: scroll;
  /*position: absolute;
  top: 90px;
  bottom: 0;
  width: 100%;
  overflow: scroll;*/

  .form-group {
    .form-group-header {
      font-size: 28px;
      position: relative;
      height: 1.066667rem;
      line-height: 1.066667rem;
      background: #fff;
      padding: 0 0.266667rem;
      border-bottom: 1px solid #ccc;
      font-weight: bold;
    }
  }

  .btn {
    margin: 30px;
  }
}


.migrants_audit .items .item {
  background: #fff;
  height: 60px;
  line-height: 60px;
  padding: 0 30px;
  position: relative;
  box-sizing: border-box;
  color: #333;
  font-size: 26px;
  span {
    display: inline-block;
    position: absolute;
    height: 100%;
  }
  .name {
    left: 30px;
    width: 150px;
  }
  .id_card {
    left: 180px;
    right: 120px;
  }
  .remove {
    right: 30px;
    width: 90px;
    text-align: center;
    font-size: 20px; /*px*/
    border: 1px solid #ca0c16; /*no*/
    height: 40px;
    margin-top: 10px;
    line-height: 40px;
    color: #ca0c16;
    border-radius: 8px;
  }
}
.page-button-group {
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
}
</style>
