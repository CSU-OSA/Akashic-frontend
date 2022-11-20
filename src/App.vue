<template>
  <n-config-provider
    ref="appLayout"
    class="app-layout"
    :theme-overrides="
      systemState.$state.isDarkMode ? layoutTheme_Dark : layoutTheme_Light
    "
  >
    <n-message-provider>
      <header>
        <NavigationBar />
      </header>
      <main>
        <n-config-provider
          class="w-full h-full bg-background dark:bg-dark-background"
          :theme-overrides="
            systemState.$state.isDarkMode
              ? contentTheme_Dark
              : contentTheme_Light
          "
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
import { ref, nextTick } from "vue";
import { RouterView, useRouter } from "vue-router";
import Axios from "axios";
import NavigationBar from "./components/NavigationBar.vue";
import type {
  GlobalThemeOverrides,
  NConfigProvider,
  NMessageProvider,
} from "naive-ui";
import Theme from "$/themes";
import { useSystemStateStore } from "@/stores/systemStateStore";
import { useCasdoorService, useAkashicService } from "./api/service";

const systemState = useSystemStateStore();
const router = useRouter();

const requestor = Axios.create();
requestor.interceptors.request.use((config) => ({
  ...config,
  headers: {
    Authorization: systemState.$state.authUtils?.accessToken,
  },
}));
useCasdoorService(requestor);
useAkashicService(requestor);

router.beforeEach((to) => {
  if (
    !systemState.$state.isLogin &&
    to.path !== "/welcome" &&
    to.path.indexOf("login") === -1
  ) {
    return { path: "/welcome" };
  }
});

nextTick(() => {
  if (window.matchMedia("(prefers-color-scheme: dark)")) {
    systemState.setDarkMode(
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        systemState.setDarkMode(event.matches);
      });
  } else {
    systemState.setDarkMode(false);
  }
});

const appLayout = ref<InstanceType<typeof NConfigProvider> | null>(null);

const layoutTheme_Light: GlobalThemeOverrides = {
  common: {
    textColorBase: Theme.lightTheme.onPrimary,
    bodyColor: Theme.lightTheme.primary,
    borderColor: Theme.lightTheme.primaryContainer,
  },
  Button: {
    color: Theme.lightTheme.primary,
    textColor: Theme.lightTheme.onPrimary,
    colorHover: Theme.lightTheme.secondary,
    textColorHover: Theme.lightTheme.onSecondary,
    borderHover: Theme.lightTheme.secondaryContainer,
    colorFocus: Theme.lightTheme.secondary,
    textColorFocus: Theme.lightTheme.onSecondary,
    borderFocus: Theme.lightTheme.secondaryContainer,
  },
  Menu: {
    color: Theme.lightTheme.primary,
    itemTextColor: Theme.lightTheme.onPrimary,
    itemColorHover: Theme.lightTheme.secondary,
    itemTextColorHover: Theme.lightTheme.onSecondary,
  },
  Input: {
    colorFocus: Theme.lightTheme.background,
    borderFocus: Theme.lightTheme.onBackground,
    textColor: Theme.lightTheme.onBackground,
    borderHover: Theme.lightTheme.onBackground,
  },
};

const contentTheme_Light: GlobalThemeOverrides = {
  common: {
    errorColor: Theme.lightTheme.error,
    primaryColor: Theme.lightTheme.primary,
    infoColor: Theme.lightTheme.secondary,
  },
  Button: {
    textColor: Theme.lightTheme.onBackground,
    colorHover: Theme.lightTheme.primary,
    textColorHover: Theme.lightTheme.onPrimary,
    borderHover: Theme.lightTheme.primaryContainer,
  },
  Card: {
    colorEmbedded: Theme.lightTheme.background,
    textColor: Theme.lightTheme.onBackground,
  },
  List: {
    colorHover: Theme.lightTheme.primary,
    colorHoverModal: Theme.lightTheme.primary,
  },
};

const layoutTheme_Dark: GlobalThemeOverrides = {
  common: {
    textColorBase: Theme.darkTheme.onPrimary,
    bodyColor: Theme.darkTheme.primary,
    borderColor: Theme.darkTheme.primaryContainer,
  },
  Button: {
    color: Theme.darkTheme.primary,
    textColor: Theme.darkTheme.onPrimary,
    colorHover: Theme.darkTheme.secondary,
    textColorHover: Theme.darkTheme.onSecondary,
    borderHover: Theme.darkTheme.secondaryContainer,
    colorFocus: Theme.darkTheme.secondary,
    textColorFocus: Theme.darkTheme.onSecondary,
    borderFocus: Theme.darkTheme.secondaryContainer,
  },
  Menu: {
    color: Theme.darkTheme.primary,
    itemTextColor: Theme.darkTheme.onPrimary,
    itemColorHover: Theme.darkTheme.secondary,
    itemTextColorHover: Theme.darkTheme.onSecondary,
  },
  Input: {
    colorFocus: Theme.darkTheme.background,
    borderFocus: Theme.darkTheme.onBackground,
    textColor: Theme.darkTheme.onBackground,
    borderHover: Theme.darkTheme.onBackground,
  },
};

const contentTheme_Dark: GlobalThemeOverrides = {
  common: {
    errorColor: Theme.darkTheme.error,
    primaryColor: Theme.darkTheme.primary,
    infoColor: Theme.darkTheme.secondary,
  },
  Button: {
    textColor: Theme.darkTheme.onBackground,
    colorHover: Theme.darkTheme.primary,
    textColorHover: Theme.darkTheme.onPrimary,
    borderHover: Theme.darkTheme.primaryContainer,
  },
  Card: {
    colorEmbedded: Theme.darkTheme.background,
    textColor: Theme.darkTheme.onBackground,
  },
  List: {
    colorHover: Theme.darkTheme.primary,
    colorHoverModal: Theme.darkTheme.primary,
  },
};
</script>
