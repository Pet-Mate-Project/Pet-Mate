import React from 'react'
import { NavBack, NavTxtSearch } from '../../components/navBack/NavBack'
import TabMenu from '../../components/tabMenu/TabMenu'
import { AllWrap } from '../../style/commonStyle'

function AccountSearch () {
  return (
    <AllWrap>
      <NavBack>
      </NavBack>
      <NavTxtSearch placeholder={"계정 검색"}></NavTxtSearch>
      <TabMenu />
    </AllWrap>
  )
}

export default AccountSearch