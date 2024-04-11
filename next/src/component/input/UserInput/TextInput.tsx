import styles from "../../sign/Sign.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
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
  inputName: string;
  inputContent: string;
  labelId: string;
  type: any;
  register: UseFormRegisterReturn; //이걸 써야 useForm에서 쓰는거라고
  error: FieldError;
  clearError: UseFormClearErrors<signinFrom>;
}

export default function TextInput({
  inputName,
  inputContent,
  labelId,
  register,
  error,
  type,
  clearError,
}: InputProps) {
  return (
    <>
      {/* inputType이 text인 경우 */}
      <input
        {...register}
        type="text"
        className={error?.message ? cx("redEmailName") : cx(inputName)}
        placeholder={inputContent}
        id={labelId}
        onFocus={() => clearError(type)}
      />
      {error?.message && <div className={cx("errorText")}>{error.message}</div>}
    </>
  );
}
