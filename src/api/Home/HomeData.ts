import type { IResource } from "@/domain/resource.interface";
import { useGetUserResources } from "@/api/file";
import { useSystemStateStore } from "@/stores/systemStateStore";
import { reactive } from "vue";

// TODO 获取用户自己的资源列表,用来展示在Home的左侧部分
export const useUserSelfResource = async (): Promise<IResource[]> => {
  //Real Code here

  const s = useSystemStateStore();

  const getFiles = useGetUserResources();

  const files = reactive([] as IResource[]);

  const res = await getFiles();

  console.log("res>>>", res);

  res.forEach((e: any, idx) =>
    files.push({
      id: idx,
      description: e.des,
      title: e.filename,
      type: "text",
      url: e.url,
    })
  );

  console.log(res);

  return [
    {
      id: 1,
      title: "软件工程专业wiki",
      description: "",
      type: "wiki",
      url: ""
    },
    {
      id: 2,
      title: "JPetStore-SpringBoot Code",
      description: "",
      type: "code",
      url: "",
    },
    {
      id: 3,
      title: "Java语言设计课程资源",
      description: "",
      type: "text",
      url: "",
    },
    {
      id: 4,
      title: "软件创新大赛萌新攻略",
      description: "",
      type: "text",
      url: "",
    },
    ...files,
  ];
};

// TODO 获取热门资源列表,用来展示在Home右侧
export const useHotResource = async (): Promise<IResource[]> => {
  // Real Code here

  const s = useSystemStateStore();

  const getFiles = useGetUserResources();

  const files = reactive([] as IResource[]);

  const res = await getFiles();

  console.log("res>>>", res);

  res.forEach((e: any, idx) =>
    files.push({
      id: idx,
      description: e.des,
      title: e.filename,
      type: "text",
      url: e.url,
    })
  );

  console.log(res);

  return [
    {
      id: 1,
      title: "软件工程专业wiki",
      description: "这里是软件工程专业的wiki, 正在不断维护中",
      type: "wiki",
      url: "",
    },
    {
      id: 2,
      title: "离散数学课程资源",
      description: "计算机学院离散数学课程相关资源以及学习方法总结",
      type: "text",
      url: "",
    },
    {
      id: 3,
      title: "软件杯竞赛经验分享--xxx",
      description: "来着xxx的软件杯竞赛经验分享",
      type: "text",
      url: "",
    },
    {
      id: 4,
      title: "计科专业wiki",
      description: "这里是计科专业的wiki，正在不断维护中",
      type: "wiki",
      url: "",
    },
    ...files,
  ];
};

// TODO 获取用户历史足迹,展示在Home右侧(数量有限制?)
export const useUserFootPoint = async () => {
  const s = useSystemStateStore();

  const getFiles = useGetUserResources();

  const files = reactive([] as any[]);

  const res = await getFiles();

  console.log("res>>>", res);

  res.forEach((e: any, idx) =>
    files.push({
      id: idx,
      content: e.des,
      title: e.filename,
      type: "text",
      url: e.url,
    })
  );

  console.log(res);

  return files;

  // Real Code here
  // return [
  //   { id: 1, content: "浏览了xxxx", time: "10 minutes ago", url: "" },
  //   { id: 2, content: "访问了xxx", time: "5 hours ago", url: "" },
  //   { id: 3, content: "修改了xxxx", time: "2 days ago", url: "" },
  //   { id: 4, content: "上传了xxxx", time: "2 weeks ago", url: "" },
  //   { id: 5, content: "参与贡献了xxx wiki", time: "1 months ago", url: "" },
  // ];
};

// TODO 获取Home中间部分推荐资源列表
export const useRecommendResource = async (): Promise<IResource[]> => {
  // Real Code here

  const s = useSystemStateStore();

  const getFiles = useGetUserResources();

  const files = reactive([] as IResource[]);

  const res = await getFiles();

  console.log("res>>>", res);

  res.forEach((e: any, idx) =>
    files.push({
      id: idx,
      description: e.des,
      title: e.filename,
      type: "text",
      url: e.url,
    })
  );

  console.log(res);

  return [
    {
      id: 1,
      title: "SE/web课设/JPetStore-Servlet Code",
      description:
        "软件工程专业Web开发技术实验一代码仓库, 由Servlet实现的JPetStore",
      type: "code",
      url: "",
    },
    {
      id: 2,
      title: "SE/web课设/JPetStore-SpringBoot Code",
      description:
        "软件工程专业web课设，基于SpringBoot的前后端分离JPetStore代码仓库",
      type: "code",
      url: "",
    },
    {
      id: 3,
      title: "CS/操作系统课设/OS_CPU-Memory-Scheduling",
      description: "计科专业操作系统课设代码仓库",
      type: "code",
      url: "",
    },
    ...files,
  ];
};

// TODO 获取用户最近的Tags
export const useUserTags = () => {
  return [
    { id: 1, display: "info", label: "软件工程" },
    { id: 2, display: "success", label: "Code" },
    { id: 3, display: "warning", label: "Wiki" },
    { id: 4, display: "success", label: "计算机科学与技术" },
  ];
};
