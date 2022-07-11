import React from 'react'
import {AllWrap,PaddingMain,FormStyle} from '../../style/commonStyle'
import {SaveNav} from '../../components/navBack/NavBack'
import ImgUploadBox from '../../components/imgUploadBox/ImgUploadBox'
import {TitleInput,PetInfoInput,PostMeetTimeInput,PostIntroInput} from '../../components/input/Input'
export default function AddPost() {
  return (
    <AllWrap>
      <header>
        <SaveNav/>
      </header>
      <PaddingMain>
        <ImgUploadBox/>
        <FormStyle>
          <TitleInput/>
          <PetInfoInput/>
          <PostIntroInput/>
        </FormStyle>
      </PaddingMain>
    </AllWrap>
  )
}
