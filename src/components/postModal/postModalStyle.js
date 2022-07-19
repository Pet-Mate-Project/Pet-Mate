import styled, { css, keyframes } from "styled-components";
import { palette } from '../../style/globalColor';

const slideUp = keyframes`
from {
  transform: translateY(200px);
}
to{
  transform: translateY(0px);
}
`

const fadeIn = keyframes`
from {
  opacity: 0;
}
to{
  opacity: 1;
}
`

export const ModalOver = styled.div`
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

export const ModalWrapper = styled.div`
background-color: white;
position: fixed;
bottom: 0;
z-index: 10;
  width: 100%;
  padding-bottom: 10px;
  border-radius: 20px 20px 0 0;
  box-sizing: border-box;
  animation: ${slideUp} 0.3s;
`

export const TopSytle = styled.div`
cursor: pointer;
  width: 50px;
  height: 4px;
  background: ${palette.lightGray};
  margin: 16px auto;
`

export const ModalList = styled.li`
  padding: 14px 26px;
  cursor: pointer;

  :hover {
    color: ${palette.textPoint};
  }

  ${(props) => {
    if (props.listName === '삭제' || props.listName === '로그아웃') {
      return css`
        :hover {
          color: ${palette.textRedPoint};
        }
      `
    } else if (props.listName === '신고하기') {
      return css`
        color: ${palette.textRedPoint};
        :hover {
          color: ${palette.textRedPoint};
          font-weight: 600;
        }
      `
    }
  }}
`