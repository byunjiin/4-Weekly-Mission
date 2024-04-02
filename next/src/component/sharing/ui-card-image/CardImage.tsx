import styles from "./CardImage.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import defaultImg from "../../../../public/images/card-default.png";

const cx = classNames.bind(styles);
interface CardImageProps {
  imageSource: string;
  alt: string;
  isZoomedIn: any;
}
export default function CardImage({
  imageSource,
  alt,
  isZoomedIn,
}: CardImageProps) {
  return (
    <Image
      src={imageSource ?? defaultImg}
      alt={alt}
      className={cx("container", { zoomin: isZoomedIn })}
      width={340}
      height={253.746}
    />
  );
}
