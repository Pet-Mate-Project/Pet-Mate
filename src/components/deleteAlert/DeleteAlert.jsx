import React from 'react';
import { Link } from 'react-router-dom'
import { AlertOver, AlertWrapper, DeleteTxt, DeleteAlertBtn, BtnTxt, RedTxt } from './deleteStyle'

export function DeleteAlert({ mainTxt, rightBtnTxt, closeAlert }) {
  return (
    <AlertOver>
      <AlertWrapper>
        <DeleteTxt>{mainTxt}</DeleteTxt>
        <DeleteAlertBtn>
          <BtnTxt onClick={closeAlert}>취소</BtnTxt>
        </DeleteAlertBtn>

        {/* 오른쪽 버튼이 로그아웃이면 로그인페이지로 이동, 아닐 경우(삭제일때)는 추후 구현 */}
        {
          rightBtnTxt === '로그아웃' ? 
            <Link to='/login'>
              <DeleteAlertBtn>
                <RedTxt>{rightBtnTxt}</RedTxt>
              </DeleteAlertBtn>
            </Link>
            :
            <DeleteAlertBtn>
              <RedTxt>{rightBtnTxt}</RedTxt>
            </DeleteAlertBtn>
        }

      </AlertWrapper>
    </AlertOver>
  )
}