<template>
  <div id="talkRecord">
    <mt-header fixed title="谈话记录">
      <mt-button icon="back" @click="$router.back()" slot="left"></mt-button>
    </mt-header>
    <div class="content">
      <div class="list" :style="{height:listH+'px'}">
        <div class="item" @click="toDetail">
          <div class="title"><i></i>张三（重点罪犯）</div>
          <mt-cell title="责任民警" value="张中"></mt-cell>
          <mt-cell title="谈话地点" value="监舍"></mt-cell>
          <mt-cell title="发放时间" value="2019-7-20"></mt-cell>
          <div class="button">查看详情</div>
        </div>
        <div class="item" @click="toDetail">
          <div class="title"><i></i>张三（重点罪犯）</div>
          <mt-cell title="责任民警" value="张中"></mt-cell>
          <mt-cell title="谈话地点" value="监舍"></mt-cell>
          <mt-cell title="发放时间" value="2019-7-17"></mt-cell>
          <div class="button">查看详情</div>
        </div>
        <div class="item" @click="toDetail">
          <div class="title"><i></i>张三（重点罪犯）</div>
          <mt-cell title="责任民警" value="张中"></mt-cell>
          <mt-cell title="谈话地点" value="监舍"></mt-cell>
          <mt-cell title="发放时间" value="2019-7-17"></mt-cell>
          <div class="button">查看详情</div>
        </div>
        <div class="item" @click="toDetail">
          <div class="title"><i></i>张三（重点罪犯）</div>
          <mt-cell title="责任民警" value="张中"></mt-cell>
          <mt-cell title="谈话地点" value="监舍"></mt-cell>
          <mt-cell title="发放时间" value="2019-7-17"></mt-cell>
          <div class="button">查看详情</div>
        </div>
        <div class="item" @click="toDetail">
          <div class="title"><i></i>张三（重点罪犯）</div>
          <mt-cell title="责任民警" value="张中"></mt-cell>
          <mt-cell title="谈话地点" value="监舍"></mt-cell>
          <mt-cell title="发放时间" value="2019-7-17"></mt-cell>
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
        listH:0
      };
    },
    methods: {
      toDetail(){
        this.$router.push({path:'/newTalk',query:{detail:true,consignee:'张三',warehouse:'监舍'}})
      }
    },
    created() {
      this.listH = document.body.clientHeight - 60
    }
  }

</script>

<style lang="scss">
  #talkRecord{
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
              background: url(../../../static/img/icon_clothing.png) no-repeat;
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
