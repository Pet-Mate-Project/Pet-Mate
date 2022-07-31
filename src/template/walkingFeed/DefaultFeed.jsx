import React from 'react'
import { FollowCompo } from '../../components/followCompo/FollowCompo'

export default function DefaultFeed() {
  const TEXT_BTN = '펫 등록하기'
  const TEXT_DEFAULT = '함께 놀 친구들을 찾아보세요! :)'
  const URL = '/post'
  return (
    <main>
      <FollowCompo URL={URL} TEXT_BTN={TEXT_BTN} TEXT_DEFAULT={TEXT_DEFAULT} />
    </main>
  )
}
