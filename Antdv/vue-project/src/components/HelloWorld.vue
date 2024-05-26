<script setup>
import { ref } from 'vue';
import { DownloadOutlined, FastBackwardOutlined, FastForwardOutlined } from '@ant-design/icons-vue';
const size = ref('large');
const loading = ref(false);
const iconLoading = ref(false);
const enterIconLoading = () => {
  iconLoading.value = {
    delay: 1000,
  };
  setTimeout(() => {
    iconLoading.value = false;
  }, 6000);
};




</script>

<template>
  <a-space direction="vertical">
    <a-space>
      <a-button type="primary" loading>Loading</a-button>
      <a-button type="primary" size="small" loading>Loading</a-button>
    </a-space>
    <a-space>
      <a-button type="primary" :loading="loading" @mouseenter="loading = true">
        mouseenter me!
      </a-button>
      <a-button type="primary" :loading="iconLoading" @click="enterIconLoading">
        <template #icon>
          <PoweroffOutlined />
        </template>
        延迟1s
      </a-button>
    </a-space>
    <a-space>
      <a-button type="primary" loading />
      <a-button type="primary" shape="circle" loading />
      <a-button danger shape="round" loading />
    </a-space>
  </a-space>

  <br>
  <br>
  <br>
  <br>
  <br>
  <FastBackwardOutlined />
  <FastForwardOutlined />

  <a-space direction="vertical">
    <a-radio-group v-model:value="size">
      <a-radio-button value="large">Large</a-radio-button>
      <a-radio-button value="default">Default</a-radio-button>
      <a-radio-button value="small">Small</a-radio-button>
    </a-radio-group>
    <a-space>
      <a-button type="primary" :size="size">Primary</a-button>
      <a-button :size="size">Normal</a-button>
      <a-button type="dashed" :size="size">Dashed</a-button>
      <a-button danger :size="size">Danger</a-button>
      <a-button type="link" :size="size">Link</a-button>
    </a-space>
    <a-space>
      <a-button type="primary" :size="size">
        <template #icon>
          <DownloadOutlined />
        </template>
      </a-button>
      <a-button type="primary" shape="circle" :size="size">
        <template #icon>
          <DownloadOutlined />
        </template>
      </a-button>
      <a-button type="primary" shape="round" :size="size">
        <template #icon>
          <DownloadOutlined />
        </template>
        Download
      </a-button>
      <a-button type="primary" shape="round" :size="size">
        <template #icon>
          <DownloadOutlined />
        </template>
      </a-button>
      <a-button type="primary" :size="size">
        <template #icon>
          <DownloadOutlined />
        </template>
        Download
      </a-button>
    </a-space>
  </a-space>
</template>


<style scoped></style>
