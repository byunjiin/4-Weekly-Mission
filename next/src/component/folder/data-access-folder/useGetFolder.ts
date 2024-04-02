import mapFolderData from "component/folder/util-map/mapFolderData";
import { useAsync } from "component/sharing/util";
import { axiosInstance } from "component/sharing/util";
import { Folder } from "component/sharing/util/useAsyncType";

type asyncData = {
  asyncFunction: Folder;
};

export default function useGetFolder() {
  const getFolder = () => axiosInstance.get("sample/folder");
  const { loading, data } = useAsync<asyncData>(getFolder);

  const folderData: any = mapFolderData((data as any)?.folder);

  return { loading, data: folderData };
}
