import styled from "styled-components";

export const LeftSpeechBubbleWrapper = styled.div`
  display: flex;
  padding: 0 16px;
  margin: 10px 0;
  gap: 6px;

  :first-of-type{
    margin-top: 48px;
  }
`

export const RightSpeechBubbleWrapper = styled(LeftSpeechBubbleWrapper)`
  flex-direction: row-reverse;
`

export const LeftChat = styled.span`
  max-width: 55%;
  padding: 12px;
  margin-left: 6px;
  font-size: 14px;
  line-height: 17px;
  border: 1px solid #C4C4C4;
  border-radius: 0px 10px 10px 10px;
  word-break: keep-all;
  background-color: white;
`

export const RightChat = styled(LeftChat)`
  border-radius: 10px 0 10px 10px;
  margin-left: 0;
`

export const ChatTime = styled.strong`
  margin-top: auto;
  font-size: 10px;
  line-height: 12px;
  color: #404040;
`