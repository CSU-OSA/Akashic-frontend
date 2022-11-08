<template>
  <n-space vertical>
    <n-h4>Latest FootPoint</n-h4>
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
    <n-h4>Hot Resource</n-h4>
    <n-list hoverable clickable>
      <n-message-provider>
      <n-list-item v-for="item in demoHotDataList" :key="item.id">
          <n-thing
            :title="item.title"
            :description="item.content"
            @click="listItemClickEvent"
          />
      </n-list-item>
      </n-message-provider>
    </n-list>
  </n-space>
  <n-divider />
</template>

<script setup lang="ts">
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
  id: number,
  title: string,
  content: string,
  url: string
) => {
  return {
    id,
    title,
    content,
    url,
  };
};
const demoDataList = [
  createDemoTimeData(1, "浏览了xxxx", "10 minutes ago"),
  createDemoTimeData(2, "访问了xxx", "5 hours ago"),
  createDemoTimeData(3, "修改了xxxx", "2 days ago"),
  createDemoTimeData(4, "上传了xxxx", "2 weeks ago"),
  createDemoTimeData(5, "参与贡献了xxx wiki", "1 months ago"),
];

const demoHotDataList = [
  createHotData(1, "软件工程课程攻略", "关于软件过程课程的一些经验分享和资源总结", "/resource/class/01"),
  createHotData(2, "离散数学课程资源", "关于计算机学院离散数学课程的资源分享", "/resource/class/08"),
  createHotData(3, "软件杯竞赛经验分享--xxx", "", "/resource/078"),
  createHotData(4, "计科专业wiki", "", "/resource/wiki/125"),
];

const listItemClickEvent = () => {
  alert("Now our project is a dev version, The Resource cant read.")
};
</script>

<style scoped></style>
