import React from 'react'
import { ProfileIconS } from '../profileIcon/ProfileIcon'
import dot from '../../assets/icon-more-vertical.svg'
import { CommentWrpper, Name, WritingTime, Content, UserMore } from './commentListStlye';
import moment from 'moment';
import "moment/locale/ko";

export default function CommentList({ content, time, author, img, onClick }) {
  const URL = "https://mandarin.api.weniv.co.kr/";
  const defaultImg = "https://mandarin.api.weniv.co.kr/1657812669741.png";
  const marketImg = "http://146.56.183.55:5050/Ellipse.png";


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
