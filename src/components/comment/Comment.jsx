import React ,{useState} from 'react'
import { ProfileIconS } from '../profileIcon/ProfileIcon'
import { CommentBtnStyled, CommentTextStyle, Wrapper } from './commentStyle'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { SelectId } from '../../reducers/deletePostSlice'

export default function Comment({ img }) {

  const currentPostId = useSelector(SelectId);
  const [content,Setcontent] = useState("");
  const token = JSON.parse(localStorage.getItem("token"));
  const URL = "https://mandarin.api.weniv.co.kr";
  const ReqPath = `/post/${currentPostId}/comments`;
  const config =  {
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-type": "application/json"
    }
  };
  let data = {
    "comment":{
      "content":content
    }
  }

  async  function postComment() {
    try {
      await axios.post(URL + ReqPath,data,config)
        .then(res => console.log(res))
    }
    catch (error) {
      console.log(error);
    }
  }


  const handleSubmit = () => {
    postComment() 
    Setcontent("");
    console.log("버튼");
  }

  const handleKeyPress = (e) => {
    if(e.key==='Enter'){
      postComment() 
      Setcontent("");
      console.log("엔터");
    }
  }

  console.log(content);
  return (
    <>
      <Wrapper>
        <ProfileIconS img={img}></ProfileIconS>
        <CommentTextStyle
          placeholder='댓글 입력하기...' onKeyDown={handleKeyPress} value={content} onChange={(e)=>Setcontent(e.target.value)} />
        <CommentBtnStyled type='submit' onClick={handleSubmit}>게시</CommentBtnStyled>
      </Wrapper>
    </>
  )
}
