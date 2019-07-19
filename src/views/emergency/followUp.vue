<template>
  <div class="emergencyfollowup">
    <mt-header fixed title="处置跟踪">
      <router-link to="/emergency" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <div class="desk_1">
        <mt-cell title="警情描述" ></mt-cell>
        <mt-cell title="类型" value="打架斗殴"></mt-cell>
        <mt-cell title="地点" value="五监区宿舍楼"></mt-cell>
        <mt-cell title="上报时间" value="2019-7-19 16:23:28"></mt-cell>
        <mt-cell title="上报民警" value="张安"></mt-cell>
        <mt-cell title="描述" value="张三李四打架斗殴"></mt-cell>
      </div>
      <div class="desk_2">
        <mt-cell title="事件列表" is-link value="添加" @click.native="toPath('/emergencynew')"></mt-cell>
        <div class="list">
          <mt-cell title="请附近民警协助" label="事件时间：2019-09-12 9:31" value="指挥中心"></mt-cell>
          <mt-cell title="以达现场，局面情况已控制" label="事件时间：2019-09-12 9:31" value="王一"></mt-cell>
          <mt-cell title="以达现场，局面情况已控制" label="事件时间：2019-09-12 9:31" value="王二"></mt-cell>
          <mt-cell title="以达现场，局面情况已控制" label="事件时间：2019-09-12 9:31" value="王二"></mt-cell>
          <mt-cell title="以达现场，局面情况已控制" label="事件时间：2019-09-12 9:31" value="王二"></mt-cell>
          <mt-cell title="以达现场，局面情况已控制" label="事件时间：2019-09-12 9:31" value="王二"></mt-cell>
          <mt-cell title="以达现场，局面情况已控制" label="事件时间：2019-09-12 9:31" value="王二"></mt-cell>
          <mt-cell title="以达现场，局面情况已控制" label="事件时间：2019-09-12 9:31" value="王二"></mt-cell>
          <mt-cell title="罪犯已关禁闭" label="事件时间：2019-09-12 9:31" value="王二"></mt-cell>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

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
  .emergencyfollowup {
    background: #f0f0f4;
    min-height: 100vh;
    .content {
      .mint-search{
        height: auto;
      }
      .mint-field{
        .mint-field-core{
          text-align: left;
        }
      }
      .desk_1{
        width: 96%;
        margin:20px 0 20px  2%;
        border-radius: 15px;/*no*/
        overflow: hidden;
        .mint-cell{
          min-height: 42px;/*no*/
        }
      }
      .desk_2{
        width: 96%;
        margin:20px 0 20px  2%;
        border-radius: 15px;/*no*/
        overflow: hidden;
        .list{
          overflow-y: scroll;
          height: 600px;

        }
      }
      position: relative;
    }
  }
</style>
