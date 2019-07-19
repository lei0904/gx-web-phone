<template>
  <div  class="appcenter-menu" ref="menu">
      <div class="menu_content">
        <div class="item" :class="checked ==1 ? 'checked' : ''" @click="toPath('/myapp')">
          <i class="menu-icon menu_1"></i>
          <p>我的应用</p>
        </div>
        <div class="item" :class="checked ==2 ? 'checked' : ''" @click="toPath('/appcenter')">
          <i class="menu-icon menu_2"></i>
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
  .appcenter-menu {
    font-size: 12px; /*no*/
    position: fixed;
    width: 750px;
    height: 120px;
    bottom: 0;
    left: 0;
    background: #fff;
    -moz-box-shadow: 0 5px 19px #B0B0B0;
    -webkit-box-shadow: 0 5px 19px #B0B0B0;
    box-shadow: 0 5px 19px #B0B0B0;
    .menu_content{
      display: flex;
      .item{
        flex: 1;
        align-items: center;
        text-align: center;
        height: 60px;
        padding:20px 30px 0;
        .menu-icon{
          width: 50px;
          height: 50px;
          margin: auto;
          display: block;
          background-position: center center;
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }
        .menu_1{
          background-image: url(../../../static/img/icon-menu_1.png);
        }
        .menu_2{
          background-image: url(../../../static/img/personalcenter.png) ;
        }
        p{
          padding-top: 10px;
        }
      }
      .checked{
        .menu_1{
          background-image: url(../../../static/img/appcenter_checked.png);
        }
        .menu_2{
          background-image: url(../../../static/img/personalcenter_checked.png);
        }
        p{
          color: #136dc5;
        }
      }
    }
  }
</style>
