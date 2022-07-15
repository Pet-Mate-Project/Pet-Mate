import React from 'react'
import { TabMenuStyle, NavLinkStyle } from './tabMenuStyle'
import homeIcon from '../../assets/icon-home.svg'
import snsIcon from '../../assets/icon-sns.svg'
import messageIcon from '../../assets/icon-message.svg'
import userIcon from '../../assets/icon-user.svg'
import homeIconFill from '../../assets/icon-home-fill.svg'
import snsIconFill from '../../assets/icon-sns-fill.svg'
import messageIconFill from '../../assets/icon-message-fill.svg'
import userIconFill from '../../assets/icon-user-fill.svg'

export function TabMenu() {
  return (
    <>
      <TabMenuStyle>
        <NavLinkStyle to="/homepage"
          icon={homeIcon}
          hoverIcon={homeIconFill}>홈</NavLinkStyle>
        <NavLinkStyle to="/feedpage"
          icon={snsIcon}
          hoverIcon={snsIconFill}>피드</NavLinkStyle>
        <NavLinkStyle to="/chatpage"
          icon={messageIcon}
          hoverIcon={messageIconFill}>채팅</NavLinkStyle>
        <NavLinkStyle to="/profilepage"
          icon={userIcon}
          hoverIcon={userIconFill}>프로필</NavLinkStyle>
      </TabMenuStyle>

    </>
  )
}

export default TabMenu