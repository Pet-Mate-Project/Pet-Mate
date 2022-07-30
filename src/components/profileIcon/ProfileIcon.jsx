import React from 'react'
import { IconStyle, ChatIconStyle } from './profileIconStyle'
import { imgCheck } from '../user/User'

export function ProfileIconS({ img }) {
  return (
    <IconStyle src={imgCheck(img)} width={40} height={40} alt="프로필사진" />
  )
}

export function ProfileIconM({ img }) {
  return (
    <IconStyle src={imgCheck(img)} width={50} height={50} alt="프로필사진" />
  )
}

export function ChatListProfileIcon({ visible }) {
  return (
    <ChatIconStyle visible={visible} />
  )
}