import styles from "./Cta.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Cta({ children }: { children: any }) {
  return <div className={cx("container")}>{children}</div>;
}
