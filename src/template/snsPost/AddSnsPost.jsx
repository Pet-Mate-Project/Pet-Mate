import React, { useState, useRef, useEffect } from 'react'
import { Helmet } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { AxiosPost } from '../../reducers/getPostSlice'
import axios from 'axios'
import { AllWrap, Heading, PaddingMain } from '../../style/commonStyle'
import { FileInput, FileUploader, TextInput, SingleImg, Img, TextLable, DeleteBtn, ImgWrapper } from './addSnsPostStyle'
import { SnsUploadNav } from '../../components/navBack/NavBack'
import { ImgUpload } from '../../pages/SignUpMain'

export default function AddSnsPost() {
  const dispatch = useDispatch();
  const [content, setContent] = useState('');
  const fileInput = useRef(null)
  const [showImg, setShowImg] = useState([]);
  const [postImg, setPostImg] = useState([]);
  const [uploadBtn, SetuploadBtn] = useState(true);

  const handleAddImg = (e) => {
    let fileURLs = [...showImg];
    let files = [...postImg];
    let fileArr = e.target.files;
    let maxSize = 10 * 1024 * 1024;
    let TotalfileSize = 0;

    for (let i = 0; i < fileArr.length; i++) {
      TotalfileSize += fileArr[i].size;

      if (TotalfileSize > maxSize) {
        alert('첨부파일의 총 사이즈는 10MB 이내로 등록 가능합니다.');
        return
      }

      const currentImgURL = URL.createObjectURL(fileArr[i]);
      fileURLs.push(currentImgURL);
      files.push(fileArr[i]);
    }

    if (fileURLs.length > 3) {
      alert('사진은 최대 3장까지 업로드 가능합니다.');
      fileURLs = fileURLs.slice(0, 3);
      files = files.slice(0, 3);
    }

    setPostImg(files);
    setShowImg(fileURLs);
  }

  //삭제함수
  const handleDeleteImg = (id) => {
    setShowImg(showImg.filter((_, index) => index !== id));
    setPostImg(postImg.filter((_, index) => index !== id));
  };

  let data = {
    'post': {
      'content': '',
      'image': ''
    }
  }

  async function handlePostSns() {
    const URL = 'https://mandarin.api.weniv.co.kr';
    const REQ_PATH = '/post';
    let imgList = [];
    for (let i = 0; i < postImg?.length; i++) {
      const img = await ImgUpload(postImg[i]);
      imgList.push(img);
    }
    data.post.image = imgList.join(',');
    data.post.content = content;
    const token = JSON.parse(localStorage.getItem('token'));
    const accountname = JSON.parse(localStorage.getItem('accountname'));

    try {
      await axios.post(URL + REQ_PATH, data, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-type': 'application/json'
        },
      })
        .then(dispatch(AxiosPost(URL + REQ_PATH + '/' + accountname + '/userpost')))
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (content.length > 0 && postImg.length > 0) {
      SetuploadBtn(false);
    }
    else {
      SetuploadBtn(true);
    }
  }, [content, postImg])

  return (
    <AllWrap>
      <Helmet>
        <title>SNS 게시글 작성 - 산책가까?</title>
      </Helmet>
      <header>
        <Heading>SNS게시글 작성 페이지</Heading>
        <SnsUploadNav onClick={handlePostSns} disabled={uploadBtn} />
      </header>
      <PaddingMain>
        <TextLable htmlFor='snspost' />
        <TextInput 
          name='snspost' 
          id='snspost' 
          placeholder='게시글 입력하기 ...' 
          value={content} 
          onChange={(e) => { setContent(e.target.value) }} />
        <ImgWrapper>
          {
            showImg.length === 1 ?
              showImg.map((image, id) => (
                <div key={id} >
                  <SingleImg key={id} src={image} />
                  <DeleteBtn onClick={() => handleDeleteImg(id)} />
                </div>
              ))
              :
              showImg.map((image, id) => (
                <div key={id} >
                  <Img key={id} src={image} />
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
