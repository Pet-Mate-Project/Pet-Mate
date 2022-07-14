import React from 'react'
import { ContentTxt, DateTxt, PetImg, PetInfoTxt, PostStyle, TitleTxt, TxtBox } from './homePostStyle'
import petImg from '../../assets/pet-image.jpg'
import { UserChat } from '../../components/user/User'


export default function HomePost(props) {
  console.log("props",props);
  return (
    <PostStyle>
      <UserChat></UserChat>
      <PetImg src={petImg}></PetImg>
      <TxtBox>
        <TitleTxt>{props.title}시흥쪽 산책 하실분 구합니다.</TitleTxt>
      </TxtBox>
      <ContentTxt>{props.content} 다람쥐/2세/수컷/아랑이 내일 시흥쪽에서 같이 산책하실분~</ContentTxt>
      <DateTxt>{props.date}2020년 10월 21일</DateTxt>
    </PostStyle>
  )
}
