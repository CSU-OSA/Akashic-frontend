<template>
  <article
    :class="`w-full h-full flex flex-col justify-center items-center p-2 ${t(
      'bg-background'
    )}`"
  >
    <h1
      class="welcome-view-background text-center p-5 font-bold text-9xl md:text-9xl"
    >
      {{ displayText }}
    </h1>
    <div class="flex gap-5 m-10">
      <button
        :class="`${t(
          'bg-primary',
          'text-onPrimary'
        )} font-bold text-2xl pt-3 pb-3 pr-10 pl-10 rounded-full`"
      >
        注册
      </button>
      <button
        :class="`${t(
          'bg-surfaceVariant',
          'text-onSurface'
        )} font-bold text-2xl pt-3 pb-3 pr-10 pl-10 rounded-full`"
      >
        登入
      </button>
    </div>
  </article>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useTheme as t } from "@/utils/themeSelector";
const bannerText = "分享，共赢";
const displayText = ref("");
onMounted(() => {
  Array.from(bannerText).forEach((text, idx) => {
    setTimeout(() => {
      displayText.value += text;
    }, idx * 200);
  });
});
</script>
<style scoped>
.welcome-view-background {
  background: url("earth.gif") text center no-repeat;
  background-color: black;
  color: transparent;
  font-family: "anton";
}
</style>
