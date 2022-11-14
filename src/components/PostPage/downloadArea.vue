<template>
  <div v-for="download in downloads" v-bind:key="download">
    <n-card title=title hoverable>
      {{download.content}}
      <a href={{download.link}}></a>
    </n-card>
  </div>
</template>

<script setup lang="ts">
const downloads = [
  { title: "", author: "wyk",link: "www.baidu.com", content: "这是下载组件", date: "2022/10/1" },
];
</script>

<style scoped></style>
