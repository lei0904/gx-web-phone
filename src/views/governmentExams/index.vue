<template>
  <div id="exams">
    <div class="page-part">
      <mt-header fixed title="在线考试">
        <mt-button icon="back" slot="left" @click="$router.replace('/myapp')"></mt-button>
      </mt-header>
    </div>
    <div class="content">
        <div class="scroller-wrapper" :style="{height:listH+'px'}">
            <div class="exam-content">
              <mt-swipe class="question" :auto="0" :show-indicators="false" :continuous="false">
                <mt-swipe-item class="exam-item" :key="idx" v-for="(item,idx) in list" :style="{height:listH+'px'}">
                  <div>{{idx+1}}、{{item.question}}</div>
                  <div  v-for="itemAnswer in item.choice" class="item-answer">
                    <label :for="item.id">
                      <input type="radio" name="test" :id="item.id" :value="item.value"/><span>{{itemAnswer.label}}</span>
                    </label>
                  </div>

                  <div class="sub-btn" v-if="len == (idx+1)" :target="idx">
                    <mt-button class="normal-button" size="large" type="primary" @click.native="sub">确定</mt-button>
                  </div>
                </mt-swipe-item>
              </mt-swipe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import Menu from '../../components/menu/g-menu.vue'
  import {zwExamsList} from '../../service/index'
  export default {
    name: "governmentIndex",
    components: {
      "v-menu": Menu
    },
    data() {
      return {
        page: 0,
        rows: 5,
        list: [],
        listH:0,
        value:'',
        len:0,
        scrollerPosition: null
      }
    },

    mounted() {
      this.page = 1;
      let params = {
        'page': this.page,
        'rows': this.rows,
      }
      zwExamsList(params, false).then((rets)=>{
        console.log("rets---->",rets)
        this.list = rets.data;
        this.len = this.list.length;
        console.log('--->',this.len)
      })
      this.listH = document.body.clientHeight - 120;
    },
    methods: {
      sub(){
        let ths = this;
        ths.$mint.MessageBox.confirm('确定完成考试?','提示').then(()=>{
          ths.$router.push({path:'/governmentIndex'});
        })
      }
    }
  }
</script>

<style lang="scss">
  #exams{
    .content{
      .scroller-wrapper{
        padding-top: 0;
        font-size: 14px;/*no*/
        .exam-content{
          height: 100%;
          padding: 20px 40px;
          position: relative;
          .exam-item{
            height: 100%;
            line-height: 1;
          }
          .item-answer{
            margin:20px 0;
            span{
              padding-left: 20px;
            }
          }
          .sub-btn{
            position: absolute;
            bottom: 0;
            width: 100%;
          }
        }

      }
    }
  }

</style>
