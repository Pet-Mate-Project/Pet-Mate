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
        <LeftSpeechBubble chat={'아랑이랑 산책하고 싶어서 게시글 시간보고 연락드려요~ 6/28 3시 가능하신가요?'} time={'12:39'} />
        <LeftSpeechBubble chat={'대답 좀 해주세요.'} time={'12:41'} />
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
