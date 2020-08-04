<template>
<div class="root">
  <el-form ref="form" :model="loginInfo" label-width="80px" class="login-m">
    <el-form-item label="账户">
      <el-input v-model="loginInfo.username"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="loginInfo.password" show-password></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="login">登录</el-button>
    </el-form-item>
  </el-form>
</div>
</template>
<script>
export default {
  data() {
    return {
      loginInfo: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
      login() {
          if(this.loginInfo.username === "admin" && this.loginInfo.password === "admin") {
              this.$router.push('home')
          }
      }
  }
};
</script>
<style scoped>
    .login-m {
        width: 50%;
    }
    .root {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 500px; 
    }
</style>
