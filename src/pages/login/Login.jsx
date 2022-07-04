import React from 'react'
import { EmailInput, PasswordInput } from '../../components/input/Input'
import { LoginBtn } from '../../components/button/Button'
import { SignUpLink } from './loginStyle'
import { MainStyle, FormStyle, Title } from '../../style/commonLoginStyle'

export default function Login() {
  return (
    <>
      <MainStyle>
        <Title>로그인</Title>
        <FormStyle>
          <EmailInput></EmailInput>
          <PasswordInput></PasswordInput>
        </FormStyle>
        <LoginBtn></LoginBtn>
        <SignUpLink>이메일로 회원가입</SignUpLink>
      </MainStyle>
    </>
  )
}
