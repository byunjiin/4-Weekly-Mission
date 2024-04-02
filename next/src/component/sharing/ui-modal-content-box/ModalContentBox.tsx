import styles from "./ModalContentBox.module.scss";
import classNames from "classnames/bind";
import { MouseEventHandler, ReactNode } from "react";
import Image from "next/image";
import closeImg from "../../../../public/images/close.svg";
const cx = classNames.bind(styles);

interface ModalContentBoxProps {
  header: any;
  content: ReactNode;
  onCloseClick: MouseEventHandler<HTMLButtonElement>;
}
export default function ModalContentBox({
  header,
  content,
  onCloseClick,
}: ModalContentBoxProps) {
  return (
    <div className={cx("container")}>
      <button onClick={onCloseClick}>
        <Image className={cx("close")} src={closeImg} alt="X모양 닫기 버튼" />
      </button>
      <div className={cx("items")}>
        {header}
        {content}
      </div>
    </div>
  );
}
