<template>
  <div class="menu clearfix" ref="menu">
      <div class="menu_content">
        <div class="appmenu_item" :class="checked ==1 ? 'checked' : ''" @click="toPath('/myapp')">
          <i class="menu_1"></i>
          <p>我的应用</p>
        </div>
        <div class="appmenu_item" :class="checked ==2 ? 'checked' : ''" @click="toPath('/appcenter')">
          <i class="menu_2"></i>
          <p>应用中心</p>
        </div>
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
        contentHeight:0
      };
    },
    methods: {
      toPath:function (val) {
        this.$router.push(val)
      }
    }
  };
</script>
<style lang="scss" scoped>
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
    .menu_content{
      left: 25%;
      width: 50%;
      height: 100%;
      position: absolute;
      .appmenu_item {
        float: left;
        width: 50%;
        margin-top: 20px;
        position: relative;
        height: 100%;
        p{
          margin-top: 8px;
          color: #43424a;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 50%;
        }
        i{
          display: inline-block;
          width: 48px;
          height: 48px;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
        .menu_1{
          background: url(../../../static/img/icon-menu_1.png) no-repeat center / 100% 100%;
        }
        .menu_2{
          background: url(../../../static/img/personalcenter.png) no-repeat center / 100% 100%;
        }
      }
      .checked{
        .menu_1{
          background: url(../../../static/img/appcenter_checked.png) no-repeat center / 100% 100%;
        }
        .menu_2{
          background: url(../../../static/img/personalcenter_checked.png) no-repeat center / 100% 100%;
        }
        p{
          color: #136dc5;
        }
      }
    }
  }
</style>
