import React from 'react'
import { AllWrap } from '../../style/commonStyle'
import { ModalList, ModalWrapper, TopSytle } from './postModalStyle'

export default function Modal() {

  // 테스트를 위해 넣어둔 값. 나중에 지울 부분입니다.
  const list = ['삭제', '수정', '웹사이트에서 상품 보기'];
  const list2 = ['채팅방 나가기', '신고하기'];
  const list3 = ['설정 및 개인정보', '로그아웃'];

  return (
    <ModalWrapper>
      <TopSytle></TopSytle>
      <ul>
        {
          list3.map((listName, index) => (
            <ModalList key={index} listName={listName}>{listName}</ModalList>
          ))
        }
      </ul>
    </ModalWrapper>
  )

}
