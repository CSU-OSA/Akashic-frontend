<template>
  <n-space vertical>
    <n-space>
      <user-avatar
        :display-name="!!(system.$state.isLogin && system.$state.user)"
      />
    </n-space>

    <n-hr class="mt-0.5" />
    <n-space vertical>
      <n-space justify="space-between">
        <n-h4>最近</n-h4>
        <n-button class="lg:block" @click="AddBtnClickEvent"> Add </n-button>
      </n-space>
      <n-input
        placeholder="查找你的帖子/仓库"
        size="large"
        @input="searchInputChange"
      ></n-input>

      <n-list hoverable clickable>
        <n-list-item
          v-for="item in resourceList"
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
      <n-h4>最近常看的标签</n-h4>
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
import { DocumentTextOutline } from "@vicons/ionicons5";
import WikiIcon from "@/components/icons/WikiIcon.vue";
import RepoIcon from "@/components/icons/RepoIcon.vue";
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import { useSystemStateStore } from "@/stores/systemStateStore";
import UserAvatar from "@/components/pieces/UserAvatar.vue";
import { useUserSelfResource, useUserTags } from "@/api/Home/HomeData";

const router = useRouter();
const system = useSystemStateStore();
const searchVal = ref("");

// 从api中调用函数获取用户自己的资源列表
const resourceList = await useUserSelfResource();

console.log(">>>>", resourceList);
computed(() => console.log(resourceList));

const UserTagsDataDemos = useUserTags();

const iconType = (data: IResource) => {
  if (data.type === "code") {
    return RepoIcon;
  } else if (data.type === "wiki") {
    return WikiIcon;
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

// const resourceList = () => {
//   if (searchVal.value === "") {
//     return UserResourceDataDemos;
//   }
//   return UserResourceDataDemos.filter((item) => {
//     if (item.title.search(searchVal.value) !== -1) {
//       return item;
//     }
//   });
// };
</script>
