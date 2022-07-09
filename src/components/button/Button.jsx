import React, { useState } from 'react';
import { Button } from './buttonStyle';
import iconEmail from '../../assets/icon-email.svg';
import iconSign from '../../assets/icon-signup.svg';

export function NextBtn({ nextClick, disabled, message }) {
  if (message === '이미 가입된 이메일 주소 입니다.' || message === '' || !disabled) {
    return <Button type='button'>다음</Button>;
  }
  else {
    return <Button type='button' onClick={nextClick} disabled={!disabled} hover>다음</Button>;
  }
}


export function LoginBtn({ onClick }) {
  return (
    <Button onClick={onClick} hover>
      로그인
    </Button>
  );
}

export function EmailLoginBtn() {
  return (
    <Button icon={iconEmail} hover>
      이메일로 로그인
    </Button>
  );
}

export function JoinBtn() {
  return (
    <Button icon={iconSign} hover>
      회원가입
    </Button>
  );
}

export function StartBtn({ signUp, disabled, message }) {

  if (message === '이미 가입된 계정ID 입니다.' || message === '' || !disabled) {
    return <Button>시작하기</Button>;
  }
  else {
    return <Button onClick={signUp} disabled={!disabled} hover>시작하기</Button>;
  }
}


export function SaveBtn(props) {

  return (
    <Button width={90} height={32} right={props} hover
      onClick={props.profileSave} >
      저장
    </Button>
  )
}

export function UploadBtn() {
  return (
    <Button width={90} height={32} hover>
      업로드
    </Button>
  )
}

export function BackBtn() {
  return (
    <Button width={120} height={44} hover>
      이전페이지
    </Button>
  )
}

export function ChatBtn() {
  return (<>
    <Button
      width={90}
      height={32}
      color={'#1D57C1'}
      backColor={'white'}
      hover
    >
      연락하기
    </Button>
  </>)
}

export function FollowToggleBtn() {
  const [isFollow, setIsFollow] = useState(false)

  function onClick() {
    isFollow === false ?
      setIsFollow(true) :
      setIsFollow(false);
    console.log(isFollow)
  }

  if (!isFollow) {
    return (
      <Button width={56} height={28}
        onClick={onClick}>
        팔로우
      </Button>
    )
  } else {
    return (
      <>
        <Button
          width={56}
          height={28}
          color={'#767676'}
          backColor={'white'}
          onClick={onClick}>
          취소
        </Button>
      </>
    )
  }
}