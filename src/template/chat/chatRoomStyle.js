import styled from "styled-components";
import { palette } from '../../style/globalColor';

export const ChatRoomWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #EDEDED;
`

export const ChatInputWrapper = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  display: flex;
  gap: 20px;
  padding: 10px 16px;
  box-sizing: border-box;
  background-color: white;
`

export const ChatInput = styled.input`
  width: 90%;
  border: none;

  :focus {
    outline: none;
  }
`

export const ChatButton = styled.button`
  width: 40px;
  font-size: 14px;
  line-height: 17px;
  color: ${palette.middleGray};
  text-align: right;
  margin-left: auto;

  :hover {
    color: ${palette.mainColor};
  }
`