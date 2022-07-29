import React ,{useState} from 'react'
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AxiosCommentList } from '../../reducers/getCommentSlice'
import {  AxiosDetail } from '../../reducers/getPostDetailSlice'
import axios from 'axios';

import { ProfileIconS } from '../profileIcon/ProfileIcon'
import { CommentBtnStyled, CommentTextStyle, Wrapper } from './commentStyle'


export default function Comment({ img }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const currentPostId = location.pathname.slice(15,); 
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
      const res = await axios.post(URL + ReqPath,data,config)
      return res.data.comment.content;
    }
    catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = () => {
    postComment() 
      .then(
        (res) => dispatch(AxiosCommentList(URL+`/post/${currentPostId}/comments?limit=50`))
      )
      .then(
        (res) => dispatch(AxiosDetail(URL + `/post/${currentPostId}`))
      ) 
    Setcontent("");
  }

  const handleKeyPress = (e) => {
    if(e.key==='Enter'){
      postComment() 
        .then(
          (res) => dispatch(AxiosCommentList(URL+`/post/${currentPostId}/comments?limit=50`))
        )
        .then(
          (res) => dispatch(AxiosDetail(URL + `/post/${currentPostId}`))
        ) 
      Setcontent("");
    }
  }

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
