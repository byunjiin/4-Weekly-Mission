import Link from "next/link";
import styles from "../HeaderLayout/HeaderLayout.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import logoImg from "../../../public/images/logo.svg";

const cx = classNames.bind(styles);

export default function HeaderLayout() {
  return (
    <>
      <header className={cx("header")}>
        <div className={cx("headerBox")}>
          <Link href="/">
            <Image src={logoImg} className={cx("logo")} alt="로고" />
          </Link>
          <Link href="/signin" className={cx("login")}>
            로그인
          </Link>
        </div>
      </header>
    </>
  );
}
