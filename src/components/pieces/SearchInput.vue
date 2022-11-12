<template>
  <n-input-group>
    <n-auto-complete
      :value="searchState.$state.searchString"
      :on-update:value="(val:string) => searchState.search(val)"
      :options="searchState.$state.autoCompleteOptions"
    >
      <template
        #default="{ handleInput, handleBlur, handleFocus, value: slotValue }"
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
    <router-link to="/search">
      <n-button>
        <n-icon>
          <SearchSharp />
        </n-icon>
      </n-button>
    </router-link>
  </n-input-group>
</template>
<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { NAutoComplete, NInputGroup, NInput } from "naive-ui";
import { useSearchStore } from "@/stores/searchStore";
import { SearchSharp } from "@vicons/ionicons5";
const searchState = useSearchStore();
</script>
