<template>
  <div class="flex flex-col justify-start items-start basicInfoBar">
    <div class="w-full flex flex-row md:flex-col">
      <div class="flex justify-center items-center">
        <img :src="userInfo.avatar" class="avatar" alt="avatar" />
        <!--TODO:状态展示-->
      </div>
      <div class="ml-5 md:ml-0">
        <div class="text-3xl font-medium">{{ userInfo.userNick }}</div>
        <div class="text-2xl font-light text-gray-400">
          {{ userInfo.userUniqueID }}
        </div>
      </div>
    </div>
    <n-button class="w-full">编辑资料</n-button>
    <div class="flex flex-row justify-center">
      <PeopleAltOutlined class="w-4 h-4 mr-2" />
      <n-a class="mr-1"
        ><span class="font-semibold">{{ userInfo.follower }}</span
        >人关注了你</n-a
      >
      ·
      <n-a class="ml-1"
        >你正在关注<span class="font-semibold">{{ userInfo.following }}</span
        >人</n-a
      >
    </div>
  </div>
</template>

<script setup lang="tsx">
import { NButton, NA } from "naive-ui";
import { PeopleAltOutlined } from "@vicons/material";
import { useBasicPersonalInfo } from "@/api/PersonalInfoPage/PersonalInfoData";

const userInfo = useBasicPersonalInfo();
</script>

<style scoped>
.basicInfoBar {
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
}
.avatar {
  height: 60px;
  width: 60px;
  border-width: 1px;
  border-radius: 100%;
}

@media (min-width: 768px) {
  .basicInfoBar {
    padding-left: 0;
    padding-right: 0;
    width: 300px;
  }

  .avatar {
    margin-top: -50px;
    margin-bottom: 30px;
    z-index: 2;
    height: 260px;
    width: 260px;
    border-width: 3px;
  }
}
</style>
