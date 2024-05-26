<script setup>
import { useMoneyStore } from '../stores/money.js'

const moneyStore = useMoneyStore();


function gugule() {
    moneyStore.win(20);
}

function buy() {
    moneyStore.pay(10);
}
</script>

<template>
    <div>
        <button @click="gugule">刮刮乐,中奖20</button>
        <button @click="buy">买10块刮刮乐</button>
    </div>
</template>

<style scoped></style>
