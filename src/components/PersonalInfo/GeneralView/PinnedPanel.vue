<template>
  <div :class="panelClass">
    <PinnedItems />
  </div>
</template>

<script setup lang="tsx">
import { ref } from "vue";
import type {
  IPersonalPinnedPost,
  IPersonalPinnedRepo,
} from "@/domain/personalInfo.interface";
import { isPost } from "@/domain/personalInfo.interface";
import { ArticleOutlined, AllInboxRound } from "@vicons/material";

const props = defineProps<{
  pinnedItems: (IPersonalPinnedPost | IPersonalPinnedRepo)[];
}>();

const panelClass = ref("");

const PinnedItems = () => {
  if (props.pinnedItems.length === 0) {
    panelClass.value = "pinnedPanel-empty";
    return "这里空空如也";
  }

  panelClass.value = "pinnedPanel";

  const Item = (obj: IPersonalPinnedPost | IPersonalPinnedRepo) => {
    if (isPost(obj))
      return (
        <div class="w-full md:w-1/2 flex flex-col justify-start pl-2 pr-2 pt-1 pb-1">
          <div class="w-full h-full border-gray-300 border rounded-xl p-2">
            <div class="flex flex-row justify-start items-center text-xl font-medium">
              <ArticleOutlined class="w-5 h-5 mr-1" />
              <n-a
                href={obj.url}
                class="transition-colors duration-300 ease-in-out hover:text-indigo-500 break-words"
              >
                {obj.title}
              </n-a>
            </div>
            <div class="text-base">{obj.essential}</div>
            <div class="flex flex-row flex-wrap text-xs">
              <div class="mr-1">关注:{obj.star}</div>
              <div class="mr-1">点赞:{obj.like}</div>
              <div class="mr-1">评论:{obj.comment}</div>
              <div class="mr-1">浏览:{obj.view}</div>
            </div>
          </div>
        </div>
      );
    else
      return (
        <div class="w-full md:w-1/2 flex flex-col justify-start pl-2 pr-2 pt-1 pb-1">
          <div class="w-full h-full border-gray-300 border rounded-xl p-2">
            <div class="flex flex-row justify-start items-center text-xl font-medium ">
              <AllInboxRound class="w-5 h-5 mr-1" />
              <n-a
                href={obj.url}
                class="transition-colors duration-300 ease-in-out hover:text-indigo-500 break-words"
              >
                {obj.title}
              </n-a>
            </div>
            <div class="text-base">{obj.essential}</div>
            <div class="flex flex-row flex-wrap text-xs">
              <div class="mr-1">关注:{obj.star}</div>
              <div class="mr-1">点赞:{obj.like}</div>
            </div>
          </div>
        </div>
      );
  };

  let elements = [];

  for (const i of props.pinnedItems) {
    elements.push(Item(i));
  }

  return elements;
};
</script>

<style scoped>
.pinnedPanel {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0.25rem 0 0.25rem 0;
}

.pinnedPanel-empty {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  border-radius: 10px;
  border-width: 2px;
  border-style: dashed;
  transition: background-color 200ms ease-in-out;
}

.pinnedPanel-empty:hover {
  background-color: #f0f0f0;
  transition: background-color 200ms ease-in-out;
}
</style>
