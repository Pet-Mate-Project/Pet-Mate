import React from 'react'
import HomePost  from '../post/HomePost'
import axios from 'axios'
import { createSelector } from '@reduxjs/toolkit'; 
import { selectAllPosts ,getPostsError ,getPostStatus ,AxiosPetInfo,petInfo} from '../../reducers/getPetInfoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


export default function WalkingFeed() {

  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostStatus);
  const error = useSelector( (state) => state.getPetInfo.error);

  const URL = "https://mandarin.api.weniv.co.kr";
  const userInfo = JSON.parse(localStorage.getItem("userinfo")).user
  const accountname = userInfo.accountname;
  const loginReqPath = `/product/${accountname}`;

  useEffect(()=>{
    if(postsStatus ==='idle'){
      dispatch(AxiosPetInfo(URL+loginReqPath))
    }
  },[dispatch])

  return (
    <main>
      <HomePost />
    </main>
  )
}
