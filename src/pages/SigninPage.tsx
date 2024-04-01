import classNames from "classnames/bind";
import styles from "../sign/Sign.module.scss";
import { Link } from "react-router-dom";
import { Input } from "input/UserInput/Input";

const cx = classNames.bind(styles);

export const SigninPage = () => {
  return (
    <>
      <div className={cx("signin")}>
        <div className={cx("contents")}>
          <div className={cx("title")}>
            <Link to="/">
              <img src="../images/logo.svg" alt="logo" />
            </Link>
            <div className={cx("description")}>
              <p>회원이 아니신가요?</p>
              <Link to="/signup">회원 가입하기</Link>
            </div>
          </div>
          <form>
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
              <img src="../images/google.png" alt="google" />
            </a>
            <a href="https://www.kakaocorp.com/page/">
              <img src="../images/kakao.png" alt="kakao" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
