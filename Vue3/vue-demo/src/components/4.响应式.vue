<script setup>
import { reactive, ref } from 'vue';


let name = '凹凸曼'

const car = reactive({
    brand: '小米',
    version: 'pro max',
    price: 800
})

let msg = `<p style='color: red'> hello world!</p>`

const url = ref("https://www.baidu.com")

function changeUrl() {
    url.value = "https://www.4399.com"
    alert('url已修改为:' + url.value)
}

function addPrice() {
    car.price += 100;
}
</script>


<template>
    <!-- 使用步骤：
    1. 使用 ref() 包装原始类型、对象类型数据，生成 代理对象
    2. 任何方法、js代码中，使用 代理对象.value 的形式读取和修改值
    3. 页面组件中，直接使用 代理对象
    注意：推荐使用 const（常量） 声明代理对象。代表代理对象不可变，但是内部值变化会被追踪。 -->
    <h1>响应式:ref(可包装任何数据)</h1>
    <div>使用步骤：
        1. 使用 ref() 包装原始类型、对象类型数据，生成 代理对象
        2. 任何方法、js代码中，使用 代理对象.value 的形式读取和修改值
        3. 页面组件中，直接使用 代理对象
        注意：推荐使用 const（常量） 声明代理对象。代表代理对象不可变，但是内部值变化会被追踪。</div>
    <a v-bind:herf="url">Go !</a>
    <!-- 简写形式 -->
    <a :href="url"> 简写Go!</a>
    <!-- 此时如果我们想修改变量的值，属性值并不会跟着修改。可以测试下。因为还没有响应式特性 -->
    <button @click="changeUrl">Change Url</button>

    <br>
    <br>
    <br>
    <br>
    <br>
    <!-- 使用步骤：
    1. 使用 reactive() 包装对象类型数据，生成 代理对象
    2. 任何方法、js代码中，使用 代理对象.属性的形式读取和修改值
    3. 页面组件中，直接使用 代理对象.属性 -->
    <h1>响应式:ref(只可包装对象数据)</h1>
    <div>使用步骤：
        1. 使用 reactive() 包装对象类型数据，生成 代理对象
        2. 任何方法、js代码中，使用 代理对象.属性的形式读取和修改值
        3. 页面组件中，直接使用 代理对象.属性</div>
    <h2>姓名:{{ name }}</h2>
    <h2>品牌:{{ car.brand }}</h2>
    <h2>型号:{{ car.version }}</h2>
    <h2 style="color: red;">价格:{{ car.price }}</h2>
    <button @click="addPrice">+100</button>
    <br>
    <br>
    <br>
    <br>
    <h1>总结</h1>
    <div>基本类型用 ref()，对象类型用 reactive()，ref 要用 .value，reactive直接 . 。页面取值永不变。
        也可以 ref 一把梭，大不了 天天 .value</div>
</template>

<style scoped></style>
