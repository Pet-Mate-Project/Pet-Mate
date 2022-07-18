import React from 'react'
import { SnsUploadNav } from '../../components/navBack/NavBack'
import { AllWrap } from '../../style/commonStyle'
import { FileInput,FileUploader,TextInput,ImgBox,Img,TextLable,DeleteBtn,ImgWrapper } from './addSnsPostStyle'
import { PaddingMain } from '../../style/commonStyle'
import { useState, useRef, useEffect } from 'react'
import { ImgUpload } from '../../pages/SignUpMain'
import axios from 'axios'
import { useDispatch } from "react-redux";
import { AxiosPost } from '../../reducers/getPostSlice'

export default function AddSnsPost() { 
  const dispatch = useDispatch();
  const [content,setContent] = useState("");
  const fileInput = useRef(null)
  const [showImg, setShowImg] = useState([]);
  const [postImg,setPostImg] = useState([]);
  const [uploadBtn,SetuploadBtn] =useState(true);

  //이미지미리보기
  const handleAddImg = (e) => {
    let fileURLs = [...showImg];
    let files = [...postImg];
    let fileArr = e.target.files;
    //여러이미지 push
    for(let i=0;i<fileArr.length;i++){
      const currentImgURL = URL.createObjectURL(fileArr[i]);
      fileURLs.push(currentImgURL);
      files.push(fileArr[i]);  
    }
    
    if(fileURLs.length>3){
      alert("사진은 최대 3장까지 업로드 가능합니다.");
      fileURLs = fileURLs.slice(0,3); 
      files = files.slice(0,3);
    }
    setPostImg(files);
    setShowImg(fileURLs);
  }

  //삭제함수
  const handleDeleteImg =(id)=>{
    setShowImg(showImg.filter((_,index)=>index!==id));
    setPostImg(postImg.filter((_,index)=>index!==id));
  };

  let data ={
    "post": {
      "content": "",
      "image": ""
    }
  }

  async function handlePostSns (){
    //사진 filename 가져오기
    let imgList=[];
    for(let i =0;i<postImg?.length;i++){
      const img = await ImgUpload(postImg[i])
      imgList.push(img); 
    }
    data.post.image= imgList.join(",");
    data.post.content= content;
    // 요청URL
    const URL = "https://mandarin.api.weniv.co.kr";
    const loginReqPath = "/post";
    //header값
    const token = JSON.parse(localStorage.getItem("token"))
    const accountname = JSON.parse(localStorage.getItem("accountname"))
    //axios post요청 
    const res = await axios.post(URL + loginReqPath, data, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-type": "application/json"
      },
    });
    console.log("게시글post요청결과",res);
    dispatch(AxiosPost(URL + loginReqPath + "/" + accountname+"/userpost"))
  }

  useEffect(()=>{
    if(content.length>0 && postImg.length>0){
      SetuploadBtn(false)
    }
    else{
      SetuploadBtn(true)
    }
  },[content,postImg])

  return (
    <AllWrap>          
      <header>
        <SnsUploadNav onClick={handlePostSns} disabled={uploadBtn}/>
      </header>
      <PaddingMain>
        <TextLable htmlFor="snspost" />
        <TextInput name="snspost" id="snspost"  placeholder="게시글 입력하기 ..." value={content} onChange={(e)=>{setContent(e.target.value)}}/>
        <ImgWrapper>
          {showImg.map((image,id)=>(    
            <ImgBox key={id} >
              <Img key={id} src={image} />
              <DeleteBtn onClick={()=>handleDeleteImg(id)}/>
            </ImgBox>
          ))}
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
 