import React, { useState } from 'react';
import { NavWrapper, Img, NavBtn, NavTxt, FloatR } from './navBackStyle'
import arrow from '../../assets/icon-arrow-left.svg'
import vertical from '../../assets/icon-more-vertical.svg'
import searchbar from '../../assets/icon-search.svg'
import { SearchInput } from '../input/Input'
import { SaveBtn, PostSaveBtn } from '../button/Button';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Modal from '../postModal/PostModal';

// props가 있는 경우 chat-nav, 없는경우 top-basic-nav  
// 사용예 (텍스트가 있는경우): <NavBack text={"코랑이"} /> 
export function NavBack(props) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }
  const list = ['설정 및 개인정보', '로그아웃'];
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    modal === false ? setModal(true) : setModal(false)
  }
  const closeModal = () => {
    setModal(false)
  }
  return (
    <header>
      <NavWrapper>
        <NavBtn onClick={goBack}>
          <Img src={arrow} alt="" />
        </NavBtn>
        <NavTxt>{props.text}</NavTxt>
        <NavBtn >
          <Img src={vertical} alt="" onClick={toggleModal} />
        </NavBtn>
      </NavWrapper>
      {modal === true && <Modal list={list} closeModal={closeModal} />}
    </header>
  )
}

//top-search-nav
export function NavTxtSearch({ placeholder }) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }
  return (
    <NavWrapper>
      <NavBtn onClick={goBack}>
        <Img src={arrow} alt="" />
      </NavBtn>
      <SearchInput placeholder={placeholder} />
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
export function ProfileSaveNav({ profileSave }) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }
  return (
    <NavWrapper>
      <NavBtn onClick={goBack}>
        <Img src={arrow} alt="" />
      </NavBtn>
      <SaveBtn profileSave={profileSave} right />
    </NavWrapper>
  )
}

export function PostSaveNav({ onClick, disabled }) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }
  return (
    <NavWrapper>
      <NavBtn onClick={goBack}>
        <Img src={arrow} alt="" />
      </NavBtn>
      <PostSaveBtn onClick={onClick} disabled={disabled} />
    </NavWrapper>
  )
}