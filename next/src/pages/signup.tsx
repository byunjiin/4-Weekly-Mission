import classNames from "classnames/bind";
import styles from "../component/sign/Sign.module.scss";
import Input from "component/input/UserInput/Input";
import Link from "next/link";
import Image from "next/image";
import logoImg from "../../public/images/logo.svg";
import googleImg from "../../public/images/google.png";
import kakaoImg from "../../public/images/kakao.png";

const cx = classNames.bind(styles);

export default function SignupPage() {
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
      <div className={cx("body")}>
        <div className={cx("signup")}>
          <div className={cx("contents")}>
            <div className={cx("title")}>
              <Link href="/">
                <Image src={logoImg} alt="logo" />
              </Link>
              <div className={cx("description")}>
                <p>이미 회원신가요?</p>
                <Link href="/signin">로그인하기</Link>
              </div>
            </div>
            <form className={cx("form")}>
              <div className={cx("idbox")}>
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
                  inputContent="linkbrary2023"
                  labelId="password"
                ></Input>
              </div>
              <div className={cx("pwBox")}>
                <label htmlFor="password_check">비밀번호 확인</label>
                <Input
                  inputType="password"
                  inputName="password"
                  inputContent="linkbrary20245"
                  labelId="password_check"
                ></Input>
              </div>
              <button className={cx("join_btn")}>회원가입</button>
            </form>
          </div>
          <div className={cx("social")}>
            <p>다른 형식으로 가입하기</p>
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
