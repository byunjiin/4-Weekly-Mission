import classNames from "classnames/bind";
import styles from "../component/sign/Sign.module.scss";
import Link from "next/link";
import Image from "next/image";
import Input from "component/input/UserInput/Input";
import logoImg from "../../public/images/logo.svg";
import googleImg from "../../public/images/google.png";
import kakaoImg from "../../public/images/kakao.png";
import { FieldError, useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";

const cx = classNames.bind(styles);

interface signinFrom {
  email: string;
  password: string;
}

export default function SigninPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    clearErrors,
    setError,
  } = useForm<signinFrom>({ mode: "onBlur", reValidateMode: "onBlur" });
  const onSubmitHandler: SubmitHandler<signinFrom> = async (data) => {
    const response = await axios.post(
      "https://bootcamp-api.codeit.kr/api/sign-in",
      data
    );
    console.log(response.data.data.accessToken);
    window.localStorage.setItem("accessToken", response.data.data.accessToken);
  };
  const a = useRouter();
  return (
    <>
      {/* sing부분만 body색이 달라서 전역으로 만들어줬음 */}
      <style jsx global>
        {`
          body {
            background-color: #f0f6ff;
          }
        `}
      </style>
      <div id="signin" className={cx("body")}>
        <div className={cx("signin")}>
          <div className={cx("contents")}>
            <div className={cx("title")}>
              <Link href="/">
                <Image src={logoImg} alt="logo" />
              </Link>
              <div className={cx("description")}>
                <p>회원이 아니신가요?</p>
                <Link href="/signup">회원 가입하기</Link>
              </div>
            </div>
            <form
              className={cx("form")}
              onSubmit={handleSubmit(onSubmitHandler)}
            >
              <div className={cx("idBox")}>
                <label htmlFor="username">이메일</label>
                <Input
                  register={register("email", {
                    required: {
                      value: true,
                      message: "이메일을 입력해 주세요.",
                    },
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "올바른 이메일 주소가 아닙니다.",
                    },
                  })}
                  inputType="text"
                  type="email"
                  clearError={clearErrors}
                  error={errors.email as FieldError}
                  inputName="username"
                  inputContent="codeit@codeit.com"
                  labelId="username"
                ></Input>
              </div>
              <div className={cx("pwBox")}>
                <label htmlFor="password">비밀번호</label>
                <Input
                  register={register("password", {
                    required: {
                      value: true,
                      message: "비밀번호를 입력해 주세요.",
                    },
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                      message:
                        "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
                    },
                  })} // 원랜 useForm쓰려면 {...register}를 input태그에서 써야했는데 input컴포넌트여서 인자로 만들어줌
                  inputType="password"
                  inputName="password"
                  type="password"
                  clearError={clearErrors}
                  error={errors.password as FieldError}
                  inputContent="••••••••"
                  labelId="password"
                ></Input>
              </div>
              <button type="submit" className={cx("loginBtn")}>
                로그인
              </button>
            </form>
          </div>
          <div className={cx("social")}>
            <p>소셜 로그인</p>
            <div className={cx("icons")}>
              <a href="https://www.google.com/">
                <Image src={googleImg} alt="google" />
              </a>
              <a href="https://www.kakaocorp.com/page/">
                <Image src={kakaoImg} alt="kakao" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
