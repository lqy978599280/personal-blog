<template>
<div id="singleblog" >
  <h1 v-color style="text-indent: 30px;position: relative;text-align: left;font-size: 28px;padding: 30px 20px 0 20px ;padding-bottom: 10px;">{{blog.title}}</h1>
  <p style="font-size: 18px;float: left;padding-left: 50px;">作者：{{blog.author}}</p>
  <p style="font-size: 18px;float: left;padding-left: 50px;">时间：{{blog.time}}</p>
  <ul  style="list-style-type: none;float: right;font-size: 18px">
    分类：<li style="float: right; padding-right: 40px; ;font-size: 18px;"v-for="tp in blog.topic">{{tp}}</li>
  </ul>
  <article style="text-align:left;font-size: 25px;white-space: pre-line;padding: 40px 50px 40px 50px; margin-bottom: 20px; ;">{{blog.content}}</article>

  <router-link to="/Home"  ><el-button style="margin:  0 0 10px 0;" >返回主页</el-button></router-link>
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
  #singleblog{
    width: 1050px;
    max-width: 1050px;
    margin: 30px auto;
    background-color: snow;
    border: 1px dotted beige;
    border-radius: 20px;
    overflow: hidden;
  }
</style>
