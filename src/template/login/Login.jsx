import React, { useEffect } from 'react';
import { EmailInput, PasswordInput } from '../../components/input/Input';
import { LoginBtn } from '../../components/button/Button';
import { SignUpLink } from './loginStyle';
import { PaddingMain, FormStyle, Title, AllWrap } from '../../style/commonStyle';
import { useState } from 'react';
import { LoginErrorMessege, SignUpErrorMessage } from '../../components/errorMessage/errorMessage'
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';


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
    const URL = 'https://mandarin.api.weniv.co.kr';
    const loginReqPath = '/user/login/';

    //Axios 단축메소드 사용
    console.log(`이메일| ${userEmail} 비밀번호|${userPassword}`);
    const res = await axios.post(URL + loginReqPath, {
      // body 값
      user: { email: `${userEmail}`, password: `${userPassword}` },

      //요청헤더
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log(res);
    const reqMsg = res.data.message; // res 메시지
    console.log(reqMsg);

    //에러메시지 전달
    if (reqMsg === '이메일 또는 비밀번호가 일치하지 않습니다.') {
      setErrMsg('true'); //에러가 발생한 경우 TRUE
      setUserInfo('false');
    } else {
      setErrMsg('false');
      setUserInfo('true');
    }

    //토큰값 (유저데이터)저장
    if (reqMsg !== '이메일 또는 비밀번호가 일치하지 않습니다.') {
      console.log("1");
      localStorage.setItem("userinfo", JSON.stringify(res.data))
      console.log(JSON.parse(localStorage.getItem("userinfo")));
      //토큰접근
      console.log(JSON.parse(localStorage.getItem("userinfo")).user.token);

      navigate('/homepage');
    }//if문


  } // check함수

  //test값
  // hehe@test.com
  //123456
  return (
    <AllWrap>
      <PaddingMain>
        <Title>로그인</Title>
        <FormStyle>
          <EmailInput
            userEmail={userEmail}
            setEmail={setEmail}
            register={register} />
          {errors.email && <SignUpErrorMessage message={errors.email.message} />}
          <PasswordInput
            userPassword={userPassword}
            setPassword={setPassword}
            register={register}
          />
          {errors.password?.type === "required" && <SignUpErrorMessage message={errors.password.message} />}
          {errMsg === 'true' ? <LoginErrorMessege /> : ''}
        </FormStyle>
        <LoginBtn onClick={loginCheck}></LoginBtn>
        <Link to='/join'>
          <SignUpLink>이메일로 회원가입</SignUpLink>
        </Link>
      </PaddingMain>
    </AllWrap>
  );
}
