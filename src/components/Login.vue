<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="">
      </div>
      <el-form :model="loginForm" :rules="loginFormRules" ref="loginForm" class="login_form">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" prefix-icon="iconfont icon-3702mima" type="password"></el-input>
        </el-form-item>
        <el-form-item class="btn_box">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="success" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data(){
      return{
        loginForm:{
          username:'admin',
          password:'123456'
        },
        loginFormRules:{
          username:[
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password:[
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min:6, message: '长度在6个字符', trigger: 'blur' }
          ]
        }
      }
    },
    methods:{
      resetLoginForm(){
        this.$refs.loginForm.resetFields();
      },
      login(){
        this.$refs.loginForm.validate(async (valid)=>{
          if(!valid) return
         const {data}=await this.$http.post('login',this.loginForm)
          console.log(data)
          if(data.meta.status!==200){
          return  this.$message.error('登录失败！')
          }
          this.$message.success('登录成功！')
          window.sessionStorage.setItem('token',data.data.token)
          this.$router.push('/home')
        })
      }
    }
  }
</script>

<style lang="less" scoped>
.login_container{
  background:#2b4b6b;
  height:100%;
  .login_box{
    width:450px;
    height:300px;
    background:#fff;
    border-radius:3px;
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    .avatar_box{
      height: 130px;
      width: 130px;
      border:1px solid #eee;
      border-radius: 50%;
      padding:10px;
      box-shadow:0 0 10px #ddd;
      position:absolute;
      left:50%;
      transform: translate(-50%,-50%);
      background: #fff;
      img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: #eee;
      }
    }
    .login_form{
      position:absolute;
      bottom:0;
      width:100%;
      padding:0 20px;
      box-sizing: border-box;
      .btn_box{
        display: flex;
        justify-content: flex-end;
      }
    }
  }
}
</style>
