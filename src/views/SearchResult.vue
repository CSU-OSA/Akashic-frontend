<template>
  <div class="flex flex-col justify-start items-center mt-20">
    <div
      class="w-full flex flex-row justify-items-center items-center mb-8 w-4/5 xl:w-1/2 bg-gray rounded"
    >
      <n-input placeholder="键入搜索关键词" type="text" />
      <n-button>搜索</n-button>
    </div>
    <div
      class="w-screen flex flex-col md:flex-row justify-center items-start pl-10 md:pl-28 pr-10 md:pr-28"
    >
      <div
        class="w-full md:w-1/5 flex flex-col justify-start items-start mr-0 md:mr-5 gap-2"
      >
        Tags
        <TagList :tags="testTagList" />
      </div>
      <div
        class="w-full md:w-4/5 flex flex-col justify-start items-start ml-0 md:ml-5 mb-10 gap-4"
      >
        共检索到{{ resultList.length }}条结果：
        <ResultList :results="resultList" />
      </div>
    </div>
  </div>
</template>

<script setup lang="tsx">
import { NInput, NButton } from "naive-ui";
import type {
  ISearchResultPost,
  ISearchResultRepo,
  ISearchResultWiki,
  ISearchTag,
} from "@/domain/searchResult.interface";
import { isPost, isRepo } from "@/domain/searchResult.interface";
import SearchResultPostItem from "@/components/SearchResult/SearchResultPostItem.vue";
import SearchResultRepositoryItem from "@/components/SearchResult/SearchResultRepositoryItem.vue";
import SearchResultWikiItem from "@/components/SearchResult/SearchResultWikiItem.vue";
import type { TagStatus } from "@/domain/searchResult.type";
import SearchResultPageTagItem from "@/components/SearchResult/SearchResultPageTagItem.vue";
import type { Ref } from "vue";
import { ref } from "vue";

import "@/assets/style/SearchResultPageStyle.css";

const testTagList: ISearchTag[] = [
  {
    display: "文章",
    label: "Post",
    subTags: [
      {
        display: "经验分享",
        label: "expShare",
        subTags: [
          { display: "个人经验", label: "personalExp", subTags: [] },
          { display: "活动经验", label: "actExp", subTags: [] },
        ],
      },
      { display: "笔记", label: "note", subTags: [] },
      { display: "仓库issue", label: "repoIssue", subTags: [] },
    ],
  },
  {
    display: "仓库",
    label: "Repository",
    subTags: [
      { display: "代码库", label: "codeRepo", subTags: [] },
      { display: "其它", label: "other", subTags: [] },
    ],
  },
  {
    display: "Wiki",
    label: "Wiki",
    subTags: [],
  },
];

const resultList: (
  | ISearchResultPost
  | ISearchResultRepo
  | ISearchResultWiki
)[] = [
  {
    type: "Wiki",
    url: "",
    title: "TestWikiPage",
    essential: "TestTestTestTest",
    lastUpdate: new Date(1667742022000),
  },
  {
    type: "Post",
    url: "",
    title: "TestPost",
    essential: "TestTestTestTest",
    lastUpdate: new Date(1667742022000),
    star: 1,
    like: 14,
    comment: 5,
    view: 14,
    author: "TestUser",
  },
  {
    type: "Repository",
    url: "",
    title: "TestRepository",
    essential: "TestTestTestTestTest",
    lastUpdate: new Date(1667569222000),
    star: 19,
    like: 19,
    owner: "TestUser",
  },
];

function TagList({ tags }: { tags: ISearchTag[] }) {
  const tagStatus: Map<string, Ref<TagStatus>> = new Map<
    string,
    Ref<TagStatus>
  >();
  const initTagStatusFunc_GetSubTags = (tags: ISearchTag) => {
    const subTagLabels: string[] = [];
    for (const i of tags.subTags) subTagLabels.push(i.label);
    return subTagLabels;
  };
  const initTagStatusFunc = (tags: ISearchTag[], parentLabel: string) => {
    for (const i of tags) {
      tagStatus.set(
        i.label,
        ref({
          display: i.display,
          label: i.label,
          selected: false,
          partlySelected: false,
          parentTag: parentLabel,
          subTags: initTagStatusFunc_GetSubTags(i),
        })
      );
      initTagStatusFunc(i.subTags, i.label);
    }
  };

  initTagStatusFunc(testTagList, "");

  const elementList = [];
  for (const i of tags) {
    elementList.push(<SearchResultPageTagItem tag={i} tagStatus={tagStatus} />);
  }

  return elementList;
}

function ResultList({
  results,
}: {
  results: (ISearchResultPost | ISearchResultRepo | ISearchResultWiki)[];
}) {
  const elementList = [];

  for (const i of results)
    if (isPost(i)) elementList.push(<SearchResultPostItem obj={i} />);
    else if (isRepo(i))
      elementList.push(<SearchResultRepositoryItem obj={i} />);
    else elementList.push(<SearchResultWikiItem obj={i} />);

  return elementList;
}
</script>
