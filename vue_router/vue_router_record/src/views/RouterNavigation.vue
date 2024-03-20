<template>
  <button type="button" @click="getRoute">getRoute</button>

  <button type="button" @click="push">Push</button>
  <button type="button" @click="replace">Replace</button>
  <button type="button" @click="go">Go</button>
  <hr>
  <button type="button" @click="addRoute">新增路由</button>
</template>

<script>
export default {
  methods: {
    // 包含歷史紀錄
    push() {
      // 方法一: 直接帶入網址
      // this.$router.push('/newpage/dynamicrouter/b9039789d7d5a209');
      // 方法二: 使用 name 的方式帶入值
      this.$router.push({
        name: 'About',
      });
    },
    // 沒有歷史紀錄
    replace() {
      this.$router.replace({
        name: 'About',
      });
    },
    // 操作歷史紀錄
    go() {
      // 正整數 - 下一頁
      // 負整數 - 上一頁
      this.$router.go(-1);
    },
    // 取得常用參數
    getRoute() {
      // 取得路由的屬性
      // https://next.router.vuejs.org/zh/api/#routelocationnormalized
      // 範例: this.$route.fullPath (目前網址)
      // console.log(this.$route);

      // 呼叫路由的方法
      // 參考: https://next.router.vuejs.org/zh/api/#router-方法
      // 範例: this.$router.go(-1) (回到前一頁)
      console.log(this.$router);
    },
    // 延伸介紹
    addRoute() {
      this.$router.addRoute({
        path: '/newabout',
        name: 'newAbout',
        component: () => import('./About.vue'),
      });
    },
  },
};
</script>
