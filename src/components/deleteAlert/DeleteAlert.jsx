import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { DeleteType, AxiosDeletePost, SelectId } from '../../reducers/deletePostSlice'
import { ReportType, AxiosReportPost, ReportId } from '../../reducers/reportPostSlice'
import { selectCommentId, AxiosCommentList } from '../../reducers/getCommentSlice'
import { AxiosDetail } from '../../reducers/getPostDetailSlice'
import { AxiosPetInfo } from '../../reducers/getPetInfoSlice'
import { AxiosPost } from '../../reducers/getPostSlice'
import { AlertOver, AlertWrapper, DeleteTxt, DeleteAlertBtn } from './deleteStyle'

export function DeleteAlert({ mainTxt, rightBtnTxt, closeAlert, setModal }) {
  const dispatch = useDispatch();
  const postType = useSelector(DeleteType);
  const Id = useSelector(SelectId);
  const accountname = JSON.parse(localStorage.getItem("accountname"));
  const location = useLocation();
  const curPath = location.pathname.slice(0, 15);

  // 로그아웃함수
  const removeInfo = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("accountname");
  }

  const commentId = useSelector(selectCommentId);
  const postId = location.pathname.slice(15,);

  function handleDeleteBtn() {
    const URL = "https://mandarin.api.weniv.co.kr";
    // 댓글삭제
    if (curPath === '/snspostdetail/' && rightBtnTxt === '삭제') {
      dispatch(AxiosDeletePost(URL + `/post/${postId}/comments/${commentId}`))
        .then(() => dispatch(AxiosCommentList(URL + `/post/${postId}/comments`)))
        .then(() => dispatch(AxiosDetail(URL + `/post/${postId}`)));
      setModal(false);
    }
    //댓글신고
    else if (curPath === '/snspostdetail/' && rightBtnTxt === '신고') {
      dispatch(AxiosReportPost(URL + `/post/${postId}/comments/${commentId}/report`))
      setModal(false);
      window.alert("해당 댓글이 신고되었습니다.");
    }
    //내 pet,sns게시글 삭제
    else {
      const ReqPath = `/${postType}/${Id}`;
      dispatch(AxiosDeletePost(URL + ReqPath))
        .then(() => postType === 'product' && dispatch(AxiosPetInfo(URL + `/product/${accountname}`)))
        .then(() => postType === 'post' && dispatch((AxiosPost(URL + `/post/${accountname}/userpost`))));
      setModal(false);
    }
  }

  return (
    <AlertOver>
      <AlertWrapper>
        <DeleteTxt>{mainTxt}</DeleteTxt>
        <DeleteAlertBtn onClick={closeAlert}>취소</DeleteAlertBtn>
        {
          rightBtnTxt === '로그아웃' ?
            <Link to='/login'>
              <DeleteAlertBtn onClick={removeInfo} right>{rightBtnTxt}</DeleteAlertBtn>
            </Link>
            :
            <DeleteAlertBtn onClick={handleDeleteBtn} right>{rightBtnTxt}</DeleteAlertBtn>
        }
      </AlertWrapper>
    </AlertOver>
  )
}