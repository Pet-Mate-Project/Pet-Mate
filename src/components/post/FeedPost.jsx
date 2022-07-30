import React, { useState, useEffect, memo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { deleteActions } from '../../reducers/deletePostSlice'
import { UserMore } from '../user/User.jsx'
import { WrapSection, PostText, PostImg, DateText, IconWrap, IconImg, PostImgWrap } from './feedPostStyle'
import emptyheartIcon from '../../assets/icon-heart.svg'
import heartIcon from '../../assets/icon-heart-fill.svg'
import messageIcon from '../../assets/icon-message.svg'
import Modal from '../../components/postModal/PostModal';
import { useDispatch } from 'react-redux';
import { AxiosDetail } from '../../reducers/getPostDetailSlice';
import { AxiosGetLike, AxiosDeleteLike } from '../../reducers/getLikeSlice'
import { AxiosFeedPost } from '../../reducers/getFeedPostSlice'

function FeedPost({ post }) {
  const dispatch = useDispatch();
  const MyId = JSON.parse(localStorage.getItem("accountname"));
  const token = JSON.parse(localStorage.getItem("token"));
  const URL = "https://mandarin.api.weniv.co.kr";
  const images = post.image?.split(",");
  const [isLike, setIsLike] = useState("");
  const [heartCount, setheartCount] = useState("");
  const linkName = useLocation().pathname.slice(1, 14);

  useEffect(() => {
    dispatch(AxiosFeedPost(URL + "/post/feed/?limit=30"))
  }, [isLike])

  useEffect(() => {
    setheartCount(post.heartCount)
    setIsLike(post.hearted)
  }, [post])


  //모달
  const list = { '삭제': '', '수정': `/snspostmodify/${post.id}` };
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
      dispatch(AxiosGetLike(`${URL}/post/${post.id}/heart`))
        .then((res) => {
          console.log('💜', res.payload.heartCount)
          setheartCount(res.payload.heartCount)
        }
        )
      setIsLike(true)
    } else {
      dispatch(AxiosDeleteLike(`${URL}/post/${post.id}/unheart`))
        .then((res) => {
          console.log('💔', res.payload.heartCount)
          setheartCount(res.payload.heartCount)
        })
      setIsLike(false)
    }
  }


  const location = useLocation();
  const handleOnClick = (postId) => {
    const path = location.pathname;
    if (path === '/feedpage' || path === '/profilepage') {
      dispatch(deleteActions.selectId(postId));
      dispatch(AxiosDetail(URL + `/post/${postId}`))
    }
  }
  let keyVal = 1;

  return (
    <>
      {
        (modal === true) && (post.author.accountname === MyId) && <Modal list={list} alertTxt={alertTxt} closeModal={closeModal} setModal={setModal} />
      }
      <UserMore userName={post.author.username} userId={post.author.accountname} img={post.author.image} onClick={() => handleId(post.id)} />

      <WrapSection onClick={() => { handleOnClick(post.id) }}>
        <Link to={'/snspostdetail/' + post.id} >
          <PostText linkName={linkName}>{post.content}</PostText>
          <PostImgWrap>
            {
              images?.map((image) => {
                if (image) {
                  return (
                    (image?.search(URL) !== -1 || image?.search('base64') !== -1 || image?.search('.svg') !== -1)
                      ?
                      <PostImg key={keyVal++} src={image} alt="게시글 이미지" />
                      :
                      <PostImg key={keyVal++} src={`${URL}/${image}`} alt="게시글 이미지" />
                  )
                }
              })
            }
          </PostImgWrap>
        </Link>
        <IconWrap>
          <button onClick={handlesetLike} style={{ cursor: 'pointer' }}>
            <IconImg src={isLike ? heartIcon : emptyheartIcon} alt={"좋아요 버튼"} />
            {heartCount}
          </button>
          <button style={{ marginLeft: "6px" }}>
            <IconImg src={messageIcon} alt={"댓글 버튼"} />
            {post.commentCount}
          </button>
        </IconWrap>
        <DateText>{post.updatedAt.substring(0, 10)}</DateText>
      </WrapSection>
    </>
  )
}

export default memo(FeedPost);