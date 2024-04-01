import { Link } from "react-router-dom";
import styles from "../HeaderLayout/HeaderLayout.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export const HeaderLayout = () => {
  return (
    <>
      <header>
        <div className={cx("headerBox")}>
          <Link to="/">
            <img src="../images/logo.svg" className={cx("logo")} alt="로고" />
          </Link>
          <Link to="/signin" className={cx("login")}>
            로그인
          </Link>
        </div>
      </header>
    </>
  );
};
