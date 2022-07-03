import React from 'react'
import { EmailInput, PasswordInput } from '../../components/input/Input'
import { LoginBtn } from '../../components/button/Button'
import { Margin, LoginText, LoginWrapper, SignUpBtn } from './loginStyle'

export default function Login() {
  return (
    <>
      <LoginWrapper>
        <LoginText>로그인</LoginText>
        <EmailInput></EmailInput>
        <Margin>
          <PasswordInput></PasswordInput>
        </Margin>
        <LoginBtn></LoginBtn>
        <SignUpBtn>이메일로 회원가입</SignUpBtn>
      </LoginWrapper>
    </>
  )
}
