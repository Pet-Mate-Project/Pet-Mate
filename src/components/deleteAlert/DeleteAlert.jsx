import React from 'react';
import { Link } from 'react-router-dom'
import { AlertOver, AlertWrapper, DeleteTxt, DeleteAlertBtn, BtnTxt, RedTxt } from './deleteStyle'
import { useSelector, useDispatch } from 'react-redux'
import { DeleteType, AxiosDeletePost, SelectId ,selectDeleteMsg } from '../../reducers/deletePostSlice'
import { AxiosPetInfo } from '../../reducers/getPetInfoSlice';
import {AxiosPost} from '../../reducers/getPostSlice'

export function DeleteAlert({ mainTxt, rightBtnTxt, closeAlert,setModal }) {
  const dispatch = useDispatch();
  const postType = useSelector(DeleteType);
  const Id = useSelector(SelectId);
  const reqMsg = useSelector(selectDeleteMsg);
  console.log(reqMsg);
  const accountname = JSON.parse(localStorage.getItem("accountname"))
  
  // 로그아웃함수
  const removeInfo = () =>{
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("accountname");
  }

  function handleDeleteBtn() {
    const URL = "https://mandarin.api.weniv.co.kr";
    const ReqPath = `/${postType}/${Id}`;  //타입 : sns인지 pet인지
    dispatch(AxiosDeletePost(URL+ReqPath))
      .then(  () => postType==='product'&&dispatch(AxiosPetInfo(URL + `/product/${accountname}`)))
      .then( ()=> postType==='post'&&dispatch((AxiosPost(URL + `/post/${accountname}/userpost`))));
    setModal(false);
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
            //삭제 onCick 1.pet피드 2.sns피드 삭제
            <DeleteAlertBtn onClick={handleDeleteBtn}>
              <RedTxt>{rightBtnTxt}</RedTxt>
            </DeleteAlertBtn>
        }
      </AlertWrapper>
    </AlertOver>
  )
}