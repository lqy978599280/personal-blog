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
          <p>创作</p>
        </router-link>
      </li>
      <li class="float">
        <router-link to="/About">
          <p>关于</p>
        </router-link>
      </li>
      <li class="float">
        <router-link to="/Sub">
          <p>提供建议</p>
        </router-link>
      </li>
      <li style="display: flex;">
        <router-link to="/Login" v-if="!show" class="float">
          <p>登陆</p>
        </router-link>
          <a href="#" id="show" v-if="show" class="float author"    >{{authorname}}</a>
        <router-link to="/Login" class="float"@click="init" v-if="show">
          <p>退出</p>
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
  @media (max-width: 5000px) {
    header {
      width: 70vw;
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
      font-size: 1.3rem;
    }

    a {
      text-decoration: none;
      color: lightsalmon;
      font-size: 1.4rem;
    }

    .float:hover {
      transform: translateY(-3px);
      text-shadow: 8px 7px 6px black;
    }

    #show:hover {

      cursor: pointer;
    }
    .author{
      margin-right: 20px;
    }
  }

  @media (max-width: 820px) {
    header {
      width: 100vw;
      background: url("../assets/timg.png") 100% 50% no-repeat;
      background-size: cover;
      text-align: center;
      height: 30vh;
      margin: 0 auto 2vh auto;
      border-radius: 10px;
    }

    ul {
      list-style-type: none;
      margin: 3vw;
      display: flex;
      justify-content: flex-end;
    }

    li {
      margin: 2vw 1vw 0 1vw;
      float: left;
      font-size: 1.2rem;
    }

    a {
      text-decoration: none;
      color: lightsalmon;
      font-size: 1.1rem;
    }

    .float:hover {
      transform: translateY(-3px);
      text-shadow: 8px 7px 6px black;
    }

    #show:hover {

      cursor: pointer;
    }
    .author{
      margin-right: 3vw;
    }
  }

</style>
