<template>
  <div class="flow_node">
    <mt-header fixed title="选择审批人">
      <mt-button slot="left"  icon="back" @click="$router.back()"></mt-button>
      <mt-button slot="right" @click.native="submit">完成</mt-button>
    </mt-header>

    <div class="flow_node-content">
      <div class="flow_node-left">
        <div class="flow_node-item"
             @click="flowNodeSelect(item)"
             v-for="item in nodes"
             :class="isSelected(item) != -1 ? 'selected' : ''">{{item.JS_MC}}: {{item.USER_NAME}}</div>
      </div>
    </div>

  </div>
</template>


<script>
  import {mapState, mapActions, mapGetters} from 'vuex'
  import {getFlowNode} from '../../service/index'
  export default {
    data() {
      return {
        type: '0',
        nodes: []
      }
    },

    computed: {
      ...mapState({
        selectFlowNodes: state => state.FlowNode.selectFlowNodes,
      })
    },

    methods: {
      ...mapActions([
        'saveSelectFlowNodes'
      ]),
      submit () {
        if (!this.selectFlowNodes || !this.selectFlowNodes.length || this.selectFlowNodes.length == 0) {
          this.$toast('请选择审批人')
          return;
        }
        this.$router.back();
      },
      flowNodeSelect (item) {
        this.selectFlowNodes.splice(0, 1, item);
        /*let idx = this.isSelected(item);
        if (idx != -1) {
          this.selectFlowNodes.splice(idx, 1);
        } else {
          this.selectFlowNodes.push(item);
        }*/
      },
      isSelected(item) {
        for (let idx = 0, len = this.selectFlowNodes.length; idx < len; idx++) {
          let area = this.selectFlowNodes[idx];
          if (area['FUNCTION_ID'] == item['FUNCTION_ID'] && area['RY_ID'] == item['RY_ID']) {
            return idx;
          }
        }
        return -1;
      }
    },

    mounted() {
      this.type = this.$route.params['type'];
      this.funId = this.$route.params['funId'];
      let funId = '1390';
      if (this.funId == '-1') {
        this.funId = '1390';
      }

      if (this.funId == '1390') {
        funId = '1391';
      }
      if (this.funId == '1391') {
        funId = '1392';
      }
      if (this.funId == '1392') {
        funId = '1393';
      }
      if (this.funId == '1393') {
        funId = '1394';
      }

      this.saveSelectFlowNodes([])

      getFlowNode({
        "flowtype": this.type,
        "functionId": funId
      }).then((rets) => {
        if(rets['status'] == 1) {
          this.nodes = rets['data']
        } else {
          this.$toast(rets.msg || '请求失败')
        }
      })


    }
  }
</script>


<style lang="scss">
  .flow_node {
    padding-top: 90px;
    height: 100vh;
    overflow: hidden;
    .flow_node-content {
      height: 100%;
      display: flex;
      .flow_node-left {
        flex: 2;
        overflow-y: auto;
        border-right: 1px solid #ccc;
        -webkit-overflow-scrolling:touch;
      }
      .flow_node-right {
        flex: 3;
        overflow-y: auto;
        -webkit-overflow-scrolling:touch;
      }
      .flow_node-item {
        position: relative;
        height: 90px;
        line-height: 90px;
        color: #333;
        font-size: 28px;
        padding-left: 30px;
      }
      .flow_node-item::after {
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
      .flow_node-item:last-child::after {
        display: none;
      }
      .flow_node-item.selected {
        background: rgba(255,255,224,.4);
      }
    }
  }
</style>
