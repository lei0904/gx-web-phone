<template>
  <div id="new">
    <mt-header fixed title="新增谈话">
      <mt-button icon="back" slot="left" @click="$router.back()"></mt-button>
    </mt-header>
    <div class="content">
      <mt-cell title="选择谈话人" is-link @click.native="sheetVisible.consigneeVisible = true"
               :value="newData.consignee"></mt-cell>
      <mt-actionsheet v-if="!isDetail" :actions="actions.consigneeActions" v-model="sheetVisible.consigneeVisible"></mt-actionsheet>

      <mt-cell title="选择谈话地点" is-link @click.native="sheetVisible.warehouseVisible = true"
               :value="newData.warehouse"></mt-cell>
      <mt-actionsheet v-if="!isDetail" :actions="actions.warehouseActions" v-model="sheetVisible.warehouseVisible"></mt-actionsheet>
      <mt-cell v-if="isDetail" title="谈话时间" value="2019-7-17"></mt-cell>
      <mt-cell title="是否重点对象">
        <mt-switch v-model="value"></mt-switch>
      </mt-cell>
      <mt-cell title="民警指纹识别" >
        <mt-button v-show="!isDetail&&!fingerprintConfirm.fingerprint1" size="small" type="primary" @click.native="popupVisible.popupVisible1 = true">开始识别</mt-button>
        <div v-show="isDetail||fingerprintConfirm.fingerprint1">已确认指纹</div>
      </mt-cell>
      <mt-popup v-model="popupVisible.popupVisible1" popup-transition="popup-fade" class="mint-popup" >
        <div class="fingerprint" @click="getFingerprint('fingerprint1','popupVisible1')">
          <img src="../../../static/img/icon_fingerprint.png">
          <p>请按指纹</p>
        </div>
      </mt-popup>

      <mt-cell title="罪犯指纹识别">
        <mt-button v-show="!isDetail&&!fingerprintConfirm.fingerprint2" size="small" type="primary" @click.native="popupVisible.popupVisible2 = true">开始识别</mt-button>
        <div v-show="isDetail||fingerprintConfirm.fingerprint2">已确认指纹</div>
      </mt-cell>
      <mt-popup v-model="popupVisible.popupVisible2" popup-transition="popup-fade" class="mint-popup" >
        <div class="fingerprint" @click="getFingerprint('fingerprint2','popupVisible2')">
          <img src="../../../static/img/icon_fingerprint.png">
          <p>请按指纹</p>
        </div>
      </mt-popup>
      <mt-cell title="录音" >
        <mt-button  size="small" type="primary" @click.native="record">{{isDetail?'播放录音':'开始录音'}}</mt-button>
      </mt-cell>
      <div class="photo-content">
        <div class="photo-title">拍照留证</div>
        <div class="photo">
          <div class="photo-img" v-for="(item,idx) in imgList" @click="clearImg(idx)">
            <img :src="item.src" >
            <p class="clear-img"></p>
          </div>
          <p class="photo-bg" @click="takePhoto"></p>
        </div>
      </div>
      <mt-button v-if="!isDetail" class="normal-button" size="large" type="primary" @click.native="save">提交</mt-button>
    </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  export default {
    data() {
      return {
        value: true,
        imgList:[],
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
          consignee: this.$route.query.consignee,
          warehouse: this.$route.query.warehouse,
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
        },
        isRecord:false,
        isDetail:this.$route.query.detail,

      };
    },
    methods: {

      takePhoto(){
        let ths = this;
        ths.$ces.Plugins.Camera.take(function(rets){
          console.log('--->rets',rets);
          if (rets.status === 1) {
            let data =rets.data;
            let obj={
              src:'data:image/jpg;base64,'+data.thumbnail
            };
            ths.imgList.push(obj);
          }else{
            ths.$toast('调用拍照失败')
          }
        })
      },
      clearImg(idx){
        this.$mint.MessageBox.confirm('确认删除此凭证?','系统提示').then(()=>{
          this.imgList.splice(idx,1)
        })
      },
      record(e){
        if(!this.isRecord){
          e.target.innerHTML='结束录音';
        }else {
          e.target.innerHTML='开始录音'
        }
        this.isRecord=!this.isRecord;
      },
      save(){
        Toast({
          message: '保存成功',
          position: 'middle',
          duration: 2000
        });
        this.$router.back();
      },
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
          name: '监舍',
          method: this.changeWarehouse
        },
        {
          name: '活动室',
          method: this.changeWarehouse
        },
        {
          name: '操场',
          method: this.changeWarehouse
        },
        {
          name: '车间',
          method: this.changeWarehouse
        },
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
  #new {
    background: #f0f0f4;
    min-height: 100vh;

    .photo-content{
      border-top: 1px solid #d9d9d9;/*no*/
      min-height: 320px;
      margin-left:20px;
      padding-right: 20px;
      .photo-title{
        vertical-align: middle;
        color: #136dc5;
        text-align: center;
        padding: 20px;
        font-size: 18px;/*no*/
        font-weight: 400;
      }
      .photo{
        display: flex;
        .photo-img{
          position: relative;
          margin-right: 20px;
          img{
            width: 220px;
            height: 220px;
            border-radius: 5px;
          }
          .clear-img{
            background: url("../../../static/img/icon-clear.png") no-repeat;
            background-size: 100% 100%;
            right: -20px;
            top:-20px;
            color: #fff;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            position: absolute;
          }
        }
        .photo-bg{
          background: url("../../../static/img/photo-bg.png") no-repeat;
          background-size: 100% 100%;
          width: 220px;
          height: 220px;
        }
      }
    }
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
