import styles from "../FooterLayout/FooterLayout.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export const FooterLayout = () => {
  return (
    <>
      <footer>
        <div className={cx("footerBox")}>
          <div className={cx("copyright")}>©codeit - 2023</div>
          <div className={cx("footerLink")}>
            <a href="./privacy.html" className={cx("privacy")}>
              Privacy Policy
            </a>
            <a href="./faq.html" className={cx("faq")}>
              FAQ
            </a>
          </div>
          <div className={cx("icons")}>
            <a href="https://www.facebook.com/?locale=ko_KR">
              <img src="../images/icons_facebook-fill.svg" alt="페이스북" />
            </a>
            <a href="https://twitter.com/?lang=ko">
              <img src="../images/icons_twitter-fill.svg" alt="트위터" />
            </a>
            <a href="https://www.youtube.com/">
              <img src="../images/icons_youtube-fill.svg" alt="유튜브" />
            </a>
            <a href="https://www.instagram.com/">
              <img
                src="../images/icons_instagram-filled.svg"
                alt="인스타그램"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
