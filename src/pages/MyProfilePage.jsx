import React, { useEffect } from 'react'
import { NavBack } from '../components/navBack/NavBack'
import { AllWrap, ScrollMain } from '../style/commonStyle'
import MyProfile from '../template/profile/MyProfile'
import TabMenu from '../components/tabMenu/TabMenu'
import { PetPost } from '../template/profilePost/PetPost'
import { useSelector, useDispatch } from 'react-redux';
import { selectAllPosts, AxiosPetInfo, getPostStatus } from '../reducers/getPetInfoSlice'
import MyProfileSnsPost from '../template/profilePost/MyProfileSnsPost'
import { selectAllSnsPosts } from '../reducers/getPostSlice';

function MyProfilePage() {
  const dispatch = useDispatch();
  const postsStatus = useSelector(getPostStatus);
  //펫등록 게시글 수 
  const postLength = useSelector(selectAllPosts).product?.length;
  //sns게시글 수
  const snsPostLength = useSelector(selectAllSnsPosts).post?.length;

  const URL = "https://mandarin.api.weniv.co.kr";
  const accountname = JSON.parse(localStorage.getItem("accountname"))
  const loginReqPath = `/product/${accountname}/?limit=30`; //내게시글

  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(AxiosPetInfo(URL + loginReqPath))
    }
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