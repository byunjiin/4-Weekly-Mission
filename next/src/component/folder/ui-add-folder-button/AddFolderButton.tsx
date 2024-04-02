import styles from "./AddFolderButton.module.scss";
import classNames from "classnames/bind";
import { MouseEventHandler } from "react";
import Image from "next/image";
import iconImg from "./add.svg";

const cx = classNames.bind(styles);
interface AddFolderButtonProps {
  onClick: MouseEventHandler<HTMLElement>;
}
export default function AddFolderButton({ onClick }: AddFolderButtonProps) {
  return (
    <button className={cx("container")} onClick={onClick}>
      <span>폴더 추가</span>
      <Image src={iconImg} alt="아이콘추가"></Image>
    </button>
  );
}
