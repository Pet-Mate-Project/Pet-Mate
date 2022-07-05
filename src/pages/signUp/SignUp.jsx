import React from 'react'
import { EmailInput, PasswordInput } from '../../components/input/Input'
import { NextBtn } from '../../components/button/Button'
import { FormStyle, MainStyle, Title } from '../../style/commonLoginStyle'
import { SignUpErrorMessage } from '../../components/errorMessage/errorMessage'


function SignUp({ nextClick, userEmail, setEmail, userPassword, setPassword, message, emailCheck }) {
  console.log('메세지', message)
  return (
    <>
      <MainStyle>
        <Title>이메일로 회원가입</Title>
        <FormStyle>
          <EmailInput
            userEmail={userEmail}
            setEmail={setEmail}
            emailCheck={emailCheck}
          ></EmailInput>
          <SignUpErrorMessage
            message={message} />
          <PasswordInput
            userPassword={userPassword}
            setPassword={setPassword}></PasswordInput>
        </FormStyle>
        <NextBtn
          nextClick={nextClick}
        ></NextBtn>
      </MainStyle>
    </>
  )
}

export default SignUp