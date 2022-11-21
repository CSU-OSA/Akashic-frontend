import { akashicService } from "../base";

const useUpload = akashicService.defineRequest(({ post }) => {
  return async (userName: string, file: File) => {
    const form = new FormData();
    form.append("file", file);
    form.append("des", file.name);
    post<{ data: { msg: string } }>("file/upload", form, {
      "Content-Type": "multipart/form-data",
    });
  };
});

export function get_des() {}

export { useUpload };
