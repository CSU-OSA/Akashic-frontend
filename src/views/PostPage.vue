<template>
  <div class="postpage">
    <div class="left">
      <UserComponent />
    </div>
    <div class="remain">
      <h1 class="text-5xl p-5">{{title}}</h1>
      <a :href="url">download</a>
      <mdParser></mdParser>
      <download-area></download-area>
      <comment></comment>
    </div>
  </div>
</template>

<script setup lang="ts">
import mdParser from "../components/PostPage/MdParser.vue";
import comment from "../components/PostPage/CommentArea.vue";
import download from "../components/PostPage/DownloadArea.vue";
import UserComponent from "../components/Home/UserComponent.vue";
import DownloadArea from "@/components/PostPage/DownloadArea.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const title = route.query.page;
const url = route.query.url as string;
</script>

<style scoped>
.left {
  height: 100%;
  width: 500px;
  background: azure;
  padding: 30px;
  position: sticky;
  top: 0;
}
.remain {
  height: 100%;
  width: 100%;
  padding: 30px;
}
.mdParser {
  min-height: 400px;
}

.postpage {
  display: flex;
  justify-content: space-between;
  height: 100%;
}
</style>
