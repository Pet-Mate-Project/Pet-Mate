import React from 'react'
import { Link } from 'react-router-dom'
import { CommentWrpper, Name, WritingTime, Content, UserMore } from './commentListStlye'
import { ProfileIconS } from '../profileIcon/ProfileIcon'
import moment from 'moment'
import 'moment/locale/ko'
import dot from '../../assets/icon-more-vertical.svg'

export default function CommentList({ content, time, author, img, onClick }) {
  const accountname = JSON.parse(localStorage.getItem("accountname"));
  let linkName = '';
  accountname === author ? linkName = '/profilepage' : linkName = '/userprofile';

  return (
    <li style={{ margin: "20px 16px" }}>
      <CommentWrpper>
        <Link 
          to={linkName} 
          state={{ userId: author }} 
          style={{ display: "flex" }}>
          <ProfileIconS img={img} alt={"프로필 사진"} />
          <Name>{author}</Name>
          <WritingTime>· {moment(time).fromNow()}</WritingTime>
        </Link>
        <button style={{ marginLeft: "auto" }}>
          <UserMore
            src={dot}
            onClick={onClick}
            alt="댓글설정 버튼" />
        </button>
      </CommentWrpper>
      <Content>{content}</Content>
    </li >
  )
}
