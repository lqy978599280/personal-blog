<template>
<div id="singleblog" >
  <h1 v-color class="title" >{{blog.title}}</h1>
  <p class="info" >作者：{{blog.author}}</p>
  <p class="info" >时间：{{blog.time}}</p>
  <ul class="class"  >
   <li class="info" v-for="tp in blog.topic"> 分类：{{tp}}</li>
  </ul>
  <div v-html="blog.content" class="content" ></div>

  <router-link to="/Home"  ><el-button size="mini" style="margin:  0 0 10px 0;" >返回主页</el-button></router-link>
</div>
</template>

<script>
    export default {
        name: "Singleblog",
      data(){
          return{
            id:this.$route.params.id ,
            blog:{}
          }
      },
      created(){
        // let obj = AV.Object.createWithoutData('myblog', '5d25fef35dfe8c00082e6ab0');
        // obj.fetch()
        //   .then((data)=>{
        //     this.blog =data.attributes.blog.reverse()[this.id];
        //   })
        this.blog =this.$store.state.blogs[this.id];
      },
      directives:{
        color:{
          bind(el,binding,vnode){
            el.style.color = "#" + Math.random().toString(16).slice(2,8);
          }
        }
      },
    }
</script>

<style scoped>
  @media (max-width: 5000px) {
    #singleblog{
      width: 70vw;
      max-width: 70vw;
      margin: 30px auto;
      background-color: snow;
      border: 1px dotted beige;
      border-radius: 20px;
      overflow: hidden;
    }
    .title{
      text-indent: 30px;
      position: relative;
      text-align: left;
      font-size: 1.8rem;
      padding: 30px 20px 10px 20px ;
    }
    .info{
     font-size: 1.1rem;
      float: left;
      padding: 0 50px
    }
    .class{
      list-style-type: none;
      float: right;
      font-size: 1.1rem
    }
    .content{
      text-align:left;
      font-size: 1.4rem;
      white-space: pre-line;
      padding: 40px 50px 40px 50px;
      margin-bottom: 20px;
    }
  }
  @media (max-width: 820px) {
    #singleblog {
      width: 100vw;
      max-width: 100vw;
      margin: 4vh auto;
      background-color: snow;
      border: 1px dotted beige;
      border-radius: 20px;
      overflow: hidden;
    }
    .title{
      text-indent: 0;
      position: relative;
      padding: 1rem 1.1rem ;
      text-align: left;
      font-size: 1.4rem;
    }
    .info{
      font-size: 0.9rem;
      float: left;
      padding-left: 1.4rem

    }
    .class{
      list-style-type: none;
      float: left;
      font-size: 0.9rem
    }
    .content{
      display: block;
      text-align:left;
      font-size: 0.9rem;
      white-space: pre-line;
      padding: 3rem 1.5rem;
      margin-bottom: 20px;
    }
  }
</style>
