<template>
  <n-config-provider
    ref="appLayout"
    class="app-layout hide-aside"
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
import theme from "$/theme.json";

const appLayout = ref<InstanceType<typeof NConfigProvider> | null>(null);

const themeOverrides: GlobalThemeOverrides = {
  common: {
    baseColor: theme.colors.blue,
    textColorBase: theme.colors.white,
    bodyColor: theme.colors.gray,
    borderColor: theme.colors["blue-dark"],
  },
  Button: {
    colorHover: theme.colors["blue-dark"],
    textColor: theme.colors.white,
    textColorHover: theme.colors.white,
    colorFocus: theme.colors["blue-dark"],
  },
};
</script>
