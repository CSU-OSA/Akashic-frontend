import type { ISearchResultRepo } from "@/domain/searchResult.interface";

export function SearchResultRepositoryItem(obj: ISearchResultRepo) {
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
            d="M19 3H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 6h-3.14c-.47 0-.84.33-.97.78C14.53 11.04 13.35 12 12 12s-2.53-.96-2.89-2.22c-.13-.45-.5-.78-.97-.78H5V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v3zm-3.13 7H20c.55 0 1 .45 1 1v2c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-2c0-.55.45-1 1-1h4.13c.47 0 .85.34.98.8a2.997 2.997 0 0 0 5.78 0c.13-.46.51-.8.98-.8z"
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
      <div class={"text-lg"}>{obj.owner}</div>
      <div class={"text-base"}>{obj.essential}</div>
      <div class={"flex flex-row flex-wrap text-xs"}>
        <div class={"mr-1"}>关注:{obj.star}</div>
        <div class={"mr-1"}>点赞:{obj.like}</div>
        <div class={"ml-auto"}>最近更新于{obj.lastUpdate.toLocaleString()}</div>
      </div>
    </div>
  );
}
