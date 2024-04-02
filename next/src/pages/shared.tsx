import useGetFolder from "component/folder/data-access-folder/useGetFolder";
import { Layout } from "component/sharing/feature-layout";
import SharedLayout from "page-layout/SharedLayout/SharedLayout";
import { CardList } from "component/link/ui-card-list";
import FolderInfo from "component/folder/ui-folder-info/FolderInfo";
import { ReadOnlyCard } from "component/link/ui-read-only-card";
import { SearchBar } from "component/link/ui-search-bar";

export default function SharedPage() {
  const { data } = useGetFolder();
  const { profileImage, ownerName, folderName, links } = (data as any) || {};

  return (
    <Layout>
      <SharedLayout
        folderInfo={
          <FolderInfo
            profileImage={profileImage}
            ownerName={ownerName}
            folderName={folderName}
          />
        }
        searchBar={<SearchBar />}
        cardList={
          <CardList>
            {links?.map((link: any) => (
              <ReadOnlyCard key={link?.id} {...link} />
            ))}
          </CardList>
        }
      />
    </Layout>
  );
}
