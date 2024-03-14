<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- 7-4. Card 呈現在畫面上 -->
    <Card></Card>
  </div>
</template>

<script>
// 7-2. 外部元件匯入進來
import Card from '@/components/Card.vue';

// 7-1. 元件 js 匯出
export default {
  // 7-3. 區域註冊
  components: {
    Card,
  },
};
</script>
