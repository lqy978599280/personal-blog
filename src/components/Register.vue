<!--suppress ALL -->
<template>
  <div class="bgRegister">

    <div class="rightlog"> <span style="font-size: 1.3rem;margin-bottom:1rem;color: peachpuff; ">注册成为作者</span>
      <div class="register">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="8rem" class="demo-ruleForm">
          <el-form-item label="作者名" prop="name">
            <el-input type="text" v-model="ruleForm.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Email" prop="email">
            <el-input type="text" v-model="ruleForm.email" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <div style="display: flex;">
              <el-button type="primary" @click="submitForm('ruleForm')" size="mini">提交</el-button>
              <el-button @click="resetForm('ruleForm') " class="color" size="mini">重置</el-button>
              <router-link to="/Login" tag="el-button" class="color el-button--mini" >返回登陆</router-link>
            </div>


          </el-form-item>
        </el-form>

      </div></div>
    <div class="bgbg"></div>
  </div>


</template>

<script>
  const reg=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
  export default {
    name: "Register",
    data() {
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('作者名不能为空'));
        }else {
          callback()
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var checkEmail = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入邮箱'));
        } else if (!reg.test(value)){
          callback(new Error('邮箱格式错误'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          name:'',
          pass: '',
          checkPass: '',
          email:'',
        },
        lRuleForm:[],
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          name: [
            { validator: checkName, trigger: 'blur' }
          ],
          email: [
            { validator: checkEmail, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
          let obj = AV.Object.createWithoutData('myblog', '5d2c38cf4415dc00089bb052');
          let not_register = true
          this.$refs[formName].validate((valid)=>{
            if (valid) {
              obj.fetch()
                .then((data) => {
                  this.lRuleForm = data.attributes.information;
                  for (let i = 0; i < this.lRuleForm.length; i++) {
                    if (this.lRuleForm[i].authorname == this.ruleForm.name) {
                      this.$message.error('该用户名已被注册')
                      not_register = false
                      break
                    }
                  }
                  if (not_register) {
                    this.$store.commit('tranauthor',
                      {
                        "authorname": this.ruleForm.name,
                        "password": this.ruleForm.pass,
                        "email": this.ruleForm.email,
                      }
                    );
                    obj.addUnique("information", this.$store.state.authors);
                    obj.save()
                      .then((data) => {
                        this.$message({
                          message: '注册成功！                  2秒后跳转到登陆界面',
                          type: 'success'
                        })
                        setTimeout(() => {
                          this.$router.push({path: '/Login'})
                        }, 2000)
                      })
                  }
                })
            }else {
              alert('登陆失败!');
              return false;
            }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  }, beforeCreate(){
      localStorage.show_header = false;
      this.$store.state.show_header = false
    }
  }
</script>

<style scoped>
  *{
    font-family: '楷体';
    font-size: 1.5vw;
  }
  @media (max-width: 5000px) {
    .bgRegister{
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: space-around;
    }
    .rightlog{
      width: 52vw;
      max-width: 52vw;
        height:100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background: linear-gradient(to right, mistyrose 0%,white 100%);
      opacity: 0.8;
    }
    .bgbg{
      width: 100vw;
      height: 100vh;
      background: url("../assets/bglog.jpg" ) 85.4% 100% no-repeat;
      -webkit-background-size: cover;
      background-size: cover;
    }
  }
  @media (max-width: 820px) {
    .bgRegister{
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: space-between;
      position: relative;
      align-items: center;
    }
    .bgbg{
      width: 100vw;
      height: 100vh;
      background: url("../assets/bglog.jpg" ) 85.4% 100% no-repeat;
      -webkit-background-size: cover;
      background-size: cover;
    }
    .rightlog{
      width: 52vw;
      max-width: 52vw;
      height:100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background: linear-gradient(to right, mistyrose 0%,white 100%);
      opacity: 0.8;
    }
  }
  @media (max-width: 420px) {
    .bgRegister{
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: space-between;
      position: relative;
      align-items: center;
    }
    .bgbg{
      width: 100vw;
      height: 60vh;
      background: url("../assets/bglog.jpg" ) 50.4% 100% no-repeat;
      -webkit-background-size: cover;
      background-size: cover;
    }
    .rightlog{
      width: 52vw;
      max-width: 52vw;
      height: 60vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background: linear-gradient(to right, mistyrose 0%,white 100%);
      opacity: 0.8;
    }
    .el-form-item{
      padding-left: 2rem;
    }
    .el-input{
      width: 100%
    }
  }


  .color{
    background: linear-gradient(to right,#fff5f4  0%,white 100%);
  }

  .el-button{
    font-size:1.5vw;
  }
</style>
