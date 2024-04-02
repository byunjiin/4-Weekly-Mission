import styles from "./ModalContentButton.module.scss";
import classNames from "classnames/bind";
import { ReactNode, MouseEventHandler } from "react";

const cx = classNames.bind(styles);

interface ModalContentButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  themeColor?: string;
}
export default function ModalContentButton({
  children,
  onClick,
  themeColor = "blue",
}: ModalContentButtonProps) {
  return (
    <button className={cx("button", themeColor)} onClick={onClick}>
      {children}
    </button>
  );
}
