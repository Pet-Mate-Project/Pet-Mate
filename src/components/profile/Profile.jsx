import React, { useRef, useState } from 'react'
import { Wrapper, FileUploader, ProfileImg, FileInput } from './profileStyle'

export function Profile({ userImg, setImg }) {
  const fileInput = useRef(null)
  //화면에 보여주기용 이미지 상태관리
  const [showImg, setShowImg] = useState("https://mandarin.api.weniv.co.kr/1657812669741.png")
  const onChange = (e) => {
    if (e.target.files[0]) {
      setShowImg(e.target.files[0])
      setImg(e.target.files[0])
      console.log(setImg)
    } else { //업로드 취소할 시
      setShowImg("https://mandarin.api.weniv.co.kr/1657812669741.png")
      return
    }
    //화면에 프로필 사진 표시
    // 파일리더
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setShowImg(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }


  return (
    <>
      <Wrapper>
        <ProfileImg
          src={showImg} alt='user-img'
          onClick={() => { fileInput.current.click() }}
        />
        <FileUploader
          htmlFor="input-file">
          <FileInput
            id="input-file"
            type="file"
            accept='image/jpeg, image/jpg'
            name='profileImg'
            onChange={onChange}
            ref={fileInput}
          />
        </FileUploader>
      </Wrapper>
    </>
  )
}

export default Profile