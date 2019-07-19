<template>
  <div class="menu clearfix" ref="menu">
    <div class="menu_item" :class="checked ==1 ? 'checked' : ''" @click="toPath('/workbench')">
      <i class="menu_1"></i>
      <p>工作台</p>
    </div>
    <div class="menu_item" :class="checked ==2 ? 'checked' : ''" @click="toPath('/bussiness')">
      <i class="menu_2"></i>
      <p>业务</p>
    </div>
    <div class="menu_item" :class="checked ==3 ? 'checked' : ''" @click="toPath('/message')">
      <i class="menu_3"></i>
      <p>消息</p>
    </div>
    <div class="menu_item" :class="checked ==4 ? 'checked' : ''" @click="toPath('/personal')">
      <i class="menu_4"></i>
      <p>个人</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: "Menu",
    props: {
      checked:{
        type: Number,
        default: 1
      }
    },
    data: function() {
      return {

      };
    },
    methods: {
      toPath:function (val) {
        this.$router.push(val)
      }
    }
  };
</script>
<style lang="scss">
  .menu {
    font-size: 12px; /*no*/
    position: fixed;
    width: 750px;
   /* margin: 0 15px;*/
    height: 60px;/*no*/
    bottom: 0;
    left: 0;
    background: #fff;
    -moz-box-shadow: 0 5px 19px #B0B0B0;
    -webkit-box-shadow: 0 5px 19px #B0B0B0;
    box-shadow: 0 5px 19px #B0B0B0;
    .menu_item {
      float: left;
      width: 187.5px;
      margin-top: 20px;
      p{
        margin-top: 8px;
        text-align: center;
        color: #43424a;
      }
      i{
        display: inline-block;
        width: 48px;
        height: 48px;
        margin-left: 66px;
      }
      .menu_1{
        background: url(../../../static/img/icon-menu_1.png) no-repeat center / 100% 100%;
      }
      .menu_2{
        background: url(../../../static/img/icon-menu_2.png) no-repeat center / 100% 100%;
      }
      .menu_3{
        background: url(../../../static/img/icon-menu_3.png) no-repeat center / 100% 100%;
      }
      .menu_4{
        background: url(../../../static/img/icon-menu_4.png) no-repeat center / 100% 100%;
      }
    }
    .checked{
      .menu_1{
        background: url(../../../static/img/menu_1_checked.png) no-repeat center / 100% 100%;
      }
      .menu_2{
        background: url(../../../static/img/menu_2_checked.png) no-repeat center / 100% 100%;
      }
      .menu_3{
        background: url(../../../static/img/menu_3_checked.png) no-repeat center / 100% 100%;
      }
      .menu_4{
        background: url(../../../static/img/menu_4_checked.png) no-repeat center / 100% 100%;
      }
      p{
        /*color: #136dc5;*/
        color:#1d6db4;
      }
    }
   /* .menu_item:nth-child(1){
      margin-left: 11px;
    }
    .menu_item:nth-child(2){
      margin-left: 54px;
    }
    .menu_item:nth-child(3){
      margin-left: 57px;
    }*/
  }
</style>
