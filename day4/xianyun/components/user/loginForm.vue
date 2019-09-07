<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-02 19:14:31
 * @LastEditTime: 2019-09-04 15:56:19
 * @LastEditors: Please set LastEditors
 -->
<template>
  <el-form :model="form" ref="form" :rules="rules" class="form">
    <el-form-item class="form-item">
      <el-input v-model="form.username" placeholder="用户名/手机"></el-input>
    </el-form-item>

    <el-form-item class="form-item">
      <el-input v-model="form.password" placeholder="密码" type="password"></el-input>
    </el-form-item>

    <p class="form-text">
      <nuxt-link to="#">忘记密码</nuxt-link>
    </p>

    <el-button class="submit" type="primary" @click="handleLoginSubmit">登录</el-button>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      // 表单数据
      form: {
        username:'',
        password:''
      },
      // 表单规则
      rules: {}
    };
  },
  methods: {
    // 提交登录
    handleLoginSubmit() {
      console.log(this.form);
       this.$axios({
      url: "/accounts/login",
      method: "POST",
      data: this.form
    }).then(res => {
      // 如何调用mutations下的setUserInfo的方法 commit
      // commit接受两个参数，第一个mutations参数是方法名，第二个参数数据
      this.$store.commit("user/setUserInfo", res.data);
    });
    }
  },
  mounted() {
    // 组件加载
    console.log(this.$store.state.user.userInfo.token);
  }
};
</script>

<style lang="less" scoped>
.form {
  padding: 25px;
}
.form-item {
  margin-bottom: 20px;
}
.form-text {
  font-size: 12px;
  color: #409eff;
  text-align: right;
  line-height: 1;
}
.submit {
  width: 100%;
  margin-top: 10px;
}
</style>