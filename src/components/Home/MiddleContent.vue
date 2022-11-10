<template>
  <n-space>
    <n-h1 class="font-semibold">The home for all CSUers —— including you.</n-h1>
    <p>
      Welcome to Akashic.This is a good place for you to find what you want.
    </p>
  </n-space>
  <n-divider />

  <n-space vertical>
    <n-h4>* Some interesting things you may be like👍:</n-h4>
    <div>
      <n-list hoverable clickable>
        <n-list-item v-for="item in demoDataList" :key="item.id">

          <MiddleContentItem :prop="item" />

        </n-list-item>
      </n-list>
    </div>
  </n-space>
</template>

<script setup lang="ts">
import MiddleContentItem from "./MiddleContentItem.vue";
import { useRecommendResource } from "@/api/Home/HomeData";

const demoDataList = useRecommendResource()

</script>

<style scoped></style>
