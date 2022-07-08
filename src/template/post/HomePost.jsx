import React from 'react'
import { ContentTxt, DateTxt, PetImg, PetInfoTxt, PostStyle, TitleTxt, TxtBox } from './homePostStyle'
import petImg from '../../assets/pet-image.jpg'
import { UserChat } from '../../components/user/User'


export function HomePost(props) {
  return (
    <PostStyle>
      <UserChat></UserChat>
      <PetImg src={petImg}></PetImg>
      <TxtBox>
        <TitleTxt>{props.title}산책 같이가요!</TitleTxt>
        <PetInfoTxt>{props.petInfo}푸들 / 10세 / 남</PetInfoTxt>
      </TxtBox>
      <ContentTxt>{props.content}좋은 산책메이트 만났으면 좋겠습니다~! 같은 푸들이면 좋을 것 같아요.</ContentTxt>
      <DateTxt>{props.date}2020년 10월 21일</DateTxt>
    </PostStyle>
  )
}
