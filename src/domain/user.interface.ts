import type { ImgUrl } from "./base.type";

export interface IUser {
  owner: string;
  name: string;
  createdTime: string;
  updatedTime: string;
  id: string;
  type: string;
  password: string;
  passwordSalt: string;
  displayName: string;
  firstName: string;
  lastName: string;
  avatar: ImgUrl;
  permanentAvatar: string;
  email: string;
  emailVerified: boolean;
  phone: string;
  location: string;
  address: [];
  affiliation: string;
  title: string;
  idCardType: string;
  idCard: string;
  homepage: string;
  bio: string;
  tag: string;
  region: string;
  language: string;
  gender: string;
  birthday: string;
  education: string;
  score: number;
  karma: number;
  ranking: number;
  isDefaultAvatar: boolean;
  isOnline: boolean;
  isAdmin: boolean;
  isGlobalAdmin: boolean;
  isForbidden: boolean;
  isDeleted: boolean;
  signupApplication: string;
  hash: string;
  preHash: string;
  createdIp: string;
  lastSigninTime: string;
  lastSigninIp: string;
  github: string;
  google: string;
  qq: string;
  wechat: string;
  facebook: string;
  dingtalk: string;
  weibo: string;
  gitee: string;
  linkedin: string;
  wecom: string;
  lark: string;
  gitlab: string;
  adfs: string;
  baidu: string;
  alipay: string;
  casdoor: string;
  infoflow: string;
  apple: string;
  azuread: string;
  slack: string;
  steam: string;
  bilibili: string;
  okta: string;
  douyin: string;
  custom: string;
  webauthnCredentials: null;
  ldap: string;
  properties: any;
  roles: null;
  permissions: null;
  lastSigninWrongTime: string;
  signinWrongTimes: number;
  managedAccounts: null;
}
