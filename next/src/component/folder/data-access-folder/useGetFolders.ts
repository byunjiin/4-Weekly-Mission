import { axiosInstance } from "component/sharing/util";
import { useAsync } from "component/sharing/util";
import { Folders } from "component/sharing/util/useAsyncType";

type asyncData = {
  asyncFunction: Folders;
};
export default function useGetFolders() {
  const getFolders = () => axiosInstance.get("users/1/folders");
  const { loading, data } = useAsync<asyncData>(getFolders);

  const folders = (data as any)?.data ?? [];
  const sortedFolders = folders.sort((a: any, b: any) => a?.id - b?.id);

  return { loading, data: sortedFolders };
}
