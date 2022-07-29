import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { NavWrapper, Img, NavBtn, NavTxt } from './navBackStyle'
import { SaveBtn, PostSaveBtn, UploadBtn } from '../button/Button';
import { SearchInput } from '../input/Input'
import Modal from '../postModal/PostModal';
import arrow from '../../assets/icon-arrow-left.svg'
import vertical from '../../assets/icon-more-vertical.svg'
import searchbar from '../../assets/icon-search.svg'

// props가 있는 경우 chat-nav, 없는경우 top-basic-nav  
// 사용예 (텍스트가 있는경우): <NavBack text={"코랑이"} /> 
export function NavBack(props) {
  const navigate = useNavigate();
  const linkName = useLocation().pathname.slice(0,);

  const Path = linkName.slice(1,14)
  const goBack = () => {
    if(Path==='snspostdetail'){
      navigate('/feedpage');
    }
    else{
      navigate(-1);
    }
  }
  
  let list = [];
  let alertTxt = [];

  if (linkName === '/chatroom') {
    list = { '채팅방 나가기': '/chatpage', '신고하기': '' };
  } else {
    list = { '설정 및 개인정보': '/profilemodify', '로그아웃': '' };
    alertTxt = ['로그아웃하시겠어요?', '로그아웃'];
  }

  const [modal, setModal] = useState(false)
  const toggleModal = () => {
    setModal(modal => !modal)
    console.log(modal);
  }
  const closeModal = () => {
    setModal(false)
  }

  return (
    <header>
      <NavWrapper>
        <NavBtn onClick={goBack}>
          <Img src={arrow} alt="뒤로가기 버튼" />
        </NavBtn>
        <NavTxt>{props.text}</NavTxt>
        <NavBtn >
          <Img src={vertical} alt="설정 및 로그아웃 버튼" onClick={toggleModal} />
        </NavBtn>
      </NavWrapper>
      {modal === true && <Modal list={list} closeModal={closeModal} alertTxt={alertTxt} />}
    </header>
  )
}

//top-search-nav
export function NavTxtSearch({ placeholder, onChange }) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }
  return (
    <NavWrapper>
      <NavBtn onClick={goBack}>
        <Img src={arrow} alt="" />
      </NavBtn>
      <SearchInput placeholder={placeholder} onChange={onChange} />
    </NavWrapper>
  )
}

//top-main-nav
//사용예 ) itle이 피드라면 -> <NavSearch text={"피드"}/>
export function NavSearch(props) {
  return (
    <NavWrapper>
      <NavTxt>{props.text}</NavTxt>
      <Link to={props.url}>
        <NavBtn>
          <Img src={searchbar} alt="유저 검색" />
        </NavBtn>
      </Link>
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
      <SaveBtn profileSave={profileSave} />
    </NavWrapper>
  )
}

export function PostSaveNav({ onClick, disabled, link }) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }
  return (
    <NavWrapper>
      <NavBtn onClick={goBack}>
        <Img src={arrow} alt="" />
      </NavBtn>
      <PostSaveBtn onClick={onClick} disabled={disabled} link={link} />
    </NavWrapper>
  )
}

export function SnsUploadNav({ disabled, onClick }) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }
  return (
    <NavWrapper>
      <NavBtn onClick={goBack}>
        <Img src={arrow} alt="" />
      </NavBtn>
      <UploadBtn onClick={onClick} disabled={disabled} />
    </NavWrapper>
  )
}