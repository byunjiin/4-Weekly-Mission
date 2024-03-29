import { mapFolderData } from "folder/util-map";
import { useAsync } from "sharing/util";
import { axiosInstance } from "sharing/util";
import { Folder } from "sharing/util/useAsyncType";

type asyncData = {
  asyncFunction: Folder;
};

export const useGetFolder = () => {
  const getFolder = () => axiosInstance.get("sample/folder");
  const { loading, data } = useAsync<asyncData>(getFolder);

  const folderData = mapFolderData((data as any)?.folder);

  return { loading, data: folderData };
};
