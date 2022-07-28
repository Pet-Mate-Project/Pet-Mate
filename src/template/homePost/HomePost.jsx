import React from 'react'
import { ContentTxt, DateTxt, PetImg, PostStyle, TextWrap, TitleTxt, WrapPost } from './homePostStyle'
import { UserChat } from '../../components/user/User'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AxiosWalkingPostDetail } from '../../reducers/getPostDetailSlice';

export default function HomePost({ followpost }) {
  const dispatch = useDispatch();
  console.log("템플릿", followpost);
  const URL = "https://mandarin.api.weniv.co.kr";
  // const UserId = UserIdPath.pathname.slice(15,);

  const handleOnClick = (postId) => {
    dispatch(AxiosWalkingPostDetail(URL + `/product/detail/${postId}`));
  }

  return (
    <ul >
      {followpost && followpost.map((post) => {
        return (
          <PostStyle key={post._id} >
            <UserChat userName={post.author.username} userId={post.author.accountname} img={post.author.image} />
            <Link to={'/walkingpostdetail/' + post._id} onClick={() => { handleOnClick(post._id) }}>
              <WrapPost>
                {
                  post.itemImage &&
                    (post.itemImage?.search(URL) !== -1 || post.itemImage?.search('base64') !== -1 || post.itemImage?.search('.svg') !== -1)
                    ?
                    <PetImg src={post.itemImage} alt="펫이미지" />
                    :
                    <PetImg src={`${URL}/${post.itemImage}`} alt="펫이미지" />
                }
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
