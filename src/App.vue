<template>
  <div id="app">
    <Header ></Header>
    <router-view/>
    <myFooter></myFooter>
  </div>
</template>

<script>
  import Header from "./components/Header"
  import myFooter from './components/footer'
export default {
  name: 'App',
  components: {
    Header,
    myFooter
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
#app {
  text-align: center;
}
</style>
