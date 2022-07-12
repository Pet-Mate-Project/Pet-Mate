import React from 'react'
import {FileUploader,FileInput,ImgRegist,TitleTxt ,ImgUploadWrapper} from './imgUploadBoxStyle'

export default function ImgUploadBox({onChange,fileref,src}) {
  return (
    <>
      <ImgUploadWrapper>
        <TitleTxt>이미지 등록</TitleTxt>
        <ImgRegist src={src} alt='반려동물 이미지 등록' onClick={()=> {fileref.current.click()}}/>
        <FileUploader htmlFor="input-file">
          <FileInput
            id="input-file"
            type="file"
            accept='image/*'
            name='profileImg'
            onChange={onChange}
            ref={fileref}
          />
        </FileUploader>
      </ImgUploadWrapper>
    </>
  )
}
