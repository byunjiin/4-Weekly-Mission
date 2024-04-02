export default function textError(inputRef: any) {
  const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  if (!inputRef.current.value?.trim()) {
    // 값이 없을때 조건(false면 if가 실행안되므로 !로 true처리 해줘야함)
    return "이메일을 입력해 주세요.";
  }
  if (!emailRegex.test(inputRef.current.value)) {
    // 이메일 유효성 검사(false면 if가 실행안되므로 !로 true처리 해줘야함)
    return "올바른 이메일 주소가 아닙니다.";
  }
  // if(){
  //   return "이미 사용 중인 이메일입니다."
  // }
}
