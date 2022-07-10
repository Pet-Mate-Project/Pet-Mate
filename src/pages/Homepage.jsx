import React from 'react'
import {NavSearch} from '../components/navBack/NavBack'
import {AllWrap} from '../style/commonStyle'
import FollowCompo from '../components/followCompo/FollowCompo'
import {AddBtn} from '../components/iconButton/IconButton'
import TabMenu from '../components/tabMenu/TabMenu'

export default function Homepage() {
  const textBtn ="친구 구하기"
  const textDefault = "함께 놀 친구들을 찾아보세요! :)"
  return (
    <AllWrap>
      <header>
        <NavSearch text={"친구구해요"} />
      </header>
      <main>
        <FollowCompo textBtn={textBtn} textDefault={textDefault}/>
        <AddBtn/>
        <TabMenu/>
      </main>
    </AllWrap>
  )
}
