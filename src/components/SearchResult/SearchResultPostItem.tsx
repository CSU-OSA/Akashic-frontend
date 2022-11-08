import type { ISearchResultPost } from "@/domain/searchResult.interface";

export function SearchResultPostItem(obj: ISearchResultPost) {
  return (
    <div
      class={
        "w-full flex flex-col justify-start items-stretch border-black border rounded-xl p-2"
      }
    >
      <div class={"flex flex-row items-stretch text-2xl font-medium"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class={"w-8 h-8 mr-1"}
        >
          <path
            d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
            fill="currentColor"
          ></path>
          <path
            d="M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
            fill="currentColor"
          ></path>
        </svg>
        <n-a
          href={obj.url}
          class={
            "transition-colors duration-300 ease-in-out hover:text-indigo-500"
          }
        >
          {obj.title}
        </n-a>
      </div>
      <div class={"text-lg"}>{obj.author}</div>
      <div class={"text-base"}>{obj.essential}</div>
      <div class={"flex flex-row flex-wrap text-xs"}>
        <div class={"mr-1"}>关注:{obj.star}</div>
        <div class={"mr-1"}>点赞:{obj.like}</div>
        <div class={"mr-1"}>评论:{obj.comment}</div>
        <div class={"mr-1"}>浏览:{obj.view}</div>
        <div class={"ml-auto"}>最近更新于{obj.lastUpdate.toLocaleString()}</div>
      </div>
    </div>
  );
}
