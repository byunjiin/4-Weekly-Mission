import styles from "./IconAndTextButton.module.scss";
import classNames from "classnames/bind";
import { MouseEventHandler } from "react";
import Image from "next/image";

const cx = classNames.bind(styles);
interface IconAndTextButtonProps {
  iconSource: string;
  text?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
export default function IconAndTextButton({
  iconSource,
  text,
  onClick,
}: IconAndTextButtonProps) {
  return (
    <button className={cx("container")} onClick={onClick}>
      <Image
        className={cx("icon")}
        src={iconSource}
        alt={`${text} 아이콘`}
        width={18}
        height={18}
      />
      <span className={cx("text")}>{text}</span>
    </button>
  );
}
