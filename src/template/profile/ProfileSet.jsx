import React from 'react'
import { IdInput, IntroInput, NameInput } from '../../components/input/Input'
import { SignUpErrorMessage } from '../../components/errorMessage/errorMessage'
import Profile from '../../components/profile/Profile'
import { FormStyle } from '../../style/commonStyle'
import { InputStyle, LabelStyle } from '../../components/input/inputStyle'

export function ProfileSet({ userName, setName, userId, setId, userIntro, setIntro, message, IdCheck, userImg, setImg, register, errors }) {
  return (
    <>
      <Profile
        userImg={userImg}
        setImg={setImg} />
      <FormStyle>
        <NameInput
          placeholder={'2-10자 이내여야 합니다.'}
          userName={userName}
          setName={setName}
          register={register} />
        {errors.userName && <SignUpErrorMessage message={errors.userName.message} />}
        <IdInput
          placeholder={'영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'}
          value={userId}
          setId={setId}
          IdCheck={IdCheck}
          register={register} />
        {errors.userId && <SignUpErrorMessage message={errors.userId.message} />}
        {message && <SignUpErrorMessage message={message} />}
        <IntroInput
          placeholder={'자신과 반려동물에 대해 소개해 주세요!'}
          userIntro={userIntro}
          setIntro={setIntro} />
      </FormStyle>
    </>
  )
}


export function ProfileModifySet({ userName, setName, userIntro, setIntro, IdCheck, userImg, setImg, register, errors, userInfoList }) {
  return (
    <>
      <Profile
        userImg={userImg}
        setImg={setImg} />
      <FormStyle>
        <NameInput
          placeholder={userInfoList.username}
          userName={userName}
          setName={setName}
          register={register} />
        {errors.userName && <SignUpErrorMessage message={errors.userName.message} />}
        <IdInput
          disabled={true}
          placeholder={userInfoList.accountname}
          value={userInfoList.accountname || ""}
          IdCheck={IdCheck}
          register={register} />
        <IntroInput
          placeholder={userInfoList.intro}
          userIntro={userIntro}
          setIntro={setIntro} />
      </FormStyle>
    </>
  )
}

