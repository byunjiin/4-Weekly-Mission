import Link from "next/link";
import Image from "next/image";
import styles from "../FooterLayout/FooterLayout.module.scss";
import classNames from "classnames/bind";
import facebookImg from "../../../public/images/icons_facebook-fill.svg";
import twitterImg from "../../../public/images/icons_twitter-fill.svg";
import youtubeImg from "../../../public/images/icons_youtube-fill.svg";
import instagramImg from "../../../public/images/icons_instagram-filled.svg";

const cx = classNames.bind(styles);

export default function FooterLayout() {
  return (
    <>
      <footer className={cx("footer")}>
        <div className={cx("footerBox")}>
          <div className={cx("copyright")}>©codeit - 2023</div>
          <div className={cx("footerLink")}>
            <Link href="/privacy" className={cx("privacy")}>
              Privacy Policy
            </Link>
            <Link href="/faq" className={cx("faq")}>
              FAQ
            </Link>
          </div>
          <div className={cx("icons")}>
            <a href="https://www.facebook.com/?locale=ko_KR">
              <Image src={facebookImg} alt="페이스북" />
            </a>
            <a href="https://twitter.com/?lang=ko">
              <Image src={twitterImg} alt="트위터" />
            </a>
            <a href="https://www.youtube.com/">
              <Image src={youtubeImg} alt="유튜브" />
            </a>
            <a href="https://www.instagram.com/">
              <Image src={instagramImg} alt="인스타그램" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
