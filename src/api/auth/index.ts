import { RestFul } from "../base";
import config from "$/net/dev.json";

const restful = new RestFul(config.baseURL.casdoor);

export async function logout(accessToken: string, state: string) {
  return restful.get("/api/login/oauth/logout", {
    id_token_hint: accessToken,
    state,
  });
}
