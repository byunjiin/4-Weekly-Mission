import classNames from "classnames/bind";
import styles from "../component/sign/Sign.module.scss";
import Link from "next/link";
import Image from "next/image";
import Input from "component/input/UserInput/Input";
import logoImg from "../../public/images/logo.svg";
import googleImg from "../../public/images/google.png";
import kakaoImg from "../../public/images/kakao.png";

const cx = classNames.bind(styles);

export default function SigninPage() {
  return (
    <>
      {/* sing부분만 body색이 달라서 전역으로 만들어줬음 */}
      <style jsx global>
        {`
          body {
            background-color: #f0f6ff;
          }
        `}
      </style>
      <div id="signin" className={cx("body")}>
        <div className={cx("signin")}>
          <div className={cx("contents")}>
            <div className={cx("title")}>
              <Link href="/">
                <Image src={logoImg} alt="logo" />
              </Link>
              <div className={cx("description")}>
                <p>회원이 아니신가요?</p>
                <Link href="/signup">회원 가입하기</Link>
              </div>
            </div>
            <form className={cx("form")}>
              <div className={cx("idBox")}>
                <label htmlFor="username">이메일</label>
                <Input
                  inputType="text"
                  inputName="username"
                  inputContent="codeit@codeit.com"
                  labelId="username"
                ></Input>
              </div>
              <div className={cx("pwBox")}>
                <label htmlFor="password">비밀번호</label>
                <Input
                  inputType="password"
                  inputName="password"
                  inputContent="••••••••"
                  labelId="password"
                ></Input>
              </div>
              <button type="submit" className={cx("loginBtn")}>
                로그인
              </button>
            </form>
          </div>
          <div className={cx("social")}>
            <p>소셜 로그인</p>
            <div className={cx("icons")}>
              <a href="https://www.google.com/">
                <Image src={googleImg} alt="google" />
              </a>
              <a href="https://www.kakaocorp.com/page/">
                <Image src={kakaoImg} alt="kakao" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
