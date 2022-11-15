<template>
  <div :class="`${t('bg-primary')}`">
    <md-outlined-button>fuck you</md-outlined-button>
  </div>
</template>

<script setup lang="ts">
import HomeLayout from "@/components/Home/HomeLayout.vue";
import { useThemeSelect as t } from "@/utils/themeSelector";
import { MdOutlinedButton } from "@material/web/button/outlined-button";
</script>

<style scoped></style>
