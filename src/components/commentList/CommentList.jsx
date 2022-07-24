import React from 'react'
import { ProfileIconS } from '../profileIcon/ProfileIcon'
import { CommentWrpper,Name, WritingTime ,Content } from './commentListStlye';
import UserImg from '../../assets/basic-profile.svg'

export default function CommentList() {
  return (
    <div style={{margin:"0 16px"}}>
      <CommentWrpper >
        <ProfileIconS img ={UserImg}/>
        <Name>방울방울</Name>
        <WritingTime>· 5분 전</WritingTime>
      </CommentWrpper>
      <Content>아랑아 안녕~</Content>
    </div>
  )
}
