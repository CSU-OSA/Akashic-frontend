import axios from "axios";
import type { AxiosResponse } from "axios";
import config from "$/services";

export class RestFul {
  requester;
  constructor(baseUrl: string) {
    this.requester = axios.create({ baseURL: baseUrl });
  }
  /**
   *
   * @param url
   * @param query url search params
   * @param params request body params
   */
  async get<R = any, Q = any, P = any>(url: string, query?: Q, params?: P) {
    return this.requester.get<any, AxiosResponse<R>>(url, {
      params: query,
      data: params,
    });
  }

  /**
   *
   * @param url
   * @param params request body params
   */
  async post<R = any, P = any>(url: string, params: P) {
    return this.requester.post<any, AxiosResponse<R>>(url, {
      data: params,
    });
  }
  async put() {}
  async delete() {}
}

const casdoorService = new RestFul(config.baseURL.casdoor);
const akashicService = new RestFul(config.baseURL.api);

export { casdoorService, akashicService };
