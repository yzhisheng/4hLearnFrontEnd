<script setup>

import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

//userRoute:路由数据

function getInfo() {
    console.log("userRoute", route)
    console.log("路径参数：", route.params)
}


//userRouter:路由器
function goHome() {
    router.push('/')
}
function back() {
    // router.go(1) //前进
    router.go(-1) //回退
}

</script>


<template>
    <div style="background-color: goldenrod;">
        <h1>个人详情</h1>
        <button @click="getInfo">页面信息</button>
        <button @click="goHome">返回首页</button>
        <button @click="back">回退</button>
    </div>
</template>

<style scoped></style>
