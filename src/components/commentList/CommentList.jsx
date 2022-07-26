import React from 'react'
import { ProfileIconS } from '../profileIcon/ProfileIcon'
import dot from '../../assets/icon-more-vertical.svg'
import { CommentWrpper, Name, WritingTime, Content, UserMore } from './commentListStlye';
import Modal from '../postModal/PostModal';
import moment from 'moment';
import "moment/locale/ko";
import { useSelector } from 'react-redux';
import { selectCommentAuthor,selectCommentId } from '../../reducers/getCommentSlice'


export default function CommentList({ content,time,author,src,onClick,setModal,modal }) {
  const commnetAuthor = useSelector(selectCommentAuthor); 
  const URL = "https://mandarin.api.weniv.co.kr/";
  const accountname = JSON.parse(localStorage.getItem("accountname"));
  //모달
  let list = [];
  let alertTxt = [];
  if(accountname===commnetAuthor){
    list = { '삭제': '' };
    alertTxt = ['삭제하시겠어요?', '삭제'];
  }
  else{
    list = { '신고하기': '' };
  }
  const closeModal = () => {
    setModal(false)
  }

  return (
    <li style={{margin:"20px 16px"}}>
      <CommentWrpper >
        <ProfileIconS img ={URL+src}/>
        <Name>{author}</Name>
        <WritingTime>· {moment(time).fromNow()}</WritingTime>
        <button style={{marginLeft: "auto"}}>
          <UserMore src={dot} onClick={onClick} />
          {
            (modal===true)&& <Modal list={list} alertTxt={alertTxt} closeModal={closeModal} setModal={setModal}  />
          }
        </button>
      </CommentWrpper>
      <Content>{content}</Content>
    </li>
  )
}
