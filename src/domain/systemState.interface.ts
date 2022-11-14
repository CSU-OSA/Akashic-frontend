import type { IUser } from "./user.interface";

export interface ISystemState {
  authUtils: {
    accessToken: string;
    state: string;
  } | null;
  isLogin: boolean;
  isAdmin: boolean;
  user: IUser | null;
  isDarkMode: boolean;
  lightTheme: number;
  darkTheme: number;
}
