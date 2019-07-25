<template>
  <div class="toolsManage">
    <mt-header fixed title="工具收发管理">
      <router-link to="/bussiness" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <div class="head">
        <div @click="toPath('/inWarehouseQuery')">库存工具:20</div>
        <div @click="toPath('/outofWarehouseQuery')">库外工具:100</div>
      </div>
      <div class="function">
        <div class="box">
          <div class="toggle" @click="toPath('/outofWarehouse')">
            <input type="checkbox">
            <span class="button"></span>
            <span class="label">工具发放</span>
          </div>
        </div>
        <div class="box">
          <div class="toggle" @click="toPath('/inWarehouse')">
            <input type="checkbox">
            <span class="button"></span>
            <span class="label">工具回收</span>
          </div>
        </div>
      </div>
      <mt-cell class="secondTitle" title="当日收发记录" is-link value="历史记录" @click.native="toPath('/toolsManageHistory')"></mt-cell>
      <div class="recordList">
        <div class="item">
          <div class="title"><i></i>工具领取（剪刀）</div>
          <mt-cell title="领取人" value="张三"></mt-cell>
          <mt-cell title="领取时间" value="2019-7-18 15:58:51"></mt-cell>
          <mt-cell title="责任民警" value="王毅"></mt-cell>
          <div class="button">查看详情</div>
        </div>
        <div class="item">
          <div class="title"><i></i>工具归还（锤子）</div>
          <mt-cell title="领取人" value="张三"></mt-cell>
          <mt-cell title="领取时间" value="2019-7-18 15:58:51"></mt-cell>
          <mt-cell title="责任民警" value="王毅"></mt-cell>
          <div class="button">查看详情</div>
        </div>
        <div class="item">
          <div class="title"><i></i>工具领取（剪刀）</div>
          <mt-cell title="领取人" value="张三"></mt-cell>
          <mt-cell title="领取时间" value="2019-7-18 15:58:51"></mt-cell>
          <mt-cell title="责任民警" value="王毅"></mt-cell>
          <div class="button">查看详情</div>
        </div>
        <div class="item">
          <div class="title"><i></i>工具领取（剪刀）</div>
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
      return {};
    },
    methods: {
      toPath(val){
        this.$router.push(val)
      }
    }
  }

</script>

<style lang="scss">
  .toolsManage {
    background: #f0f0f4;
    min-height: 100vh;
    .content {
      font-size: 14px; /*no*/
      .head {
        padding: 15px 0;
        background: #fff;
        div {
          width: 50%;
          display: inline-block;
          text-align: center;
          box-sizing: border-box;
          height: 40px;
          line-height: 40px;
        }
        div:first-child {
          border-right: 1px solid #888; /*no*/
          margin-right: -5px; /*no*/
        }
      }
      .function {
        background: #fff;
        .box{
          width: 49%;
          padding: 50px 0;
          display: inline-block;
          text-align: center;
        }
        .toggle {
          margin: 4px;
          display: inline-block;
        }

        .toggle {
          box-shadow: inset 0 0 35px 5px rgba(0, 0, 0, 0.25), inset 0 2px 1px 1px rgba(255, 255, 255, 0.9), inset 0 -2px 1px 0 rgba(0, 0, 0, 0.25);
          border-radius: 8px;
          background: #ccd0d4;
          position: relative;
          height: 140px;
          width: 140px;
        }
        .toggle:before {
          box-shadow: 0 0 17.5px 8.75px white;
          border-radius: 118.3px;
          background: white;
          position: absolute;
          margin-left: -50.4px;
          margin-top: -50.4px;
          opacity: 0.2;
          content: "";
          height: 100.8px;
          width: 100.8px;
          left: 50%;
          top: 50%;
        }
        .toggle .button {
          -webkit-filter: blur(1px);
          -moz-filter: blur(1px);
          filter: blur(1px);
          transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
          box-shadow: 0 15px 25px -4px rgba(0, 0, 0, 0.5), inset 0 -3px 4px -1px rgba(0, 0, 0, 0.2), 0 -10px 15px -1px rgba(255, 255, 255, 0.6), inset 0 3px 4px -1px rgba(255, 255, 255, 0.2), inset 0 0 5px 1px rgba(255, 255, 255, 0.8), inset 0 20px 30px 0 rgba(255, 255, 255, 0.2);
          border-radius: 96.32px;
          position: absolute;
          background: #ccd0d4;
          margin-left: -48.16px;
          margin-top: -48.16px;
          display: block;
          height: 96.32px;
          width: 96.32px;
          left: 50%;
          top: 50%;
        }
        .toggle .label {
          transition: color 300ms ease-out;
          text-shadow: 1px 1px 3px #ccd0d4, 0 0 0 rgba(0, 0, 0, 0.8), 1px 1px 4px white;
          line-height: 139px;
          text-align: center;
          position: absolute;
          font-weight: 700;
          display: block;
          opacity: 0.9;
          height: 100%;
          width: 100%;
          color: rgba(0, 0, 0, 0.4);
        }
        .toggle input {
          opacity: 0;
          position: absolute;
          cursor: pointer;
          z-index: 1;
          height: 100%;
          width: 100%;
          left: 0;
          top: 0;
        }
        .toggle input:active ~ .button {
          box-shadow: 0 15px 25px -4px rgba(0, 0, 0, 0.4), inset 0 -8px 30px 1px rgba(255, 255, 255, 0.9), 0 -10px 15px -1px rgba(255, 255, 255, 0.6), inset 0 8px 25px 0 rgba(0, 0, 0, 0.4), inset 0 0 10px 1px rgba(255, 255, 255, 0.6);
        }
        .toggle input:active ~ .label {
          color: rgba(0, 0, 0, 0.45);
        }
        .toggle input:checked ~ .button {
          box-shadow: 0 15px 25px -4px rgba(0, 0, 0, 0.4), inset 0 -8px 25px -1px rgba(255, 255, 255, 0.9), 0 -10px 15px -1px rgba(255, 255, 255, 0.6), inset 0 8px 20px 0 rgba(0, 0, 0, 0.2), inset 0 0 5px 1px rgba(255, 255, 255, 0.6);
        }
        .toggle input:checked ~ .label {
          font-size: 18px;/*no*/
          color: rgba(0, 0, 0, 0.4);
        }
      }
      .recordList {
        height: 800px;
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
    }
  }
</style>
