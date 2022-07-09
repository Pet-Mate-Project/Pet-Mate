import React from 'react'
import { UserMore } from '../../components/user/User.jsx'
import { IconWrap, PostImg, PostText, WrapperArticle, WrapSection, IconImg, DateText, MoreIcon } from './snsPostStyle'
import image from '../../assets/basic-profile.svg'
import heartIcon from '../../assets/icon-heart.svg'
import messageIcon from '../../assets/icon-message.svg'

function SnsPost() {
  return (
    <article>
      <WrapperArticle>
        <UserMore />
        <WrapSection>
          <PostText>우리 아랑이가 드디어 코딩을 할 줄 알아요..!! 우리 애기 천재💗🐿️</PostText>
          <PostImg src={image} />
          <IconWrap>
            <IconImg src={heartIcon} />38
            <IconImg src={messageIcon} />55
          </IconWrap>
          <DateText>2022년 07월 01일</DateText>
        </WrapSection>
      </WrapperArticle>

    </article>
  )
}

export default SnsPost