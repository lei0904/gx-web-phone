<template>
  <div id="medicineManageNew">
    <mt-header fixed title="新建服药">
      <router-link to="/medicinemanage" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <mt-cell title="选择发放人" is-link @click.native="sheetVisible.consigneeVisible = true"
               :value="newData.consignee"></mt-cell>
      <mt-actionsheet :actions="actions.consigneeActions" v-model="sheetVisible.consigneeVisible"></mt-actionsheet>

      <mt-cell title="选择药品" is-link @click.native="sheetVisible.medicineVisible = true"
               :value="newData.medicine"></mt-cell>
      <mt-actionsheet :actions="actions.medicineActions" v-model="sheetVisible.medicineVisible"></mt-actionsheet>

      <mt-cell title="选择服药区域" is-link @click.native="sheetVisible.areaVisible = true"
               :value="newData.area"></mt-cell>
      <mt-actionsheet :actions="actions.areaActions" v-model="sheetVisible.areaVisible"></mt-actionsheet>

      <mt-cell  title="发放时间" :value="formatTime" is-link @click.native="open('picker1')"></mt-cell>
      <mt-datetime-picker
        ref="picker1"
        v-model="timeValue"
        :closeOnClickModal="false"
        @confirm="handleChange">
      </mt-datetime-picker>

      <div class="otherPane">
        <mt-cell title="民警指纹识别" >
          <mt-button v-show="!fingerprintConfirm.fingerprint1" size="small" type="primary" @click.native="popupVisible.popupVisible1 = true">开始识别</mt-button>
          <div v-show="fingerprintConfirm.fingerprint1">已确认指纹</div>
        </mt-cell>
        <mt-popup v-model="popupVisible.popupVisible1" popup-transition="popup-fade" class="mint-popup" >
          <div class="fingerprint" @click="getFingerprint('fingerprint1','popupVisible1')">
            <img src="../../../static/img/icon_fingerprint.png">
            <p>请按指纹</p>
          </div>
        </mt-popup>

        <mt-cell title="罪犯指纹识别">
          <mt-button v-show="!fingerprintConfirm.fingerprint2" size="small" type="primary" @click.native="popupVisible.popupVisible2 = true">开始识别</mt-button>
          <div v-show="fingerprintConfirm.fingerprint2">已确认指纹</div>
        </mt-cell>
        <mt-popup v-model="popupVisible.popupVisible2" popup-transition="popup-fade" class="mint-popup" >
          <div class="fingerprint" @click="getFingerprint('fingerprint2','popupVisible2')">
            <img src="../../../static/img/icon_fingerprint.png">
            <p>请按指纹</p>
          </div>
        </mt-popup>
      </div>

      <mt-button class="normal-button" size="large" type="primary">提交申请</mt-button>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        value: true,
        sheetVisible: {
          consigneeVisible: false,
          medicineVisible: false,
          areaVisible: false
        },
        actions: {
          consigneeActions: [],
          medicineActions: [],
          areaActions: []
        },
        newData: {
          consignee: '',
          medicine: '',
          area: ''
        },
        popupVisible:{
          popupVisible1:false,
          popupVisible2:false
        },
        fingerprintConfirm:{
          fingerprint1:false,
          fingerprint2:false
        },
        timeValue:'',
        formatTime:'',
      };
    },
    methods: {
      changeConsignee(val){
        this.newData.consignee = val.name
      },
      changeMedicine(val){
        this.newData.medicine = val.name
      },
      changeArea(val){
        this.newData.area = val.name
      },
      getFingerprint(val,id){
        this.fingerprintConfirm[val] = true
        this.popupVisible[id] = false
      },
      open(picker) {
        this.$refs[picker].open();
      },
      handleChange(value) {
        this.formatTime = this.$moment(value).format('YYYY-MM-DD HH:mm');
      }
    },
    mounted() {
      this.actions.consigneeActions = [
        {
          name: '张三',
          method: this.changeConsignee
        },
        {
          name: '李四',
          method: this.changeConsignee
        }
      ];
      this.actions.medicineActions = [
        {
          name: '阿莫西林胶囊',
          method: this.changeMedicine
        },
        {
          name: '罗红霉素',
          method: this.changeMedicine
        },
        {
          name: '维C银翘片',
          method: this.changeMedicine
        },
        {
          name: '头孢拉定胶囊',
          method: this.changeMedicine
        }
      ];
      this.actions.areaActions = [
        {
          name: '监舍内',
          method: this.changeArea
        },
        {
          name: '医务室',
          method: this.changeArea
        }
      ];
    }
  }

</script>

<style lang="scss">
  #medicineManageNew {
    min-height: 100vh;
    .mint-actionsheet-listitem{
      text-align: center;
    }
    .mint-actionsheet-list{
      max-height: 800px;
      overflow-y: scroll;
    }
    .content {
      .normal-button {
        width: 90%;
        margin-left: 5%;
        margin-top: 35px;
      }
    }
    .mint-popup{
      background: transparent;
      .fingerprint{
        width: 500px;
        height: 800px;
        background: transparent;
        position: relative;
        img{
          width: 200px;
          height: 200px;
          margin: 300px 0 0 150px;
        }
        p{
          text-align: center;
          font-size: 18px;/*no*/
          margin-top: 20px;
          color: #fff;
        }
      }
    }
    .mint-datetime{
      background: #fff;
    }
    .otherPane{
      padding-top: 100px;
    }

  }
</style>
