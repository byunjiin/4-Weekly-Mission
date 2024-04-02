import styles from "./Layout.module.scss";
import classNames from "classnames/bind";
import { useGetUser } from "component/user/data-access-user";
import Footer from "component/sharing/ui-footer/Footer";
import NavigationBar from "component/sharing/ui-navigation-bar/NavigationBar";
import { ProfileProps } from "component/sharing/share";

const cx = classNames.bind(styles);

interface LayoutProps {
  children: React.ReactNode;
  isSticky?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  isSticky = true,
}) => {
  const data: any = useGetUser();
  const { email, profileImageSource }: ProfileProps = data.data || {};
  const profile = data.data ? { email, profileImageSource } : null;

  return (
    <div>
      <NavigationBar profile={profile} isSticky={isSticky} />
      <main className={cx("main")}>{children}</main>
      <Footer />
    </div>
  );
};
