import React from 'react'
import { ContentTxt, DateTxt, PetImg, PetInfoTxt, PostStyle, TextWrap, TitleTxt, TxtBox, WrapPost } from './homePostStyle'
import { UserChat } from '../../components/user/User'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AxiosWalkingPostDetail } from '../../reducers/getPostDetailSlice';
import { deleteActions } from '../../reducers/deletePostSlice'


export default function HomePost({ followpost }) {
  const dispatch = useDispatch();
  console.log("템플릿", followpost);
  const defaultImg = "https://mandarin.api.weniv.co.kr/1657812669741.png"
  const marketImg = "http://146.56.183.55:5050/Ellipse.png"
  const URL = "https://mandarin.api.weniv.co.kr";
  // const UserId = UserIdPath.pathname.slice(15,);

  function imgCheck(post) {
    if (post.author.image === marketImg) {
      return defaultImg;
    }
    else {
      return URL + "/" + post.author.image;
    }
  }

  const handleOnClick = (postId) => {
    dispatch(AxiosWalkingPostDetail(URL + `/product/detail/${postId}`));
  }

  return (
    <ul >
      {followpost && followpost.map((post) => {
        return (
          <PostStyle key={post._id} >
            <UserChat userName={post.author.username} userId={post.author.accountname} img={imgCheck(post)} />
            <Link to={'/walkingpostdetail/' + post._id} onClick={() => { handleOnClick(post._id) }}>
              <WrapPost>
                <PetImg src={URL + "/" + post.itemImage}></PetImg>
                <TextWrap>
                  <TitleTxt>{post.itemName}</TitleTxt>
                  <ContentTxt>{post.link}</ContentTxt>
                  <DateTxt>{post.updatedAt.substring(0, 10)}</DateTxt>
                </TextWrap>
              </WrapPost>
            </Link>
          </PostStyle>
        )
      })}
    </ul >
  )
}
