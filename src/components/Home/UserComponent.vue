<template>
  <n-space vertical>
    <n-space>
      <n-avatar
        :bordered="true"
        round
        size="small"
        :src="user?.avatar || logo"
      />
      <!-- TODO 之后将router to改为个人主页界面的 -->
      <router-link to="/upload">
        <a id="nick" title="前往个人主页">{{ user?.nickName || "guest" }}</a>
      </router-link>
    </n-space>

    <n-hr class="mt-0.5" />
    <n-space vertical>
      <n-space justify="space-between">
        <n-h4>Recent Resource</n-h4>
        <n-button
          type="success"
          text-color="black"
          class="lg:block"
          @click="AddBtnClickEvent"
        >
          Add
        </n-button>
      </n-space>
      <n-input
        placeholder="Find a Resource"
        size="large"
        @input="searchInputChange"
      ></n-input>

      <n-list hoverable clickable>
        <n-list-item
          v-for="item in resourceList()"
          :key="item.id"
          @click="clickEvent"
        >
          <n-thing>
            <template #avatar>
              <n-avatar round size="small">
                <n-icon :component="iconType(item)" />
              </n-avatar>
            </template>
            <template #header>
              {{ item.title }}
            </template>
          </n-thing>
        </n-list-item>
      </n-list>
    </n-space>

    <n-hr class="mt-0.5" />

    <n-space vertical>
      <n-h4>Recent Tags</n-h4>
      <n-space>
        <template v-for="tag in UserTagsDataDemos" :key="tag.id">
          <n-tag :type="tag.display">{{ tag.label }}</n-tag>
        </template>
      </n-space>
    </n-space>
  </n-space>
</template>

<script setup lang="ts">
import type { IResource } from "@/domain/resource.interface";
import { CodeSlash, DocumentTextOutline, EarthSharp } from "@vicons/ionicons5";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useSystemStateStore } from "@/stores/systemStateStore";
import logo from "@/assets/logo.png";
import { useUserSelfResource, useUserTags } from "@/api/Home/HomeData";

const router = useRouter();
const systemStore = useSystemStateStore();
const searchVal = ref("");

const user = systemStore.$state.user;

// 从api中调用函数获取用户自己的资源列表
const UserResourceDataDemos = useUserSelfResource();

const UserTagsDataDemos = useUserTags();

const iconType = (data: IResource) => {
  if (data.type === "code") {
    return CodeSlash;
  } else if (data.type === "wiki") {
    return EarthSharp;
  } else {
    return DocumentTextOutline;
  }
};

const AddBtnClickEvent = (e: MouseEvent) => {
  e.preventDefault();
  router.push("/upload");
};

const clickEvent = (e: MouseEvent) => {
  e.preventDefault();
  alert("Now our project is a dev version, The Resource cant read.");
};

// const nickClickEvent = (e: MouseEvent) => {
//   e.preventDefault()
//   alert('前往个人主页')
//   // 应该跳往个人主页,之后将path更改成个人主页的url
//   router.push('/upload')
// }

const searchInputChange = (v: string) => {
  searchVal.value = v;
  //console.log(searchVal.value)
};

const resourceList = () => {
  if (searchVal.value === "") {
    return UserResourceDataDemos;
  }
  return UserResourceDataDemos.filter((item) => {
    if (item.title.search(searchVal.value) !== -1) {
      return item;
    }
  });
};
</script>

<style scoped>
#nick {
  font-weight: bold;
  font-size: medium;
}
#nick:hover {
  text-decoration: underline;
  color: mediumblue;
}
</style>
