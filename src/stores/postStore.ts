import type { IPost } from "@/domain/post.interface";
import { defineStore } from "pinia";

const initState = () => ({
  post: [] as IPost[],
});

export const usePostStore = defineStore("post-store", {
  state: initState,
  actions: {
    async fetchPosts() {
      this.post = [];
    },
  },
});
