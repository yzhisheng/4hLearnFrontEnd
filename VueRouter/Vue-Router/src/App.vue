<script setup>
import { RouterLink } from 'vue-router';
import router from './router';

</script>

<template>
  <h1>Sakura 学 VueRouter</h1>
  <h1>Hello App!</h1>

  <nav>
    <RouterLink to="/">Go to Home</RouterLink> <br>
    <RouterLink to="/hello">Go to Hello</RouterLink> <br>
    <RouterLink to="/sayHi">Go to SayHi</RouterLink><br>
    <RouterLink to="/pathParameter/007">路径传参:007</RouterLink><br>
    <RouterLink to="/welcome/007/007/007">嵌套路由</RouterLink><br>
    <RouterLink to="/paramTest/007/007/007">路由传参</RouterLink><br>
  </nav>
  <hr />
  <!-- 路由视图展示 -->
  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
