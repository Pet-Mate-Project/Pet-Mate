import React from 'react'
import { useState,useRef } from 'react'
import {AllWrap,PaddingMain,FormStyle} from '../../style/commonStyle'
import {PostSaveNav} from '../../components/navBack/NavBack'
import ImgUploadBox from '../../components/imgUploadBox/ImgUploadBox'
import {TitleInput,PetInfoInput,PostIntroInput} from '../../components/input/Input'
import { useDispatch, useSelector } from "react-redux";
import {postAllCont,postActions} from '../../reducers/Reducer'
import axios from 'axios';
import { ImgUpload } from '../../pages/SignUpMain';

export default function AddPost() {

  //이미지 미리보기
  const [showImg, setShowImg] = useState("")
  const fileInput = useRef(null)

  const onChange = (e) => {
    if (e.target.files[0]) { 
      setShowImg(e.target.files[0])  
    } 
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setShowImg(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

  return (
    <AllWrap>
      <header>
        <PostSaveNav/>
      </header>
      <PaddingMain>
        <ImgUploadBox onChange={onChange} src={showImg} ref={fileInput} />
        <FormStyle>
          <TitleInput/>
          <PetInfoInput/>
          <PostIntroInput/>
        </FormStyle>
      </PaddingMain>
    </AllWrap>
  )
}
