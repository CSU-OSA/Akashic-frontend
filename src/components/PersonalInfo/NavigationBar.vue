<template>
  <n-tabs
    ref="$nTabsRef"
    type="bar"
    animated
    :barWidth="35"
    @update:value="(value: string|number) => props.valueUpdateHandler(value)"
    v-model:value="thisPosition"
    :default-value="0"
    class="pl-2 pr-2"
  >
    <n-tab :name="0" :tab="overViewTabDiv()" />
    <n-tab :name="1" :tab="postTabDiv(props.postCount)" />
    <n-tab :name="2" :tab="repoTabDiv(props.repoCount)" />
    <n-tab :name="3" :tab="starTabDiv(props.starCount)" />
  </n-tabs>
</template>

<script setup lang="tsx">
import { NTabs, NTab } from "naive-ui";
import {
  ContactPageOutlined,
  ArticleOutlined,
  AllInboxOutlined,
  StarBorderRound,
} from "@vicons/material";
import { ref } from "vue";

const props = defineProps<{
  valueUpdateHandler: Function;
  postCount: number;
  repoCount: number;
  starCount: number;
}>();

const $nTabsRef = ref();
const thisPosition = ref(0);

defineExpose({ $nTabsRef, thisPosition });

const countRender = (count: number) => {
  if (count != 0)
    return (
      <div class="w-fit h-5 pl-2 pr-2 bg-gray-400 rounded-xl ml-2 mr-2 text-white">
        {count}
      </div>
    );
  else return null;
};

const overViewTabDiv = () => {
  return (
    <div class="flex flex-row justify-center items-center">
      <ContactPageOutlined class="w-6 h-6 mr-2" />
      概览
    </div>
  );
};

const postTabDiv = (count: number) => {
  return (
    <div class="flex flex-row justify-center items-center">
      <ArticleOutlined class="w-6 h-6 mr-2" />
      文章
      {countRender(count)}
    </div>
  );
};

const repoTabDiv = (count: number) => {
  return (
    <div class="flex flex-row justify-center items-center">
      <AllInboxOutlined class="w-6 h-6 mr-2" />
      仓库
      {countRender(count)}
    </div>
  );
};

const starTabDiv = (count: number) => {
  return (
    <div class="flex flex-row justify-center items-center">
      <StarBorderRound class="w-6 h-6 mr-2" />
      关注
      {countRender(count)}
    </div>
  );
};
</script>

<style scoped></style>
