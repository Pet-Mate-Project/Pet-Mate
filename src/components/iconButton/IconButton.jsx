import React from "react";
import { IconBtn } from './iconButtonStyle'
import addBtn from '../../assets/icon-add.svg';
import imgUpload from "../../assets/upload-file.svg";

export function AddBtn(props) {
  return (
    <IconBtn bottom>
      <img src={addBtn} />
    </IconBtn>
  )
}


export function ImgBtn() {
  return (
    <IconBtn>
      <img src={imgUpload} />
    </IconBtn>
  )
}