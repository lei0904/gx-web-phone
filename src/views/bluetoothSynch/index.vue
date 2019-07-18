<template>
    <div id="bluetoothSynch">
      <mt-header fixed title="蓝牙同步">
        <router-link to="/bussiness" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="content">
        <div class="line">
          <mt-cell title="网络状态" >
            <span style="color: green">离线</span>
          </mt-cell>
        </div>
        <div class="line">
          <mt-cell title="上次同步时间" label="2018-09-03 10:00:01" >
          <span style="color: green">
            <mt-button type="primary" size="small">立即同步</mt-button>
          </span>
          </mt-cell>
        </div>
        <div class="line">
         <div class="title">事件列表</div>
          <div class="list">
            <mt-cell title="被服发放"   value="XXX被服发放"></mt-cell>
            <mt-cell title="服药管理"   value="XXX服药管理"></mt-cell>
            <mt-cell title="点名管理"   value="XXX点名管理"></mt-cell>
            <mt-cell title="被服发放"   value="XXX被服发放"></mt-cell>
            <mt-cell title="服药管理"   value="XXX服药管理"></mt-cell>
            <mt-cell title="点名管理"   value="XXX点名管理"></mt-cell>
            <mt-cell title="被服发放"   value="XXX被服发放"></mt-cell>
            <mt-cell title="服药管理"   value="XXX服药管理"></mt-cell>
            <mt-cell title="点名管理"   value="XXX点名管理"></mt-cell>
            <mt-cell title="被服发放"   value="XXX被服发放"></mt-cell>
            <mt-cell title="服药管理"   value="XXX服药管理"></mt-cell>
            <mt-cell title="点名管理"   value="XXX点名管理"></mt-cell>
            <mt-cell title="被服发放"   value="XXX被服发放"></mt-cell>
            <mt-cell title="服药管理"   value="XXX服药管理"></mt-cell>
            <mt-cell title="点名管理"   value="XXX点名管理"></mt-cell>
          </div>
          <mt-button class="normal-button" size="large" type="primary">提交</mt-button>
        </div>
      </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {};
        },
        methods: {}
    }

</script>

<style lang="scss">
  #bluetoothSynch{
    background: #f0f0f4;
    min-height: 100vh;
    .content{
      .line{
        margin-bottom: 20px;
        .title{
          background: #fff;
          height: 80px;
          line-height: 80px;
          font-size: 18px;/*no*/
          padding: 0 10px;/*no*/
        }
        .list{
          text-indent: 30px;
          height: 750px;
          overflow-y: scroll;
          .mint-cell-value{
            font-size: 13px;/*no*/
          }
        }
        .normal-button{
          width: 90%;
          margin-left: 5%;
          margin-top: 35px;
        }
      }
    }
  }
</style>
