import type {
  ISearchResultPost,
  ISearchResultRepo,
  ISearchResultWiki,
  ISearchTag,
} from "@/domain/searchResult.interface";
import { isPost, isRepo } from "@/domain/searchResult.interface";
import { SearchResultPostItem } from "@/components/SearchResult/SearchResultPostItem";
import { SearchResultRepositoryItem } from "@/components/SearchResult/SearchResultRepositoryItem";
import { SearchResultWikiItem } from "@/components/SearchResult/SearchResultWikiItem";
import type { TagStatus } from "@/components/SearchResult/SearchResultPageTagItem";
import { SearchResultPageTagItem } from "@/components/SearchResult/SearchResultPageTagItem";
import type { Ref } from "vue";
import { ref } from "vue";

import "@/style/SearchResultPageStyle.css";

const tagList: ISearchTag[] = [
  {
    display: "文章",
    label: "Post",
    subTags: [
      {
        display: "标签2",
        label: "tag2",
        subTags: [
          { display: "标签3", label: "tag3", subTags: [] },
          { display: "标签4", label: "tag4", subTags: [] },
        ],
      },
      { display: "标签5", label: "Tag5", subTags: [] },
      { display: "标签6", label: "Tag6", subTags: [] },
    ],
  },
  {
    display: "仓库",
    label: "Repository",
    subTags: [
      { display: "标签8", label: "Tag8", subTags: [] },
      { display: "标签9", label: "Tag9", subTags: [] },
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
  {
    type: "Repository",
    url: "",
    title: "TestRepository2",
    essential: "TestTestTestTestTestTestTestTest",
    lastUpdate: new Date(1667742022000),
    star: 8,
    like: 10,
    owner: "TestUser2",
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
  {
    type: "Repository",
    url: "",
    title: "TestRepository2",
    essential: "TestTestTestTestTestTestTestTest",
    lastUpdate: new Date(1667742022000),
    star: 8,
    like: 10,
    owner: "TestUser2",
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
];

const tagStatus: Map<string, Ref<TagStatus>> = new Map<
  string,
  Ref<TagStatus>
>();

export function SearchResult() {
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

  initTagStatusFunc(tagList, "");

  return (
    <div
      class={"min-h-full min-w-full flex flex-col justify-start items-center"}
    >
      <div
        class={
          "w-full flex flex-row justify-items-center items-center mt-20 mb-8 w-4/5 xl:w-1/2"
        }
      >
        <n-input placeholder={"键入搜索关键词"} type="text" />
        <n-button>搜索</n-button>
      </div>
      <div
        class={
          "w-screen flex flex-col sm:flex-row justify-center items-start pl-10 sm:pl-28 pr-10 sm:pr-28"
        }
      >
        <div
          class={
            "w-full sm:w-1/5 flex flex-col justify-start items-start mr-0 sm:mr-5 gap-2"
          }
        >
          Tags
          {TagList(tagList)}
        </div>
        <div
          class={
            "w-full sm:w-4/5 flex flex-col justify-start items-start ml-0 sm:ml-5 mb-10 gap-4"
          }
        >
          共检索到{resultList.length}条结果：
          {ResultList(resultList)}
        </div>
      </div>
    </div>
  );
}

function TagList(tags: ISearchTag[]) {
  const elementList: JSX.Element[] = [];
  for (const i of tags) {
    elementList.push(<SearchResultPageTagItem tag={i} tagStatus={tagStatus} />);
  }

  return elementList;
}

function ResultList(
  results: (ISearchResultPost | ISearchResultRepo | ISearchResultWiki)[]
) {
  const elementList: JSX.Element[] = [];

  for (const i of results)
    if (isPost(i)) elementList.push(SearchResultPostItem(i));
    else if (isRepo(i)) elementList.push(SearchResultRepositoryItem(i));
    else elementList.push(SearchResultWikiItem(i));

  return elementList;
}
