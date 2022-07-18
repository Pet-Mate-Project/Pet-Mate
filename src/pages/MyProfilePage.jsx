import React,{useEffect} from 'react'
import { NavBack } from '../components/navBack/NavBack'
import { AllWrap } from '../style/commonStyle'
import MyProfile from '../template/profile/MyProfile'
import TabMenu from '../components/tabMenu/TabMenu'
import { PetPost } from '../template/profilePost/PetPost'
import { useSelector,useDispatch } from 'react-redux';
import { selectAllPosts,AxiosPetInfo,getPostStatus } from '../reducers/getPetInfoSlice'


function MyProfilePage() {
  const dispatch = useDispatch();
  const postsStatus = useSelector(getPostStatus);
  const postLength = useSelector(selectAllPosts).product?.length;
  const URL = "https://mandarin.api.weniv.co.kr";
  const accountname = JSON.parse(localStorage.getItem("accountname"))
  const loginReqPath = `/product/${accountname}/?limit=30`; //내게시글

  useEffect(()=>{
    if(postsStatus ==='idle'){
      dispatch(AxiosPetInfo(URL+loginReqPath))
    }
  },[dispatch])

  return (
    <AllWrap>
      <NavBack />
      <MyProfile />
      {/* 산책피드가 없는 경우 빈화면 */}
      {
        postLength === 0 ? " " : <PetPost />
      }
      {/* sns 포스트가 없는 경우 추가 */}
      <TabMenu />
    </AllWrap>
  )

}

export default MyProfilePage