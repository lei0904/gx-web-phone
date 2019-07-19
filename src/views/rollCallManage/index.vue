<template>
  <div class="rollCallManage">
    <mt-header fixed title="点名管理">
      <router-link to="/bussiness" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <mt-cell title="近一个月点名数据" is-link value="查询历史台账数据" @click.native="toPath('/graphicsummary')"></mt-cell>
      <div id="charts">
      </div>
      <div class="chartsTitle">
        <p>604次</p>
        <p>点名总数</p>
      </div>
      <mt-cell class="secondTitle" title="今日点名数据" is-link value="查询历史数据" @click.native="toPath('/datasummary')"></mt-cell>
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
      <mt-button class="normal-button" size="large" type="primary" @click="toPath('/newrollcall')">添加</mt-button>
    </div>
  </div>
</template>

<script>
  import echarts  from 'echarts'
  export default {
    data() {
      return {};
    },
    methods: {
      drawPieCharts(val){
        let data = val;
        let summary = 0;
        for (let i = 0; i < data.length; i++) {
          summary = summary + data[i].value
        }
        let myChart = echarts.init(document.getElementById('charts'));
        let _this = this;
        myChart.setOption({
          backgroundColor: '#fff',
          tooltip: {
            show: true,
            trigger: 'item',
            formatter: "{b}: {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            right: '10%',
            top: '10%',
            itemGap: 30,
            data: ['晨起点名', '就寝点名', '半小时点名', '区域点名']
          },
          series: [{
            type: 'pie',
            selectedMode: 'single',
            radius: ['38%', '88%'],
            center: ['30%', '50%'],
            color: ['#86D560', '#59ADF3', '#FF999A', '#FFCC67'],
            label: {
              normal: {
                position: 'inner',
                formatter: '{d}%',

                textStyle: {
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: 12
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: data
          }]
        })
      },
      toPath(val){
          this.$router.push(val)
      }
    },
    mounted(){
      let data = [{
        value: 100,
        name: '晨起点名'
      }, {
        value: 100,
        name: '就寝点名'
      }, {
        value: 251,
        name: '半小时点名'
      }, {
        value: 253,
        name: '区域点名'
      }];
      this.drawPieCharts(data)
    }

  }

</script>

<style lang="scss">
  .rollCallManage {
    .content {
      position: relative;
      .secondTitle {
        margin-top: 5px; /*no*/
      }
      #charts {
        width: 100%;
        height: 400px;
        margin-top: 1px; /*no*/
      }
      .chartsTitle {
        position: absolute;
        left: 24%;
        top: 360px;
        text-align: center;
        p:first-child {
          font-size: 16px; /*no*/
          color: #434343;
          font-weight: bold;
          margin-bottom: 15px;
        }
      }
      .rollCallList {
        height: 500px;
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
      .normal-button {
        width: 90%;
        margin-left: 5%;
        margin-top: 35px;
      }
    }
  }
</style>
