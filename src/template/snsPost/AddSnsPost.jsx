import React from 'react'
import { SnsUploadNav } from '../../components/navBack/NavBack'
import { AllWrap } from '../../style/commonStyle'
import { FileInput,FileUploader,TextInput,ImgBox,Img,TextLable } from './addSnsPostStyle'
import { PaddingMain } from '../../style/commonStyle'

export default function AddSnsPost() {
  return (
    <AllWrap>          
      <header>
        <SnsUploadNav/>
      </header>
      <PaddingMain>
        <TextLable htmlFor="snspost" />
        <TextInput name="snspost" id="snspost"  placeholder="게시글 입력하기 ..."/>
        <ImgBox>
          <Img/>
          <Img/>
          <Img/>
        </ImgBox>
        <FileUploader htmlFor="input-file">
          <FileInput
            id="input-file"
            type="file"
            accept='image/jpeg, image/jpg'
            name='PostingImg'
          // onChange={onChange}
          // ref={fileInput}
          />
        </FileUploader>
      </PaddingMain>
    </AllWrap>
  )
}
 