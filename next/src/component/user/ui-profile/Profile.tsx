import { ProfileProps } from "component/sharing/share";
import styles from "./Profile.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";

const cx = classNames.bind(styles);

interface Props extends ProfileProps {
  profile: any;
}

export default function Profile({ profile }: Props) {
  return (
    <div className={cx("container")}>
      <Image
        className={cx("image")}
        src={profile.profileImageSource}
        alt="프로필 이미지"
        width={10}
        height={10}
      />
      <span className={cx("email")}>{profile.email}</span>
    </div>
  );
}
