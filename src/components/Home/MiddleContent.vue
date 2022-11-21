<template>
  <n-space>
    <n-h1 class="font-semibold"
      >Akashic —— 一个CSUer们共建共享的开源资源库</n-h1
    >
    <p>欢迎来到Akashic！你想要的一切都可以在这里找到~</p>
  </n-space>
  <n-divider />

  <n-space vertical>
    <n-h4>* 你也许会喜欢👍:</n-h4>
    <div>
      <n-list hoverable clickable>
        <n-list-item v-for="item in demoDataList" :key="item.id">
          <MiddleContentItem :prop="item" />
        </n-list-item>
      </n-list>
    </div>
  </n-space>
</template>

<script async setup lang="ts">
import MiddleContentItem from "./MiddleContentItem.vue";
import { useRecommendResource } from "@/api/Home/HomeData";

const demoDataList = await useRecommendResource();
</script>

<style scoped></style>
