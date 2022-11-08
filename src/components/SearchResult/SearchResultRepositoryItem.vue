<template>
  <div
    class="w-full flex flex-col justify-start items-stretch border-black border rounded-xl p-2"
  >
    <div class="flex flex-row items-stretch text-2xl font-medium">
      <AllInboxRound class="w-8 h-8 mr-1" />
      <n-a
        :href="props.obj.url"
        class="transition-colors duration-300 ease-in-out hover:text-indigo-500"
      >
        {{ props.obj.title }}
      </n-a>
    </div>
    <div class="text-lg">{{ props.obj.owner }}</div>
    <div class="text-base">{{ props.obj.essential }}</div>
    <div class="flex flex-row flex-wrap text-xs">
      <div class="mr-1">关注:{{ props.obj.star }}</div>
      <div class="mr-1">点赞:{{ props.obj.like }}</div>
      <div class="ml-auto">
        最近更新于{{ props.obj.lastUpdate.toLocaleString() }}
      </div>
    </div>
  </div>
</template>

<script setup lang="tsx">
import { NA } from "naive-ui";
import { AllInboxRound } from "@vicons/material";
import type { ISearchResultRepo } from "@/domain/searchResult.interface";

const props = defineProps<{
  obj: ISearchResultRepo;
}>();
</script>
