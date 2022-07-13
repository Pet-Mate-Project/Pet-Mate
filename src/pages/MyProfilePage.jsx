import React from 'react'
import { NavBack } from '../components/navBack/NavBack'
import { AllWrap } from '../style/commonStyle'
import MyProfile from '../template/profile/MyProfile'
import TabMenu from '../components/tabMenu/TabMenu'


function MyProfilePage() {
  return (
    <AllWrap>
      <NavBack />
      <MyProfile>
      </MyProfile>
      {/* 작성된 포스팅이 있으면 친구구해요 + 게시글리스트 템플릿 추가 */}
      <TabMenu />
    </AllWrap>
  )
}

export default MyProfilePage