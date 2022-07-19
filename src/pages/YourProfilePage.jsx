import React, { useEffect } from 'react'
import { NavBack } from '../components/navBack/NavBack'
import { AllWrap, ScrollMain } from '../style/commonStyle'
import YourProfile from '../template/profile/YourProfile'
import TabMenu from '../components/tabMenu/TabMenu'
import { PetPost } from '../template/profilePost/PetPost'
import { useSelector, useDispatch } from 'react-redux';
import { selectAllPosts, AxiosPetInfo, getPostStatus } from '../reducers/getPetInfoSlice'
import MyProfileSnsPost from '../template/profilePost/MyProfileSnsPost'
import { selectAllSnsPosts } from '../reducers/getPostSlice';
import { useLocation } from 'react-router-dom';

function YourProfilePage() {
  const location = useLocation();
  const userId = location.state?.userId;
  const dispatch = useDispatch();
  // const postsStatus = useSelector(getPostStatus);
  // //펫등록 게시글 수 
  // const postLength = useSelector(selectAllPosts).product?.length;
  // //sns게시글 수
  // const snsPostLength = useSelector(selectAllSnsPosts).post?.length;

  const URL = "https://mandarin.api.weniv.co.kr";
  // const accountname = JSON.parse(localStorage.getItem("accountname"))
  const loginReqPath = `/product/${userId}/?limit=30`; //내게시글

  // useEffect(() => {
  //   if (postsStatus === 'idle') {
  //     dispatch(AxiosPetInfo(URL + loginReqPath))
  //   }
  // }, [dispatch])

  return (
    <AllWrap>
      <NavBack />
      <ScrollMain>
        <YourProfile userId={userId} />
        {/* 산책피드가 없는 경우 빈화면 */}
      </ScrollMain>
      <TabMenu />
    </AllWrap>
  )

}

export default YourProfilePage