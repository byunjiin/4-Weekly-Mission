import classNames from "classnames/bind";
import styles from "../component/sign/Sign.module.scss";
import Link from "next/link";
import Image from "next/image";
import logoImg from "../../public/images/logo.svg";
import googleImg from "../../public/images/google.png";
import kakaoImg from "../../public/images/kakao.png";
import { FieldError, useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import TextInput from "component/input/UserInput/textInput";
import PasswordInput from "component/input/UserInput/passwordInput";

const cx = classNames.bind(styles);

interface signupForm {
  email: string;
  password: string;
  passwordcheck: string;
}

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    clearErrors,
    setError,
  } = useForm<signupForm>({ mode: "onBlur", reValidateMode: "onBlur" });
  const [checkErrors, setCheckErrors] = useState(false);
  const router = useRouter();

  const checkEmailDuplication = async (email: string) => {
    try {
      const checkEmailApi = await axios.post(
        "https://bootcamp-api.codeit.kr/api/check-email",
        {
          email: email,
        }
      );
      return checkEmailApi;
    } catch (error: any) {
      if (error.response.status === 409) {
        // check관련 에러는 409
        setCheckErrors(!checkErrors); // 여긴 api를 2개 써서 뭐가 formState: { errors }인지 모르니깐 직접 checkError를 만들어줌
      }
      console.log(error);
      return false;
    }
  };

  const signUpCheck = async (data: signupForm) => {
    try {
      const signUpApi = await axios.post(
        "https://bootcamp-api.codeit.kr/api/sign-up",
        {
          email: data.email,
          password: data.password,
        }
      );
      if (signUpApi.status === 200) {
        // 성공했을때
        window.localStorage.setItem(
          "accessToken",
          signUpApi.data.data.accessToken
        ); // 로컬스토리지에 api에서 받아온 access토큰을 만들어줌
        router.push("/folder");
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const onSubmitHandler: SubmitHandler<signupForm> = async (data) => {
    if (await checkEmailDuplication(data.email)) {
      signUpCheck(data);
    }
  };
  useEffect(() => {
    if (
      window.localStorage.getItem("accessToken") !== "undefined" &&
      window.localStorage.getItem("accessToken")
    ) {
      // getItem 써서 로컬스토리지에서 가져오기
      router.push("/folder");
    }
  }, []);
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
      <div className={cx("body")}>
        <div className={cx("signup")}>
          <div className={cx("contents")}>
            <div className={cx("title")}>
              <Link href="/">
                <Image src={logoImg} alt="logo" />
              </Link>
              <div className={cx("description")}>
                <p>이미 회원신가요?</p>
                <Link href="/signin">로그인하기</Link>
              </div>
            </div>
            <form
              className={cx("form")}
              onSubmit={handleSubmit(onSubmitHandler)}
            >
              <div className={cx("idbox")}>
                <label htmlFor="username">이메일</label>
                <TextInput
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
                  type="email"
                  clearError={clearErrors}
                  error={errors.email as FieldError}
                  inputName="username"
                  inputContent="codeit@codeit.com"
                  labelId="username"
                ></TextInput>
                {checkErrors && (
                  <div className={cx("errorText")}>
                    이미 사용 중인 이메일입니다.
                  </div>
                )}
              </div>
              <div className={cx("pwBox")}>
                <label htmlFor="password">비밀번호</label>
                <PasswordInput
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
                  })}
                  type="password"
                  clearError={clearErrors}
                  error={errors.password as FieldError}
                  inputName="password"
                  inputContent="linkbrary2023"
                  labelId="password"
                ></PasswordInput>
              </div>
              <div className={cx("pwBox")}>
                <label htmlFor="password_check">비밀번호 확인</label>
                <PasswordInput
                  register={register("passwordcheck", {
                    required: {
                      value: true,
                      message: "비밀번호를 입력해 주세요.",
                    },
                    validate: (value, formValues) => {
                      return (
                        value === formValues.password ||
                        "비밀번호가 일치하지 않아요."
                      );
                    },
                  })}
                  type="passwordcheck"
                  clearError={clearErrors}
                  error={errors.passwordcheck as FieldError}
                  inputName="password"
                  inputContent="linkbrary20245"
                  labelId="password_check"
                ></PasswordInput>
              </div>
              <button
                className={cx("join_btn")}
                // onClick={handleSubmit(onSubmitHandler)}
              >
                회원가입
              </button>
            </form>
          </div>
          <div className={cx("social")}>
            <p>다른 형식으로 가입하기</p>
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
