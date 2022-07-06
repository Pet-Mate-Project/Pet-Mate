import React from 'react'
import { ErrorMessageStyle, CorrectMessageStyle } from './errorStyle'

export function SignUpErrorMessage({ message }) {

  if (message === "사용 가능한 이메일 입니다.") {
    return (
      <CorrectMessageStyle>{message}</CorrectMessageStyle>
    )
  }
  if (message === "사용 가능한 계정ID 입니다.") {
    return (
      <CorrectMessageStyle>{message}</CorrectMessageStyle>
    )
  } else {
    return (
      <ErrorMessageStyle>{message}</ErrorMessageStyle>
    )
  }
}

export function LoginErrorMessege() {
  return (
    <>
      <ErrorMessageStyle>이메일 또는 비밀번호가 일치하지 않습니다.</ErrorMessageStyle>
    </>
  );
}
