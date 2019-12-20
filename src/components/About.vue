<style scoped>
  @media (max-width: 5000px)  {
    #About {
      width: 70vw;
      background: url("../assets/bgabout.png") 100% 5% no-repeat;
      -webkit-background-size: cover;
      background-size: cover;
      margin: 0 auto;
      border-radius: 10px;
      padding: 40px;
    }

    .el-card {
      background-color: transparent;
    }
    .el-card  div{
      text-indent: 20px;
      margin: 5px 0;
      font-size: 1rem;
    }
    .infoBox{
      text-align: left;
      text-indent: 25px;
      padding-top: 130px;
      width: 800px;
      margin: 0 auto;
    }
    .pSmall{
      margin: 20px auto;
      font-size: 1.2rem;
    }
    .contactBox{
      display: flex;
      position: relative;
      left: 2rem;
      font-size: 1.1rem;
      margin: 1rem 0 1rem 0 ;
    }
  }
  @media (max-width: 820px) {
    #About {
      width: 100vw;
      background: url("../assets/bgabout.png") 100% 5% no-repeat;
      -webkit-background-size: cover;
      background-size: cover;
      border-radius: 10px;
      padding: 2rem;
      margin-top: 1rem;
    }

    .el-card {
      background-color: transparent;
    }
    .el-card  div{
      text-indent: 20px;
      margin: 5px 0;
      font-size: 1rem;
    }
    .infoBox{
      text-align: left;
      text-indent: 1.3rem;
      padding-top: 4rem;
      width: 80vw;
      margin: 0 auto;
    }
    .pSmall{
      margin: 20px auto;
      font-size: 1.1rem;
    }
    .contactBox{
      display: flex;
      position: relative;
      left: 2rem;
      font-size: 1.1rem;
      margin: 1rem 0 1rem 0 ;
    }
  }

</style>
<template>
  <div id="About" >
    <div class="left"></div>
    <div class="right infoBox"  >
      <h2 v-color>一些想法：</h2>
      <p class="pSmall">
        其实我自己也不知道写点什么，第一次做自己的网站，也没有什么很好的idea，至于网站内容和主题,
        我想后续应该会越来越丰富吧， 目前还只是一个雏形，希望随着时间的推移，热情不减，如果大家有什么好的想法可以告诉我啊！
      </p>


      <h2 style="margin: 50px auto 20px auto;" v-color >联系方式：</h2>
      <div class="contactBox" >
        <img src="../assets/i1.png" style="width: 30px;height: 30px;display: inline;">
        <p style="line-height: 30px;"> 978599280@qq.com </p>
      </div>

      <div  class="contactBox" >
        <img src="../assets/i2.png" style="width: 30px;height: 30px;">
        <p>lqy978599280</p>
      </div>

      <h2 style="margin: 2rem auto 1rem auto;"  v-color>网站更新记录：</h2>
      <div class="block">
        <el-timeline>
          <el-timeline-item timestamp="2019/12/20" placement="top">
            <el-card>
              <div>添加底部备案号信息</div>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2019/12/18" placement="top">
            <el-card>
              <div>移动端自适应布局优化</div>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2019/12/13" placement="top">
            <el-card>
              <div>展示页显示作者信息</div>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2019/12/11" placement="top">
            <el-card>
              <div>修改文本编辑器为富文本编辑器</div>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2019/8/5" placement="top">
            <el-card>
              <div>添加了博客分类选择栏以便快速找寻博客</div>
              <div>更改登陆界面布局</div>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2019/8/1" placement="top">
            <el-card>
              <div>添加网站更新记录</div>
              <div>添加了博客编辑时间记录功能(之前的博客由于没这个功能所以时间为空)</div>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2019/7/31" placement="top">
            <el-card>
              <div>更换了导航页面字体</div>
              <div>解决了主页搜索后博客内容不对应的问题</div>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2019/7/13" placement="top">
            <el-card>
              <div>解决网站博客内容无法换行的问题  </div>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>

    </div>
  </div>

</template>

<script>
  export default {
    name: "About",
    directives: {
      color: {
        bind(el, binding, vnode) {
          el.style.color = "#" + Math.random().toString(16).slice(2, 8);
        }
      }
    }
  }
</script>


