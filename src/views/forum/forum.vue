<template>
  <div class="forum">
    <mt-header fixed title="论坛">
      <router-link to="/governmentIndex" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content" :style="{height:contentH+'px'}">

      <div class="search" >
        <input type="text"  placeholder="输入关键字"/>
      </div>
      <div class="scroll-wrapper" :style="{height:scrollH+'px'}">
        <div class="list">
          <div class="item">
            <div class="avatar">
              <img src="../../../static/img/icon-qq-avatar.jpg" alt="">
            </div>
            <div class="details">
              <div class="info name">张军</div>
              <div class="info mood">
                <p>
                  油价连跌一周后终于回升地缘风险对供给冲击会否持续压倒需求顾虑？上周一(7月15日)，一艘英国油轮在被伊朗军方扣押后，中东局势高度紧张，油价本该应声持续上涨，然而受到此后美国公布的成品油库存消耗量远不及预期、以及飓风过后墨西哥湾油企陆续复工等因素影响，过去一周内大部分时间油价却不涨反跌，甚至达一度触及一个月低点54.72美元/桶附近。不过，在新的一周开始之后，油价渐有企稳回升之态势
                </p>
              </div>
              <div class="discuss">
                <div class="time">3小时前</div>
                <div class="icon-discuss"></div>
              </div>
              <div class="comment">
                <div class="say">
                  <span class="who">王平:</span>
                  <span>涨涨涨涨涨涨涨涨涨涨涨涨涨涨涨涨涨涨涨涨涨涨涨涨</span>
                </div>
                <div class="say">
                <span class="who">沈杰:</span>
                <span>干的漂亮</span>
              </div>
              </div>
            </div>

          </div>
          <div class="item">
            <div class="avatar">
              <img src="../../../static/img/icon-qq-avatar.jpg" alt="">
            </div>
            <div class="details">
              <div class="info name">张军</div>
              <div class="info mood">
                <p>
                  油价连跌一周后终于回升地缘风险对供给冲击会否持续压倒需求顾虑？上周一(7月15日)，一艘英国油轮在被伊朗军方扣押后，中东局势高度紧张，油价本该应声持续上涨，然而受到此后美国公布的成品油库存消耗量远不及预期、以及飓风过后墨西哥湾油企陆续复工等因素影响，过去一周内大部分时间油价却不涨反跌，甚至达一度触及一个月低点54.72美元/桶附近。不过，在新的一周开始之后，油价渐有企稳回升之态势
                </p>
              </div>
              <div class="discuss">
                <div class="time">3小时前</div>
                <div class="icon-discuss"></div>
              </div>
              <div class="comment">
                <div class="say">
                  <span class="who">王平:</span>
                  <span>涨涨涨涨涨涨涨涨涨涨涨涨涨涨涨涨涨涨涨涨涨涨涨涨</span>
                </div>
                <div class="say">
                  <span class="who">沈杰:</span>
                  <span>干的漂亮</span>
                </div>
              </div>
            </div>

          </div>
          <div class="item">
            <div class="avatar">
              <img src="../../../static/img/icon-qq-avatar.jpg" alt="">
            </div>
            <div class="details">
              <div class="info name">张军</div>
              <div class="info mood">
                <p>
                  油价连跌一周后终于回升地缘风险对供给冲击会否持续压倒需求顾虑？上周一(7月15日)，一艘英国油轮在被伊朗军方扣押后，中东局势高度紧张，油价本该应声持续上涨，然而受到此后美国公布的成品油库存消耗量远不及预期、以及飓风过后墨西哥湾油企陆续复工等因素影响，过去一周内大部分时间油价却不涨反跌，甚至达一度触及一个月低点54.72美元/桶附近。不过，在新的一周开始之后，油价渐有企稳回升之态势
                </p>
              </div>
              <div class="discuss">
                <div class="time">3小时前</div>
                <div class="icon-discuss"></div>
              </div>
              <div class="comment">
                <div class="say">
                  <span class="who">王平:</span>
                  <span>涨涨涨涨涨涨涨涨涨涨涨涨涨涨涨涨涨涨涨涨涨涨涨涨</span>
                </div>
                <div class="say">
                  <span class="who">沈杰:</span>
                  <span>干的漂亮</span>
                </div>
              </div>
            </div>

          </div>
          <div class="item">
            <div class="avatar">
              <img src="../../../static/img/icon-qq-avatar.jpg" alt="">
            </div>
            <div class="details">
              <div class="info name">张军</div>
              <div class="info mood">
                <p>
                  油价连跌一周后终于回升地缘风险对供给冲击会否持续压倒需求顾虑？上周一(7月15日)，一艘英国油轮在被伊朗军方扣押后，中东局势高度紧张，油价本该应声持续上涨，然而受到此后美国公布的成品油库存消耗量远不及预期、以及飓风过后墨西哥湾油企陆续复工等因素影响，过去一周内大部分时间油价却不涨反跌，甚至达一度触及一个月低点54.72美元/桶附近。不过，在新的一周开始之后，油价渐有企稳回升之态势
                </p>
              </div>
              <div class="discuss">
                <div class="time">3小时前</div>
                <div class="icon-discuss"></div>
              </div>
              <div class="comment">
                <div class="say">
                  <span class="who">王平:</span>
                  <span>涨涨涨涨涨涨涨涨涨涨涨涨涨涨涨涨涨涨涨涨涨涨涨涨</span>
                </div>
                <div class="say">
                  <span class="who">沈杰:</span>
                  <span>干的漂亮</span>
                </div>
              </div>
            </div>

          </div>
        </div>


      </div>
    </div>

    <v-menu :checked="2"></v-menu>
  </div>
