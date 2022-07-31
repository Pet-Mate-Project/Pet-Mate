import React from 'react'
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import { AllWrap, PaddingMain, MemoTitle } from '../../style/commonStyle'
import { MemoEmailInput, MemoPasswordConfirmInput, MemoPasswordInput } from '../../components/input/Input'
import { MemoSignUpLink } from '../../template/login/loginStyle'
import { NextBtn } from '../../components/button/Button'
import { MemoSignUpErrorMessage } from '../../components/errorMessage/errorMessage'
import { LoginFormStyle } from '../login/loginStyle.js';

function SignUp({
  disabled,
  nextClick,
  userEmail,
  setEmail,
  userPassword,
  setPassword,
  userConfirmPassword,
  setConfirmPassword,
  message,
  emailCheck,
  register,
  errors
}) {

  return (
    <AllWrap>
      <Helmet>
        <title> 회원가입 - 산책가까? </title>
      </Helmet>
      <PaddingMain>
        <MemoTitle>이메일로 회원가입</MemoTitle>
        <LoginFormStyle>
          <MemoEmailInput
            userEmail={userEmail}
            setEmail={setEmail}
            emailCheck={emailCheck}
            register={register}
          ></MemoEmailInput>
          {errors.email && <MemoSignUpErrorMessage message={errors.email.message} />}
          {message && <MemoSignUpErrorMessage message={message} />}
          <MemoPasswordInput
            userPassword={userPassword}
            setPassword={setPassword}
            register={register}
          ></MemoPasswordInput>
          {errors.password && <MemoSignUpErrorMessage message={errors.password.message} />}
          <MemoPasswordConfirmInput
            userPassword={userPassword}
            userConfirmPassword={userConfirmPassword}
            setConfirmPassword={setConfirmPassword}
            register={register}
          ></MemoPasswordConfirmInput>
          {errors.userConfirmPassword && <MemoSignUpErrorMessage message={errors.userConfirmPassword.message} />}
        </LoginFormStyle>
        <NextBtn
          nextClick={nextClick}
          disabled={disabled}
          message={message}
        ></NextBtn>
        <Link to='/login'>
          <MemoSignUpLink> 로그인페이지로 가기</MemoSignUpLink>
        </Link>
      </PaddingMain>
    </AllWrap>
  )
}

export default SignUp