import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { AllWrap, PaddingMain, FormStyle } from '../../style/commonStyle'
import { PostSaveNav } from '../../components/navBack/NavBack'
import ImgUploadBox from '../../components/imgUploadBox/ImgUploadBox'
import { TitleInput, PetInfoInput } from '../../components/input/Input'
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { ImgUpload } from '../../pages/SignUpMain';
import { SelectId } from '../../reducers/deletePostSlice'
import { AxiosDetail,selectDetailPosts,detailPostStatus } from '../../reducers/getPostDetailSlice'
import { AxiosPetInfo } from '../../reducers/getPetInfoSlice'

export default function ModifyPost() {

  const dispatch = useDispatch();
  const selectId = useSelector(SelectId) ; 
  const URL = "https://mandarin.api.weniv.co.kr";

  //기존 게시글정보
  useEffect(()=>{
    dispatch(AxiosDetail(`${URL}/product/detail/${selectId}`));
    console.log(`${URL}/product/detail/${selectId}`);
  },[])
  
  //선택한 게시글id
  const detailPostData = useSelector(selectDetailPosts).product ; //선택한 게시글
  console.log("선택한 게시글",detailPostData);
  const preImg = detailPostData?.itemImage;
  const preTitle = detailPostData?.itemName;
  const prepetInfo =detailPostData?.link;

  const [showImg, setShowImg] = useState("")   //미리보기 이미지 state
  const fileInput = useRef(null)    //서버에 보낼 file객체
  const [userImg, setImg] = useState("");   //input 데이터
  const [Title, setTitle] = useState("")
  const [petInfo, setPetInfo] = useState("")
  const [btn, setBtn] = useState(true)    //버튼활성화

  //서버에 보낼 데이터
  let postData = {
    "product": {
      "itemName": Title?.length===0?preTitle : Title ,
      "price": 9999999,
      "link": petInfo?.length===0?prepetInfo:petInfo,
      "itemImage": ""
    },
  }

  useEffect(()=>{
    setTitle("")
    setPetInfo("")
  },[dispatch])

  useEffect(() => {
    console.log("이전길이|",preTitle?.length);
    console.log("이전타이틀|",preTitle);
    console.log("이전펫정보|",prepetInfo);
    console.log("현재길이|",Title?.length );
    console.log("현재타이틀|",Title );
    console.log("현재정보|",petInfo );

    if((Title?.length===1)){ //이전값에서 값을 바꿧으면서, 길이가 1이면 비활성화
      setBtn(true); 
    }
    else if (petInfo?.length===1){
      setBtn(true); 
    }
    else{
      setBtn(false);
    }
  },[Title, petInfo])

  //이미지미리보기
  const onChange = (e) => {
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
    try{
      const imgData = await ImgUpload(userImg);
      postData.product.itemImage = imgData;
      const loginReqPath = `/product/${selectId}`;
      const token = JSON.parse(localStorage.getItem("token"))
      const accountname = JSON.parse(localStorage.getItem("accountname"))
      const res = await axios.put(URL + loginReqPath, postData, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-type": "application/json"
        },
      });
      console.log("res : ", res);
      console.log("URL", URL + loginReqPath);
      dispatch(AxiosPetInfo(URL + "/product/" + accountname))
    }
    catch(error){
      console.log(error);
    }
  }

  return (
    <AllWrap>
      <header>
        <PostSaveNav onClick={PostSave} disabled={btn} link={"/profilepage"}/>
      </header>
      <PaddingMain>
        <ImgUploadBox onChange={onChange} src={showImg} fileref={fileInput} defaultImg={URL+"/"+preImg}  />
        <FormStyle>
          <TitleInput Title={Title} setTitle={setTitle}  defaultValue={preTitle} />
          <PetInfoInput petInfo={petInfo} setPetInfo={setPetInfo} defaultValue={prepetInfo} />
        </FormStyle>
      </PaddingMain>
    </AllWrap>
  )
}