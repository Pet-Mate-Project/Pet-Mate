import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteActions } from '../../reducers/deletePostSlice'
import { UserMore } from '../user/User.jsx'
import { WrapSection, PostText, PostImg, DateText, IconWrap, IconImg } from './feedPostStyle'
import heartIcon from '../../assets/icon-heart.svg'
import messageIcon from '../../assets/icon-message.svg'
import Modal from '../../components/postModal/PostModal';
import { useDispatch } from 'react-redux';
import { AxiosDetail } from '../../reducers/getPostDetailSlice';


export default function FeedPost({ post }) {
  const dispatch = useDispatch();
  const defaultImg = "https://mandarin.api.weniv.co.kr/1657812669741.png";
  const marketImg = "http://146.56.183.55:5050/Ellipse.png";
  const MyId = JSON.parse(localStorage.getItem("accountname"));
  const url = "https://mandarin.api.weniv.co.kr";
  const images = post.image.split(",");

  function imgCheck(post) {
    if (post.author.image === marketImg) {
      return defaultImg;
    }
    else {
      return "https://mandarin.api.weniv.co.kr/" + post.author.image;
    }
  }

  //모달
  const list = { '삭제': '', '수정': '/snspostmodify' };
  const alertTxt = ['삭제하시겠어요?', '삭제'];
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false)
  }

  const handleId = (snsId) => {
    dispatch(deleteActions.checkType("post"));
    dispatch(deleteActions.selectId(snsId));
    setModal(modal => !modal)
  }

  return (
    <>
      {
        (modal === true) && (post.author.accountname === MyId) && <Modal list={list} alertTxt={alertTxt} closeModal={closeModal} setModal={setModal} />
      }
      <UserMore userName={post.author.username} userId={post.author.accountname} img={imgCheck(post)} onClick={() => handleId(post.id)} />
      <WrapSection onClick={() => {
        dispatch(AxiosDetail(url + `/post/${post.id}`));
      }}>
        <Link to='/postdetail'>
          <PostText>{post.content}</PostText>
          {images.map((image) => {
            return (
              <PostImg key={Math.random() * 100} src={"https://mandarin.api.weniv.co.kr/" + image} />
            )
          })}
          <IconWrap>
            <IconImg src={heartIcon} />
            <IconImg src={messageIcon} />
          </IconWrap>
          <DateText>{post.updatedAt.substring(0, 10)}</DateText>
        </Link>
      </WrapSection>
    </>
  )
}
