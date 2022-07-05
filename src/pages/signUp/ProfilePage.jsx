import React from 'react'
import { Message } from './profilePageStyle'
import Profile from '../../components/profile/Profile'
import { MainStyle, Title, FormStyle } from '../../style/commonLoginStyle'
import { IdInput, IntroInput, NameInput } from '../../components/input/Input'
import { StartBtn } from '../../components/button/Button'
import { SignUpErrorMessage } from '../../components/errorMessage/errorMessage'

function ProfilePage({ userName, setName, userId, setId, userIntro, setIntro, postData, message, IdCheck }) {
  return (
    <MainStyle>

      <Title>프로필 설정</Title>
      <Message>나중에 언제든지 변경할 수 있습니다.
      </Message>
      <Profile />
      <FormStyle>
        <NameInput
          userName={userName}
          setName={setName} />
        <IdInput
          userId={userId}
          setId={setId}
          IdCheck={IdCheck} />
        <SignUpErrorMessage message={message} />
        <IntroInput
          userIntro={userIntro}
          setIntro={setIntro} />
      </FormStyle>
      <StartBtn postData={postData} />
    </MainStyle>
  )
}

export default ProfilePage