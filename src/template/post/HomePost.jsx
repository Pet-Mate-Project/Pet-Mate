import React from 'react'
import { ContentTxt, DateTxt, PetImg, PetInfoTxt, PostStyle, TitleTxt, TxtBox } from './homePostStyle'
import { UserChat } from '../../components/user/User'
import { selectAllPosts } from '../../reducers/getPetInfoSlice'
import { useSelector } from 'react-redux';
import { selectAllFollowers } from '../../reducers/getFollowSlice'



export default function HomePost({ followpost }) {
  // const posts = useSelector(selectAllPosts).product;
  const follower = useSelector(selectAllFollowers);
  console.log("템플릿", followpost);
  const defaultImg = "https://mandarin.api.weniv.co.kr/1657812669741.png"
  const marketImg = "http://146.56.183.55:5050/Ellipse.png"

  function imgCheck(post) {
    if (post.author.image === marketImg) {
      return defaultImg;
    }
    else {
      return "https://mandarin.api.weniv.co.kr/" + post.author.image;
    }
  }
  return (
    <ul >
      {followpost && followpost.map((post) => {
        return (
          <PostStyle key={post.id}>
            <UserChat userName={post.author.username} userId={post.author.accountname} img={imgCheck(post)} />
            <PetImg src={"https://mandarin.api.weniv.co.kr/" + post.itemImage}></PetImg>
            <TxtBox>
              <TitleTxt>{post.itemName}</TitleTxt>
            </TxtBox>
            <ContentTxt>{post.link}</ContentTxt>
            <DateTxt>{post.updatedAt.substring(0, 10)}</DateTxt>
          </PostStyle>
        )
      })}
    </ul>
  )
}
