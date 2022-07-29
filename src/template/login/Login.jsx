import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import axios from 'axios';

import { MemoEmailInput, MemoPasswordInput } from '../../components/input/Input';
import { LoginErrorMessege, SignUpErrorMessage } from '../../components/errorMessage/errorMessage'
import { LoginBtn } from '../../components/button/Button';
import { MemoSignUpLink, LoginFormStyle } from './loginStyle';
import { PaddingMain, MemoTitle, AllWrap } from '../../style/commonStyle';

export default function Login() {
  const [userEmail, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('false');
  const [userInfo, setUserInfo] = useState('fasle')
  const { register, formState: { errors } } = useForm({ mode: "onChange" })
  const navigate = useNavigate()

  //비밀번호 입력시 '이메일 또는 비밀번호가 일치하지 않습니다.' 메시지 숨김
  useEffect(() => {
    setErrMsg('false')
  }, [userPassword])

  // 서버에서 데이터 검증 후 확인
  async function loginCheck() {
    try {
      const URL = 'https://mandarin.api.weniv.co.kr';
      const loginReqPath = '/user/login/';
      const res = await axios.post(URL + loginReqPath, {
        user: { email: `${userEmail}`, password: `${userPassword}` },
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const reqMsg = res.data.message; // res 메시지
      if (reqMsg === '이메일 또는 비밀번호가 일치하지 않습니다.') {
        setErrMsg('true'); //에러가 발생한 경우 TRUE
        setUserInfo('false');
      } else {
        setErrMsg('false');
        setUserInfo('true');
      }
      //토큰값 (유저데이터)저장
      if (!!reqMsg === false) {
        localStorage.setItem("accountname", JSON.stringify(res.data.user.accountname))
        localStorage.setItem("token", JSON.stringify(res.data.user.token))
        navigate('/homepage');
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <AllWrap>
      <PaddingMain>
        <MemoTitle>로그인</MemoTitle>
        <LoginFormStyle>
          <MemoEmailInput
            userEmail={userEmail}
            setEmail={setEmail}
            register={register} />
          {errors.email && <SignUpErrorMessage message={errors.email.message} />}
          <MemoPasswordInput
            userPassword={userPassword}
            setPassword={setPassword}
            register={register}
          />
          {errors.password?.type === "required" && <SignUpErrorMessage message={errors.password.message} />}
          {errMsg === 'true' ? <LoginErrorMessege /> : ''}
        </LoginFormStyle>
        <LoginBtn onClick={loginCheck}></LoginBtn>
        <Link to='/join'>
          <MemoSignUpLink>이메일로 회원가입</MemoSignUpLink>
        </Link>
      </PaddingMain>
    </AllWrap>
  );
}

