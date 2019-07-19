<template>
  <div id="myapp" :style="{height:contentHeight+'px',background:`url('../../../static/img/appcenter-background.png')`,'background-size':'100%'}">
    <div class="content">
      <div class="sudoku">
        <router-link :to="'/workbench'" class="item">
          <i class="icon-item item-1 zhifa"></i>
          <div class="item-text">移动执法</div>
        </router-link>

        <router-link :to="'/governmentIndex'" class="item">
          <i class="icon-item item-1 zhengwu"></i>
          <div class="item-text">移动政务</div>
        </router-link>
      </div>
    </div>
    <v-appmenu :checked="1"></v-appmenu>
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
  #myapp{
    .content{
      overflow: scroll;
      .sudoku{
        display: flex;
        display: -webkit-flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin-top: 200px;
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
            width: 110px;
            height: 110px;
            margin-left :55px;
            margin-top: 40px;
            margin-bottom: 10px;
          }
          .zhifa{
            background:url('../../../static/img/zhifa.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
          }
          .zhengwu{
            background:url('../../../static/img/zhengwu.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
          }
        }
        .item:active{
          background-color:rgba(239,240,245,.5);
          color: rgba(21,56,148,.53)
        }
      }
    }
  }

</style>
