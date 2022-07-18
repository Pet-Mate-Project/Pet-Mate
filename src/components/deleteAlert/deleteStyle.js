import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
from {
  opacity: 0;
}
to{
  opacity: 1;
}
`

export const AlertOver = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 99;
  animation: ${fadeIn} 1s;
`

export const AlertWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  box-sizing:border-box;
  border-radius:10px;
  border: 1px solid #DBDBDB;
  width:252px;
  height:110px;
`

export const DeleteTxt = styled.strong`
  display:block;
  text-align: center;
  margin : 23px 0;
`

export const BtnTxt = styled.strong`
  display: block;
  text-align:center;
`
export const RedTxt = styled(BtnTxt)`
  color: #FF2F7A;
`

export const DeleteAlertBtn = styled.button`
  box-sizing:border-box;
  cursor: pointer;
  width: 125px;
  height: 46px;
  border-top: 1px solid #DBDBDB;
  &:last-child{
    border-left: 1px solid #DBDBDB;
  }
`