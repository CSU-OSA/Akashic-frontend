import type { IUser } from "@/domain/user.interface";
import { casdoorService, akashicService } from "@/api/base";

export async function login(code: string): Promise<{ accessToken: string }> {
  const res = await akashicService.get<{ token: string }>("/login", { code });
  return {
    accessToken: res.data.token,
  };
}

export async function logout(accessToken: string, state: string) {
  const res = await casdoorService.get("/api/login/oauth/logout", {
    id_token_hint: accessToken,
    state,
  });
  if (res.data.status === "ok") {
    return res;
  }
  throw Error("logout fail");
}

export async function getAccount(): Promise<IUser> {
  const res = await casdoorService.get("/api/get-account");
  if (res.data.status === "ok") {
    return res.data.data;
  }
  throw Error("get account fail");
}
