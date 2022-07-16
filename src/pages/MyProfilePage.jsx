import React from 'react'
import { NavBack } from '../components/navBack/NavBack'
import { AllWrap } from '../style/commonStyle'
import MyProfile from '../template/profile/MyProfile'
import TabMenu from '../components/tabMenu/TabMenu'
import { PetPost } from '../template/profilePost/PetPost'
import { selectAllPosts } from '../reducers/getPetInfoSlice'
import { useSelector } from 'react-redux';

function MyProfilePage() {

  const postLength = useSelector(selectAllPosts).product.length;

  console.log('postLength', postLength)

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