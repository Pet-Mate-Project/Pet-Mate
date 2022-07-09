import React from 'react';
import { NavWrapper, Img, NavBtn, NavTxt, FloatR } from './navBackStyle'
import arrow from '../../assets/icon-arrow-left.svg'
import vertical from '../../assets/icon-more-vertical.svg'
import searchbar from '../../assets/icon-search.svg'
import { SearchInput } from '../input/Input'
import { SaveBtn } from '../button/Button';

// props가 있는 경우 chat-nav, 없는경우 top-basic-nav  
// 사용예 (텍스트가 있는경우): <NavBack text={"코랑이"} /> 
export function NavBack(props) {
  return (
    <NavWrapper>
      <NavBtn>
        <Img src={arrow} alt="" />
      </NavBtn>
      <NavTxt>{props.text}</NavTxt>
      <NavBtn >
        <Img src={vertical} alt="" />
      </NavBtn>
    </NavWrapper>
  )
}

//top-search-nav
export function NavTxtSearch() {
  return (
    <NavWrapper>
      <NavBtn>
        <Img src={arrow} alt="" />
      </NavBtn>
      <SearchInput />
    </NavWrapper>
  )
}

//top-main-nav
//사용예 ) itle이 피드라면 -> <NavSearch text={"피드"}/>
export function NavSearch(props) {
  return (
    <NavWrapper>
      <NavTxt>{props.text}</NavTxt>
      <NavBtn>
        <Img src={searchbar} alt="" />
      </NavBtn>
    </NavWrapper>
  )
}

//top-upload-nav
export function SaveNav({ profileSave, disabled }) {
  return (
    <NavWrapper>
      <NavBtn>
        <Img src={arrow} alt="" />
      </NavBtn>
      <SaveBtn profileSave={profileSave} disabled={disabled} right />
    </NavWrapper>
  )
}