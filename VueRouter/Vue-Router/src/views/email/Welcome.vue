<script setup>


</script>


<template>
    <div style="background-color: goldenrod;">
        <h1>欢迎你: {{ $route.params.id }}</h1>
        <RouterLink to="/welcome/007/profile">个人详情</RouterLink>
        <RouterLink to="/welcome/007/posts">我的邮件</RouterLink>

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
