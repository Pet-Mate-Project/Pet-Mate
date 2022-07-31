import React from 'react'
import { Helmet } from 'react-helmet-async'
import { AllWrap } from '../style/commonStyle'
import { NotFoundCompo } from '../components/followCompo/FollowCompo'

export default function NotFound() {
  return (
    <AllWrap>
      <Helmet>
        <title>페이지를 찾을 수 없음</title>
      </Helmet>
      <NotFoundCompo />
    </AllWrap>
  )
}
