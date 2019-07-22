<template>
  <div id="ideaReport">
    <mt-header fixed title="思想汇报">
      <mt-button icon="back" slot="left" @click="$router.back()"></mt-button>
    </mt-header>
    <div class="content">
      <mt-search v-model="value"></mt-search>
      <div class="list">
        <div class="item" v-for="(item,list) in list">
          <div class="title"><i></i>{{item.title}}</div>
          <mt-cell title="汇报人" :value="item.reporter"></mt-cell>
          <mt-cell title="汇报时间" :value="item.date"></mt-cell>
          <div class="button">查看详情</div>
        </div>
      </div>
      <mt-button class="normal-button" size="large" type="primary" @click="newReport()">添加</mt-button>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        value:'',
        list:[{title:'习近平思想学习心得',reporter:'王一',date:'2019-07-15'},
              {title:'学习强国学习心得',reporter:'王一',date:'2019-06-15'},
              {title:'反黑学习心得',reporter:'王一',date:'2019-05-15'},
              {title:'习近平思想学习心得',reporter:'王一',date:'2019-04-15'},
              {title:'习近平思想学习心得',reporter:'王一',date:'2019-03-15'},]
      };
    },
    methods: {
      newReport(){
        this.$router.push('/ideaReportNew')
      }
    }
  }

</script>

<style lang="scss">
  #ideaReport{
    background: #f0f0f4;
    min-height: 100vh;
    .content{
      .mint-search{
        height: auto;
      }
      .list{
        height: 1000px;
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
      .normal-button{
        width: 90%;
        margin-left: 5%;
        margin-top: 35px;
      }
    }
  }
</style>
