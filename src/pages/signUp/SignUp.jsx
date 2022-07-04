import React from 'react'
import { EmailInput, PasswordInput } from '../../components/input/Input'
import { NextBtn } from '../../components/button/Button'
import { FormStyle, MainStyle, Title } from '../../style/commonLoginStyle'


export default function SignUp() {
  return (
    <>
      <MainStyle>
        <Title>이메일로 회원가입</Title>
        <FormStyle>
          <EmailInput></EmailInput>
          <PasswordInput></PasswordInput>
        </FormStyle>
        <NextBtn></NextBtn>
      </MainStyle>
    </>
  )
}
