<template>

  <div class="postpage">
    <div class="left">
      <UserComponent />
    </div>
    <div class="remain">
        <mdParser></mdParser>
        <download-area></download-area>
        <comment></comment>
    </div>
  </div>

</template>

<script setup lang="ts">
import mdParser from "../components/PostPage/mdParser.vue";
import comment from "../components/PostPage/CommentArea.vue";
import download from "../components/PostPage/downloadArea.vue"
import UserComponent from "../components/Home/UserComponent.vue";
import DownloadArea from "@/components/PostPage/downloadArea.vue";
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
