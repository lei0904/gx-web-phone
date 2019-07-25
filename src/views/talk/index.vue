<template>
  <div id="talkManage">
    <mt-header fixed title="个别谈话">
      <router-link to="/bussiness" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <mt-search v-model="value"></mt-search>
      <div class="searchdiv clearfloat">
          <DatePicker type="month" placeholder="Select month" style="width: 200px" value="2019-07" class="searchprop"></DatePicker>
          <div class="searchprop out">
            <div class="in">
              <label class="item">重点</label>
              <i-switch class="item" style="margin-left: 10px"/>
            </div>
          </div>
      </div>
      <div class="list">
        <div class="item" @click="$router.push('/talkRecord')">
          <div class="title"><i></i>重点对象</div>
          <mt-cell title="谈话对象" value="张三"></mt-cell>
          <mt-cell title="谈话民警" value="张中"></mt-cell>
          <mt-cell title="谈话时间" value="2019-7-17"></mt-cell>
          <mt-cell title="已谈" value="2"></mt-cell>
          <mt-cell title="待谈" value="1"></mt-cell>
          <div class="button">查看详情</div>
        </div>
        <div class="item">
          <div class="title"><i></i>重点对象</div>
          <mt-cell title="谈话对象" value="张三"></mt-cell>
          <mt-cell title="谈话民警" value="张中"></mt-cell>
          <mt-cell title="谈话时间" value="2019-7-17"></mt-cell>
          <mt-cell title="已谈" value="2"></mt-cell>
          <mt-cell title="待谈" value="1"></mt-cell>
          <div class="button">查看详情</div>
        </div>
        <div class="item">
          <div class="title"><i></i>重点对象</div>
          <mt-cell title="谈话对象" value="张三"></mt-cell>
          <mt-cell title="谈话民警" value="张中"></mt-cell>
          <mt-cell title="谈话时间" value="2019-7-17"></mt-cell>
          <mt-cell title="已谈" value="2"></mt-cell>
          <mt-cell title="待谈" value="1"></mt-cell>
          <div class="button">查看详情</div>
        </div>
        <div class="item">
          <div class="title"><i></i>重点对象</div>
          <mt-cell title="谈话对象" value="张三"></mt-cell>
          <mt-cell title="谈话民警" value="张中"></mt-cell>
          <mt-cell title="谈话时间" value="2019-7-17"></mt-cell>
          <mt-cell title="已谈" value="2"></mt-cell>
          <mt-cell title="待谈" value="1"></mt-cell>
          <div class="button">查看详情</div>
        </div>
        <div class="item">
          <div class="title"><i></i>重点对象</div>
          <mt-cell title="谈话对象" value="张三"></mt-cell>
          <mt-cell title="谈话民警" value="张中"></mt-cell>
          <mt-cell title="谈话时间" value="2019-7-17"></mt-cell>
          <mt-cell title="已谈" value="2"></mt-cell>
          <mt-cell title="待谈" value="1"></mt-cell>
          <div class="button">查看详情</div>
        </div>
      </div>
      <mt-button class="normal-button" size="large" type="primary" @click="newClothing()">新建</mt-button>
    </div>
  </div>
</template>

<script>
  import {DatePicker,Switch} from 'iview'
  import  'iview/dist/styles/iview.css'
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
          this.$router.push('/newTalk')
      }
    },
    components:{
      DatePicker,
      "i-switch":Switch
    }
  }

</script>

<style lang="scss">
  #talkManage{
    background: #f0f0f4;
    min-height: 100vh;
    .content{
      .mint-search{
        height: auto;
      }
      .searchdiv{
        margin-top: 5px;
        width: 90%;
        margin-left: 5%;
        display: -webkit-box;
        .searchprop{
          float: left;
        }
        .out{
          position: relative;
          margin-left: 20px;
          .in{
            display: block;
            top: 50%;
            width: 300px;
            position: absolute;
            transform: translateY(-50%);
            .item{
              float: left;
            }

          }
        }
      }

      .clearfloat:after{
        display:block;
        clear:both;
        content:"";
        visibility:hidden;
        height:0
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
