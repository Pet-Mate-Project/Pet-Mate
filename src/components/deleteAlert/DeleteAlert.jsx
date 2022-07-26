import React from 'react';
import { Link } from 'react-router-dom'
import { AlertOver, AlertWrapper, DeleteTxt, DeleteAlertBtn, BtnTxt, RedTxt } from './deleteStyle'
import { useSelector, useDispatch } from 'react-redux'
import { DeleteType, AxiosDeletePost, SelectId ,selectDeleteMsg } from '../../reducers/deletePostSlice'
import { AxiosPetInfo } from '../../reducers/getPetInfoSlice';
import {AxiosPost} from '../../reducers/getPostSlice'
import { useLocation } from 'react-router-dom';
import { selectCommentId,AxiosCommentList } from '../../reducers/getCommentSlice'

export function DeleteAlert({ mainTxt, rightBtnTxt, closeAlert,setModal }) {
  const dispatch = useDispatch();
  const postType = useSelector(DeleteType);
  const Id = useSelector(SelectId);
  // const reqMsg = useSelector(selectDeleteMsg);
  const accountname = JSON.parse(localStorage.getItem("accountname"))
  const location = useLocation();
  const curPath = location.pathname.slice(0,15); // snspostdetail기준
  
  // 로그아웃함수
  const removeInfo = () =>{
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("accountname");
  }

  const commentId = useSelector(selectCommentId);
  const postId = location.pathname.slice(15,);

  function handleDeleteBtn() {
    const URL = "https://mandarin.api.weniv.co.kr";
    // 댓글삭제
    if(curPath==='/snspostdetail/'){
      console.log(curPath,"에서 진행중");
      dispatch(AxiosDeletePost(URL+`/post/${postId}/comments/${commentId}`))
        .then(()=> dispatch(AxiosCommentList(URL+`/post/${postId}/comments`)))
      setModal(false);
    }
    //내 pet,sns게시글 삭제
    else{
      const ReqPath = `/${postType}/${Id}`;  
      dispatch(AxiosDeletePost(URL+ReqPath))
        .then(  () => postType==='product'&&dispatch(AxiosPetInfo(URL + `/product/${accountname}`)))
        .then( ()=> postType==='post'&&dispatch((AxiosPost(URL + `/post/${accountname}/userpost`))));
      setModal(false);
    }
  } 
  
  return (
    <AlertOver>
      <AlertWrapper>
        <DeleteTxt>{mainTxt}</DeleteTxt>
        <DeleteAlertBtn>
          <BtnTxt onClick={closeAlert}>취소</BtnTxt>
        </DeleteAlertBtn>
        {
          rightBtnTxt === '로그아웃' ? 
            <Link to='/login'>
              <DeleteAlertBtn onClick={removeInfo}>
                <RedTxt>{rightBtnTxt}</RedTxt>
              </DeleteAlertBtn>
            </Link>
            :
            //삭제 onCick 1.pet피드 2.sns피드 삭제 3.댓글삭제
            <DeleteAlertBtn onClick={handleDeleteBtn}>
              <RedTxt>{rightBtnTxt}</RedTxt>
            </DeleteAlertBtn>
        }
      </AlertWrapper>
    </AlertOver>
  )
}