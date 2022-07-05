import React, { useState } from 'react';
import axios from 'axios';
import SignUp from './SignUp';
import ProfilePage from './ProfilePage';

function SignUpMainPage() {
  //필요한 정보 상태 관리
  const [userName, setName] = useState("");
  const [userId, setId] = useState("");
  const [userIntro, setIntro] = useState("");
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  //유효성 출력 메세지 상태관리
  const [message, setMessage] = useState("");
  //회원 정보 저장
  const [userList, setUserList] = useState("")
  //다음 버튼 상태관리
  const [next, setNext] = useState(false)

  const url = "https://mandarin.api.weniv.co.kr";

  //통신 관리 함수
  function postData() {

    let userData = {
      "user": {
        "username": userName,
        "email": userEmail,
        "password": userPassword,
        "accountname": userId,
        "intro": userIntro,
        "image": 'https://mandarin.api.weniv.co.kr/1641906557953.png'
      }
    }

    console.log(userData)
    axios.post(url + '/user', userData, { headers: { "Content-type": "application/json" } })
      .then(
        (res) => {
          console.log(res)
          setUserList(res)
        })
  }

  //이메일 검증 함수
  function emailCheck() {
    let emailData = {
      "user": {
        "email": userEmail
      }
    }

    axios.post(url + '/user/emailvalid', emailData, {
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(
        (res) => {
          console.log(res)
          setMessage(res.data.message);
        });
  }

  // 계정 검증 함수
  function IdCheck() {
    let idData = {
      "user": {
        "accountname": userId
      }
    }

    axios.post(url + '/user/accountnamevalid', idData, {
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(
        (res) => {
          console.log(res)
          setMessage(res.data.message);
        });
  }

  //다음 버튼 함수
  function nextClick() {
    setNext(true);
  }

  if (next === false) {
    return (
      <>
        <SignUp
          userEmail={userEmail}
          setEmail={setEmail}
          nextClick={nextClick}
          userPassword={userPassword}
          setPassword={setPassword}
          emailCheck={emailCheck}
          message={message}
        />
      </>
    )
  }
  else if (next === true) {
    return (
      <ProfilePage
        userName={userName}
        setName={setName}
        userId={userId}
        setId={setId}
        userIntro={userIntro}
        setIntro={setIntro}
        postData={postData}
        IdCheck={IdCheck}
        message={message}
      />
    )
  }
}

export default SignUpMainPage