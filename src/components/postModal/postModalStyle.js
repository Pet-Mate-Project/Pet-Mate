import styled, { css } from "styled-components";

export const ModalWrapper = styled.div`
  width: 100%;
  padding-bottom: 10px;
  border-radius: 10px 10px 0 0;
  box-sizing: border-box;
`

export const TopSytle = styled.div`
  width: 50px;
  height: 4px;
  background: #DBDBDB;
  margin: 16px auto;
`

export const ModalList = styled.li`
  padding: 14px 26px;
  cursor: pointer;

  :hover {
    color: #002D7D;
  }

  ${(props) => {
    if (props.listName === '삭제' || props.listName === '로그아웃') {
      return css`
        :hover {
          color: #FF2F7A;
        }
      `
    } else if (props.listName === '신고하기') {
      return css`
        color: #FF2F7A;
        :hover {
          color: #FF2F7A;
          font-weight: 600;
        }
      `
    }
  }}
`