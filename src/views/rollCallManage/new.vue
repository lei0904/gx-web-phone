<template>
    <div class="newRollCall">
      <mt-header fixed title="新建点名">
        <router-link to="/rollcallmanage" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="content">
        <mt-cell  title="点名类型" is-link @click.native="sheetVisible = true" :value="type"></mt-cell>
        <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
        <mt-cell  title="责任民警"  value="张三"></mt-cell>
        <mt-cell  title="点名时间" :value="formatValue" is-link @click.native="open('picker1')"></mt-cell>
        <mt-datetime-picker
          ref="picker1"
          v-model="value"
          :closeOnClickModal="false"
          @confirm="handleChange"
          :startDate = 'new Date()'>
        </mt-datetime-picker>
        <div class="ready">
          <mt-cell  title="已点人员"   is-link ></mt-cell>
          <div class="ready_list">
            <mt-cell  title="张三"   :value="345100034111098762" ></mt-cell>
            <mt-cell  title="张三"   :value="345100034111098762" ></mt-cell>
            <mt-cell  title="张三"   :value="345100034111098762" ></mt-cell>
            <mt-cell  title="张三"   :value="345100034111098762" ></mt-cell>
            <mt-cell  title="张三"   :value="345100034111098762" ></mt-cell>
            <mt-cell  title="张三"   :value="345100034111098762" ></mt-cell>
            <mt-cell  title="张三"   :value="345100034111098762" ></mt-cell>
            <mt-cell  title="张三"   :value="345100034111098762" ></mt-cell>
          </div>
        </div>
        <mt-button class="normal-button" size="large" type="primary" @click="newRollCallPage()">提交数据</mt-button>
      </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
              value:'',
              formatValue:'',
              sheetVisible:false,
              type:'',
              actions:[]
            };
        },
        methods: {
          open(picker) {
            this.$refs[picker].open();
          },
          handleChange(value) {
            this.formatValue = this.$moment(value).format('YYYY-MM-DD HH:mm');
          },
          changeType(val){
            this.type = val.name
          },
        },
      mounted(){
        this.actions = [
          {
            name: '就寝 ',
            method: this.changeType
          },
          {
            name: '半小时点名',
            method: this.changeType
          },

          {
            name: '就寝',
            method: this.changeType
          },
          {
            name: '区域',
            method: this.changeType
          }
        ];
      }
    }

</script>

<style lang="scss">
  .newRollCall{
    background: #f0f0f4;
    min-height: 100vh;
    .mint-actionsheet-listitem{
      text-align: center;
    }
    .content{
      .ready{
        margin-top: 60px;
        background: #fff;
        .ready_list{
          .mint-cell{
            min-height: 36px;/*no*/
          }
          .mint-cell-wrapper{
            font-size: 12px;/*no*/
            padding: 0 20px;/*no*/
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
</style>
