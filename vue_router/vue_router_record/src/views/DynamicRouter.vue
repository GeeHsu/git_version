<template>
  <div>
  </div>
</template>

<script>
// 載入 axios 套件
import axios from 'axios';

export default {
  created() {
    // b9039789d7d5a209
    console.log(this.$route.params.id);
    const seed = this.$route.params.id;
    axios.get(`https://randomuser.me/api/?seed=${seed}`)
      .then((res) => {
        console.log(res);
      });
  },
};
</script>
