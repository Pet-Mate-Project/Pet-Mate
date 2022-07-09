import React from 'react'
import { Message } from './profilePageStyle'
<<<<<<< HEAD
import Profile from '../../components/profile/Profile'
import { PaddingMain, Title, FormStyle } from '../../style/commonStyle'
import { IdInput, IntroInput, NameInput } from '../../components/input/Input'
=======
import { MainStyle, Title } from '../../style/commonLoginStyle'
>>>>>>> 10eb87d03e2ccc0a042d43a9d43afbfd9d2d2403
import { StartBtn } from '../../components/button/Button'
import { ProfileSet } from '../profile/ProfileSet'

function ProfilePage({ userName, setName, userId, setId, userIntro, setIntro, message, IdCheck, userImg, setImg, disabled, signUp, register, errors }) {
  return (
    <PaddingMain>
      <Title>프로필 설정</Title>
      <Message>나중에 언제든지 변경할 수 있습니다.
      </Message>
      <ProfileSet userName={userName}
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
  )
}

export default ProfilePage