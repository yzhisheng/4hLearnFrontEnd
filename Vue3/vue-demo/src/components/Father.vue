<script setup>
import { reactive, ref } from 'vue';
import Son from './Son.vue'

const name = ref('大大怪')

const data = reactive({
    car: {
        brand: '小米',
        version: 'pro max',
        price: 900
    },
    money: 100
})

function addMoney() {
    data.money += 200;
}

function reduceMoney() {
    data.money -= 200;
}

function kouKuan(arg) {
    if (data.money < arg) {
        alert("一包辣条【" + arg + "】，wc,不买了!")
    } else {
        data.money -= arg;
    }
}
</script>


<template>
    <div style="background-color: palevioletred;">
        <p>我是{{ name }}</p>
        <p>我的账户余额:{{ data.money }}</p>
        <button @click="addMoney">发工资了+200</button>
        <button @click="reduceMoney">老板扣钱了-200</button>

        <!-- <Son :fatherName="name" :money="data.money" :car="data.car" /> -->
        <Son :fatherName="name" v-bind="data" @buy="kouKuan" />
    </div>
</template>

<style scoped></style>
