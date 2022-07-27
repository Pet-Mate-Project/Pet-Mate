import React from 'react'
import { SnsUploadNav } from '../../components/navBack/NavBack'
import { AllWrap } from '../../style/commonStyle'
import { FileInput, FileUploader, TextInput, SingleImg, Img, TextLable, DeleteBtn, ImgWrapper } from './addSnsPostStyle'
import { PaddingMain } from '../../style/commonStyle'
import { useState, useRef, useEffect } from 'react'
import { ImgUpload } from '../../pages/SignUpMain'
import axios from 'axios'
import { useDispatch } from "react-redux";
import { AxiosPost } from '../../reducers/getPostSlice'

export default function AddSnsPost() {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const fileInput = useRef(null)
  const [showImg, setShowImg] = useState([]);
  const [postImg, setPostImg] = useState([]);
  const [uploadBtn, SetuploadBtn] = useState(true);

  //이미지미리보기
  const handleAddImg = (e) => {
    let fileURLs = [...showImg];
    let files = [...postImg];
    let fileArr = e.target.files;
    //크기제한
    let maxSize = 10 * 1024 * 1024;
    let TotalfileSize = 0;
    //여러이미지 push
    for (let i = 0; i < fileArr.length; i++) {
      console.log(fileArr[i].size);
      TotalfileSize += fileArr[i].size;
      if (TotalfileSize > maxSize) {
        alert("첨부파일의 총 사이즈는 10MB 이내로 등록 가능합니다.");
        return
      }
      const currentImgURL = URL.createObjectURL(fileArr[i]);
      fileURLs.push(currentImgURL);
      files.push(fileArr[i]);
    }

    if (fileURLs.length > 3) {
      alert("사진은 최대 3장까지 업로드 가능합니다.");
      fileURLs = fileURLs.slice(0, 3);
      files = files.slice(0, 3);
    }
    setPostImg(files);
    setShowImg(fileURLs);
    console.log("서버", files);
    console.log("미리보기", fileURLs);

  }

  //삭제함수
  const handleDeleteImg = (id) => {
    setShowImg(showImg.filter((_, index) => index !== id));
    setPostImg(postImg.filter((_, index) => index !== id));
  };

  let data = {
    "post": {
      "content": "",
      "image": ""
    }
  }

  async function handlePostSns() {
    // 요청URL
    const URL = "https://mandarin.api.weniv.co.kr";
    const ReqPath = "/post";
    //사진 filename 가져오기
    let imgList = [];
    for (let i = 0; i < postImg?.length; i++) {
      const img = await ImgUpload(postImg[i])
      imgList.push(img);
    }
    data.post.image = URL + '/' + imgList.join(",");
    console.log('datapostimg🤍', data.post.image)
    data.post.content = content;
    //header값
    const token = JSON.parse(localStorage.getItem("token"))
    const accountname = JSON.parse(localStorage.getItem("accountname"))
    //axios post요청 

    try {
      const res = await axios.post(URL + ReqPath, data, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-type": "application/json"
        },
      });
      console.log("게시글post요청결과", res);
      dispatch(AxiosPost(URL + ReqPath + "/" + accountname + "/userpost"))
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (content.length > 0 && postImg.length > 0) {
      SetuploadBtn(false)
    }
    else {
      SetuploadBtn(true)
    }
  }, [content, postImg])

  return (
    <AllWrap>
      <header>
        <SnsUploadNav onClick={handlePostSns} disabled={uploadBtn} />
      </header>
      <PaddingMain>
        <TextLable htmlFor="snspost" />
        <TextInput name="snspost" id="snspost" placeholder="게시글 입력하기 ..." value={content} onChange={(e) => { setContent(e.target.value) }} />
        <ImgWrapper>

          {
            showImg.length === 1 ?
              showImg.map((image, id) => (
                <div key={id} >
                  {console.log(image)}
                  <SingleImg key={id} src={image} />
                  <DeleteBtn onClick={() => handleDeleteImg(id)} />
                </div>
              ))
              :
              showImg.map((image, id) => (
                <div key={id} >
                  {console.log(image)}
                  <Img key={id} src={image} />
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
            accept='image/jpeg, image/jpg'
            onChange={handleAddImg}
            ref={fileInput}
          />
        </FileUploader>
      </PaddingMain>
    </AllWrap>
  )
}
