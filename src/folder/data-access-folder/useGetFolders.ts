import { axiosInstance } from "sharing/util";
import { useAsync } from "sharing/util";
import { Folders } from "sharing/util/useAsyncType";

type asyncData = {
  asyncFunction: Folders;
};
export const useGetFolders = () => {
  const getFolders = () => axiosInstance.get("users/1/folders");
  const { loading, data } = useAsync<asyncData>(getFolders);

  const folders = (data as any)?.data ?? [];
  const sortedFolders = folders.sort((a: any, b: any) => a?.id - b?.id);

  return { loading, data: sortedFolders };
};
