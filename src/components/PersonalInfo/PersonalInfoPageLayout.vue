<template>
  <div class="flex-grow flex flex-col justify-start items-center">
    <div
      class="w-full flex justify-center items-center mt-10 hidden md:flex pc-navBar"
    >
      <div
        class="w-full pl-0 md:pl-28 pr-0 md:pr-28 max-w-screen-xl pc-navBar-inner"
      >
        <div class="hidden md:block pc-navBar-avatarPart"></div>
        <NavigationBar
          ref="$tabBarRefPC"
          :position="tabBarPosition"
          :value-update-handler="tabChangeHandler_PC"
          class="hidden md:block"
          style="position: sticky"
          :post-count="postList.length"
          :repo-count="repoList.length"
          :star-count="starList.length"
        />
      </div>
    </div>
    <div class="w-full contentDiv pl-0 md:pl-28 pr-0 md:pr-28 max-w-screen-xl">
      <BasicInfoBar />
      <div class="w-full flex flex-col">
        <NavigationBar
          ref="$tabBarRefM"
          :position="tabBarPosition"
          :value-update-handler="tabChangeHandler_M"
          class="block md:hidden m-navBar"
          style="position: sticky"
          :post-count="postList.length"
          :repo-count="repoList.length"
          :star-count="starList.length"
        />
        <tabViewDiv />
      </div>
    </div>
  </div>
</template>

<script setup lang="tsx">
import BasicInfoBar from "@/components/PersonalInfo/BasicInfoBar.vue";
import NavigationBar from "@/components/PersonalInfo/NavigationBar.vue";
import GeneralView from "@/components/PersonalInfo/GeneralView/GeneralView.vue";
import PostListView from "@/components/PersonalInfo/PostListView.vue";
import RepoListView from "@/components/PersonalInfo/RepoListView.vue";
import StarListView from "@/components/PersonalInfo/StarListView.vue";
import { nextTick, ref } from "vue";

//需要从后端获取
const postList: any = [];
const repoList: any = [];
const starList: any = [];

const tabBarPosition = ref(0);

const $tabBarRefPC = ref();
const $tabBarRefM = ref();

const tabChangeHandler_PC = (value: string | number) => {
  if (typeof value === "string")
    throw Error("UnexpectedError-value is not number");
  tabBarPosition.value = value;
  $tabBarRefM.value.thisPosition = value;
  nextTick(() => $tabBarRefM.value.$nTabsRef.syncBarPosition());
};

const tabChangeHandler_M = (value: string | number) => {
  if (typeof value === "string")
    throw Error("UnexpectedError-ValueIsNotANumber");
  tabBarPosition.value = value;
  $tabBarRefPC.value.thisPosition = value;
  nextTick(() => $tabBarRefPC.value.$nTabsRef.syncBarPosition());
};

const tabViewDiv = () => {
  let tabViewElement;
  switch (tabBarPosition.value) {
    case 0:
      tabViewElement = <GeneralView />;
      break;
    case 1:
      tabViewElement = <PostListView />;
      break;
    case 2:
      tabViewElement = <RepoListView />;
      break;
    case 3:
      tabViewElement = <StarListView />;
      break;
    default:
      throw Error("UnexpectedError-value");
  }
  return tabViewElement;
};
</script>

<style scoped>
.pc-navBar {
  border-bottom: none;
}

.pc-navBar-inner {
}

.pc-navBar-avatarPart {
  width: 300px;
}

.m-navBar {
  border-bottom: 2px solid #e0e0e0;
}

.contentDiv {
  display: grid;
  grid-template-columns: minmax(0, 100%);
  grid-template-rows: auto auto;
  grid-auto-flow: column;
  gap: 0.5rem;
}

@media (min-width: 768px) {
  .pc-navBar {
    border-bottom: 2px solid #e0e0e0;
  }

  .pc-navBar-inner {
    display: grid;
    grid-template-columns: 300px minmax(0, 980px);
    grid-auto-flow: column;
    gap: 0.5rem;
  }

  .contentDiv {
    display: grid;
    grid-template-columns: 300px minmax(0, 980px);
    grid-template-rows: auto;
    gap: 0.5rem;
  }

  .m-navBar {
    border-bottom: none;
  }
}
</style>
