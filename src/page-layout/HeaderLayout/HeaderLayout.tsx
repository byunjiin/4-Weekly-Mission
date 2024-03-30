import styles from "../HeaderLayout/HeaderLayout.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export const HeaderLayout = () => {
  return (
    <>
      <header>
        <div className={cx("headerBox")}>
          <a href="./index.html">
            <img src="../images/logo.svg" className={cx("logo")} alt="로고" />
          </a>
          <a href="./signin.html" className={cx("login")}>
            로그인
          </a>
        </div>
      </header>
    </>
  );
};
