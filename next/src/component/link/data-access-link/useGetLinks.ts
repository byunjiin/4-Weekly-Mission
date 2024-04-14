import { useCallback, useEffect } from "react";
import { axiosInstance } from "component/sharing/util";
import { mapLinksData } from "component/link/util-map/mapLinksData";
import { useAsync } from "component/sharing/util";
import { ALL_LINKS_ID } from "./constant";

interface MapDataFormatProps {
  id: string | number;
  created_at: string | number;
  url: string;
  image_source: string;
  title: string;
  description: string;
}
interface AsyncProps {
  execute: any;
  loading: boolean;
  data: any;
}
export default function useGetLinks(folderId: any, userData: any) {
  const queryString = folderId === "" ? "" : `?folderId=${folderId}`;
  const getLinks = useCallback(
    () => axiosInstance.get(`users/${userData}/links${queryString}`),
    [queryString]
  );
  const { execute, loading, data }: AsyncProps = useAsync(getLinks);

  useEffect(() => {
    execute();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [folderId]);

  const mapDataFormat = ({
    id,
    created_at,
    url,
    image_source,
    title,
    description,
  }: MapDataFormatProps) => ({
    id,
    createdAt: created_at,
    imageSource: image_source,
    url,
    title,
    description,
  });

  const linksData = data?.data.map(mapDataFormat).map(mapLinksData) ?? [];

  return { execute, loading, linkData: linksData };
}
