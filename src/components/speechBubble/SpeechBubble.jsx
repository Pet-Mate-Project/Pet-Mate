import React from 'react'
import { AllWrap } from '../../style/commonStyle'
import { ProfileIconS } from '../profileIcon/ProfileIcon'
import { LeftSpeechBubbleWrapper, RightSpeechBubbleWrapper, RightChat, LeftChat, ChatTime } from './speechBubbleStyle'
import profileIcon from '../../assets/basic-profile.svg'

export default function LeftSpeechBubble() {
  return (
    <LeftSpeechBubbleWrapper>
      <ProfileIconS img={profileIcon}></ProfileIconS>
      <LeftChat>
        아랑이랑 산책하고 싶어서 게시글 시간보고 연락드려요~ 6/28 3시 가능하신가요?
      </LeftChat>
      <ChatTime>12:39</ChatTime>
    </LeftSpeechBubbleWrapper>
  )
}

export function RightSpeechBubble() {
  return (
    <RightSpeechBubbleWrapper>
      <RightChat>
        하고있는데요.
      </RightChat>
      <ChatTime>12:50</ChatTime>
    </RightSpeechBubbleWrapper>
  )
}