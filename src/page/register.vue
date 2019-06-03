<template>
  <div class="page-register">
    <div class="header">
      <header>
        <a class="site-logo" href="http://www.meituan.com">美团</a>
        <div class="login">
          <span>已有美团账号？</span>
          <router-link :to="{name:'login'}">登录</router-link>
        </div>
      </header>
    </div>
    <div class="content">
      <el-form
        :model="registerForm"
        status-icon
        :rules="rules"
        ref="registerForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="手机号" prop="userName">
          <el-input type="text" v-model="registerForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="registerForm.password"
            autocomplete="off"
            @input="input"
          ></el-input>
          <div class="pw-strength">
            <div :class="['bar',strongerClass]"></div>
            <div class="letter">
              <span>弱</span>
              <span>中</span>
              <span>强</span>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="确认密码" prop="Password">
          <el-input type="Password" v-model="registerForm.rePassword" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('registerForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div></div>
  </div>
</template>

<script>
import api from '@/api/index.js';
export default {
  data() {
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (value.length < 4 || value.length > 16) {
        callback(new Error("用户名必须为4-16位的字母数字下划线组成"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value.length < 4 || value.length > 16) {
        callback(new Error("密码必须为6-16位的字母数字下划线组成"));
      } else {
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        userName: "",
        password: "",
        rePassword: ""
      },
      strongerClass: "",
      rules: {
        userName: [{ validator: validateUser, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        rePassword: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
     submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
             api.register({
            params:this.registerForm
        }).then((res) => {
            if(res.data.status == 'success'){
                this.$router.push({name: 'login'})
                this.$store.commit('setUserName', this.registerForm.userName)
            }else{
                alert(res.data.msg)
            }
        })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    input() {
      if (this.registerForm.password.length > 20) {
        this.strongerClass = "strong";
      } else if (
        this.registerForm.password.length > 6 &&
        this.registerForm.password.length < 16
      ) {
        this.strongerClass = "normal";
      } else if ((!this.registerForm.password.length)) {
        this.strongerClass = "";
      } else {
        this.strongerClass = "week";
      }
    }
   
  }
};
</script>

<style lang="scss">
@import "@/assets/css/register/index.scss";
</style>


