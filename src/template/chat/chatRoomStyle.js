import styled from "styled-components";

export const ChatRoomWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #D7E7FF;
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
  color: #C4C4C4;
  text-align: right;
  margin-left: auto;

  :hover {
    color: #1D57C1;
  }
`