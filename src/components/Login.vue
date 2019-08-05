<template>
  <div class="bgLogin">

    <div class="leftlog"><span style="font-size: 3.5vw;font-family: 楷体;color: peachpuff;">登陆</span>
      <br>
      <div class="login">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="作者" prop="name">
            <el-input type="text" v-model="ruleForm.name" autocomplete="on"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item>
            <div style="display:flex;flex-direction: column">
              <div style="display: flex; margin-bottom: 15px">
                <el-button type="primary" @click="submitForm('ruleForm')" size="mini">登陆</el-button>
                <el-button @click="resetForm('ruleForm')" class="color" size="mini">重置</el-button>
                <router-link to="/" tag="el-button" class="color el-button--mini">返回主页</router-link>
              </div>
              <router-link to="/Register" tag="label" style="font-size: 18px;cursor: pointer;">没有作者账户？去注册成为作者</router-link>
            </div>

          </el-form-item>
        </el-form>
      </div>


    </div>
    <div class="bgbglogin"></div>
  </div>

</template>

<script>
  export default {
    name: "Login",
    data() {
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('作者名不能为空'));
        } else {
          callback()
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {

          callback();
        }
      };
      return {
        ruleForm: {
          name: '',
          pass: '',
        },
        lrulefrom: [],
        rules: {
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          name: [
            {validator: checkName, trigger: 'blur'}
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        let obj = AV.Object.createWithoutData('myblog', '5d2c38cf4415dc00089bb052');
        let name_true = false;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            obj.fetch()
              .then((data) => {
                  this.lRuleForm = data.attributes.information;
                  for (let i = 0; i < this.lRuleForm.length; i++) {
                    if (this.lRuleForm[i].authorname == this.ruleForm.name) {
                      name_true = true;
                      if (this.lRuleForm[i].password == this.ruleForm.pass) {
                        this.$message({
                          message: '登陆成功！                  2秒后跳转主页',
                          type: 'success'
                        })
                        setTimeout(() => {
                          this.$router.push({path: '/Home'})
                          this.$store.commit('change_show_header');
                          this.$store.commit('mode_show');
                          localStorage.author = this.ruleForm.name
                          this.$store.commit('inputname', this.ruleForm.name);
                        }, 2000)
                      } else this.$message.error("密码错误")
                    }
                  }
                  if (!name_true) this.$message.error("该作者名不存在")
                }
              )

          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    beforeCreate() {
      localStorage.show_header = false;
      this.$store.state.show_header = false
    }
  }
</script>

<style scoped>
  * {
    font-family: '楷体';
    font-size: 1.5vw;
  }

  @media (max-width: 568px) {
    .bgLogin {
      width: 100vw;
      height: 50vh;
      display: flex;
      justify-content: space-around;

    }
  }

  @media (min-width: 568px) {
    .bgLogin {
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: space-between;
      position: relative;
    }
  }

  .bgbglogin {
    width: 70vw;
    background: url("../assets/bglog.jpg") 85% 100% no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
  }

  .leftlog {
    width: 46vw;
    max-width: 46vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(to right, mistyrose 0%, white 100%);
    opacity: 0.8;
  }
  .color {
    background: linear-gradient(to right, #fff5f4 0%, white 100%);

  }
  .el-button {
    font-size: 1.5vw;
  }
</style>
