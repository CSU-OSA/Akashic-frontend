import type { Url } from "./base.type";

export interface IPost {
  type: "repo" | "resource";
  description: string;
  url: Url;
}
