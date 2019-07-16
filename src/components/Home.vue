<template>
  <div id="show_blog">
    <h1 style="font-size: 40px;margin: 50px auto" >博客总览</h1>
    <el-input type="text" placeholder="按标题或内容搜索" v-model="search" style="width: 600px;" prefix-icon="el-icon-search" ></el-input>
    <div class="act" v-for="(blog,index) in filterblogs.reverse() " style="text-indent: 30px;width: 900px;text-align: left; margin:20px auto;background-color: ivory; border-radius: 20px 0 20px 0;overflow: hidden;">
      <router-link :to="/blog/+index" tag="p" style="cursor:pointer">
        <b><p v-color style="text-indent: 30px;font-size: 28px;padding: 30px 20px 0 20px ;padding-bottom: 10px;" >{{blog.title | upcase}}</p></b>
        <p style="font-size: 25px;;padding: 0px 20px 40px 20px; margin-bottom: 20px; ;">{{blog.content| pass}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data(){
      return{
        blogs:[],
        search:''
      }
    },
    created(){
      let obj = AV.Object.createWithoutData('myblog', '5d25fef35dfe8c00082e6ab0');
        obj.fetch()
          .then((data)=>{
            this.blogs =data.attributes.blog;
          })
      // this.$http.get('https://jsonplaceholder.typicode.com/posts')
      //   .then(function (data) {
      //     this.blogs = data.body.slice(0,10)
      //   })
    },

    computed:{
      filterblogs:function () {
       return this.blogs.filter((blog) => {
          return blog.title.match(this.search)||blog.content.match(this.search)
        });
      }
    },
    directives:{
      color:{
        bind(el,binding,vnode){
           el.style.color = "#" + Math.random().toString(16).slice(2,8);
        }
      }
    },
    filters:{
      "upcase" :function (value) {
          return value.toUpperCase();
        },
      "pass": function (value) {
        if (value.length>100)
        return value.slice(0,100) + '...';
        else return value
      }
    }
  }
</script>

<style scoped>
*{
  margin: 0;
  padding:0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin-bottom: 20px ;
  font-family: "楷体";
}
#show_blog{
  width: 1050px;
  margin: 0 auto;
  background: linear-gradient(to bottom, #b3d8ff 0%,#f5dab1 100%);
  padding: 30px 0;
  border-radius: 10px;
}
  input{
    width: 80%;
    height: 50px;
    font-size: 24px;
    margin: 0 auto 30px auto;
    padding-left: 30px; ;
}
  .act:hover{
    transform: scale(1.03,1.03);
  }
</style>
