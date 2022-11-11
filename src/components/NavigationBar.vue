<template>
  <nav class="flex flex-col">
    <div class="h-20 flex gap-3 p-5 items-center bg-primary text-onPrimary">
      <RouterLink
        to="/"
        class="text-onPrimary font-bold text-3xl w-full md:w-auto flex justify-center"
        >Akashic</RouterLink
      >
      <div class="hidden md:block">
        <search-input />
      </div>
      <RouterLink
        class="p-2 hidden md:block"
        v-for="link in links"
        :to="link.to"
        :key="link.label"
        >{{ link.label }}</RouterLink
      >
      <RouterLink class="hidden md:block md:ml-auto" to="upload">
        <n-button>上传资源</n-button>
      </RouterLink>
      <n-dropdown
        trigger="click"
        :options="getMenuOptions(systemState.$state.isLogin)"
        @select="handleSelect"
        class="hidden md:block"
      >
        <div class="shrink-0 hidden md:block cursor-pointer">
          <user-avatar :link-disabled="true" />
        </div>
      </n-dropdown>
      <n-button
        class="shrink-0 md:hidden"
        @click="() => (state.showMobileMenu = !state.showMobileMenu)"
      >
        <n-icon>
          <Menu></Menu>
        </n-icon>
      </n-button>
    </div>
    <n-list
      :class="`md:hidden bg-primary pb-5 ${
        state.showMobileMenu ? '' : 'hidden'
      }`"
    >
      <search-input class="bg-primary p-5"></search-input>
      <RouterLink class="p-5" to="upload">
        <n-button>上传资源</n-button>
      </RouterLink>
      <n-menu
        mode="vertical"
        :options="getMobileMenuOptions(systemState.$state.isLogin)"
        @update:value="handleSelect"
      />
    </n-list>
  </nav>
</template>
<script setup lang="tsx">
import type { DropdownOption, MenuOption } from "naive-ui";
import { NButton, NDropdown, NMenu, NIcon, NList } from "naive-ui";
import SearchInput from "@/components/pieces/SearchInput.vue";
import UserAvatar from "@/components/pieces/UserAvatar.vue";
import { Menu } from "@vicons/ionicons5";
import { useSystemStateStore } from "@/stores/systemStateStore";
import type { OnSelect } from "naive-ui/es/auto-complete/src/interface";
import links from "$/links.json";
import { RouterLink, useRouter } from "vue-router";
import { reactive } from "vue";
import { useCasdoor } from "casdoor-vue-sdk";

const { getSigninUrl } = useCasdoor();
const systemState = useSystemStateStore();
const router = useRouter();
const state = reactive({ showMobileMenu: false });

const handleSelect: OnSelect = (key) => {
  switch (key) {
    case "login":
      window.location.href = getSigninUrl();
      break;
    case "logout":
      router.push("/logout");
      break;
    default:
      break;
  }
};

const isOptionValid = (opt: DropdownOption | null): opt is DropdownOption =>
  opt !== null;

const getMenuOptions = (isLogin: boolean) =>
  (
    [
      isLogin
        ? { label: "登出", key: "logout" }
        : { label: "登入", key: "login" },
    ] as (DropdownOption | null)[]
  ).filter(isOptionValid);

const getMobileMenuOptions = (isLogin: boolean): MenuOption[] =>
  (
    [
      ...links.map((link) => ({
        key: link.label,
        label: () => <RouterLink to={link.to}>{link.label}</RouterLink>,
      })),
      {
        key: "user",
        label: () => <UserAvatar displayName={true} linkDisabled={true} />,
        children: [
          isLogin
            ? { label: "登出", key: "logout" }
            : { label: "登入", key: "login" },
        ],
      },
    ] as (MenuOption | null)[]
  ).filter(isOptionValid);
</script>
