import React, { useState } from 'react';
import { Button } from './buttonStyle';
import iconEmail from '../../assets/icon-email.svg';
import iconSign from '../../assets/icon-signup.svg';

export function NextBtn({ nextClick }) {
  return <Button onClick={nextClick} hover>다음</Button>;
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

export function StartBtn({ postImgData }) {

  return (
    <Button onClick={postImgData} hover >
      시작하기
    </Button>
  );
}


export function SaveBtn() {
  return (
    <Button width={90} height={32} hover >
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
      width={120}
      height={44}
      color={'#1D57C1'}
      backColor={'white'}
      hover
    >
      채팅하기
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