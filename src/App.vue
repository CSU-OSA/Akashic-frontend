<template>
  <n-config-provider
    ref="appLayout"
    class="app-layout"
    :theme-overrides="layoutTheme"
  >
    <n-message-provider>
      <header>
        <NavigationBar />
      </header>
      <main>
        <n-config-provider
          class="w-full h-full"
          :theme-overrides="contentTheme"
        >
          <Suspense>
            <RouterView />
          </Suspense>
        </n-config-provider>
      </main>
    </n-message-provider>
  </n-config-provider>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";
import NavigationBar from "./components/NavigationBar.vue";
import type {
  GlobalThemeOverrides,
  NConfigProvider,
  NMessageProvider,
} from "naive-ui";
import theme from "$/themes";

const appLayout = ref<InstanceType<typeof NConfigProvider> | null>(null);

const layoutTheme: GlobalThemeOverrides = {
  common: {
    textColorBase: theme.onPrimary,
    bodyColor: theme.primary,
    borderColor: theme.primaryContainer,
  },
  Button: {
    color: theme.primary,
    textColor: theme.onPrimary,
    colorHover: theme.secondary,
    textColorHover: theme.onSecondary,
    borderHover: theme.secondaryContainer,
    colorFocus: theme.secondary,
    textColorFocus: theme.onSecondary,
    borderFocus: theme.secondaryContainer,
  },
  Menu: {
    color: theme.primary,
    itemTextColor: theme.onPrimary,
    itemColorHover: theme.secondary,
    itemTextColorHover: theme.onSecondary,
  },
  Input: {
    colorFocus: theme.background,
    borderFocus: theme.onBackground,
    textColor: theme.onBackground,
    borderHover: theme.onBackground,
  },
};

const contentTheme: GlobalThemeOverrides = {
  common: {
    errorColor: theme.error,
    primaryColor: theme.primary,
    infoColor: theme.secondary,
  },
  Button: {
    textColor: theme.onBackground,
    colorHover: theme.primary,
    textColorHover: theme.onPrimary,
    borderHover: theme.primaryContainer,
  },
  Card: {
    colorEmbedded: theme.background,
    textColor: theme.onBackground,
  },
  List: {
    colorHover: theme.primary,
    colorHoverModal: theme.primary,
  },
};
</script>
