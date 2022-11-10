<template>
  <div class="mdParser">
    <p v-html="html"></p>
  </div>
</template>

<script setup lang="ts">
  import showdown from "showdown";
  const converter = new showdown.Converter();
  const text = '# a test for *mdP* arser' + '\n' + '## b' + '\n' + '```js' + '哈哈哈';

  const html = converter.makeHtml(text);
  console.log(html);
</script>
<style>
h1{
  font-size: 100% !important;
}
h2{
  font-size: 200% !important;
}

</style>
