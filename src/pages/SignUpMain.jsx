import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SignUp from '../template/signUp/SignUp';
import ProfilePage from '../template/signUp/ProfilePage';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export async function ImgUpload(userImg) {
  
  let formData = new FormData()
  formData.append('image', userImg)
  const res = await axios.post('https://mandarin.api.weniv.co.kr/image/uploadfile', formData)
  return res.data.filename
}

export function SignUpMainPage() {
  //필요한 정보 상태 관리
  const [userName, setName] = useState("");
  const [userId, setId] = useState("");
  const [userIntro, setIntro] = useState("");
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  //넣어주는 이미지 
  const [userImg, setImg] = useState('https://raw.githubusercontent.com/Pet-Mate-Project/Pet-Mate/9a1dd2c1758e84421b72fed7d132f5c12e66dc46/src/assets/basic-profile.png');
  //에러 출력 메세지
  const [message, setMessage] = useState('');
  //다음 버튼 상태관리
  const [next, setNext] = useState(false)

  const url = "https://mandarin.api.weniv.co.kr";
  const navigator = useNavigate();

  //유효성 검사를 위한 react-hook-form 변수 선언
  const {
    register,
    formState: { isValid, errors },
  } = useForm({ mode: "onChange" });

  ImgUpload(userImg)  //이미지 업로드 함수 실행
  //유저 데이터 저장
  let userData = {
    "user": {
      "username": userName,
      "email": userEmail,
      "password": userPassword,
      "accountname": userId,
      "intro": userIntro,
      "image": ""
    }
  }

  //회원가입
  async function signUp() {
    const imgUploadData = await ImgUpload(userImg)
    console.log('img res', imgUploadData)
    //유저데이터 변수의 이미지에 저장 
    userData.user.image = imgUploadData
    //회원가입 최종 전송
    axios.post(url + '/user', userData,
      { headers: { "Content-type": "application/json" } })
      .then((res) => {
        console.log('회원가입', res);
        navigator('/login')
      })
  }

  //이메일 검증시 메세지 출력을 위한 부분
  useEffect(() => {
    setMessage('');
  }, [userEmail])

  //이메일 검증
  function emailCheck() {
    let emailData = {
      "user": {
        "email": userEmail
      }
    }

    if (!errors.email) {
      axios.post(url + '/user/emailvalid', emailData, {
        headers: {
          "Content-type": "application/json"
        }
      })
        .then(
          (res) => {
            console.log(res);
            setMessage(res.data.message);
          });
    }
  }

  //계정 검증시 메세지 출력을 위한 부분
  useEffect(() => {
    setMessage('');
  }, [userId])

  // 계정 검증 함수
  function IdCheck() {
    let idData = {
      "user": {
        "accountname": userId
      }
    }
    if (!errors.userId) {
      axios.post(url + '/user/accountnamevalid', idData, {
        headers: {
          "Content-type": "application/json"
        }
      })
        .then(
          (res) => {
            console.log('res', res);
            setMessage(res.data.message)
          });
    }
  }
  //다음 버튼
  function nextClick() {
    setNext(true);
    setMessage('')
  }

  if (next === false) {
    return (
      <>
        <SignUp
          userEmail={userEmail}
          setEmail={setEmail}
          nextClick={nextClick}
          disabled={isValid}
          userPassword={userPassword}
          setPassword={setPassword}
          emailCheck={emailCheck}
          message={message}
          register={register}
          errors={errors}
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
        signUp={signUp}
        disabled={isValid}
        IdCheck={IdCheck}
        message={message}
        setImg={setImg}
        userImg={userImg}
        register={register}
        errors={errors}
      />
    )
  }
}

export default SignUpMainPage