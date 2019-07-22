<template>
  <div class="superviseIndex">
    <mt-header fixed title="督查督办">
      <router-link to="/governmentIndex" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <mt-cell title="督办事项" label="项目数量：48" >
        <span >
          <div class="desc">
        <div>
          <span>重点工作:15</span>
          <span>重大事项:12</span>
        </div>
        <div>
          <span>领导指示:10</span>
          <span>领导指示:10</span>
        </div>
      </div>
        </span>
      </mt-cell>

      <div id="charts">
      </div>
      <mt-cell class="secondTitle" title="消息提醒"></mt-cell>
      <div class="rollCallList">
        <div class="item">
          <div class="title"><i class="type_1"></i>关于垃圾回收处理督办事项<b>督办</b></div>
          <mt-cell title="发布人" value="张中"></mt-cell>
          <mt-cell title="发布时间" value="2019-7-18 15:58:51"></mt-cell>
          <div class="button">查看详情</div>
        </div>
        <div class="item">
          <div class="title"><i class="type_2"></i>司法厅第212文<b>公文</b></div>
          <mt-cell title="发布人" value="张中"></mt-cell>
          <mt-cell title="发布时间" value="2019-7-18 15:58:51"></mt-cell>
          <div class="button">查看详情</div>
        </div>
        <div class="item">
          <div class="title"><i class="type_1"></i>关于垃圾回收处理督办事项<b>督办</b></div>
          <mt-cell title="发布人" value="张中"></mt-cell>
          <mt-cell title="发布时间" value="2019-7-18 15:58:51"></mt-cell>
          <div class="button">查看详情</div>
        </div>
        <div class="item">
          <div class="title"><i class="type_2"></i>司法厅第212文<b>公文</b></div>
          <mt-cell title="发布人" value="张中"></mt-cell>
          <mt-cell title="发布时间" value="2019-7-18 15:58:51"></mt-cell>
          <div class="button">查看详情</div>
        </div>
        <div class="item">
          <div class="title"><i class="type_1"></i>关于垃圾回收处理督办事项<b>督办</b></div>
          <mt-cell title="发布人" value="张中"></mt-cell>
          <mt-cell title="发布时间" value="2019-7-18 15:58:51"></mt-cell>
          <div class="button">查看详情</div>
        </div>
        <div class="item">
          <div class="title"><i class="type_2"></i>司法厅第212文<b>公文</b></div>
          <mt-cell title="发布人" value="张中"></mt-cell>
          <mt-cell title="发布时间" value="2019-7-18 15:58:51"></mt-cell>
          <div class="button">查看详情</div>
        </div>
        <div class="item">
          <div class="title"><i class="type_1"></i>关于垃圾回收处理督办事项<b>督办</b></div>
          <mt-cell title="发布人" value="张中"></mt-cell>
          <mt-cell title="发布时间" value="2019-7-18 15:58:51"></mt-cell>
          <div class="button">查看详情</div>
        </div>
        <div class="item">
          <div class="title"><i class="type_2"></i>司法厅第212文<b>公文</b></div>
          <mt-cell title="发布人" value="张中"></mt-cell>
          <mt-cell title="发布时间" value="2019-7-18 15:58:51"></mt-cell>
          <div class="button">查看详情</div>
        </div>
      </div>
      <mt-button class="normal-button" size="large" type="primary" @click="toPath('/supervise')">督办</mt-button>
      <mt-button class="normal-button" size="large" type="primary" @click="toPath('/officialDocument')">公文</mt-button>
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
        let myChart = echarts.init(document.getElementById('charts'));
        let _this = this;
        myChart.setOption({
          title : {
            text: '工作事项统计',
            x:'left',
            textStyle:{
              fontWeight:300,
              fontSize:14,
              color:'#000'
            }
          },
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'horizontal',
            bottom:'0%',
            itemGap:30,
            left: 'center',
            data: ['已完成','未完成']
          },
          series : [
            {
              name: '工作事项统计',
              type: 'pie',
              radius : '65%',
              center: ['50%', '50%'],
              label:{
                show:true,
                formatter:'{b}: {d}%'
              },
              data:[
                {value:28,name:'已完成'},
                {value:43,name:'未完成'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
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
  .superviseIndex {
    .content {
      position: relative;
      .desc{
       span{
         display: inline-block;
         margin-left: 20px;
         font-size: 12px;/*no*/
       }
        div:last-child{
          margin-top: 6px;/*no*/
        }
      }
      .secondTitle {
        margin-top: 5px; /*no*/
      }
      #charts {
        width: 100%;
        height: 400px;
        margin-top: 10px; /*no*/
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
              display: inline-block;
              position: absolute;
              right:30px;
              top: 50%;
              margin-top: -30px;
              text-align: center;
              font-weight: normal;
              color: #888;
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
        width: 40%;
        margin:35px 4% 0 5%;
        display: inline-block;
      }
    }
  }
</style>
