import type { AutoCompleteOption } from "naive-ui";
import { defineStore } from "pinia";

const initState = () => ({
  searchString: "" as string,
  autoCompleteOptions: [] as AutoCompleteOption[],
});

export const useSearchStore = defineStore("search-store", {
  state: initState,
  actions: {
    async search(str: string) {
      this.searchString = str;
      this.autoCompleteOptions = [{ label: "akashic" }, { label: "search" }];
    },
  },
});
