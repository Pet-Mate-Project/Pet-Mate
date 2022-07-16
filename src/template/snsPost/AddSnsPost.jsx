import React from 'react'
import { SnsUploadNav } from '../../components/navBack/NavBack'
import { AllWrap } from '../../style/commonStyle'
import { useSelector } from 'react-redux'
import { selectAllPosts } from '../../reducers/getPetInfoSlice'
export default function AddSnsPost() {
  const defaultImg = "https://mandarin.api.weniv.co.kr/1657812669741.png"
  return (
    // 구현중입니다. 파일구조 옮기기 위한 커밋.
    <AllWrap>
      <SnsUploadNav/>
      <img src="defaultImg" alt="" />
      <input type="text" />
    </AllWrap>
  )
}
 