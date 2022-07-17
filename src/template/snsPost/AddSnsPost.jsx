import React from 'react'
import { SnsUploadNav } from '../../components/navBack/NavBack'
import { AllWrap } from '../../style/commonStyle'
import { FileInput,FileUploader,TextInput,ImgBox,Img,TextLable,DeleteBtn,ImgWrapper } from './addSnsPostStyle'
import { PaddingMain } from '../../style/commonStyle'
import { useState, useRef, useEffect } from 'react'
import { useDispatch } from "react-redux";


export default function AddSnsPost() { 
  const dispatch = useDispatch();
  const [showImg, setShowImg] = useState([])
  const fileInput = useRef(null)

  //서버에 보낼 file객체
  const [userImg, setImg] = useState("");

  //이미지미리보기
  const handleAddImg = (e) => {
    let fileURLs = [...showImg];
    const fileArr = e.target.files;
    console.log("fileArr",fileArr);
    for(let i=0;i<fileArr.length;i++){
      const currentImgURL = URL.createObjectURL(fileArr[i]);
      fileURLs.push(currentImgURL);
    }
    console.log("현재 저장된 URL",fileURLs);
    if(fileURLs.length>3){
      alert("사진은 최대 3장까지 업로드 가능합니다.");
      fileURLs = fileURLs.slice(0,3); 
    }
    setShowImg(fileURLs);
  }
  console.log("이미지state값",showImg);

  const handleDeleteImg =(id)=>{
    setShowImg(showImg.filter((_,index)=>index!==id));
  };

  return (
    <AllWrap>          
      <header>
        <SnsUploadNav/>
      </header>
      <PaddingMain>
        <TextLable htmlFor="snspost" />
        <TextInput name="snspost" id="snspost"  placeholder="게시글 입력하기 ..."/>
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
 