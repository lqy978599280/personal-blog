# myblog

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
# personal-blog

# 我的第一个网站
第一次做网站 记录一下
首先先放上我的博客网站地址：
[纳兰心事](https://www.lqy.kim)
作为一个伪文艺分子，我选择了古风类型的背景
然后这个博客是一个交互型博客网站，主要功能的话就是三个，一个是所有人的博客展示，二是一个评论系统，三是一个注册登录系统。
原本我想做一个“丧空间”来记录每次心情不好的发泄，当然每个人也都可以发到上面，一下子太多没法做出来，后续在添加功能
网站采用的技术的话就是 vue + vuex + leadcloud

然后下面就是一些我遇到的一些问题或体会
由于我不是边做边记录，所以可以中途遇到的一些问题没法全都记录上来
这里我举几个自己印象最深的问题
1.
url-loader打包图片，背景图片失真！这个我是真不知道怎么回事，网上找了资料，但是大家普遍的问题都是打包之后的路径问题
他们是根本连图片都不显示，而我是背景图片失真，这个难点困扰了我很久，研究再三，我将所有图片都转化成了base64编码后的图片
虽然解决了这个问题，但是这样一来致使css文件变大了很多很多，从几k到3M多，有点夸张。如果大家还有其他什么解决方法，请告知我！
2.
做完网站之后，我在手机上浏览发现，布局几乎乱了一半，这时候就出来了一个响应式布局，我是使用了@media将pc端和移动端的
css分开写，宽度尽量设置成百分比形式，字体设置相对大小，布局采用浮动布局
3.
服务器端的问题零零碎碎一大堆，由于我自己的这个轻量级服务器是我的第一个服务器，所以很多东西也是不太懂，
自己一步一步慢慢搞起来，包括远程连接通过ftp直接上传，https跳转，ssl证书等等
4.
和leadcloud数据库相连，我是在index.html里直接通过script标签直接引入sdk
`<script src="https://unpkg.com/leancloud-storage@^3.14.0-beta.3/dist/av-live-query-min.js"></script>`
然后在main.js直接初始化id和key，然后在需要数据交互的地方进行save和petch。
我这个项目的话是在一个class建了三个不同的对象来存储不同的数据分别是博客内容模块，评论模块以及作者信息模块。
5.
vuex的运用：
因为涉及到不同页面间跳转，所以我把很多数据都放在store里，但是由于要实现的功能不能因为单次刷新而失去作用
所以这里我用到了LocalStorage，它的生命周期是永久的，关闭页面或浏览器之后localStorage中的数据也不会消失。localStorage除非主动删除数据，否则数据永远不会消失。
所以每次每次进入最首页的时候我都会清一下里面的数据，之前也是因为没清数据，导致出现了一些混乱
6.
对与一个“不拘小节”的男生来说，做ui真是一件烦事，而且在选择图片和颜色的时候总是很难选到好看的搭配，element-ui我在项目
里也是有用到，它确实可以让你写标签什么的加速很多，但对你的整体主题搭配没直接帮助。
就写到这，有空再完善~
哦对，我的联系方式在我的网站里也有，希望各位大佬给些建设性的建议~
