import React from 'react'
import { AllWrap } from '../../style/commonStyle'
import { ProfileIconS } from '../profileIcon/ProfileIcon'
import { LeftSpeechBubbleWrapper, RightSpeechBubbleWrapper, RightChat, LeftChat, ChatTime, ChatImage } from './speechBubbleStyle'
import profileIcon from '../../assets/basic-profile.svg'

export function LeftSpeechBubble({ chat, img, time }) {
  return (
    <LeftSpeechBubbleWrapper>
      <ProfileIconS img={profileIcon}></ProfileIconS>
      <LeftChat>{chat}</LeftChat>
      <ChatImage src={img}></ChatImage>
      <ChatTime>{time}</ChatTime>
    </LeftSpeechBubbleWrapper>
  )
}

export function RightSpeechBubble({ chat, img, time }) {
  return (
    <RightSpeechBubbleWrapper>
      <RightChat>{chat}</RightChat>
      <ChatImage src={img}></ChatImage>
      <ChatTime>{time}</ChatTime>
    </RightSpeechBubbleWrapper>
  )
}