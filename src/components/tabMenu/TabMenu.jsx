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
          hovericon={homeIconFill}>홈</NavLinkStyle>
        <NavLinkStyle to="/feedpage"
          icon={snsIcon}
          hovericon={snsIconFill}>SNS</NavLinkStyle>
        <NavLinkStyle to="/chatpage"
          icon={messageIcon}
          hovericon={messageIconFill}>채팅</NavLinkStyle>
        <NavLinkStyle to="/profilepage"
          icon={userIcon}
          hovericon={userIconFill}>프로필</NavLinkStyle>
      </TabMenuStyle>

    </>
  )
}

export default TabMenu