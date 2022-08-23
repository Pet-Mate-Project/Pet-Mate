import React, { useState, useLayoutEffect } from 'react'
import { Helmet } from 'react-helmet-async';
import { useLocation } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { AxiosCommentList, getCommentList, getCommentStatus, commentAction } from '../../reducers/getCommentSlice'
import { selectCommentAuthor } from '../../reducers/getCommentSlice'
import { selectUserData } from '../../reducers/getUserInfoSlice'
import { AxiosUserData } from '../../reducers/getUserInfoSlice'
import { selectDetailPosts, AxiosDetail } from '../../reducers/getPostDetailSlice'
import { DetailWrapper } from './FeedPostDetailStyle'
import { AllWrap, ScrollMain, Heading } from '../../style/commonStyle'
import Modal from '../../components/postModal/PostModal';
import FeedPost from '../../components/post/FeedPost'
import { NavBack } from '../../components/navBack/NavBack'
import Comment from '../../components/comment/Comment'
import CommentList from '../../components/commentList/CommentList'


export default function FeedPostDetail() {
  const dispatch = useDispatch();
  const URL = "https://mandarin.api.weniv.co.kr";
  const accountname = JSON.parse(localStorage.getItem("accountname"));
  const UserIdPath = useLocation();
  const PostId = UserIdPath.pathname.slice(15,);
  const postDetail = useSelector(selectDetailPosts).post;
  const commentList = useSelector(getCommentList).comments; //댓글리스트
  const commentStatus = useSelector(getCommentStatus); //상태
  const commnetAuthor = useSelector(selectCommentAuthor);
  const userInfoList = useSelector(selectUserData); //유저정보상태
  const [modal, setModal] = useState(false);

  useLayoutEffect(() => {
    dispatch(AxiosUserData(URL + `/profile/${accountname}`));
    dispatch(AxiosDetail(URL + `/post/${PostId}`));
    dispatch(AxiosCommentList(URL + `/post/${PostId}/comments/?limit=50`));
  }, [])

  const handleonClick = (postId, postAuthor) => {
    dispatch(commentAction.selectCommentId(postId));
    dispatch(commentAction.selectCommentAuthor(postAuthor));
    setModal(modal => !modal);
  }

  //모달
  let list = [];
  let alertTxt = [];
  if (accountname === commnetAuthor) {
    list = { '삭제': '' };
    alertTxt = ['삭제하시겠어요?', '삭제'];
  } else {
    list = { '신고하기': '' };
    alertTxt = ['신고하시겠어요?', '신고'];
  }

  const closeModal = () => {
    setModal(false)
  }

  return (
    <AllWrap>
      <Helmet>
        <title>SNS 게시글 상세 - 산책가까?</title>
      </Helmet>
      <header>
        <Heading>SNS게시글 디테일 페이지</Heading>
        <NavBack />
      </header>
      {
        (modal === true) &&
        <Modal
          list={list}
          alertTxt={alertTxt}
          closeModal={closeModal}
          setModal={setModal} />
      }
      <ScrollMain>
        {
          postDetail?.id === PostId &&
          <DetailWrapper>
            <FeedPost post={postDetail} />
          </DetailWrapper>
        }
        <ul>
          {
            commentStatus === "success" &&
            commentList?.map((comment) => {
              return (
                <CommentList
                  key={comment.id}
                  content={comment.content}
                  time={comment.createdAt}
                  author={comment.author.accountname}
                  img={comment.author.image}
                  onClick={() => handleonClick(comment.id, comment.author.accountname)}
                  setModal={setModal}
                  modal={modal} />
              )
            })
          }
        </ul>
      </ScrollMain>
      <Comment img={userInfoList.image} />
    </AllWrap>
  )
}