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
  //넣어주는 이미지 
  const [userImg, setImg] = useState('https://raw.githubusercontent.com/Pet-Mate-Project/Pet-Mate/9a1dd2c1758e84421b72fed7d132f5c12e66dc46/src/assets/basic-profile.png');
  //에러 출력 메세지
  const [message, setMessage] = useState("");
  //회원 정보 저장
  const [userList, setUserList] = useState("");
  //서버 통신후 반환된 파일명
  const [imgFileName, setImgFileName] = useState("")
  //다음 버튼 상태관리
  const [next, setNext] = useState(false)

  const url = "https://mandarin.api.weniv.co.kr";

  //프로필 이미지 업로드
  function postImgData() {

    let formData = new FormData()
    formData.append('image', userImg)
    console.log('userimage', userImg)

    axios.post(url + '/image/uploadfile', formData)
      .then((res) => {
        console.log('img res', res)
        setImgFileName(res.data.filename)
        postData(res.data.filename)
      })
  }

  //파일명 상태관리 되고있는지 확인
  console.log('imgFileName', imgFileName)

  //회원가입시 작성 정보 전달 함수
  function postData(file) {

    let userData = {
      "user": {
        "username": userName,
        "email": userEmail,
        "password": userPassword,
        "accountname": userId,
        "intro": userIntro,
        "image": file
      }
    }

    console.log('postdata-userdata', userData)
    axios.post(url + '/user', userData, { headers: { "Content-type": "application/json" } })
      .then(
        (res) => {
          console.log(res)
        })
  }

  // 이미지 보기
  // function showImg() {
  //   axios.get(url + imgFileName).then((res) => {
  //     console.log(res)
  //   })
  // }

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
    setMessage("")
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
        setImg={setImg}
        userImg={userImg}
        postImgData={postImgData}
      />
    )
  }
}

export default SignUpMainPage