<script setup>

let name = '凹凸曼'

let car = {
    brand: '小米',
    version: 'pro max',
    price: 800
}

let msg = `<p style='color: red'> hello world!</p>`

let url = "https://www.baidu.com"

function changeUrl() {
    url = "https://www.4399.com"
    alert('url已修改为:' + url)
}
</script>


<template>
    <h1>属性绑定</h1>
    <a v-bind:herf="url">Go !</a>
    <!-- 简写形式 -->
    <a :href="url"> 简写Go!</a>
    <!-- 此时如果我们想修改变量的值，属性值并不会跟着修改。可以测试下。因为还没有响应式特性 -->
    <button @click="changeUrl">Change Url</button>
</template>

<style scoped></style>
