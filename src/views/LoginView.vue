<template>
  <p>something wrong...</p>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useCasdoor } from "casdoor-vue-sdk";
import { useSystemStateStore } from "@/stores/systemStateStore";
import { login } from "@/api/user";

export default defineComponent({
  async setup() {
    const route = useRoute();
    const router = useRouter();
    const system = useSystemStateStore();
    const { getSigninUrl } = useCasdoor();

    if (route.params.status === "success") {
      const { code, state } = route.query;
      if (!code || !state) {
        return;
      }

      const { accessToken } = await login(code as string);
      system.login(accessToken, state as string);
      router.push("/");
    } else {
      window.location.href = getSigninUrl();
    }
  },
});
</script>
