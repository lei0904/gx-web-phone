<template>
  <div class="migrants_form" id="migrants_item">
    <mt-header fixed title="外来人员申请">
    <mt-button icon="back" @click="back" slot="left"></mt-button>
    </mt-header>

    <div class="page-part">
      <mt-field label="发起部门" v-model="loginInfo.dbBm" placeholder="请输入发起部门" readonly></mt-field>
      <mt-field label="带领民警" v-model="loginInfo.proposerid" placeholder="请输入带领民警" readonly></mt-field>
    </div>

    <div class="page-part">
      <header class="page-part-header lr">
        外来人员
        <button type="button" class="sm-btn btn-default right" @click="to('/person')">添加</button>
      </header>
      <div class="page-part-content">
        <div class="item" v-for="(item, index) in outsiders">
          <span class="name">{{item.wlryxm}}</span>
          <span class="id_card">{{item.wlrysfzh}}</span>
          <span class="remove" @click="removeOutsider(item, index)">删除</span>
        </div>
      </div>
    </div>

    <div class="page-part">
      <mt-cell title="是否包含女性">
        <mt-switch v-model="MigrantsItem.hasfemale"></mt-switch>
      </mt-cell>
      <mt-cell :class="'link'" title="所到区域" @click.native="to('/area/0')" is-link :value="selectAreas | showSelectAreas"></mt-cell>
      <mt-cell :class="'link'" title="进监时间" @click.native="open('picker1')" is-link :value="MigrantsItem.entryTime"></mt-cell>
      <mt-cell :class="'link'" title="离监时间" @click.native="open('picker2')" is-link :value="MigrantsItem.outTime"></mt-cell>
      <mt-cell :class="'link'" title="进监事由" @click.native="to('/cause/0')" is-link :value="selectCauseShow"></mt-cell>
      <mt-cell :class="'link'" title="有效期起" @click.native="open('picker3')" is-link :value="MigrantsItem.valiStartTime"></mt-cell>
      <mt-cell :class="'link'" title="有效期止" @click.native="open('picker4')" is-link :value="MigrantsItem.valiEndTime"></mt-cell>
    </div>

    <div class="page-part">
      <mt-cell :class="'link'" title="选择审批人" @click.native="to('/flow_node/0/-1')" is-link :value="selectFlowNodes | showSelectFlowNodes"></mt-cell>
    </div>

    <div class="page-part btn">
      <mt-button size="large" type="danger" @click.native="submit">提交审核</mt-button>
    </div>


    <mt-datetime-picker
      ref="picker1"
      v-model="MigrantsItem.value1"
      :closeOnClickModal="true"
      @confirm="handleValue1Change">
    </mt-datetime-picker>
    <mt-datetime-picker
      ref="picker2"
      v-model="MigrantsItem.value2"
      :closeOnClickModal="true"
      @confirm="handleValue2Change">
    </mt-datetime-picker>
    <mt-datetime-picker
      ref="picker3"
      v-model="MigrantsItem.value3"
      :closeOnClickModal="true"
      @confirm="handleValue3Change">
    </mt-datetime-picker>
    <mt-datetime-picker
      ref="picker4"
      v-model="MigrantsItem.value4"
      :closeOnClickModal="true"
      @confirm="handleValue4Change">
    </mt-datetime-picker>
  </div>
</template>

