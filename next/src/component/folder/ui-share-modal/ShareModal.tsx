import styles from "./ShareModal.module.scss";
import classNames from "classnames/bind";
import Modal from "component/sharing/ui-modal/Modal";
import ModalContentBox from "component/sharing/ui-modal-content-box/ModalContentBox";
import ModalContentDescription from "component/sharing/ui-modal-content-description/ModalContentDescription";
import ModalContentTitle from "component/sharing/ui-modal-content-title/ModalContentTitle";
import KakaoIcon from "./kakao.svg";
import FacebookIcon from "./facebook.svg";
import LinkIcon from "./link.svg";
import Image from "next/image";
import { MouseEventHandler, KeyboardEventHandler } from "react";

const cx = classNames.bind(styles);

interface ShareModalProps {
  isOpen: boolean;
  folderName: string | number;
  onKakaoClick: MouseEventHandler<HTMLElement>;
  onFacebookClick: MouseEventHandler<HTMLElement>;
  onLinkCopyClick: MouseEventHandler<HTMLElement>;
  onCloseClick: MouseEventHandler<HTMLElement>;
  onKeyDown: KeyboardEventHandler<HTMLElement>;
}

export default function ShareModal({
  isOpen,
  folderName,
  onKakaoClick,
  onFacebookClick,
  onLinkCopyClick,
  onCloseClick,
  onKeyDown,
}: ShareModalProps) {
  return (
    <Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        header={
          <div className={cx("modal-header")}>
            <ModalContentTitle>폴더 공유</ModalContentTitle>
            <ModalContentDescription>{folderName}</ModalContentDescription>
          </div>
        }
        content={
          <div className={cx("modal-content")}>
            <button className={cx("button")} onClick={onKakaoClick}>
              <Image src={KakaoIcon} alt="KakaoIcon" />
              <span>카카오톡</span>
            </button>
            <button className={cx("button")} onClick={onFacebookClick}>
              <Image src={FacebookIcon} alt="FacebookIcon" />
              <span>페이스북</span>
            </button>
            <button className={cx("button")} onClick={onLinkCopyClick}>
              <Image src={LinkIcon} alt="LinkIcon" />
              <span>링크 복사</span>
            </button>
          </div>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
}
