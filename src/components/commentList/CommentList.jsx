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

  //기본이미지체크
  function imgCheck(img) {
    if (img === marketImg) {
      return defaultImg;
    } else if (img?.search(URL) !== -1 || img?.search('base64') !== -1 || img?.search('.svg') !== -1) {
      return img;
    } else if (img?.search(URL) === -1) {
      return `${URL}/${img}`
    }
  }

  return (
    <li style={{ margin: "20px 16px" }}>
      <CommentWrpper >
        <ProfileIconS img={imgCheck(img)} />
        <Name>{author}</Name>
        <WritingTime>· {moment(time).fromNow()}</WritingTime>
        <button style={{ marginLeft: "auto" }}>
          <UserMore src={dot} onClick={onClick} />
        </button>
      </CommentWrpper>
      <Content>{content}</Content>
    </li>
  )
}
