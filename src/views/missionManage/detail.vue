<template>
  <div id="missionDetail">
    <mt-header fixed title="任务详情">
      <mt-button icon="back" slot="left" @click="$router.back()"></mt-button>
    </mt-header>
    <div class="content" :style="{height:listH+'px'}">
      <div class="list">
        <mt-field label="任务主题"  disable="true" value="关于“三课一课”的思想汇报"></mt-field>
        <mt-field label="下达部门"  disable="true" value="教育科"></mt-field>
        <mt-field label="下达人"  disable="true" value="王一"></mt-field>
        <mt-field label="活动时间"  disable="true" value="2019-08-01"></mt-field>
        <mt-field label='内容说明' type="textarea" disable="true" rows="4" value="
       1.8.31前提交学习强国新的体验
       2.可以已文字，图片的方式">
        </mt-field>
        <mt-cell title="选择状态" @click.native="sheetVisible2 = true"
                 :value="consignee"
                 is-link></mt-cell>
        <mt-actionsheet :actions="actions2" v-model="sheetVisible2"></mt-actionsheet>
        <div class="photo-content">
          <div class="photo-title">拍照凭证</div>
          <div class="photo">
            <div class="photo-img" v-for="(item,idx) in imgList" @click="clearImg(idx)">
              <img :src="item.src" >
              <p class="clear-img"></p>
            </div>
            <p class="photo-bg"  @click="takePhoto"></p>
          </div>
        </div>
      </div>
      <mt-button class="normal-button" size="large" type="primary">任务提交</mt-button>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        topic:'',
        content:'',
        imgList:[],
        listH:0,
        consigneeVisible:false,
        sheetVisible2:false,
        consignee: '',
        consigneeActions: [],
        actions2:[
          {
            name: '已完成',
            id: 1,
            method: this.changeConsignee
          },
          {
            name: '进行中',
            id: 2,
            method: this.changeConsignee
          },
          {
            name: '未完成',
            id: 3,
            method: this.changeConsignee
          }
        ],
      }
    },
    mounted() {
    },
    methods:{
      changeConsignee(val){
        this.consignee = val.name
      },
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
    },
    mounted(){
      this.listH = document.body.clientHeight - 45;
    }
  }
</script>

<style lang="scss">
  #missionDetail{
    .content{
      overflow: scroll;
      .photo-content{
        border-top: 1px solid #d9d9d9;/*px*/
        min-height: 290px;
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
      .normal-button{
        width: 90%;
        margin-left: 5%;
        margin-top: 35px;
      }
    }

  }
</style>
