import React from 'react'
import { ContentTxt, DateTxt, PetImg, PetInfoTxt, PostStyle, TextWrap, TitleTxt, TxtBox, WrapPost } from './homePostStyle'
import { UserChat } from '../../components/user/User'

export default function HomePost({ followpost }) {
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
          <PostStyle key={post._id}>
            <UserChat userName={post.author.username} userId={post.author.accountname} img={imgCheck(post)} />
            <WrapPost>
              <PetImg src={"https://mandarin.api.weniv.co.kr/" + post.itemImage}></PetImg>
              <TextWrap>
                <TitleTxt>{post.itemName}</TitleTxt>
                <ContentTxt>{post.link}</ContentTxt>
                <DateTxt>{post.updatedAt.substring(0, 10)}</DateTxt>
              </TextWrap>
            </WrapPost>
          </PostStyle>
        )
      })}
    </ul>
  )
}
