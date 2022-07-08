import React from 'react';
import {AlertWrapper,DeleteTxt,DeleteAlertBtn,BtnTxt,RedTxt} from './deleteStyle'

export function DeleteAlert() {
  return (
    <>
      <AlertWrapper>
        <DeleteTxt>상품을 삭제할까요?</DeleteTxt>
        <DeleteAlertBtn>
          <BtnTxt>취소</BtnTxt>
        </DeleteAlertBtn>
        <DeleteAlertBtn>
          <RedTxt>삭제</RedTxt>
        </DeleteAlertBtn>
      </AlertWrapper>
    </>
  )
}