import styles from "./AddFolderButton.module.scss";
import classNames from "classnames/bind";
import AddIcon from "../ui-add-folder-button/add.svg";
import { MouseEventHandler } from "react";

const cx = classNames.bind(styles);
interface AddFolderButtonProps {
  onClick: MouseEventHandler<HTMLElement>;
}
export default function AddFolderButton({ onClick }: AddFolderButtonProps) {
  return (
    <button className={cx("container")} onClick={onClick}>
      <span>폴더 추가</span>
      <AddIcon className={cx("icon")} />
    </button>
  );
}
