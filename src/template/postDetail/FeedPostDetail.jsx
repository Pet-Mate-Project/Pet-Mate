import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { AllWrap, ScrollMain } from '../../style/commonStyle'
import { NavBack } from '../../components/navBack/NavBack'
import Comment from '../../components/comment/Comment'
import FeedPost from '../../components/post/FeedPost'
import { DetailWrapper } from './FeedPostDetailStyle'
import { useDispatch, useSelector } from 'react-redux'
import { selectDetailPosts,AxiosDetail } from '../../reducers/getPostDetailSlice'
import CommentList from '../../components/commentList/CommentList'
import { AxiosCommentList, getCommentList } from '../../reducers/getCommentSlice'
import { useLocation } from "react-router-dom"
import queryString from "query-string";

export default function FeedPostDetail() {
  const UserIdPath = useLocation();
  const UserId = UserIdPath.pathname.slice(12,);

  const [userInfoList, setUserInfoList] = useState([]);
  const URL = "https://mandarin.api.weniv.co.kr";
  const token = JSON.parse(localStorage.getItem("token"));
  const accountname = JSON.parse(localStorage.getItem("accountname"));
  const postDetail = useSelector(selectDetailPosts).post;
  const commentList = useSelector(getCommentList).comments; //댓글리스트
  const dispatch = useDispatch();
   
  useEffect(() => {
    getUserInfo();
    dispatch(AxiosCommentList(URL+`/post/${UserId}/comments`)) 
    dispatch(AxiosDetail(URL+`/post/${UserId}`))
  }, [])

  console.log(commentList);

  function getUserInfo() {
    try {
      axios.get(URL + `/profile/${accountname}`, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-type": "application/json"
        }
      }).then((res) => setUserInfoList(res.data.profile))
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <AllWrap>
      <header>
        <NavBack />
      </header>
      <ScrollMain>
        <DetailWrapper>
          {
            postDetail?.id === UserId && <FeedPost post={postDetail} />
          }
        </DetailWrapper>
        <ul>
          {
            commentList?.map((comment)=>{
              return(
                <CommentList key={comment.id} content={comment.content} time={comment.createdAt} author={comment.author.accountname}   src = {comment.author.image} />
              )
            })
          }
        </ul>
      </ScrollMain>
      <Comment img={URL + `/${userInfoList.image}`}></Comment>
    </AllWrap>
  )
}
