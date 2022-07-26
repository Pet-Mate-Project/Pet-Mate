import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { deleteActions } from '../../reducers/deletePostSlice'
import { UserMore } from '../user/User.jsx'
import { WrapSection, PostText, PostImg, DateText, IconWrap, IconImg } from './feedPostStyle'
import emptyheartIcon from '../../assets/icon-heart.svg'
import heartIcon from '../../assets/icon-heart-fill.svg'
import messageIcon from '../../assets/icon-message.svg'
import Modal from '../../components/postModal/PostModal';
import { useDispatch } from 'react-redux';
import { AxiosDetail } from '../../reducers/getPostDetailSlice';
import axios from 'axios'
import { useEffect } from 'react'



export default function FeedPost({ post }) {
  const dispatch = useDispatch();
  const defaultImg = "https://mandarin.api.weniv.co.kr/1657812669741.png";
  const marketImg = "http://146.56.183.55:5050/Ellipse.png";
  const MyId = JSON.parse(localStorage.getItem("accountname"));
  const token = JSON.parse(localStorage.getItem("token"));
  const url = "https://mandarin.api.weniv.co.kr";
  const images = post.image.split(",");
  const [isLike, setIsLike] = useState("");
  const [heartCount, setheartCount] = useState("");

  useEffect(() => {
    setIsLike(post.hearted)
    setheartCount(post.heartCount)
  }, [post])

  //좋아요
  async function postLike() {
    await axios.post(`${url}/post/${post.id}/heart`, [], {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-type": "application/json"
      }
    }).then(res => {
      console.log('💗res', res.data.post)
      setIsLike(res.data.post.hearted)
      setheartCount(res.data.post.heartCount)
    })
  }

  //좋아요 취소
  async function postLikeCancle() {
    await axios.delete(`${url}/post/${post.id}/unheart`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-type": "application/json"
      }
    }).then(res => {
      console.log('💔res', res.data.post)
      setIsLike(res.data.post.hearted)
      setheartCount(res.data.post.heartCount)
    })
  }

  //기본이미지체크
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

  // 좋아요 버튼 함수
  const handlesetLike = () => {
    if (!isLike) {
      postLike();
    } else {
      postLikeCancle();
    }
  }

  const location = useLocation();
  const handleOnClick = (postId) => {
    const path = location.pathname;
    if(path==='/feedpage'){
      dispatch(deleteActions.selectId(postId));
      dispatch(AxiosDetail(url + `/post/${postId}`))
    }
  }

  return (
    <>
      {
        (modal === true) && (post.author.accountname === MyId) && <Modal list={list} alertTxt={alertTxt} closeModal={closeModal} setModal={setModal} />
      }

      <UserMore userName={post.author.username} userId={post.author.accountname} img={imgCheck(post)} onClick={() => handleId(post.id)} />

      <WrapSection onClick={() => { handleOnClick(post.id) }}>


        <Link to={'/snspostdetail/' + post.id} >
          <PostText>{post.content}</PostText>
          {images.map((image) => {
            return (
              <PostImg key={Math.random() * 100} src={"https://mandarin.api.weniv.co.kr/" + image} />
            )
          })}
        </Link>
        <IconWrap>
          <button onClick={handlesetLike} style={{ cursor: 'pointer' }}>
            <IconImg src={isLike ? heartIcon : emptyheartIcon} />
            {heartCount}
          </button>
          <button style={{ marginLeft: "6px" }}>
            <IconImg src={messageIcon} />
            {post.commentCount}
          </button>
        </IconWrap>
        <DateText>{post.updatedAt.substring(0, 10)}</DateText>
      </WrapSection>
    </>
  )
}
