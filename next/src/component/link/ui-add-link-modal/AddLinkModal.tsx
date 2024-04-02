import styles from "./AddLinkModal.module.scss";
import classNames from "classnames/bind";
import FolderItem from "component/folder/ui-folder-item/FolderItem";
import Modal from "component/sharing/ui-modal/Modal";
import ModalContentBox from "component/sharing/ui-modal-content-box/ModalContentBox";
import ModalContentButton from "component/sharing/ui-modal-content-button/ModalContentButton";
import ModalContentDescription from "component/sharing/ui-modal-content-description/ModalContentDescription";
import ModalContentTitle from "component/sharing/ui-modal-content-title/ModalContentTitle";
import { MouseEventHandler, KeyboardEventHandler } from "react";

const cx = classNames.bind(styles);

interface AddLinkModalProps {
  isOpen: boolean;
  folders: any[];
  selectedLinkUrl?: string | null;
  selectedFolderId: any;
  setSelectedFolderId: any;
  onAddClick: MouseEventHandler<HTMLButtonElement>;
  onCloseClick: MouseEventHandler<HTMLButtonElement>;
  onKeyDown: KeyboardEventHandler<HTMLDivElement>;
}

export default function AddLinkModal({
  isOpen,
  folders,
  selectedLinkUrl,
  selectedFolderId,
  setSelectedFolderId,
  onAddClick,
  onCloseClick,
  onKeyDown,
}: AddLinkModalProps) {
  return (
    <Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        header={
          <div className={cx("modal-header")}>
            <ModalContentTitle>폴더에 추가</ModalContentTitle>
            <ModalContentDescription>{selectedLinkUrl}</ModalContentDescription>
          </div>
        }
        content={
          <div className={cx("modal-content")}>
            <div className={cx("folder-list")}>
              {folders?.map(({ id, name, link }) => (
                <FolderItem
                  key={id}
                  isSelected={id === selectedFolderId}
                  folderName={name}
                  linkCount={link?.count}
                  onClick={() => setSelectedFolderId(id)}
                />
              ))}
            </div>
            <ModalContentButton onClick={onAddClick}>
              추가하기
            </ModalContentButton>
          </div>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
}
