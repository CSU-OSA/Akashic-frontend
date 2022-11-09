<template>
  <div class="mdParser">
    <p v-html="html"></p>
  </div>
</template>

<script setup lang="ts">

  import showdown from "showdown";
  const converter = new showdown.Converter();
  const text = '# a test for mdParser' + '\n' + '## b';

  const html = converter.makeHtml(text);
  console.log(html);
</script>
<style></style>