<script>
  import {mapGetters, mapActions, mapState} from 'vuex'
  import {migrantsSave, flowNext} from '../../service/index'

  export default {
    filters: {
      showSelectAreas: function (areas) {
        let arr = [];
        for (let idx = 0, len = areas.length; idx < len; idx++) {
          let area = areas[idx];
          arr.push(area['NAME'])
        }
        return arr.join(',');
      },
      showSelectFlowNodes: function (nodes) {
        let arr2 = [];
        for (let idx = 0, len = nodes.length; idx < len; idx++) {
          let n = nodes[idx];
          arr2.push(n['USER_NAME'])
        }
        return arr2.join(',');
      }
    },

    name: 'MigrantsItem',

    data() {
      return {
        loginInfo: {}
      }
    },
    computed: {
      ...mapState({
        'outsiders': state => state.outsiders,
        MigrantsItem: state => state.MigrantsItem.data,
        selectAreas: state => state.Area.selectAreas,
        selectCauseLeft: state => state.Cause.selectCauseLeft,
        selectCauseRight: state => state.Cause.selectCauseRight,
        selectCauseShow: state => state.Cause.selectCauseShow,
        selectFlowNodes: state => state.FlowNode.selectFlowNodes,
      })
    },
    methods: {
      back() {
        // this.setNeedRefresh(true);
        this.$router.back();
      },
      reset() {
        this.clearSelectAreas();
        this.clearOutsider();
        this.clearSelectCause();
        this.resetMigrantsItemData();
        this.saveSelectFlowNodes([]);
      },
      submit() {
        let params = {
          "flowtype": "0"
        };
        let loginInfo = this.$store.getters.getLoginInfo();
        if (!loginInfo || !loginInfo.dbBm || !loginInfo.dbMc || !loginInfo.proposerid) {
          this.$toast('请先登录')
          return;
        }
        if (!this.selectAreas || !this.selectAreas.length || this.selectAreas.length == 0) {
          this.$toast('请先选择所到区域')
          return;
        }
        let arr = [];
        for (let idx = 0, len = this.selectAreas.length; idx < len; idx++) {
          let area = this.selectAreas[idx];
          arr.push(area['KEY'])
        }
        params['ares'] = arr.join(',');

        if (!this.MigrantsItem.entryTime) {
          this.$toast('请先选择进监时间')
          return;
        }
        if (!this.MigrantsItem.outTime) {
          this.$toast('请先选择离监时间')
          return;
        }
        let entryTimeStr = this.$ces.Utils.replaceAll(this.MigrantsItem.entryTime, ' ', '')
        entryTimeStr = this.$ces.Utils.replaceAll(entryTimeStr, '-', '')
        entryTimeStr = this.$ces.Utils.replaceAll(entryTimeStr, ':', '')

        let outTimeStr = this.$ces.Utils.replaceAll(this.MigrantsItem.outTime, ' ', '')
        outTimeStr = this.$ces.Utils.replaceAll(outTimeStr, '-', '')
        outTimeStr = this.$ces.Utils.replaceAll(outTimeStr, ':', '')
        if (parseInt(entryTimeStr) >= parseInt(outTimeStr)) {
          this.$toast('进监时间必须在离监时间之前')
          return;
        }
        params['entrytime'] = this.MigrantsItem.entryTime;
        params['outtime'] = this.MigrantsItem.outTime;

        if (!this.MigrantsItem.valiStartTime) {
          this.$toast('请先选择有效期开始时间')
          return;
        }
        if (!this.MigrantsItem.valiEndTime) {
          this.$toast('请先选择有效期结束时间')
          return;
        }
        let valiStartTimeStr = this.$ces.Utils.replaceAll(this.MigrantsItem.valiStartTime, ' ', '')
        valiStartTimeStr = this.$ces.Utils.replaceAll(valiStartTimeStr, '-', '')
        valiStartTimeStr = this.$ces.Utils.replaceAll(valiStartTimeStr, ':', '')

        let valiEndTimeStr = this.$ces.Utils.replaceAll(this.MigrantsItem.valiEndTime, ' ', '')
        valiEndTimeStr = this.$ces.Utils.replaceAll(valiEndTimeStr, '-', '')
        valiEndTimeStr = this.$ces.Utils.replaceAll(valiEndTimeStr, ':', '')
        if (parseInt(valiStartTimeStr) >= parseInt(valiEndTimeStr)) {
          this.$toast('有效期开始时间必须在有效期结束时间之前')
          return;
        }

        params['valistarttime'] = this.MigrantsItem.valiStartTime;
        params['valiendtime'] = this.MigrantsItem.valiEndTime;

        params['dbBm'] = loginInfo['dbBm'];
        params['dbMc'] = loginInfo['dbMc'];
        params['proposerid'] = loginInfo['proposerid'];

        if (!this.selectCauseLeft || !this.selectCauseLeft.NAME) {
          this.$toast('请先选择进监事由')
          return;
        }
        params['cause1'] = this.selectCauseLeft['NAME'];
        /*if (!this.selectCauseLeft || !this.selectCauseLeft.NAME) {
          this.$toast('请先选择进监事由')
          return;
        }*/
        params['cause2'] = this.selectCauseRight['NAME'] || '';
        params['hasfemale'] = this.hasfemale ? '1' : '0';

        if (!this.outsiders || !this.outsiders.length || this.outsiders.length == 0) {
          this.$toast('请添加外来人员');
          return;
        }
        let outsiders = [];
        for (let i = 0, l = this.outsiders.length; i < l; i++) {
          let obj = this.outsiders[i];
          outsiders.push({
            'wlryxm': obj['wlryxm'],
            'wlrysfzh': obj['wlrysfzh']
          })
        }
        params['outsiders'] = outsiders;

        if (!this.selectFlowNodes ||
          !this.selectFlowNodes.length ||
          this.selectFlowNodes.length === 0) {
          this.$toast('请选择审批人');
          return;
        }

        console.log(params);

        this.$indicator.open('提交中...');
        migrantsSave(params, false).then((rets) => {
          if (rets['status'] == '1') {
            let id = rets['id'];
            let processInstanceId = rets['processInstanceId'];

            let params2 = {};
            params2['dbBm'] = loginInfo['dbBm'];
            params2['dbMc'] = loginInfo['dbMc'];
            params2['proposerid'] = loginInfo['proposerid'];
            params2['id'] = id;
            params2['processInstanceId'] = processInstanceId;

            let node = this.selectFlowNodes[0];
            params2['auditor'] = node['RY_ID'];
            params2['functionId'] = node['FUNCTION_ID'];
            // params['nextFunctionId'] = node['RY_ID'];

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

            flowNext(params2, false).then((rets) => {
              if (rets['status'] == 1) {
                this.$indicator.close();

                this.setNeedRefresh(true);
                this.reset();

                this.$router.push('/migrants');
              } else {
                this.$toast('提交失败')
              }
            });
          } else {
            this.$toast(rets.msg || '提交失败');
          }

        });
      },
      ...mapGetters([
        'getScrollTop',
      ]),
      ...mapActions([
        'setScrollTop',
        'removeOutsider',
        'clearOutsider',
        'clearSelectAreas',
        'clearSelectCause',
        'saveSelectFlowNodes',
        'resetMigrantsItemData',
        'setNeedRefresh',
        'setMigrantsItemProperty'
      ]),
      to(path) {
        this.setScrollTop({
          scrollTop: document.documentElement.scrollTop
        });
        this.$router.push(path);
      },
      open(picker) {
        this.$refs[picker].open();
      },
      handleValue1Change(value) {
        let entryTime = this.$ces.DateTime.format(value);
        this.setMigrantsItemProperty({
          key: 'entryTime',
          val: entryTime
        });
      },
      handleValue2Change(value) {
        let outTime = this.$ces.DateTime.format(value);
        this.setMigrantsItemProperty({
          key: 'outTime',
          val: outTime
        });
      },
      handleValue3Change(value) {
        let valiStartTime = this.$ces.DateTime.format(value);
        this.setMigrantsItemProperty({
          key: 'valiStartTime',
          val: valiStartTime
        });
      },
      handleValue4Change(value) {
        let valiEndTime = this.$ces.DateTime.format(value);
        this.setMigrantsItemProperty({
          key: 'valiEndTime',
          val: valiEndTime
        });
      }
    },

    mounted() {
      this.loginInfo = this.$store.getters.getLoginInfo();

      let value = new Date();
      this.setMigrantsItemProperty({
        key: 'value1',
        val: value
      });
      this.setMigrantsItemProperty({
        key: 'value2',
        val: value
      });
      this.setMigrantsItemProperty({
        key: 'value3',
        val: value
      });
      this.setMigrantsItemProperty({
        key: 'value4',
        val: value
      });
    }
  }
</script>
