<script setup>

let name = '凹凸曼'

let car = {
    brand: '小米',
    version: 'pro max',
    price: 800
}

let msg = `<p style='color: red'> hello world!</p>`

function buy() {
    alert("已购买!")
}
</script>


<template>
    <h1>指令一: v-html,v-text</h1>
    <div v-html="msg"></div>
    <div v-text="msg"></div>
    <!-- //相当于插值表达式 -->
    <div>{{ msg }}</div>

    <br>
    <br>
    <br>
    <h1>指令二: v-on</h1>
    <button v-on:click="buy">Buy</button>
    <!-- 简写形式 -->
    <button @click="buy">购买</button>

    <br>
    <br>
    <br>
    <h1>指令三: v-if 和 v-for</h1>
    <span style="color: red" v-if="car.price > 900">雷子,你卖贵了</span>
    <span style="color: green" v-if="car.price <= 900">雷总,你是我滴神</span>
</template>

<style scoped></style>
