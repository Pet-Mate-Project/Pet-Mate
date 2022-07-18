import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { DeleteAlert } from '../deleteAlert/DeleteAlert'
import { ModalList, ModalWrapper, TopSytle, ModalOver } from './postModalStyle'

export default function Modal({ list, closeModal, alertTxt }) {

  // 테스트를 위해 넣어둔 값. 나중에 지울 부분입니다.
  // const list = ['삭제', '수정', '웹사이트에서 상품 보기'];
  // const list2 = ['채팅방 나가기', '신고하기'];
  // const list3 = ['설정 및 개인정보', '로그아웃'];
  const [alert, setAlert] = useState(false)
  const showAlert = () => {
    alert === false ? setAlert(true) : setAlert(false);
    if (Object.keys(list).find(txt => txt === '신고하기' || txt === '웹사이트에서 상품 보기')) {
      setAlert(false);
    }
  }
  const closeAlert = () => {
    setAlert(false)
  }

  return (
    <ModalOver>
      <ModalWrapper>
        <TopSytle onClick={closeModal}></TopSytle>
        <ul>
          {
            Object.keys(list).map((listName, index) => (
              <Link to={list[listName]} key={index}>
                <ModalList key={index} listName={listName} onClick={showAlert}>{listName}</ModalList>
              </Link>
            ))
          }
        </ul>
      </ModalWrapper>
      {alert === true && <DeleteAlert mainTxt={alertTxt[0]} rightBtnTxt={alertTxt[1]} closeAlert={closeAlert}></DeleteAlert>}
    </ModalOver >
  )

}
