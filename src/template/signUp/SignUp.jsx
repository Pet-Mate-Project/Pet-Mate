import React from 'react'
import { EmailInput, PasswordInput } from '../../components/input/Input'
import { NextBtn } from '../../components/button/Button'
import { FormStyle, MainStyle, Title } from '../../style/commonLoginStyle'
import { SignUpErrorMessage } from '../../components/errorMessage/errorMessage'


function SignUp({ disabled, nextClick, userEmail, setEmail, userPassword, setPassword, message, emailCheck, register, errors }) {
  return (
    <>
      <MainStyle>
        <Title>이메일로 회원가입</Title>
        <FormStyle>
          <EmailInput
            userEmail={userEmail}
            setEmail={setEmail}
            emailCheck={emailCheck}
            register={register}
          ></EmailInput>
          {errors.email && <SignUpErrorMessage message={errors.email.message} />}
          {message && <SignUpErrorMessage message={message} />}
          <PasswordInput
            userPassword={userPassword}
            setPassword={setPassword}
            register={register}
          ></PasswordInput>
          {errors.password && <SignUpErrorMessage message={errors.password.message} />}
        </FormStyle>
        <NextBtn
          nextClick={nextClick}
          disabled={disabled}
          message={message}
        ></NextBtn>
      </MainStyle>
    </>
  )
}

export default SignUp