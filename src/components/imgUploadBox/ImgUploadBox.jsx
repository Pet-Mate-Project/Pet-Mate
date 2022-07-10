import React from 'react'
import {FileUploader,FileInput,ImgRegist,TitleTxt ,ImgUploadWrapper} from './imgUploadBoxStyle'

export default function ImgUploadBox() {
  return (
    <>
      <ImgUploadWrapper>
        <TitleTxt>이미지 등록</TitleTxt>
        <ImgRegist/>
        <FileUploader htmlFor="input-file">
          <FileInput
            id="input-file"
            type="file"
            accept='image/*'
            name='profileImg'
            // onChange={onChange}
            // ref={fileInput}
          />
        </FileUploader>
      </ImgUploadWrapper>
    </>
  )
}
