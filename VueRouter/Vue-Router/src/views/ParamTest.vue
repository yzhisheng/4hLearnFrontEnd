<script setup>
import { useRouter, useRoute, RouterLink } from 'vue-router'

const router = useRouter()
const route = useRoute()


function paramTest() {
    // router.push('/paramTest/888/Sakura/20/param') //方式1

    router.push({
        name: 'Param',
        params: {
            id: 999,
            age: 21,
            name: 'Sakura'
        }
    })
}

function queryTest() {
    // router.push('/paramTest/888/Sakura/20/query?carName="奔驰"') //方式1

    router.push({
        name: 'Query',
        params: {
            id: 999,
            age: 21,
            name: 'Sakura'

        },
        query: {
            carName: '宝马'
        }
    })
}

</script>


<template>
    <div style="background-color: goldenrod;">
        <h1>路由传参</h1>

        <h1>路由传参-param传参</h1>
        <!-- //方式1 -->
        <RouterLink to="/paramTest/666/Sakura/18/param">Param传参方式1-直接路径</RouterLink>
        <!-- //方式2,必须指定 name 属性 -->
        <RouterLink :to="{
            name: 'Param',
            params: {
                id: 777,
                age: 19,
                name: 'Sakura'
            }
        }">Param传参方式2-绑定对象</RouterLink>
        <!-- //方式3 -->
        <h1>路由传参-query传参</h1>
        <!-- //方式1 -->
        <RouterLink to="/paramTest/666/Sakura/18/query?carName=奥迪">Query传参方式1-直接路径</RouterLink>
        <!-- //方式2,必须指定 name 属性 -->
        <RouterLink :to="{

            path: 'query',
            params: {
                id: 777,
                age: 19,
                name: 'Sakura'

            },
            query: {
                carName: '小米'
            }
        }">Query传参方式2-绑定对象</RouterLink>
        <!-- //方式3 -->

        <button @click="queryTest">Query传参</button>

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
