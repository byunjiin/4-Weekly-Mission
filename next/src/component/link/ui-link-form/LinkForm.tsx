import Cta from "component/sharing/ui-cta/Cta";
import styles from "./LinkForm.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import linkImg from "../../../../public/images/link.svg";
const cx = classNames.bind(styles);

export const LinkForm = ({ onSubmit }: { onSubmit: any }) => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    onSubmit(event);
  };

  return (
    <div className={cx("container")}>
      <form className={cx("form")} onSubmit={handleSubmit}>
        <div className={cx("input-box")}>
          <Image className={cx("icon")} src={linkImg} alt="링크 아이콘" />
          <input
            className={cx("input")}
            type="text"
            placeholder="링크를 추가해 보세요"
          />
        </div>
        <button className={cx("button")} type="submit">
          <Cta>추가하기</Cta>
        </button>
      </form>
    </div>
  );
};
