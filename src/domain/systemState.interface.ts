import type { IUser } from "./user.interface";

export interface ISystemState {
  token: string | null;
  isLogin: boolean;
  isAdmin: boolean;
  user: IUser | null;
}
