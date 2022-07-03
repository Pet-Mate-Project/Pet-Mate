import React from 'react'
import { EmailInput, PasswordInput } from '../../components/input/Input'
import { NextBtn } from '../../components/button/Button'
import { Margin, SignUpText, SignUpWrapper } from './signUpStyle'

export default function SignUp() {
  return (
    <>
      <SignUpWrapper>
        <SignUpText>이메일로 회원가입</SignUpText>
        <EmailInput></EmailInput>
        <Margin>
          <PasswordInput></PasswordInput>
        </Margin>
        <NextBtn></NextBtn>
      </SignUpWrapper>
    </>
  )
}
