import React from 'react'
import { imgCheck } from '../user/User'
import { IconStyle, ChatIconStyle } from './profileIconStyle'

export function ProfileIconS({ img }) {
  return (
    <IconStyle 
      src={imgCheck(img)} 
      width={40} 
      height={40} 
      alt="프로필사진" />
  )
}

export function ProfileIconM({ img }) {
  return (
    <IconStyle 
      src={imgCheck(img)} 
      width={50} 
      height={50} 
      alt="프로필사진" />
  )
}

export function ChatListProfileIcon({ visible }) {
  return (
    <ChatIconStyle visible={visible} />
  )
}