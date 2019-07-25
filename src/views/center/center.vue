<template>
  <div id="personal">
    <mt-header fixed title="个人中心">
      <router-link to="/governmentIndex" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <div class="info">
        <div class="img-content">
          <img src="../../../static/img/icon-info.jpeg" alt="">
        </div>
        <div class="info-items">
          <div class="name"> 王二小</div>
          <div class="phone">13988888888</div>
        </div>
      </div>
      <div class="modules">
        <mt-cell title="党员档案" label="党员信息"  to="/basic" is-link></mt-cell>
        <mt-cell title="个人信息2"></mt-cell>
        <mt-cell title="个人信息3"></mt-cell>
        <mt-cell
          title="个人信息4"
          to=""
          is-link
          value="个人信息4">
        </mt-cell>
        <mt-cell title="个人信息5" label="描述信息" is-link></mt-cell>

      </div>
    </div>

    <v-menu :checked="4"></v-menu>
  </div>
</template>

<script>
  import Menu from '../../components/menu/g-menu.vue'
  export default {
    name: "message.vue",
    components: {
      "v-menu": Menu
    },
  }
</script>

<style lang="scss">
  #personal{
    .content{
      .info{
        display: flex;
        margin: 20px 30px;
        .img-content{
          width: 110px;
          height: 110px;
          margin-right: 20px;
          img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .info-items{
          font-size: 15px;/*no*/
          padding: 20px 10px;
          .name{
            margin-bottom: 20px;
          }
          .phone{

          }
        }
      }
      .modules{
        margin-top: 80px;
      }
    }
  }
</style>
