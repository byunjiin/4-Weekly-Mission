import styles from "./NavigationBar.module.scss";
import classNames from "classnames/bind";
import { ROUTE } from "component/sharing/util";
import Cta from "component/sharing/ui-cta/Cta";
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

const NavigationBar: React.FC<NavigationBarProps> = ({ profile, isSticky }) => {
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
            <Cta>
              <span className={cx("signin")}>{TEXT.login}</span>
            </Cta>
          </a>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
