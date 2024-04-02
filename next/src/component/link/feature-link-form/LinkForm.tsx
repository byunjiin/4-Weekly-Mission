import useGetFolders from "component/folder/data-access-folder/useGetFolder";
import AddLinkModal from "component/link/ui-add-link-modal/AddLinkModal";
import { LinkForm as UiLinkForm } from "component/link/ui-link-form";
import { useState } from "react";

export default function LinkForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: folders } = useGetFolders();
  const [selectedFolderId, setSelectedFolderId] = useState(null);
  const closeModal = () => {
    setSelectedFolderId(null);
    setIsModalOpen(false);
  };
  const handleKeyDown = (event: any) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  return (
    <>
      <UiLinkForm onSubmit={() => setIsModalOpen(true)} />
      <AddLinkModal
        isOpen={isModalOpen}
        folders={folders}
        selectedFolderId={selectedFolderId}
        setSelectedFolderId={setSelectedFolderId}
        onAddClick={() => {}}
        onCloseClick={closeModal}
        onKeyDown={handleKeyDown}
      />
    </>
  );
}
