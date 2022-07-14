import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ProfileSaveNav } from '../../components/navBack/NavBack';
import { ImgUpload } from '../../pages/SignUpMain';
import { ProfileSet } from '../profile/ProfileSet';
import { useForm } from 'react-hook-form';
import { AllWrap } from '../../style/commonStyle';
import { ProfileModifyMain } from './profileModifyStyle'

function ProfileModify() {
  const [userName, setName] = useState("");
  const [userId, setId] = useState("");
  const [userIntro, setIntro] = useState("");
  const [userImg, setImg] = useState('https://raw.githubusercontent.com/Pet-Mate-Project/Pet-Mate/9a1dd2c1758e84421b72fed7d132f5c12e66dc46/src/assets/basic-profile.png');
  const [message, setMessage] = useState('');


  const url = "https://mandarin.api.weniv.co.kr";

  //유효성 검사를 위한 react-hook-form 변수 선언
  const {
    register,
    formState: { isValid, errors },
  } = useForm({ mode: "onChange" });

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
            console.log(res);
            setMessage(res.data.message);
          });
    }
  }

  //이미지업로드
  ImgUpload(userImg)

  let userData = {
    "user": {
      "username": userName,
      "accountname": userId,
      "intro": userIntro,
      "image": ""
    }
  }

  //프로필수정
  async function profileSave() {
    console.log('클릭')
    console.log(userImg);
    const imgUploadData = await ImgUpload(userImg)
    const user = JSON.parse(localStorage.getItem("userinfo")).user;
    console.log('img res', imgUploadData)
    userData.user.image = imgUploadData
    console.log(userData)
    axios.put(url + '/user', userData, {
      headers: {
        "Authorization": `Bearer ${user.token}`,
        "Content-type": "application/json"
      }
    })
      .then((res) => {
        console.log(res);
      })
  }

  return (
    <>
      <AllWrap>
        <header>
          <ProfileSaveNav profileSave={profileSave}
            message={message}
            disabled={isValid} />
        </header>
        <ProfileModifyMain>
          <ProfileSet userName={userName} setName={setName} userId={userId} setId={setId} userIntro={userIntro} setIntro={setIntro} message={message} userImg={userImg} setImg={setImg} register={register} IdCheck={IdCheck} errors={errors} />
        </ProfileModifyMain>
      </AllWrap>
    </>
  )
}

export default ProfileModify
