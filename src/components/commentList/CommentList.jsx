import React from 'react'
import { ProfileIconS } from '../profileIcon/ProfileIcon'
import dot from '../../assets/icon-more-vertical.svg'
import { CommentWrpper, Name, WritingTime, Content, UserMore } from './commentListStlye';

import moment from 'moment';
import "moment/locale/ko";
import { useSelector } from 'react-redux';


export default function CommentList({ content,time,author,src,onClick }) {
  const URL = "https://mandarin.api.weniv.co.kr/";

  return (
    <li style={{margin:"20px 16px"}}> 
      <CommentWrpper >
        <ProfileIconS img ={URL+src}/>
        <Name>{author}</Name>
        <WritingTime>· {moment(time).fromNow()}</WritingTime>
        <button style={{marginLeft: "auto"}}>
          <UserMore src={dot} onClick={onClick} />
        </button>
      </CommentWrpper>
      <Content>{content}</Content>
    </li>
  )
}
