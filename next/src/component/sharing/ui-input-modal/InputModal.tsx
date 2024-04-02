import styles from "./InputModal.module.scss";
import classNames from "classnames/bind";
import Input from "component/sharing/ui-input/Input";
import Modal from "component/sharing/ui-modal/Modal";
import ModalContentBox from "component/sharing/ui-modal-content-box/ModalContentBox";
import ModalContentButton from "component/sharing/ui-modal-content-button/ModalContentButton";
import ModalContentTitle from "component/sharing/ui-modal-content-title/ModalContentTitle";
import { MouseEventHandler, KeyboardEventHandler, ChangeEvent } from "react";

const cx = classNames.bind(styles);
interface InputModalProps {
  isOpen: boolean;
  title: string;
  placeholder: string;
  buttonText: string;
  onCloseClick: MouseEventHandler<HTMLButtonElement>;
  onKeyDown: KeyboardEventHandler<HTMLDivElement>;
  value?: any;
  onChange?: any;
}

export default function InputModal({
  isOpen,
  title,
  placeholder,
  buttonText,
  onCloseClick,
  onKeyDown,
  value,
  onChange,
}: InputModalProps) {
  return (
    <Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        header={<ModalContentTitle>{title}</ModalContentTitle>}
        content={
          <div className={cx("modal-content")}>
            <Input
              value={value}
              onChange={onChange}
              placeholder={placeholder}
            />
            <ModalContentButton>{buttonText}</ModalContentButton>
          </div>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
}
