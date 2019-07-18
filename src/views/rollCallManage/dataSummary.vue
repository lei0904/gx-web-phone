<template>
  <div class="dataSummary">
    <mt-header fixed title="点名数据查询">
      <router-link to="/rollcallmanage" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <mt-field label="关键字" placeholder="请输入关键字" v-model="keyword"></mt-field>

      <mt-cell  title="点名时间" :value="formatTime" is-link @click.native="open('picker1')"></mt-cell>
      <mt-datetime-picker
        ref="picker1"
        v-model="value"
        :closeOnClickModal="false"
        @confirm="handleChange">
      </mt-datetime-picker>

      <div class="rollCallList">
        <div class="item">
          <div class="title"><i class="type_1"></i>晨起点名</div>
          <mt-cell title="点名人数" value="30"></mt-cell>
          <mt-cell title="责任民警" value="张中"></mt-cell>
          <mt-cell title="点名时间" value="2019-7-18 15:58:51"></mt-cell>
          <div class="button">查看详情</div>
        </div>
        <div class="item">
          <div class="title"><i class="type_2"></i>半小时点名</div>
          <mt-cell title="点名人数" value="30"></mt-cell>
          <mt-cell title="责任民警" value="张中"></mt-cell>
          <mt-cell title="点名时间" value="2019-7-18 15:58:51"></mt-cell>
          <div class="button">查看详情</div>
        </div>
        <div class="item">
          <div class="title"><i class="type_2"></i>半小时点名</div>
          <mt-cell title="点名人数" value="30"></mt-cell>
          <mt-cell title="责任民警" value="张中"></mt-cell>
          <mt-cell title="点名时间" value="2019-7-18 15:58:51"></mt-cell>
          <div class="button">查看详情</div>
        </div>
        <div class="item">
          <div class="title"><i class="type_2"></i>半小时点名</div>
          <mt-cell title="点名人数" value="30"></mt-cell>
          <mt-cell title="责任民警" value="张中"></mt-cell>
          <mt-cell title="点名时间" value="2019-7-18 15:58:51"></mt-cell>
          <div class="button">查看详情</div>
        </div>
        <div class="item">
          <div class="title"><i class="type_2"></i>半小时点名</div>
          <mt-cell title="点名人数" value="30"></mt-cell>
          <mt-cell title="责任民警" value="张中"></mt-cell>
          <mt-cell title="点名时间" value="2019-7-18 15:58:51"></mt-cell>
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
        formatTime:'',
        keyword:''
      };
    },
    methods: {
      open(picker) {
        this.$refs[picker].open();
      },
      handleChange(value) {
        this.formatTime = this.$moment(value).format('YYYY-MM-DD HH:mm');
      }
    },
    mounted(){

    }

  }

</script>

<style lang="scss">
  .dataSummary {
    .content {
      position: relative;
      .rollCallList {
        height: 1030px;
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
            }
            .type_1 {
              background: url(../../../static/img/rollCallType_1.png) no-repeat;
              background-size: 60px 60px;
            }
            .type_2 {
              background: url(../../../static/img/rollCallType_2.png) no-repeat;
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
    }
  }
</style>
