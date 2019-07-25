<template>
  <div id="appcenter" :style="{height:contentHeight+'px',background:`url('../../../static/img/appcenter-background.png')`,'background-size':'100%'}">
    <div class="content" >
      <mt-header fixed title="应用中心">
      </mt-header>
      <h3 class="apptitle">移动办公</h3>
      <div class="sudoku">
        <div class="item">
          <i class="icon-item item-1"></i>
          <div class="item-text">移动政务</div>
        </div>
        <div class="item">
          <i class="icon-item item-1"></i>
          <div class="item-text">移动执法</div>
        </div>
        <div class="item">
          <i class="icon-item item-1"></i>
          <div class="item-text">移动OA</div>
        </div>
      </div>
      <h3 class="apptitle">安防监控</h3>
      <div class="sudoku">
        <div class="item">
          <i class="icon-item item-1"></i>
          <div class="item-text">视频监控</div>
        </div>
        <div class="item">
          <i class="icon-item item-1"></i>
          <div class="item-text">语音监控</div>
        </div>
      </div>

      <h3 class="apptitle">党员生活</h3>
      <div class="sudoku">
        <div class="item">
          <i class="icon-item item-1"></i>
          <div class="item-text">移动党建</div>
        </div>
        <div class="item">
          <i class="icon-item item-1"></i>
          <div class="item-text">党员学习</div>
        </div>
        <div class="item">
          <i class="icon-item item-1"></i>
          <div class="item-text">党员缴费</div>
        </div>
        <div class="item">
          <i class="icon-item item-1"></i>
          <div class="item-text">思想汇报</div>
        </div>
        <div class="item">
          <i class="icon-item item-1"></i>
          <div class="item-text">我的组织</div>
        </div>
        <div class="item">
          <i class="icon-item item-1"></i>
          <div class="item-text">我的组织</div>
        </div>
      </div>

    </div>
    <v-appmenu :checked="2"></v-appmenu>
  </div>
</template>

<script>
  import Menu from '../../components/menu/appcentermenu'
  export default {
    name: "message.vue",
    components: {
      "v-appmenu": Menu
    },
    data(){
      return {
        contentHeight:0
      }
    },
    methods:{
      toPath(val){
        this.$router.push(val)
      }
    },
    created() {
      this.contentHeight = document.body.clientHeight - 45
    }
  }
</script>


<style lang="scss">
  #appcenter{
    .content{
      overflow: scroll;
      .apptitle{
        margin-top: 20px;
        margin-left: 20px;
        color:#fff;
      }
      .sudoku{
        display: flex;
        display: -webkit-flex;
        flex-wrap: wrap;
        justify-content: left;
        margin-top:0;
        .item{
          width: 120px;
          height: 120px;
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
            background-image: url("../../../static/img/menu_1_checked.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            background-position: center center;
            width: 60px;
            height: 60px;
            margin:20px  auto  0 auto;
          }
          .item-text{
            font-size: 12px;/*no*/
            font-weight: 200;
          }
        }
      }
    }
  }

</style>
