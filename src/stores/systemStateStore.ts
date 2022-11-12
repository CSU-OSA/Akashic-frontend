import type { ISystemState } from "@/domain/systemState.interface";
import type { IUser } from "@/domain/user.interface";
import { defineStore } from "pinia";

const initState = (): ISystemState => ({
  isLogin: false,
  isAdmin: false,
  authUtils: null,
  user: null,
});

export const useSystemStateStore = defineStore("system_state", {
  state: initState,
  actions: {
    setUser(user: IUser) {
      this.user = user;
    },
    login(accessToken: string, state: string) {
      this.authUtils = { accessToken, state };
      this.isLogin = true;
    },
    logout() {
      this.isLogin = false;
      this.authUtils = null;
      this.user = null;
    },
  },
});
