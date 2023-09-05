<script setup lang="ts">
import { currentActivityApi } from '@/api/modules/test';

async function getActivity() {
  try {
    await currentActivityApi({ sign: 'tte9559fe87668428701' });
  }
  catch (error) {
    console.error('获取当前活动数据失败', error);
  }
};

onMounted(() => {
  getActivity();
});

const title = ref('Hello uni-app');
function handleClickGithub() {
  if (window?.open) {
    window.open('https://github.com/xkfe/uni-vscode-template');
  }
  else {
    uni.showToast({
      icon: 'none',
      title: '请使用浏览器打开',
    });
  }
}
</script>

<template>
  <view h-600 w-screen center flex-col>
    <view animate-bounce>
      <image src="/static/logo.png" h-40 w-40 />
      <image src="/static/vite.jpeg" ml10 h-40 w-40 />
      <image src="/static/vue.png" ml10 h-40 w-40 />
      <image src="/static/ts.png" ml10 h-40 w-40 />
      <image src="/static/pinia.jpeg" ml10 h-40 w-40 />
      <image src="/static/unocss.png" ml10 h-40 w-40 />
      <image src="/static/vscode.png" ml10 h-40 w-40 />
    </view>
    <view mb20 mt20 text-24 fw-600 primary-color>
      {{ title }}
    </view>
    <view text-center text-12 font-sans primary-color>
      <text>UNI-APP</text> |
      <text>VITE</text> |
      <text>VUE3</text> |
      <text>TS</text> |
      <text>PINIA</text> |
      <text>UNOCSS</text> |
      <text>VUEUSE</text> |
      <text>UNI-UI</text>
    </view>
    <view class="btn" @click="handleClickGithub">
      <text i-carbon:logo-github mr3 />
      <text>github</text>
    </view>
  </view>
</template>

<style>
.btn {
  --at-apply: px-30 py-6 mt-10 center rounded-full bg-teal-600 text-white cursor-pointer
}
</style>
