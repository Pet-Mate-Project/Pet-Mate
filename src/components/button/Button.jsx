import React from 'react';
import { LoginBtn } from './index.style';
import iconUser from '../../asset/icon-user.svg';

export default function Login() {
  return (
    <>
      <LoginBtn width={322} height={44} icon={iconUser}>
        이메일로 로그인
      </LoginBtn>

      <LoginBtn width={322} height={44} icon={iconUser}>
        이메일로 로그인
      </LoginBtn>

      <LoginBtn width={322} height={44}>
        로그인
      </LoginBtn>

      <LoginBtn width={322} height={44}>
        다음
      </LoginBtn>

      <LoginBtn width={322} height={44}>
        시작하기
      </LoginBtn>

      <LoginBtn width={90} height={32}>
        저장
      </LoginBtn>

      <LoginBtn width={90} height={32}>
        업로드
      </LoginBtn>

      <LoginBtn width={120} height={44}>
        이전페이지
      </LoginBtn>

      <LoginBtn
        width={120}
        height={44}
        color={' #013ba3'}
        backcolor={'#ffffff'}
      >
        채팅하기
      </LoginBtn>

      <LoginBtn
        width={120}
        height={44}
        color={' #767676'}
        backcolor={'#ffffff'}
      >
        그냥 만든거
      </LoginBtn>

      <LoginBtn width={56} height={28}>
        팔로우
      </LoginBtn>
    </>
  );
}
