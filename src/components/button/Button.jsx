import React, { useState } from 'react';
import { Button, IconButton } from './buttonStyle';
import iconEmail from '../../assets/icon-email.svg';
import iconSign from '../../assets/icon-signup.svg';
import {Link} from 'react-router-dom'
//검증관련 버튼 
export function NextBtn({ nextClick, disabled, message }) {
  if (message === '이미 가입된 이메일 주소 입니다.' || message === '' || !disabled) {
    return <Button type='button'>다음</Button>;
  }
  else {
    return <Button type='button' onClick={nextClick} disabled={!disabled} hover>다음</Button>;
  }
}

export function StartBtn({ signUp, disabled, message }) {

  if (message === '이미 가입된 계정ID 입니다.' || message === '' || !disabled) {
    return <Button>시작하기</Button>;
  }
  else {
    return <Button onClick={signUp} disabled={!disabled} hover>시작하기</Button>;
  }
}

// -------------------------------------------------------
// 기본 버튼 -> 텍스트 넣어서 사용
export function LoginBtn({ onClick }) {
  return (
    <Button onClick={onClick} hover>
      로그인
    </Button>
  );
}

// -------------------------------------------------------
//아이콘있는 버튼
export function EmailLoginBtn() {
  return (
    <IconButton icon={iconEmail} hover>
      이메일로 로그인
    </IconButton>
  );
}

export function JoinBtn() {
  return (
    <IconButton icon={iconSign} hover>
      회원가입
    </IconButton>
  );
}

// -------------------------------------------------------

export function SaveBtn(props) {
  if (props.message === '이미 가입된 계정ID 입니다.' || props.message === '' || !props.disabled)
    return (
      <Button width={90} height={32} right={props} >
        저장
      </Button>
    )
  return (
    <Button width={90} height={32} right={props} hover
      onClick={props.profileSave}
      disabled={!props.disabled} >
      저장
    </Button>
  )
}

export function PostSaveBtn({disabled,onClick}) {
  console.log(disabled);
  if (disabled) {
    return (
      <Button width={90} height={32} right 
        disabled={disabled} >
        저장
      </Button>
    )
  }
  else{
    return(
      <Link to='/homepage'>
        <Button width={90} height={32} right 
          onClick={onClick}
          disabled={disabled} hover >
      저장
        </Button>
      </Link>
    )
  }

}

export function UploadBtn() {
  return (
    <Button width={90} height={32} hover>
      업로드
    </Button>
  )
}

//중간사이즈(120x44) 버튼
export function MiddleBtn({ textBtn, onClickFt }) {
  return (
    <Button width={120} height={44} hover onClick={onClickFt}>
      {textBtn}
    </Button>
  )
}

// -------------------------------------------------------
// 색상반전 버튼
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

// -------------------------------------------------------
//토글버튼

export function FollowToggleBtn() {
  const [isFollow, setIsFollow] = useState(false)
  function onClick() {
    isFollow === false ?
      setIsFollow(true) :
      setIsFollow(false);
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