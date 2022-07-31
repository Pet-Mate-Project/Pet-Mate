import React from 'react'
import { FollowCompo } from '../../components/followCompo/FollowCompo'

export default function DefaultSnsFeed() {
  return (
    <main>
      <FollowCompo TEXT_DEFAULT={'검색하기'} TEXT_BTN={"유저를 검색해 팔로우 해보세요!"} URL={"/search"}/>
    </main>
  )
}
