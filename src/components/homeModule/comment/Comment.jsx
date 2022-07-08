import React from 'react'
import { CommentBtnStyled, CommentTextStyle, Wrapper } from './commentStyle'
import { ProfileIconS } from '../../profileIcon/ProfileIcon'

export function Comment() {
  return (
    <>
      <Wrapper>
        <ProfileIconS />
        <CommentTextStyle
          placeholder='댓글 입력하기...' />
        <CommentBtnStyled type='submit'>게시</CommentBtnStyled>


      </Wrapper>
    </>
  )
}
