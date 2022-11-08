import type { ISearchResultWiki } from "@/domain/searchResult.interface";

export function SearchResultWikiItem(obj: ISearchResultWiki) {
  return (
    <div
      class={
        "w-full flex flex-col justify-start items-stretch border-black border rounded-xl p-2"
      }
    >
      <div class={"flex flex-row items-stretch text-2xl font-medium"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          class={"w-8 h-8 mr-1"}
        >
          <path
            d="M640 51.2l-.3 12.2c-28.1.8-45 15.8-55.8 40.3c-25 57.8-103.3 240-155.3 358.6H415l-81.9-193.1c-32.5 63.6-68.3 130-99.2 193.1c-.3.3-15 0-15-.3C172 352.3 122.8 243.4 75.8 133.4C64.4 106.7 26.4 63.4.2 63.7c0-3.1-.3-10-.3-14.2h161.9v13.9c-19.2 1.1-52.8 13.3-43.3 34.2c21.9 49.7 103.6 240.3 125.6 288.6c15-29.7 57.8-109.2 75.3-142.8c-13.9-28.3-58.6-133.9-72.8-160c-9.7-17.8-36.1-19.4-55.8-19.7V49.8l142.5.3v13.1c-19.4.6-38.1 7.8-29.4 26.1c18.9 40 30.6 68.1 48.1 104.7c5.6-10.8 34.7-69.4 48.1-100.8c8.9-20.6-3.9-28.6-38.6-29.4c.3-3.6 0-10.3.3-13.6c44.4-.3 111.1-.3 123.1-.6v13.6c-22.5.8-45.8 12.8-58.1 31.7l-59.2 122.8c6.4 16.1 63.3 142.8 69.2 156.7L559.2 91.8c-8.6-23.1-36.4-28.1-47.2-28.3V49.6l127.8 1.1l.2.5z"
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
      <div class={"text-base"}>{obj.essential}</div>
      <div class={"flex flex-row flex-wrap text-xs"}>
        <div class={"ml-auto"}>最近更新于{obj.lastUpdate.toLocaleString()}</div>
      </div>
    </div>
  );
}
