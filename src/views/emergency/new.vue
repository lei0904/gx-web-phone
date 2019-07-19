<template>
  <div class="emergencynew">
    <mt-header fixed title="新建事件处置">
      <router-link to="/emergencyfollowup" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <mt-cell title="选择事件地点" is-link @click.native="sheetVisible.consigneeVisible = true"
               :value="newData.consignee"></mt-cell>
      <mt-actionsheet :actions="actions.consigneeActions" v-model="sheetVisible.consigneeVisible"></mt-actionsheet>

      <mt-cell title="选择事件罪犯" is-link @click.native="sheetVisible.medicineVisible = true"
               :value="newData.medicine"></mt-cell>
      <mt-actionsheet :actions="actions.medicineActions" v-model="sheetVisible.medicineVisible"></mt-actionsheet>

      <mt-cell title="选择事件类别" is-link @click.native="sheetVisible.areaVisible = true"
               :value="newData.area"></mt-cell>
      <mt-actionsheet :actions="actions.areaActions" v-model="sheetVisible.areaVisible"></mt-actionsheet>

      <mt-cell  title="事件时间" :value="formatTime" is-link @click.native="open('picker1')"></mt-cell>
      <mt-datetime-picker
        ref="picker1"
        v-model="timeValue"
        :closeOnClickModal="false"
        @confirm="handleChange">
      </mt-datetime-picker>

      <mt-field label="事件描述" placeholder="事件描述" type="textarea" rows="4" v-modal="newData.desc"></mt-field>

      <div class="otherPane">
        <div @click="takePhoto()" :class="photoStatus ? 'photoComplete':'takePhoto' "></div>
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
          area: '',
          desc:''
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
        photoStatus:false
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
      },
      takePhoto(){
          this.photoStatus  = true
      }
    },
    mounted() {
      this.actions.consigneeActions = [
        {
          name: '监舍内',
          method: this.changeConsignee
        },
        {
          name: '活动区',
          method: this.changeConsignee
        }
      ];
      this.actions.medicineActions = [
        {
          name: '张三',
          method: this.changeMedicine
        },
        {
          name: '李四',
          method: this.changeMedicine
        },
        {
          name: '赵五',
          method: this.changeMedicine
        },
        {
          name: '钱六',
          method: this.changeMedicine
        }
      ];
      this.actions.areaActions = [
        {
          name: '打架斗殴',
          method: this.changeArea
        },
        {
          name: '口角冲突',
          method: this.changeArea
        }
      ];
    }
  }

</script>

<style lang="scss">
  .emergencynew {
    background: #f0f0f4;
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
      .takePhoto{
        width: 100%;
        height: 300px;
        background: url(../../../static/img/icon_takephoto.png) no-repeat center #fff;
        background-size: 80px 80px;
      }
      .photoComplete{
        width: 100%;
        height: 300px;
        background: url(../../../static/img/videopatrol.jpeg) no-repeat center #fff;
        background-size: 90% 90%;
        padding: 5%;
      }
    }
    .is-textarea{
      .mint-cell-wrapper{
        position: relative;
        .mint-cell-title{
          position: absolute;
          top:0;
          left:10px;/*no*/
        }
        .mint-cell-text{
          color: #515a6e;
        }
      }
    }


  }
</style>
