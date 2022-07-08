import React from 'react'
import { FollowToggleBtn } from '../button/Button.jsx'
import { ProfileIconM } from '../profileIcon/ProfileIcon.jsx'
import { TextWrapper, UserId, UserName, Wrapper } from './userStyle.js'


export function User() {
  return (
    <Wrapper>
      <ProfileIconM />
      <TextWrapper>
        <UserName>코랑이</UserName>
        <UserId>@coding_arang</UserId>
      </TextWrapper>
    </Wrapper>
  )
}

export function UserFollow() {
  return (
    <>
      <Wrapper between>
        <User />
        <FollowToggleBtn />
      </Wrapper>
    </>
  )
}
