<script setup>
import httpUtil from './utils/http'
import axios from 'axios'
import { message } from 'ant-design-vue'


//创建Axios实例
const instance = axios.create({
  baseURL: 'http://43.139.239.29',
  timeout: 1000 * 1,
  headers: { 'X-Custom-Header': 'foobar' }
});


function testGet() {
  instance.get("/get").then(resp => {
    console.log('resp', resp)
    console.log('data', resp.data)
  })
}

function testGetParam() {
  httpUtil.get("/get", {
    params: {
      id: 666,
      name: '凹凸曼'
    }
  }).then(resp => {
    console.log('resp', resp)
    console.log('data', resp.data)
  })
}
function testPOST() {
  instance.post("/post").then(resp => {
    console.log('resp', resp)
    console.log('data', resp.data)
  })
}

function testPOSTParam() {
  httpUtil.post("/post", {
    id: 777,
    name: '小怪兽'
  }).then(resp => {
    console.log('resp', resp)
    console.log('data', resp.data)
  })
}

function delay() {
  instance.get('/delay/2').then(resp => {
    console.log('resp', resp)
  }).catch(err => {
    console.log('err', err)
    message.error(err.message)
  })
}

function delay2() {
  httpUtil.get('/delay/2').then(resp => {
    console.log('resp', resp)
  })
}

</script>

<template>
  <h1>Sakura 学 Axios</h1>

  <div>
    <p>GET请求</p>
    <button @click="testGet">GET</button>
    <button @click="testGetParam">GET Param</button>
  </div>

  <div>
    <p>POST请求</p>
    <button @click="testPOST">POST</button>
    <button @click="testPOSTParam">POST Param</button>
    <button @click="delay">原生delay 2s</button>

    <button @click="delay2">配置拦截器delay 2s</button>
  </div>
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
