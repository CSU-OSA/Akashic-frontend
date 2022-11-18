<template>
  <p>something wrong...</p>
</template>
<script lang="ts">
import type { IUser } from "@/domain/user.interface";
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
import jwt_decode from "jwt-decode";
import { useCasdoor } from "casdoor-vue-sdk";
import { useSystemStateStore } from "@/stores/systemStateStore";
import { useLogin } from "@/api/user";

export default defineComponent({
  async setup() {
    const login = useLogin();
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
      const user = jwt_decode(accessToken) as IUser;
      system.login(accessToken, state as string);
      system.setUser(user);
      router.push("/");
    } else {
      window.location.href = getSigninUrl();
    }
  },
});
</script>
