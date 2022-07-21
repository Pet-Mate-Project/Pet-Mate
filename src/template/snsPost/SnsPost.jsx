import React, { useState } from 'react'
import { UserMore } from '../../components/user/User.jsx'
import { IconWrap, PostImg, PostText, WrapSection, IconImg, DateText } from './snsPostStyle'
import heartIcon from '../../assets/icon-heart.svg'
import messageIcon from '../../assets/icon-message.svg'
import { useDispatch, useSelector } from 'react-redux';
import { selectAllSnsPosts } from '../../reducers/getPostSlice.js'
import { deleteActions } from '../../reducers/deletePostSlice'
import Modal from '../../components/postModal/PostModal';
import {useLocation} from 'react-router-dom'


export function FllowSnsPost() {  //내가 팔로우한 사람들 게시글 (피드쪽)
  const snsPosts = useSelector(selectAllSnsPosts).posts; 
  console.log(snsPosts);
  const defaultImg = "https://mandarin.api.weniv.co.kr/1657812669741.png";
  const marketImg = "http://146.56.183.55:5050/Ellipse.png";

  function imgCheck(post) {
    if (post.author.image === marketImg) {
      return defaultImg;
    }
    else {
      return "https://mandarin.api.weniv.co.kr/" + post.author.image;
    }
  }

  return (
    <ul>
      {snsPosts && snsPosts.map((post) => {
        let images = post.image
        images = images.split(",")
        return (
          <li key={post.id} style={{ padding: "16px" }}>
            <UserMore userName={post.author.username} userId={post.author.accountname} img={imgCheck(post)} />
            <WrapSection>
              <PostText>{post.content}</PostText>
              {images.map((image) => {
                return (
                  <>
                    <PostImg src={"https://mandarin.api.weniv.co.kr/" + image} />
                  </>
                )
              })}
              <IconWrap>
                <IconImg src={heartIcon} />
                <IconImg src={messageIcon} />
              </IconWrap>
              <DateText>{post.updatedAt.substring(0, 10)}</DateText>
            </WrapSection>
          </li>
        )
      })}
    </ul>
  )
}


export function MySnsPost() {  // 내 sns게시글
  const location = useLocation();
  const name = location.state?.userId;
  console.log("name",name);
  const dispatch = useDispatch();
  const snsPosts = useSelector(selectAllSnsPosts).post; 
  const defaultImg = "https://mandarin.api.weniv.co.kr/1657812669741.png";
  const marketImg = "http://146.56.183.55:5050/Ellipse.png";

  //기본이미지체크함수
  function imgCheck(post) {
    if (post.author.image === marketImg) {
      return defaultImg;
    }
    else {
      return "https://mandarin.api.weniv.co.kr/" + post.author.image;
    }
  }

  //모달
  const list = { '삭제': '', '수정': '/' };
  const alertTxt = ['삭제하시겠어요?', '삭제'];
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false)
  }

  const handleId = (snsId) => {
    dispatch(deleteActions.checkType("post"));
    dispatch(deleteActions.deleteId(snsId));
    setModal(modal => !modal)
  }

  return (
    <>
      {
        (modal === true) && (name ===undefined) && <Modal list={list} alertTxt={alertTxt} closeModal={closeModal} setModal={setModal} />}
      <ul>
        {snsPosts && snsPosts.map((post) => {
          let images = post.image
          images = images.split(",")
          return (
            <li key={post.id} style={{ padding: "16px" }}>
              <UserMore userName={post.author.username} userId={post.author.accountname} img={imgCheck(post)} onClick={() => handleId(post.id)} />
              <WrapSection>
                <PostText>{post.content}</PostText>
                {images.map((image) => {
                  return (
                    <>
                      <PostImg src={"https://mandarin.api.weniv.co.kr/" + image} />
                    </>
                  )
                })}
                <IconWrap>
                  <IconImg src={heartIcon} />
                  <IconImg src={messageIcon} />
                </IconWrap>
                <DateText>{post.updatedAt.substring(0, 10)}</DateText>
              </WrapSection>
            </li>
          )
        })}
      </ul>
    </>
  )
}

