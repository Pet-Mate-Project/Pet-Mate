import React from 'react'
import { UserMore } from '../../components/user/User.jsx'
import { IconWrap, PostImg, PostText, WrapperArticle, WrapSection, IconImg, DateText } from './snsPostStyle'
import image from '../../assets/basic-profile.svg'
import heartIcon from '../../assets/icon-heart.svg'
import messageIcon from '../../assets/icon-message.svg'
import { useSelector } from 'react-redux';
import { selectAllSnsPosts } from '../../reducers/getPostSlice.js'

export function SnsPost() {
  const snsPosts = useSelector(selectAllSnsPosts).post;
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
        console.log(images);
        return (
          <li key={post.id} style={{ margin: "30px 0" }}>
            <UserMore userName={post.author.username} userId={post.author.accountname} img={imgCheck(post)} />
            <WrapSection>
              <PostText>{post.content}</PostText>
              {images.map((image) => {
                console.log("https://mandarin.api.weniv.co.kr/" + image);
                return (
                  <>
                    <PostImg src={"https://mandarin.api.weniv.co.kr/" + image} />
                  </>
                )
              })}
              <IconWrap>
                <IconImg src={heartIcon} />38
                <IconImg src={messageIcon} />55
              </IconWrap>
              <DateText>{post.updatedAt.substring(0, 10)}</DateText>
            </WrapSection>
          </li>
        )
      })}
    </ul>
  )
}


export function MySnsPost() {
  const snsPosts = useSelector(selectAllSnsPosts).post;
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
        console.log(images);
        return (
          <li key={post.id} style={{ margin: "30px 0" }}>
            <UserMore userName={post.author.username} userId={post.author.accountname} img={imgCheck(post)} />
            <WrapSection>
              <PostText>{post.content}</PostText>
              {images.map((image) => {
                console.log("https://mandarin.api.weniv.co.kr/" + image);
                return (
                  <>
                    <PostImg src={"https://mandarin.api.weniv.co.kr/" + image} />
                  </>
                )
              })}
              <IconWrap>
                <IconImg src={heartIcon} />38
                <IconImg src={messageIcon} />55
              </IconWrap>
              <DateText>{post.updatedAt.substring(0, 10)}</DateText>
            </WrapSection>
          </li>
        )
      })}
    </ul>
  )
}

