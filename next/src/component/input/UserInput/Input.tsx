import styles from "../../sign/Sign.module.scss";
import classNames from "classnames/bind";
import { useRef, useState } from "react";
import textError from "./input-error/textError";
import Image from "next/image";
import eyeonImg from "../../../../public/images/eye-on.svg";
import eyeoffImg from "../../../../public/images/eye-off.svg";

const cx = classNames.bind(styles);

interface InputProps {
  inputType: "text" | "password";
  inputName: string;
  inputContent: string;
  labelId: string;
}

export default function Input({
  inputType,
  inputName,
  inputContent,
  labelId,
}: InputProps) {
  const inputRef = useRef<null | any>(null);
  const pRef = useRef<null | any>(null);
  const [openEye, setOpenEye] = useState(false);
  // const [error, setError] = useState(null);

  const toggleEye = () => {
    setOpenEye(!openEye);
  };

  // id박스에서
  const focusOutId = () => {
    if (textError(inputRef) !== undefined) {
      // 오류메세지가 있다면
      inputRef.current.style.setProperty("border", "1px solid red");
      pRef.current.style.setProperty("display", "block");
      pRef.current.textContent = textError(inputRef);
    }
  };
  const focusInId = () => {
    inputRef.current.style.setProperty("border", "1px solid #ccd5e3");
    pRef.current.style.setProperty("display", "none");
    pRef.current.textContent = "";
  };

  // pw박스에서
  const focusOutPw = () => {
    if (inputRef.current.value.length < 1) {
      inputRef.current.parentNode.style.setProperty("border", "1px solid red");
    }
  };
  const focusInPw = () => {
    inputRef.current.parentNode.style.setProperty(
      "border",
      "1px solid #ccd5e3"
    );
  };

  return (
    <>
      {/* inputType이 text인 경우 */}
      {inputType === "text" ? (
        <>
          <input
            type={inputType}
            className={cx(inputName)}
            placeholder={inputContent}
            id={labelId}
            ref={inputRef}
            onBlur={focusOutId}
            onFocus={focusInId}
          />
          <p className={cx("errorText")} ref={pRef}></p>
        </>
      ) : (
        <div className={cx("pwText")} onBlur={focusOutPw} onFocus={focusInPw}>
          <input
            type={openEye ? "text" : "password"}
            className={cx(inputName)}
            placeholder={inputContent}
            id={labelId}
            ref={inputRef}
          />
          <Image
            className={cx("eye")}
            src={openEye ? eyeonImg : eyeoffImg}
            onClick={toggleEye}
            alt={openEye ? "eye-on" : "eye-off"}
          />
        </div>
      )}
    </>
  );
}
