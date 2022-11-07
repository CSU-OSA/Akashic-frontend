import type { ISystemState } from "@/domain/systemState.interface";
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
    login() {
      this.isLogin = true;
    },
    logout() {
      this.isLogin = false;
    },
  },
});
