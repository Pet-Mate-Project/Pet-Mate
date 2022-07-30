import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllPosts, AxiosPetInfo, getPostStatus } from '../reducers/getPetInfoSlice'
import { selectAllSnsPosts, AxiosPost } from '../reducers/getPostSlice';

import { AllWrap, ScrollMain, Heading } from '../style/commonStyle'
import { NavBack } from '../components/navBack/NavBack'
import TabMenu from '../components/tabMenu/TabMenu'
import YourProfile from '../template/profile/YourProfile'
import { PetPost } from '../template/profilePost/PetPost'
import MyProfileSnsPost from '../template/profilePost/MyProfileSnsPost'

function YourProfilePage() {
  const location = useLocation();
  const accountname = location.state?.userId;
  const URL = "https://mandarin.api.weniv.co.kr";
  const dispatch = useDispatch();
  const postsStatus = useSelector(getPostStatus);
  //펫등록 게시글 수 
  const postLength = useSelector(selectAllPosts).product?.length;
  //sns게시글 수
  const snsPostLength = useSelector(selectAllSnsPosts).post?.length;

  useEffect(() => {
    dispatch(AxiosPetInfo(URL + "/product/" + accountname))
    dispatch(AxiosPost(URL + "/post/" + accountname + "/userpost"))
  }, [dispatch])

  return (
    <AllWrap>
      <Heading> 유저 프로필 페이지</Heading>
      <NavBack />
      <ScrollMain>
        <YourProfile userId={accountname} />
        {/* 산책피드가 없는 경우 빈화면 */}
        {
          postLength === 0 ? " " : <PetPost />
        }
        {
          snsPostLength === 0 ? " " : <MyProfileSnsPost />
        }
      </ScrollMain>
      <TabMenu />
    </AllWrap>
  )

}

export default YourProfilePage