import React from 'react'
import { IdInput, IntroInput, NameInput } from '../../components/input/Input'
import { SignUpErrorMessage } from '../../components/errorMessage/errorMessage'
import Profile from '../../components/profile/Profile'
import { FormStyle } from '../../style/commonLoginStyle'

export function ProfileSet({ userName, setName, userId, setId, userIntro, setIntro, message, IdCheck, userImg, setImg, register, errors }) {
  return (
    <>
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
    </>
  )
}

