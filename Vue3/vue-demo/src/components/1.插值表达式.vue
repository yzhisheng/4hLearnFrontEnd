<script setup>

let name = '凹凸曼'

let car = {
    brand: '小米',
    version: 'pro max',
    price: 999
}
</script>


<template>
    <h1>插值表达式</h1>
    <h2>姓名:{{ name }}</h2>
    <h2>品牌:{{ car.brand }}</h2>
    <h2>型号:{{ car.version }}</h2>
    <h2>价格:{{ car.price }}</h2>
</template>

<style scoped></style>
