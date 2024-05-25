<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()




</script>


<template>
    <div style="background-color: green;">
        <h1>欢迎你: {{ $route.params.name }}</h1>
        <p>idCard: {{ route.params.id }}</p>
        <p>年龄: {{ route.params.age }}</p>
        <p>座驾:{{ route.query.carName }}</p>
    </div>
</template>

<style scoped>
a {
    margin-left: 20px;
}
</style>
