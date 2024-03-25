<template>
  <div class="container mt-5">
    <form class="row justify-content-center"
    @submit.prevent="signIn">
      <div class="col-md-6">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
        <div class="mb-2">
          <label for="inputEmail" class="sr-only">Email address</label>
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            required
            autofocus
            v-model="user.username"
          />
        </div>
        <div class="mb-2">
          <label for="inputPassword" class="sr-only">Password</label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
            v-model="user.password"
          />
        </div>
        <div class="text-end mt-4">
          <button class="btn btn-lg btn-primary btn-block" type="submit">登入</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    signIn() {
      console.log('login');
      // 環境變數站點位置 + 登入的實際 API
      const api = `${process.env.VUE_APP_API}admin/signin`;
      console.log(api);
      // api 路徑, 夾帶的資料
      this.$http.post(api, this.user)
        .then((res) => {
          // Cookie 存取
          // 前面: 儲存 Cookie 內容; 後面: 到期日
          // 儲存 Cookie 內容: 自定義名稱 = token 值
          // 到期日轉成 token 可以儲存的編碼
          const { token, expired } = res.data;
          // console.log(token, expired);
          document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
          console.log(res);
        });
    },
  },
};
</script>
