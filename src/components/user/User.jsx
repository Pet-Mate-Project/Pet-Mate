import React from 'react'
import { ChatBtn, FollowToggleBtn } from '../button/Button.jsx'
import { ChatListProfileIcon, ProfileIconS } from '../profileIcon/ProfileIcon.jsx'
import { TextWrapper, UserId, UserName, Wrapper, MoreIcon, ChatPreview, ChatDate, ChatListWrapper } from './userStyle.js'
import moreIcon from '../../assets/icon-more-vertical-small.svg'


export function User(props) {
  return (
    <Wrapper>
      <ProfileIconS />
      <TextWrapper>
        <UserName>{props.userName}</UserName>
        <UserId>@ {props.userId}</UserId>
      </TextWrapper>
    </Wrapper>
  )
}

export function UserFollow({ userName, userId }) {
  return (
    <>
      <Wrapper between>
        <User userName={userName} userId={userId} />
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

export function UserChatList(props) {
  return (
    <ChatListWrapper>
      <ChatListProfileIcon visible={props.visible}></ChatListProfileIcon>
      <TextWrapper>
        <UserName>{props.userName}</UserName>
        <ChatPreview>{props.chatPreview}</ChatPreview>
      </TextWrapper>
      <ChatDate>{props.chatDate}</ChatDate>
    </ChatListWrapper>
  )
}