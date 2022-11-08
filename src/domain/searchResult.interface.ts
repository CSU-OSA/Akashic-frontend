export interface ISearchTag {
  display: string;
  label: string;
  subTags: ISearchTag[];
}

export interface ISearchResultPost {
  type: "Post";
  url: "";
  title: string;
  essential: string | null;
  lastUpdate: Date;
  star: number;
  like: number;
  comment: number;
  view: number;
  author: string;
}

export interface ISearchResultRepo {
  type: "Repository";
  url: "";
  title: string;
  essential: string | null;
  lastUpdate: Date;
  star: number;
  like: number;
  owner: string;
}

export interface ISearchResultWiki {
  type: "Wiki";
  url: "";
  title: string;
  essential: string | null;
  lastUpdate: Date;
}

export function isPost(
  obj: ISearchResultPost | ISearchResultRepo | ISearchResultWiki
): obj is ISearchResultPost {
  return obj.type === "Post";
}

export function isRepo(
  obj: ISearchResultPost | ISearchResultRepo | ISearchResultWiki
): obj is ISearchResultRepo {
  return obj.type === "Repository";
}

export function isWiki(
  obj: ISearchResultPost | ISearchResultRepo | ISearchResultWiki
): obj is ISearchResultWiki {
  return obj.type === "Wiki";
}
