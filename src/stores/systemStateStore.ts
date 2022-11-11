import type { ISystemState } from "@/domain/systemState.interface";
import type { IUser } from "@/domain/user.interface";
import { defineStore } from "pinia";

const initState = (): ISystemState => ({
  isLogin: false,
  isAdmin: false,
  token: null,
  user: null,
});

export const useSystemStateStore = defineStore("system_state", {
  state: initState,
  actions: {
    setLogin(isLogin: boolean) {
      this.isLogin = isLogin;
      if (!isLogin) {
        this.user = null;
      }
    },
    setUser(user: IUser) {
      this.user = user;
    },
  },
});
