import React, { useState, useEffect, useLayoutEffect } from 'react'
import axios from 'axios'
import { AllWrap, ScrollMain } from '../../style/commonStyle'
import { NavBack } from '../../components/navBack/NavBack'
import Comment from '../../components/comment/Comment'
import FeedPost from '../../components/post/FeedPost'
import { DetailWrapper } from './FeedPostDetailStyle'
import { useDispatch, useSelector } from 'react-redux'
import { selectDetailPosts, AxiosDetail } from '../../reducers/getPostDetailSlice'
import CommentList from '../../components/commentList/CommentList'
import { AxiosCommentList, getCommentList, getCommentStatus, commentAction } from '../../reducers/getCommentSlice'
import { useLocation } from "react-router-dom"
import Modal from '../../components/postModal/PostModal';
import { selectCommentAuthor } from '../../reducers/getCommentSlice'


export default function FeedPostDetail() {
  const UserIdPath = useLocation();
  const PostId = UserIdPath.pathname.slice(15,);
  const [userInfoList, setUserInfoList] = useState([]);
  const URL = "https://mandarin.api.weniv.co.kr";
  const token = JSON.parse(localStorage.getItem("token"));
  const accountname = JSON.parse(localStorage.getItem("accountname"));
  const postDetail = useSelector(selectDetailPosts).post;
  const commentList = useSelector(getCommentList).comments; //댓글리스트
  const commentStatus = useSelector(getCommentStatus); //상태
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const commnetAuthor = useSelector(selectCommentAuthor);


  useLayoutEffect(() => {
    getUserInfo();
    dispatch(AxiosDetail(URL + `/post/${PostId}`))
    dispatch(AxiosCommentList(URL + `/post/${PostId}/comments?limit=50`))
  }, [])

  console.log('댓리스트😎', commentList)
  console.log('😎', commentStatus)
  

  useLayoutEffect(() => {
    if (commentStatus === 'loading') {
      dispatch(AxiosDetail(URL + `/post/${PostId}`))
      dispatch(AxiosCommentList(URL + `/post/${PostId}/comments?limit=50`))
    }
  }, [commentStatus])


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

  const handleonClick = (postId, postAuthor) => {
    dispatch(commentAction.selectCommentId(postId))
    dispatch(commentAction.selectCommentAuthor(postAuthor))
    setModal(modal => !modal)
  }

  //모달
  let list = [];
  let alertTxt = [];
  if (accountname === commnetAuthor) {
    list = { '삭제': '' };
    alertTxt = ['삭제하시겠어요?', '삭제'];
  }
  else {
    list = { '신고하기': '' };
  }
  const closeModal = () => {
    setModal(false)
  }
  console.log(postDetail?.id ) 
  console.log(PostId) 
  return (
    <AllWrap>
      <header>
        <NavBack />
      </header>
      {
        (modal === true) && <Modal list={list} alertTxt={alertTxt} closeModal={closeModal} setModal={setModal} />
      }
      <ScrollMain>
        {
          postDetail?.id === PostId && <DetailWrapper>
            <FeedPost post={postDetail} />
          </DetailWrapper>
        }
          

        <ul>
          {
            commentStatus==="success"&&  commentList?.map((comment) => {
              return (
                <CommentList key={comment.id} content={comment.content} time={comment.createdAt} author={comment.author.accountname} img={comment.author.image} onClick={() => handleonClick(comment.id, comment.author.accountname)} setModal={setModal} modal={modal} />
              )
            })
          }
        </ul>
      </ScrollMain>
      <Comment img={URL + `/${userInfoList.image}`}></Comment>
    </AllWrap>
  )
}