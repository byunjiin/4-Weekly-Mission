import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
import { ROUTE } from "component/sharing/util";
import { TEXT } from "./constant";
import Image from "next/image";
import facebookImg from "../../../../public/images/icons_facebook-fill.svg";
import twitterImg from "../../../../public/images/icons_twitter-fill.svg";
import youtubeImg from "../../../../public/images/icons_youtube-fill.svg";
import instagramImg from "../../../../public/images/icons_instagram-filled.svg";

const cx = classNames.bind(styles);

export default function Footer() {
  return (
    <footer className={cx("container")}>
      <div className={cx("items")}>
        <span className={cx("copyright")}>{TEXT.codeit}</span>
        <div className={cx("links")}>
          <a className={cx("link")} href={ROUTE.개인정보처리방침}>
            {TEXT.privacyPolicy}
          </a>
          <a className={cx("link")} href={ROUTE.FAQ}>
            {TEXT.faq}
          </a>
        </div>
        <div className={cx("sns")}>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={facebookImg}
              alt="facebook 홈페이지로 연결된 facebook 로고"
            />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={twitterImg}
              alt="twitter 홈페이지로 연결된 twitter 로고"
            />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={youtubeImg}
              alt="youtube 홈페이지로 연결된 youtube 로고"
            />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={instagramImg}
              alt="instagram 홈페이지로 연결된 instagram 로고"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
