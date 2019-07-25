<template>
  <div id="login">
    <div class="content">
      <div class="logo">广西监狱局移动门户</div>
      <div class="login-form">
        <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
        <mt-field label="密码" placeholder="请输入邮箱" type="password" v-model="password"></mt-field>
        <mt-button class="normal-button" size="large" type="primary" @click.native="login">登录</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
  import Menu from '../../components/menu/menu.vue'
  export default {
    name: "message.vue",
    components: {
      "v-menu": Menu
    },
    data(){
      return {
        username:'gxjy',
        password:'000000'
      }
    },
    methods:{
      login(){
        this.$router.push({path:'/myapp'})
      }
    }
  }
</script>

<style lang="scss">
  #login{
    .content{
      height: 100vh;
      background:url('../../../static/img/appcenter-background.png');
      background-size: 100% 100%;
      .logo{
        text-align: center;
        width: 500px;
        height: 50px;
        font-size: 22px;/*no*/
        margin: 20px auto 80px;
        color: transparent;
        -webkit-text-stroke: 1px #fff;/*no*/
        letter-spacing:10px;
        text-shadow: 0 2px 0 #999, 0 4px 0 #888, 0 4px 0 #777, 0 8px 0 #666, 0 6px 0 #555, 0 6px 0 #444, 0 7px 0 #333, 0 8px 7px #001135
      }
      .mint-button--primary {
        background-color: #136dc5;
      }
      .login-form{
        width: 500px;
        margin: 200px auto;
        .normal-button{
          margin: 40px auto;
        }
      }
    }

  }
</style>
