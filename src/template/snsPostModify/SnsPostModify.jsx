import React from 'react'
import { SnsUploadNav } from '../../components/navBack/NavBack'
import { AllWrap,PaddingMain } from '../../style/commonStyle'
import { FileInput,FileUploader,TextInput,ImgBox,Img,TextLable,DeleteBtn,ImgWrapper } from '../snsPost/addSnsPostStyle'

import { useState, useRef, useLayoutEffect, useEffect  } from 'react'
import { ImgUpload } from '../../pages/SignUpMain'
import axios from 'axios'
import { useDispatch,useSelector } from "react-redux";
import { AxiosPost } from '../../reducers/getPostSlice';
import { SelectId } from '../../reducers/deletePostSlice';
import { AxiosDetail,selectDetailPosts } from '../../reducers/getPostDetailSlice'


export default function ModifySnsPost() { 
  const dispatch = useDispatch();
  const selectId = useSelector(SelectId) ; 
  const URL = "https://mandarin.api.weniv.co.kr";
  //선택한게시글
  const detailPostData = useSelector(selectDetailPosts).post ; 
  console.log("선택한 게시글",detailPostData);
  const preImg = detailPostData?.image;
  const preContent =detailPostData?.content;
  //기존 게시글정보 가져오기
  useLayoutEffect (()=>{
    dispatch(AxiosDetail(`${URL}/post/${selectId}`))
      .then(setShowImg([]))
      .then(setShowImg(()=>sliceImg(preImg)))
    console.log(`${URL}/product/detail/${selectId}`);
  },[preImg])

  const [content,setContent] = useState("");
  const fileInput = useRef(null);
  const [showImg, setShowImg] = useState([]);
  const [postImg,setPostImg] = useState([]);
  const [uploadBtn,SetuploadBtn] =useState(true);

  console.log(preContent);
  //서버에 전송할 데이터
  let data ={
    "post": {
      "content": "", 
      "image": showImg?.length===0 ? preImg : showImg
    }
  }

  //이미지미리보기
  const handleAddImg = (e) => {
    let fileURLs = [...showImg];
    let files = [...postImg];
    let fileArr = e.target.files;
    //여러이미지 push
    for(let i=0;i<fileArr.length;i++){
      const currentImgURL = window.URL.createObjectURL(fileArr[i]);
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
  
 

  //업로드버튼 클릭시 실행 함수
  async function handlePostSns (){
   
    let imgList=[];
    for(let i=0; i<showImg.length ; i++){
      if(showImg[i].slice(0,4)!=="blob" ){ //이미 서버로 보낸 사진
        imgList.push(showImg[i]);
      }
    }
    for(let i =0;i<postImg?.length;i++){  //서버로 보내야하는 사진
      const img = await ImgUpload(postImg[i])
      imgList.push(img); 
    }
    data.post.image= imgList.join(",");
    data.post.content = content?.length===0 ? preContent : content
    try{
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
      console.log("게시글post요청결과",res);
      dispatch(AxiosPost(URL + "/post/" + accountname+"/userpost"))
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    if( content.length===1 ){  //2자이상 입력시 버튼 활성화
      SetuploadBtn(true)
    }
    else{
      SetuploadBtn(false)
    }
  },[content,postImg])

  //미리보기 이미지 배열로 만들기
  function sliceImg(preImg){
    const arr = preImg?.split(",");
    return arr;
  }
  
  return (
    <AllWrap>          
      <header>
        <SnsUploadNav onClick={handlePostSns} disabled={uploadBtn}/>
      </header>
      <PaddingMain>
        <TextLable htmlFor="snspost" />
        <TextInput key={preContent} defaultValue={preContent} name="snspost" id="snspost"  placeholder="게시글 입력하기 ..."  onChange={(e)=>{setContent(e.target.value)}}/>
        <ImgWrapper>
          {
            showImg?.map((image,id)=>(
              <>
                <ImgBox key={id} >
                  <Img key={id} src={ image.slice(0,4)!=="blob" === true ? URL+"/"+ image: image}  />  
                  <DeleteBtn onClick={()=>handleDeleteImg(id)}/>
                </ImgBox>
              </>
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