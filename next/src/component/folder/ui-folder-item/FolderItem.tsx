import styles from "./FolderItem.module.scss";
import classNames from "classnames/bind";
import { MouseEventHandler } from "react";
import Image from "next/image";
import checkImg from "../../../../public/images/check.svg";

const cx = classNames.bind(styles);
interface FolderItemProps {
  folderName: string;
  linkCount: number;
  isSelected: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
export default function FolderItem({
  folderName,
  linkCount,
  isSelected = false,
  onClick,
}: FolderItemProps) {
  return (
    <button className={cx("button", { isSelected })} onClick={onClick}>
      <span className={cx("name", { isSelected })}>{folderName}</span>
      <span className={cx("count")}>{linkCount}개 링크</span>
      {isSelected && (
        <Image className={cx("check")} src={checkImg} alt="체크 아이콘" />
      )}
    </button>
  );
}
