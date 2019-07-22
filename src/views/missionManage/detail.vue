<template>
  <div id="missionDetail">
    <mt-header fixed title="任务详情">
      <mt-button icon="back" slot="left" @click="$router.back()"></mt-button>
    </mt-header>
    <div class="content">
      <div class="list">
        <mt-field label="任务主题"  disable="true" value="关于“三课一课”的思想汇报"></mt-field>
        <mt-field label="下达部门"  disable="true" value="教育科"></mt-field>
        <mt-field label="下达人"  disable="true" value="王一"></mt-field>
        <mt-field label="活动时间"  disable="true" value="2019-08-01"></mt-field>
        <mt-field type="textarea" disable="true" rows="4" value="内容说明：
   1.8.31前提交学习强国新的体验
   2.可以已文字，图片的方式"></mt-field>
        <div class="photo-content">
          <div class="photo-title">拍照凭证</div>
          <div class="photo">
            <div class="photo-img" v-for="(item,idx) in imgList" @click="clearImg(idx)">
              <img :src="item.src" >
              <p class="clear-img"></p>
            </div>
            <p class="photo-bg"></p>
          </div>
        </div>
        <mt-cell title="选择状态" is-link @click.native="sheetVisible.consigneeVisible = true"
                 :value="newData.consignee"></mt-cell>
        <mt-actionsheet :actions="actions.consigneeActions" v-model="sheetVisible.consigneeVisible"></mt-actionsheet>
      </div>
      <mt-button class="normal-button" size="large" type="primary">报名参与</mt-button>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        topic:'',
        content:'',
        imgList:[
          {
            id:'1',
            src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563529888813&di=fe9f9654bf296b39c717dac139ca09e3&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201512%2F12%2F20151212193107_ujGZV.jpeg"
          },
          {
            id:'2',
            src:"https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1563520643&di=63fabd0dc73a18049fe1429aac5347e8&src=http://img2.ph.126.net/8Y1u9aYRhqT4KHumTO_y1w==/6619210632305894354.jpg"
          },
          {
            id:'3',
            src:"https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1563520690&di=dbe773d87eea1887224433bc8bcfd4e2&src=http://pic.nipic.com/2008-06-13/2008613104551168_2.jpg"
          },
        ],
        sheetVisible: {
          consigneeVisible: false,
        },
        newData: {
          consignee: '',
        },
        actions: {
          consigneeActions: [],
        },
      }
    },
    mounted() {
      this.actions.consigneeActions = [
        {
          name: '已完成',
          method: this.changeConsignee
        },
        {
          name: '进行中',
          method: this.changeConsignee
        },
        {
          name: '未完成',
          method: this.changeConsignee
        }
      ];
    },
    methods:{
      changeConsignee(val){
        this.newData.consignee = val.name
      },
    }
  }
</script>

<style lang="scss">
  #missionDetail{
    textarea{
      text-align: left;
    }
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
  }
</style>
