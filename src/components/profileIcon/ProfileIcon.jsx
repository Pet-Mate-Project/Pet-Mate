import React from 'react'
import profileIcon from '../../assets/basic-profile.svg'
import { IconStyle, ChatIconStyle } from './profileIconStyle'

export function ProfileIconS() {
  return (
    <IconStyle src={profileIcon} width={40} height={40} />
  )
}

export function ProfileIconM() {
  return (
    <IconStyle src={profileIcon} width={50} height={50} />
  )
}

export function ChatListProfileIcon({visible}) {
  return (
    <ChatIconStyle visible={visible} />
  )
}