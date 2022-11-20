import type { IUser } from "@/domain/user.interface";
import { akashicService } from "../service";

/**
 * @deprecated
 */
const tempSaveFileName = (fileName: string) => {
  let fileNames = [];
  try {
    fileNames = JSON.parse(localStorage.getItem("fileNames") as string);
  } catch (err) {
    fileNames = [];
  }
  fileNames = fileNames || [];
  fileNames.push(fileName);
  localStorage.setItem("fileNames", JSON.stringify(fileNames));
};

const useUpload = akashicService.defineRequest(({ post }) => {
  return async (file: File) => {
    const form = new FormData();
    form.append("file", file);
    form.append("des", file.name);
    return post<{ data: { msg: string } }>("file/upload", form, {
      "Content-Type": "multipart/form-data",
    }).then(() => tempSaveFileName(file.name));
  };
});

const useGetUserResources = akashicService.defineRequest(({ post }) => {
  return async (userName: IUser["name"]): Promise<any[]> => {
    let fileNames: string[] = [];
    try {
      fileNames = JSON.parse(localStorage.getItem("fileNames") as string);
    } catch (err) {
      fileNames = [];
    }
    fileNames = fileNames || [];
    const files = fileNames.map((fileName) =>
      post(`file/get_des?filename=${`Akashic/${userName}/${fileName}`}`)
    );
    const res = await Promise.all(files);
    return res.map((r) => r.data.data);
  };
});

export { useUpload, useGetUserResources };
