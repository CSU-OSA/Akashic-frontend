import type { AxiosInstance } from "axios";
import type { AxiosResponse } from "axios";
import type { InjectionKey } from "vue";
import { provide, inject } from "vue";
import config from "$/services";

export class RESTful {
  private baseUrl: string;
  private serviceInjectKey: InjectionKey<IRequester>;
  constructor(serviceInjectKey: InjectionKey<IRequester>, baseUrl?: string) {
    this.baseUrl = baseUrl || "/";
    this.serviceInjectKey = serviceInjectKey;
  }
  private get =
    (requester: IRequester) =>
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
    (requester: IRequester) =>
    async <R = any, P = any>(url: string, data?: P, headers?: any) => {
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
      const requester = inject(this.serviceInjectKey);

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

interface IRequester {
  get: AxiosInstance["get"];
  post: AxiosInstance["post"];
}

interface IServiceConfig {
  baseURL: string;
}

export function defineRESTfulService(
  serviceName: string,
  config?: IServiceConfig
): [RESTful, (requester: IRequester) => void] {
  const serviceInjectKey: InjectionKey<IRequester> = Symbol.for(serviceName);

  return [
    new RESTful(serviceInjectKey, config?.baseURL),
    (requester: IRequester) => provide(serviceInjectKey, requester),
  ];
}

const [casdoorService, useCasdoorService] = defineRESTfulService(
  "casdoor-service",
  { baseURL: config.baseURL.casdoor }
);

const [akashicService, useAkashicService] = defineRESTfulService(
  "akashic-service",
  { baseURL: config.baseURL.api }
);

const [mockService, useMockService] = defineRESTfulService("mock-service");

export {
  casdoorService,
  useCasdoorService,
  akashicService,
  useAkashicService,
  mockService,
  useMockService,
};
