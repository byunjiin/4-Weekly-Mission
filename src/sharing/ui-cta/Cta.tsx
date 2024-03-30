import styles from "./Cta.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const Cta = ({ children }: { children: any }) => {
  return <div className={cx("container")}>{children}</div>;
};
