import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { DeleteType, AxiosDeletePost, SelectId } from '../../reducers/deletePostSlice'
import { AxiosReportPost } from '../../reducers/reportPostSlice'
import { selectCommentId, AxiosCommentList } from '../../reducers/getCommentSlice'
import { AxiosDetail } from '../../reducers/getPostDetailSlice'
import { AxiosPetInfo } from '../../reducers/getPetInfoSlice'
import { AxiosPost } from '../../reducers/getPostSlice'
import { AlertOver, AlertWrapper, DeleteTxt, DeleteAlertBtn } from './deleteStyle'

export function DeleteAlert({ mainTxt, rightBtnTxt, closeAlert, setModal }) {
  const navigator = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const postType = useSelector(DeleteType);
  const Id = useSelector(SelectId);
  const commentId = useSelector(selectCommentId);
  const accountname = JSON.parse(localStorage.getItem("accountname"));
  const curPath = location.pathname.slice(0, 14);
  const postId = location.pathname.slice(15,);

  // 로그아웃함수
  const removeInfo = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("accountname");
  }

  function handleDeleteBtn() {
    const URL = "https://mandarin.api.weniv.co.kr";
    // 내 댓글 삭제
    if (postType === 'comments' && rightBtnTxt === '삭제') {
      dispatch(AxiosDeletePost(URL + `/post/${postId}/comments/${commentId}`))
        .then(() => dispatch(AxiosCommentList(URL + `/post/${postId}/comments`)))
        .then(() => dispatch(AxiosDetail(URL + `/post/${postId}`)));
    }
    // 댓글 신고
    else if (postType === 'comments' && rightBtnTxt === '신고') {
      dispatch(AxiosReportPost(URL + `/post/${postId}/comments/${commentId}/report`));
      window.alert("해당 댓글이 신고되었습니다.");
    }
    // 게시글 신고
    else if (postType === 'post' && rightBtnTxt === '신고') {
      dispatch(AxiosReportPost(URL + `/post/${Id}/report`));
      window.alert("해당 게시글이 신고되었습니다.");
    }
    // 내 pet, sns게시글 삭제
    else {
      dispatch(AxiosDeletePost(URL + `/${postType}/${Id}`))
        .then(() => postType === 'product' && dispatch(AxiosPetInfo(URL + `/product/${accountname}`)))
        .then(() => postType === 'post' && dispatch((AxiosPost(URL + `/post/${accountname}/userpost`))));

      if (curPath === '/snspostdetail') {
        navigator('/profilepage');
      }
    }
    setModal(false);
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