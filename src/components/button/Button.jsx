import React from 'react';
import { Button } from './buttonStyle';
import iconEmail from '../../assets/icon-email.svg';
import iconSign from '../../assets/icon-signup.svg';

export function NextBtn() {
  return <Button hover>다음</Button>;
}

export function LoginBtn() {
  return <Button hover>로그인</Button>;
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

// export function Login() {
//   return (
//     <>

//       <Button hover >
//         시작하기
//       </Button>

//       <Button width={90} height={32} hover >
//         저장
//       </Button>

//       <Button width={90} height={32} hover>
//         업로드
//       </Button>

//       <Button width={120} height={44} hover>
//         이전페이지
//       </Button>

//       <Button
//         width={120}
//         height={44}
//         color={'#1D57C1'}
//         backColor={'white'}
//         hover
//       >

//         채팅하기
//       </Button>

//       <Button
//         width={56}
//         height={28}
//         color={'#767676'}
//         backColor={'white'}>

//         취소
//       </Button>

//       <Button width={56} height={28}>
//         팔로우
//       </Button>
//     </>
//   );
// }
