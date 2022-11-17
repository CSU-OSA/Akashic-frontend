<template>
  <div>
    <n-card
      title="comment"
      :segmented="{
        content: true,
        footer: 'soft',
      }"
    >
      <div v-for="comment in comments" v-bind:key="comment.content">
        <n-card title>
          <template #header>
            {{ comment.author }}
          </template>
          {{ comment.content }}
          <template #footer>
            <n-button quaternary type="like" color="#8492A6"> 点赞 </n-button>
            <n-button quaternary type="favor" color="#8492A6"> 收藏 </n-button>
          </template>
        </n-card>
      </div>
    </n-card>
  </div>
</template>

<script setup lang="ts">
const comments = [
  { title: "", author: "wyk", content: "这是评论1", date: "2022/10/1" },
  { title: "", author: "wyk", content: "这是评论2", date: "2022/10/1" },
];
</script>

<style scoped></style>
