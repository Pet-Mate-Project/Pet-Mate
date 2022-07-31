import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllPosts, AxiosPetInfo } from '../reducers/getPetInfoSlice'
import { selectAllSnsPosts, AxiosPost } from '../reducers/getPostSlice'
import { AllWrap, ScrollMain, Heading } from '../style/commonStyle'
import { NavBack } from '../components/navBack/NavBack'
import TabMenu from '../components/tabMenu/TabMenu'
import YourProfile from '../template/profile/YourProfile'
import { PetPost } from '../template/profilePost/PetPost'
import MyProfileSnsPost from '../template/profilePost/MyProfileSnsPost'

export default function YourProfilePage() {
  const location = useLocation();
  const dispatch = useDispatch();
  const accountname = location.state?.userId;
  const URL = 'https://mandarin.api.weniv.co.kr';
  const postLength = useSelector(selectAllPosts).product?.length; 
  const snsPostLength = useSelector(selectAllSnsPosts).post?.length;  

  useEffect(() => {
    dispatch(AxiosPetInfo(URL + '/product/' + accountname));
    dispatch(AxiosPost(URL + '/post/' + accountname + '/userpost'));
  }, [dispatch])

  return (
    <AllWrap>
      <Helmet>
        <title>유저 프로필 - 산책가까?</title>
      </Helmet>
      <Heading>유저 프로필 페이지</Heading>
      <NavBack />
      <ScrollMain>
        <YourProfile userId={accountname} />
        {
          postLength === 0 ? ' ' : <PetPost />
        }
        {
          snsPostLength === 0 ? ' ' : <MyProfileSnsPost />
        }
      </ScrollMain>
      <TabMenu />
    </AllWrap>
  )
}