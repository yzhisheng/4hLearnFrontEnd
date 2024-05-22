<script setup>
import { computed, onBeforeMount, onBeforeUpdate, onMounted, onUpdated, reactive, ref, watch, watchEffect } from 'vue';


let name = '凹凸曼'

const car = reactive({
    brand: '小米',
    version: 'pro max',
    price: 999
})
const count = ref("0")


function addCount() {
    count.value++;
}


//生命周期钩子函数

//挂载

//挂载前,页面元素还未加载
onBeforeMount(() => {
    console.log("onBeforeMount执行......")
    console.log("定义的变量conunt:", count.value)
    console.log("按钮是否已加载:", document.getElementById("btn"))
})
//挂载后,页面元素已加载
onMounted(() => {
    console.log("onMounted执行......")
    console.log("定义的变量conunt:", count.value)
    console.log("按钮是否已加载:", document.getElementById("btn"))
})

//更新

//数据更新前,内容还未加载到页面上，但数据发生更新
onBeforeUpdate(() => {
    console.log("onBeforeUpdate执行......")
    console.log("更新前，变量count:", count.value)
    console.log("更新前，按钮内容:", document.getElementById("btn").innerHTML)
})

//数据更新后,最新数据加载到页面上
onUpdated(() => {
    console.log("onMounted执行......")
    console.log("更新后，变量count:", count.value)
    console.log("更新后，按钮内容:", document.getElementById("btn").innerHTML)
})

</script>


<template>
    <h1>生命周期:</h1>
    <button id="btn" @click="addCount">点击次数:{{ count }}</button>
</template>

<style scoped></style>
