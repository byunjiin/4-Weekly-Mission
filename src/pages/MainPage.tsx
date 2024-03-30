import { FooterLayout } from "page-layout/FooterLayout";
import styles from "../main/Main.module.scss";
import classNames from "classnames/bind";
import { HeaderLayout } from "page-layout/HeaderLayout";
const cx = classNames.bind(styles);

export const MainPage = () => {
  return (
    <>
      <HeaderLayout />
      <main>
        {/* 1번박스 */}
        <section className={cx("contentMainBox")}>
          <div className={cx("contentMain")}>
            <h1>
              <p>
                <span>세상의 모든 정보</span>를
              </p>
              <p>쉽게 저장하고 관리해 보세요</p>
            </h1>
            <a href="./signup.html" className={cx("link")}>
              링크 추가하기
            </a>
            <div className={cx("imgBox")}>
              <img src="../images/main_img.png" alt="메인" />
            </div>
          </div>
        </section>
        {/* 2번박스 */}
        <section className={cx("contentsBox")}>
          <div className={cx("contents")}>
            <div className={cx("textBox")}>
              <h2>
                <span>원하는 링크</span>를 저장하세요
              </h2>
              <p className={cx("description")}>
                나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고
                싶은 모든 것을 한 공간에 저장하세요.
              </p>
            </div>
            <div className={cx("imgBox")}>
              <img
                src="../images/total2.png"
                className={cx("total2")}
                alt="2번박스 전체사진"
              />
            </div>
          </div>
        </section>
        {/* 3번박스 */}
        <section className={cx("contentsBox")}>
          <div className={cx("contents")}>
            <div className={cx("imgBox")}>
              <img
                src="../images/change.png"
                className={cx("change")}
                alt="폴더 이름 변경하기"
              />
            </div>
            <div className={cx("textBox")}>
              <h2>
                링크를 폴더로
                <span>관리</span>하세요
              </h2>
              <p className={cx("description")}>
                나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.
              </p>
            </div>
          </div>
        </section>
        {/* <! 4번박스> */}
        <section className={cx("contentsBox")}>
          <div className={cx("contents")}>
            <div className={cx("textBox")}>
              <h2>
                저장한 링크를
                <span>공유</span>해보세요
              </h2>
              <p className={cx("description")}>
                여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구,
                동료들에게 쉽고 빠르게 링크를 공유해 보세요.
              </p>
            </div>
            <div className={cx("imgBox")}>
              <img
                src="../images/total4.png"
                className={cx("total4")}
                alt="2번박스 전체사진"
              />
            </div>
          </div>
        </section>
        {/* <! 5번박스 > */}
        <section className={cx("contentsBox")}>
          <div className={cx("contents")}>
            <div className={cx("imgBox")}>
              <img
                src="../images/search.png"
                className={cx("search")}
                alt="검색하기"
              />
            </div>
            <div className={cx("textBox")}>
              <h2>
                저장한 링크를
                <span>검색</span>해 보세요
              </h2>
              <p className={cx("description")}>
                중요한 정보들을 검색으로 쉽게 찾아보세요.
              </p>
            </div>
          </div>
        </section>
      </main>
      <FooterLayout />
    </>
  );
};
