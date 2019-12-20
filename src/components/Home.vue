<template>
  <div id="show_blog">
    <h1 style="font-size: 2.2rem;margin: 5vh auto">博客总览</h1>


    <div>
      <el-checkbox-group v-model="checkedTypes" fill="RGB(62,213,200)" size="small">
        <el-checkbox-button v-for="type in types" :label="type" :key="type">{{type}}</el-checkbox-button>
      </el-checkbox-group>
    </div>

    <el-input type="text" placeholder="按标题或内容搜索" v-model="search"
              class="input">
      <el-button class="search" slot="append" icon="el-icon-search" ></el-button>

    </el-input>
    <div class="act blogBox" v-for="(blog,index) in filterblogs "
         >
      <router-link :to="/blog/+index" tag="p" style="cursor:pointer">
        <b class="bottom" style="display: flex; justify-content: space-between;">
          <h1 v-color class="pBig" >
          {{blog.title | upcase}}</h1>
          <p v-color class="pSmall" > 作者：{{blog.author}}</p>
        </b>

        <div v-html="blog.content" id="content" class="pSmall2"  >
          </div>
      </router-link>

    </div>
  </div>
</template>

<script>
  const typeOptions = ['个人情感', '经验分享', '艺术创作', '其他'];

  export default {
    name: "Home",
    data() {
      return {
        blogs: [],
        search: sessionStorage.search ? sessionStorage.search : '',
        checkedTypes: [],
        types: typeOptions,

      }
    },
    updated() {
      sessionStorage.search = this.search;
    },
    created() {
      let obj = AV.Object.createWithoutData('myblog', '5d25fef35dfe8c00082e6ab0');
      obj.fetch()
        .then((data) => {
          this.blogs = data.attributes.blog.reverse();
        })

      // this.$http.get('https://jsonplaceholder.typicode.com/posts')
      //   .then(function (data) {
      //     this.blogs = data.body.slice(0,10)
      //   })
    },

    computed: {
      localBlogs:function(){
       return this.blogs.filter((blog) => {
          return blog.topic.join().match(this.checkedTypes[0]) && blog.topic.join().match(this.checkedTypes[1]) && blog.topic.join().match(this.checkedTypes[2]) && blog.topic.join().match(this.checkedTypes[3])
        });
      },
      filterblogs: function () {
        this.$store.commit('subBlogs',
          this.localBlogs.filter((blog) => {
            return blog.title.match(this.search) || blog.content.match(this.search)
          })
        );
        return this.localBlogs.filter((blog) => {
          return blog.title.match(this.search) || blog.content.match(this.search)
        })
      }
    },
    directives: {
      color: {
        bind(el, binding, vnode) {
          el.style.color = "#" + Math.random().toString(16).slice(2, 8);
        }
      }
    },
    filters: {
      "upcase": function (value) {
        return value.toUpperCase();
      },
      "pass": function (value) {
        // value.replace("\n","\r\n")
        if (value.length > 100)
          return value.slice(0, 100) + '...';
        else return value
      }
    }
  }
</script>


<style scoped>
  * {
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: "楷体";
  }
  @media (max-width:5000px) {
    #show_blog {
      width: 70vw;
      margin: 0 auto;
      background: linear-gradient(to bottom, #b3d8ff 0%, #f5dab1 100%);
      padding: 30px 0;
      border-radius: 10px;
    }

    .blogBox{
    width: 65vw;
    text-align: left;
      margin:20px auto;
      background-color: ivory;
      border-radius: 20px 0 20px 0;
      overflow: hidden;
    }
    .pBig{
      text-indent: 3vw;
      font-size: 2rem;
      padding: 3vh 5vw 1vw 1vw ;
    }
    .input {
      height: 5vh;
      font-size: 1.1rem;
      margin: 30px auto 30px auto;
      padding-left: 30px;;
    }
    .search{
      height: 5vh;
    }
    .el-input{
      width: 40vw;
    }
    .pSmall{
      padding: 4.5vh 12vw 0 20px ;
      font-size: 1.3rem;
      line-height: 1.3rem;
    }
    .pSmall2{
      font-size: 1.3rem;
      padding: 0 50px 40px 50px;
      margin-bottom: 20px;
      white-space: pre-line;
    }
  }
  @media  (max-width:820px) {
    #show_blog {
      width: 100vw;
      margin: 0 auto;
      background: linear-gradient(to bottom, #b3d8ff 0%, #f5dab1 100%);
      padding: 1vh 0;
      border-radius: 10px;
    }
    .blogBox{
      width: 90vw;
      text-align: left;
      margin:0 auto 1rem auto;
      background-color: ivory;
      border-radius: 20px 0 20px 0;
      overflow: hidden;
    }
    .pBig{
      text-indent: 1vw;
      font-size: 1.4rem;
      padding: 4vh 0 0.5rem 5vw ;
    }
    .input {
      height: 0.85rem;
      font-size: 0.85rem;
      line-height: 0.85rem;
      margin: 1rem auto 1rem auto;
    }
    .el-input{
      width: 20rem;
      padding-right: 1.7rem;
    }
    .search{
      height: 0.85rem!important;
    }
    .bottom{
      margin-bottom: 0;
    }
    .pSmall{
      padding: 5.0vh 3.5vw 0 1vw ;
      font-size: 1.1rem;
      line-height: 1.1rem;
    }
    .pSmall2{
      font-size: 1.1rem;
      padding: 0 4vw 0 6vw;
      margin-bottom: 4vh;
      height: 4.8rem;
      white-space: pre-line;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    /*.el-checkbox-button{*/
      /*width: 5rem;*/
    /*}*/

  }





  .act:hover {
    transform: scale(1.02, 1.02);
  }
</style>
<style>
  @media  (max-width: 820px){
    .input input.el-input__inner {
      height: 2rem;
      font-size: 0.85rem;
      line-height: 0.85rem;
    }
    .el-input-group__append{
      padding: 0.4rem 1rem;
    }
  }

</style>
