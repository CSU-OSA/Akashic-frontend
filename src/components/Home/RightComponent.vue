<template>
  <n-space vertical>
    <n-h4>足迹🚶‍</n-h4>
    <n-timeline>
      <n-timeline-item
        v-for="item in demoTimeDataList"
        :key="item.id"
        type="info"
        :content="item.content"
        :time="item.time"
      />
    </n-timeline>
  </n-space>
  <n-divider />

  <n-space vertical>
    <n-h4>热门资源🔥</n-h4>
    <n-list hoverable clickable>
      <n-message-provider>
        <n-list-item v-for="item in demoHotDataList" :key="item.id">
          <n-thing
            :title="item.title"
            :description="item.description"
            @click="()=>clickEvent(item)"
            description-style="font-size: 0.75em"
          >
            <template #avatar>
              <n-avatar round size="small">
                <n-icon :component="iconType(item)"></n-icon>
              </n-avatar>
            </template>
          </n-thing>
        </n-list-item>
      </n-message-provider>
    </n-list>
  </n-space>
  <n-divider />
</template>

<script async setup lang="ts">
import type { IResource } from "@/domain/resource.interface";
import { CodeSlash, EarthSharp, DocumentTextOutline } from "@vicons/ionicons5";
import { useHotResource, useUserFootPoint } from "@/api/Home/HomeData";
import { useRouter } from "vue-router";

const router = useRouter();

const demoTimeDataList = await useUserFootPoint();

const demoHotDataList = await useHotResource();

const iconType = (data: IResource) => {
  if (data.type === "code") {
    return CodeSlash;
  } else if (data.type === "wiki") {
    return EarthSharp;
  } else {
    return DocumentTextOutline;
  }
};

const clickEvent = (item: any) => {
  // router TODO code here
  //alert("Now our project is a dev version, The Resource cant read.");
  router.push(`postpage?page=${item.title}&url=${item.url}`);
};
</script>

<style scoped></style>
