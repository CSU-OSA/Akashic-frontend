<template>
<!--  <div class="postpage">-->
<!--    <div class="left">-->
<!--      <UserComponent />-->
<!--    </div>-->
<!--    <div class="remain">-->
<!--      <h1 class="text-5xl p-5">{{title}}</h1>-->
<!--      <a :href="url">download</a>-->
<!--      <mdParser></mdParser>-->
<!--      <download-area></download-area>-->
<!--      <comment></comment>-->
<!--    </div>-->
<!--  </div>-->
  <div id="postpage" class="justify h-full md:flex">
    <div id="info" class="bg-surface p-5 block md:block shrinl-0">
      <PostComponent />
    </div>
    <div id="content" class="bg-surface w-full p-15 block md:block">
      <h1 class="text-5xl">{{title}}</h1>
      <a
        v-if="url.length !== 0"
        class="cursor-pointer text-xl underline"
        :href="url"
        >download</a
      >
      <md-parser></md-parser>
      <download-area></download-area>
      <comment></comment>
    </div>
  </div>
</template>

<script setup lang="ts">
import mdParser from "../components/PostPage/MdParser.vue";
import comment from "../components/PostPage/CommentArea.vue";
import download from "../components/PostPage/DownloadArea.vue";
import PostComponent from "../components/PostPage/PostComponent.vue";
import DownloadArea from "@/components/PostPage/DownloadArea.vue";
import { useRoute } from "vue-router";
import MdParser from "@/components/PostPage/MdParser.vue";

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
