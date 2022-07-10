import React from 'react'
import {NavSearch} from '../components/navBack/NavBack'
import {AllWrap} from '../style/commonStyle'
import FollowCompo from '../components/followCompo/FollowCompo'
import {AddBtn} from '../components/iconButton/IconButton'
import TabMenu from '../components/tabMenu/TabMenu'

export default function Homepage() {
  const textBtn ="검색하기"
  const textDefault = "유저를 검색해 팔로우 해보세요!"
  return (
    <AllWrap>
      <header>
        <NavSearch text={"Pet Story"} />
      </header>
      <main>
        <FollowCompo textBtn={textBtn} textDefault={textDefault}/>
        <AddBtn/>
        <TabMenu/>
      </main>
    </AllWrap>
  )
}
