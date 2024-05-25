<script setup>
import axios from 'axios'

function testGet() {
  axios.get("http://43.139.239.29/get").then(resp => {
    console.log('resp', resp)
    console.log('data', resp.data)
  })
}

function testGetParam() {
  axios.get("http://43.139.239.29/get", {
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
  axios.post("http://43.139.239.29/post").then(resp => {
    console.log('resp', resp)
    console.log('data', resp.data)
  })
}

function testPOSTParam() {
  axios.post("http://43.139.239.29/post", {
    id: 777,
    name: '小怪兽'
  }).then(resp => {
    console.log('resp', resp)
    console.log('data', resp.data)
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
