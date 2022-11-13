<template>
  <div :class="panelClass">
    <SelfIntro />
  </div>
</template>

<script setup lang="tsx">
import { ref } from "vue";

const props = defineProps<{
  personalIntro: string;
}>();

const panelClass = ref("");

const SelfIntro = () => {
  if (!props.personalIntro || props.personalIntro === "") {
    panelClass.value = "selfIntroPanel-empty";
    return <span style="color: #D8FBD8">世界...遗忘我...</span>;
  }

  panelClass.value = "selfIntroPanel";

  //TODO:引入Markdown渲染器

  return props.personalIntro;
};
</script>

<style scoped>
.selfIntroPanel {
  width: 100%;
}

.selfIntroPanel-empty {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  margin: 0.5rem;
  border-radius: 10px;
  border-width: 2px;
  border-style: dashed;
  transition: background-color 200ms ease-in-out;
}

.selfIntroPanel-empty:hover {
  background-color: #f0f0f0;
  transition: background-color 200ms ease-in-out;
}

@media (min-width: 768px) {
  .pinnedPanel {
  }
}
</style>
