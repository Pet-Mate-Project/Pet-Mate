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
  const [userImg, setImg] = useState("");
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const [userInfoList, setUserInfoList] = useState([])
  const token = JSON.parse(localStorage.getItem("token"));
  const accountname = JSON.parse(localStorage.getItem("accountname"));
  const url = "https://mandarin.api.weniv.co.kr";

  useEffect(() => {
    getUserInfo()
  }, [])

  //사용자 정보 받아오기
  function getUserInfo() {
    axios.get(url + `/profile/${accountname}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-type": "application/json"
      }
    }).then((res) => {
      setImg(res.data.profile.image);
      setName(res.data.profile.username);
      setIntro(res.data.profile.intro);
      setId(res.data.profile.accountname);
      setUserInfoList(res.data.profile)
    })
  }


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
      "accountname": userId,
      "intro": userIntro,
      "image": ""
    }
  }


  //프로필수정
  async function profileSave() {
    try {
      console.log(userImg);
      const imgUploadData = await ImgUpload(userImg)
      const token = JSON.parse(localStorage.getItem("token"));
      console.log('img res', imgUploadData)
      userData.user.image = imgUploadData
      const res = await axios.put(url + '/user', userData, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-type": "application/json"
        }
      })
      console.log(res);
      navigate(`/profilepage`);
    }
    catch (error) {
      console.log(error);
    }

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
