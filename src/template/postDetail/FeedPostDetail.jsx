import React, { useState, useLayoutEffect } from 'react'
import { useLocation } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { AxiosCommentList, getCommentList, getCommentStatus, commentAction } from '../../reducers/getCommentSlice'
import { selectCommentAuthor } from '../../reducers/getCommentSlice'
import { selectUserData } from '../../reducers/getUserInfoSlice'
import { AxiosUserData } from '../../reducers/getUserInfoSlice'
import { selectDetailPosts, AxiosDetail } from '../../reducers/getPostDetailSlice'

import { DetailWrapper } from './FeedPostDetailStyle'
import Modal from '../../components/postModal/PostModal';
import FeedPost from '../../components/post/FeedPost'
import { AllWrap, ScrollMain,Heading } from '../../style/commonStyle'
import { NavBack } from '../../components/navBack/NavBack'
import Comment from '../../components/comment/Comment'
import CommentList from '../../components/commentList/CommentList'


export default function FeedPostDetail() {
  const UserIdPath = useLocation();
  const PostId = UserIdPath.pathname.slice(15,);
  const URL = "https://mandarin.api.weniv.co.kr";
  const accountname = JSON.parse(localStorage.getItem("accountname"));
  const postDetail = useSelector(selectDetailPosts).post;
  const commentList = useSelector(getCommentList).comments; //댓글리스트
  const commentStatus = useSelector(getCommentStatus); //상태
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const commnetAuthor = useSelector(selectCommentAuthor);
  const userInfoList = useSelector(selectUserData) //유저정보상태

  useLayoutEffect(() => {
    dispatch(AxiosUserData(URL + `/profile/${accountname}`))
    dispatch(AxiosDetail(URL + `/post/${PostId}`))
    dispatch(AxiosCommentList(URL + `/post/${PostId}/comments/?limit=50`))
  }, [])


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

  return (
    <AllWrap>
      <header>
        <Heading> SNS게시글 디테일 페이지</Heading>
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
            commentStatus === "success" && commentList?.map((comment) => {
              return (
                <CommentList key={comment.id} content={comment.content} time={comment.createdAt} author={comment.author.accountname} img={comment.author.image} onClick={() => handleonClick(comment.id, comment.author.accountname)} setModal={setModal} modal={modal} />
              )
            })
          }
        </ul>
      </ScrollMain>
      <Comment img={userInfoList.image} ></Comment>
    </AllWrap>
  )
}