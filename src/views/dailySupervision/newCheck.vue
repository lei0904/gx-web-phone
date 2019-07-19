<template>
  <div class="new-check">
    <mt-header fixed title="新建考评登记">
      <router-link to="/dailyCheck" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <div class="form">
        <mt-cell title="选择考核人"  :value="form.person" @click.native="openPerson" is-link></mt-cell>
        <mt-cell title="选择考核分类" :value="form.typeText" @click.native="openType"  is-link></mt-cell>
        <mt-cell title="选择考核规范" :value="form.norm" @click.native="openNorm" is-link></mt-cell>
        <mt-cell title="选择考核条款" :value="form.clause" @click.native="openClause"  is-link></mt-cell>
        <mt-cell title="考核时间"  :value="form.timeValue" @click.native="openTimePicker"  is-link></mt-cell>
        <mt-field label="考核内容"  placeholder="考核内容" type="textarea" rows="4" v-model="form.introduction"></mt-field>

        <mt-field label="加扣" placeholder="请输入加扣分值" type="number" v-model="form.add"></mt-field>
        <mt-field label="分值" placeholder="请输入分值" type="number" v-model="form.score"></mt-field>
        <mt-cell title="民警签字" value="已签字"  is-link></mt-cell>
      </div>
      <mt-button class="normal-button" size="large" type="primary" @click="subForm">提交申请</mt-button>
    </div>
    <v-picker
      :values="personArr"
      :showKey="'value'"
      ref="personPicker"
      @confirm="personChange"
    >
    </v-picker>
    <v-picker
      :values="typeArr"
      :showKey="'value'"
      ref="typePicker"
      @confirm="typeChange"
    >
    </v-picker>

    <v-picker
      :values="typeArr"
      :showKey="'value'"
      ref="typePicker"
      @confirm="typeChange"
    >
    </v-picker>

    <v-picker
      :values="normArr"
      :showKey="'value'"
      ref="normPicker"
      @confirm="normChange"
    >
    </v-picker>

    <v-picker
      :values="clauseArr"
      :showKey="'value'"
      ref="clausePicker"
      @confirm="clauseChange"
    >
    </v-picker>

    <mt-datetime-picker
      ref="timePicker"
      @confirm="timeChange"
      :startDate="nowDate">
    </mt-datetime-picker>
  </div>
</template>

<script>
  import dataPicker from '../../components/data-picker/data-picker.vue'
  import Moment from 'moment'
    export default {
      name: "newCheck",
      components:{
        'v-picker':dataPicker
      },
      data(){
          return {
            sheetVisible:false,
            nowDate: new Date(),
            form:{
              timeValue: '',
              introduction:'',
              add:'',
              score:'',
              person:'',
              personCode:'',
              typeText:'',
              typeCode:'',
              norm:'',
              clause:''
            },
            actions:[
              {
                name: '张三',
                id: 1,
                method: this.changeType
              },

              {
                name: '李四',
                id: 1,
                method: this.changeType
              },
              ],
            personArr:[
              {
               value:'张三',
               code:'0001'
              },
              {
                value:'李四',
                code:'0002'
              },
              {
                value:'王五',
                code:'0003'
              },
            ],
            typeArr:[
              {
                value:'教育改造',
                code:'1'
              },
              {
                value:'学习规范',
                code:'2'
              }
            ],
            normArr:[
              {
                value:'生活卫生规范',
                code:'3'
              },
              {
                value:'文明礼貌规范',
                code:'4'
              },
              {
                value:'劳动规范',
                code:'5'
              },
            ],
            clauseArr:[
              {
                value:'第一条第1款',
                code:'1'
              },
              {
                value:'第一条第2款',
                code:'1'
              },
              {
                value:'第一条第3款',
                code:'1'
              },
              {
                value:'第一条第4款',
                code:'1'
              },
              {
                value:'第一条第5款',
                code:'1'
              },


            ]

          }
      },
      methods:{
        changeType(o){
          console.log("o---->",o)
        },
        subForm(){
          let ths = this;
          ths.$mint.MessageBox.confirm("确认提交考评登记?",'提示').then(()=>{
            ths.$router.push({'path':'/dailyCheck'})
          })
        },
        openPerson(){
          this.$refs.personPicker.open();
        },
        openType(){
          this.$refs.typePicker.open();
        },
        typeChange(v){
          this.form.typeText = v.value;
          this.form.typeCode = v.code;

        },
        personChange(v){
          this.form.person = v.value;
          this.form.personCode = v.code
        },
        openTimePicker(){
          this.$refs.timePicker.open();
        },
        timeChange(value){
          this.form.timeValue = Moment(value).format('YYYY-MM-DD HH:mm');
          this.form.timeValues = Moment(value).format('YYYY-MM-DD HH:mm:ss')
        },
        openNorm(){
          this.$refs.normPicker.open();
        },
        normChange(v){
          this.form.norm = v.value;

        },
        openClause(){
          this.$refs.clausePicker.open();
        },
        clauseChange(v){
          this.form.clause = v.value;
        }


      },
      mounted(){

      }
    }
</script>

<style lang="scss">

  .new-check{
    .mint-actionsheet-list{
      text-align: center;
    }
    .normal-button {
      width: 90%;
      margin-left: 5%;
      margin-top: 35px;
    }
  }

</style>
