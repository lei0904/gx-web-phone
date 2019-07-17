<template>
  <div>
    <mt-header fixed title="广西移动执法"></mt-header>

    <div class="nav_group">
      <router-link :to="'/migrants'" class="nav_btn">外来人员</router-link>
      <router-link :to="'/criminalQuery'" class="nav_btn">罪犯查询</router-link>
      <router-link :to="'/prison'" class="nav_btn">监区管理</router-link>
    </div>
  </div>
</template>

<style lang="scss">
  @import '../../styles/style.scss';

  .nav_group {
    padding-top: $headerPx;

    .nav_btn {
      display: block;
      height: 200px;
      text-align: center;
      line-height: 200px;
      margin: 100px;
      border: 1px solid #21BA45; /*no*/
      color: #fff;
      background: #21BA45;
      border-radius: 20px;
      font-size: 50px;
      font-weight: 900;
    }
  }
</style>
