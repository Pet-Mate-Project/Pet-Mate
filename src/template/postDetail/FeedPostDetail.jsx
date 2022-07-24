import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { AllWrap, ScrollMain } from '../../style/commonStyle'
import { NavBack } from '../../components/navBack/NavBack'
import Comment from '../../components/comment/Comment'
import FeedPost from '../../components/post/FeedPost'
import { DetailWrapper } from './FeedPostDetailStyle';
import { useDispatch, useSelector } from 'react-redux';
import { selectDetailPosts } from '../../reducers/getPostDetailSlice';
import { SelectId } from '../../reducers/deletePostSlice'

export default function FeedPostDetail() {
  const [userInfoList, setUserInfoList] = useState([]);
  const url = "https://mandarin.api.weniv.co.kr";
  const token = JSON.parse(localStorage.getItem("token"));
  const accountname = JSON.parse(localStorage.getItem("accountname"));
  const postDetail = useSelector(selectDetailPosts).post;
  const currentPostId = useSelector(SelectId);
  
  useEffect(() => {
    getUserInfo();
  }, [])

  function getUserInfo() {
    try {
      axios.get(url + `/profile/${accountname}`, {
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
            postDetail?.id === currentPostId && <FeedPost post={postDetail} />
          }
        </DetailWrapper>
      </ScrollMain>
      <Comment img={url + `/${userInfoList.image}`}></Comment>
    </AllWrap>
  )
}
