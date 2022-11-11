import { RestFul } from "../base";
import config from "$/net/dev.json";

const restful = new RestFul(config.baseURL.api);

export async function login(code: string): Promise<{ accessToken: string }> {
  const res = await restful.get<{ token: string }>("/login", { code });
  return {
    accessToken: res.data.token,
  };
}
