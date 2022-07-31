import React from 'react'
import { Helmet } from 'react-helmet-async';
import { PaddingMain, MemoTitle, AllWrap } from '../../style/commonStyle'
import { StartBtn } from '../../components/button/Button'
import { MemoMessage } from './profilePageStyle'
import { ProfileSet } from '../profile/ProfileSet'

function ProfilePage({
  userName,
  setName,
  userId,
  setId,
  userIntro,
  setIntro,
  message,
  IdCheck,
  userImg,
  setImg,
  disabled,
  signUp,
  register,
  errors }) {
  return (
    <AllWrap>
      <Helmet>
        <title> 프로필 설정 - 산책가까? </title>
      </Helmet>
      <PaddingMain>
        <MemoTitle>프로필 설정</MemoTitle>
        <MemoMessage>나중에 언제든지 변경할 수 있습니다.
        </MemoMessage>
        <ProfileSet
          message={message}
          userName={userName}
          setName={setName}
          userId={userId}
          setId={setId}
          userIntro={userIntro}
          setIntro={setIntro}
          IdCheck={IdCheck}
          userImg={userImg}
          setImg={setImg}
          register={register}
          errors={errors} />
        <StartBtn
          signUp={signUp}
          disabled={disabled}
          message={message} />
      </PaddingMain>
    </AllWrap>
  )
}

export default ProfilePage