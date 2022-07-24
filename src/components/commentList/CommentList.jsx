import React from 'react'
import { ProfileIconS } from '../profileIcon/ProfileIcon'
import dot from '../../assets/icon-more-vertical.svg'
import { CommentWrpper, Name, WritingTime, Content, UserMore } from './commentListStlye';
import UserImg from '../../assets/basic-profile.svg'

export default function CommentList({ content,time,author,src }) {
  const URL = "https://mandarin.api.weniv.co.kr/";

  return (
    <li style={{margin:"20px 16px"}}>
      <CommentWrpper >
        <ProfileIconS img ={URL+src}/>
        <Name>{author}</Name>
        <WritingTime>· {time}</WritingTime>
        <button style={{marginLeft: "auto"}}>
          <UserMore src={dot} />
        </button>
      </CommentWrpper>
      <Content>{content}</Content>
    </li>
  )
}
