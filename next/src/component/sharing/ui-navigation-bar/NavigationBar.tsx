import styles from "./NavigationBar.module.scss";
import classNames from "classnames/bind";
import { ROUTE } from "component/sharing/util";
import Profile from "component/user/ui-profile/Profile";
import { TEXT } from "./constant";
import { ProfileProps } from "component/sharing/share";
import Image from "next/image";
import logoImg from "../../../../public/images/linkbrary.svg";
const cx = classNames.bind(styles);

interface NavigationBarProps {
  profile: ProfileProps | null;
  isSticky?: boolean;
}

function NavigationBar({ profile, isSticky }: NavigationBarProps) {
  return (
    <nav className={cx("container", { sticky: isSticky })}>
      <div className={cx("items")}>
        <a href={ROUTE.랜딩}>
          <Image
            className={cx("logo")}
            src={logoImg}
            alt="Linkbrary 서비스 로고"
          />
        </a>
        {profile ? (
          <Profile profile={profile} />
        ) : (
          <a href={ROUTE.로그인}>
            <span className={cx("signin")}>{TEXT.login}</span>
          </a>
        )}
      </div>
    </nav>
  );
}

export default NavigationBar;
