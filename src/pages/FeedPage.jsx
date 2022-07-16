import React from 'react'
import { NavSearch } from '../components/navBack/NavBack'
import { AllWrap } from '../style/commonStyle'
import { FollowCompo } from '../components/followCompo/FollowCompo'
import { AddBtn } from '../components/iconButton/IconButton'
import TabMenu from '../components/tabMenu/TabMenu'

export default function FeedPage() {
  const textBtn = "검색하기"
  const textDefault = "유저를 검색해 팔로우 해보세요!"
  const url = "/search"

  return (
    <AllWrap>
      <header>
        <NavSearch text={"Pet Story"} url={url}/>
      </header>
      <main>
        <FollowCompo textBtn={textBtn} textDefault={textDefault} url={url}/>
        <AddBtn />
        <TabMenu />
      </main>
    </AllWrap>
  )
}
