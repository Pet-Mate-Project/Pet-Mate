import React from 'react'
import profileIcon from '../../assets/basic-profile.svg'
import { IconStyle, ChatIconStyle } from './profileIconStyle'

export function ProfileIconS({ img }) {
  return (
    <IconStyle src={img} width={40} height={40} alt="기본 프로필사진" />
  )
}

export function ProfileIconM() {
  return (
    <IconStyle src={profileIcon} width={50} height={50} alt="기본 프로필사진" />
  )
}

export function ChatListProfileIcon({ visible }) {
  return (
    <ChatIconStyle visible={visible} />
  )
}