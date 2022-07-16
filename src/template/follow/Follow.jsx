import React from 'react'
import { NavBack } from '../../components/navBack/NavBack'
import { UserFollow } from '../../components/user/User'
import { FollowMain } from './followStyle'
import TabMenu from '../../components/tabMenu/TabMenu'
import { AllWrap, ScrollMain } from '../../style/commonStyle'

function Follow() {
  return (
    <AllWrap>
      <NavBack
        text={"Followers"} />
      <FollowMain>
        <UserFollow userName={'코랑이'}
          userId={'coding_arang'} />
        <UserFollow
          userName={'민주아랑'}
          userId={'minju_arang'} />
        <UserFollow
          userName={'세영S2산이'}
          userId={'seyoung_san2'} />
        <UserFollow
          userName={'노브레끼성훈'}
          userId={'no_brake_hun'} />
        <UserFollow
          userName={'히징'}
          userId={'heejin_2'} />
        <UserFollow
          userName={'야옹'}
          userId={'cute_cat'} />
      </FollowMain>
      <TabMenu />

    </AllWrap>
  )
}

export default Follow