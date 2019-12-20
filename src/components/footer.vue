<template>
  <div class="footer" v-if="this.$store.state.show_header">
    © 2019-2020 <a href="#">lqy</a> 版权所有 <a href="http://www.beian.miit.gov.cn">浙ICP备19045397号</a>
  </div>
</template>

<script>
  export default {
    name: "footer"
  }
</script>

<style scoped>
  @media  (max-width: 5000px){

    .footer {
      margin: 1rem 0;
      font-size: 1.2rem;
    }

    .footer a {
      margin: 0 0.5rem;
    }
  }

  @media  (max-width: 820px){

    .footer {
      margin: 1rem 0;
      font-size: 0.8rem;
    }

    .footer a {
      margin: 0 0.5rem;
    }
  }
</style>
