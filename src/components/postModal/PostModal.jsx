import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { DeleteAlert } from '../deleteAlert/DeleteAlert'
import { ModalList, ModalWrapper, TopSytle, ModalOver } from './postModalStyle'

export default function Modal({ list, closeModal, alertTxt, setModal }) {
  const [alert, setAlert] = useState(false);

  const showAlert = () => {
    setAlert(alert => !alert);
    Object.keys(list).find(txt => txt === '웹사이트에서 상품 보기')
      ? setAlert(false) : setAlert(true)
  };
  const closeAlert = () => {
    setAlert(false);
  };

  return (
    <ModalOver>
      <ModalWrapper>
        <TopSytle onClick={closeModal} />
        <ul>
          {
            Object.keys(list).map((listName, index) => (
              <Link to={list[listName]} key={index}>
                <ModalList
                  key={index}
                  listName={listName}
                  onClick={showAlert}>{listName}
                </ModalList>
              </Link>
            ))
          }
        </ul>
      </ModalWrapper>
      {
        alert === true &&
        <DeleteAlert
          mainTxt={alertTxt[0]}
          rightBtnTxt={alertTxt[1]}
          closeAlert={closeAlert}
          setModal={setModal} />
      }
    </ModalOver >
  );
}
