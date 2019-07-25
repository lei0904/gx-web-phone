<template>
  <div class="emergency">
    <mt-header fixed title="警情列表">
      <router-link to="/bussiness" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <mt-search v-model="keyword"></mt-search>
      <div class="recordList">
        <div class="item" >
          <div class="title"><i></i>打架斗殴</div>
          <mt-cell title="警情地点" value="五监区宿舍楼"></mt-cell>
          <mt-cell title="上报民警" value="王一"></mt-cell>
          <mt-cell title="上报时间" value="2019-7-19"></mt-cell>
          <div class="button" @click="receive">{{isReceive}}</div>
        </div>
        <div class="btn-content">
          <mt-button type="primary" class="normal-button"  @click.native="toPath('/emergencynew')">处置</mt-button>
          <mt-button type="primary" class="normal-button"  @click.native="toPath('/emergencyFollowUp')">回查</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        keyword:'',
        isReceive:'接收'
      };
    },
    methods: {
      toPath(val){
        this.$router.push(val)
      },
      receive(){
        this.isReceive ='已接受'
      }
    },
    mounted(){

    }

  }

</script>

<style lang="scss">
  .emergency {
    .content {
      .mint-search{
        height: auto;
      }
      .mint-field{
        .mint-field-core{
          text-align: left;
        }
      }
      position: relative;
      .recordList {
        height: 1130px;
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
            i {
              display: inline-block;
              width: 60px;
              height: 60px;
              vertical-align: middle;
              margin-right: 10px;
              background: url(../../../static/img/icon_emergency.png) no-repeat;
              background-size: 60px 60px;
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
      .normal-button {
        width: 90%;
        margin-left: 5%;
        margin-top: 35px;
      }
    }
  }
</style>
