import React from 'react'
import { AllWrap } from '../../style/commonStyle'
import TabMenu from '../../components/tabMenu/TabMenu'
import { NavBack } from '../../components/navBack/NavBack'
import { UserChatList } from '../../components/user/User'

export default function ChatList() {
  return (
    <AllWrap>
      <NavBack />
      <UserChatList
        visible={'on'}
        userName={'코랑이'}
        chatPreview={'사진'}
        chatDate={'2022.07.05'}
      ></UserChatList>
      <UserChatList
        visible={'on'}
        userName={'민주아랑'}
        chatPreview={'저희 다람쥐랑 친구시켜주고 싶네요!'}
        chatDate={'2022.06.18'}
      ></UserChatList>
      <UserChatList
        userName={'세영S2산이'}
        chatPreview={'10시에 만나요!'}
        chatDate={'2022.05.25'}
      ></UserChatList>
      <TabMenu />
    </AllWrap>
  )
}
