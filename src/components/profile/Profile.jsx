import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import { Wrapper, FileUploader, ProfileImg, FileInput } from './profileStyle'

export function Profile({ setImg }) {
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

    if (e.target.files && e.target.files[0]) {
      //10mb로 최대용량 지정
      let maxSize = 10 * 1024 * 1024;
      let fileSize = e.target.files[0].size;

      if (fileSize > maxSize) {
        alert("첨부파일 사이즈는 10MB 이내로 등록 가능합니다.");
        setShowImg("https://mandarin.api.weniv.co.kr/1657812669741.png")
        return false;
      }
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

export function ProfileModifyShow({ setImg, userInfoList }) {
  const fileInput = useRef(null)
  const url = "https://mandarin.api.weniv.co.kr";
  //화면에 보여주기용 이미지 상태관리
  const userInfoUrl = `${url}/${userInfoList.image}`;
  const [showImg, setShowImg] = useState('');

  useEffect(() => {
    setShowImg(userInfoUrl);
  }, [userInfoUrl]);

  const onChange = (e) => {
    if (e.target.files[0]) {
      setShowImg(e.target.files[0])
      setImg(e.target.files[0])
      console.log(setImg)
    } else { //업로드 취소할 시
      setShowImg("https://mandarin.api.weniv.co.kr/1657812669741.png")
      return
    }

    if (e.target.files && e.target.files[0]) {
      //10mb로 최대용량 지정
      let maxSize = 10 * 1024 * 1024;
      let fileSize = e.target.files[0].size;

      if (fileSize > maxSize) {
        alert("첨부파일 사이즈는 10MB 이내로 등록 가능합니다.");
        setShowImg(userInfoUrl)
        return false;
      }
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
            accept="image/*"
            name='profileImg'
            onChange={onChange}
            ref={fileInput}
          />
        </FileUploader>
      </Wrapper>
    </>
  )
}
