练习来自于：
<a href="https://freecodecamp.cn/challenges/build-a-random-quote-machine" title="Build a Random Quote Machine">随机名言生成器</a>

可参考余博伦大佬的教程：
<a href="https://yubolun.com/fcc-random-quote-machine/">【FCC系列教程】随机名言获取器</a>

知识点：
1、html结构
  body   //背景色变化
    container  //固定背景色
      blockquote  //字体颜色变化，及内容的获取
      div.btn  //
        button  //每个按钮 背景色变化  ，字体颜色白色固定
        button  //前2个按钮是分享按钮， 后一个是刷新（再次）获取名言
        button
  footer
  
 2、功能
   颜色的随机  （颜色值数组，再随机索引）
   名言的随机 （第三方api：https://zhaiyan.acman.cn/api/rand?encode=json  或者  https://v1.hitokoto.cn/?encode=json）
   分享功能  
   
3、注意点
  颜色之间的过渡效果
  按钮的字体图标 （https://icomoon.io/ 打开有些慢）
  左上角的双引号 （下移与字体水平）
  
4、最终效果的预览
   <a href="https://caifu23.github.io/myFCC/fcc01/">随机名言生成器</a>
  
