import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import { Wrapper, FileUploader, ProfileImg, FileInput } from './profileStyle'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { AxiosUserData, selectUserData } from '../../reducers/getUserInfoSlice'
import { imgCheck } from '../user/User'

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
            accept='.jpg, .gif, .png, .jpeg, .bmp, .tif, .heic'
            name='profileImg'
            onChange={onChange}
            ref={fileInput}
          />
        </FileUploader>
      </Wrapper>
    </>
  )
}

export function ProfileModifyShow({ setImg }) {
  const fileInput = useRef(null)
  const url = "https://mandarin.api.weniv.co.kr";
  const userInfoList = useSelector(selectUserData)
  const userInfoURl = useSelector(selectUserData).image
  //화면에 보여주기용 이미지 상태관리
  const [showImg, setShowImg] = useState('');
  const dispatch = useDispatch()
  const accountname = JSON.parse(localStorage.getItem("accountname"));

  useEffect(() => {
    dispatch(AxiosUserData(url + `/profile/${accountname}`))
  }, []);

  useEffect(() => {
    setShowImg(userInfoURl);
  }, [userInfoURl])

  console.log('🐿️🔥', userInfoList)

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
        setShowImg(userInfoList.image)
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
            accept='.jpg, .gif, .png, .jpeg, .bmp, .tif, .heic'
            name='profileImg'
            onChange={onChange}
            ref={fileInput}
          />
        </FileUploader>
      </Wrapper>
    </>
  )
}
