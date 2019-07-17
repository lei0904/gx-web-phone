<template>
    <div id="message">
      <mt-header fixed title="消息">
        <router-link to="/workbench" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <v-menu :checked="3"></v-menu>
    </div>
</template>

<script>
  import Menu from '../../components/menu/menu.vue'
    export default {
        name: "message.vue",
      components: {
        "v-menu": Menu
      },
    }
</script>

<style scoped>

</style>
