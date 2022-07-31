import React from 'react'
import { IdInput, MemoIntroInput, MemoNameInput } from '../../components/input/Input'
import { MemoSignUpErrorMessage } from '../../components/errorMessage/errorMessage'
import { Profile, ProfileModifyShow } from '../../components/profile/Profile'
import { FormStyle } from '../../style/commonStyle'
import { LoginFormStyle } from '../login/loginStyle.js';

export function ProfileSet({ userName, setName, userId, setId, userIntro, setIntro, message, IdCheck, userImg, setImg, register, errors }) {
  return (
    <>
      <Profile
        userImg={userImg}
        setImg={setImg} />
      <LoginFormStyle>
        <MemoNameInput
          placeholder={'2-10자 이내여야 합니다.'}
          userName={userName}
          setName={setName}
          register={register} />
        {errors.userName && <MemoSignUpErrorMessage message={errors.userName.message} />}
        <IdInput
          placeholder={'영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'}
          value={userId}
          setId={setId}
          IdCheck={IdCheck}
          register={register} />
        {errors.userId && <MemoSignUpErrorMessage message={errors.userId.message} />}
        {message && <MemoSignUpErrorMessage message={message} />}
        <MemoIntroInput
          placeholder={'자신과 반려동물에 대해 소개해 주세요!'}
          userIntro={userIntro}
          setIntro={setIntro}
          register={register} />
        {errors.userIntro && <MemoSignUpErrorMessage message={errors.userIntro.message} />}
      </LoginFormStyle>
    </>
  )
}


export function ProfileModifySet({ userName, setName, userIntro, setIntro, IdCheck, userImg, setImg, register, errors, userId, setId }) {
  return (
    <>
      <ProfileModifyShow
        userImg={userImg}
        setImg={setImg} />
      <FormStyle>
        <MemoNameInput
          userName={userName}
          setName={setName}
          register={register} />
        {errors.userName && <MemoSignUpErrorMessage message={errors.userName.message} />}
        <IdInput
          disabled={true}
          userId={userId}
          setId={setId}
          IdCheck={IdCheck}
          register={register} />
        <MemoIntroInput
          register={register}
          userIntro={userIntro}
          setIntro={setIntro} />
        {errors.userIntro && <MemoSignUpErrorMessage message={errors.userIntro.message} />}
      </FormStyle>
    </>
  )
}

