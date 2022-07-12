import React from 'react'
import { NavTxtSearch } from '../../components/navBack/NavBack'
import AccountSearchBar from '../../components/search/AccountSearchBar'
import TabMenu from '../../components/tabMenu/TabMenu'
import { AllWrap } from '../../style/commonStyle'

function AccountSearch () {
  return (
    <AllWrap>
      <AccountSearchBar />
      <TabMenu />
    </AllWrap>
  )
}

export default AccountSearch