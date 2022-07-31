import React from 'react'
import { ProfileIconS } from '../profileIcon/ProfileIcon'
import { LeftSpeechBubbleWrapper, RightSpeechBubbleWrapper, RightChat, LeftChat, ChatTime, ChatImage } from './speechBubbleStyle'
import profileIcon from '../../assets/basic-profile.svg'

export function LeftSpeechBubble({ chat, img, time }) {
  return (
    <LeftSpeechBubbleWrapper>
      <ProfileIconS img={profileIcon} />
      <LeftChat>{chat}</LeftChat>
      <ChatImage src={img} />
      <ChatTime>{time}</ChatTime>
    </LeftSpeechBubbleWrapper>
  )
}

export function RightSpeechBubble({ chat, img, time }) {
  return (
    <RightSpeechBubbleWrapper>
      <RightChat>{chat}</RightChat>
      <ChatImage src={img} />
      <ChatTime>{time}</ChatTime>
    </RightSpeechBubbleWrapper>
  )
}