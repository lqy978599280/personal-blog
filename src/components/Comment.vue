<template>
  <div class="bg">
    <div class="box" v-for="com in coms">
      <p>
        {{com.name}}:<br>
        {{com.content}}
      </p>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Com",
    data() {
      return {
        coms: [],
      }
    },
    created() {
      var obj = AV.Object.createWithoutData('myblog', '5d269da45dfe8c00082e8389');
      obj.fetch()
        .then((data) => {
          this.coms = data.attributes.commment;
          console.log(coms)
        })
    }
  }
</script>

<style scoped>
  .bg{
    background: url("../assets/清明节古风村庄广告背景.jpg") 100% 20% repeat-y;
    -webkit-background-size: cover;
    background-size: cover;
    width: 1050px;
    margin: 0 auto;
    padding: 15px 0;
    border-radius: 10px;
  }
  .box{
    width: 1050px;
    margin: 0 auto;

  }
p{
  margin: 20px auto;
  width: 600px;
  text-align: left;
  border:1px dotted  gainsboro;
  background-color: ghostwhite;
  opacity: 0.8;
  font-size: 20px;
  padding: 10px 10px;
  line-height: 40px;
}
</style>
