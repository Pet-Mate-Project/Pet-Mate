import React from 'react'
import { ChatBtn, FollowToggleBtn } from '../button/Button.jsx'
import { ProfileIconS } from '../profileIcon/ProfileIcon.jsx'
import { TextWrapper, UserId, UserName, Wrapper, MoreIcon } from './userStyle.js'
import moreIcon from '../../assets/icon-more-vertical-small.svg'


export function User() {
  return (
    <Wrapper>
      <ProfileIconS />
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

export function UserMore() {
  return (
    <>
      <Wrapper between>
        <User />
        <MoreIcon src={moreIcon} />
      </Wrapper>
    </>
  )
}

export function UserChat() {
  return (
    <>
      <Wrapper between>
        <User />
        <ChatBtn />
      </Wrapper>
    </>
  )
}
