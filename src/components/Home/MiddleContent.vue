<template>
  <n-space>
    <n-h1 class="font-semibold">The home for all CSUers —— including you.</n-h1>
    <p>Welcome to Akashic.This is a good place for you to find what you want.</p>
  </n-space>
  <n-divider />

  <n-space vertical>
    <n-h4>* Some interesting things you may be like👍:</n-h4>
    <div>
      <n-list hoverable clickable>
        <n-list-item v-for="item in demoDataList" :key="item.id">
          <MiddleContentItem :id="item.id"
                             :title="item.title"
                             :description="item.description"
                             :type="item.type"
                             :url="item.url" />
        </n-list-item>
      </n-list>
    </div>
  </n-space>

</template>

<script setup lang="ts">
import MiddleContentItem from "./MiddleContentItem.vue"
import type { Url } from "@/domain/base.type";

const NewDemoData = (
  id: number,
  title: string,
  description: string,
  type: string,
  url: Url
) => {
  return {
    id,
    title,
    description,
    type,
    url
  }
}

const demoDataList = [
  NewDemoData(1, 'SE/web课设/JPetStore-Servlet Code', '软件工程专业Web开发技术实验一代码仓库, 由Servlet实现的JPetStore', 'code', '/code/se/xxx'),
  NewDemoData(2, 'SE/web课设/JPetStore-SpringBoot Code', '软件工程专业web课设，基于SpringBoot的前后端分离JPetStore代码仓库', 'code', '/code/se/yyyy'),
  NewDemoData(3, 'CS/操作系统课设/OS_CPU-Memory-Scheduling', '计科专业操作系统课设代码仓库', 'code', '/code/cs/aaa'),
]
</script>

<style scoped></style>
