import React from 'react'
import { Message } from './profilePageStyle'
import Profile from '../../components/profile/Profile'
import { PaddingMain, Title, FormStyle } from '../../style/commonStyle'
import { IdInput, IntroInput, NameInput } from '../../components/input/Input'
import { StartBtn } from '../../components/button/Button'
import { SignUpErrorMessage } from '../../components/errorMessage/errorMessage'

function ProfilePage({ userName, setName, userId, setId, userIntro, setIntro, message, IdCheck, userImg, setImg, disabled, signUp, register, errors }) {
  return (
    <PaddingMain>
      <Title>프로필 설정</Title>
      <Message>나중에 언제든지 변경할 수 있습니다.
      </Message>
      <Profile
        userImg={userImg}
        setImg={setImg} />
      <FormStyle>
        <NameInput
          userName={userName}
          setName={setName}
          register={register} />
        {errors.userName && <SignUpErrorMessage message={errors.userName.message} />}
        <IdInput
          userId={userId}
          setId={setId}
          IdCheck={IdCheck}
          register={register} />
        {errors.userId && <SignUpErrorMessage message={errors.userId.message} />}
        {message && <SignUpErrorMessage message={message} />}
        <IntroInput
          userIntro={userIntro}
          setIntro={setIntro} />
      </FormStyle>
      <StartBtn
        signUp={signUp}
        disabled={disabled}
        message={message} />
    </PaddingMain>
  )
}

export default ProfilePage