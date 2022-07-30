import React from 'react'
import { NavBack } from '../../components/navBack/NavBack'
import { RightSpeechBubble, LeftSpeechBubble } from '../../components/speechBubble/SpeechBubble'
import { AllWrap } from '../../style/commonStyle'
import { ChatRoomWrapper, ChatInputWrapper, ChatButton, ChatInput } from './chatRoomStyle'
import petImage from '../../assets/rang.jpg'
import profileIcon from '../../assets/basic-profile.svg'
import { ProfileIconS } from '../../components/profileIcon/ProfileIcon'

export default function ChatRoom() {
  return (
    <AllWrap>
      <NavBack text={'코랑이'} />
      <ChatRoomWrapper>
        <LeftSpeechBubble chat={'"산책가까?"는 소중한 반려동물의 소울메이트를 쉽고 편하게 찾을 수 있는 반려동물 매칭 서비스 입니다. '} time={'12:39'} />
        <LeftSpeechBubble chat={'사용자를 팔로우하고 커뮤니케이션 해보세요! 🐿️'} time={'12:41'} />
        <RightSpeechBubble chat={'하고있는데요.'} time={'12:50'} />
        <RightSpeechBubble img={petImage} time={'12:51'} />
      </ChatRoomWrapper>
      <ChatInputWrapper>
        <ProfileIconS img={profileIcon}></ProfileIconS>
        <ChatInput placeholder='메세지 입력하기...'></ChatInput>
        <ChatButton>전송</ChatButton>
      </ChatInputWrapper>
    </AllWrap>
  )
}
