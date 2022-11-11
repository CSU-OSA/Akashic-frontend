<template>
  <div
    @click="clickHandler"
    :class="`flex gap-5 items-center ${linkDisabled ? '' : 'cursor-pointer'}`"
  >
    <n-avatar :src="system.$state.user?.avatar || logo"></n-avatar>
    <p v-if="displayName">
      {{ system.$state.user?.displayName }}
    </p>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, withDefaults } from "vue";
import { useSystemStateStore } from "@/stores/systemStateStore";
import { useRouter } from "vue-router";
import logo from "@/assets/logo.png";

const router = useRouter();

const props = withDefaults(
  defineProps<{
    displayName?: boolean;
    linkDisabled?: boolean;
  }>(),
  {
    displayName: false,
    linkDisabled: false,
  }
);

const system = useSystemStateStore();
const clickHandler = () => {
  if (props.linkDisabled) {
    return;
  }
  router.push("/personal");
};
</script>
