<script setup>
import { useRouter, useRoute, RouterLink } from 'vue-router'

const router = useRouter()
const route = useRoute()


function paramTest() {
    // router.push('/welcome/888/Sakura/20') //方式1

    router.push({
        name: 'Param',
        params: {
            id: 999,
            age: 21,
            name: 'Sakura'
        }
    })
}

</script>


<template>
    <div style="background-color: goldenrod;">
        <h1>欢迎你: {{ $route.params.id }}</h1>
        <RouterLink to="/welcome/007/007/007/profile">个人详情</RouterLink>
        <RouterLink to="/welcome/007/007/007/posts">我的邮件</RouterLink>
        <br>

        <div style="background-color: aquamarine; border: 5px solid red;">
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>
a {
    margin-left: 20px;
}
</style>
