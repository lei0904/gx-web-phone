<template>
  <div class="medicineManage">
    <mt-header fixed title="收发记录查询">
      <router-link to="/toolsManage" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <mt-search v-model="keyword"></mt-search>
      <div class="recordList">
        <div class="item">
          <div class="title"><i></i>工具领取-危险工具-剪刀</div>
          <mt-cell title="领取人" value="张三"></mt-cell>
          <mt-cell title="领取时间" value="2019-7-18 15:58:51"></mt-cell>
          <mt-cell title="责任民警" value="王毅"></mt-cell>
          <div class="button">查看详情</div>
        </div>
        <div class="item">
          <div class="title"><i></i>工具领取-危险工具-剪刀</div>
          <mt-cell title="领取人" value="张三"></mt-cell>
          <mt-cell title="领取时间" value="2019-7-18 15:58:51"></mt-cell>
          <mt-cell title="责任民警" value="王毅"></mt-cell>
          <div class="button">查看详情</div>
        </div>
        <div class="item">
          <div class="title"><i></i>工具领取-危险工具-剪刀</div>
          <mt-cell title="领取人" value="张三"></mt-cell>
          <mt-cell title="领取时间" value="2019-7-18 15:58:51"></mt-cell>
          <mt-cell title="责任民警" value="王毅"></mt-cell>
          <div class="button">查看详情</div>
        </div>
        <div class="item">
          <div class="title"><i></i>工具领取-危险工具-剪刀</div>
          <mt-cell title="领取人" value="张三"></mt-cell>
          <mt-cell title="领取时间" value="2019-7-18 15:58:51"></mt-cell>
          <mt-cell title="责任民警" value="王毅"></mt-cell>
          <div class="button">查看详情</div>
        </div>
        <div class="item">
          <div class="title"><i></i>工具领取-危险工具-剪刀</div>
          <mt-cell title="领取人" value="张三"></mt-cell>
          <mt-cell title="领取时间" value="2019-7-18 15:58:51"></mt-cell>
          <mt-cell title="责任民警" value="王毅"></mt-cell>
          <div class="button">查看详情</div>
        </div>
        <div class="item">
          <div class="title"><i></i>工具领取-危险工具-剪刀</div>
          <mt-cell title="领取人" value="张三"></mt-cell>
          <mt-cell title="领取时间" value="2019-7-18 15:58:51"></mt-cell>
          <mt-cell title="责任民警" value="王毅"></mt-cell>
          <div class="button">查看详情</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        keyword:''
      };
    },
    methods: {
      toPath(val){
        this.$router.push(val)
      }
    },
    mounted(){

    }

  }

</script>

<style lang="scss">
  .medicineManage {
    .content {
      .mint-search{
        height: auto;
      }
      .mint-field{
        .mint-field-core{
          text-align: left;
        }
      }
      position: relative;
      .recordList {
        height: 1130px;
        overflow-y: scroll;
        .item {
          background: #fff;
          width: 90%;
          margin-left: 5%;
          border-radius: 10px; /*no*/
          border: 1px solid #494a41; /*no*/
          margin-top: 30px;
          overflow: hidden;
          .title {
            height: 90px;
            line-height: 90px;
            font-size: 14px; /*no*/
            text-indent: 10px; /*no*/
            i {
              display: inline-block;
              width: 60px;
              height: 60px;
              vertical-align: middle;
              margin-right: 10px;
              background: url(../../../static/img/icon_tools.png) no-repeat;
              background-size: 60px 60px;
            }
          }
          .button {
            text-align: center;
            height: 80px;
            line-height: 80px;
            padding: 0 10px; /*no*/
            border-top: 1px solid #ccc; /*no*/
            font-size: 14px; /*no*/
          }
          .mint-cell {
            min-height: 30px; /*no*/
            .mint-cell-text {
              font-size: 12px; /*no*/
            }
            .mint-cell-value {
              font-size: 12px; /*no*/
            }

          }

        }
      }
      .normal-button {
        width: 90%;
        margin-left: 5%;
        margin-top: 35px;
      }
    }
  }
</style>
