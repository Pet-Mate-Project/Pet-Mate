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
import { AxiosPost } from '../reducers/getPostSlice'

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
    if (postsStatus === 'idle') {
      console.log("여기서 dispatch?ㅇㅇ");
      dispatch(AxiosPetInfo(URL + "/product/" + accountname))
      dispatch(AxiosPost(URL + "/post/" + accountname + "/userpost"))
    }
  }, [dispatch])

  return (
    <AllWrap>
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