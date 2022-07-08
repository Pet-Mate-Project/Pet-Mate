import React from 'react'
import { TabMenuStyle, IconNameStyle } from './tabMenuStyle'
import homeIcon from '../../../assets/icon-home.svg'
import snsIcon from '../../../assets/icon-sns.svg'
import messageIcon from '../../../assets/icon-message.svg'
import userIcon from '../../../assets/icon-user.svg'
import homeIconFill from '../../../assets/icon-home-fill.svg'
import snsIconFill from '../../../assets/icon-sns-fill.svg'
import messageIconFill from '../../../assets/icon-message-fill.svg'
import userIconFill from '../../../assets/icon-user-fill.svg'

function TabMenu() {
  <>
    <TabMenuStyle>
      <IconNameStyle
        icon={homeIcon}
        hoverIcon={homeIconFill}>홈</IconNameStyle>
      <IconNameStyle
        icon={snsIcon}
        hoverIcon={snsIconFill}>피드</IconNameStyle>
      <IconNameStyle
        icon={messageIcon}
        hoverIcon={messageIconFill}>채팅</IconNameStyle>
      <IconNameStyle
        icon={userIcon}
        hoverIcon={userIconFill}>프로필</IconNameStyle>
    </TabMenuStyle>
  </>
}

export default TabMenu