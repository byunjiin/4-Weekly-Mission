import styles from "./AlertModal.module.scss";
import classNames from "classnames/bind";
import Modal from "component/sharing/ui-modal/Modal";
import ModalContentBox from "component/sharing/ui-modal-content-box/ModalContentBox";
import ModalContentButton from "component/sharing/ui-modal-content-button/ModalContentButton";
import ModalContentDescription from "component/sharing/ui-modal-content-description/ModalContentDescription";
import ModalContentTitle from "component/sharing/ui-modal-content-title/ModalContentTitle";
import { MouseEventHandler, KeyboardEventHandler } from "react";

const cx = classNames.bind(styles);
interface AlertModalProps {
  isOpen: boolean;
  title: string;
  description: string | null;
  buttonText: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onCloseClick: MouseEventHandler<HTMLButtonElement>;
  onKeyDown: KeyboardEventHandler<HTMLDivElement>;
}
export default function AlertModal({
  isOpen,
  title,
  description,
  buttonText,
  onClick,
  onCloseClick,
  onKeyDown,
}: AlertModalProps) {
  return (
    <Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        header={
          <div className={cx("modal-header")}>
            <ModalContentTitle>{title}</ModalContentTitle>
            <ModalContentDescription>{description}</ModalContentDescription>
          </div>
        }
        content={
          <ModalContentButton onClick={onClick} themeColor="red">
            {buttonText}
          </ModalContentButton>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
}
