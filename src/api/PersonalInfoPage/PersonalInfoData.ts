// TODO 获取个人基础信息
import logo from "@/assets/logo.png";
import type {
  IPersonalPinnedPost,
  IPersonalPinnedRepo,
} from "@/domain/personalInfo.interface";

export const useBasicPersonalInfo = () => {
  //Real Code here

  return {
    avatar: logo,
    userNick: "Test_User",
    userUniqueID: "Test-user",
    follower: 10,
    following: 0,
  };
};

export type postCCount = number;
export type repoCCount = number;
export type wikiCCount = number;
export type contributionCount = [postCCount, repoCCount, wikiCCount];

export interface IPersonalMonthContribution {
  timeSlice: number;
  contribution: contributionCount;
}

// TODO 获取用户概览信息
export const useGeneralViewData = (): {
  personalIntro: string;
  pinnedItems: (IPersonalPinnedPost | IPersonalPinnedRepo)[];
  contributionList: IPersonalMonthContribution[];
} => {
  return {
    personalIntro: "",
    pinnedItems: [
      {
        type: "Post",
        url: "",
        title: "TestPost",
        essential: "TestTestTestTest",
        star: 1,
        like: 14,
        comment: 5,
        view: 14,
      },
      {
        type: "Repository",
        url: "",
        title: "TestRepository",
        essential: "TestTestTestTestTest",
        star: 19,
        like: 19,
      },
      {
        type: "Repository",
        url: "",
        title: "TestRepository",
        essential: "TestTestTestTestTest",
        star: 8,
        like: 10,
      },
    ],
    contributionList: [
      {
        //UTC 2020-11-11 00:00:00
        timeSlice: 1605312000000,
        contribution: [0, 1, 1],
      },
      {
        //UTC 2021-11-11 00:00:00
        timeSlice: 1636588800000,
        contribution: [1, 0, 0],
      },
      {
        //UTC 2021-11-12 00:00:00
        timeSlice: 1636675200000,
        contribution: [0, 10, 1],
      },
      {
        //UTC 2022-11-11 00:00:00
        timeSlice: 1668124800000,
        contribution: [0, 1, 1],
      },
      {
        //UTC 2023-11-11 00:00:00
        timeSlice: 1699920000000,
        contribution: [0, 1, 1],
      },
    ],
  };
};
