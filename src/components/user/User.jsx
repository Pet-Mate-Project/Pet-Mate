import React from 'react'
import { ChatBtn, FollowToggleBtn } from '../button/Button.jsx'
import { ChatListProfileIcon, ProfileIconS } from '../profileIcon/ProfileIcon.jsx'
import { TextWrapper, UserId, UserName, Wrapper, MoreIcon, ChatPreview, ChatDate, ChatListWrapper } from './userStyle.js'
import moreIcon from '../../assets/icon-more-vertical-small.svg'


export function User({userName,userId,img}) {
  return (
    <Wrapper>
      <ProfileIconS img={img} />
      <TextWrapper>
        <UserName>{userName}</UserName>
        <UserId>@ {userId}</UserId>
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

export function UserMore({userName,userId,img}) {
  return (
    <>
      <Wrapper between>
        <User userName={userName} userId={userId} img={img} />
        <MoreIcon src={moreIcon} />
      </Wrapper>
    </>
  )
}

export function UserChat({userName,userId,img}) {
  return (
    <>
      <Wrapper between>
        <User userName={userName} userId={userId} img={img}/>
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