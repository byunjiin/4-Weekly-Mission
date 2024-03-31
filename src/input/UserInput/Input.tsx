import styles from "../../sign/Sign.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
const cx = classNames.bind(styles);

interface InputProps {
  inputType: "text" | "password";
  inputName: string;
  inputContent: string;
  labelId: string;
}
export const Input = ({
  inputType,
  inputName,
  inputContent,
  labelId,
}: InputProps) => {
  const [openEye, setOpenEye] = useState(false);
  const toggleEye = () => {
    setOpenEye(!openEye);
  };
  console.log(inputName);
  return (
    <>
      {/* inputType이 text인 경우 */}
      {inputType === "text" ? (
        <input
          type={inputType}
          className={cx(inputName)}
          placeholder={inputContent}
          id={labelId}
        />
      ) : (
        <>
          <input
            type={openEye ? "text" : "password"}
            className={cx(inputName)}
            placeholder={inputContent}
            id={labelId}
          />
          <img
            className={cx("eye")}
            src={openEye ? "../images/eye-on.svg" : "../images/eye-off.svg"}
            onClick={toggleEye}
            alt={openEye ? "eye-on" : "eye-off"}
          />
        </>
      )}
    </>
  );
};
