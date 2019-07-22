<template>
  <div id="missionManage">
    <mt-header fixed title="任务管理">
      <mt-button icon="back" @click="$router.back()" slot="left"></mt-button>
    </mt-header>
    <div class="content">
      <div class="list" :style="{height:listH+'px'}">
        <div class="item" @click="toDetail" v-for="(item,index) in list">
          <div class="title"><i></i>{{item.title}}</div>
          <mt-cell title="下达人" :value="item.reporter"></mt-cell>
          <mt-cell title="限定时间" :value="item.date"></mt-cell>
          <mt-cell title="任务状态" :value="item.status"></mt-cell>
          <div class="button">查看详情</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value:'',
        listH:0,
        list:[{title:'关于三课一课的思想汇报',reporter:'王一',date:'2019-07-15',status:'未开始'},
          {title:'大别山扶贫活动',reporter:'王一',date:'2019-06-15',status:'进行中'},
          {title:'大别山扶贫活动',reporter:'王一',date:'2019-05-15',status:'已完成'},
          {title:'大别山扶贫活动',reporter:'王一',date:'2019-04-15',status:'已完成'},
          {title:'大别山扶贫活动',reporter:'王一',date:'2019-03-15',status:'已完成'},]
      };
    },
    methods: {
      toDetail(){
        this.$router.push({path:'/missionManageDetail'})
      },
    },
    created() {
      this.listH = document.body.clientHeight - 60
    }
  }
</script>

<style lang="scss">
  #missionManage{
    background: #f0f0f4;
    min-height: 100vh;
    .content{
      .mint-search{
        height: auto;
      }
      .list{
        overflow-y: scroll;
        .item{
          background: #fff;
          width: 90%;
          margin-left: 5%;
          border-radius: 10px;/*no*/
          margin-top: 30px;
          overflow: hidden;
          .title{
            height:90px;
            line-height: 90px;
            font-size: 14px;/*no*/
            text-indent: 10px;/*no*/
            i{
              display: inline-block;
              width: 60px;
              height: 60px;
              vertical-align: middle;
              background: url(../../../static/img/zhengwu.png) no-repeat;
              background-size: 60px 60px;
              margin-right: 10px;
            }
          }
          .button{
            text-align: center;
            height: 80px;
            line-height: 80px;
            padding: 0 10px;/*no*/
            border-top: 1px solid #ccc;/*no*/
            font-size: 14px;/*no*/
          }
          .mint-cell{
            min-height: 30px;/*no*/
            .mint-cell-text{
              font-size: 12px;/*no*/
            }
            .mint-cell-value{
              font-size: 12px;/*no*/
            }

          }

        }
      }
    }
  }
</style>
