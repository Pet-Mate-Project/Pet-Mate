import React, { useState, useRef, useLayoutEffect, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom'
import { AxiosPost } from '../../reducers/getPostSlice';
import { AxiosDetail, selectDetailPosts } from '../../reducers/getPostDetailSlice'
import { AllWrap, PaddingMain, Heading } from '../../style/commonStyle'
import { FileInput, FileUploader, TextInput, Img, TextLable, DeleteBtn, ImgWrapper } from '../snsPost/addSnsPostStyle'
import { SnsUploadNav } from '../../components/navBack/NavBack'
import { imgCheck } from '../../components/user/User';
import { ImgUpload } from '../../pages/SignUpMain'

export default function ModifySnsPost() {
  const dispatch = useDispatch();
  const UserIdPath = useLocation();
  const selectId = UserIdPath.pathname.slice(15,);
  const URL = 'https://mandarin.api.weniv.co.kr';
  const detailPostData = useSelector(selectDetailPosts).post;
  const preImg = detailPostData?.image;
  const preContent = detailPostData?.content;

  useLayoutEffect(() => {
    dispatch(AxiosDetail(`${URL}/post/${selectId}`))
      .then(setShowImg([]))
      .then(setShowImg(() => sliceImg(preImg)))
  }, [preImg])

  const [content, setContent] = useState('');
  const fileInput = useRef(null);
  const [showImgs, setShowImg] = useState([]);
  const [postImg, setPostImg] = useState([]);
  const [uploadBtn, SetuploadBtn] = useState(true);

  let data = {
    'post': {
      'content': '',
      'image': showImgs?.length === 0 ? preImg : showImgs
    }
  }

  const handleAddImg = (e) => {
    let fileURLs = [...showImgs];
    let files = [...postImg];
    let fileArr = e.target.files;

    for (let i = 0; i < fileArr.length; i++) {
      const currentImgURL = window.URL.createObjectURL(fileArr[i]);
      fileURLs.push(currentImgURL);
      files.push(fileArr[i]);
    }

    if (fileURLs.length > 3) {
      alert('사진은 최대 3장까지 업로드 가능합니다.');
      fileURLs = fileURLs.slice(0, 3);
      const preImglen = getPreImglen(fileURLs);
      files = files.slice(0, 3 - preImglen);  // 추가 이미지 길이  = 3- 기존이미지 길이 
    }
    setPostImg(files);
    setShowImg(fileURLs);  
  }

  const handleDeleteImg = (id) => {
    const preImglen = getPreImglen(showImgs);
    setShowImg(showImgs.filter((_, index) => index !== id));
    setPostImg(postImg.filter((_, index) => index !== id - preImglen));
  };

  function getPreImglen(showImgs) {
    let addImgLength = 0;
    showImgs.map((image) => {
      if (image.slice(0, 4) === 'blob') { 
        addImgLength += 1;
      }
    })
    return showImgs.length - addImgLength; 
  }

  async function handlePostSns() {
    let imgList = [];
    showImgs?.map((showImg) => {
      if (showImg.slice(0, 4) !== 'blob') {
        imgList.push(showImg);
      }
    })

    for (let i = 0; i < postImg?.length; i++) {  //서버로 보내야하는 사진 (파일객체)
      const img = await ImgUpload(postImg[i]);
      imgList.push(img.slice(33,));
    }

    if (imgList.length === 0) {
      SetuploadBtn(true);
    }
    else if (imgList.length > 3) {
      imgList.slice(0, 3);
    }

    data.post.image = imgList.join(',');
    data.post.content = content?.length === 0 ? preContent : content;
    
    try {
      const URL = 'https://mandarin.api.weniv.co.kr';
      const REQ_PATH = `/post/${selectId}`;
      const token = JSON.parse(localStorage.getItem('token'));
      const accountname = JSON.parse(localStorage.getItem('accountname'));
      await axios.put(URL + REQ_PATH, data, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-type': 'application/json'
        },
      })
        .then(
          dispatch(AxiosPost(URL + '/post/' + accountname + '/userpost'))
        ) 
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (content.length === 1 || (showImgs?.length === 0)) {  //2자이상 입력시 버튼 활성화
      SetuploadBtn(true);
    }
    else {
      SetuploadBtn(false);
    }
  }, [content, showImgs])

  //미리보기 이미지 배열로 만들기
  function sliceImg(preImg) {
    const arr = preImg?.split(',');
    return arr;
  }

  return (
    <AllWrap>
      <Helmet>
        <title>SNS 게시글 수정 - 산책가까?</title>
      </Helmet>
      <header>
        <Heading>SNS 게시글 수정 페이지</Heading>
        <SnsUploadNav onClick={handlePostSns} disabled={uploadBtn} />
      </header>
      <PaddingMain>
        <TextLable htmlFor='snspost' />
        <TextInput key={preContent} defaultValue={preContent} name='snspost' id='snspost' placeholder='게시글 입력하기 ...' onChange={(e) => { setContent(e.target.value) }} />
        <ImgWrapper>
          {
            showImgs?.map((image, id) => (
              <div key={id} >
                <Img key={id} src={imgCheck(image)} />
                <DeleteBtn onClick={() => handleDeleteImg(id)} />
              </div>
            ))
          }
        </ImgWrapper>
        <FileUploader htmlFor='input-file'>
          <FileInput
            id='input-file'
            name='PostingImg'
            type='file'
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