import React from 'react';
import { AnimalWrapper, TitleTxt, TimeTxt, Img } from './animalStyle'
import rang from '../../assets/rang.jpg' //나중에 삭제

//사용법
// <AnimalBox src={} title={"아랑이랑 산책하실 분"} time={"6월 27일 오후 8시"}/>
export function AnimalBox(props) {
  return (
    <AnimalWrapper>
      <Img src={props.src} />
      <TitleTxt>{props.title}</TitleTxt>
      <TimeTxt>{props.time}</TimeTxt>
    </AnimalWrapper>
  )
}