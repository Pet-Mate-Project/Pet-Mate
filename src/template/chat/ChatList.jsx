import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async';
import TabMenu from '../../components/tabMenu/TabMenu'
import { NavBack } from '../../components/navBack/NavBack'
import { UserChatList } from '../../components/user/User'
import { AllWrap, ScrollMain, Heading } from '../../style/commonStyle'

export default function ChatList() {
  return (
    <AllWrap>
      <Helmet>
        <title>채팅 - 산책가까?</title>
        <meta name='description' content='산책가까 채팅방입니다. 유저들과 소통해보세요 '/>
      </Helmet>
      <Heading>채팅방 페이지</Heading>
      <NavBack />
      <ScrollMain>
        <Link to='/chatroom'>
          <UserChatList
            visible={'on'}
            userName={'코랑이'}
            chatPreview={'사진'}
            chatDate={'2022.07.05'} />
        </Link>
        <UserChatList
          visible={'on'}
          userName={'민주아랑'}
          chatPreview={'저희 다람쥐랑 친구시켜주고 싶네요!'}
          chatDate={'2022.06.18'} />
        <UserChatList
          userName={'세영S2산이'}
          chatPreview={'10시에 만나요!'}
          chatDate={'2022.05.25'} />
      </ScrollMain>
      <TabMenu />
    </AllWrap>
  )
}
