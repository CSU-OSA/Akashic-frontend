<template>
  <div class="mdParser">
    <p v-html="html"></p>
  </div>
</template>

<script setup lang="ts">
  import showdown from "showdown";
  const converter = new showdown.Converter();
  const text = '+a' + '\n' + '1|2|3' + '\n' +'***' + '\n\n' + '![](https://t7.baidu.com/it/u=3923672523,476572507&fm=218&app=126&size=f242,150&n=0&f=JPEG&fmt=auto?s=EEA4576EA6F0DC73520ADA03020060DD&sec=1668272400&t=20be538c02d25824019fd36ba999bf11)' + '>1' + '\n\n' + '<www.baidu.com>' + '\n' + '# a test for *mdP* arser' + '\n' + '## b' + '\n' + '```js```' + '哈哈哈';

  const html = converter.makeHtml(text);
  console.log(html);
</script>
<style>

.mdParser a{
  color: #2440b3 !important;
  font-size: 18px;
}
.mdParser h1{
  font-size: 100% !important;
}
.mdParser h2{
  font-size: 200% !important;
}
.mdParser code,blockquote{
  display: block;
  padding: 16px;
  margin: 0 0 24px;
  border-left: 8px solid #dddfe4;
  background: #eef0f4;
  overflow: auto;
  word-break: normal;
}
</style>
