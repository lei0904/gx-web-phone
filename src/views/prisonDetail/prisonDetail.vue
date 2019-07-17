<template>
    <div class="prisonDetail">
      <mt-header fixed title="监区活动登记">
        <router-link to="/prison" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="content" :style="{height:contentH+'px'}">
        <div @click="openPicker">
          <mt-cell title="活动时间"  >{{activityTime}}</mt-cell>
        </div>
        <mt-cell title="活动地点" value="监舍"></mt-cell>
        <mt-cell title="活动类型" value="心理互助活动"></mt-cell>
        <div class="mt10">
          <mt-cell title="选择犯人">
            <img src="../../../static/img/icon-add.png" height="32px" width="32px">
          </mt-cell>
          <div class="criminal">
            <div class="item">
              <div class="name">王毅</div>
              <div class="criminal-no">3400010001010100101010</div>
              <i class="icon-delete"></i>
            </div>
            <div class="item">
              <div class="name">王毅</div>
              <div class="criminal-no">3400010001010100101010</div>
              <i class="icon-delete"></i>
            </div>
            <div class="item">
              <div class="name">王毅</div>
              <div class="criminal-no">3400010001010100101010</div>
              <i class="icon-delete"></i>
            </div>
            <div class="item">
              <div class="name">王毅</div>
              <div class="criminal-no">3400010001010100101010</div>
              <i class="icon-delete"></i>
            </div>
          </div>
        </div>
        <div class="mt10">
          <mt-cell title="责任民警" value="赵立虎"></mt-cell>
          <mt-field label="活动内容" placeholder="活动内容" type="textarea" rows="4" ></mt-field>
          <mt-field label="备注" placeholder="备注" type="textarea" rows="4" ></mt-field>
        </div>
        <div class="sub-btn">
          <mt-button type="primary"  size="large">提交</mt-button>
        </div>
      </div>
      <mt-datetime-picker
        ref="picker"
        type="datetime"
        @confirm="activityFun"
        v-model="pickerValue">
      </mt-datetime-picker>
    </div>
</template>

<script>
  import Moment from 'moment'
    export default {
        data() {
            return {
              contentH:0,
              pickerValue:Moment().format('YYYY-MM-DD hh:mm'),
              activityTime:Moment().format('YYYY-MM-DD hh:mm'),
            }
        },
        methods: {
          openPicker() {
            this.$refs.picker.open();
          },
          activityFun(picker){
            console.log("----->",picker)
            this.activityTime=Moment(picker).format('YYYY-MM-DD hh:mm')
          }
        },
      created(){
          this.contentH = document.body.clientHeight - 45;
      }
    }
</script>

<style lang="scss">
      .prisonDetail{
        .content{
          overflow: scroll;

          .mt10{
            margin-top: 10px;
          }
          .sub-btn{
            margin: 30px 80px;
          }
          .criminal{
            background: #fff;
            padding: 20px;
            font-size: 14px;/*no*/
            border-top:1px solid #d9d9d9;/*no*/
            .item{
              display: flex;
              padding: 10px 0;
              .name,.criminal-no{
                flex: 1;
              }
              .icon-delete{
                display: block;
                width: 64px;
                height: 32px;
                margin-left: 20px;
                background: url("../../../static/img/icon-delete.png");
                background-size: 100% 100%;
              }
            }
          }
        }
      }
</style>   
