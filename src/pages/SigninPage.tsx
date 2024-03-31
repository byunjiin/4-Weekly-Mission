import classNames from "classnames/bind";
import styles from "../singin/Signin.module.scss";

const cx = classNames.bind(styles);

export const SigninPage = () => {
  return (
    <>
      <div className={cx("signin")}>
        <div className={cx("contents")}>
          <div className={cx("title")}>
            <a href="./index.html">
              <img src="../images/logo.svg" alt="logo" />
            </a>
            <div className={cx("description")}>
              <p>회원이 아니신가요?</p>
              <a href="./signup.html">회원 가입하기</a>
            </div>
          </div>
          <form>
            <div className={cx("idBox")}>
              <label htmlFor="username">이메일</label>
              <input
                id="username"
                className={cx("username")}
                name="username"
                placeholder="codeit@codeit.com"
              />
            </div>
            <div className={cx("pwBox")}>
              <label htmlFor="password">비밀번호</label>
              <div className={cx("pwText")}>
                <input
                  id="password"
                  className={cx("password")}
                  name="password"
                  type="password"
                  placeholder="••••••••"
                />
                <img
                  className={cx("eye")}
                  src="../images/eye-off.svg"
                  alt="eye-off"
                />
              </div>
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
