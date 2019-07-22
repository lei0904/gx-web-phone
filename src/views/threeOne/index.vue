<template>
  <div id="threeOne">
    <mt-header fixed title="三会一课">
      <mt-button icon="back" slot="left" @click="$router.back()"></mt-button>
    </mt-header>
    <div class="content">
      <div class="nav">
        <mt-button size="small" @click.native.prevent="active = 'tab-container1'">支部党员大会</mt-button>
        <mt-button size="small" @click.native.prevent="active = 'tab-container2'">党支部委员会</mt-button>
        <mt-button size="small" @click.native.prevent="active = 'tab-container3'">党小组会</mt-button>
        <mt-button size="small" @click.native.prevent="active = 'tab-container4'">党课</mt-button>
      </div>
      <div class="page-tab-container">
        <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
          <mt-tab-container-item id="tab-container1">
            <div v-for="n in 5" class="clearfloat item">
              <div class="imageContent">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563529888813&di=fe9f9654bf296b39c717dac139ca09e3&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201512%2F12%2F20151212193107_ujGZV.jpeg" >
              </div>
              <div class="textContent">
                <h2>司法部副部长刘志强在新疆甘肃调研司法行政工作</h2>
                <mt-cell title="分类" value="通知公告"></mt-cell>
                <mt-cell title="发布时间" value="2019-07-21"></mt-cell>
                <mt-cell title="阅读" value="500"></mt-cell>
              </div>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab-container2">
            <div v-for="n in 3" class="clearfloat item">
              <div class="imageContent">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1563520643&di=63fabd0dc73a18049fe1429aac5347e8&src=http://img2.ph.126.net/8Y1u9aYRhqT4KHumTO_y1w==/6619210632305894354.jpg" >
              </div>
              <div class="textContent">
                <h2>司法部副部长刘志强在新疆甘肃调研司法行政工作</h2>
                <mt-cell title="分类" value="通知公告"></mt-cell>
                <mt-cell title="发布时间" value="2019-07-21"></mt-cell>
                <mt-cell title="阅读" value="500"></mt-cell>
              </div>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab-container3">
            <div v-for="n in 4" class="clearfloat item">
              <div class="imageContent">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1563520690&di=dbe773d87eea1887224433bc8bcfd4e2&src=http://pic.nipic.com/2008-06-13/2008613104551168_2.jpg" >
              </div>
              <div class="textContent">
                <h2>司法部副部长刘志强在新疆甘肃调研司法行政工作</h2>
                <mt-cell title="分类" value="通知公告"></mt-cell>
                <mt-cell title="发布时间" value="2019-07-21"></mt-cell>
                <mt-cell title="阅读" value="500"></mt-cell>
              </div>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab-container4">
            <div v-for="n in 5" class="clearfloat item">
              <div class="imageContent">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1563520643&di=63fabd0dc73a18049fe1429aac5347e8&src=http://img2.ph.126.net/8Y1u9aYRhqT4KHumTO_y1w==/6619210632305894354.jpg" >
              </div>
              <div class="textContent">
                <h2>司法部副部长刘志强在新疆甘肃调研司法行政工作</h2>
                <mt-cell title="分类" value="通知公告"></mt-cell>
                <mt-cell title="发布时间" value="2019-07-21"></mt-cell>
                <mt-cell title="阅读" value="500"></mt-cell>
              </div>
            </div>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        active: 'tab-container1'
      }
    }
  }
</script>

<style lang="scss">
  #threeOne{
    .clearfloat:after{
      display:block;
      clear:both;
      content:"";
      visibility:hidden;
      height:0
    }
    .mint-cell{
      min-height: 24px;
      .mint-cell-wrapper{
        padding-left: 0px;
      }
    }
    [data-dpr="1"] .mint-cell-wrapper,
    [data-dpr="1"] .mint-field-core {
      font-size: 10px;
    }
    .imageContent,.textContent{
      float: left;
    }
    .imageContent{
      position: absolute;
      left: 0px;
      top:50%;
      transform: translateY(-50%);
    }
    .textContent{
      width: 100%;
      margin-left: 10px;
    }
    img{
      width: 120px;
      height: 120px;
      border-radius: 5px;
    }
    .item{
      margin-top: 30px;
      position: relative;
      padding-left: 120px
    }

  }
</style>
