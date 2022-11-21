<template>
  <div class="mdParser">
    <p v-html="html"></p>
  </div>
</template>

<script setup lang="ts">
import showdown from "showdown";
const converter = new showdown.Converter();
const text = "---\n" +
    "##正则表达式\n" +
    "date: 2022-03-07 14:21:31\n" +
    "\n" +
    "---\n" +
    "\n" +
    "> ​        之前项目中遇到检查密码和手机号格式的正则表达式，都是使用网上现成的，刷题时发现正则还有许多用法\n" +
    "\n" +
    "#### 正则表达式的作用\n" +
    "\n" +
    "* 对于给定的字符串可以判断是否符合正则表达式的逻辑（匹配）\n" +
    "* 从字符串中获取我们想要的特定部分\n" +
    "\n" +
    "#### 两种引擎\n" +
    "\n" +
    "对于同一字符串this is yuekun’s blog,正则表达式为/yu(dkun|ekun|dkum)/\n" +
    "\n" +
    "* NFA工作方式\n" +
    "\n" +
    "​       首先在字符串中查找y然后匹配其后是否为u，如果是u则继续，查找其后是否为d，发现不是然后匹配其后是否为e（此时淘汰dkun选择支）。然后继续看其后是否依次为k，u，n，是n则匹配成功，不是n则匹配是否是m，这里可以看出NFA的工作方式是以正则表达式为标准，反复测试字符串，这样的测试可能测试了很多次。\n" +
    "\n" +
    "* DFA工作方式\n" +
    "\n" +
    "​       DFA会从this的首字母t开始依次查找y，直到定位到y，此时已知y的后面是u，则查看表达式中是否有u，此处恰好有u，然后字符串u后面为e，FDA依次测试表达式，msen不符合要求被淘汰。nsen和nsem符合要求，DFA依次检测字符串，sen时只有nsen分支符合，匹配成功。\n" +
    "\n" +
    "两种引擎的特性区别和对引擎类别的测试可以参考这篇文章[正则引擎解析]([(5条消息) 一次性搞懂JavaScript正则表达式之引擎_江木-CSDN博客_js 正则表达式引擎](https://blog.csdn.net/chjj0904/article/details/99631182))\n" +
    "\n" +
    "### 正则表达式的使用\n" +
    "\n" +
    "> 基本格式：/正则表达式主题/修饰符（可选）\n" +
    "\n" +
    "###### 修饰符\n" +
    "\n" +
    "* i 执行大小写不敏感的匹配\n" +
    "* g 执行全局匹配（会查找所有匹配而不是在找到第一个匹配后停止）\n" +
    "* m 执行多行匹配\n" +
    "\n" +
    "*reg是正则表达式名，str是字符串名*\n" +
    "\n" +
    "###### 正则对象的方法\n" +
    "\n" +
    "* reg.test(str) 判断字符串中是否具有指定模式的子串，返回结果是一个布尔类型的值\n" +
    "\n" +
    "* reg.exec(str) 返回字符串中指定模式的子串，一次只能获取一个与之匹配的结果 \n" +
    "\n" +
    "###### String对象的方法\n" +
    "\n" +
    "* search(reg) 与indexOF类似，返回指定模式的子串在字符串中首次出现的位置\n" +
    "* match(reg) 以数组的形式返回指定模式的字符串，可以以数组形式`返回所有匹配`的结果(需要使用修饰符)\n" +
    "* replace(ref,'替换后字符') 将指定模式的子串进行替换操作\n" +
    "* split(reg) 以制定模式分割字符串，返回结果为数组\n" +
    "\n" +
    "###### 正则表达式的符号\n" +
    "\n" +
    "可以直接参考百度百科，里面介绍的很清楚[百度百科]([正则表达式_百度百科 (baidu.com)](https://baike.baidu.com/item/正则表达式/1700215))\n" +
    "\n" +
    "### 实例分析\n" +
    "\n" +
    "> ```\n" +
    "> ^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,16}$\n" +
    "> ```\n" +
    ">\n" +
    "> //8-16个字符，至少一个大写字母，一个小写字母和一个数字，不包括特殊字符\n" +
    "\n" +
    "^表示开头，$表示结尾。\n" +
    "\n" +
    "?=是非获取匹配，正向肯定预查，*表示重复查找直到结尾，故第一个小括号里保证字符串里有一个大写字母和一个小写字母，第二个小括号确保里面一定有数字,第三个小括号表示接受大小写字母和数字，大括号里面是字符数的限制\n" +
    "\n";
const html = converter.makeHtml(text);
console.log(html);
</script>
<style>
.mdParser {
  line-height: 26px !important;
  list-style-type: circle !important;
  margin-left: 5rem;
  margin-bottom: 5rem;
}
.mdParser a {
  color: #2440b3 !important;
  font-size: 18px;
}
.mdParser li{
  list-style-type: circle !important;
}
.mdParser h1 {
  font-size: 300% !important;
  font-weight: bold !important;
  line-height: 26px !important;
}
.mdParser h2 {
  font-size: 250% !important;
  font-weight: bold !important;
  line-height: 66px !important;
}
.mdParser h3 {
  font-size: 200% !important;
  font-weight: bold !important;
  line-height: 56px !important;
}
.mdParser h4 {
  font-size: 150% !important;
  font-weight: bold !important;
  line-height: 46px !important;
}
.mdParser h5 {
  font-size: 125% !important;
  font-weight: bold !important;
  line-height: 46px !important;
}
.mdParser h6 {
  font-size: 110% !important;
  font-weight: bold !important;
  line-height: 46px !important;
}
.mdParser p{

}
.mdParser code,
blockquote {
  display: block;
  padding: 16px;
  margin: 0 0 24px;
  border-left: 8px solid #dddfe4;
  background: #eef0f4;
  overflow: auto;
  word-break: normal;
}
</style>
