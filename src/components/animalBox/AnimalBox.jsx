import React from 'react'
import { AnimalWrapper, TitleTxt, TimeTxt, Img } from './animalStyle'
import { imgCheck } from '../user/User'

// 사용법 : <AnimalBox src={} title={"아랑이랑 산책하실 분"} time={"6월 27일 오후 8시"}/>
export function AnimalBox({ src, title, time, onClick }) {
  return (
    <AnimalWrapper onClick={onClick}>
      <Img src={imgCheck(src)} alt="펫 이미지" />
      <TitleTxt>{title}</TitleTxt>
      <TimeTxt>{time}</TimeTxt>
    </AnimalWrapper>
  )
}