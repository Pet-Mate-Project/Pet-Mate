import React from 'react'
import { FollowCompo } from '../../components/followCompo/FollowCompo'

export default function DefaultSnsFeed() {
  const textBtn = "검색하기"
  const textDefault = "유저를 검색해 팔로우 해보세요!"
  const url = "/search"
  return (
    <main>
      <FollowCompo textBtn={textBtn} textDefault={textDefault} url={url}/>
    </main>
  )
}
