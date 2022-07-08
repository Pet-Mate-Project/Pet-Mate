import React from 'react'
import { ContentTxt, DateTxt, PetImg, PetInfoTxt, PostStyle, TitleTxt } from './chatPostStyle'
import petImg from '../../assets/pet-image.jpg'
import { UserChat } from '../../components/user/User'


export function ChatPost(props) {
  return (
    <PostStyle>
      <UserChat></UserChat>
      <PetImg src={petImg}></PetImg>
      <TitleTxt>{props.title}</TitleTxt>
      <PetInfoTxt>{props.petInfo}</PetInfoTxt>
      <DateTxt>{props.date}</DateTxt>
      <ContentTxt>{props.content}</ContentTxt>
    </PostStyle>
  )
}
