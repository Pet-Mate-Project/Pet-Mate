import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ProfileSaveNav } from '../../components/navBack/NavBack';
import { ImgUpload } from '../../pages/SignUpMain';
import { ProfileModifySet } from '../profile/ProfileSet';
import { useForm } from 'react-hook-form';
import { AllWrap } from '../../style/commonStyle';
import { ProfileModifyMain } from './profileModifyStyle'
import { useNavigate } from 'react-router-dom'

function ProfileModify() {
  const [userName, setName] = useState("");
  const [userId, setId] = useState("");
  const [userIntro, setIntro] = useState("");
  const [userImg, setImg] = useState('https://raw.githubusercontent.com/Pet-Mate-Project/Pet-Mate/9a1dd2c1758e84421b72fed7d132f5c12e66dc46/src/assets/basic-profile.png');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const [userInfoList, setUserInfoList] = useState([])
  const user = JSON.parse(localStorage.getItem("userinfo")).user;

  const url = "https://mandarin.api.weniv.co.kr";

  //유효성 검사를 위한 react-hook-form 변수 선언
  const {
    register,
    formState: { isValid, errors },
  } = useForm({ mode: "onChange" });

  //이미지업로드
  ImgUpload(userImg)

  let userData = {
    "user": {
      "username": userName,
      "accountname": user.accountname,
      "intro": userIntro,
      "image": ""
    }
  }
  useEffect(() => {
    getUserInfo()
  }, [])

  //사용자 정보 받아오기
  function getUserInfo() {
    axios.get(url + `/profile/${user.accountname}`, {
      headers: {
        "Authorization": `Bearer ${user.token}`,
        "Content-type": "application/json"
      }
    }).then((res) => setUserInfoList(res.data.profile))
  }

  //프로필수정
  async function profileSave() {
    console.log('클릭')
    console.log(userImg);
    const imgUploadData = await ImgUpload(userImg)
    console.log('user', user)
    console.log('img res', imgUploadData)
    userData.user.image = imgUploadData
    // console.log(userData)
    const res = await axios.put(url + '/user', userData, {
      headers: {
        "Authorization": `Bearer ${user.token}`,
        "Content-type": "application/json"
      }
    })
    console.log(res);
    navigate(`/profilepage`);
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
          <ProfileModifySet
            userInfoList={userInfoList}
            userName={userName} setName={setName} userId={userId} setId={setId} userIntro={userIntro} setIntro={setIntro} message={message} userImg={userImg} setImg={setImg} register={register} errors={errors} />
        </ProfileModifyMain>
      </AllWrap>
    </>
  )
}

export default ProfileModify
