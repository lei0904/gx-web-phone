<template>
  <div class="supervise">
    <mt-header fixed title="督办">
      <router-link to="/superviseIndex" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <div class="tips">
        <p class="tips-item">
          重点工作
        </p>
        <p class="tips-item">
          重大事项
        </p>
        <p class="tips-item">
          党内公示
        </p>
        <p class="tips-item">
          领导指示
        </p>
        <p class="tips-item">
          工作报告
        </p>
      </div>
      <div class="rollCallList">
        <div class="item">
          <div class="title"><i class="type_1"></i>关于垃圾回收处理督办事项<b>待开始</b></div>
          <mt-cell title="发布人" value="张中"></mt-cell>
          <mt-cell title="发布时间" value="2019-7-18 15:58:51"></mt-cell>
          <div class="button" @click="toPath('/superviseDetail')">查看详情</div>
        </div>
        <div class="item">
          <div class="title"><i class="type_1"></i>关于垃圾回收处理督办事项<b>待开始</b></div>
          <mt-cell title="发布人" value="张中"></mt-cell>
          <mt-cell title="发布时间" value="2019-7-18 15:58:51"></mt-cell>
          <div class="button" @click="toPath('/superviseDetail')">查看详情</div>
        </div>
        <div class="item">
          <div class="title"><i class="type_1"></i>关于垃圾回收处理督办事项<b>待开始</b></div>
          <mt-cell title="发布人" value="张中"></mt-cell>
          <mt-cell title="发布时间" value="2019-7-18 15:58:51"></mt-cell>
          <div class="button" @click="toPath('/superviseDetail')">查看详情</div>
        </div>
        <div class="item">
          <div class="title"><i class="type_1"></i>关于垃圾回收处理督办事项<b>待开始</b></div>
          <mt-cell title="发布人" value="张中"></mt-cell>
          <mt-cell title="发布时间" value="2019-7-18 15:58:51"></mt-cell>
          <div class="button" @click="toPath('/superviseDetail')">查看详情</div>
        </div>
        <div class="item">
          <div class="title"><i class="type_1"></i>关于垃圾回收处理督办事项<b>待开始</b></div>
          <mt-cell title="发布人" value="张中"></mt-cell>
          <mt-cell title="发布时间" value="2019-7-18 15:58:51"></mt-cell>
          <div class="button" @click="toPath('/superviseDetail')">查看详情</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
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
  .supervise {
    .content {
      position: relative;
      .secondTitle {
        margin-top: 5px; /*no*/
      }
      .tips{
        display: flex;
        flex-wrap: nowrap;
        overflow-x: scroll;
        margin: 20px;
        .tips-item{
          width: 120px;
          padding: 10px 10px;
          text-align: center;
          margin-right: 10px;
          color: #000;
          background: #e9e4d4;
        }
        .tips-item:active{
          background-color: rgba(0,0,0,.11);
        }
      }

      .rollCallList {
        height: 1140px;
        overflow-y: scroll;
        .item {
          background: #fff;
          width: 90%;
          margin-left: 5%;
          border-radius: 10px; /*no*/
          border: 1px solid #494a41; /*no*/
          margin-top: 30px;
          overflow: hidden;
          .title {
            height: 90px;
            line-height: 90px;
            font-size: 14px; /*no*/
            text-indent: 10px; /*no*/
            position: relative;
            i {
              display: inline-block;
              width: 60px;
              height: 60px;
              vertical-align: middle;
              margin-right: 10px;
            }
            .type_1 {
              background: url(../../../static/img/ducha.png) no-repeat;
              background-size: 60px 60px;
            }
            .type_2 {
              background: url(../../../static/img/gongwen.png) no-repeat;
              background-size: 60px 60px;
            }
            b{
              min-width: 100px;
              height: 60px;
              line-height: 60px;
              color: #cd5e3c;
              display: inline-block;
              position: absolute;
              right:30px;
              top: 50%;
              margin-top: -30px;
              text-align: center;
              font-weight: normal;

            }
          }
          .button {
            text-align: center;
            height: 80px;
            line-height: 80px;
            padding: 0 10px; /*no*/
            border-top: 1px solid #ccc; /*no*/
            font-size: 14px; /*no*/
          }
          .mint-cell {
            min-height: 30px; /*no*/
            .mint-cell-text {
              font-size: 12px; /*no*/
            }
            .mint-cell-value {
              font-size: 12px; /*no*/
            }

          }

        }
      }
    }
  }
</style>
