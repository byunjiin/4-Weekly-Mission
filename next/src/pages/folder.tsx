import useGetFolders from "component/folder/data-access-folder/useGetFolders";
import useGetLinks from "component/link/data-access-link/useGetLinks";
import { Layout } from "component/sharing/feature-layout";
import FolderLayout from "page-layout/FolderLayout/FolderLayout";
import FolderToolBar from "component/folder/feature-folder-tool-bar/FolderToolBar";
import { SearchBar } from "component/link/ui-search-bar";
import { useState } from "react";
import { ALL_LINKS_ID } from "component/link/data-access-link/constant";
import LinkForm from "component/link/feature-link-form/LinkForm";
import CardList from "component/link/feature-card-list/CardList";

export default function FolderPage() {
  const { data: folders } = useGetFolders();
  const [selectedFolderId, setSelectedFolderId] = useState(ALL_LINKS_ID);
  const { data: links, loading } = useGetLinks(selectedFolderId);

  return (
    <Layout isSticky={false}>
      <FolderLayout
        linkForm={<LinkForm />}
        searchBar={<SearchBar />}
        folderToolBar={
          <FolderToolBar
            folders={folders}
            selectedFolderId={selectedFolderId}
            onFolderClick={setSelectedFolderId}
          />
        }
        cardList={loading ? null : <CardList links={links} />}
      />
    </Layout>
  );
}
