<template>
  <div id="clothingManage">
    <mt-header fixed title="被服发放">
      <router-link to="/bussiness" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right" @click.native="setting()"></mt-button>
    </mt-header>
    <div class="content">
      <mt-search v-model="value"></mt-search>
      <div class="list">
        <div class="item">
          <div class="title"><i></i>夏季外衣裤（仓库1）</div>
          <mt-cell title="发放犯人" value="张三"></mt-cell>
          <mt-cell title="责任民警" value="张中"></mt-cell>
          <mt-cell title="发放时间" value="2019-7-17"></mt-cell>
          <div class="button">查看详情</div>
        </div>
        <div class="item">
          <div class="title"><i></i>夏季外衣裤（仓库1）</div>
          <mt-cell title="发放犯人" value="张三"></mt-cell>
          <mt-cell title="责任民警" value="张中"></mt-cell>
          <mt-cell title="发放时间" value="2019-7-17"></mt-cell>
          <div class="button">查看详情</div>
        </div>
        <div class="item">
          <div class="title"><i></i>夏季外衣裤（仓库1）</div>
          <mt-cell title="发放犯人" value="张三"></mt-cell>
          <mt-cell title="责任民警" value="张中"></mt-cell>
          <mt-cell title="发放时间" value="2019-7-17"></mt-cell>
          <div class="button">查看详情</div>
        </div>
        <div class="item">
          <div class="title"><i></i>夏季外衣裤（仓库1）</div>
          <mt-cell title="发放犯人" value="张三"></mt-cell>
          <mt-cell title="责任民警" value="张中"></mt-cell>
          <mt-cell title="发放时间" value="2019-7-17"></mt-cell>
          <div class="button">查看详情</div>
        </div>
        <div class="item">
          <div class="title"><i></i>夏季外衣裤（仓库1）</div>
          <mt-cell title="发放犯人" value="张三"></mt-cell>
          <mt-cell title="责任民警" value="张中"></mt-cell>
          <mt-cell title="发放时间" value="2019-7-17"></mt-cell>
          <div class="button">查看详情</div>
        </div>
      </div>
      <mt-button class="normal-button" size="large" type="primary" @click="newClothing()">添加</mt-button>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        value:''
      };
    },
    methods: {
      setting(){
        this.$router.push('/clothingsetting')
      },
      newClothing(){
          this.$router.push('/clothingnew')
      }
    }
  }

</script>

<style lang="scss">
  #clothingManage{
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
      .normal-button{
        width: 90%;
        margin-left: 5%;
        margin-top: 35px;
      }
    }
  }
</style>
