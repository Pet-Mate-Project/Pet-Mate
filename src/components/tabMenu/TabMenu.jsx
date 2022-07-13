import React from 'react'
import { TabMenuStyle, IconNameStyle } from './tabMenuStyle'
import homeIcon from '../../assets/icon-home.svg'
import snsIcon from '../../assets/icon-sns.svg'
import messageIcon from '../../assets/icon-message.svg'
import userIcon from '../../assets/icon-user.svg'
import homeIconFill from '../../assets/icon-home-fill.svg'
import snsIconFill from '../../assets/icon-sns-fill.svg'
import messageIconFill from '../../assets/icon-message-fill.svg'
import userIconFill from '../../assets/icon-user-fill.svg'
import { Link } from 'react-router-dom'

export function TabMenu() {
  return (
    <>
      <TabMenuStyle>
        <Link to="/homepage">
          <IconNameStyle
            icon={homeIcon}
            hoverIcon={homeIconFill}>홈</IconNameStyle>
        </Link>
        <Link to="/feedpage" >
          <IconNameStyle
            icon={snsIcon}
            hoverIcon={snsIconFill}>피드</IconNameStyle>
        </Link>
        <Link to='#'>
          <IconNameStyle
            icon={messageIcon}
            hoverIcon={messageIconFill}>채팅</IconNameStyle>
        </Link>
        <Link to="/profilepage" >
          <IconNameStyle
            icon={userIcon}
            hoverIcon={userIconFill}>프로필</IconNameStyle>
        </Link>
      </TabMenuStyle>

    </>
  )
}

export default TabMenu