<template>
  <div id="add">
    <form class="left">
      <p class="title">编辑我的博客</p>
      <label>作者：</label>
      <el-select class="select" v-model="blog.author" >
        <el-option v-for="author in blog.authors" :value="author" style="padding-left: 20px;" key="author.value"></el-option>
      </el-select>
      <label>博客标题：</label>
      <el-input type="text" v-model="blog.title"></el-input>
      <label>博客内容：</label>
      <el-input type="textarea"  v-model="blog.content" :rows="8"></el-input>
      <div class="check">
        <label>博客类型：</label>
        <label>个人情感</label>
        <input type="checkbox" value="个人情感" v-model="blog.topic">
        <label>经验分享</label>
        <input type="checkbox" value="经验分享" v-model="blog.topic">
        <label>艺术创作</label>
        <input type="checkbox" value="艺术创作" v-model="blog.topic">
        <label>其他</label>
        <input type="checkbox" value="其他" v-model="blog.topic">
      </div>
      <el-button :plain="true" @click.prevent="submit">添加博客</el-button>
    </form>
    <div class="right">
      <p >作者：{{blog.author}}</p>
      <p>标题：{{blog.title}}</p>
      <div>主题：
        <ul>
          <li v-for="tp in blog.topic">{{tp}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Add",
    data() {
      return {
        blog: {
          authors: [localStorage.author],
          content: '',
          title: '',
          topic: [],
          author: ''
        },
      }
    },
    methods: {
      submit: function () {
        let obj = AV.Object.createWithoutData('myblog', '5d25fef35dfe8c00082e6ab0');
        if (this.blog.author == '') this.$message.error('请输入作者名!')
        else if (this.blog.title == '') this.$message.error('请输入标题');
        else if (this.blog.content == '') this.$message.error('请输入博客内容');
        else if (this.blog.topic == '') this.$message.error('请选择博客类型');
        else {
          this.$store.commit('tran',
            {
              "title":this.blog.title,
              "content":this.blog.content,
              "topic":this.blog.topic,
              "author":this.blog.author,
            }
          ) ;
          obj.addUnique("blog",this.$store.state.myobjects);
          obj.save()
            .then((data)=>{
              this.show = !this.show;
              this.$message({
                message:'发布成功啦!                         1秒后跳转主页',
                type:'success'
              })
              setTimeout( () =>{
                  this.$router.push({path:'/Home'})
                }, 1000
              )})
          // this.$http.post("https://ebbqln19.api.lncldapi.com/1.1/classes/myblog/data.json",
          //   this.blog
          // )
          //   .then((data)=>{
          //     console.log(data);
          //   }
        }
      }
    }
  }
</script>

<style scoped


>
  * {
    margin: 0 auto;
    font-family: "楷体";
    font-size: 20px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 0;
  }
form *{
  margin: 10px auto;
}
  #add {
    width: 1050px;
    margin: 0 auto;
    background: url("../assets/中医养生中国风荷花水墨手机背景.jpg") 30% 70% no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    height: 1000px;
    display: flex;
    justify-content: space-between;

  }

  label {
    display: block;
  }

  .title {
    text-align:  center;
    font-size: 40px;
    color: goldenrod;
    font-family: "楷体";
    margin-bottom: 60px;
  }

  .left {
    text-align: left;
    margin-top: 120px;
  }

  .select {
    width: 120px;
    height: 40px;
    line-height: 40px;
    font-size: 25px;
    background-color: ghostwhite;
    color: black;
  }
  .check * {
    display: inline-block;
  }

  .check input {
    width: 20px;
    height: 20px;
  }

  button {
    width: 120px;
    height: 40px;
    background-color: gray();
    margin-top: 60px;
  }

  .right {
    text-align: left;
    width: 200px;
    height: 300px;
    line-height: 30px;
    margin-top: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
    }

  .right div {
    display: flex;
  }
  .right *{
  margin: 5px 0px;
  }
  ul {
    list-style-type: none;
    line-height: 20px;
    position: relative;
    top: -5px;
  }


</style>