</template>

<style lang="scss">
  .forum {
      .content{
        background-color: #1d6db4;
        .search{
          width: 600px;
          margin: 40px auto;
          input{
            box-sizing: border-box;
            width: 100%;
            border-radius: 30px;
            height: 55px;
            line-height: 55px;
            padding-left: 60px;
            border: none;
            outline: 0;
            background-image: url("../../../static/img/icon-search.png");
            background-repeat: no-repeat;
            background-size: 30px 30px;
            background-position: 20px center;
          }
        }
        .scroll-wrapper{
          background: #fff;
          overflow: scroll;
          padding:20px;
          border-top-left-radius: 40px;
          border-top-right-radius: 40px;
          .list{
            .item{
              display: flex;
              padding: 20px 10px;
              border-bottom: 1px solid #e1e1e1;/*no*/
              .info{
                padding: 20px;
                font-size: 14px;/*no*/
              }
              .avatar{
                width: 120px;
                height: 120px;
                border-radius: 10px;
                img{
                  width: 100%;
                  height: 100%;
                }
              }
              .details{
                flex: 1;
                .name{
                  color: #30539a;
                }
                .mood{
                  padding:0 10px 10px;
                  p{
                    line-height: 1.4;
                    overflow:hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 8;//在第几行显示...
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                  }
                }
              }
              .discuss{
                padding-top: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .time{
                  color: #9f9f9f;
                  font-size: 13px;/*no*/
                }
                .icon-discuss{
                  width: 45px;
                  height: 45px;
                  background: url("../../../static/img/icon-disscus.png") no-repeat;
                  background-size: 100% 100%;
                }
              }
              .comment{
                background-color: #f2f2f2;
                .say{
                  padding: 20px 20px 0 ;
                  .who{
                    color: #30539a;
                    font-weight: 400;
                    font-size: 13px;/*no*/
                  }
                  span{
                    line-height: 1.3;
                  }
                }
                .say:last-child{
                  padding: 20px 20px;
                }
              }
            }
          }
        }
      }
  }
</style>

<script type="text/javascript">
  import Menu from '../../components/menu/g-menu.vue'
  import {mapActions} from 'vuex'
  export default {
    name: 'forum',
    components: {
      "v-menu": Menu
    },
    data() {
      return {
        contentH:0,
        scrollH:0
      }
    },
    methods: {
      ...mapActions([
        'setNeedRefresh',
      ]),
    },
    mounted(){
      this.contentH = document.body.clientHeight - 45;
      this.scrollH = document.body.clientHeight - 100;
    }
  }
</script>
