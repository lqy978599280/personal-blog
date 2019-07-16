<template>
  <header v-if="this.$store.state.show_header">

    <ul>
      <li>
        <router-link to="/Home" class="float">
          <p>主页</p>
        </router-link>
      </li>
      <li v-if="show" class="float">
        <router-link to="/Add">
          <p>添加博客</p>
        </router-link>
      </li>
      <li class="float">
        <router-link to="/About">
          <p>关于站长</p>
        </router-link>
      </li>
      <li class="float">
        <router-link to="/Sub">
          <p>创意提供</p>
        </router-link>
      </li>
      <li style="display: flex;">
        <router-link to="/Login" v-if="!show" class="float">
          <p>作者登陆</p>
        </router-link>
          <span id="show" v-if="show"  style=" color: lightsalmon; font-size: 24px;" >{{authorname}}</span>
        <router-link to="/Login" class="float"@click="init"style="margin-left: 20px;" v-if="show">
          <p>退出登录</p>
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        mode: '',
        show_header: '',
        author: '',
        visible: false,
        show: (this.author=='nobody')? false :true
      }
    },
    computed:{
      authorname(){
      return  this.$store.state.authorname
      }
    },
    updated(){
        this.author = localStorage.author
        this.show= (this.author=='nobody')? false :true
    }
    ,methods:{
      init:function () {
        this.author = ''
        localStorage.show_header = false;
        localStorage.author = 'nobody';
        this.$store.state.show_header = false
        this.$store.commit('inputname',this.ruleForm.name);
      }
    }
    // mounted(){
    //     this.mode = this.$store.state.mode;
    //     this.show_header = this.$store.state.show_header
    // }
  }
</script>

<style scoped>
  header {
    width: 1050px;
    background: url("../assets/timg.png") 100% 50% no-repeat;
    background-size: cover;
    text-align: center;
    height: 60vh;
    margin: 0 auto 20px auto;
    border-radius: 10px;
  }

  ul {
    list-style-type: none;
    float: right;
    margin: 30px;
  }

  li {
    float: left;
    margin: 10px 15px 0 15px;
    font-size: 20px;
  }

  a {
    text-decoration: none;
    color: lightsalmon;
    font-size: 26px;
  }

  .float:hover {
    transform: translateY(-3px);
    text-shadow: 8px 7px 6px black;
  }

#show:hover {

  cursor: pointer;
}
</style>
