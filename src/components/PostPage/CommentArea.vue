<template>
  <div v-for="comment in comments" v-bind:key="comment">
    <n-card title=title hoverable>
      {{ comment.content}}
    </n-card>
  </div>
</template>

<script setup lang="ts">
const comments = [
  { title: "", author: "wyk", content: "这是评论组件", date: "2022/10/1" },
];
</script>

<style scoped></style>
