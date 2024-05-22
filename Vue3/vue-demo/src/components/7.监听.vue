<script setup>
import { computed, reactive, ref, watch, watchEffect } from 'vue';


let name = '凹凸曼'

const car = reactive({
    brand: '小米',
    version: 'pro max',
    price: 999
})
const count = ref("0")

const totalPrice = computed(() => {
    return car.price * count.value;
})

function changePrice() {
    car.price += 100;
}

//onCleanup-清空之后的回调
//精准监听
// watch(count, (newValue, oldValue, onCleanup) => {
//     console.log("newValue", newValue)
//     console.log("oldValue", oldValue)
//     if (count.value > 3) {
//         alert("超出限购数量")
//         count.value = 3
//     }
// })

//监听所有
watchEffect(() => {
    if (count.value > 3) {
        alert("超出限购数量")
        count.value = 3
    }

    if (car.price > 1599) {
        alert("太贵了")

    }
})
</script>


<template>
    <h1>监视属性</h1>
    <h2>姓名:{{ name }}</h2>
    <h2>品牌:{{ car.brand }}</h2>
    <h2>型号:{{ car.version }}</h2>
    <h2>价格:{{ car.price }} <button @click="changePrice">＋100</button></h2>
    <h5>
        请输入购买数量: <input type="text" v-model="count" />
    </h5>

    <h6>总价格:{{ totalPrice }}</h6>
</template>

<style scoped></style>
