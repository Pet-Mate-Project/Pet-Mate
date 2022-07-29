import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectAllSnsPosts } from '../reducers/getPostSlice';
import { AxiosPost } from '../reducers/getPostSlice'

import { AllWrap, ScrollMain } from '../style/commonStyle'
import { NavBack } from '../components/navBack/NavBack'
import TabMenu from '../components/tabMenu/TabMenu'
import MyProfile from '../template/profile/MyProfile'
import { PetPost } from '../template/profilePost/PetPost'
import { selectAllPosts, AxiosPetInfo, getPostStatus } from '../reducers/getPetInfoSlice'
import MyProfileSnsPost from '../template/profilePost/MyProfileSnsPost'

function MyProfilePage() {
  const dispatch = useDispatch();
  //펫등록 게시글 수 
  const postLength = useSelector(selectAllPosts).product?.length;
  //sns게시글 수
  const snsPostLength = useSelector(selectAllSnsPosts).post?.length;

  const URL = "https://mandarin.api.weniv.co.kr";
  const accountname = JSON.parse(localStorage.getItem("accountname"))
  const ReqPath = `/product/${accountname}/?limit=30`; //내게시글

  useEffect(() => {
    dispatch(AxiosPetInfo(URL + ReqPath))
    dispatch(AxiosPost(URL + "/post/" + accountname + "/userpost/?limit=30"))
  }, [dispatch])

  return (
    <AllWrap>
      <NavBack />
      <ScrollMain>
        <MyProfile />
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

export default MyProfilePage