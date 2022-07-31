import React from 'react'
import { ProfileIconS } from '../profileIcon/ProfileIcon'
import moment from 'moment';
import "moment/locale/ko";
import dot from '../../assets/icon-more-vertical.svg'
import { CommentWrpper, Name, WritingTime, Content, UserMore } from './commentListStlye';

export default function CommentList({ content, time, author, img, onClick }) {

  return (
    <li style={{ margin: "20px 16px" }}>
      <CommentWrpper >
        <ProfileIconS img={img} alt={"프로필 사진"} />
        <Name>{author}</Name>
        <WritingTime>· {moment(time).fromNow()}</WritingTime>
        <button style={{ marginLeft: "auto" }}>
          <UserMore src={dot} onClick={onClick} alt="댓글설정 버튼" />
        </button>
      </CommentWrpper>
      <Content>{content}</Content>
    </li>
  )
}
