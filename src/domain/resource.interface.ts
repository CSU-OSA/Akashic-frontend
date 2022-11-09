import type { Url } from "@/domain/base.type";

export interface IResource {
  id: number,
  title: string,
  description: string,
  type: 'code' | 'wiki' | 'text'
  url: Url
}