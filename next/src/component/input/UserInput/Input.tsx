import styles from "../../sign/Sign.module.scss";
import classNames from "classnames/bind";
import { useRef, useState } from "react";
import textError from "./input-error/textError";
import Image from "next/image";
import eyeonImg from "../../../../public/images/eye-on.svg";
import eyeoffImg from "../../../../public/images/eye-off.svg";
import {
  FieldError,
  UseFormClearErrors,
  UseFormRegisterReturn,
} from "react-hook-form";

const cx = classNames.bind(styles);
interface signinFrom {
  email: string;
  password: string;
}
interface InputProps {
  inputType: "text" | "password";
  inputName: string;
  inputContent: string;
  labelId: string;
  type: any;
  register: UseFormRegisterReturn; //이걸 써야 useForm에서 쓰는거라고
  error: FieldError;
  clearError: UseFormClearErrors<signinFrom>;
}

export default function Input({
  inputType,
  inputName,
  inputContent,
  labelId,
  register,
  error,
  type,
  clearError,
}: InputProps) {
  const inputRef = useRef<null | any>(null);
  const pRef = useRef<null | any>(null);
  const [openEye, setOpenEye] = useState(false);

  const toggleEye = () => {
    setOpenEye(!openEye);
  };

  return (
    <>
      {/* inputType이 text인 경우 */}
      {inputType === "text" ? (
        <>
          <input
            {...register}
            type={inputType}
            className={error?.message ? cx("redEmailName") : cx(inputName)}
            placeholder={inputContent}
            id={labelId}
            onFocus={() => clearError(type)}
          />
          {error?.message && (
            <div className={cx("errorText")}>{error.message}</div>
          )}
        </>
      ) : (
        <>
          <div className={error?.message ? cx("redPwName") : cx("pwText")}>
            <input
              {...register}
              type={openEye ? "text" : "password"}
              className={cx(inputName)}
              placeholder={inputContent}
              id={labelId}
              onFocus={() => clearError(type)}
            />
            <Image
              className={cx("eye")}
              src={openEye ? eyeonImg : eyeoffImg}
              onClick={toggleEye}
              alt={openEye ? "eye-on" : "eye-off"}
            />
          </div>
          {error?.message && (
            <div className={cx("errorText")}>{error.message}</div>
          )}
        </>
      )}
    </>
  );
}
