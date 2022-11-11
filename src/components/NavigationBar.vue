<template>
  <nav class="flex flex-col">
    <div class="h-20 flex gap-3 p-5 items-center bg-primary text-onPrimary">
      <RouterLink to="/" class="text-onPrimary font-bold text-3xl"
        >Akashic</RouterLink
      >
      <div>
        <n-input-group>
          <n-auto-complete
            :value="searchState.$state.searchString"
            :on-update:value="(val:string) => searchState.search(val)"
            :options="searchState.$state.autoCompleteOptions"
          >
            <template
              #default="{
                handleInput,
                handleBlur,
                handleFocus,
                value: slotValue,
              }"
            >
              <n-input
                :value="slotValue"
                placeholder="搜索全站"
                @input="handleInput"
                @focus="handleFocus"
                @blur="handleBlur"
                class="bg-transparent"
              />
            </template>
          </n-auto-complete>
          <n-button>
            <n-icon>
              <SearchSharp />
            </n-icon>
          </n-button>
        </n-input-group>
      </div>
      <n-button class="hidden md:block">高级搜索</n-button>
      <RouterLink
        class="p-2 hidden md:block"
        v-for="link in links"
        :to="link.to"
        :key="link.label"
        >{{ link.label }}</RouterLink
      >
      <RouterLink class="ml-auto" to="upload">
        <n-button>上传资源</n-button>
      </RouterLink>
      <n-dropdown
        trigger="click"
        :options="getMenuOptions(systemState.$state.isLogin)"
        @select="handleSelect"
        class="hidden md:block"
      >
        <n-avatar
          class="shrink-0 hidden md:block cursor-pointer"
          :src="systemState.$state.user?.avatar || logo"
        />
      </n-dropdown>
      <n-button
        class="ml-auto shrink-0 md:hidden"
        @click="() => (state.showMobileMenu = !state.showMobileMenu)"
      >
        <n-icon>
          <Menu></Menu>
        </n-icon>
      </n-button>
    </div>
    <n-menu
      :class="`transition-all md:hidden ${
        state.showMobileMenu ? '' : 'hidden'
      }`"
      mode="vertical"
      :options="
        getMobileMenuOptions(
          systemState.$state.isLogin,
          systemState.$state.user?.avatar,
          systemState.$state.user?.nickName
        )
      "
      @update:value="handleSelect"
    />
  </nav>
</template>
<script setup lang="tsx">
import type { DropdownOption, MenuOption } from "naive-ui";
import {
  NButton,
  NDropdown,
  NAutoComplete,
  NInputGroup,
  NInput,
  NMenu,
  NIcon,
} from "naive-ui";
import { Menu } from "@vicons/ionicons5";
import { useSystemStateStore } from "@/stores/systemStateStore";
import { useSearchStore } from "@/stores/searchStore";
import { SearchSharp } from "@vicons/ionicons5";
import logo from "@/assets/logo.png";
import type { OnSelect } from "naive-ui/es/auto-complete/src/interface";
import links from "$/links.json";
import { RouterLink } from "vue-router";
import { reactive } from "vue";
import { useCasdoor } from "casdoor-vue-sdk";

const { getSigninUrl } = useCasdoor();
const systemState = useSystemStateStore();
const searchState = useSearchStore();
const state = reactive({ showMobileMenu: false });

const user = systemState.$state.user;

const MenuUserOption = (avatar?: string, nickName?: string) => (
  <div class="flex gap-5 items-center cursor-pointer">
    <n-avatar src={avatar || logo}></n-avatar>
    <p>{nickName || "未登入"}</p>
  </div>
);

const handleSelect: OnSelect = (key) => {
  switch (key) {
    case "login":
      window.location.href = getSigninUrl();
      break;
    case "logout":
      systemState.setLogin(false);
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

const getMobileMenuOptions = (
  isLogin: boolean,
  avatar?: string,
  nickName?: string
): MenuOption[] =>
  (
    [
      {
        key: "user",
        label: () => MenuUserOption(avatar, nickName),
        children: [
          isLogin
            ? { label: "登出", key: "logout" }
            : { label: "登入", key: "login" },
        ],
      },
      ...links.map((link) => ({
        key: link.label,
        label: () => <RouterLink to={link.to}>{link.label}</RouterLink>,
      })),
    ] as (MenuOption | null)[]
  ).filter(isOptionValid);
</script>
