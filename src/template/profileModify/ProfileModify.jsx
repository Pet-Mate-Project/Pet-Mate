import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { AxiosUserData, selectUserData } from '../../reducers/getUserInfoSlice'
import axios from 'axios';
import { ProfileSaveNav } from '../../components/navBack/NavBack';
import { ImgUpload } from '../../pages/SignUpMain';
import { ProfileModifySet } from '../profile/ProfileSet';
import { AllWrap, Heading } from '../../style/commonStyle';
import { ProfileModifyMain } from './profileModifyStyle'

function ProfileModify() {
  const [userName, setName] = useState("");
  const [userId, setId] = useState("");
  const [userIntro, setIntro] = useState("");
  const [userImg, setImg] = useState("");
  const navigate = useNavigate();
  const accountname = JSON.parse(localStorage.getItem("accountname"));
  const url = "https://mandarin.api.weniv.co.kr";
  const dispatch = useDispatch();
  const userInfoList = useSelector(selectUserData)
  const URL = "https://mandarin.api.weniv.co.kr";

  useEffect(() => {
    dispatch(AxiosUserData(URL + `/profile/${accountname}`))
    setImg(userInfoList.image);
    setName(userInfoList.username);
    setIntro(userInfoList.intro);
    setId(userInfoList.accountname);
  }, []);

  const fixImg = useSelector(selectUserData).image;

  //유효성 검사를 위한 react-hook-form 변수 선언
  const {
    register,
    formState: { isValid, errors },
  } = useForm({ mode: "onChange" });

  //이미지업로드
  // ImgUpload(userImg)
  // console.log('함수실행후', userImg)
  let userData = {
    "user": {
      "username": userName,
      "accountname": userId,
      "intro": userIntro,
      "image": ''
    }
  };

  //프로필수정
  async function profileSave() {
    try {
      const imgUploadData = await ImgUpload(userImg);
      const token = JSON.parse(localStorage.getItem("token"));
      userData.user.image = imgUploadData.search('undefined') === -1 ? imgUploadData : fixImg;

      await axios.put(url + '/user', userData, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-type": "application/json"
        }
      })
      navigate(`/profilepage`);
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <AllWrap>
      <Helmet>
        <title>내 프로필 수정 - 산책가까?</title>
      </Helmet>
      <header>
        <Heading>내 프로필 수정 페이지</Heading>
        <ProfileSaveNav
          profileSave={profileSave} />
      </header>
      <ProfileModifyMain>
        <ProfileModifySet
          userName={userName}
          setName={setName}
          userId={userId}
          setId={setId}
          userIntro={userIntro}
          setIntro={setIntro}
          userImg={userImg}
          setImg={setImg}
          register={register}
          errors={errors} />
      </ProfileModifyMain>
    </AllWrap>
  )
}

export default ProfileModify
