import { mapLinksData } from "component/link/util-map";

export default function mapFolderData(folder: any) {
  if (!folder) return [];

  const { name, owner, links } = folder;

  return {
    profileImage: owner?.profileImageSource,
    ownerName: owner?.name,
    folderName: name,
    links: links?.map(mapLinksData) ?? [],
  };
}
