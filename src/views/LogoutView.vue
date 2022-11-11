<template>
  <p>something wrong...</p>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useSystemStateStore } from "@/stores/systemStateStore";
import { logout } from "@/api/auth";

export default defineComponent({
  async setup() {
    const router = useRouter();
    const system = useSystemStateStore();
    const authUtils = system.$state.authUtils;
    if (authUtils === null) {
      return;
    }
    const { accessToken, state } = authUtils;
    const res = await logout(accessToken, state);
    system.logout();
    router.push("/");
  },
});
</script>
