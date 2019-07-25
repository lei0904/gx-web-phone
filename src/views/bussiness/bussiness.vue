<template>
  <div id="bussiness">
    <mt-header fixed title="业务">
      <router-link to="/workbench" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content" >
      <div class="sudoku">
        <router-link :to="'/criminalRecord'" class="item">
          <i class="icon-item item-1"></i>
          <div class="item-text">罪犯档案</div>
        </router-link>
        <router-link :to="'/videopatrol'" class="item">
          <i class="icon-item item-2"></i>
          <div class="item-text">视频巡查</div>
        </router-link>

        <div class="item">
          <i class="icon-item item-3" @click="toPath('/emergency')"></i>
          <div class="item-text">应急处置</div>
        </div>

        <router-link :to="'/dailySupervision'" class="item">
          <i class="icon-item item-4"></i>
          <div class="item-text">日常监管</div>
        </router-link>

        <router-link :to="'/talkManage'" class="item">
          <i class="icon-item item-5"></i>
          <div class="item-text">个别谈话管理</div>
        </router-link>
        <div class="item" @click="toPath('/toolsManage')">
          <i class="icon-item item-1"></i>
          <div class="item-text">工具收发管理</div>
        </div>
        <div class="item" @click="toPath('/medicinemanage')">
          <i class="icon-item item-7"></i>
          <div class="item-text">服药管理</div>
        </div>
        <div class="item" @click="toPath('/rollcallmanage')">
          <i class="icon-item item-8"></i>
          <div class="item-text">点名管理</div>
        </div>
        <div class="item" @click="toPath('/clothingmanage')">
          <i class="icon-item item-9"></i>
          <div class="item-text">被服发放</div>
        </div>
        <div class="item" @click="toPath('/bluetoothsynch')">
          <i class="icon-item item-10"></i>
          <div class="item-text">蓝牙同步</div>
        </div>
      </div>
    </div>
    <v-menu :checked="2"></v-menu>
  </div>
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
        contentH: 0
      }
    },
    methods: {
      toPath(val){
        this.$router.push(val)
      }
    },
    created(){
      this.contentH = document.body.clientHeight - 114;
    }
  }
</script>


<style lang="scss">
  #bussiness {
    .content {
      background: #1d6db4;
      overflow: scroll;
      .sudoku {
        display: flex;
        display: -webkit-flex;
        flex-wrap: wrap;
        justify-content: left;
        align-items: center;
        border-top-right-radius: 25px;
        border-top-left-radius: 25px;
        background-color: #fff;
        margin-top: 50px;
        overflow: scroll;
        .item {
          width: 220px;
          height: 200px;
          border-radius: 5px;
          margin-left: 22.5px;
          margin-top: 22.5px;
          background-color: #eff0f5;
          text-align: center;
          font-size: 14px; /*no*/
          position: relative;
          color: #153894;
          .icon-item {
            display: block;
            width: 100px;
            height: 100px;
            margin-left: 55px;
            margin-top: 20px;
            margin-bottom: 10px;
            align-items: flex-start;
          }
          .item-1 {
            background: url("../../../static/img/bmenu_1_checked.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
          }
          .item-2 {
            background: url("../../../static/img/bmenu_2_checked.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
          }
          .item-3 {
            background: url("../../../static/img/bmenu_3_checked.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
          }
          .item-4 {
            background: url("../../../static/img/bmenu_4_checked.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
          }
          .item-5 {
            background: url("../../../static/img/bmenu_5_checked.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
          }
          .item-6 {
            background: url("../../../static/img/bmenu_6_checked.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
          }
          .item-7 {
            background: url("../../../static/img/bmenu_7_checked.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
          }
          .item-8 {
            background: url("../../../static/img/bmenu_8_checked.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
          }
          .item-9 {
            background: url("../../../static/img/bmenu_9_checked.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
          }
          .item-10 {
            background: url("../../../static/img/bmenu_10_checked.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
          }
        }
        .item:active {
          background-color: rgba(239, 240, 245, .5);
          color: rgba(21, 56, 148, .53)
        }
      }
    }
  }

</style>
