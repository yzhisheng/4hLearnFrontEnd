<script setup>
import { useMoneyStore } from '../stores/money.js'

const moneyStore = useMoneyStore();

</script>

<template>
   <div>
      <p>￥:{{ moneyStore.rmb }}</p>
      <p>$:{{ moneyStore.dollar }}</p>
      <p>€:{{ moneyStore.eur }}</p>
   </div>
</template>

<style scoped></style>
