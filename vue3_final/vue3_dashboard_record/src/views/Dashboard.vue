<template>
  <Navbar></Navbar>
  <div class="container-fluid">
    <router-view/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
  created() {
    // 取出 token
    // test2 改寫成 hexToken
    // Airbnb 規範把錯誤的 \ 去除
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    // console.log(token);
    // token 夾帶到 headers 裡面
    // ["Authorization"] 改寫成 .Authorization
    this.$http.defaults.headers.common.Authorization = token;
    // 檢查用戶是否仍然持續登入
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(api)
      .then((res) => {
        // console.log(res);
        // 登入判斷 - 登入失敗
        if (!res.data.success) {
          // 登入失敗後會轉址到 Login 頁面
          this.$router.push('/login');
        }
      });
  },
};
</script>
