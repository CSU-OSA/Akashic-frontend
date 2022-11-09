<template>
  <n-config-provider
    ref="appLayout"
    class="app-layout"
    :theme-overrides="themeOverrides"
  >
    <header>
      <NavigationBar />
    </header>
    <main>
      <RouterView />
    </main>
  </n-config-provider>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";
import NavigationBar from "./components/NavigationBar.vue";
import type { GlobalThemeOverrides, NConfigProvider } from "naive-ui";
import theme from "$/theme/material.json";

const appLayout = ref<InstanceType<typeof NConfigProvider> | null>(null);

const themeOverrides: GlobalThemeOverrides = {
  common: {
    textColorBase: theme.onPrimary,
    bodyColor: theme.primary,
    borderColor: theme.onPrimary,
    hoverColor: theme.onPrimary,
  },
  Button: {
    colorHover: theme.onPrimary,
  },
};
</script>
