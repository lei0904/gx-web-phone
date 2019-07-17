<template>
<div id="bussiness">
  <mt-header fixed title="业务">
    <router-link to="/workbench" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
  </mt-header>
  <div class="content" :style="{height:contentH+'px'}">
    <div class="sudoku">
      <div class="item">
        <i class="icon-item item-1"></i>
        <div class="item-text">罪犯档案</div>
      </div>
      <div class="item" @click="$router.push('/videopatrol')">
        <i class="icon-item item-1"></i>
        <div class="item-text">视频巡查</div>
      </div>
      <div class="item">
        <i class="icon-item item-1"></i>
        <div class="item-text">应急处置</div>
      </div>
      <div class="item">
        <i class="icon-item item-1"></i>
        <div class="item-text">日常监管</div>
      </div>
      <div class="item">
        <i class="icon-item item-1"></i>
        <div class="item-text">个别谈话管理</div>
      </div>
      <div class="item">
        <i class="icon-item item-1"></i>
        <div class="item-text">工具收发管理</div>
      </div>
      <div class="item">
        <i class="icon-item item-1"></i>
        <div class="item-text">服药管理</div>
      </div>
      <div class="item">
        <i class="icon-item item-1"></i>
        <div class="item-text">点名管理</div>
      </div>
      <div class="item">
        <i class="icon-item item-1"></i>
        <div class="item-text">被服发放</div>
      </div>
      <div class="item">
        <i class="icon-item item-1"></i>
        <div class="item-text">蓝牙同步</div>
      </div>
    </div>
  </div>
  <v-menu :checked="2"></v-menu>
</div>
</template>

<script>
  import Menu from '../../components/menu/menu.vue'
  export default {
    name: "message.vue",
    components: {
      "v-menu": Menu
    },
    data(){
      return {
        contentH:0
      }
    },
    methods:{

    },
    created(){
      this.contentH = document.body.clientHeight - 120;
    }
  }
</script>


<style lang="scss">
.content{
  overflow: scroll;
  .sudoku{
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    .item{
      width: 220px;
      height: 220px;
      border-radius: 5px;
      margin-left:22.5px;
      margin-top: 22.5px;
      background-color:#eff0f5;
      text-align: center;
      font-size:14px;/*no*/
      position: relative;
      color: #153894;
      .icon-item{
        display: block;
        background: url("../../../static/img/menu_1_checked.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        width: 110px;
        height: 110px;
        margin-left :55px;
        margin-top: 40px;
        margin-bottom: 10px;
      }
    }
    .item:active{
      background-color:rgba(239,240,245,.5);
      color: rgba(21,56,148,.53)
    }
  }
}

</style>
