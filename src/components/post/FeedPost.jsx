import React from 'react'
import { UserMore } from '../user/User.jsx'
import { WrapSection, PostText, PostImg, DateText, IconWrap, IconImg } from './feedPostStyle'
import heartIcon from '../../assets/icon-heart.svg'
import messageIcon from '../../assets/icon-message.svg'

export default function FeedPost({ post, imgCheck, handleId }) {
  const images = post.image.split(",");
  return (
    <>
      <UserMore userName={post.author.username} userId={post.author.accountname} img={imgCheck(post)} onClick={() => handleId(post.id)} />
      <WrapSection>
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
      </WrapSection>
    </>
  )
}
