<template>
  <n-space vertical>
    <n-h4>Latest FootPoint🚶‍</n-h4>
    <n-timeline>
      <n-timeline-item
        v-for="item in demoDataList"
        :key="item.id"
        type="info"
        :content="item.content"
        :time="item.time"
      />
    </n-timeline>
  </n-space>
  <n-divider />

  <n-space vertical>
    <n-h4>Hot Resource🔥</n-h4>
    <n-list hoverable clickable>
      <n-message-provider>
        <n-list-item v-for="item in demoHotDataList" :key="item.id">
          <n-thing
            :title="item.title"
            :description="item.description"
            @click="listItemClickEvent"
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

<script setup lang="ts">
import type { IResource } from "@/domain/resource.interface";
import { CodeSlash, EarthSharp, DocumentTextOutline } from "@vicons/ionicons5"


// demo死数据
const createDemoTimeData = (id: number, content: string, time: string) => {
  return {
    id,
    content,
    time,
  };
};

// demo死数据
const createHotData = (
  args : IResource
) => {
  return args
};
const demoDataList = [
  createDemoTimeData(1, "浏览了xxxx", "10 minutes ago"),
  createDemoTimeData(2, "访问了xxx", "5 hours ago"),
  createDemoTimeData(3, "修改了xxxx", "2 days ago"),
  createDemoTimeData(4, "上传了xxxx", "2 weeks ago"),
  createDemoTimeData(5, "参与贡献了xxx wiki", "1 months ago"),
];

const demoHotDataList = [
  createHotData({id: 1, title: '软件工程专业wiki', description: '这里是软件工程专业的wiki, 正在不断维护中', type: 'wiki', url:'/wiki/xxx'}),
  createHotData({id: 2, title: '离散数学课程资源', description: '计算机学院离散数学课程相关资源以及学习方法总结', type: 'text', url:'/text/xxxx'}),
  createHotData({id: 3, title: '软件杯竞赛经验分享--xxx', description: '来着xxx的软件杯竞赛经验分享', type: 'text', url:'/text/xxxxx'}),
  createHotData({id: 4, title: '计科专业wiki', description: '这里是计科专业的wiki，正在不断维护中', type:'wiki', url: '/url/xxxxxxxx'}),
];

const iconType = (data: IResource) => {
  if(data.type === 'code') {
    return CodeSlash
  }
  else if(data.type === 'wiki') {
    return EarthSharp
  }
  else {
    return DocumentTextOutline
  }
}

const listItemClickEvent = () => {
  alert("Now our project is a dev version, The Resource cant read.");
};
</script>

<style scoped></style>
