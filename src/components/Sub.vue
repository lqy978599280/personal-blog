<template>
  <div style="font-size: 24px;height: 400px; border-radius: 10px">
    <Com>123456</Com>
    <div class="bgound">
      <div class="sub">
        <div class="name"><label>昵称:</label><br>
          <el-input type="text" v-model="com_name"></el-input>
        </div>
        <div class="msg"><label>评论:</label><br>
          <el-input type="textarea" :rows="8" v-model="com_content" style="  margin-top: 20px;
    background-color: ghostwhite; border-radius: 10%;
    font-size: 20px;"></el-input>
        </div>
        <el-button @click="sub">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import Com from './Comment'

  export default {
    name: "Sub",
    components: {
      Com
    },
    data() {
      return {
        com_name: '',
        com_content: ''
      }
    },

    methods: {
      sub: function () {
        if (this.com_name == '') {
          this.$message.error('请输入昵称');
        }
        else if (this.com_content == '') {
          this.$message.error('请输入评论内容');
        }
        else {
          let obj = AV.Object.createWithoutData('myblog', '5d269da45dfe8c00082e8389');
          obj.addUnique("commment", {
            "name": this.com_name,
            "content": this.com_content,
          });
          obj.save()
            .then((data) => {
              this.$message({
                message: '评论成功！                  2秒后刷新显示',
                type: 'success'
              })
              setTimeout(function () {
                this.$router.replace('/Home')
                }, 2000
              )
            })
        }
      }
    }
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .bgound {

    background: url("../assets/简约蓝色背景.jpg") 100% 20% no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    width: 1050px;
    margin: 15px auto;
    padding: 0;
    border-radius: 10px;
  }

  .sub {
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
    padding: 15px 0;
    border-radius: 10px;
  }

  .name, .msg {
    text-align: left;
    font-size: 22px;
    margin: 0 auto;
    width: 600px;
    padding: 5px 0;
  }

  .name > .el-input {
    height: 30px;
    margin-top: 20px;

    font-size: 20px;
  }

  button {
    width: 120px;
    height: 40px;
    font-size: 26px;
    padding: 0;

    margin: 15px 0;
  }
</style>
