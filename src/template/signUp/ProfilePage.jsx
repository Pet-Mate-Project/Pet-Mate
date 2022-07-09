import React from 'react'
import { Message } from './profilePageStyle'
import { MainStyle, Title } from '../../style/commonLoginStyle'
import { StartBtn } from '../../components/button/Button'
import { ProfileSet } from '../profile/ProfileSet'

function ProfilePage({ userName, setName, userId, setId, userIntro, setIntro, message, IdCheck, userImg, setImg, disabled, signUp, register, errors }) {
  return (
    <MainStyle>
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
    </MainStyle>
  )
}

export default ProfilePage