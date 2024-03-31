import classNames from "classnames/bind";
import styles from "../signup/Signup.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

export const SignupPage = () => {
  return (
    <>
      <div className={cx("signup")}>
        <div className={cx("contents")}>
          <div className={cx("title")}>
            <Link to="/">
              <img src="../images/logo.svg" alt="logo" />
            </Link>
            <div className={cx("description")}>
              <p>이미 회원신가요?</p>
              <Link to="/signin">로그인하기</Link>
            </div>
          </div>
          <form>
            <div className={cx("idbox")}>
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
                  placeholder="linkbrary2023"
                />
                <img
                  className={cx("eye")}
                  src="../images/eye-on.svg"
                  alt="eye-on"
                />
              </div>
            </div>
            <div className={cx("pwBox")}>
              <label htmlFor="password_check">비밀번호 확인</label>
              <div className={cx("pwText")}>
                <input
                  className={cx("password")}
                  id="password_check"
                  name="password_check"
                  type="password"
                  placeholder="linkbrary20245"
                />
                <img
                  className={cx("eye")}
                  src="../images/eye-on.svg"
                  alt="eye-on"
                />
              </div>
            </div>
            <button className={cx("join_btn")}>회원가입</button>
          </form>
        </div>
        <div className={cx("social")}>
          <p>다른 형식으로 가입하기</p>
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
