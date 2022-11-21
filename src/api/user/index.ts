import { casdoorService, akashicService } from "@/api/service";

const useLogin = akashicService.defineRequest(({ get }) => {
  return async (code: string) => {
    const res = await get<{ token: string }>("login", { code });
    return {
      accessToken: res.data.token,
    };
  };
});

const useLogout = casdoorService.defineRequest(({ get }) => {
  return async (accessToken: string, state: string) => {
    const res = await get("api/login/oauth/logout", {
      id_token_hint: accessToken,
      state,
    });
    if (res.data.status === "ok") {
      return res;
    }
    throw Error("logout fail");
  };
});

// export async function getAccount(): Promise<IUser> {
//   const res = await casdoorService.get("/api/get-account");
//   if (res.data.status === "ok") {
//     return res.data.data;
//   }
//   throw Error("get account fail");
// }

export { useLogin, useLogout };
