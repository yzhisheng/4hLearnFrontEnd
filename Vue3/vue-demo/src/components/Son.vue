<script setup>

let name = '小小怪'


//定义属性,只读属性,不可修改
// let props = defineProps(['fatherName', 'money', 'car'])

//定制属性
let props = defineProps({
    money: {
        type: Number,
        required: true,
        default: 0
    },
    books: Array,
    car: {
        type: Object
    }
})


//子传父 使用emit:定义事件
let emits = defineEmits(['buy']);
function buy() {
    alert("我要买辣条!")
    emits('buy', 100)
}


</script>


<template>
    <div style="background-color: burlywood;">
        <p>我是{{ name }},我老爸是{{ fatherName }}</p>
        <p>我爸的车:{{ car }}</p>
        <p>我爸的账户余额:{{ money }}</p>
        <button @click="buy">买包辣条-100</button>
    </div>
</template>

<style scoped></style>
