import React, { useState, useRef, useLayoutEffect, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom"
import { AxiosPost } from '../../reducers/getPostSlice';
import { AxiosDetail, selectDetailPosts } from '../../reducers/getPostDetailSlice'
import axios from 'axios'

import { AllWrap, PaddingMain, Heading } from '../../style/commonStyle'
import { SnsUploadNav } from '../../components/navBack/NavBack'
import { FileInput, FileUploader, TextInput, Img, TextLable, DeleteBtn, ImgWrapper } from '../snsPost/addSnsPostStyle'
import { ImgUpload } from '../../pages/SignUpMain'


export default function ModifySnsPost() {
  const dispatch = useDispatch();
  const UserIdPath = useLocation();
  const selectId = UserIdPath.pathname.slice(15,);

  const URL = "https://mandarin.api.weniv.co.kr";
  //선택한게시글
  const detailPostData = useSelector(selectDetailPosts).post;
  console.log("선택한 게시글", detailPostData);
  const preImg = detailPostData?.image;
  const preContent = detailPostData?.content;
  //기존 게시글정보 가져오기
  useLayoutEffect(() => {
    dispatch(AxiosDetail(`${URL}/post/${selectId}`))
      .then(setShowImg([]))
      .then(setShowImg(() => sliceImg(preImg)))
    console.log(`${URL}/product/detail/${selectId}`);
  }, [preImg])

  const [content, setContent] = useState("");
  const fileInput = useRef(null);
  const [showImgs, setShowImg] = useState([]);
  const [postImg, setPostImg] = useState([]);
  const [uploadBtn, SetuploadBtn] = useState(true);

  //서버에 전송할 데이터
  let data = {
    "post": {
      "content": "",
      "image": showImgs?.length === 0 ? preImg : showImgs
    }
  }

  //이미지미리보기
  const handleAddImg = (e) => {
    let fileURLs = [...showImgs];
    let files = [...postImg];
    let fileArr = e.target.files;

    //여러이미지 push
    for (let i = 0; i < fileArr.length; i++) {
      const currentImgURL = window.URL.createObjectURL(fileArr[i]);
      fileURLs.push(currentImgURL);
      files.push(fileArr[i]);
    } 

    if (fileURLs.length > 3) {
      alert("사진은 최대 3장까지 업로드 가능합니다.");
      fileURLs = fileURLs.slice(0, 3);  
      const preImglen = getPreImglen(fileURLs);
      files = files.slice(0, 3-preImglen);  // 추가 이미지 길이  = 3- 기존이미지 길이 
    }
    setPostImg(files); // 추가한
    setShowImg(fileURLs);  // 모든
  }

  //삭제함수
  const handleDeleteImg = (id) => {
    const preImglen = getPreImglen(showImgs);
    setShowImg(showImgs.filter((_, index) => index !== id));
    setPostImg(postImg.filter((_, index) => index !== id-preImglen));
  };

  // 나중에 지울게요^_^
  console.log("🥶모든객체",showImgs);  //짬뽕됨
  console.log("🥶추가된애",postImg); //추가된애 이미지객체

  //기존 사진 길이 계산 함수
  function getPreImglen(showImgs){
    let addImgLength = 0;
    showImgs.map((image) =>{
      if(image.slice(0,4)==="blob") { //추가된 이미지 개수
        addImgLength += 1;
      }
    })
    return showImgs.length - addImgLength; //기존 사진갯수
  }

  //업로드버튼 클릭시 실행 함수
  async function handlePostSns() {
    let imgList = [];

    showImgs?.map((showImg)=>{
      if(showImg.slice(0, 4) !== "blob"){
        imgList.push(showImg);
      }
    })
    for (let i = 0; i < postImg?.length; i++) {  //서버로 보내야하는 사진 (파일객체)
      const img = await ImgUpload(postImg[i])
      imgList.push(img.slice(33,));
    }

    //이미지 갯수검사
    if (imgList.length === 0) {
      SetuploadBtn(true)
    }
    else if (imgList.length >3) {
      imgList.slice(0,3)
    }

    data.post.image = imgList.join(",");
    data.post.content = content?.length === 0 ? preContent : content
    try {
      const URL = "https://mandarin.api.weniv.co.kr";
      const ReqPath = `/post/${selectId}`;
      const token = JSON.parse(localStorage.getItem("token"))
      const accountname = JSON.parse(localStorage.getItem("accountname"))
      const res = await axios.put(URL + ReqPath, data, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-type": "application/json"
        },
      });
      console.log("게시글post요청결과", res);
      dispatch(AxiosPost(URL + "/post/" + accountname + "/userpost"))
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (content.length === 1 || (showImgs?.length === 0)) {  //2자이상 입력시 버튼 활성화
      SetuploadBtn(true)
    }
    else {
      SetuploadBtn(false)
    }
  }, [content, showImgs])

  //미리보기 이미지 배열로 만들기
  function sliceImg(preImg) {
    const arr = preImg?.split(",");
    return arr;
  }

  return (
    <AllWrap>
      <header>
        <Heading>SNS 게시글 수정 페이지</Heading>
        <SnsUploadNav onClick={handlePostSns} disabled={uploadBtn} />
      </header>
      <PaddingMain>
        <TextLable htmlFor="snspost" />
        <TextInput key={preContent} defaultValue={preContent} name="snspost" id="snspost" placeholder="게시글 입력하기 ..." onChange={(e) => { setContent(e.target.value) }} />
        <ImgWrapper>
          {
            showImgs?.map((image, id) => (
              <div key={id} >
                <Img key={id} src={image.slice(0, 4) !== "blob" === true ? URL + "/" + image : image} />
                <DeleteBtn onClick={() => handleDeleteImg(id)} />
              </div>
            ))
          }
        </ImgWrapper>
        <FileUploader htmlFor="input-file">
          <FileInput
            id="input-file"
            name='PostingImg'
            type="file"
            multiple
            accept='.jpg, .gif, .png, .jpeg, .bmp, .tif, .heic'
            onChange={handleAddImg}
            ref={fileInput}
          />
        </FileUploader>
      </PaddingMain>
    </AllWrap>
  )
}