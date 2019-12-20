<template>
  <div id="add">
    <form class="left">
      <p class="title">编辑我的博客</p>
      <label>作者：</label>
      <el-select class="select" v-model="blog.author" >
        <el-option v-for="author in blog.authors" :value="author" style="padding-left: 0.3rem;" key="author.value"></el-option>
      </el-select>
      <label>博客标题：</label>
      <el-input type="text" v-model="blog.title" class="input"></el-input>
      <label>博客内容：</label>
      <wang-edit v-model="blog.content"  @change="change"></wang-edit>
      <div class="check">
        <label style="width: 100%;">博客类型：</label>
        <label style="color: rgba(188,168,203,0.95);">个人情感</label>
        <input style="background-color: #fff;" type="checkbox" value="个人情感" v-model="blog.topic">
        <label style="color: rgba(188,168,203,0.95);">经验分享</label>
        <input style="background-color: #fff;" type="checkbox" value="经验分享" v-model="blog.topic">
        <label style="color: rgba(188,168,203,0.95);">艺术创作</label>
        <input style="background-color: #fff;" type="checkbox" value="艺术创作" v-model="blog.topic">
        <label style="color: rgba(188,168,203,0.95);">其他</label>
        <input style="background-color: #fff;" type="checkbox" value="其他" v-model="blog.topic">
      </div>
      <el-button :plain="true" @click.prevent="submit">添加博客</el-button>
    </form>
    <div class="right">
      <p >作者：{{blog.author}}</p>
      <p>标题：{{blog.title}}</p>
      <p>编辑时间：{{blog.nowTime}}</p>
      <div>主题：
        <ul>
          <li v-for="tp in blog.topic">{{tp}}</li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
  import wangEdit from './wangEdit'
  export default {
    name: "Add",
    components:{
      wangEdit
    },

    data() {
      return {
        blog: {
          authors: [localStorage.author],
          content: '',
          title: '',
          topic: [],
          author: '',
          nowTime:'',
          isClear: false,
          detail:""
        },
      }
    },
    mounted(){
      this.nowTimes()
    }
    ,
    methods: {
      change(val) {
        console.log(val)

      },
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
              "time" :this.blog.nowTime
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
      },
      timeChange:function (t) {
        this.blog.nowTime = `${t.getMonth()+1}/${t.getDate()} ${t.getHours()}:${t.getMinutes()>=10?t.getMinutes():("0"+t.getMinutes())}`

      },
      nowTimes(){
        this.timeChange(new Date())
        let d = setInterval( () =>{
          this.timeChange(new Date())
        },20*1000)
      }
    }
  }
</script>

<style scoped>
  @media  (max-width: 5000px){
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
      width: 70vw;
      margin: 0 auto;
      background: url("../assets/中医养生中国风荷花水墨手机背景.jpg") 0% 30% no-repeat;
      -webkit-background-size: cover;
      background-size: cover;
      /*height: 1000px;*/
      display: flex;
      justify-content: space-between;
      margin-bottom: 5vh;
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
      margin-left: 2vw;
      width: 70%;
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
      margin-bottom: 8vh;
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
      .el-input {
        width: 60%;
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
  }
  @media (max-width: 820px) {
    * {
      margin: 0 auto;
      font-family: "楷体";
      font-size: 1rem;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      border-radius: 4px;
      padding: 0;
    }
    form *{
      margin: 0.3rem auto;
    }
    #add {
      width: 100vw;
      margin: 0 auto;
      background: url("../assets/中医养生中国风荷花水墨手机背景.jpg") 15% 60% no-repeat;
      -webkit-background-size: cover;
      background-size: cover;
      display: flex;
      justify-content: space-between;
      margin-bottom: 5vh;
    }

    label {
      display: block;
    }

    .title {
      text-align:  left;
      font-size: 2rem;
      color: goldenrod;
      font-family: "楷体";
      margin-bottom: 5vh;
      margin-left: 6rem;
    }

    .left {
      text-align: left;
      margin-top: 5vh;
      margin-left: 2vw;
      width: 95vw;
    }

    .select {
      width: 6rem;
      line-height: 1.3rem;
      font-size: 1.3rem;
      background-color: ghostwhite;
      color: black;
      border: 0;
    }
    .check * {
      display: inline-block;
    }
    .check{
      width: 100vw;
    }
    .check input {
      width: 0.9rem;
      height: 0.9rem;
    }

    button {
      width: 5rem;
      height: 1.5rem;
      background-color: gray();
      margin-top: 2rem;
      margin-bottom: 3rem;
    }

    .right {
      display: none
    }

    .right div {
      display: none;
    }

    ul {
      list-style-type: none;

    }
    .input{
      width:20rem;
    }
    .el-select-dropdown__list{
      padding: 0;
    }
    .el-select-dropdown__item{
      height: 2rem;
    }


  }


</style>
