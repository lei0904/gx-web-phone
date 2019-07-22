<template>
  <div class="superviseDetail">
    <mt-header fixed title="督办详情">
      <router-link to="/supervise" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <mt-cell title="督办标题" value="市直单位财务违规问题整改落实督办"></mt-cell>
      <mt-cell title="任务类型" value="重点工作"></mt-cell>
      <mt-cell title="任务来源">
        <span style="color: blue">关于财务违规问题整改自查</span>
      </mt-cell>
      <mt-cell title="拟文单位" value="财务科"></mt-cell>
      <mt-cell title="拟文人" value="张三"></mt-cell>
      <mt-cell title="拟文日期" value="2019-7-22"></mt-cell>
      <mt-cell title="单位领导" value="张三"></mt-cell>
      <mt-cell title="分管领导" value="张三"></mt-cell>
      <mt-cell title="处室领导" value="张三"></mt-cell>
      <div class="text">
        <div class="title">内容：</div>
        <p> 1.查和财政重点专项监督检查情况</p>
        <p> 2.成立21个检查组，对市直42家单位重点检查</p>
      </div>
      <mt-cell title="选择任务状态" is-link @click.native="sheetVisible = true"
               :value="status"></mt-cell>
      <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
      <mt-button class="normal-button" size="large" type="primary" >提交处理</mt-button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        sheetVisible:false,
        actions:[],
        status:''
      };
    },
    methods: {
      toPath(val){
        this.$router.push(val)
      },
      changeStatus(val){
          this.status = val.name
      }
    },
    mounted(){
      this.actions = [
        {
            name:'未开始',
            method: this.changeStatus
        },
        {
          name:'进行中',
          method: this.changeStatus
        },
        {
          name:'已结束',
          method: this.changeStatus
        }
      ]
    }

  }

</script>

<style lang="scss">
  .superviseDetail {
    .mint-actionsheet-listitem{
      text-align: center;
    }
    .content {
      position: relative;
      .text{
        padding:0 10px 10px;/*no*/
        font-size: 14px;/*no*/
        div {
          margin-top: 10px;
          margin-bottom: 20px;
        }
        p{
          margin: 10px 0;
        }
      }
    }
    .normal-button {
      width: 90%;
      margin-left: 5%;
      margin-top: 35px;
    }
  }
</style>
