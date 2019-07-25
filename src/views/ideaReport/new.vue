<template>
  <div id="ideaReportNew">
    <mt-header fixed title="新建思想汇报">
      <mt-button icon="back" slot="left" @click="$router.back()"></mt-button>
    </mt-header>
    <div class="content">
      <div class="list">
        <mt-field label="主题"  placeholder="输入汇报思想主题" v-model="topic"></mt-field>
        <mt-field  placeholder="汇报内容" type="textarea" v-model="content" rows="10"></mt-field>
        <mt-field label="时间" placeholder="汇报时间" type="date"></mt-field>
        <div class="photo-content">
          <div class="photo-title">拍照凭证</div>
          <div class="photo">
            <div class="photo-img" v-for="(item,idx) in imgList" @click="clearImg(idx)">
              <img :src="item.src" >
              <p class="clear-img"></p>
            </div>
            <p class="photo-bg" @click="takePhoto"></p>
          </div>
        </div>
      </div>
      <mt-button class="normal-button" size="large" type="primary">提交</mt-button>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        topic:'',
        content:'',
        imgList:[]
      }
    }
  }
</script>

<style lang="scss">
  #ideaReportNew{
    .mint-field-core{
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
  }
</style>
