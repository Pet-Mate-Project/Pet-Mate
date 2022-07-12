import React from "react"
import { Img, NavBtn, NavWrapper } from "../navBack/navBackStyle"
import arrow from '../../assets/icon-arrow-left.svg'
import { SearchStyle } from "../input/inputStyle"

function AccountSearchBar () {
  return (
    <NavWrapper>
      <NavBtn>
        <Img src={arrow} alt="" />
      </NavBtn>
      <SearchStyle placeholder="계정 검색"/>
    </NavWrapper>
  )
}

export default AccountSearchBar