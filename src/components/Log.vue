<template>
  <div class="outter">
    <div class="inner">
      <router-link to="/Home">
        <el-button class="left_button" @click="mode1">预 <br> 览 <br> 模 <br> 式</el-button>
      </router-link>
      <router-link to="/Login">
        <el-button class="right_button">作 <br> 者 <br> 登 <br> 陆</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Log",
    methods: {
      mode1: function () {
        this.$store.commit('mode_hidden');
        this.$store.commit('change_show_header');
      },
    },
    beforeCreate() {
      localStorage.show_header = false;
      localStorage.author = 'nobody';
      this.$store.state.show_header = false
    }
  }
</script>

<style scoped>

    @font-face {
      font-family: 'myfont';
      src: url('../../static/fonts/font5.ttf');
    }
  * {
    font-family: 'myfont';
  }

  .outter {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }



  @media (max-width: 5000px) {
    .outter {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 100vh;
    }
    .inner {
      width: 100vw;
      height: 100vh;
      margin: 0 auto;
      background: url("../assets/bglog.png") no-repeat fixed 50% 50%;
      -webkit-background-size: 100%;
      background-size: 100%;
      line-height: 200px;
      position: relative;
    }
    .el-button {
      width: 5vw;
      max-width: 5vw;
      height: 15vw;
      max-height: 15vw;
      font-size: 2.5vw;
      border: 0 transparent;
      background-color: transparent;
      opacity: 0.5;
      text-align: left;
      padding:  0 2.5vh;
      margin-top: -2vw;
    }

    .left_button {
      position: absolute;
      left: 17.6%;
      top: 49%;
      float: left;
    }

    .right_button {
      position: absolute;
      left: 63.5%;
      top: 48.5%;
      float: right;
    }
  }

  @media (max-width: 420px) {

    .outter {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 100vh;

    }
    .inner {
      width: 100vw;
      height: 100vh;
      margin: 0 auto;
      line-height: 200px;
      position: relative;
      background: url("../assets/bglog.png") no-repeat fixed 30% 50%;
      -webkit-background-size: 150%;
      background-size: 150%;

    }
    .el-button {
      width: 5vw;
      max-width: 5vw;
      font-size: 1rem;
      height: 25vw;
      max-height: 25vw;
      border: 0 transparent;
      background-color: transparent;
      opacity: 0.5;
      text-align: left;
    }

    .left_button {
      position: absolute;
      left: 9%;
      top: 48%;
      float: left;
    }

    .right_button {
      position: absolute;
      left: 77.6%;
      top:48%;
      float: right;
    }
  }

</style>

