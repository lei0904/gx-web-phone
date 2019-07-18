<template>
  <div id="clothingManageNew">
    <mt-header fixed title="新增被服发放">
      <router-link to="/clothingmanage" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <mt-cell title="选择发放人" is-link @click.native="sheetVisible.consigneeVisible = true"
               :value="newData.consignee"></mt-cell>
      <mt-actionsheet :actions="actions.consigneeActions" v-model="sheetVisible.consigneeVisible"></mt-actionsheet>

      <mt-cell title="选择仓库" is-link @click.native="sheetVisible.warehouseVisible = true"
               :value="newData.warehouse"></mt-cell>
      <mt-actionsheet :actions="actions.warehouseActions" v-model="sheetVisible.warehouseVisible"></mt-actionsheet>

      <mt-cell title="物品类别" is-link @click.native="sheetVisible.categoryVisible = true"
               :value="newData.category"></mt-cell>
      <mt-actionsheet :actions="actions.categoryActions" v-model="sheetVisible.categoryVisible"></mt-actionsheet>

      <mt-cell title="物品子类" is-link @click.native="sheetVisible.subclassVisible = true"
               :value="newData.subclass"></mt-cell>
      <mt-actionsheet :actions="actions.subclassActions" v-model="sheetVisible.subclassVisible"></mt-actionsheet>

      <mt-cell title="新犯/标准">
        <mt-switch v-model="value"></mt-switch>
      </mt-cell>
      <mt-cell title="发放数量" :value="value ? '2' : '1'"></mt-cell>

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
          warehouseVisible: false,
          categoryVisible: false,
          subclassVisible: false,
        },
        actions: {
          consigneeActions: [],
          warehouseActions: [],
          categoryActions: [],
          subclassActions: []
        },
        newData: {
          consignee: '',
          warehouse: '',
          category: '',
          subclass: ''
        },
        popupVisible:{
          popupVisible1:false,
          popupVisible2:false
        },
        fingerprintConfirm:{
          fingerprint1:false,
          fingerprint2:false
        }
      };
    },
    methods: {
      changeConsignee(val){
        this.newData.consignee = val.name
      },
      changeWarehouse(val){
        this.newData.warehouse = val.name
      },
      changeCategory(val){
        this.newData.category = val.name
        this.actions.subclassActions = [
          {
            name: '夏季外衣裤',
            method: this.changeSubclass
          },
          {
            name: '春秋季外衣裤',
            method: this.changeSubclass
          },
          {
            name: '冬季外衣裤',
            method: this.changeSubclass
          },
          {
            name: '棉衣',
            method: this.changeSubclass
          },
          {
            name: '绒衣裤',
            method: this.changeSubclass
          },
          {
            name: '棉毛衫裤',
            method: this.changeSubclass
          },
          {
            name: '男士内衣（背心）',
            method: this.changeSubclass
          },
          {
            name: '女士内衣（胸罩）',
            method: this.changeSubclass
          },
          {
            name: '内裤',
            method: this.changeSubclass
          },
          {
            name: '劳保服（夏季劳保外衣裤）',
            method: this.changeSubclass
          },
          {
            name: '劳保服（春秋季劳保外衣裤）',
            method: this.changeSubclass
          },
          {
            name: '劳保服（冬季劳保外衣裤）',
            method: this.changeSubclass
          },
          {
            name: '劳保服（炊事服短袖）',
            method: this.changeSubclass
          },
          {
            name: '劳保服（炊事服长袖）',
            method: this.changeSubclass
          },
          {
            name: '棉裤',
            method: this.changeSubclass
          },
          {
            name: '棉背心',
            method: this.changeSubclass
          }
        ];
      },
      changeSubclass(val){
        this.newData.subclass = val.name
      },
      getFingerprint(val,id){
          this.fingerprintConfirm[val] = true
          this.popupVisible[id] = false
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
      this.actions.warehouseActions = [
        {
          name: '仓库一',
          method: this.changeWarehouse
        },
        {
          name: '仓库二',
          method: this.changeWarehouse
        }
      ];
      this.actions.categoryActions = [
        {
          name: '服装',
          method: this.changeCategory
        }
      ];
    }
  }

</script>

<style lang="scss">
  #clothingManageNew {
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

  }
</style>
