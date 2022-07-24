import React from 'react'
import { ProfileIconS } from '../profileIcon/ProfileIcon'
import { CommentBtnStyled, CommentTextStyle, Wrapper } from './commentStyle'

export default function Comment({ img }) {
  return (
    <>
      <Wrapper>
        <ProfileIconS img={img}></ProfileIconS>
        <CommentTextStyle
          placeholder='댓글 입력하기...' />
        <CommentBtnStyled type='submit'>게시</CommentBtnStyled>
      </Wrapper>
    </>
  )
}
