import type { AxiosInstance } from "axios";
import type { AxiosResponse } from "axios";
import type { InjectionKey } from "vue";
import { provide, inject } from "vue";
import config from "$/services";

const RESTFUL_REQUESTER_INJECT_KEY: InjectionKey<AxiosInstance> =
  Symbol.for("$RESTFUL_REQUESTER");

export function useRESTfulService(requester: AxiosInstance) {
  provide(RESTFUL_REQUESTER_INJECT_KEY, requester);
}

export class RESTful {
  private baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  private get =
    (requester: AxiosInstance) =>
    async <R = any, Q = any, P = any>(
      url: string,
      query?: Q,
      params?: P,
      headers?: any
    ) => {
      return requester.get<any, AxiosResponse<R>>(`${this.baseUrl}/${url}`, {
        params: query,
        data: params,
        headers,
      });
    };
  private post =
    (requester: AxiosInstance) =>
    async <R = any, P = any>(url: string, data: P, headers?: any) => {
      return requester.post<any, AxiosResponse<R>>(
        `${this.baseUrl}/${url}`,
        data,
        { headers }
      );
    };
  private put = () => async () => {};
  private delete = () => async () => {};
  public defineRequest<Requester>(
    fn: (params: {
      get: ReturnType<RESTful["get"]>;
      post: ReturnType<RESTful["post"]>;
      put: ReturnType<RESTful["put"]>;
      del: ReturnType<RESTful["delete"]>;
    }) => Requester
  ) {
    return () => {
      const requester = inject(RESTFUL_REQUESTER_INJECT_KEY);

      if (!requester) {
        throw Error(
          "requester instance not provide. (forget `useRESTfulService` ?)"
        );
      }

      return fn({
        get: this.get(requester),
        post: this.post(requester),
        put: this.put(),
        del: this.delete(),
      });
    };
  }
}

const casdoorService = new RESTful(config.baseURL.casdoor);
const akashicService = new RESTful(config.baseURL.api);

export { casdoorService, akashicService };
