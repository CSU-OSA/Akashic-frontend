<template>
  <div class="mdParser">
    <p v-html="html"></p>
  </div>
</template>

<script setup lang="ts">
  import showdown from "showdown";
  const converter = new showdown.Converter();
  const text = '<www.baidu.com>' + '\n' + '# a test for *mdP* arser' + '\n' + '## b' + '\n' + '```js```' + '哈哈哈';

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
.mdParser code{
  display: block;
  padding: 16px;
  margin: 0 0 24px;
  border-left: 8px solid #dddfe4;
  background: #eef0f4;
  overflow: auto;
  word-break: normal;
}
</style>
