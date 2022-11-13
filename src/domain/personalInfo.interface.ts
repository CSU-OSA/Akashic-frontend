export interface IPersonalPinnedPost {
  type: "Post";
  url: "";
  title: string;
  essential: string | null;
  star: number;
  like: number;
  comment: number;
  view: number;
}

export interface IPersonalPinnedRepo {
  type: "Repository";
  url: "";
  title: string;
  essential: string | null;
  star: number;
  like: number;
}

export function isPost(
  obj: IPersonalPinnedPost | IPersonalPinnedRepo
): obj is IPersonalPinnedPost {
  return obj.type === "Post";
}

export function isRepo(
  obj: IPersonalPinnedPost | IPersonalPinnedRepo
): obj is IPersonalPinnedRepo {
  return obj.type === "Repository";
}
