import styles from "./FolderToolBar.module.scss";
import classNames from "classnames/bind";
import AddFolderButton from "component/folder/ui-add-folder-button/AddFolderButton";
import FolderButton from "component/folder/ui-folder-button/FolderButton";
import IconAndTextButton from "component/sharing/ui-icon-and-text-button/IconAndTextButton";
import {
  ALL_LINKS_TEXT,
  BUTTONS,
  KAKAO_SHARE_DATA,
  MODALS_ID,
} from "./constant";
import { ALL_LINKS_ID } from "component/link/data-access-link/constant";
import { useState, KeyboardEventHandler } from "react";
import ShareModal from "component/folder/ui-share-modal/ShareModal";
import InputModal from "component/sharing/ui-input-modal/InputModal";
import AlertModal from "component/sharing/ui-alert-modal/AlertModal";
import { copyToClipboard } from "component/sharing/util/copyToClipboard";
import { useKakaoSdk } from "component/sharing/util/useKakaoSdk";
import { useRouter } from "next/router";

const cx = classNames.bind(styles);
interface FolderToolBarProps {
  folders: any[];
  selectedFolderId: any;
  onFolderClick: (id: any) => void;
}
export default function FolderToolBar({
  folders,
  selectedFolderId,
  onFolderClick,
}: FolderToolBarProps) {
  const { shareKakao } = useKakaoSdk();
  const [currentModal, setCurrentModal] = useState<null | string>(null);

  const folderName =
    ALL_LINKS_ID === selectedFolderId
      ? ALL_LINKS_TEXT
      : folders?.find(({ id }) => id === selectedFolderId)?.name;
  const router = useRouter();
  const shareLink = `${router.basePath}/shared?user=1&folder=${selectedFolderId}`;

  const closeModal = () => setCurrentModal(null);
  const handleKeyDown = (event: any) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };
  const handleKakaoClick = () => {
    shareKakao({ url: shareLink, ...KAKAO_SHARE_DATA });
  };
  const handleFacebookClick = () =>
    window.open(`http://www.facebook.com/sharer.php?u=${shareLink}`);
  const handleLinkCopyClick = () => copyToClipboard({ text: shareLink });

  return (
    <div className={cx("container")}>
      <div className={cx("folders")}>
        <FolderButton
          key={ALL_LINKS_ID}
          text={ALL_LINKS_TEXT}
          onClick={() => onFolderClick(ALL_LINKS_ID)}
          isSelected={ALL_LINKS_ID === selectedFolderId}
        />
        {folders?.map(({ id, name }) => (
          <FolderButton
            key={id}
            text={name}
            onClick={() => onFolderClick(id)}
            isSelected={id === selectedFolderId}
          />
        ))}
      </div>
      <div className={cx("add-button")}>
        <AddFolderButton onClick={() => setCurrentModal(MODALS_ID.addFolder)} />
        <InputModal
          isOpen={currentModal === MODALS_ID.addFolder}
          title="폴더 추가"
          placeholder="내용 입력"
          buttonText="추가하기"
          onCloseClick={closeModal}
          onKeyDown={handleKeyDown}
        />
      </div>
      <h2 className={cx("folder-name")}>{folderName}</h2>
      {selectedFolderId !== ALL_LINKS_ID && (
        <div className={cx("buttons")}>
          {BUTTONS.map(({ text, iconSource, modalId }) => (
            <IconAndTextButton
              key={text}
              iconSource={iconSource}
              onClick={() => setCurrentModal(modalId)}
            />
          ))}
          <ShareModal
            isOpen={currentModal === MODALS_ID.share}
            folderName={folderName}
            onKakaoClick={handleKakaoClick}
            onFacebookClick={handleFacebookClick}
            onLinkCopyClick={handleLinkCopyClick}
            onCloseClick={closeModal}
            onKeyDown={handleKeyDown}
          />
          <InputModal
            isOpen={currentModal === MODALS_ID.rename}
            title="폴더 이름 변경"
            placeholder="내용 입력"
            buttonText="변경하기"
            onCloseClick={closeModal}
            onKeyDown={handleKeyDown}
          />
          <AlertModal
            isOpen={currentModal === MODALS_ID.delete}
            title="폴더 삭제"
            description={folderName}
            buttonText="삭제하기"
            onCloseClick={closeModal}
            onKeyDown={handleKeyDown}
          />
        </div>
      )}
    </div>
  );
}
