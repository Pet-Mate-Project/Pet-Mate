import React from "react";
import { IconBtn } from './iconButtonStyle'
import addBtn from '../../assets/icon-add.svg';
import imgUpload from "../../assets/upload-file.svg";

export function AddBtn(props) {
  return (
    <IconBtn bottom>
      <img src={addBtn} alt ="게시글 작성하기 버튼" />
    </IconBtn>
  )
}


export function ImgBtn() {
  return (
    <IconBtn>
      <img src={imgUpload} alt="이미지 업로드 버튼"/>
    </IconBtn>
  )
}