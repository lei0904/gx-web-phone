<template>
  <div class="chat">
    <mt-header fixed title="聊天">
      <router-link to="/message" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
       <div class="chat-content" id="chatContent" ref="chatContent" :style="{height:chatH+'px'}">
         <div class="opposite ">
           <p class="avatar"></p>
           <div class="talk">
              <span>2222222</span>
              <p class="left"></p>
            </div>
         </div>
         <div class="opposite ">
           <p class="avatar"></p>
           <div class="talk">
             <span>2222222</span>
             <p class="left"></p>
           </div>
         </div>
         <div class="self">
           <div class="talk">
             <span>222222222</span>
             <p class="right"></p>
           </div>
           <p class="avatar"></p>
         </div>
         <div class="opposite ">
           <p class="avatar"></p>
           <div class="talk">
             <span>2222222</span>
             <p class="left"></p>
           </div>
         </div>
         <div class="self">
           <div class="talk">
             <span>222222222</span>
             <p class="right"></p>
           </div>
           <p class="avatar"></p>
         </div>

         <div class="self" v-for="item in list">
           <div class="talk">
             <span v-html="item.replace(/\#[\u4E00-\u9FA5]{1,3}\;/gi, emotion)"></span>
             <p class="right"></p>
           </div>
           <p class="avatar"></p>
         </div>
       </div>
        <div class="chat-modules">
          <div class="icon voice" @click="isVoice = true"></div>
          <mt-popup
            v-model="isVoice"
            position="center"
            class="voice-content"
          >
            <div class="icon-voice voice-dt"></div>
          </mt-popup>
          <div class="chat-text">
            <textarea v-model="chatText"></textarea>
          </div>
          <div class="icon face" @click="popupVisible = true"></div>
          <div class="icon add" v-if="!isSend"  @click="isAddVisible= true"></div>
          <div class="send" v-else="isSend" @click="send">发送</div>
        </div>
    </div>
    <mt-popup
      v-model="popupVisible"
      position="bottom" class="emotion-content">
      <emotion @emotion="handleEmotion" :height="200" :width="750" ></emotion>
    </mt-popup>
    <mt-popup v-model="isAddVisible"
              position="bottom"
              class="emotion-content" >
      <div class="add-content">
        <div class="item" @click="changeItem">
          <p class="icon icon-xc "></p>
          相册
        </div>
        <div class="item" @click="changeItem">
          <p class="icon icon-ps"></p>
          拍摄
        </div>
        <div class="item" @click="changeItem">
          <p class="icon icon-wz "></p>
          位置
        </div>
        <div class="item" @click="changeItem">
          <p class="icon icon-spth "></p>
          视频通话
        </div>
      </div>
    </mt-popup>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  import Emotion from '@/components/Emotion/index'
  export default {
    name: 'chat',
    components: {
      Emotion
    },
    watch:{
      chatText:function (o,n) {
        if(n.length>0){
          this.isSend= true
        }
      }
    },
    data() {
      return {
        isVoice:false,
        contentH:0,
        scrollH:0,
        chatH:0,
        popupVisible:false,
        chatText:'',
        isSend:false,
        isAddVisible:false,
        list:[],
        scrollHeight:0,
        searchBarFixed:true
      }
    },
    methods: {
      ...mapActions([
        'setNeedRefresh',
      ]),
      handleEmotion (i) {
        this.popupVisible =false
        this.chatText += i
      },
      // 将匹配结果替换表情图片
      emotion (res) {
        let word = res.replace(/\#|\;/gi,'')
        const list = ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷', '冷汗', '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘', '晕', '折磨', '衰', '骷髅', '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀', '西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀', '足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈', '磕头', '回头', '跳绳', '挥手', '激动', '街舞', '献吻', '左太极', '右太极']
        let index = list.indexOf(word)
        return `<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif" align="middle">`
      },
      changeItem(){
        this.isAddVisible=false;
      },
      handleScroll(){
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        let offsetTop = document.querySelector('#chatContent').offsetTop;
        if (scrollTop > offsetTop) {
          this.searchBarFixed = true
        } else {
          this.searchBarFixed = false
        }
      },
      send(){
        let ths =this;
        ths.$nextTick(()=>{
          ths.list.push(this.chatText);
          console.log(' this.list--->', ths.list)
          ths.chatText ='';

          console.log(document.getElementById('chatContent').scrollHeight)
          document.getElementById('chatContent').lastElementChild.scrollIntoView()

          document.getElementById('chatContent').scrollBy(document.getElementById('chatContent').scrollHeight +200)
        })
        ths.isSend=false;
      },
    },
    mounted(){
      this.chatH = document.body.clientHeight - 100;
      window.addEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style lang="scss">
  .chat{
    .emotion-content{
      width: 100%;
      height: 300px;
      background-color: #fafafa;
    }
    .add-content{
      display: flex;
      .item{
        flex:1;
        text-align: center;
        padding: 10px;
        margin: 20px;
        background: #fff;
        border-radius: 20px;
      }
      .icon{
        width: 80px;
        height: 80px;
        padding: 20px;
        border-radius: 10px;
        margin: 20px auto;
      }
      .icon-xc{
        background: url("../../../static/img/icon-xc.png")no-repeat;
        background-size: 100% 100%;
      }
      .icon-ps{
        background: url("../../../static/img/icon-ps.png")no-repeat;
        background-size: 100% 100%;
      }
      .icon-wz{
        background: url("../../../static/img/icon-wz.png")no-repeat;
        background-size: 100% 100%;
      }
      .icon-spth{
        background: url("../../../static/img/icon-spth.png")no-repeat;
        background-size: 100% 100%;
      }
    }
    .chat-content{
      overflow: scroll;
      .opposite{
        display: flex;
        margin: 20px 20px;
        padding: 10px;
        .avatar{
          width: 55px;
          height: 55px;
          background: url("../../../static/img/icon-qq-03.jpg") no-repeat;
          background-size: 100% 100%;
        }
      }
      .self{
        display: flex;
        margin: 20px 20px;
        padding: 10px;
        justify-content: flex-end;
        .avatar{
          width: 55px;
          height: 55px;
          background: url("../../../static/img/icon-qq-02.jpg") no-repeat;
          background-size: 100% 100%;
        }
      }
      .talk{
        min-width: 100px;
        background-color: #1d8ce0;
        border-radius: 5px;
        padding: 20px;
        margin: 0 40px;
        position: relative;
        .right{
          position:absolute;
          top:15px;
          right:-40px; /* 圆角的位置需要细心调试哦 */
          width:0;
          height:0;
          font-size:0;
          border:solid 20px;
          border-color:#fff #fff #fff #1d8ce0;
        }
        .left{
          position:absolute;
          top:15px;
          left:-42px; /* 圆角的位置需要细心调试哦 */
          width:0;
          height:0;
          font-size:0;
          border:solid 20px;
          border-color: #fff #1d8ce0  #fff #fff ;
          /*  content: '';
            position: absolute;
            top: 0;
            left: -24px;
            width: 20px;
            height: 20px;
            border-width: 0 0 20px 20px;
            border-style: solid;
            border-bottom-color: inherit;   !*自动继承父元素的border-bottom-color*!
            border-left-color: transparent;
            border-radius: 0 0 60px 0;*/
        }
      }
    }
    .chat-modules{
      display: flex;
      background: #f2f2f2;
      padding: 20px 40px;
      border-top:1px solid #e3e3e3;/*no*/
      box-sizing: border-box;
      .icon{
        width: 64px;
        height: 64px;
        margin:0 20px;
      }
      .voice{
        background: url("../../../static/img/icon-yy.png") no-repeat;
        background-size: 100% 100%;
        background-position: center center;

      }
      .voice-content{
        background: rgba(0,0,0,0);
        .icon-voice{
          width: 140px;
          height: 120px;
        }
        .voice-dt{
          background: url("../../../static/img/icon-yydt.png") no-repeat;
          background-size: 100% 100%;
          background-position: center center
        }
      }
      .chat-text{
        max-height: 200px;
        flex: 1;
        box-sizing: border-box;
        textarea{
          padding:0 10px;
          outline: none;
          border: 0;
          border-radius: 5px;
          width: 100% ;
          height: 100%;
          line-height: 1.3;
          box-sizing: border-box;
        }
      }
      .face{
        background: url("../../../static/img/icon-face.png") no-repeat;
        background-size: 100% 100%;
        background-position: center center;
      }
      .add{
        background: url("../../../static/img/icon-add.png") no-repeat;
        background-size: 100% 100%;
        background-position: center center;
      }
      .send{
        width: 100px;
        height: 35px;
        line-height: 35px;
        text-align: center;
        background-color: #1d8ce0;
        color: #fff;
        font-size: 14px;/*no*/
        font-weight: 400;
        border-radius: 10px;
        padding: 20px;
      }
      .send:active{
        background-color: rgba(29,140,224,0.3);
        color: #fff;
      }


    }
  }
</style>
