<script setup>

import Father from './Father.vue'


</script>


<template>
    <h1>插槽</h1>
    <Father>
        <!-- 具名插槽 -->
        <!-- <template v-slot:btn>
            <br>
            <button>哎呦，wc!</button>
        </template> -->
        <!-- 简写形式 -->
        <template #btn>
            <br>
            <button>哎呦，wc!</button>
        </template>

        我草,沃日你仙人板板

    </Father>
</template>

<style scoped></style>
