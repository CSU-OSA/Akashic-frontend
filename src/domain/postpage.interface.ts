import type { Url } from "./base.type";

export interface IPostPage {
  type: "repo" | "resource";
  description: string;
  url: Url;
}
