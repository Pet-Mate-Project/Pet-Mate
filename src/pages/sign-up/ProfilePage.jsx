import React from 'react'
import { Message, Title, FormStyle } from './profilePageStyle'
import Profile from '../../components/profile/Profile'
import { MainStyle } from '../main/mainStyle'
import { UserId, UserIntro, UserName } from '../../components/input/Input'
import { StartBtn } from '../../components/button/Button'

function ProfilePage() {
  return (
    <MainStyle>

      <Title>프로필 설정</Title>
      <Message>나중에 언제든지 변경할 수 있습니다.
      </Message>
      <Profile />
      <FormStyle>
        <UserName />
        <UserId />
        <UserIntro />
      </FormStyle>
      <StartBtn />
    </MainStyle>
  )
}

export default ProfilePage