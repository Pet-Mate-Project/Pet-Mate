import React from 'react'
import { NavSearch } from '../components/navBack/NavBack'
import { AllWrap } from '../style/commonStyle'
import { FollowCompo } from '../components/followCompo/FollowCompo'
import { AddBtn } from '../components/iconButton/IconButton'
import TabMenu from '../components/tabMenu/TabMenu'
import { Link } from 'react-router-dom'

export default function HomePage() {
  const textBtn = "펫 등록하기"
  const textDefault = "함께 놀 친구들을 찾아보세요! :)"
  const url = '/post'
  return (
    <AllWrap>
      <header>
        <NavSearch text={"산책 피드"} />
      </header>
      <main>
        <FollowCompo url={url} textBtn={textBtn} textDefault={textDefault} />
        <Link to={url}>
          <AddBtn />
        </Link>
        <TabMenu />
      </main>
    </AllWrap>
  )
}
