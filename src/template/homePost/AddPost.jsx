import React, { useState, useRef, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { AxiosPetInfo } from '../../reducers/getPetInfoSlice'
import axios from 'axios';

import { AllWrap, PaddingMain, FormStyle } from '../../style/commonStyle'
import { PostSaveNav } from '../../components/navBack/NavBack'
import ImgUploadBox from '../../components/imgUploadBox/ImgUploadBox'
import { TitleInput, PetInfoInput } from '../../components/input/Input'
import { ImgUpload } from '../../pages/SignUpMain';

export default function AddPost() {

  const dispatch = useDispatch();
  const [showImg, setShowImg] = useState("")   //미리보기 이미지 state
  const fileInput = useRef(null)    //서버에 보낼 file객체
  const [userImg, setImg] = useState("");    //input 데이터
  const [Title, setTitle] = useState("")
  const [petInfo, setPetInfo] = useState("")
  const [btn, setBtn] = useState(true)    //버튼활성화

  //서버에 보낼 데이터
  let postData = {
    "product": {
      "itemName": Title,
      "price": 9999999,
      "link": petInfo,
      "itemImage": ""
    },
  }

  //버튼활성화
  useEffect(() => {
    if (Title.length >= 2 && petInfo !== "" && showImg !== "") {
      setBtn(false)
    }
    else {
      setBtn(true)
    }
  }, [Title, petInfo, showImg])

  //이미지미리보기
  const onChange = (e) => {
    let maxSize = 10 * 1024 * 1024;
    let fileSize = e.target.files[0].size;
    if (fileSize > maxSize) {
      alert("첨부파일 사이즈는 10MB 이내로 등록 가능합니다.");
      return
    }
    if (e.target.files[0]) {
      setShowImg(e.target.files[0])
      setImg(e.target.files[0])
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setShowImg(reader.result)
      }
      else {
        return
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

  // 게시글 서버에 보내기
  async function PostSave() {
    try {
      const imgData = await ImgUpload(userImg);
      postData.product.itemImage = imgData
      const URL = "https://mandarin.api.weniv.co.kr";
      const ReqPath = "/product";
      const token = JSON.parse(localStorage.getItem("token"))
      const accountname = JSON.parse(localStorage.getItem("accountname"))
      const res = await axios.post(URL + ReqPath, postData, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-type": "application/json"
        },
      });
      console.log("res : ", res);
      console.log("URL", URL + ReqPath + "/" + accountname);
      dispatch(AxiosPetInfo(URL + ReqPath + "/" + accountname))
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <AllWrap>
      <header>
        <PostSaveNav onClick={PostSave} disabled={btn} link={"/profilepage"} />
      </header>
      <PaddingMain>
        <ImgUploadBox onChange={onChange} src={showImg} fileref={fileInput} setImg={setImg} />
        <FormStyle>
          <TitleInput Title={Title} setTitle={setTitle} />
          <PetInfoInput petInfo={petInfo} setPetInfo={setPetInfo} />
        </FormStyle>
      </PaddingMain>
    </AllWrap>
  )
}
