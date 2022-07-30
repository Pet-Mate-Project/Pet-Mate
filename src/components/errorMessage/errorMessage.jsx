import React ,{memo} from 'react'
import { ErrorMessageStyle, CorrectMessageStyle } from './errorStyle'

export function SignUpErrorMessage({ message }) {

  if (message === "사용 가능한 이메일 입니다.") {
    return (
      <CorrectMessageStyle>{message}</CorrectMessageStyle>
    )
  } else if (message === "사용 가능한 계정ID 입니다.") {
    return (
      <CorrectMessageStyle>{message}</CorrectMessageStyle>
    )
  } else if (message !== '잘못된 접근입니다.') {
    return (
      <ErrorMessageStyle>{message}</ErrorMessageStyle>
    )
  }
}
export const MemoSignUpErrorMessage = memo(SignUpErrorMessage)

export function LoginErrorMessege() {
  return (
    <>
      <ErrorMessageStyle>이메일 또는 비밀번호가 일치하지 않습니다.</ErrorMessageStyle>
    </>
  );
}
