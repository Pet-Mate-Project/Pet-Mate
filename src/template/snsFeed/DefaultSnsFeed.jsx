import React from 'react'
import { FollowCompo } from '../../components/followCompo/FollowCompo'

export default function DefaultSnsFeed() {
  return (
    <main>
      <FollowCompo textBtn={'검색하기'} textDefault={"유저를 검색해 팔로우 해보세요!"} url={"/search"}/>
    </main>
  )
}
